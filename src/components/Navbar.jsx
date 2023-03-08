import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
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
          ? 'fixed w-screen h-16 shadow-md ease-in z-10 duration-300 bg-[#FFF7ED99]'
          : 'fixed z-10 w-screen h-16 ease-in duration-200'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2'>
        <Link href='/#home' scroll={false}>
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
            <Link href='/#home' scroll={false}>
              <li className='text-sm uppercase hover:border-b '>
                {/* {t('navbar.home')} */}início
              </li>
            </Link>
            <Link href='/all' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b '>
                {/* {t('navbar.about')} */}os termos solares
              </li>
            </Link>
            <Link href='/current' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b '>
                {/* {t('navbar.skills')} */}termo atual
              </li>
            </Link>

            <Link href='/about' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b '>
                {/* {t('navbar.contact')} */}sobre este site
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
            <Link href='/#home' scroll={false}>
              {/* <Image
                  src='/../public/assets/logoH2.png'
                  width={60}
                  height={35}
                  alt='logo'
                /> */}
              <p className='font-bold'>24节气</p>
            </Link>
            <div
              onClick={handleNav}
              className='rounded-full text-orange-700 border-orange-300 border-2 border-dashed shadow-sm p-2 cursor-pointer'
            >
              <GrFormClose size={20} />
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center'>
          <ul className='uppercase'>
            <Link href='/home' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                INÍCIO
              </li>
            </Link>
            <Link href='/all' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                OS TERMOS SOLARES
              </li>
            </Link>
            <Link href='/current' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                TERMO ATUAL
              </li>
            </Link>
            <Link href='/about' scroll={false}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                SOBRE ESTE SITE
              </li>
            </Link>
          </ul>
        </div>

        <div className=''>
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
