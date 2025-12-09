"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import heroBg from "@/public/images/real-estate/bg.png";
import border from "@/public/images/real-estate/border.svg";
import Button from "@/components/ui/Button";

const DigitalBlueprintHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden md:min-h-[508px] min-h-[400px]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src={heroBg} alt="Hero Background" fill priority />
      </div>

      {/* Border Image - positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image src={border} alt="border" className=" object-contain mx-auto" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-5 py-20">
        <div className="flex flex-col items-center text-center ">
          {/* Rating Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="flex items-center justify-center bg-white border shadow-[0px_4px_10px_0px_#0000001A]
 border-[#E1E3E8] rounded-full w-[145px] h-[35px] mb-[12px]"
          >
            <Text className="text-[13px] font-medium leading-none text-primary">
              Digital Blueprint
            </Text>
          </div>

          {/* Main Heading */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Text
              as="h1"
              className="text-black mb-2 md:leading-[76px] leading-[33px]"
            >
              From Static Code to Living
              <br className="hidden md:block" />
              Intelligence
            </Text>
          </div>

          {/* Description */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <Text className="md:text-[20px] text-[16px] md:leading-[32px] leading-[22px] font-normal">
              We don&apos;t just &quot;turn on a bot.&quot; We engineer a custom
              intelligence layer that integrates seamlessly with your
              <br className="hidden md:block" /> existing technology stack. We
              design it, we build it, we feed it, and we maintain it.
            </Text>
          </div>

          {/* CTA Section */}

          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Button
              className="w-full md:w-[262px] md:h-[61px] h-[49px] flex justify-center items-center mt-[30px] border border-[#FAC11D] shadow-[0px_5px_10px_0px_#00000026]
"
            >
              Start Your Build
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBlueprintHero;
