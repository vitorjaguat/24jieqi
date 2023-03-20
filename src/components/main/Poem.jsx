import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function Poem({ current }) {
  const { t } = useTranslation('terms');
  const { t: t1 } = useTranslation('common');
  const [poemArr, setPoemArr] = useState([]);

  useEffect(() => {
    let poemData = [];

    for (let i = 1; i <= 10; i++) {
      let poemP = t(`${current}.poem.text.p${i}`);
      if (poemP && poemP !== `${current}.poem.text.p${i}`) {
        poemData.push(poemP);
      }
      setPoemArr([...poemData]);
    }
  }, [current, t, setPoemArr]);

  return (
    <div className='w-full bg-green-100 pt-20 flex flex-col items-center'>
      <div className='md:max-w-[1000px] '>
        <div className='px-6 md:px-20'>
          <h1 className='text-5xl text-center pb-10 font-bold font-mashanzhang tracking-wider'>
            {t1('poem.poem')}
          </h1>
          <p className='pb-4'>
            Ao longo de muitas dinastias, os poetas chineses deixaram escritos
            textos em que descrevem os fenômenos naturais que costumam acontecer
            em cada termo solar. Nesses poemas, os autores falam das mudanças na
            paisagem, muitas vezes entrelaçadas com mudanças subjetivas e também
            nos hábitos cotidianos, associadas à chegada de um novo período.
            Natureza e cultura são descritas em versos, com o poder de síntese
            particulares da língua chinesa e com o estilo singular de cada
            autor.
          </p>
          <p className='pb-4'>
            No poema abaixo, temos um exemplo de representação literária do
            termo solar {current}.
          </p>
          <div className='border mt-10 w-fit py-2 px-4 gap-x-2 md:gap-x-6 rounded-md grid grid-cols-2 bg-[#FFFFFF50] mx-auto text-sm md:text-base'>
            <span>Título: </span>
            <span className='font-bold'>
              {t(`${current}.poem.title-trans`)}
            </span>

            <span>Título original: </span>
            <span className='font-bold'>{t(`${current}.poem.title`)}</span>

            <span>Autor: </span>
            <span className='font-bold'>
              {t(`${current}.poem.author-trans`)} {t(`${current}.poem.author`)}
            </span>

            <span>Período histórico: </span>
            <span className='font-bold'>{t(`${current}.poem.date`)}</span>
          </div>
        </div>
        <div className='p-10'>
          <div className='md:grid md:grid-cols-5 md:w-full md:h-full items-center md:px-20 bg-gradient-to-b md:bg-gradient-to-l from-[#ffffff95] md:from-[#ffffff] to-transparent'>
            <div className='md:w-full md:h-full md:col-span-2 flex justify-center items-center'>
              <div className='w-full md:h-[70%] flex  justify-center items-center px-10 pt-16 md:p-20 md:pl-0 overflow-hidden'>
                <div className='flex flex-row-reverse justify-center items-center'>
                  {poemArr.map((p, i) => (
                    <p
                      key={i}
                      className='font-mashanzhang text-xl'
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className='md:w-full md:col-span-3 flex justify-center items-center'>
              <div className='w-full h-full'>
                <div className='p-6 py-16 md:max-w-[700px] mx-auto md:px-20'>
                  <div className=''>
                    <p className=''>{t(`${current}.poem.now`)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className='w-full bg-green-300 py-20'>
    //   <div className='max-w-[1000px] mx-auto p-20 bg-[#00000010] rounded-xl'>
    //     <div className='flex justify-center items-center p-6'>
    // <p
    //   className='font-mashanzhang text-xl'
    //   style={{ writingMode: 'vertical-rl' }}
    // >
    //   床前明月光
    // </p>
    // <p
    //   className='font-mashanzhang text-xl'
    //   style={{ writingMode: 'vertical-rl' }}
    // >
    //   疑是地上霜
    // </p>
    //       <p>(poema)</p>
    //     </div>
    //   </div>
    // </div>

    // <div className='flex justify-center items-center'>
    //   <p
    //     className='font-mashanzhang text-xl'
    //     style={{ writingMode: 'vertical-rl' }}
    //   >
    //     床前明月光
    //   </p>
    //   <p
    //     className='font-mashanzhang text-xl'
    //     style={{ writingMode: 'vertical-rl' }}
    //   >
    //     疑是地上霜
    //   </p>
    //   <p>(poema)</p>
    // </div>
  );
}
