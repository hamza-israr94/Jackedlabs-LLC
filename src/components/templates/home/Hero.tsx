import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#161515]  flex items-center justify-center py-0 ">
      <div className=" w-full h-20vh overflow-hidden">
        <video
          className=" w-full  object-cover bg-[#232a34] "
          autoPlay
          loop
          muted
          typeof="video/mp4"
          src="/video/herovideo.mp4"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
