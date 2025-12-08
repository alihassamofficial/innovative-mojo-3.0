"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";

const StopeLosing = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[604px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgImage} alt="CTA Background" fill className="" priority />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto ">
        <div className="flex flex-col items-center text-center px-5">
          {/* Main Title */}
          <Text
            as="h2"
            className="text-white text-3xl md:text-[48px] md:leading-[60px] font-normal font-mona-sans capitalize mb-[31px]"
          >
            Stop losing <span className="font-semibold"> commissions </span>{" "}
            <br />
            to voicemail.
          </Text>

          {/* CTA Button */}
          <Link href="/talk-to-mojo">
            <Button className="bg-secondary border border-[#FAC11D] text-black text-lg md:text-[20px] font-semibold  w-[366px] h-[60px] rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors">
              Audition Your New AI Agent Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StopeLosing;
