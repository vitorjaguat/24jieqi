import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import ColorGrid from '../main/ColorGrid';

const DUMMYcolors = {
  立春: ['#FFF799', '#FFEE6F', '#ECD452', '#B6A014'],
  雨水: ['#F9D3E3', '#ECB0C1', '#DD7694', '#A76283'],
  惊蛰: ['#BA5B49', '#A64036', '#9E2A22', '#7C191E'],
};
// const DUMMYcolors = {
//   立春: '#FFF799',
//   雨水: '#F9D3E3',
//   惊蛰: '#BA5B49',
// };

export default function Main({ jieqi }) {
  const { t } = useTranslation('terms');

  const [bgColor, setBgColor] = useState('bg-red-300');
  useEffect(() => {
    setBgColor((prev) => {
      return t(`${jieqi}.colors.1.hex`);
    });
  }, [jieqi]);

  console.log(t(`${jieqi}.colors.1.hex`));

  return (
    <div
      className={'w-screen h-screen flex justify-center items-center '}
      style={{ backgroundColor: bgColor }}
    >
      <div className='w-[90%] md:max-w-[1200px] h-[80%] flex flex-col bg-[#00000020] rounded-xl'>
        <div className='w-full h-full grid grid-cols-4'>
          <div className='h-full col-span-1 flex flex-col items-center justify-start py-10 mx-auto'>
            <ColorGrid current={jieqi} />
          </div>

          <div className='col-span-2 flex justify-center items-center'>
            <p className='text-[100px] md:text-[150px] lg:text-[200px] font-mashanzhang text-center'>
              {jieqi}
            </p>
          </div>

          <div className='col-span-1 flex items-end justify-center py-10'></div>
        </div>
      </div>
    </div>
  );
}
