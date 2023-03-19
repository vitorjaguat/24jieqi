import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import ColorGrid from './ColorGrid';

export default function Main({
  currentJieQi,
  prevSentence,
  nextSentence,
  current,
}) {
  const { t } = useTranslation('terms');
  const { t: t2 } = useTranslation('common');

  const [bgColor, setBgColor] = useState('bg-red-300');
  useEffect(() => {
    setBgColor((prev) => {
      return t(`${current}.colors.1.hex`);
    });
  }, [current]);

  return (
    <div
      className={'w-screen h-screen flex justify-center items-center '}
      style={{ backgroundColor: bgColor }}
    >
      <div className='w-full md:max-w-[1200px] h-[80%] flex-col bg-[#00000020] grid grid-cols-4'>
        {/* <div className='  absolute top-[10%] left-[5%] bottom-[10%] right-[5%] opacity-20 bg-green-800 rounded-xl'></div> */}

        <div className='col-span-1 flex flex-col items-center justify-between py-10'>
          <div className=''>
            <ColorGrid current={current} />
          </div>

          <div className='pl-2 md:pl-0 flex flex-col text-sm md:text-md'>
            <p>{t2('main.previous')}</p>
            <p>{prevSentence}</p>
          </div>
        </div>

        <div className='col-span-2 flex flex-col justify-center items-center'>
          <p className='text-[100px] md:text-[150px] lg:text-[200px] font-mashanzhang text-center'>
            {currentJieQi}
          </p>
          {t(`${currentJieQi}.name-py`) !== '' ? (
            <p className='italic'>{t(`${currentJieQi}.name-py`)}</p>
          ) : (
            ''
          )}
          {t(`${currentJieQi}.name-py`) !== '' ? (
            <p className='text-md font-bold'>
              {t(`${currentJieQi}.name-trans`)}
            </p>
          ) : (
            ''
          )}
        </div>

        <div className='col-span-1 flex items-end justify-center pb-10'>
          <div className='pr-2 md:pr-0 flex flex-col justify-center items-end text-sm md:text-md'>
            <p>{t2('main.next')}</p>
            <p>{nextSentence}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
