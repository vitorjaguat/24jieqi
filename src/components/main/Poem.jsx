import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function Poem({ current }) {
  const { t } = useTranslation('terms');
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
    <div className='md:grid md:grid-cols-5 md:w-full md:h-full md:bg-green-100 items-center'>
      <div className='md:w-full md:h-full md:col-span-2 flex justify-center items-center'>
        <div className='w-full md:h-[70%] bg-green-100 flex justify-center items-center px-10 pt-16 md:p-20 md:pl-0 overflow-hidden'>
          <div className='flex justify-center items-center'>
            {poemArr.map((p) => (
              <p
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
        <div className='w-full h-full bg-green-100 '>
          <div className='p-6 py-16 md:max-w-[700px] mx-auto md:px-20 bg-gradient-to-t md:bg-gradient-to-l from-[#ffffff95] md:from-[#ffffff] to-transparent'>
            <div className=''>
              <p className=''>{t(`${current}.poem.now`)}</p>
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
