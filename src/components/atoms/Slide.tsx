import Image from 'next/image';
import React from 'react';

const Slide = () => {
  return (
    <div className="max-w-[1138px] w-full max-h-[700px] h-full bg-SlideImage  mt-96 p-[100px] flex  space-x-14">
      <div className="relative max-w-[440px] w-full py-[60px] px-[45px] bg-SlideImagebg">
        <div className="max-w-[350px] w-full h-[350px]  rounded-[50%] border border-dashed border-[#3D4175] flex items-center justify-center">
          <div className="max-w-[300px] w-full h-[300px]  rounded-[50%] bg-[#3D4175]/30"></div>
        </div>

        <div className="absolute bottom-0 right-0 left-28">
          <Image
            src="/static/images/jeffheadshot-1.png"
            alt="slider Image"
            width={252}
            height={450}
          ></Image>
        </div>
      </div>
      <div className="right max-w-[468px] w-full">
        <h3 className="font-primary text-8xl  text-secondary text-right mb-10">
          01
        </h3>
        <h4 className="font-primary text-[40px]  text-secondary mb-10 ">
          Name
        </h4>
        <h5 className="font-secondary text-2xl  text-secondary mb-12">CEO</h5>
        <p className="font-secondary text-lg  text-secondary">
          Got into crypto in 2020, Cardano NFTs in 2021. Jeff is a certified
          personal trainer with experience in sports performance, powerlifting,
          and overall fitness. Jeff sees the potential that crypto and online
          training have in giving way to more access to services, information,
          and independence.
        </p>
      </div>
    </div>
  );
};

export default Slide;
