import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const Slider = ({ slides }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const sliderClass = classNames('flex', {
    '': slides.length > 1,
  });

  const slideClass = classNames(
    'flex-shrink-0',
    'w-full',
    'lg:w-1/2',
    'transition-all',
    'duration-500',
    'ease-in-out',
    {
      'lg:w-full': slides.length === 1,
    }
  );

  const handleSlideChange = (index: any) => {
    setCurrentSlide(index);
    // setIntervalTime(5000);
  };

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= slides.length) {
      newIndex = slides.length - 1;
    }

    setCurrentSlide(newIndex);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    screenWidth <= 768
      ? setProgress((currentSlide / (slides.length - 1)) * 100)
      : setProgress((currentSlide / (slides.length - 2)) * 100);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        if (screenWidth <= 768) {
          updateIndex((prevIndex: any) =>
            prevIndex + 1 >= slides.length ? 0 : prevIndex + 1
          );
        } else {
          updateIndex((prevIndex: any) =>
            prevIndex >= slides.length - 2 ? 0 : prevIndex + 1
          );
        }
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [screenWidth]);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className={sliderClass}>
          {slides.map((slide: any, index: any) => (
            <div
              key={index}
              className={slideClass}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'all ease-in-out 2s',
                transitionDuration: '2s',
              }}
            >
              <div className="mx-2 md:min-h-[400px] lg:min-h-[350px] xl:min-h-[400px] h-full bg-[#3D4175] p-4 md:p-[40px] lg:p-[20px] xl:p-[40px] flex justify-between space-x-3 cursor-pointer">
                <div className="relative max-w-[180px] max-h-[200px] md:max-h-full  md:max-w-[230px] w-full">
                  <Image src={slide.image} fill alt="headshots" priority />
                </div>
                <div className="lg:max-w-[200px] xl:max-w-[326px] w-full">
                  <div className="flex max-w-[326px] w-full justify-between items-center mb-2 lg:mb-0">
                    <span className="text-secondary font-primary text-lg md:text-2xl lg:text-xl xl:text-3xl">
                      {slide.name}
                    </span>
                    <span className="text-secondary font-primary  text-lg  md:text-[30px] text-[40px]">
                      {slide.id}
                    </span>
                  </div>
                  <div className="font-secondary lg:text-xl xl:text-2xl text-secondary lg:mb-2 xl:mb-4">
                    {slide.title}
                  </div>
                  <div className="font-secondary text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm text-secondary text-left">
                    {slide.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1320px] w-full relative mt-[102px] mb-[102px] mx-auto ">
        <div className=" w-full">
          <div className=" progressbar bg-gray-200 h-1">
            <div
              className="progress bg-primary h-1 transition-all ease-in-out duration-300  "
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className=" absolute top-[-4px] w-full">
          <div className="flex justify-between">
            {screenWidth <= 768
              ? slides.map((_: any, index: any) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-3 h-3 rounded-full transition-all ease-in-out duration-500 ${
                      currentSlide > index && currentSlide !== index
                        ? 'bg-primary'
                        : 'bg-primary hover:bg-[#f596a3] hover:scale-150'
                    }   ${currentSlide === index ? ' scale-150 ' : ''} `}
                  ></button>
                ))
              : [...Array(slides.length - 1)].map((_: any, index: any) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-3 h-3 rounded-full transition-all ease-in-out duration-500 ${
                      currentSlide > index && currentSlide !== index
                        ? 'bg-primary'
                        : 'bg-primary hover:bg-[#f596a3] hover:scale-150'
                    }   ${currentSlide === index ? ' scale-150 ' : ''} `}
                  ></button>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
