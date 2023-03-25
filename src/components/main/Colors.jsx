import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GiGinkgoLeaf } from 'react-icons/gi';
import { SiLeaflet } from 'react-icons/si';

export default function Colors({ current }) {
  const { t } = useTranslation('terms');
  const { t: t1 } = useTranslation('common');
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

  // console.log(hexArr, nameArr);

  return (
    <div id='colors' className='w-full bg-slate-200 py-20'>
      <div className='max-w-[1000px] mx-auto p-20 bg-[#00000010] rounded-xl'>
        <div>
          <h1 className='text-5xl text-center pb-10 font-bold font-mashanzhang tracking-wider'>
            {t1('colors.colors')}
          </h1>
          <p className='pb-4'>
            Na cultura chinesa, cada termo solar é associado a um grupo de
            cores. A vinculação dessas cores aos termos solares tem origens na
            História da Arte Chinesa.
          </p>
          <p>
            Há milênios, pintores chineses, assim como os poetas, vêm tomando os
            termos solares como assuntos de suas representações artísticas, seja
            enquanto temas principais ou elementos secundários. Aqui estão
            listadas as cores tradicionalmente mais usadas na representação do
            termo solar {current} pelos pintores e outros criadores de imagens.
          </p>
        </div>

        <div
          // style={{ gridTemplateRows: 'repeat(8, minmax(0, 1fr))' }}
          className='colors-global sm:grid sm:grid-flow-col sm:grid-rows-[8] md:grid-flow-row sm:grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-2 items-center p-6 pt-12'
        >
          {hexArr.map((hex, i) => (
            <div key={i} className='w-full flex justify-center'>
              <div className='m-2 p-2 flex justify-between rounded-lg items-center w-[150px] bg-slate-50'>
                {/* <div
                  className='w-10 h-10 rounded-full'
                  style={{ backgroundColor: hex }}
                /> */}
                <SiLeaflet color={hex} size={35} />
                <div>
                  <p className='ml-4'>{nameArr[i]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
