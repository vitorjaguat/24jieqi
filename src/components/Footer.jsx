import { useState, useEffect } from 'react';

export default function Footer() {
  const [h, setH] = useState(40);
  const [perc, setPerc] = useState(1);

  const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const handlePerc = (e) => {
    const totalWidth = window.innerWidth;
    // const oneDivW = totalWidth/24
    setPerc(scale(e.clientX, 0, totalWidth, 0, 100));
    console.log(perc);
  };

  const handleHeight = (perc, n) => {
    return scale(perc, 0, 100, 10, 40);
  };

  useEffect(() => {
    const handleHeight = (perc, n) => {
      //   if (n === 1) {
      //     return scale(perc, 0, perc/24*n, 10, 40);
      //   } else {
      //     return 10;
      //   }
      return scale(perc, (perc / 24) * n, (perc / 24) * n + perc, 10, 40);
    };
  }, [perc]);

  //   useEffect(() => {
  //     const footer = document.getElementById('footer');
  //     const handleHeight = () => {
  //       footer.addEventListener('mousemove', (e) => {
  //         console.log(e);
  //       });
  //       handleHeight();
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const handleShadow = () => {
  //       if (window.scrollY >= 90) {
  //         setShadow(true);
  //       } else {
  //         setShadow(false);
  //       }
  //     };
  //     window.addEventListener('scroll', handleShadow);
  //   }, []);

  return (
    <div
      id='footer'
      onMouseMove={(e) => handlePerc(e)}
      className='bg-slate-100'
    >
      <div className=' py-5 px-10'>
        <div className='mx-auto flex items-end justify-between'>
          <div className=''>24节气</div>
          <div className=''>2023</div>
        </div>
      </div>

      {/* <div className='w-full flex items-end'>
        <div
          className='w-full h-20 bg-red-200'
          style={{ height: handleHeight(perc, 1) + 'px' }}
        ></div>
        <div
          className='w-full bg-red-300'
          style={{ height: handleHeight(perc, 2) + 'px' }}
        ></div>
        <div
          className='w-full bg-red-400'
          style={{ height: handleHeight(perc, 3) + 'px' }}
        ></div>
        <div
          className='w-full bg-red-500'
          style={{ height: handleHeight(perc, 4) + 'px' }}
        ></div>
        <div
          className='w-full bg-red-600'
          style={{ height: handleHeight(perc, 5) + 'px' }}
        ></div>
        <div
          className='w-full bg-red-700'
          style={{ height: handleHeight(perc, 6) + 'px' }}
        ></div>
        <div
          className='w-full bg-red-800'
          style={{ height: handleHeight(perc, 7) + 'px' }}
        ></div>
      </div> */}
    </div>
  );
}
