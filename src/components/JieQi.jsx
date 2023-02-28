import { Solar, Lunar } from 'lunar-javascript';
import { useEffect, useState } from 'react';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

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
  const [baseDate, setBaseDate] = useState(new Date());
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
    const x = Lunar.fromDate(
      new Date(Lunar.fromDate(date).getPrevJieQi().getSolar().next(-1))
    ).getPrevJieQi();
    return x;
  };

  const add3DayHelper = (date) => {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + 3);
    return dateCopy;
  };

  useEffect(() => {
    setBaseDate(
      new Date(Lunar.fromDate(new Date()).getPrevJieQi().getSolar().toYmd())
    );
    setCurrentJieQi(Lunar.fromDate(new Date()).getPrevJieQi().getName());
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
    let prev = prevJieQiHelper(add3DayHelper(baseDate));
    setPrevSentence(prev.getName() + ' ' + prev.getSolar().toYmd());
    let next = Lunar.fromDate(add3DayHelper(baseDate)).getNextJieQi();
    setNextSentence(next.getName() + ' ' + next.getSolar().toYmd());
    // console.log(baseDate);
  }, [baseDate]);

  //   console.log(currentJieQi.getName());

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div
        className='h-screen w-[4%] flex items-center bg-slate-400'
        onClick={() => goToPrevJieQi()}
      >
        <BiSkipPrevious size={30} />
      </div>

      <div className='w-full h-full bg-green-200 grid grid-cols-5'>
        <div className='col-span-3'>
          <div className=''>{currentJieQi}</div>
          <div>{}</div>
        </div>

        <div className='col-span-2'>
          <div className=''>
            <p>上一节气：</p>
            <p>{prevSentence}</p>
            <p>下一节气：</p>
            <p>{nextSentence}</p>
          </div>
        </div>
      </div>

      <div
        className='h-screen w-[4%] flex items-center bg-slate-400'
        onClick={() => goToNextJieQi()}
      >
        <BiSkipNext size={30} />
      </div>
    </div>
  );
}
