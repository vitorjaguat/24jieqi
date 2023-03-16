import { Solar, Lunar } from 'lunar-javascript';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { GiFlowerPot } from 'react-icons/gi';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Imagem from './Imagem';
import Main from './Main';
import Poem from './Poem';
import Text from './Text';
import ColorGrid from './ColorGrid';

export default function JieQi_() {
  const [baseDate, setBaseDate] = useState(null);
  const [currentJieQi, setCurrentJieQi] = useState(null);
  const [prevSentence, setPrevSentence] = useState('');
  const [nextSentence, setNextSentence] = useState('');

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
  }, [baseDate]);

  return (
    <div className='w-screen'>
      <div className='w-screen bg-green-200'>
        {/* skip previous2 */}
        <div
          className='fixed w-[4%] top-[48%] left-[2%] flex cursor-pointer'
          onClick={() => goToPrevJieQi()}
        >
          <GrPrevious size={25} />
        </div>

        <Main
          currentJieQi={currentJieQi}
          prevSentence={prevSentence}
          nextSentence={nextSentence}
        />

        <ColorGrid />

        <div className='md:grid md:grid-cols-5 md:w-full md:h-full md:bg-green-100'>
          <div className='md:w-full md:col-span-3'>
            <Text />
          </div>
          <div className='md:w-full md:col-span-2'>
            <Imagem />
          </div>
        </div>
        <Poem />

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
