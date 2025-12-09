"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Button from "@/ui/Button";
import Text from "@/ui/Text";
import { PhoneSolidIcon, ArrowUpRightIcon } from "@/ui/Icons";
import WebDrawer from "@/ui/WebDrawer";

import logo from "@/public/images/navbar/mojo-logo.png";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Real EState", href: "/real-estate" },
    { label: "Legal Solutions", href: "/legal-solutions" },
    { label: "Digital Blueprint", href: "/digital-blueprint" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      {/* Top Bar Banner */}
      <div
        className="w-full "
        style={{
          background: "linear-gradient(90deg, #E4C167 0%, #E8BE45 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-5 py-[7px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Text */}
            <Text className="md:text-[13px] md:leading-[100%]  font-normal font-mona-sans">
              Talk to our architects about custom AI voice agent deployment.
            </Text>

            {/* Book A Demo Button */}
            <Link href="/" className="shrink-0 flex items-center gap-[6px]">
              <Text className="md:text-[13px] md:leading-[100%]  font-medium font-mona-sans">
                Book A Demo
              </Text>
              <ArrowUpRightIcon className="w-3 h-3 text-white" />
            </Link>
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
                      className={`absolute bottom-[-4px] left-0 right-0 h-[1px] transition-opacity duration-200 ${
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
            <Link href="/call-ai" className="shrink-0">
              <Button className="bg-[#E5BF5B] border flex gap-x-[7px] items-center justify-center border-[#FAC11D] text-black  md:text-[15px]  leading-[28px] l rounded-[10px] font-medium w-[190px] h-[45px] font-mona-sans shadow-[0px_5px_10px_0px_#00000026]">
                <PhoneSolidIcon />
                Call The AI Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className=" hidden w-full items-center justify-between px-5 pt-16 pb-[54px] lg:hidden">
        <Link href="/">
          <Image
            src="/navbar/mojo-logo.png"
            alt="Innovative Mojo"
            width={150}
            height={45}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Drawer Trigger Button */}
        <WebDrawer>
          <nav className="flex flex-col gap-4 px-6 py-4 text-lg font-medium text-background">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/call-ai" className="mt-2">
              <Button className="bg-secondary text-black w-full">
                Call The AI Now
              </Button>
            </Link>
          </nav>
        </WebDrawer>
      </header>
    </>
  );
}
