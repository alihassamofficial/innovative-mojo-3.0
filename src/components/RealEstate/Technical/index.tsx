import Image from "next/image";

import Text from "@/components/ui/Text";

import technicalBg from "@/public/images/real-estate/technicalbg.png";
import logo from "@/public/images/real-estate/logo.svg";

const Technical = () => {
  return (
    <div>
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <Text
          as="h2"
          className="text-black px-5 w-full max-w-[1093px] mb-[15px] mt-[51px] md:text-[48px] md:leading-[60px] text-center mx-auto"
        >
          Technical Integration
        </Text>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        <Text className="text-black px-5 md:text-[22px] text-[18px] md:leading-[32px] leading-[22px] w-full max-w-[1014px] mb-[59px] md:mb-[85px] text-center mx-auto">
          We retrofit your current stack. No new software to learn.
        </Text>
      </div>

      {/* Background Section with Logo and Cards */}
      <div className="relative w-full min-h-[600px] md:min-h-[740px]">
        {/* Background Image */}
        <Image src={technicalBg} alt="Technical Background" fill />

        {/* Logo in top right */}
        <div className="relative z-10 flex justify-end pr-4 md:pr-8 pt-4 md:pt-8">
          <Image src={logo} alt="Innovative Mojo Logo" className="" />
        </div>

        {/* Two Text Boxes Container */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16 md:pb-24">
          <div className="flex gap-8 md:flex-row flex-col md:justify-start justify-center items-center">
            {/* Left Box - Automated CRM Write-Back */}
            <div
              className=" rounded-lg border border-[#FFFFFF] w-full md:max-w-[351px] max-w-full px-[37px] py-10"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Text
                as="h3"
                className="text-white text-[24px] md:text-[24px] font-semibold mb-4 font-mona-sans"
              >
                Automated CRM Write-Back
              </Text>
              <Text className="text-white text-[16px] md:text-[22px] leading-[24px] md:leading-[28px] font-normal font-mona-sans">
                Deep CRM Write-Back: We push call recordings, transcripts, and
                lead tags {`("Hot Buyer," "Nurture," "Vendor")`} directly into
                your database.
              </Text>
            </div>

            {/* Right Box - Automated Lead Nurturing */}
            <div
              className="rounded-lg border border-[#FFFFFF] w-full md:max-w-[351px] max-w-full px-[37px] py-10"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <Text
                as="h3"
                className="text-white text-[24px] md:text-[24px] font-semibold mb-4 font-mona-sans"
              >
                Automated Lead Nurturing
              </Text>
              <Text className="text-white text-[16px] md:text-[22px] leading-[24px] md:leading-[28px] font-normal font-mona-sans">
                Lead Nurturing: If a caller isn&apos;t ready to buy today, the
                AI tags them for a long-term drip campaign so you stay
                top-of-mind automatically.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
