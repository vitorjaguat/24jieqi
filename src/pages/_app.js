import { useRouter } from 'next/router';
import { Ma_Shan_Zheng } from '@next/font/google';
import '@/styles/globals.css';

const mashanzhang = Ma_Shan_Zheng({
  subsets: ['latin'],
  weight: '400',
  variable: '--mashanzhang-font',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <main className={`${mashanzhang.variable}`}>
      <Component {...pageProps} key={router.asPath} />
    </main>
  );
}
