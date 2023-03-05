import { GiFlowerPot } from 'react-icons/gi';

export default function Imagem() {
  return (
    <div className='md:w-full md:h-[70%] bg-green-100 flex justify-center items-center p-20 md:pl-0'>
      <div className='w-full h-full flex justify-center items-center bg-[#00000010] rounded-xl'>
        <GiFlowerPot size={300} color='grey' opacity={0.2} />
      </div>
    </div>
  );
}
