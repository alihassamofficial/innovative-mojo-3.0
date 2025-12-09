"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import Text from "@/ui/Text";

import logo from "@/public/images/navbar/mojo-logo.png";
import {
  FacebookSolidIcon,
  InstagramSolidIcon,
  LinkedInSolidIcon,
} from "../ui/Icons";
// import instagram from "@/public/images/footer/instagram.svg";
// import facebook from "@/public/images/footer/facebook.svg";
// import linkedin from "@/public/images/footer/linkedin.svg";
// import footerBg from "@/public/images/footer/footerbg.png";

const Footer = () => {
  const currentpathname = usePathname();
  return (
    <footer className="relative bg-black w-full text-white mx-auto py-[50px] md:py-[144px]  flex justify-center items-center">
      {/* Footer Content */}
      <div className="max-w-[1240px]  relative w-full  ">
        <div className="px-5  flex flex-col md:flex-row md:gap-20 mt-10 md:mt-0 text-left  md:text-center ">
          {/* Left Section */}
          <div className="max-w-[600px] text-center md:text-left">
            <Link href="/">
              <Image
                src={logo}
                alt="Innovative Mojo"
                width={136}
                height={105}
                className="mb-[30px] mx-auto md:mx-0 h-[105px] w-[136px]"
              />
            </Link>

            <Text
              as="h2"
              className="md:text-[26px] md:leading-[37px] text-white font-semibold"
            >
              Innovative MOJO{" "}
              <span className="text-secondary">20+ years of experience</span>,
              powered by real conversations and real solutions.
            </Text>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-20 mt-10 md:mt-0 text-left mob:text-center mob:flex-col md:text-center mob:items-center mob:w-full mob:gap-[18px]">
            {/* Links */}
            <div className="w-full md:max-w-[180px]  text-center md:text-left flex flex-col gap-[15px]">
              <Link href="/">
                <Text
                  as="p"
                  className="text-[16px] leading-[28px] text-white font-normal"
                >
                  Home
                </Text>
              </Link>
              <Link href="/">
                <Text
                  as="p"
                  className="text-[16px] leading-[28px] text-white font-normal"
                >
                  Real State
                </Text>
              </Link>
              <Link href="/">
                <Text
                  as="p"
                  className="text-[16px] leading-[28px] text-white font-normal"
                >
                  Legal Solutions
                </Text>
              </Link>
              <Link href="/">
                <Text
                  as="p"
                  className="text-[16px] leading-[28px] text-white font-normal"
                >
                  Digital Blueprint
                </Text>
              </Link>
              <Link href="/">
                <Text
                  as="p"
                  className="text-[16px] leading-[28px] text-white font-normal"
                >
                  Privacy policy
                </Text>
              </Link>
              <Link href="/">
                <Text
                  as="p"
                  className="text-[16px] leading-[28px] text-white font-normal"
                >
                  Terms and conditions
                </Text>
              </Link>
            </div>
            <div>
              {/* Contact Info */}
              <div className="w-full md:max-w-[231px] gap-[15px] flex flex-col md:text-left text-center">
                <Text className="text-[16px] text-white leading-[28px]">
                  sales@innovativemojo.com
                </Text>
                <Link href="/">
                  <Text className="text-[16px] text-white leading-[28px]">
                    Schedule a meeting
                  </Text>
                </Link>
                <Link href="/">
                  <Text className="text-[16px] text-white leading-[28px]">
                    Contact
                  </Text>{" "}
                </Link>
                <Link href="/">
                  <Text className="text-[16px] text-white leading-[28px]">
                    Innovativemojo.com
                  </Text>
                </Link>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start gap-x-[20px] mt-[20px]">
                <Link href="">
                  <FacebookSolidIcon />
                </Link>
                <Link href="">
                  <InstagramSolidIcon />
                </Link>
                <Link href="">
                  <LinkedInSolidIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
