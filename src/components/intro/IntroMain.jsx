export default function Main({ currentJieQi, prevSentence, nextSentence }) {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-green-200'>
      <div className='w-[90%] md:max-w-[1200px] h-[80%] flex flex-col bg-[#00000020] rounded-xl'>
        <div className='w-full h-full grid grid-cols-4 relative'>
          {/* <div className='  absolute top-[10%] left-[5%] bottom-[10%] right-[5%] opacity-20 bg-green-800 rounded-xl'></div> */}

          <div className='col-span-1 flex items-end justify-center pb-10'>
            <div className='pl-2 md:pl-0 flex flex-col text-sm md:text-md'>
              {/* <p>节气 anterior:</p>
              <p>{prevSentence}</p> */}
            </div>
          </div>

          <div className='col-span-2 flex justify-center items-center'>
            <p className='text-[100px] md:text-[210px] font-mashanzhang text-center'>
              24节气
            </p>
          </div>

          <div className='col-span-1 flex items-end justify-center pb-10'>
            <div className='pr-2 md:pr-0 flex flex-col justify-center items-end text-sm md:text-md'>
              {/* <p>próximo 节气:</p>
              <p>{nextSentence}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
