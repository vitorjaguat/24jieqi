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
      className='py-16 w-screen h-screen flex justify-center items-center '
      style={{ backgroundColor: bgColor }}
    >
      <div className='w-full md:max-w-[1200px] bg-[#00000010] grid grid-rows-4 px-6 md:px-16'>
        <div className='row-span-1 flex items-center justify-center py-10'>
          <div className=''>
            <ColorGrid current={current} />
          </div>
        </div>

        <div className='row-span-2 flex flex-col justify-center items-center'>
          <p className='text-[110px] md:text-[150px] lg:text-[200px] font-mashanzhang text-center'>
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

        <div className='w-full h-full row-span-1 flex items-center justify-between pt-6 md:pt-0'>
          <div className='pl-2 md:pl-0 flex flex-col text-sm md:text-md'>
            <p>{t2('main.previous')}</p>
            <p>{prevSentence}</p>
          </div>
          <div className='pr-2 md:pr-0 flex flex-col justify-center items-end text-sm md:text-md'>
            <p>{t2('main.next')}</p>
            <p>{nextSentence}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
