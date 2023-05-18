import React from 'react';
import ContactForm from '../organisms/ContactForm';

const WriteToUs = () => {
  return (
    <div className="bg-[url(/static/images/Servicebg.png)] bg-center bg-cover bg-repeat pt-10 lg:pt-20 xl:pt-30">
      <div className="container mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:space-x-[242px] px-4">
        <div className="xl:max-w-[481px]">
          <h2 className="font-primary text-secondary text-4xl mb-14 md:text-6xl md:mb-20 lg:text-6xl xl:text-8xl">
            Write to Us
          </h2>
        </div>
        <div className=" max-w-[650px] lg:max-w-[500px] xl:max-w-[650px] w-full h-[600px] bg-background rounded-[10px] border-2 border-[#6E82BA] mb-[140px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default WriteToUs;
