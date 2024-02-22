"use client";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import React, { PropsWithChildren, useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;

export const Slider = ({ children, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const onChange = () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onChange);
      return () => {
        if (emblaApi) {
          emblaApi.off("select", onChange);
        }
      };
    }
  }, [emblaApi]);

  const handlePrev = () => {
    if (emblaApi && currentIndex > 0) {
      emblaApi.scrollPrev();
    }
  };

  const handleNext = () => {
    if (emblaApi && currentIndex < emblaApi.slideNodes().length - 1) {
      emblaApi.scrollNext();
    }
  };

  return (
    <div className="relative flex flex-col gap-6 sm:gap-8">
      <div className="gap-y-6" ref={emblaRef}>
        <div className="flex gap-x-2 sm:gap-x-4">{children}</div>
      </div>
      <div className="flex w-auto sm:w-full sm:justify-end h-auto sm:pr-[120px]">
        <div className="flex flex-row align-middle w-[190px] justify-between text-body-2">
          <div className="flex items-center text-gray-900 ">
            {currentIndex < 9 ? `0${currentIndex + 1}` : currentIndex + 1}
            <span className="text-primary-700">/</span>
            <span className="text-gray-500">
              {emblaApi && `0${emblaApi.slideNodes().length}`}
            </span>

          </div>
          <div className="flex flex-row space-x-[21px]">
            <button
              onClick={handlePrev}
              className={`text-[32px] focus:outline-none ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              <GoArrowLeft
                className={`${currentIndex === 0 ? "text-gray-300" : "text-primary-700"
                  }`}
              />
            </button>
            <button
              onClick={handleNext}
              className={`text-[32px] focus:outline-none ${currentIndex === (emblaApi && emblaApi.slideNodes().length - 1)
                ? "opacity-50 cursor-not-allowed"
                : ""
                }`}
            >
              <GoArrowRight
                className={`${currentIndex === (emblaApi && emblaApi.slideNodes().length - 1)
                  ? "text-gray-400"
                  : "text-primary-700"
                  }`}
              />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
