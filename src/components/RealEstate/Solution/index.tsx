import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bgImage from "@/public/images/real-estate/solution-bg.png";
import solutionIcon from "@/public/images/real-estate/solution-right.png";
import cardbg from "@/public/images/real-estate/cardbg.svg";

const Solution = () => {
  return (
    <div>
      <Text
        as="h2"
        className="text-black w-full max-w-[1093px] mb-[15px] mt-[51px] md:text-[48px] md:leading-[60px] text-center mx-auto"
      >
        The Solution: The 24/7 Inside Sales Agent (ISA)
      </Text>
      <Text className="text-black md:text-[22px] leading-[32px] w-full max-w-[1014px] mb-[145px] text-center mx-auto">
        We don't sell generic "answering services." We engineer intelligent AI
        Agents that plug directly into your Follow Up Boss, kvCORE, or Lofty
        CRM.
      </Text>

      <div className="w-full">
        {/* <Image
          src={bgImage}
          alt="bgImage"
          className="w-full absolute inset-0"
        /> */}
        <div className="relative z-10">
          <Image
            src={solutionIcon}
            alt="solutionIcon"
            className="w-full md:max-w-[705px] relative left-0"
          />

          <div className="relative z-10">
            <div className="relative">
              <Image
                src={cardbg}
                alt="cardbg"
                className="w-full md:max-w-[546px] absolute inset-0 h-full"
              />
              <div className="relative z-10 w-full md:max-w-[546px]">
                <div className="w-[67px] h-[43px] bg-[#E8BE45] rounded-[8px] mt-[35px] mb-[20px]" />
                <Text className="text-black text-[24px] font-semibold mb-2">
                  Automated Showing Coordination
                </Text>
                <Text className="text-black text-[24px] font-normal">
                  We don't sell generic 'answering services.' We engineer
                  intelligent AI Agents that plug directly into your Follow Up
                  Boss, kvCORE, or Lofty CRM.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
