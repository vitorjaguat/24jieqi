// import mainImg from '../../../public/mainImg.svg';
// import Sketch from 'react-p5';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});
import p5 from 'p5';
import { draw, setup } from './sketch';

export default function IntroMainp5({
  currentJieQi,
  prevSentence,
  nextSentence,
}) {
  const ref = useRef();

  const sketch = (container) => {
    return (p) => {
    let gifLenght = 300; // 180 / 30 frames per second == 3 seconds
    let canvas;

    const screenW = 400;
    const screenH = 400;
    const x = screenW / 2;
    const y = screenH / 2;
    const diameter = screenH * 0.7;
    let points = [];
    let droplets_on_screen = [];
    const radius_inc = 0.3;
    let seed_offset = 50;
    const angle_inc = 0.4;

    // RENDER GIF
    const render_gif = false;

    class Droplet {
      constructor(x, y, diameter) {
        this.posX = x;
        this.posY = y;

        this.end_diameter = diameter;
        this.start_diameter = diameter * 2;
        this.diameter = this.start_diameter;
        this.reverse = false;
        this.pause = false;
      }

      tick() {
        const diameter_inc = 0.2;

        if (!this.pause) {
          if (this.reverse) {
            if (this.diameter < this.start_diameter) {
              this.diameter = this.diameter + diameter_inc;
            } else {
              this.reverse = false;
              this.pause = true;
            }
          } else {
            if (this.diameter > this.end_diameter) {
              this.diameter = this.diameter - diameter_inc;
            } else {
              this.reverse = true;
              this.pause = true;
            }
          }
        }
      }

      p.draw() {
        p.noStroke();
        p.fill('red');
        const offset = 1;
        p.ellipse(this.posX + offset, this.posY - offset, this.diameter);
        p.fill('orange');
        p.ellipse(this.posX, this.posY, this.diameter);
      }
    }

    p.setup() {
      const p5Canvas = p.createCanvas(screenW, screenH).parent(container);
      canvas = p5Canvas.canvas;

      if (render_gif) {
        capturer.start();
      }

      p.angleMode(p.DEGREES);

      // noLoop()

      function generatePoints() {
        const max_radius = diameter / 2;
        const min_radius = max_radius * 0.02;
        let offset = 1;
        let angle = 0;

        for (
          let radius = min_radius;
          radius <= max_radius;
          radius = radius + radius_inc
        ) {
          offset = offset + seed_offset;
          angle = angle + angle_inc;
          let point_diameter = radius / 15;
          let cx = x - radius * p.sin(angle + offset);
          let cy = y - radius * p.cos(angle + offset);

          points.push({
            posX: cx,
            posY: cy,
            diameter: point_diameter,
          });
        }
      }

      p.frameRate(15);
      generatePoints();
    }

    p.draw() {
      p.background('lightblue');

      if (points.length == 0) {
        // console.log('ENDED!')
        // noLoop()
      } else {
        for (let index = 0; index < 10; index++) {
          if (points.length > 0) {
            const point_data = points.pop();
            // console.log(points.length)

            const droplet = new Droplet(
              point_data.posX,
              point_data.posY,
              point_data.diameter
            );
            droplets_on_screen.push(droplet);
          }
        }
      }

      droplets_on_screen.forEach((droplet) => {
        droplet.tick();
        droplet.draw(p);
      });

      if (droplets_on_screen.every((droplet) => droplet.pause)) {
        droplets_on_screen.forEach((droplet) => {
          droplet.pause = false;
        });
      }

      if (render_gif) {
        if (frameCount < gifLenght) {
          capturer.capture(canvas);
        } else {
          capturer.stop();
          capturer.save();
        }
      }
      }
    }
}
    }
  

  useEffect(() => {
    const sketchOK = new p5(sketch(ref.current))
    return () => sketch.remove()
  }, [])

  return (
    <div className='bg-[lightblue]'>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-[90%] md:max-w-[1200px] h-[80%] flex flex-col rounded-xl overflow-hidden z-10'>
          <div className='w-full h-full grid grid-cols-12 pt-10'>
            <div
              className='col-span-1 flex justify-center items-center'
              style={{ writingMode: 'vertical-lr' }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>

            <div
              className='col-span-6 flex justify-center items-center'
              ref={ref}
            >
              <p
                className='text-[80px] md:text-[110px] lg:text-[130px] font-mashanzhang text-center'
                // style={{ writingMode: 'vertical-rl' }}
              >
                {/* 24节气 */}
              </p>
              <Sketch setup={setup} draw={draw} />
            </div>

            <div className='col-span-5 flex flex-col justify-around items-center text-[16px] text-right'>
              <div className='p-2 w-full'>
                Em cada ano, o mundo inteiro é influenciado pelo ciclo das 4
                Estações
              </div>
              <div className='p-2 w-full'>
                Há milênios, os chineses dividem cada estação do ano em 6
                períodos
              </div>
              <div className='p-2 w-full'>
                Esses períodos se chamam &quot;termos solares&quot;, e aqui você
                vai conhecer um a um
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
