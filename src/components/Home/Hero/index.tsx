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
    <section className="relative w-full bg-white overflow-hidden min-h-[808px]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={heroBg}
          alt="Hero Background"
          width={1440}
          height={808}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-5 py-20 md:pt-[65px] md:pb-[235  px]">
        <div className="flex flex-col items-center text-center ">
          {/* Rating Badge */}
          <div className="flex items-center justify-center gap-2 bg-white border border-[#E1E3E8] rounded-full w-[185px] h-[35px] mb-[30px]">
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
          <Text as="h1" className=" mb-2">
            We Build Digital
            <br />
            <span className="text-black">Workforces Not Websites</span>
          </Text>

          {/* Description */}
          <Text className="text-[20px] leading-[32px] font-normal">
            Stop bleeding revenue to missed calls. Innovative Mojo deploys
            enterprise-grade AI Voice Agents that answer phones,
            <br /> qualify leads, and book appointments 24/7. Your human team
            needs sleep. Your business doesn&apos;t.
          </Text>

          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-4 w-full max-w-md mt-[60px]">
            <Text
              as="h2"
              className="mb-[9px] font-semibold md:text-[26px] md:leading-[100%]"
            >
              Talk To Voice Agent
            </Text>

            {/* Phone Input */}
            <div className="relative w-full mb-[9px]">
              <div className="flex items-center bg-[#E1E3E833]/20 border border-[#E5BF5B] h-[75px] w-[464px] rounded-full overflow-hidden">
                {/* Country Code Dropdown */}
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-4 py-4 bg-transparent text-black font-medium border-r border-[#CFA846]/30 focus:outline-none appearance-none cursor-pointer"
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
                  className="flex-1 px-4 py-4 bg-transparent text-black placeholder:text-black/40 focus:outline-none"
                />

                {/* Call Button */}
                <button
                  onClick={handleCall}
                  className="w-14 h-14 bg-secondary cursor-pointer rounded-full flex items-center justify-center transition-colors duration-200  m-1 shrink-0"
                  aria-label="Call voice agent"
                >
                  <PhoneIcon />
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <Text className="text-[18px] leading-[100%] font-normal font-mona-sans">
              Available 24/7 • No spam, ever
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
