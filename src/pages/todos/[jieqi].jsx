import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Main from '@/components/todos/Main';
import Text from '@/components/main/Text';
import Imagem from '@/components/main/Imagem';
import Poem from '@/components/main/Poem';
import Colors from '@/components/main/Colors';

export default function TodosDetails({ jieqi }) {
  // console.log(jieqi);
  return (
    <div className='w-screen'>
      <div className='w-screen'>
        <Main jieqi={jieqi} />

        <Colors current={jieqi} />

        <div className='md:grid md:grid-cols-5 md:w-full md:h-full md:bg-green-100'>
          <div className='md:w-full md:col-span-3'>
            <Text current={jieqi} />
          </div>
          <div className='md:w-full md:col-span-2'>
            <Imagem current={jieqi} />
          </div>
        </div>

        <Poem />
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//   const jieqiArr = [
//     '立春',
//     '雨水',
//     '惊蛰',
//     '春分',
//     '清明',
//     '谷雨',
//     '立夏',
//     '小满',
//     '芒种',
//     '夏至',
//     '小暑',
//     '大暑',
//     '立秋',
//     '处暑',
//     '白露',
//     '秋分',
//     '寒露',
//     '霜降',
//     '立冬',
//     '小雪',
//     '大雪',
//     '冬至',
//     '小寒',
//     '大寒',
//   ];

//   return {
//     fallback: false,
//     paths: jieqiArr.map((jieqi) => {
//       return {
//         params: {
//           jieqi: jieqi,
//         },
//       };
//     }),
//   };
// }

export async function getStaticPaths({ locales }) {
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

  const jieqiCategories = jieqiArr.map((jieqiName) => {
    return { jieqi: jieqiName };
  });

  const paths = jieqiCategories.flatMap((jieqiCategory) => {
    return locales.map((locale) => {
      return {
        params: {
          jieqi: jieqiCategory.jieqi,
        },
        locale: locale,
      };
    });
  });

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps({ locale, params }) {
  // const { jieqi } = params;

  return {
    props: {
      params: params,
      jieqi: params.jieqi,
      ...(await serverSideTranslations(locale, ['common', 'terms'])),
    },
  };
}
