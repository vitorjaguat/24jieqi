import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GiGinkgoLeaf } from 'react-icons/gi';
import Link from 'next/link';

export default function ColorGrid({ current }) {
  const { t } = useTranslation('terms');
  const { t: t1 } = useTranslation('common');
  const [hexArr, setHexArr] = useState([]);
  const [nameArr, setNameArr] = useState([]);

  useEffect(() => {
    let hexData = [];
    let nameData = [];

    for (let i = 1; i <= 16; i++) {
      let hex = t(`${current}.colors.${i}.hex`);
      let name = t(`${current}.colors.${i}.name`);
      hexData.push(hex);
      nameData.push(name);
    }
    setHexArr([...hexData]);
    setNameArr([...nameData]);
  }, [current, setHexArr, setNameArr]);

  console.log(hexArr, nameArr);

  return (
    <div className='w-full'>
      <Link href='#colors' scroll={false}>
        <div className='grid grid-cols-4 w-fit'>
          {hexArr.map((hex, i) => (
            <div key={i} className='w-5 h-5' style={{ backgroundColor: hex }} />
          ))}
        </div>
      </Link>
    </div>
  );
}
