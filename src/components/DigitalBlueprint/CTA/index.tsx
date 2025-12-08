"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";
import { PhoneSolidIcon } from "@/components/ui/Icons";

const DigitalBlueprintCTA = () => {
  return (
    <section className="relative w-full overflow-hidden  py-16 md:py-[124px] md:min-h-[604px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="CTA Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto ">
        <div className="flex flex-col items-center text-center px-5">
          {/* Main Title */}
          <Text
            as="h2"
            className="text-white text-3xl md:text-[48px] md:leading-[60px]  mb-[16px] font-bold font-mona-sans "
          >
            See The System In Action
          </Text>

          {/* Subtitle */}
          <Text className="text-white text-[20px] md:text-[20px] md:leading-[32px] font-normal font-mona-sans mb-[40px] md:mb-[60px]">
            Don&apos;t just take our word for it. Talk to the technology we just
            described.
          </Text>

          {/* CTA Button */}
          <Link href="/talk-to-mojo">
            <Button className="bg-secondary border border-[#FAC11D] flex items-center justify-center gap-2 text-black text-lg md:text-[20px] font-semibold  px-8 py-4 rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors w-[234px] h-[60px]">
              <PhoneSolidIcon />
              Click To Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalBlueprintCTA;
