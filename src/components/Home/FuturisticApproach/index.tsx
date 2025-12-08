"use client";

import Image from "next/image";

import Text from "@/components/ui/Text";
import bgImage from "@/public/images/home/futuristic-approach/bg.png";

const FuturisticApproach = () => {
  return (
    <section className="relative w-full bg-white py-20 md:py-[84px] overflow-hidden md:min-h-[516px] flex items-center justify-center">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image src={bgImage} alt="bg" fill className="object-cover" />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col items-center justify-center text-center">
          {/* First Line */}
          <Text
            as="h2"
            className="md:text-[48px] md:leading-[120%] font-light font-mona-sans"
          >
            The Practical{" "}
            <span className="font-semibold">Futurist Approach Seamless</span>{" "}
            <br />
            Integration Zero Disruption
          </Text>
        </div>
      </div>
    </section>
  );
};

export default FuturisticApproach;
