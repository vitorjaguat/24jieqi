// import mainImg from '../../../public/mainImg.svg';

export default function IntroMain({
  currentJieQi,
  prevSentence,
  nextSentence,
}) {
  return (
    <div className='bg-slate-200'>
      <div className="w-screen h-screen flex justify-center items-center bg-[url('/mainImg2.svg')] bg-no-repeat bg-cover ">
        <div className='w-[90%] md:max-w-[1200px] h-[80%] flex flex-col rounded-xl overflow-hidden'>
          <div className='w-full h-full grid grid-cols-12 pt-10'>
            <div
              className='col-span-1 flex justify-center items-center'
              style={{ writingMode: 'vertical-lr' }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>

            <div className='col-span-6 flex justify-center items-center'>
              <p
                className='text-[80px] md:text-[110px] lg:text-[130px] font-mashanzhang text-center'
                // style={{ writingMode: 'vertical-rl' }}
              >
                24节气
              </p>
            </div>

            <div className='col-span-5 flex flex-col justify-around items-center text-[16px] text-right'>
              <div className='p-2 w-full'>
                Em cada ano, o mundo inteiro é influenciado pelo ciclo das 4
                Estações
              </div>
              <div className='p-2 w-full'>
                Há milênios, os chineses dividem cada estação do ano em 6
                períodos
              </div>
              <div className='p-2 w-full'>
                Esses períodos se chamam "termos solares", e aqui você vai
                conhecer um a um
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
