// import mainImg from '../../../public/mainImg.svg';

import Sun1 from './Sun1';

export default function IntroMain({
  currentJieQi,
  prevSentence,
  nextSentence,
}) {
  return (
    <div className='bg-slate-200'>
      <div className='w-screen h-screen pt-16 flex justify-center items-center  bg-[rgb(98,151,184)] '>
        <div className='w-[90%] md:max-w-[1200px] h-full flex flex-col rounded-xl'>
          <div className='w-full h-full grid grid-cols-12 pt-10'>
            {/* <div
              className='col-span-1 flex justify-center items-center'
              style={{ writingMode: 'vertical-lr' }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div> */}

            <div className='col-span-6 flex justify-center items-center overflow-visible'>
              <Sun1 />
              {/* <p
                className='text-[80px] md:text-[110px] lg:text-[130px] font-mashanzhang text-center'
                // style={{ writingMode: 'vertical-rl' }}
              > 
                24节气
              </p> */}
            </div>

            <div className='col-span-6 flex flex-col justify-around items-center text-[16px] text-center'>
              <div className=''>
                <div className='font-mashanzhang text-9xl text-center text-orange-900'>
                  24节气
                </div>
                <div className='pt-4 font-raleway text-sm text-center tracking-[8px]'>
                  <span className='font-bold'>24</span> termos solares
                </div>
              </div>
              <div className='mx-[22%] font-raleway text-sm text-right'>
                <div className='p-2'>
                  Em cada ano, o mundo inteiro é influenciado pelo ciclo das 4
                  Estações
                </div>
                <div className='p-2'>
                  Há milênios, os chineses dividem cada estação do ano em 6
                  períodos
                </div>
                <div className='p-2 pb-0'>
                  Esses períodos se chamam &quot;termos solares&quot;, e aqui
                  você vai conhecê-los um a um
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
