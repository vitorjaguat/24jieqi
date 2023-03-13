import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GiGinkgoLeaf } from 'react-icons/gi';

export default function Colors({ current }) {
  const { t } = useTranslation('terms');
  const [hexArr, setHexArr] = useState([]);
  const [nameArr, setNameArr] = useState([]);

  useEffect(() => {
    let hexData = [];
    let nameData = [];

    for (let i = 1; i <= 16; i++) {
      let hex = t(`${current}.colors.${i}.hex`);
      let name = t(`${current}.colors.${i}.name`);
      hexData.push(hex);
      nameData.push(name);
    }
    setHexArr([...hexData]);
    setNameArr([...nameData]);
  }, [current, setHexArr, setNameArr]);

  console.log(hexArr, nameArr);

  return (
    <div className='w-full bg-slate-200 py-20'>
      <div className='max-w-[1000px] mx-auto p-20 bg-[#00000010] rounded-xl'>
        <div>
          <h1 className='text-5xl text-center pb-10 font-bold font-mashanzhang tracking-wider'>
            Cores
          </h1>
          <p className='pb-4'>
            Na milenar tradição chinesa, a cada termo solar correspondem algumas
            cores. A associação dessas cores aos termos solares tem raízes na
            História da Arte Chinesa.
          </p>
          <p>
            Há milênios, pintores chineses, assim como os poetas, vêm tomando os
            termos solares como temas principais ou elementos de suas
            representações artísticas. E, no caso dos pintores e outros
            criadores de imagens, estas são as cores tradicionalmente mais
            usadas nas representações do termo solar {current}:
          </p>
        </div>

        <div className='flex flex-col justify-center items-center p-6'>
          {hexArr.map((hex, i) => (
            <div
              key={i}
              className='m-2 p-2 flex justify-between rounded-md items-center w-[150px] bg-slate-50'
            >
              <div
                className='w-10 h-10 rounded-full'
                style={{ backgroundColor: hex }}
              />
              <div>
                <p className='ml-4'>{nameArr[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
