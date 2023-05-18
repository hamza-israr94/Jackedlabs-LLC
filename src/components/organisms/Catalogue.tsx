import Image from 'next/image';
import React from 'react';

const Info = [
  {
    iconSrc: '/static/Icons/fitness.svg',
    text: 'Fitness App',
    borderLeft: 'true',
  },
  {
    iconSrc: '/static/Icons/latestproject.svg',
    text: 'Latest Projects',
  },
  {
    iconSrc: '/static/Icons/communityFocused.svg',
    text: 'Community focused',
  },
  {
    iconSrc: '/static/Icons/cardanoBased.svg',
    text: 'Cardano Based',
    borderRight: 'true',
  },
];

const Catalogue = () => {
  return (
    // <div className=" bg-[#363756] h-[260px] flex flex-col md:flex-row  text-secondary ">
    //   {Info.map((data) => (
    //     <div
    //       className={`flex-1  p-4 text-center flex flex-col items-center justify-center border border-[#6E82BA] ${
    //         data.borderLeft ? 'rounded-tl-lg rounded-bl-lg' : ''
    //       } ${data.borderRight ? 'rounded-tr-lg rounded-br-lg' : ''}  `}
    //     >
    //       <Image src={data.iconSrc} alt="Logo" width={70} height={70} />
    //       <span className="mt-5 text-2xl">
    //         {data.text}
    //         <br /> App
    //       </span>
    //     </div>
    //   ))}
    // </div>

    <div className="max-w-[1373px] flex flex-col md:flex-row w-full bg-[#363756] text-secondary rounded-lg  ">
      {Info.map((data, index) => (
        <div
          key={index}
          className={`flex-1 p-3 md:p-5 2xl:p-11 lg:p-7 text-center flex flex-col items-center justify-center border  border-[#6E82BA] ${
            data.borderLeft ? 'md:rounded-tl-lg md:rounded-bl-lg' : ''
          } ${data.borderRight ? 'md:rounded-tr-lg md:rounded-br-lg' : ''}  `}
        >
          <div className=" relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]  xl:w-[70px] xl:h-[70px]">
            <Image
              src={data.iconSrc}
              alt="Logo"
              className="object-cover"
              fill
            />
          </div>
          <span className="mt-5 text-sm md:text-lg lg:text-xl">
            {data.text}
            <br /> App
          </span>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
