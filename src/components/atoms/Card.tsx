import Image from 'next/image';
import React from 'react';

const Card = ({ card }: any) => {
  return (
    <div className="max-w-[673px] w-full flex px-2 md:px-2">
      <div className="relative w-[230px] h-[138px] md:max-h-[250px] md:h-full ">
        <Image src={card.path} alt="card1" className="object-cover" fill priority />
      </div>
      <div className="max-w-[443px] w-full flex flex-col  bg-card p-2 md:p-3 lg:p-5 xl:p-10 text-left ">
        <span className="font-primary text-secondary text-base md:text-xl lg:text-[26px] xl:text-[32px] max-w-[153px] leading-5 md:leading-[30px] mb-1 md:mb-2 lg:mb-4 xl:mb-5 ">
          {card.title}
        </span>
        <p className=" text-[12px] lg:text-base text-secondary  leading-3 md:leading-[15px] lg:leading-[19px]">
          {card.desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
