// import mainImg from '../../../public/mainImg.svg';

export default function IntroMain({
  currentJieQi,
  prevSentence,
  nextSentence,
}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('/mainImg2.svg')] bg-no-repeat bg-cover ">
      <div className='w-[90%] md:max-w-[1200px] h-[80%] flex flex-col rounded-xl overflow-hidden'>
        <div className='w-full h-full grid grid-cols-3 pt-10'>
          <div
            className='col-span-1 flex justify-center items-center'
            style={{ writingMode: 'vertical-lr' }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <p className='text-[80px] md:text-[110px] lg:text-[130px] font-mashanzhang text-center'>
              24节气
            </p>
          </div>

          <div className='col-span-1 flex flex-col justify-around items-center text-[10px] text-right'>
            <div className='p-2 w-full'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              nisi!
            </div>
            <div className='p-2 w-full'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              nisi!
            </div>
            <div className='p-2 w-full'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              nisi!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
