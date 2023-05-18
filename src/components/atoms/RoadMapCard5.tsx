import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoadMapCard5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div
      className="w-full flex justify-start"
      data-aos="slide-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="relative xl:max-w-[612px] lg:max-w-[506px] w-full bg-roadMapCard min-h-[150px] md:min-h-[210px] h-full  px-[30px] py-5 md:py-10">
        <h4 className="md:text-4xl text-xl text-secondary font-primary mb-5">
          Brand Building
        </h4>
        <p className="md:text-lg text-base text-secondary">
          Release suit of Jacked Labs products, upgrade dApp to phase 2 bridging
          nutrition, exercising, and coaching. Release plans for the next dApp.
        </p>
        <div className="absolute top-[-30px] right-[30px] max-w-[220px] w-full  bg-primary py-2 md:py-[15px] px-5">
          <span className="md:text-2xl text-lg font-primary text-secondary">
            Phase 5 2023
          </span>
        </div>
        <div className="w-1 bg-[#60659c96] md:h-[225px] absolute lg:right-0 lg:inline hidden top-0"></div>
        <div className="w-1 bg-[#60659c96] md:h-[210px] h-[185px] absolute left-0 lg:hidden top-0"></div>
      </div>
    </div>
  );
};

export default RoadMapCard5;
