import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  console.log(router.query);

  // const handleLanguageChange = (locale) => {
  //   i18n.changeLanguage(locale); //changing the language
  //   router.push(
  //     {
  //       pathname: router.pathname,
  //       query: router.query,
  //     },
  //     router.asPath,
  //     { locale, scroll: false }
  //   ); //redirect to the new language's path, eg, '/pt/#home'
  // };

  //router.push(url, as, options)
  //url: the url to navigate to
  //as: optional decorator (#home, eg)
  //options: object of options:
  //scroll: Optional boolean, controls scrolling to the top of the page after navigation. Defaults to true
  //shallow: Update the path of the current page without rerunning getStaticProps, getServerSideProps or getInitialProps. Defaults to false
  //locale - Optional string, indicates locale of the new page

  return (
    <div className='flex justify-center text-orange-900 font-bold'>
      <Link
        href={{
          pathname: router.pathname,
          query: {
            jieqi: router.query.jieqi,
          },
        }}
        locale='pt'
      >
        <div
          className='mr-1 text-sm cursor-pointer px-1 hover:border-b'
          // onClick={() => handleLanguageChange('pt')}
        >
          PT
        </div>
      </Link>

      <Link
        href={{
          pathname: router.pathname,
          query: {
            jieqi: router.query.jieqi,
          },
        }}
        locale='zh'
      >
        <div
          className='mr-1 text-sm cursor-pointer px-1 hover:border-b'
          // onClick={() => handleLanguageChange('zh')}
        >
          中
        </div>
      </Link>

      <Link
        href={{
          pathname: router.pathname,
          query: {
            jieqi: router.query.jieqi,
          },
        }}
        locale='en'
      >
        <div
          className='text-sm cursor-pointer px-1 hover:border-b'
          // onClick={() => handleLanguageChange('en')}
        >
          EN
        </div>
      </Link>
    </div>
  );
};

export default LanguageToggle;
