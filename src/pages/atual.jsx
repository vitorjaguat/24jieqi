import { Solar, Lunar } from 'lunar-javascript';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { GiFlowerPot } from 'react-icons/gi';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Imagem from '../components/main/Imagem';
import Main from '../components/main/Main';
import Poem from '../components/main/Poem';
import Text from '../components/main/Text';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Colors from '@/components/main/Colors';

export default function JieQi_() {
  const [hemisphere, setHemisphere] = useState(null);
  const jieqiSouth = {
    立春: '立秋',
    雨水: '处暑',
    惊蛰: '白露',
    春分: '秋分',
    清明: '寒露',
    谷雨: '霜降',
    立夏: '立冬',
    小满: '小雪',
    芒种: '大雪',
    夏至: '冬至',
    小暑: '小寒',
    大暑: '大寒',
    立秋: '立春',
    处暑: '雨水',
    白露: '惊蛰',
    秋分: '春分',
    寒露: '清明',
    霜降: '谷雨',
    立冬: '立夏',
    小雪: '小满',
    大雪: '芒种',
    冬至: '夏至',
    小寒: '小暑',
    大寒: '大暑',
  };

  const toSouth = (jieqi) => {
    if (hemisphere === 'n') {
      return jieqi;
    } else if (hemisphere === 's') {
      return jieqiSouth[jieqi];
    }
  };

  const toSouthSent = (sentence) => {
    if (hemisphere === 'n') {
      return sentence;
    } else if (hemisphere === 's') {
      return toSouth(sentence[0] + sentence[1]) + sentence.slice(2, 13);
    }
  };

  const { t } = useTranslation('terms');
  const [baseDate, setBaseDate] = useState(null);
  const [currentJieQi, setCurrentJieQi] = useState(null);
  const [prevSentence, setPrevSentence] = useState('');
  const [nextSentence, setNextSentence] = useState('');
  const [current, setCurrent] = useState(currentJieQi ? currentJieQi : '惊蛰');
  useEffect(() => {
    setCurrent((prev) => currentJieQi);
  }, [currentJieQi]);
  //timezone -> China timezone helper:
  //   const intlDateObj = new Intl.DateTimeFormat('en', {
  //     timeZone: 'Asia/Shanghai',
  //   });
  //   const timezoneHelper = (date) => {
  //     intlDateObj.format(date);
  //   };

  const prevJieQiHelper = (date) => {
    if (!date) return;
    const x = Lunar.fromDate(
      new Date(Lunar.fromDate(date).getPrevJieQi().getSolar().next(-1))
    ).getPrevJieQi();
    return x;
  };

  const add3DayHelper = (date) => {
    if (!date) return;
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + 3);
    return dateCopy;
  };

  useEffect(() => {
    setBaseDate(
      new Date(Lunar.fromDate(new Date()).getPrevJieQi().getSolar().toYmd())
    );
    setCurrentJieQi(Lunar.fromDate(new Date()).getPrevJieQi().getName());
    if (!baseDate) return;
    let prev = prevJieQiHelper(baseDate);
    setPrevSentence(prev.getName() + ' ' + prev.getSolar().toYmd());
    let next = Lunar.fromDate(baseDate).getNextJieQi();
    setNextSentence(next.getName() + ' ' + next.getSolar().toYmd());
  }, []);

  const goToPrevJieQi = () => {
    setBaseDate(
      new Date(Lunar.fromDate(baseDate).getPrevJieQi().getSolar().toYmd())
    );
    setCurrentJieQi(Lunar.fromDate(baseDate).getPrevJieQi().getName());
  };

  const goToNextJieQi = () => {
    setBaseDate(
      new Date(
        Lunar.fromDate(add3DayHelper(baseDate))
          .getNextJieQi()
          .getSolar()
          .toYmd()
      )
    );
    setCurrentJieQi(
      Lunar.fromDate(add3DayHelper(baseDate)).getNextJieQi().getName()
    );
  };

  useEffect(() => {
    if (!baseDate) return;
    let prev = prevJieQiHelper(add3DayHelper(baseDate));
    setPrevSentence(prev.getName() + ' ' + prev.getSolar().toYmd());
    let next = Lunar.fromDate(add3DayHelper(baseDate)).getNextJieQi();
    setNextSentence(next.getName() + ' ' + next.getSolar().toYmd());
    // console.log(baseDate);
  }, [baseDate]);

  //   console.log(currentJieQi.getName());
  // console.log(toSouth(toSouth(current)));
  console.log(hemisphere);

  return (
    <div className='w-screen'>
      {!hemisphere && (
        <div className='w-screen h-screen flex justify-center items-center bg-blue-500 p-[100px]'>
          <div className='w-full h-full rounded-md bg-blue-200 flex flex-col justify-around items-center'>
            <div className='text-lg'>Em qual hemisfério você está?</div>
            <div className='flex'>
              <div
                className='px-6 py-4 bg-slate-400 rounded-md mr-4 cursor-pointer'
                onClick={() => setHemisphere('n')}
              >
                norte
              </div>
              <div
                className='px-6 py-4 bg-slate-400 rounded-md cursor-pointer'
                onClick={() => setHemisphere('s')}
              >
                sul
              </div>
            </div>
            <div className='text-sm px-4'>
              Obs.: Os Termos Solares foram criados na China com base na
              observação dos fenômenos naturais daquela região do planeta. Há
              milênios, quando os 24 períodos foram criados, os chineses não
              tinham uma ideia completa da vastidão e diversidade das regiões da
              Terra. Para fins didáticos, esse site &quot;converte&quot; o Termo
              Solar atual na China (Hemisfério Norte) para o Termo Solar
              correspondente no Hemisfério Sul. Dependendo de sua região, pode
              ser que as características citadas não correspondam perfeitamente
              com o clima e fenômenos naturais da sua região. Mesmo assim, vale
              a pena prestar atenção nas sutilezas da passagem das estações e
              valorizar os 24 Termos Solares como um bem cultural da China e de
              toda a Humanidade.
            </div>
          </div>
        </div>
      )}

      {hemisphere && (
        <div className='w-screen'>
          {/* skip previous2 */}
          <div
            className='fixed w-[4%] top-[48%] left-[2%] flex cursor-pointer'
            onClick={() => goToPrevJieQi()}
          >
            <GrPrevious size={25} />
          </div>
          {/* <p>{t(`${current}.colors.one.hex`)}</p> */}
          <Main
            currentJieQi={toSouth(currentJieQi)}
            prevSentence={toSouthSent(prevSentence)}
            nextSentence={toSouthSent(nextSentence)}
            current={toSouth(current)}
          />

          <div className='md:grid md:grid-cols-5 md:w-full md:h-full md:bg-green-100 items-center'>
            <div className='md:w-full md:col-span-3 flex justify-center items-center'>
              <Text current={toSouth(current)} />
            </div>
            <div className='md:w-full md:h-full md:col-span-2 flex justify-center items-center'>
              <Imagem current={toSouth(current)} />
            </div>
          </div>

          <Colors current={toSouth(current)} />
          <Poem current={toSouth(current)} />

          {/* skip next2 */}
          <div
            className='fixed w-[4%] top-[48%] right-[2%] cursor-pointer flex justify-end'
            onClick={() => goToNextJieQi()}
          >
            <GrNext size={25} />
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'terms'])),
    },
  };
}
