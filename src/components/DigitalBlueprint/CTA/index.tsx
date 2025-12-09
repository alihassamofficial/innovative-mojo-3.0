"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";
import { PhoneSolidIcon } from "@/components/ui/Icons";

const DigitalBlueprintCTA = () => {
  return (
    <section className="relative w-full overflow-hidden  py-16 md:py-[124px] min-h-[500px] md:min-h-[604px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgImage} alt="CTA Background" fill priority />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto ">
        <div className="flex flex-col items-center text-center px-5">
          {/* Main Title */}
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            {" "}
            <Text
              as="h2"
              className="text-white text-3xl md:text-[48px] md:leading-[60px]  mb-[16px] font-bold font-mona-sans "
            >
              See The System In Action
            </Text>
          </div>

          {/* Subtitle */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {" "}
            <Text className="text-white capitalize text-[20px] md:text-[20px] md:leading-[32px] font-normal font-mona-sans mb-[40px] md:mb-[60px]">
              Don&apos;t just take our word for it. Talk to the technology we
              just described.
            </Text>
          </div>

          {/* CTA Button */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            {" "}
            <Link href="/contact-us">
              <Button className="bg-secondary border border-[#FAC11D] flex items-center justify-center gap-3 text-black text-lg md:text-[20px] font-medium  px-8 py-4 rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors w-[234px] h-[61px]">
                <PhoneSolidIcon />
                Click To Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBlueprintCTA;
