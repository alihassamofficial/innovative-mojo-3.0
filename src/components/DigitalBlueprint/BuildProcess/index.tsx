"use client";

import React from "react";

import Text from "@/components/ui/Text";
import FourPhaseBuildProcessSlider from "./Slider";

const FourPhaseBuildProcess = () => {
  return (
    <section className="relative overflow-x-hidden md:overflow-hidden w-full bg-white py-20 md:pt-[115px] md:pb-[90px]">
      <div className="max-w-[1240px] mx-auto  mb-[30px]">
        <div className="text-center px-5 ">
          {/* Main Title */}
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <Text
              as="h2"
              className="md:text-[48px] md:leading-[60px] font-bold  mb-[8px]"
            >
              The 4-Phase Build Process
            </Text>
          </div>

          {/* Subtitle */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {" "}
            <Text className="md:text-[20px] md:leading-[32px] font-normal ">
              We handle 100% of the technical setup. You don&apos;t write a
              single line of code.
            </Text>
          </div>
        </div>
      </div>

      <div className="w-full  ">
        <FourPhaseBuildProcessSlider />
      </div>
    </section>
  );
};

export default FourPhaseBuildProcess;
