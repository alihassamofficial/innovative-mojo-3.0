"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import phase1 from "@/public/images/digital-bp/phase-1.png";
import phase2 from "@/public/images/digital-bp/phase-2.png";
import phase3 from "@/public/images/digital-bp/phase-3.png";
import phase4 from "@/public/images/digital-bp/phase-4.png";

import Card from "./Card";
import PhaseModal from "./PhaseModal";
import { StaticImageData } from "next/image";
import { NavigateNextIcon, NavigatePreviousIcon } from "@/components/ui/Icons";

interface Phase {
  title: string;
  image: StaticImageData;
  readmoreLink: string;
  description?: string;
  bulletPoints?: string[];
}

const FourPhaseBuildProcessSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Base phases array
  const basePhases: Phase[] = [
    {
      title: "Phase 1: The Architecture & Voice Design",
      image: phase1,
      readmoreLink: "/",
      description:
        "The Foundation. Before we build, we map the psychology of your ideal employee.",
      bulletPoints: [
        "Persona Engineering: We don't use robot voices. We clone your top salesperson's voice or select from ultra-realistic models that match your brand (Professional, Empathetic, or High-Energy).",
        "The \"Brain\" Dump: We ingest your company's DNA. We upload your training manuals, PDFs, website data, and past call recordings into the AI's Knowledge Base so it knows your business as well as you do.",
      ],
    },
    {
      title: "Phase 2: The Deep Integration (The Setup)",
      image: phase2,
      readmoreLink: "/",
      description:
        "The Plumbing. An AI that can't access your tools is useless. We hardwire the system into your operations.",
      bulletPoints: [
        'The "Feed": We connect the AI to your live data. For Real Estate, we sync it to your MLS/Listings. For Law, we sync it to your Calendar.',
        'The Logic: We use Make.com to build "If/Then" workflows.',
        'Example: "IF the lead has a budget over $1M, THEN transfer the call to the Senior Partner immediately."',
      ],
    },
    {
      title: "Phase 3: The Dashboard & White-Labeling",
      image: phase3,
      readmoreLink: "/",
      description:
        "The Control Center. You get full transparency without the technical headache.",
      bulletPoints: [
        "Your Custom Portal: We set you up with a branded dashboard (powered by Vapify/ChatDash).",
        "Total Visibility: Log in to hear call recordings, read transcripts, and see exactly how many appointments the AI has booked.",
      ],
    },
    {
      title: "Phase 4: Managed Maintenance (The Care Plan)",
      image: phase4,
      readmoreLink: "/",
      description:
        'The Insurance. AI isn\'t "set it and forget it." Models drift. Information changes.',
      bulletPoints: [
        "Retraining: Did the AI miss a question? We review the logs weekly and update the prompt to fix it.",
        'Data Feeding: New pricing? New listings? Just email us the update, and we "feed" the AI the new data instantly.',
        "Uptime Monitoring: We monitor the server status 24/7 to ensure your digital workforce never calls in sick.",
      ],
    },
  ];

  // Duplicate phases array for smooth looping
  // Create new objects with fresh image references to avoid issues
  const phases = [
    ...basePhases,
    ...basePhases.map((phase) => ({
      ...phase,
      image: phase.image, // Keep the same image reference
    })),
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleReadMore = (phase: Phase) => {
    // Find the original phase from basePhases to ensure correct image reference
    const originalPhase =
      basePhases.find((p) => p.title === phase.title) || phase;
    setSelectedPhase(originalPhase);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhase(null);
  };

  return (
    <div className="w-full">
      {/* Navigation Arrows - Top Right */}
      <div className="pr-[100px]">
        <div className="flex items-center justify-end gap-2 mb-[50px]">
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
      </div>

      {/* Swiper */}
      <div className="w-full overflow-x-hidden">
        <div className="max-w-[1240px] mx-auto px-5 relative">
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
            className="pb-4! overflow-visible"
            style={{
              marginRight: "calc(-100vw + 1240px + 40px)",
            }}
          >
            {phases.map((phase, index) => {
              // Ensure image src is properly formatted as string
              const imageSrc = phase.image.src;

              return (
                <SwiperSlide
                  key={`${phase.title}-${index}`}
                  className="w-[512px]! max-w-[512px] shrink-0"
                >
                  <Card
                    title={phase.title}
                    image={imageSrc}
                    readmoreLink={phase.readmoreLink}
                    onReadMore={() => handleReadMore(phase)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
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

      {/* Phase Modal */}
      {selectedPhase && (
        <PhaseModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedPhase.title}
          image={selectedPhase.image}
          description={selectedPhase.description}
          bulletPoints={selectedPhase.bulletPoints}
        />
      )}
    </div>
  );
};

export default FourPhaseBuildProcessSlider;
