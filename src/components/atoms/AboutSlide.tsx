import Image from 'next/image';
import React from 'react';

const AboutSlide = ({ slide }: any) => {
  return (
    <div className="w-full flex flex-col justify-center bg-SlideImage h-[500px] p-[20px] md:p-[30px]">
      <div className="flex items-center justify-center mb-4">
        <div
          className={`w-full max-w-[210px] md:max-w-[230px] lg:max-w-[340px] xl:max-w-[450px] min-h-[45px]  md:min-h-[50px] lg:min-h-[80px] xl:min-h-[132px]  ${slide.image} bg-contain bg-no-repeat flex justify-center items-center`}
        >
          <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-[54px] font-primary text-primary">
            {slide.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-[13px]  md:text-base lg:text-lg xl:text-xl text-secondary text-center">
        <p>{slide.description}</p>
        <div className="relative w-full max-w-[90px] h-[90px] mt-4">
          <Image
            priority
            quality={100}
            style={{ objectFit: 'contain' }}
            fill
            src="/static/images/translogo.png"
            alt="typewriter"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
