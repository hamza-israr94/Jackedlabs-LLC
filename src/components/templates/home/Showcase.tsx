import Catalogue from '@/components/organisms/Catalogue';
import Image from 'next/image';
import React from 'react';

const Info = [
  {
    id: 1,
    iconSrc: '/static/Icons/fitness.svg',
    text: 'Fitness App',
    borderLeft: 'true',
  },
  {
    id: 2,
    iconSrc: '/static/Icons/latestproject.svg',
    text: 'Latest Projects',
  },
  {
    id: 3,
    iconSrc: '/static/Icons/communityFocused.svg',
    text: 'Community focused',
  },
  {
    id: 4,
    iconSrc: '/static/Icons/cardanoBased.svg',
    text: 'Cardano Based',
    borderRight: 'true',
  },
];

const Showcase = () => {
  return (
    <section className="bg-showcase bg-cover pb-16 xl:pb-36 bg-no-repeat relative">
      <div className="container mx-auto relative z-40 px-4">
        <div className="flex flex-col justify-center items-center relative mb-10 xl:mb-28">
          <span
            className="font-bold text-6xl  md:text-6xl xl:text-9xl font-primary mb-5 mt-16 xl:mt-48 tracking-tight leading-none p-4 text-center text-white bg-center bg-cover"
            style={{
              backgroundImage: 'url(/static/images/animationBackground.jpg)',
              WebkitBackgroundClip: 'text',
              WebkitAnimation: 'aitf 80s linear infinite',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            Utilizing Web 3.0
          </span>

          <h3 className="font-primary text-center mb-6 xl:mb-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-secondary">
            to connect the world through fitness
          </h3>
          <p className="font-secondary text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-secondary">
            Professionals in the Metaverse space
          </p>
        </div>

        <Catalogue />

        {/* <div className="max-w-[1376px] flex md:flex-col w-full bg-[#363756] border border-[#6E82BA] ">
          <div className="flex-1 w-full md:px-[70px] md:py-[20px] xl:px-[124px] xl:py-[57px] border-r border-r-[#6E82BA]">
            <Image
              src="/static/Icons/fitness.svg"
              alt="Logo"
              width={70}
              height={70}
            />
            <span className="mt-5 text-2xl">
              Fitness
              <br /> App
            </span>
          </div>
          <div className="flex-1 w-full md:px-[70px] md:py-[20px] xl:px-[124px] xl:py-[57px] border-r border-r-[#6E82BA]">
            <Image
              src="/static/Icons/fitness.svg"
              alt="Logo"
              width={70}
              height={70}
            />
            <span className="mt-5 text-2xl">
              Fitness
              <br /> App
            </span>
          </div>
          <div className="flex-1 w-full md:px-[70px] md:py-[20px] xl:px-[124px] xl:py-[57px] border-r border-r-[#6E82BA]">
            <Image
              src="/static/Icons/fitness.svg"
              alt="Logo"
              width={70}
              height={70}
            />
            <span className="mt-5 text-2xl">
              Fitness
              <br /> App
            </span>
          </div>
          <div className="flex-1 w-full md:px-[70px] md:py-[20px] xl:px-[124px] xl:py-[57px] border-r border-r-[#6E82BA]">
            <Image
              src="/static/Icons/fitness.svg"
              alt="Logo"
              width={70}
              height={70}
            />
            <span className="mt-5 text-2xl">
              Fitness
              <br /> App
            </span>
          </div>
          
        </div> */}
      </div>

      {/* <div className="absolute max-w-[1528px] w-full max-h-[982px] h-full top-0 right-0 z-10">
        <Image
          src="/static/images/showcasebg.svg"
          alt="background"
          fill
          // style={{ objectFit: 'contain' }}
        />
      </div> */}

      <div className="absolute max-w-[1528px] w-full max-h-[482px] h-full bg-cover left-[50%] translate-x-[-50%] top-[37%]">
        <Image
          src="/static/images/showcase.png"
          alt="background"
          fill
          // style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
};

export default Showcase;
