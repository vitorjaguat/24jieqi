import { Solar, Lunar } from 'lunar-javascript';

export default function CalendarTest() {
  //   const dia = Lunar.fromYmd(2023, 2, 25);
  // console.log(dia.getJieQiTable());

  var y = Solar.fromDate(new Date(2028, 9, 9));
  console.log(y.isLeapYear());
  console.log(y);

  //Previous and next jieqi:
  let d = Lunar.fromDate(new Date());
  let prev = d.getPrevJieQi();
  let next = d.getNextJieQi();
  let prevSentence =
    '上一节气：' + prev.getName() + ' ' + prev.getSolar().toYmdHms();
  let nextSentence =
    '下一节气：' + next.getName() + ' ' + next.getSolar().toYmdHms();
  //   console.log(prevSentence);
  //   console.log(nextSentence);

  return (
    <>
      <div className='w-full h-[30vh] flex justify-center items-center'>
        <div className='flex'>
          <p style={{ writingMode: 'vertical-rl' }}>床前明月光</p>
          <p style={{ writingMode: 'vertical-rl' }}>疑是地上霜</p>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div>{prevSentence}</div>
        <div>{nextSentence}</div>
      </div>
    </>
  );
}

//chinese vertical writing:
// https://codepen.io/tmac/pen/BLGRqN
