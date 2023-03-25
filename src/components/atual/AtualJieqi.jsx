import { Solar, Lunar } from 'lunar-javascript';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { GiFlowerPot } from 'react-icons/gi';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Imagem from '../components/main/Imagem';
import Main from '../components/main/Main';
import Poem from '../components/main/Poem';
import Text from '../components/main/Text';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Colors from '@/components/main/Colors';

export default function JieQi_() {
  const { t } = useTranslation('terms');

  const [baseDate, setBaseDate] = useState(null);
  const [currentJieQi, setCurrentJieQi] = useState(null);
  const [prevSentence, setPrevSentence] = useState('');
  const [nextSentence, setNextSentence] = useState('');
  const [current, setCurrent] = useState(currentJieQi ? currentJieQi : '惊蛰');
  useEffect(() => {
    setCurrent((prev) => currentJieQi);
  }, [currentJieQi]);
  //timezone -> China timezone helper:
  //   const intlDateObj = new Intl.DateTimeFormat('en', {
  //     timeZone: 'Asia/Shanghai',
  //   });
  //   const timezoneHelper = (date) => {
  //     intlDateObj.format(date);
  //   };

  const prevJieQiHelper = (date) => {
    if (!date) return;
    const x = Lunar.fromDate(
      new Date(Lunar.fromDate(date).getPrevJieQi().getSolar().next(-1))
    ).getPrevJieQi();
    return x;
  };

  const add3DayHelper = (date) => {
    if (!date) return;
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + 3);
    return dateCopy;
  };

  useEffect(() => {
    setBaseDate(
      new Date(Lunar.fromDate(new Date()).getPrevJieQi().getSolar().toYmd())
    );
    setCurrentJieQi(Lunar.fromDate(new Date()).getPrevJieQi().getName());
    if (!baseDate) return;
    let prev = prevJieQiHelper(baseDate);
    setPrevSentence(prev.getName() + ' ' + prev.getSolar().toYmd());
    let next = Lunar.fromDate(baseDate).getNextJieQi();
    setNextSentence(next.getName() + ' ' + next.getSolar().toYmd());
  }, []);

  const goToPrevJieQi = () => {
    setBaseDate(
      new Date(Lunar.fromDate(baseDate).getPrevJieQi().getSolar().toYmd())
    );
    setCurrentJieQi(Lunar.fromDate(baseDate).getPrevJieQi().getName());
  };

  const goToNextJieQi = () => {
    setBaseDate(
      new Date(
        Lunar.fromDate(add3DayHelper(baseDate))
          .getNextJieQi()
          .getSolar()
          .toYmd()
      )
    );
    setCurrentJieQi(
      Lunar.fromDate(add3DayHelper(baseDate)).getNextJieQi().getName()
    );
  };

  useEffect(() => {
    if (!baseDate) return;
    let prev = prevJieQiHelper(add3DayHelper(baseDate));
    setPrevSentence(prev.getName() + ' ' + prev.getSolar().toYmd());
    let next = Lunar.fromDate(add3DayHelper(baseDate)).getNextJieQi();
    setNextSentence(next.getName() + ' ' + next.getSolar().toYmd());
    // console.log(baseDate);
  }, [baseDate]);

  //   console.log(currentJieQi.getName());

  return (
    <div className='w-screen'>
      <div className='w-screen'>
        {/* skip previous2 */}
        <div
          className='fixed w-[4%] top-[48%] left-[2%] flex cursor-pointer'
          onClick={() => goToPrevJieQi()}
        >
          <GrPrevious size={25} />
        </div>
        {/* <p>{t(`${current}.colors.one.hex`)}</p> */}
        <Main
          currentJieQi={currentJieQi}
          prevSentence={prevSentence}
          nextSentence={nextSentence}
          current={current}
        />

        <div className='md:grid md:grid-cols-5 md:w-full md:h-full md:bg-green-100 items-center'>
          <div className='md:w-full md:col-span-3 flex justify-center items-center'>
            <Text current={current} />
          </div>
          <div className='md:w-full md:h-full md:col-span-2 flex justify-center items-center'>
            <Imagem current={current} />
          </div>
        </div>

        <Colors current={current} />
        <Poem current={current} />

        {/* skip next2 */}
        <div
          className='fixed w-[4%] top-[48%] right-[2%] cursor-pointer flex justify-end'
          onClick={() => goToNextJieQi()}
        >
          <GrNext size={25} />
        </div>
      </div>
    </div>
  );
}
