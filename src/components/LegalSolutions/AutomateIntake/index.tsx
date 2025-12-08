"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";

const AutomateIntake = () => {
  return (
    <section className="flex items-center relative w-full overflow-hidden  py-16 min-h-[400px] md:min-h-[600px] mt-12">
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
            className="text-white text-3xl md:text-[48px] md:leading-[60px]  font-normal font-mona-sans capitalize max-w-[600px]"
          >
            Stop losing <span className="font-bold">commissions </span> 
            to voicemail.
          </Text>

          {/* CTA Button */}
          <Link href="/talk-to-mojo">
            <Button className="bg-secondary border mt-5 border-[#FAC11D] text-black text-lg md:text-[20px] font-semibold  px-8 py-4 rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors w-[366px] h-[60px]">
            Audition Your New AI Agent Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};


export default AutomateIntake