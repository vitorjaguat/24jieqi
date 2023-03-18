import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';
import { useTranslation } from 'next-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? 'fixed w-screen h-16 shadow-md ease-in z-10 duration-300 bg-[#FFFFFF99]'
          : 'fixed z-10 w-screen h-16 ease-in duration-200'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2'>
        <Link href='/' scroll={false}>
          {/* <Image
            src='/../public/assets/logoH2.png'
            alt='logo'
            width={50}
            height={50}
          /> */}
          <p className='font-bold text-orange-900'>24节气</p>
        </Link>
        <div className='hidden md:block'>
          <ul className='hidden md:flex'>
            <Link href='/' scroll={false}>
              <li className='text-sm uppercase hover:border-b '>
                {t('navbar.home')}
              </li>
            </Link>
            <Link href='/todos' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b '>
                {t('navbar.solar-terms')}
              </li>
            </Link>
            <Link href='/atual' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b '>
                {t('navbar.current-term')}
              </li>
            </Link>

            <Link href='/about' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b '>
                {t('navbar.about')}
              </li>
            </Link>
          </ul>
        </div>
        <div className='text-sm uppercase'>
          <LanguageToggle />
        </div>
        <div onClick={handleNav} className='md:hidden text-orange-900'>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* overlay */}
      <div
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-full h-full bg-black/70 ease-in transition-all duration-500'
            : 'fixed left-0 top-0 opacity-0 w-full h-full bg-transparent hidden ease-in transition-all duration-500'
        }
        onClick={() => setNav(false)}
      />
      {/* sidebar */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[45%] h-screen flex flex-col justify-between bg-orange-50 p-10 ease-in duration-500'
            : 'fixed w-[45%] h-screen flex flex-col justify-between bg-orange-50 top-0 left-[-100%] p-10 ease-in duration-500'
        }
      >
        <div>
          <div className='flex w-full items-center justify-between'>
            <Link href='/' scroll={false}>
              {/* <Image
                  src='/../public/assets/logoH2.png'
                  width={60}
                  height={35}
                  alt='logo'
                /> */}
              <p className='font-bold'></p>
            </Link>
            <div
              onClick={handleNav}
              className='rounded-full cursor-pointer mt-[-10px] mr-[-10px]'
            >
              <TfiClose size={20} />
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center'>
          <ul className='uppercase'>
            <Link href='/home' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                {t('navbar.home')}
              </li>
            </Link>
            <Link href='/todos' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                {t('navbar.solar-terms')}
              </li>
            </Link>
            <Link href='/atual' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                {t('navbar.current-term')}
              </li>
            </Link>
            <Link href='/about' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                {t('navbar.about')}
              </li>
            </Link>
          </ul>
        </div>

        <div className=''>
          24节气
          {/* <p className='uppercase text-sm tracking-widest text-orange-700'>
            JOIN ME AT
          </p>
          <div className='flex items-center justify-between my-4 w-full'>
            <div className='rounded-full bg-orange-300 shadow-s p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
              <FaGithub />
            </div>
            <div className='rounded-full bg-orange-300 shadow-sm p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
              <FaInstagram />
            </div>
            <div className='rounded-full bg-orange-300 shadow-sm p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
              <FaTelegramPlane />
            </div>
            <div className='rounded-full bg-orange-300 shadow-sm p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
              <AiOutlineMail />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
