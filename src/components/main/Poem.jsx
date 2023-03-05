export default function Poem() {
  return (
    <div className='w-full bg-green-300 py-20'>
      <div className='max-w-[1000px] mx-auto p-20 bg-[#00000010] rounded-xl'>
        <div className='flex justify-center items-center p-6'>
          <p
            className='font-mashanzhang text-xl'
            style={{ writingMode: 'vertical-rl' }}
          >
            床前明月光
          </p>
          <p
            className='font-mashanzhang text-xl'
            style={{ writingMode: 'vertical-rl' }}
          >
            疑是地上霜
          </p>
          <p>(poema)</p>
        </div>
      </div>
    </div>

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
