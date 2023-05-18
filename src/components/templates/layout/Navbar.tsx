// @ts-nocheck
import Navlinks from '@/components/organisms/Navlinks';
import Image from 'next/image';
import Link from 'next/link';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const genericHamburgerLine = `h-1 w-6 my-[3px] rounded-full bg-white transition ease transform duration-300`;

  const closeNav = (e: any) => {
    if (modalRef.current === e.target) {
      setNav(!nav);
    }
  };

  return (
    <nav
      className={`flex justify-between items-center h-[72px]   
      navGradient text-white border-b border-[#ffffff]/30 px-2 md:px-0 lg:px-0 xl:px-0 2xl:px-0 sticky top-0 z-50`}
    >
      <div className=" w-full container mx-auto  flex justify-between items-center md:px-4 ">
        <div>
          <Link href="/" passHref>
            <Image
              src="/static/Icons/logo.svg"
              alt="Logo"
              width={173}
              height={30}
            />
          </Link>
        </div>
        <div className="hidden NavContainer lg:flex text-base  ">
          <Navlinks nav={nav} setNav={setNav} />
        </div>

        <button
          className=" z-30 flex flex-col h-12 w-12 justify-center items-center group  lg:hidden"
          onClick={() => setNav(!nav)}
        >
          <div
            className={`${genericHamburgerLine} ${
              nav ? 'rotate-45 translate-y-[11.5px] ' : ''
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${nav ? 'opacity-0' : ''}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              nav ? '-rotate-45 -translate-y-[9.5px] ' : ''
            }`}
          />
        </button>
      </div>
      {nav ? (
        <div
          ref={modalRef}
          onClick={closeNav}
          className={
            'fixed w-100vw top-0 z-20 h-[100vh] w-full bg-[#ffffff88]/60 lg:hidden'
          }
        ></div>
      ) : (
        ''
      )}

      <div
        className={
          nav
            ? ' lg:hidden  z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 drawerGradient ease-in-out duration-500 text-white'
            : ' z-50 h-full ease-in-out duration-200 fixed left-[-123%] border-r-gray-900 drawerGradient top-0 text-white'
        }
      >
        <div className="m-4 cursor-pointer">
          <Link href="/" passHref>
            <Image
              src="/static/Icons/logo.svg"
              alt="Logo"
              width={173}
              height={30}
            />
          </Link>
        </div>
        <div className="NavContainer flex-col ">
          <Navlinks nav={nav} setNav={setNav} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
