"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import heroBg from "@/public/images/real-estate/bg.png";
import border from "@/public/images/real-estate/border.svg";
import Button from "@/components/ui/Button";

const RealEstateHero = () => {
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
            className="flex items-center justify-center bg-white border  shadow-[0px_4px_10px_0px_#0000001A] border-[#E1E3E8] rounded-full w-[107px] h-[35px] mb-[12px]"
          >
            <Text className="text-[13px] font-medium leading-none text-primary">
              Legal
            </Text>
          </div>

          {/* Main Heading */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Text
              as="h1"
              className="text-black mb-2 md:leading-[76px] leading-[33px] max-w-[982px] mx-auto"
            >
              Stop Wasting Billable Hours on Unqualified Leads.
            </Text>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            {/* Description */}
            <div>
              <Text className="text-[16px] leading-[22px] md:text-[20px] md:leading-[32px] font-normal max-w-[1122px] mx-auto">
                Your time is your inventory. Innovative Mojo builds AI Intake
                Specialists that screen potential clients 24/7, filter out
                non-viable cases, and secure retainers—before you ever pick up
                the phone.
              </Text>
            </div>
          </div>

          {/* CTA Section */}
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Button
              className="w-full md:w-[286px] h-[49px] md:h-[61px] flex justify-center items-center mt-[30px] border border-[#FAC111D] shadow-[0px_5px_10px_0px_#00000026]
"
            >
              Audit My Intake Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero;
