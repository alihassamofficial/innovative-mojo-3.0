import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import problemBg from "@/public/images/real-estate/problembg.png";
import problemIcon from "@/public/images/real-estate/problem.png";
import bgImage from "@/public/images/home/futuristic-approach/bg.png";
const Problem = () => {
  return (
    <>
      <div className="relative w-full bg-white overflow-hidden md:h-[424px] mt-[85px] mb-[92px]">
        <div className="relative flex gap-0 justify-center">
          <div className="relative md:left-[3.8%]">
            <Image
              src={problemBg}
              alt="problemBg"
              className="w-full absolute inset-0 max-w-[818px] h-[425px]"
            />
            <div className="relative w-full max-w-[815px] z-10 pl-[32px] pr-[72px] flex flex-col justify-center items-center min-h-[425px]">
              <Text className="text-[#050000] text-[20px] leading-[32px] font-normal mb-[50px]">
                You are in the middle of a walkthrough with a high-value client.
                Your phone buzzes. It's a new lead calling from a listing site.
              </Text>
              <ul className="list-disc pl-5">
                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                  Choice A: Answer it, and be rude to the client standing in
                  front of you.
                </li>
                <br />
                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                  Choice B: Send it to voicemail, and watch that lead call the
                  next agent on the list.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src={problemIcon}
              alt="problemIcon"
              className="w-full max-w-[504px]"
            />
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white py-20 md:py-[84px] overflow-hidden md:min-h-[516px] flex items-center justify-center">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <Image src={bgImage} alt="bg" fill className="object-cover" />
        </div>

        <div className="relative max-w-[859px] mx-auto px-5">
          <div className="flex flex-col items-center justify-center text-center">
            {/* First Line */}
            <Text
              as="h2"
              className="md:text-[32px] md:leading-[120%] font-light font-mona-sans"
            >
              The Reality: <span className="font-semibold"> 78% of leads </span>{" "}
              do business with the first agent who speaks to them. If you rely
              on voicemail, you have already lost the commission
            </Text>
          </div>
        </div>
      </section>
    </>
  );
};

export default Problem;
