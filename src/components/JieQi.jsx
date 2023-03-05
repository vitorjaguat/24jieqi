import { Solar, Lunar } from 'lunar-javascript';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { GiFlowerPot } from 'react-icons/gi';

const DUMMY = {
  立春: {
    title: '立春',
    poem: '立春poem',
    text: '立春text',
  },
  雨水: {
    title: '雨水',
    poem: '雨水poem',
    text: '雨水text',
  },
  惊蛰: {
    title: '惊蛰',
    poem: '惊蛰poem',
    text: '惊蛰text',
  },
};

export default function JieQi() {
  const [baseDate, setBaseDate] = useState(null);
  const [currentJieQi, setCurrentJieQi] = useState(null);
  const [prevSentence, setPrevSentence] = useState('');
  const [nextSentence, setNextSentence] = useState('');
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
    <div className='w-screen h-screen flex justify-center items-stretch bg-green-200'>
      {/* skip previous  */}
      <div
        className='h-screen w-[4%] flex justify-center items-center bg-slate-400 cursor-pointer'
        onClick={() => goToPrevJieQi()}
      >
        <BiSkipPrevious size={30} />
      </div>

      <div className='w-full h-screen flex flex-col justify-start'>
        <div className='w-full h-[45%] grid grid-cols-5'>
          <div className='col-span-3 flex justify-center items-center'>
            <p className='text-[210px] ml-[-200px] font-mashanzhang'>
              {currentJieQi}
            </p>
          </div>

          <div className='col-span-2 text-center flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <p>节气 anterior:</p>
              <p>{prevSentence}</p>
              <p>próximo 节气:</p>
              <p>{nextSentence}</p>
            </div>
          </div>
        </div>

        <div className='w-full h-[55%] grid grid-cols-3'>
          <div className='col-span-1 flex justify-center items-center'>
            <div className='flex justify-center items-center'>
              <p style={{ writingMode: 'vertical-rl' }}>床前明月光</p>
              <p style={{ writingMode: 'vertical-rl' }}>疑是地上霜</p>
              <p>(poema)</p>
            </div>
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <div className='flex justify-center items-center'>
              <GiFlowerPot size={250} color='grey' />
            </div>
          </div>

          <div className='col-span-1'>
            <p className='p-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quod
              veniam necessitatibus accusamus harum doloribus ad, deleniti
              maiores, ducimus perferendis dolores minus tempora est! Esse ullam
              minima molestias sequi voluptas ipsum reiciendis, facilis
              voluptate quas doloribus quos vel. Aliquam, aperiam quia laborum a
              ut unde alias ipsum soluta totam delectus consequuntur deserunt
              voluptate sunt cupiditate distinctio eius? Voluptate, possimus
              amet!
              <div className='text-end'>
                <Link href={'#'}>...leia mais</Link>
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* skip next */}
      <div
        className='h-screen w-[4%] flex justify-center items-center bg-slate-400 cursor-pointer'
        onClick={() => goToNextJieQi()}
      >
        <BiSkipNext size={30} />
      </div>
    </div>
  );
}
