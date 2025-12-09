"use client";

import Image from "next/image";

import Text from "@/components/ui/Text";
import bgImage from "@/public/images/home/futuristic-approach/bg.png";

const FuturisticApproach = () => {
  return (
    <section
      className="relative w-full bg-white py-20 md:py-[84px] overflow-hidden md:min-h-[516px] flex items-center justify-center"
      style={{
        background: `url(${bgImage.src}) no-repeat center center`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-in"
    >
      <div className="relative max-w-[1240px] mx-auto px-5">
        <div
          className="flex flex-col items-center justify-center text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
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
