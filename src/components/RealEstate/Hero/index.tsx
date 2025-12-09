"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import heroBg from "@/public/images/real-estate/bg.png";
import border from "@/public/images/real-estate/border.svg";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="flex items-center justify-center bg-white border shadow-[0px_4px_10px_0px_#0000001A] border-[#E1E3E8] rounded-full w-[107px] h-[35px] mb-[12px] font-mona-sans">
              <Text className="text-[13px] font-medium leading-none text-primary font-mona-sans">
                Real Estate
              </Text>
            </div>
          </div>
          {/* Main Heading */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Text
              as="h1"
              className="text-black mb-2 md:leading-[76px] leading-[33px]"
            >
              Speed-to-Lead is the Only <br />
              Metric That Matters
            </Text>
          </div>
          {/* Description */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <Text className="md:text-[20px] text-[16px] md:leading-[32px] leading-[22px] font-normal">
              In Real Estate, the first agent to answer wins the deal.
              Innovative Mojo deploys 24/7 AI Voice Agents that answer Zillow
              leads instantly, qualify buyers, and book showings directly to
              your calendar—while you are out closing deals.
            </Text>
          </div>
          {/* CTA Section */}
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact-us">
              <Button className="w-full md:w-[358px] md:h-[61px] h-[49px] flex justify-center items-center mt-[30px]">
                Audit My Lead Response Time
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero;
