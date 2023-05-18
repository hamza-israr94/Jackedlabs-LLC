import Image from 'next/image';
import React from 'react';

const Whatweoffer = () => {
  return (
    <section className="bg-background bg-[url(/static/images/bgtexture.png)] ">
      <div className="container px-2  lg:px-6 mx-auto flex flex-col md:flex-row items-center pt-[30px] md:pt-[100px] xl:pt-[200px] md:space-x-6">
        <div className="max-w-[817px] px-2 md:px-0 text-center md:text-left w-full">
          <span className="text-secondary text-6xl lg:text-7xl 2xl:text-9xl font-primary ">
            What we offer.
          </span>
          <p className="font-secondary text-base md:text-xl lg:text-2xls font-medium text-white mt-[50px] max-w-[671px] w-full leading-6 md:leading-[36px] xl:leading-[48px] ">
            As Web3.0 becomes more prevalent in today&apos;s society, JackedLabs
            looks to leverage the Cardano Blockchain to create projects that
            enhance the community and provide awareness from multiple aspects of
            a modernized lifestyle.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Image
            src="/static/images/whatweoffer.svg"
            alt="what we offer"
            width={555}
            height={583}
          />
        </div>
      </div>
    </section>
  );
};

export default Whatweoffer;
