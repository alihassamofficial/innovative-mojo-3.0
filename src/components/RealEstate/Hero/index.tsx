"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import heroBg from "@/public/images/real-estate/bg.png";
import border from "@/public/images/real-estate/border.svg";
import Button from "@/components/ui/Button";

const RealEstateHero = () => {
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
        <Image
          src={border}
          alt="border"
          className="w-full max-w-[1138px] mx-auto"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-5 py-20">
        <div className="flex flex-col items-center text-center ">
          {/* Rating Badge */}
          <div className="flex items-center justify-center bg-white border border-[#E1E3E8] rounded-full w-[107px] h-[35px] mb-[12px] font-mona-sans shadow-lg">
            <Text className="text-[13px] font-medium leading-none text-primary font-mona-sans">
              Real Estate
            </Text>
          </div>

          {/* Main Heading */}
          <Text as="h1" className="text-black mb-2 leading-[76px]">
            Speed-to-Lead is the Only <br />
            Metric That Matters
          </Text>

          {/* Description */}
          <Text className="text-[20px] leading-[32px] font-normal">
            In Real Estate, the first agent to answer wins the deal. Innovative
            Mojo deploys 24/7 AI Voice Agents that answer Zillow leads
            instantly, qualify buyers, and book showings directly to your
            calendar—while you are out closing deals.
          </Text>

          {/* CTA Section */}

          <Button className="w-[358px] h-[61px] flex justify-center items-center mt-[30px]">
            Audit My Lead Response Time
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero;
