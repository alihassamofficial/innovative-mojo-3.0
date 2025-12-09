"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";
import { PhoneSolidIcon } from "@/components/ui/Icons";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] py-16 md:py-[124px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgImage} alt="CTA Background" fill priority />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto ">
        <div className="flex flex-col items-center text-center px-5">
          {/* Main Title */}
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <Text
              as="h2"
              className="text-white text-[30px] md:text-[48px] md:leading-[60px]  font-bold font-mona-sans "
            >
              Interactive Demo (The &quot;Boom Call&quot;)
            </Text>

            {/* Subtitle */}

            <Text className="text-white text-[20px] md:text-[32px] md:leading-[44px] font-normal font-mona-sans mb-6 md:mb-[42px]">
              Don&apos;t Believe the Hype?
            </Text>
          </div>
          {/* Call to Action Text */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Text className="text-white text-[20px] md:text-[32px] md:leading-[44px] font-normal font-mona-sans mb-8 md:mb-[59px] ">
              Talk to <span className="font-bold">&quot;Mojo&quot;</span> right
              now. No forms. No waiting. Just tap the <br /> button and try to
              stump our AI.
            </Text>
          </div>
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <Link href="/talk-to-mojo">
            <Button className="mx-auto shadow-[0px_5px_10px_0px_#00000026]  bg-[#E5BF5B] border flex items-center gap-[10px] border-[#FAC11D] text-black text-lg md:text-[20px] font-medium  px-8 py-4 rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors w-[208px] h-[61px]">
              <PhoneSolidIcon />
              Talk To Mojo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
