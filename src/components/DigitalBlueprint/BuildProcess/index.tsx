"use client";

import React from "react";

import Text from "@/components/ui/Text";
import FourPhaseBuildProcessSlider from "./Slider";

const FourPhaseBuildProcess = () => {
  return (
    <section className="relative overflow-hidden w-full bg-white py-20 md:pt-[115px] md:pb-[90px]">
      <div className="max-w-[1240px] mx-auto  mb-[30px]">
        <div className="text-center">
          {/* Main Title */}
          <Text
            as="h2"
            className="md:text-[48px] md:leading-[60px] font-bold  mb-[8px]"
          >
            The 4-Phase Build Process
          </Text>

          {/* Subtitle */}
          <Text className="md:text-[18px] md:leading-[44px] font-normal ">
            We handle 100% of the technical setup. You don&apos;t write a single
            line of code.
          </Text>
        </div>
      </div>

      <div className="w-full ">
        <FourPhaseBuildProcessSlider />
      </div>
    </section>
  );
};

export default FourPhaseBuildProcess;
