import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';
import CalendarTest from '@/components/CalendarTest';
import JieQi from '@/components/JieQi';
import JieQi_ from '@/components/main/JieQi_';
import Intro from '@/components/intro/Intro';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>24JIEQI</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <CalendarTest /> */}
      {/* <JieQi /> */}
      {/* <main className='w-screen flex flex-col justify-center items-center'> */}
      {/* <JieQi_ /> */}
      <Intro />
      {/* </main> */}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
