import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Intro from '@/components/intro/Intro';
import IntroMain from '@/components/intro/IntroMain';
import Todos from '@/components/todos/Todos';

export default function TodosPage() {
  return (
    <div className='w-screen'>
      {/* <Intro /> */}
      {/* <IntroMain /> */}
      <Todos />
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
