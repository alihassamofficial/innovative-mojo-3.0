"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden  py-16 md:py-[124px]">
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
            className="text-white text-3xl md:text-[48px] md:leading-[60px]  font-bold font-mona-sans "
          >
            Interactive Demo (The &quot;Boom Call&quot;)
          </Text>

          {/* Subtitle */}
          <Text className="text-white text-xl md:text-[32px] md:leading-[44px] font-normal font-mona-sans mb-6 md:mb-[42px]">
            Don&apos;t Believe the Hype?
          </Text>

          {/* Call to Action Text */}
          <Text className="text-white text-xl md:text-[32px] md:leading-[44px] font-normal font-mona-sans mb-8 md:mb-12 ">
            Talk to <span className="font-bold">&quot;Mojo&quot;</span> right
            now. No forms. No waiting. Just tap the <br /> button and try to
            stump our AI.
          </Text>

          {/* CTA Button */}
          <Link href="/talk-to-mojo">
            <Button className="bg-secondary border border-[#FAC11D] text-black text-lg md:text-[20px] font-semibold  px-8 py-4 rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors w-[244px] h-[60px]">
              Talk To Mojo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
