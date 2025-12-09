import Image from "next/image";

import bg from "@/public/images/legal-solution/revnue.png";
import Text from "@/components/ui/Text";

const Revnue = () => {
  return (
    <div className="mx-auto max-w-[1240px] px-5">
      <div data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">
        <Image src={bg} alt="bg" height={644} width={1240} />
      </div>
      <div className="flex flex-wrap md:flex-row justify-between gap-5 mt-8 md:mt-12">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <Text className="md:text-[48px] text-[24px] md:leading-[60px] font-bold font-mona-sans max-w-[600px]">
            <span className="font-normal">The</span> &quot;Revenue
            Protection&quot;
            <span className="font-normal"> ROI</span>
          </Text>
        </div>
        <ul
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="list-disc pl-5 text-black flex flex-col gap-2  max-w-[520px]  font-mona-sans md:text-[18px] text-[16px] md:leading-[24px] leading-[22px] m-0 "
        >
          <li className="">Zero Missed Calls: Capture every lead, 24/7/365.</li>
          <li className="">
            Higher Quality Consults: You only speak to clients who have been
            vetted and are ready to hire you.
          </li>
          <li className="">
            Instant Follow-Up: The AI sends a text with your retainer agreement
            or meeting location immediately after the call ends.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Revnue;
