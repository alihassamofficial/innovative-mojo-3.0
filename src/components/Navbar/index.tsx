"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Button from "@/ui/Button";
import WebDrawer from "../ui/WebDrawer";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Real State", href: "/real-state" },
    { label: "Legal Solutions", href: "/legal-solutions" },
    { label: "Digital Blueprint", href: "/digital-blueprint" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden lg:block px-5 pb-[83px] pt-[60px]">
        <div className="items-center justify-between w-full max-w-[1240px] mx-auto flex">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/navbar/mojo-logo.png"
              alt="Innovative Mojo"
              width={163}
              height={126}
              className="h-[126px] w-[163px]"
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
                  className={`text-[18px] text-black leading-[28px] font-normal  relative transition-colors duration-200 group`}
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
            <Button className="bg-[#CFA846] text-black   px-6 py-3 text-[18px] leading-[28px] rounded-full font-medium w-[207px] h-[62px]">
              Call The AI Now
            </Button>
          </Link>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="flex w-full items-center justify-between px-5 pt-16 pb-[54px] lg:hidden">
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
