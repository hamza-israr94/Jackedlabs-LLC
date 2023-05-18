import React from 'react';

const Developed = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-12 pb-10  bg-background bg-[url(/static/images/bgtexture.png)]">
      <div className="w-full mb-7 md:w-8/12 md:h-36 h-12 bg-[url(/static/images/To-be-developed.png)] bg-contain bg-no-repeat flex justify-center items-center lg:items-end md:items-center">
        <p className="font-primary md:text-6xl   text-[40px] text-gray-300">
          To be developed...
        </p>
      </div>
      <div className="container mx-auto">
        <div className="border border-gray-400 w-full"></div>
      </div>
      {/* <div className=" w-[50%] inset-0 gradient-01"></div> */}
    </div>
  );
};

export default Developed;
