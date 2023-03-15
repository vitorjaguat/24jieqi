import { Solar, Lunar } from 'lunar-javascript';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Imagem from '../main/Imagem';
import IntroMain from './IntroMain';
import Poem from '../main/Poem';
import IntroText from './IntroText';
import BannerImage from '../main/BannerImage';
import BannerClouds from './BannerClouds';
import { ParallaxProvider } from 'react-scroll-parallax';
import BannerClouds2 from './SectionClouds';

export default function Intro() {
  const [baseDate, setBaseDate] = useState(null);
  const [currentJieQi, setCurrentJieQi] = useState(null);
  const [prevSentence, setPrevSentence] = useState('');
  const [nextSentence, setNextSentence] = useState('');

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

  return (
    <ParallaxProvider>
      <div className='w-screen'>
        <div className='w-screen bg-green-200'>
          <IntroMain />
          <BannerClouds2 />

          <div className='md:grid md:grid-cols-5 md:w-full md:h-full md:bg-green-100'>
            <div className='md:w-full md:col-span-3'>
              <IntroText />
            </div>
            <div className='md:w-full md:col-span-2'>
              <Imagem />
            </div>
          </div>
          <Poem />

          <BannerImage />
        </div>
      </div>
    </ParallaxProvider>
  );
}
