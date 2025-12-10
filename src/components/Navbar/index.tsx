"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Button from "@/ui/Button";
import Text from "@/ui/Text";
import { PhoneSolidIcon, ArrowUpRightIcon } from "@/ui/Icons";
import WebDrawer from "@/ui/WebDrawer";

import logo from "@/public/images/navbar/mojo-logo.png";
import border from "@/public/images/navbar/border.png";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Real State", href: "/real-estate" },
    { label: "Legal Solutions", href: "/legal-solutions" },
    { label: "Digital Blueprint", href: "/digital-blueprint" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      {/* Top Bar Banner */}
      <div
        className="w-full hidden md:block "
        style={{
          background: "linear-gradient(90deg, #E4C167 0%, #E8BE45 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-5 py-[7px]">
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-4 gap-2">
            {/* Text */}
            <Text className="text-[10px] md:text-[13px] md:leading-[100%]  font-normal font-mona-sans">
              Talk to our architects about custom AI voice agent deployment.
            </Text>

            {/* Book A Demo Button */}
            <a
              href="https://innovativemojo.com/booking"
              className="shrink-0 flex items-center gap-[6px]"
            >
              <Text className="text-[10px] md:text-[13px] md:leading-[100%]  font-medium font-mona-sans">
                Book A Demo
              </Text>
              <ArrowUpRightIcon className="w-3 h-3 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <header className="z-10 shadow-[0px_12px_15px_0px_#00000024]">
        <div className="hidden lg:block w-full max-w-[1240px] mx-auto  py-[14px]">
          <div className="items-center justify-between px-5 flex">
            {/* Logo */}
            <Link href="/" className="shrink-0 w-[94px] h-[72px]">
              <Image
                src={logo}
                alt="Innovative Mojo"
                width={94}
                height={72}
                className="w-full h-full object-contain"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="flex gap-8 items-center">
              {navLinks.map(({ label, href }) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname?.startsWith(href));

                return (
                  <Link
                    key={label}
                    href={href}
                    className={`text-[16px] text-black leading-[28px] font-normal  relative transition-colors duration-200 group`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-[-4px] left-0 right-0 h-px transition-opacity duration-200 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ backgroundColor: "#CFA846" }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <Link href="/contact-us" className="shrink-0">
              <Button className="bg-[#E5BF5B] border flex gap-x-[7px] items-center justify-center border-[#FAC11D] text-black  md:text-[15px]  leading-[28px] l rounded-[10px] font-medium w-[170px] h-[45px] font-mona-sans shadow-[0px_5px_10px_0px_#00000026]">
                <PhoneSolidIcon />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="shadow-[0px_12px_15px_0px_#00000024] z-10">
        <div className="flex w-full items-center justify-between px-5 py-[24px]  lg:hidden">
          <Link href="/">
            <Image
              src={logo}
              alt="Innovative Mojo"
              width={78}
              height={61}
              className="h-[61px] w-[78px]"
              priority
            />
          </Link>

          {/* Drawer Trigger Button */}
          <WebDrawer>
            <nav className="flex flex-col h-full">
              {/* Navigation Links */}
              <div className="flex flex-col flex-1">
                {navLinks.map(({ label, href }, index) => {
                  const isActive =
                    pathname === href ||
                    (href !== "/" && pathname?.startsWith(href));

                  return (
                    <div key={label}>
                      <a
                        href={href}
                        className={`block py-5 text-center text-black text-[16px] leading-[28px] font-normal  transition-colors duration-200 ${
                          isActive ? "font-semibold" : ""
                        }`}
                      >
                        {label}
                      </a>

                      <div
                        className="h-[2px] w-full"
                        style={{
                          backgroundImage: `url(${border.src})`,
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                  );
                })}
                {/* CTA Button */}
                <Link href="/contact-us" className="block mt-[27px]">
                  <Button className=" w-[190px] mx-auto rounded-[10px] h-[50px] flex items-center justify-center gap-[7px] text-black text-[15px] leading-[28px] font-medium font-mona-sans shadow-[0px_5px_10px_0px_#00000026] transition-opacity duration-200 hover:opacity-90">
                    <PhoneSolidIcon />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </nav>
          </WebDrawer>
        </div>
      </header>
    </>
  );
}
