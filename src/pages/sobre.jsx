import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Intro from '@/components/intro/Intro';
import IntroMain from '@/components/intro/IntroMain';
import Todos from '@/components/todos/Todos';
import SunSquares from '@/components/sobre/SunSquares';
import SunCup from '@/components/sobre/SunCup';

export default function SobrePage() {
  return (
    <div className='w-screen'>
      {/* <Intro /> */}
      {/* <IntroMain /> */}
      {/* <SunSquares /> */}
      <SunCup />
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
