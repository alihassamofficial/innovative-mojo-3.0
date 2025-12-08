"use client";

import React from "react";

import Text from "@/components/ui/Text";
import CoreCapabilitiesSlider from "./Slider";

const CoreCapabilities = () => {
  return (
    <section className="relative overflow-hidden w-full bg-white py-20 md:pt-[118px] md:pb-[90px]">
      <div className="pl-[14%]  ">
        <div className="flex flex-col gap-x-[135px] md:flex-row items-start ">
          {/* Left Section */}
          <div className="w-full md:w-[400px] shrink-0">
            {/* Label */}
            <Text className="text-primary/50 uppercase text-[18px] leading-none font-normal font-mona-sans mb-[28px]">
              CORE CAPABILITIES
            </Text>

            {/* Main Title */}
            <Text as="h2" className="md:text-[60px] md:leading-[100%] ">
              The Business Case
            </Text>

            {/* Subtitle */}
            <Text className="md:text-[18px] md:leading-[44px] font-normal mb-[10px]">
              The Math is Simple. You Are Losing Money.
            </Text>

            {/* Description */}
            <Text className="md:text-[20px] md:leading-[30px] font-normal tracking-[-1px] ">
              In today&apos;s on-demand economy, availability is currency. When
              a high-value lead calls your firm, they expect an immediate
              response. If they reach voicemail, the opportunity is lost to a
              competitor.
            </Text>
          </div>

          {/* Right Section - Slider */}
          <div className="w-full" data-aos="fade-left">
            <CoreCapabilitiesSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
