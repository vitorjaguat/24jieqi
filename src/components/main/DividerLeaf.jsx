import { GiFlowerPot } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { IoLeafOutline } from 'react-icons/io5';

export default function DividerLeaf({ current }) {
  const { t } = useTranslation('terms');
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

  return (
    <div
      className='w-screen overflow-hidden flex justify-center items-center py-20'
      style={{ backgroundColor: hexArr[4] }}
    >
      <div
        className='overflow-hidden whitespace-nowrap'
        style={{ color: hexArr[7] }}
      >
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
        <IoLeafOutline size={16} className='inline-block' />
      </div>
    </div>
  );
}
