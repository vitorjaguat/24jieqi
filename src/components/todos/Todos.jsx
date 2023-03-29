import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GiGinkgoLeaf } from 'react-icons/gi';
import Link from 'next/link';
import { i18n } from 'next-i18next';

export default function Todos() {
  const { t } = useTranslation('terms');
  // console.log(i18n.language);
  const currentLang = i18n.language;

  //   const [hexArr, setHexArr] = useState([]);
  //   const [nameArr, setNameArr] = useState([]);

  //   useEffect(() => {
  //     let hexData = [];
  //     let nameData = [];

  //     for (let i = 1; i <= 4; i++) {
  //       let hex = t(`${current}.colors.${i}.hex`);
  //       let name = t(`${current}.colors.${i}.name`);
  //       hexData.push(hex);
  //       nameData.push(name);
  //     }
  //     setHexArr([...hexData]);
  //     setNameArr([...nameData]);
  //   }, [current, setHexArr, setNameArr]);

  //   console.log(hexArr, nameArr);

  const jieqiArr = [
    '立春',
    '雨水',
    '惊蛰',
    '春分',
    '清明',
    '谷雨',
    '立夏',
    '小满',
    '芒种',
    '夏至',
    '小暑',
    '大暑',
    '立秋',
    '处暑',
    '白露',
    '秋分',
    '寒露',
    '霜降',
    '立冬',
    '小雪',
    '大雪',
    '冬至',
    '小寒',
    '大寒',
  ];

  const colorsArr = jieqiArr.map((jieqi, i) => {
    return t(`${jieqi}.colors.1.hex`);
  });

  // console.log(colorsArr);

  return (
    <div className='w-screen bg-slate-200 py-16'>
      <div className='w-full md:max-w-[1100px] mx-auto p-20 bg-[#00000010] rounded-xl'>
        <div>
          <h1 className='text-5xl text-center pb-20 font-bold font-mashanzhang tracking-wider'>
            Os 24 Termos Solares
          </h1>
          <p className='pb-4 text-center'>
            Aqui você encontra todos os termos solares, e pode clicar para
            conferir as características de cada um:
          </p>
          {/* <p>
            Há milênios, pintores chineses, assim como os poetas, vêm tomando os
            termos solares como temas principais ou elementos de suas
            representações artísticas. E, no caso dos pintores e outros
            criadores de imagens, estas são as cores tradicionalmente mais
            usadas nas representações do termo solar:
          </p> */}
        </div>

        <div className='flex flex-col md:gap-4 md:justify-center items-center md:grid md:grid-flow-col md:grid-rows-6 py-6'>
          {jieqiArr.map((jieqi, i) => (
            <Link key={jieqi} href={`/todos/${jieqi}`}>
              <div
                className='m-2 p-2 flex rounded-md justify-between items-center w-[180px] h-[4.5rem] hover:scale-105 transition-all duration-300'
                style={{
                  backgroundColor:
                    i <= 5
                      ? '#D4E5D6'
                      : i <= 11
                      ? '#E7CAD3'
                      : i <= 17
                      ? '#e9e9e9'
                      : '#d1d1d1',
                }}
              >
                <div
                  className='w-10 shrink-0 h-10 rounded-full'
                  style={{ backgroundColor: colorsArr[i] }}
                />
                <div>
                  <p className='ml-4 text-sm text-end font-bold'>{jieqi}</p>
                  {currentLang !== 'zh' && (
                    <p className='ml-4 text-sm text-end'>
                      {t(`${jieqi}.name-trans`)}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
