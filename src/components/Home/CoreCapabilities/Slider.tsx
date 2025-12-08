"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Card from "./Card";

interface Capability {
  title: string;
  description: string;
}

const CoreCapabilitiesSlider: React.FC = () => {
  const capabilities: Capability[] = [
    {
      title: "Natural conversations",
      description:
        "Sub-second latency with human-like turn-taking. Handles interruptions, background noise, and context-aware greetings.",
    },
    {
      title: "Tool-aware memory",
      description:
        "Pre-call, in-call, and post-call actions. Define custom logic or use templates to complete tasks during conversations.",
    },
    {
      title: "Workflow automation",
      description:
        "Remembers past conversations, actions taken in your systems, and customer context across multiple calls.",
    },
    {
      title: "Intelligent routing",
      description:
        "Smart call handling with queue management, voicemail logic,transfers, and supervisor controls at scale.",
    },
  ];

  const handleCardClick = (title: string) => {
    console.log(`Clicked: ${title}`);
  };

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
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
        loopAdditionalSlides={2}
        watchSlidesProgress={true}
        className="pb-4!"
      >
        {capabilities.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[323px]! max-w-[323px] shrink-0"
          >
            <Card
              title={item.title}
              description={item.description}
              onClick={() => handleCardClick(item.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoreCapabilitiesSlider;
