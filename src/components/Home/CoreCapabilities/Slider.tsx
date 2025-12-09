"use client";

import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import image1 from "@/public/images/home/core-capabilities/1.png";
import image2 from "@/public/images/home/core-capabilities/2.png";
import image3 from "@/public/images/home/core-capabilities/3.png";
import image4 from "@/public/images/home/core-capabilities/4.png";

import Card from "./Card";

interface Capability {
  title: string;
  description: string;
}

const CoreCapabilitiesSlider: React.FC = () => {
  const baseImages = [image1, image2, image3, image4];
  const images = [...baseImages, ...baseImages];

  const baseCapabilities: Capability[] = [
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
  const capabilities = [...baseCapabilities, ...baseCapabilities];

  const handleCardClick = (title: string) => {
    console.log(`Clicked: ${title}`);
  };

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="pb-4!"
      >
        {capabilities.map((item, index) => (
          <SwiperSlide
            key={`${item.title}-${index}`}
            className="w-[323px]! max-w-[323px] shrink-0"
          >
            <Card
              title={item.title}
              description={item.description}
              image={images[index]}
              onClick={() => handleCardClick(item.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoreCapabilitiesSlider;
