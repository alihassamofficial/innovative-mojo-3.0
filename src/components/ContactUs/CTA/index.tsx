"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/ui/Button";

import bgImage from "@/public/images/home/cta/bg.png";
import { PhoneSolidIcon } from "@/components/ui/Icons";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden  py-16 md:py-[124px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgImage} alt="CTA Background" fill priority />
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto ">
        <div className="flex flex-col items-center text-center px-5">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <Text className="text-white text-xl md:text-[32px] md:leading-[44px] font-normal font-mona-sans mb-8 md:mb-[55px] max-w-[1073px] mx-auto capitalize">
              Experience how fast our AI picks up.{" "}
              <span className="font-bold"> Dial the number below. </span> Try to
              stump <span className="font-bold"> &quot;Mojo,&quot; </span> our
              intake specialist.{" "}
              <span className="font-bold">Ask him about our pricing. </span>
              Interrupt him while he&apos;s speaking. See if he flinches.
            </Text>
          </div>

          {/* Subtitle */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Text className="text-white text-xl md:text-[32px] md:leading-[44px] font-semibold font-mona-sans mb-6 md:mb-[42px]">
              (555) 123-4567
            </Text>
          </div>

          {/* CTA Button */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <Link href="/contact-us">
              <Button className="shadow-[0px_5px_10px_0px_#00000026]  bg-[#E5BF5B] border flex items-center gap-[10px] border-[#FAC11D] text-black text-lg md:text-[20px] font-medium  px-8 py-4 rounded-[16px] font-mona-sans hover:bg-[#FAC11D] transition-colors w-[208px] h-[61px]">
                <PhoneSolidIcon />
                Click To Dial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
