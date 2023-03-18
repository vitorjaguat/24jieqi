import { useRouter } from 'next/router';
import { Ma_Shan_Zheng } from '@next/font/google';
import { Bona_Nova } from '@next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { appWithTranslation } from 'next-i18next';

const mashanzhang = Ma_Shan_Zheng({
  subsets: ['latin'],
  weight: '400',
  variable: '--mashanzhang-font',
  display: 'block',
});

const bonanova = Bona_Nova({
  subsets: ['latin'],
  weight: '400',
  variable: '--bonanova-font',
  display: 'block',
});

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <main
      className={`${mashanzhang.variable} ${bonanova.variable} font-bonanova`}
    >
      <Navbar />
      <Component {...pageProps} key={router.asPath} />
    </main>
  );
};

export default appWithTranslation(App);
