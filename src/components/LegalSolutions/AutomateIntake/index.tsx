"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";

const AutomateIntake = () => {
  return (
    <section className="flex items-center relative w-full overflow-hidden  py-16 min-h-[500px] md:min-h-[600px] mt-8 md:mt-[120px]">
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
              className="text-white text-3xl md:text-[48px] mb-[40px] md:mb-0 md:leading-[60px]  font-normal font-mona-sans capitalize max-w-[600px]"
            >
              Protect your time.
              <br /> <span className="font-bold">Automate your intake. </span>
            </Text>
          </div>

          {/* CTA Button */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Link href="/contact-us">
              <Button className="bg-secondary border mt-[22px] border-[#FAC11D] text-black text-[16px] leading-[22px] md:text-[20px] font-semibold  px-8 py-4 rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors w-full h-[49px] md:w-[366px] md:h-[60px]">
                Hear A Live Legal Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomateIntake;
