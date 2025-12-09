"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import { GoogleRatingIcon, PhoneIcon } from "@/components/ui/Icons";
import heroBg from "@/public/images/home/hero/bg.png";
import ratingStarsIcon from "@/public/images/home/hero/rating-stars.svg";

const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const handleCall = () => {
    // Handle call action
    console.log(`Calling ${countryCode} ${phoneNumber}`);
  };

  return (
    <section className="relative w-full bg-white overflow-hidden md:min-h-[808px]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src={heroBg} alt="Hero Background" fill priority />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-5 py-20 md:pt-[65px] md:pb-[235  px]">
        <div className="flex flex-col items-center text-center ">
          {/* Rating Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="flex items-center justify-center gap-2 bg-white border border-[#E1E3E8] rounded-full w-[185px] h-[35px] mb-[30px]"
          >
            <GoogleRatingIcon />

            <div className="flex items-center gap-1">
              <Text className="text-[13px] font-medium leading-none">
                {" "}
                Voted 5.0{" "}
              </Text>
              <Image
                src={ratingStarsIcon}
                alt="Rating Stars"
                width={71}
                height={13}
                className="inline-block"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Text as="h1" className=" mb-2">
              We Build Digital
              <br />
              <span className="text-black">Workforces Not Websites</span>
            </Text>
          </div>

          {/* Description */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <Text className="text-[16px] md:text-[20px] leading-[22px] md:leading-[32px] font-normal">
              Stop bleeding revenue to missed calls. Innovative Mojo deploys
              enterprise-grade AI Voice Agents that answer phones,
              <br /> qualify leads, and book appointments 24/7. Your human team
              needs sleep. Your business doesn&apos;t.
            </Text>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-4 w-full max-w-md mt-[60px]">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <Text
                as="h2"
                className="mb-[9px] font-semibold md:text-[26px] md:leading-[100%]"
              >
                Talk To Voice Agent
              </Text>
            </div>

            {/* Phone Input */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="relative w-full mb-[9px]"
            >
              <div className="flex items-center bg-white border border-[#E5BF5B] h-[50px] md:h-[75px] w-full md:max-w-[464px] mx-auto rounded-full overflow-hidden">
                {/* Country Code Dropdown */}
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-3 md:px-4 py-2 md:py-4 bg-transparent text-black font-medium border-r border-[#CFA846]/30 focus:outline-none appearance-none cursor-pointer shrink-0 text-sm md:text-base"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+86">+86</option>
                </select>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="000-000-000"
                  className="flex-1 min-w-0 px-2 md:px-4 py-2 md:py-4 bg-transparent text-black placeholder:text-black/40 focus:outline-none text-sm md:text-base"
                />

                {/* Call Button */}
                <button
                  onClick={handleCall}
                  className="w-10 h-10 md:w-14 md:h-14 bg-secondary cursor-pointer rounded-full flex items-center justify-center transition-colors duration-200 m-1 md:m-1 shrink-0"
                  aria-label="Call voice agent"
                >
                  <PhoneIcon />
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <Text className="text-[18px] leading-[100%] font-normal font-mona-sans">
                Available 24/7
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
