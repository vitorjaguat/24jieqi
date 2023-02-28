import { Solar, Lunar } from 'lunar-javascript';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    setBaseDate(Lunar.fromDate(new Date()));
    setCurrentJieQi(Lunar.fromDate(new Date()).getPrevJieQi().getName());
  }, []);

  //   let prev = today.next(-14).getPrevJieQi(); doesn't work properly!

  const prevJieQiHelper = (date) => {
    const x = Lunar.fromDate(
      new Date(Lunar.fromDate(date).getPrevJieQi().getSolar().next(-1))
    ).getPrevJieQi();
    return x;
  };

  let prev = prevJieQiHelper(new Date());
  let prevSentence = prev.getName() + ' ' + prev.getSolar().toYmd();
  let next = today.getNextJieQi();
  let nextSentence = next.getName() + ' ' + next.getSolar().toYmd();

  return (
    <div className='w-screen h-screen'>
      <div className='h-full mx-12 bg-green-200 grid grid-cols-5'>
        <div className='col-span-3'>
          <div className=''>{todayJieQi}</div>
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
    </div>
  );
}
