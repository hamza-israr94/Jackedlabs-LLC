import Image from 'next/image';
import React from 'react';

const TobeDevelopedCard = ({ card }: any) => {
  return (
    <div className="relative max-w-[438px] w-full max-h-[285px] h-full ">
      <Image src={card.src} alt="to-be-developed" height={285} width={438} priority/>
      <div className="absolute bottom-[30px] w-full">
        <h3 className="  text-secondary text-center font-primary text-[40px]">
          {card.title}
        </h3>
      </div>
    </div>
  );
};

export default TobeDevelopedCard;
