import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import LogoSlide from '@/components/atoms/LogoSlide';
import Image from 'next/image';

const OurPartners = () => {
  const mapData = [
    {
      id: 1,
      imageURL: '/static/images/dimenxen.png',
      width: '128',
      height: '30',
    },
    {
      id: 2,
      imageURL: '/static/images/drolo.png',
      width: '75',
      height: '45',
    },
    {
      id: 3,
      imageURL: '/static/images/ionia.png',
      width: '75',
      height: '57',
    },
    {
      id: 4,
      imageURL: '/static/images/topli.png',
      width: '80',
      height: '37',
    },
    {
      id: 5,
      imageURL: '/static/images/logo.png',
      width: '152',
      height: '80',
    },
    {
      id: 6,
      imageURL: '/static/images/dimenxen.png',
      width: '128',
      height: '30',
    },
    {
      id: 7,
      imageURL: '/static/images/drolo.png',
      width: '75',
      height: '45',
    },
    {
      id: 8,
      imageURL: '/static/images/ionia.png',
      width: '75',
      height: '57',
    },
    {
      id: 9,
      imageURL: '/static/images/topli.png',
      width: '80',
      height: '37',
    },
    {
      id: 10,
      imageURL: '/static/images/logo.png',
      width: '152',
      height: '80',
    },
  ];

  return (
    <section className="bg-background bg-[url(/static/images/bgtexture.png)]">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-0 xl:pt-[60px]">
        <h2 className="md:text-[64px] text-[40px] text-secondary font-primary mb-10 lg:mb-20">
          Our Partners
        </h2>
      </div>
      <div className="container mx-auto pb-10 md:pb-[170px]">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          // speed={5000}
          // autoplay={{
          //   delay: -10,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay]}
          loop={true}
          className="mySwiper"
        >
          {/* {mapData.map((data) => ( */}

          <SwiperSlide className="swiper-wrapper">
            <LogoSlide />
          </SwiperSlide>

          {/* ))} */}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPartners;
