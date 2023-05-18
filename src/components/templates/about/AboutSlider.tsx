import React, { useEffect, useState } from 'react';
import AboutSlide from '@/components/atoms/AboutSlide';
import Image from 'next/image';

const AboutSlider = ({ slides }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const titles = ['Mission', 'Vision', 'Problem', 'Solution'];
  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= slides.length) {
      newIndex = slides.length - 1;
    }

    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    setProgress((currentSlide / (slides.length - 1)) * 100);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex((prevIndex: any) =>
          prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center w-full">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide: any) => (
                <div key={slide.id} className="flex-shrink-0 w-full px-2">
                  <AboutSlide slide={slide} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[50px] mb-10 ">
        <div className=" w-full px-6">
          <div className=" progressbar bg-gray-200 h-1">
            <div
              className="progress bg-primary h-1 transition-all ease-in-out duration-300  "
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className=" absolute top-[-4px] w-full px-6">
          <div className="flex justify-between">
            {slides.map((_: any, index: any) => (
              <button
                key={index}
                // onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all ease-in-out duration-500 ${
                  currentSlide > index && currentSlide !== index
                    ? 'bg-primary'
                    : 'bg-primary hover:bg-[#f596a3]'
                } `}
              ></button>
            ))}
          </div>
        </div>
        <div className="w-full mt-10 flex justify-between px-4 ">
          {titles.map((title: any, index: any) => (
            <span
              key={index}
              className={` font-primary text-xs md:text-base ${
                currentSlide === index ? 'text-primary' : 'text-secondary'
              }`}
            >
              {title}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-end space-x-2 mb-[102px] px-4 ">
        <button className="p-4 bg-primary rounded-md" onClick={handlePrevClick}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 16 16"
            className="rotate-180"
            aria-hidden="true"
            color="white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'white' }}
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </button>
        <button className="p-4 bg-primary rounded-md" onClick={handleNextClick}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 16 16"
            color="white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'white' }}
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default AboutSlider;
