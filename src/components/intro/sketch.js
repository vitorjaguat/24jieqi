// function sketch(p5) {
//   p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

//   p5.draw = () => {
//     p5.background(250);
//     p5.normalMaterial();
//     p5.push();
//     p5.rotateZ(p5.frameCount * 0.01);
//     p5.rotateX(p5.frameCount * 0.01);
//     p5.rotateY(p5.frameCount * 0.01);
//     p5.plane(100);
//     p5.pop();
//   };
// }

// export default sketch;

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

  draw(p5) {
    p5.noStroke();
    p5.fill('red');
    const offset = 1;
    p5.ellipse(this.posX + offset, this.posY - offset, this.diameter);
    p5.fill('orange');
    p5.ellipse(this.posX, this.posY, this.diameter);
  }
}

function setup(p5, canvasParentRef) {
  const p5Canvas = p5.createCanvas(screenW, screenH).parent(canvasParentRef);
  canvas = p5Canvas.canvas;

  if (render_gif) {
    capturer.start();
  }

  p5.angleMode(p5.DEGREES);

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
      let cx = x - radius * p5.sin(angle + offset);
      let cy = y - radius * p5.cos(angle + offset);

      points.push({
        posX: cx,
        posY: cy,
        diameter: point_diameter,
      });
    }
  }

  p5.frameRate(15);
  generatePoints();
}

function draw(p5) {
  p5.background('lightblue');

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
    droplet.draw(p5);
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

export { draw, setup };
