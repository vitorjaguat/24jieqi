import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import ColorGrid from './ColorGrid';

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
        <div className='w-full h-full grid grid-cols-3'>
          <div className='col-span-2 flex flex-col justify-center items-center'>
            <p className='text-[120px] md:text-[150px] lg:text-[200px] font-mashanzhang'>
              {jieqi}
            </p>
            {t(`${jieqi}.name-py`) !== '' ? (
              <p className='italic'>{t(`${jieqi}.name-py`)}</p>
            ) : (
              ''
            )}
            {t(`${jieqi}.name-py`) !== '' ? (
              <p className='md:text-lg'>{t(`${jieqi}.name-trans`)}</p>
            ) : (
              ''
            )}
          </div>

          <div className='h-full col-span-1 flex flex-col items-center justify-end py-10 mx-auto'>
            <ColorGrid current={jieqi} />
          </div>

          {/* <div className='col-span-1 flex items-end justify-center py-10'></div> */}
        </div>
      </div>
    </div>
  );
}
