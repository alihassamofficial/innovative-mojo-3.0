import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import problemBg from "@/public/images/real-estate/problembg.png";
// import problemIcon from "@/public/images/real-estate/problem.png";
import posterImg from "@/public/images/home/implementation/poster.png";
const Implementation = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="max-w-[1240px] mx-auto  ">
          <div className="mt-[90px] px-5">
            {/* Main Headline */}
            <Text
              as="h2"
              className="md:text-[48px] md:leading-[60px] font-semibold capitalize   mb-[8px] text-center"
            >
              Implementation (The &quot;Retrofit&quot;)
            </Text>

            {/* Sub-headline */}
            <Text className="md:text-[32px] md:leading-[44px]  text-center  font-normal">
              We Don&apos;t Disrupt Your Business. We Upgrade It.
            </Text>
          </div>
        </div>
      </section>
      <div className="relative w-full bg-white overflow-hidden md:h-[424px] mt-[74px] ">
        <div className="relative flex gap-0 justify-center">
          <div className="relative md:left-[3.8%]">
            <Image
              src={problemBg}
              alt="problemBg"
              className="w-full absolute inset-0 max-w-[818px] h-[425px]"
            />
            <div className="relative w-full max-w-[815px] z-10 pl-[20px]  pr-[72px] flex flex-col justify-center items-start min-h-[425px]">
              <Text className="text-[#050000] text-[20px]  leading-[32px] font-normal mb-[50px]">
                You don&apos;t need a new website or a new phone number. We act
                as the <br />
                &quot;Intelligence Layer&quot; on top of what you already have.
              </Text>
              <ul className="list-disc pl-[20px]">
                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                  Web Integration: We embed AI widgets into your site to turn
                  clicks into conversations.
                </li>
                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                  CRM Sync: We map the AI&apos;s data directly to your database
                  fields.
                </li>
                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                  Dashboard Access: You get a crystal-clear dashboard to listen
                  to call recordings and track ROI in real-time.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src={posterImg}
              alt="posterImg"
              className="w-full max-w-[504px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Implementation;
