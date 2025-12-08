"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import phase1 from "@/public/images/digital-bp/phase-1.png";
import phase2 from "@/public/images/digital-bp/phase-2.png";
import phase3 from "@/public/images/digital-bp/phase-3.png";
import phase4 from "@/public/images/digital-bp/phase-4.png";

import Card from "./Card";
import { StaticImageData } from "next/image";
import { NavigateNextIcon, NavigatePreviousIcon } from "@/components/ui/Icons";

interface Phase {
  title: string;
  image: StaticImageData;
  readmoreLink: string;
}

const FourPhaseBuildProcessSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Only 4 unique phases
  const phases: Phase[] = [
    {
      title: "Phase 1: The Architecture & Voice Design",
      image: phase1,
      readmoreLink: "/",
    },
    {
      title: "Phase 2: The Deep Integration (The Setup)",
      image: phase2,
      readmoreLink: "/",
    },
    {
      title: "Phase 3: The Dashboard & White-Labeling",
      image: phase3,
      readmoreLink: "/",
    },
    {
      title: "Phase 4: Managed Maintenance (The Care Plan)",
      image: phase4,
      readmoreLink: "/",
    },
    {
      title: "Phase 1: The Architecture & Voice Design",
      image: phase1,
      readmoreLink: "/",
    },
    {
      title: "Phase 2: The Deep Integration (The Setup)",
      image: phase2,
      readmoreLink: "/",
    },
    {
      title: "Phase 3: The Dashboard & White-Labeling",
      image: phase3,
      readmoreLink: "/",
    },
    {
      title: "Phase 4: Managed Maintenance (The Care Plan)",
      image: phase4,
      readmoreLink: "/",
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="w-full">
      {/* Navigation Arrows - Top Right */}
      <div className="flex items-center justify-end gap-2 mb-[50px] px-5 ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 flex cursor-pointer items-center border-0 justify-center bg-none rounded-full  hover:bg-none transition-colors "
          aria-label="Previous slide"
        >
          <NavigatePreviousIcon />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 flex cursor-pointer items-center border-0 justify-center bg-none rounded-full hover:bg-none transition-colors "
          aria-label="Next slide"
        >
          <NavigateNextIcon />
        </button>
      </div>

      {/* Swiper */}
      <div className="w-full overflow-hidden ml-[14%]">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          slidesPerGroup={1}
          speed={600}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          // loopAdditionalSlides={2}
          watchSlidesProgress={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="pb-4!"
        >
          {phases.map((phase, index) => (
            <SwiperSlide
              key={index}
              className="w-[512px]! max-w-[512px] shrink-0"
            >
              <Card
                title={phase.title}
                image={phase.image.src}
                readmoreLink={phase.readmoreLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Progress Indicator - Individual Lines */}
      {/* <div className="flex items-center justify-center gap-2 mt-6 px-5 md:px-0">
        {phases.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-300 ${
              index === activeIndex ? "bg-[#E5BF5B] w-8" : "bg-gray-300 w-6"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default FourPhaseBuildProcessSlider;
