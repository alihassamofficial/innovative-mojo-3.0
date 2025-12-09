"use client";

import React from "react";

import Text from "@/components/ui/Text";
import CoreCapabilitiesSlider from "./Slider";

const CoreCapabilities = () => {
  return (
    <section className="relative overflow-hidden w-full bg-white py-[50px] md:pt-[118px] md:pb-[90px]">
      <div className="max-w-[1240px] mx-auto  ">
        <div className="flex flex-col md:gap-x-[135px] gap-x-5 md:gap-y-0 gap-y-10 md:flex-row items-start md:px-5">
          {/* Left Section */}
          <div
            className="w-full md:w-[400px] shrink-0 px-5 md:px-0"
            data-aos="fade-right"
          >
            {/* Label */}
            <Text className="text-primary/50 uppercase text-[14px] md:text-[18px] leading-none font-normal font-mona-sans md:mb-[28px] mb-[20px]">
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
            <Text className="md:text-[20px] md:leading-[30px] font-normal md:tracking-[-1px] ">
              In today&apos;s on-demand economy, availability is currency. When
              a high-value lead calls your firm, they expect an immediate
              response. If they reach voicemail, the opportunity is lost to a
              competitor.
            </Text>
          </div>

          {/* Right Section - Slider */}
          <div className="w-full pl-5 md:px-0" data-aos="fade-left">
            <CoreCapabilitiesSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
