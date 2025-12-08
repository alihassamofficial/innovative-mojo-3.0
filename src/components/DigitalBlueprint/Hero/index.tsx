"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import heroBg from "@/public/images/real-estate/bg.png";
import border from "@/public/images/real-estate/border.svg";
import Button from "@/components/ui/Button";

const DigitalBlueprintHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden h-[508px]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={heroBg}
          alt="Hero Background"
          width={1440}
          height={808}
          className="w-full h-full"
          priority
        />
      </div>

      {/* Border Image - positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image src={border} alt="border" className="w-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-5 py-20">
        <div className="flex flex-col items-center text-center ">
          {/* Rating Badge */}
          <div className="flex items-center justify-center bg-white border border-[#E1E3E8] rounded-full w-[145px] h-[35px] mb-[12px]">
            <Text className="text-[13px] font-medium leading-none text-primary">
              Digital Blueprint
            </Text>
          </div>

          {/* Main Heading */}
          <Text as="h1" className="text-black mb-2 leading-[76px]">
            From Static Code to Living
            <br />
            Intelligence
          </Text>

          {/* Description */}
          <Text className="text-[20px] leading-[32px] font-normal">
            We don&apos;t just &quot;turn on a bot.&quot; We engineer a custom
            intelligence layer that integrates seamlessly with your
            <br className="hidden md:block" /> existing technology stack. We
            design it, we build it, we feed it, and we maintain it.
          </Text>

          {/* CTA Section */}

          <Button className="w-[262px] h-[61px] flex justify-center items-center mt-[30px]">
            Start Your Build
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalBlueprintHero;
