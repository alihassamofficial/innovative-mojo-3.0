"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";

import bgImage from "@/public/images/real-estate/solution-bg.png";
import solutionIcon from "@/public/images/real-estate/solution-right.png";
import cardbg from "@/public/images/real-estate/cardbg.png";

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cardsContainer = cardsContainerRef.current;
    const pinContainer = pinContainerRef.current;
    const card3 = card3Ref.current;

    if (!cardsContainer || !pinContainer || !card3) return;

    let scrollTrigger: ScrollTrigger | null = null;

    const initAnimation = () => {
      const cardsHeight = cardsContainer.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Center of last card
      const lastCardHeight = card3.offsetHeight;
      const lastCardCenter = cardsHeight - lastCardHeight / 2;

      // Scroll distance needed so last card reaches center of screen
      const maxYOffset = Math.max(0, lastCardCenter - viewportHeight / 2);

      const animation = gsap.to(cardsContainer, {
        y: -maxYOffset,
        ease: "none",
        scrollTrigger: {
          trigger: pinContainer,
          start: "top top",
          end: `+=${maxYOffset}`,
          pin: true,
          pinSpacing: true, // ← removes the big bottom gap completely
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTrigger = animation.scrollTrigger || null;
    };

    setTimeout(initAnimation, 100);

    const handleResize = () => {
      if (scrollTrigger) scrollTrigger.kill();
      ScrollTrigger.refresh();
      setTimeout(initAnimation, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTrigger) scrollTrigger.kill();
    };
  }, []);

  return (
    <div>
      <Text
        as="h2"
        className="text-black w-full max-w-[1093px] mb-[15px] mt-[51px] md:text-[48px] md:leading-[60px] text-center mx-auto"
      >
        The Solution: The 24/7 Inside Sales Agent (ISA)
      </Text>
      <Text className="text-black md:text-[22px] leading-[32px] w-full max-w-[1014px] mb-[145px] text-center mx-auto">
        We don't sell generic "answering services." We engineer intelligent AI
        Agents that plug directly into your Follow Up Boss, kvCORE, or Lofty
        CRM.
      </Text>

      <div
        className="w-full relative"
        style={{ height: "200vh" }}
        ref={containerRef}
      >
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="background"
          className="w-full h-full absolute inset-0 object-cover"
          // style={{ zIndex: 0 }}
        />
        <div className="relative z-10 w-full" ref={pinContainerRef}>
          <div className="hidden md:block absolute left-0 top-0 w-full max-w-[705px] z-20">
            <Image
              src={solutionIcon}
              alt="solutionIcon"
              className="w-full max-w-[605px]"
            />
          </div>

          <div className="md:hidden w-full max-w-[705px] mx-auto mb-8">
            <Image
              src={solutionIcon}
              alt="solutionIcon"
              className="w-full max-w-[705px]"
            />
          </div>

          <div className="max-w-[1240px] mx-auto px-4 md:px-0">
            <div className="relative flex md:flex-row flex-col items-center md:justify-end">
              <div
                ref={cardsContainerRef}
                className="relative z-10 w-full md:w-auto md:max-w-[546px]"
              >
                {/* card 1 */}
                <div
                  ref={card1Ref}
                  className="relative w-full md:max-w-[546px] mb-[15px] z-20"
                >
                  <Image
                    src={cardbg}
                    alt="cardbg"
                    className="w-full absolute inset-0 min-h-[289px] z-20"
                  />
                  <div className="relative z-20 w-full px-8 min-h-[289px] flex flex-col justify-center">
                    <div className="w-[67px] h-[43px] bg-[#E8BE45] rounded-[8px] mb-[20px]" />
                    <Text className="text-black text-[24px] md:leading-[44px] font-semibold mb-2">
                      Automated Showing Coordination
                    </Text>
                    <Text className="text-black text-[18px] font-normal">
                      We don't sell generic "answering services." We engineer
                      intelligent AI Agents that integrate with your CRM.
                    </Text>
                  </div>
                </div>

                {/* card 2 */}
                <div
                  ref={card2Ref}
                  className="relative w-full md:max-w-[546px] mb-[15px] z-20!"
                >
                  <Image
                    src={cardbg}
                    alt="cardbg"
                    className="w-full absolute inset-0 min-h-[405px] z-20"
                  />
                  <div className="relative z-10 w-full px-8 min-h-[405px] flex flex-col justify-center">
                    <div className="w-[67px] h-[43px] bg-[#E8BE45] rounded-[8px] mb-[20px]" />
                    <Text className="text-black text-[24px] md:leading-[44px] font-semibold mb-2">
                      The "Renter Firewall" <br /> (Property Management)
                    </Text>
                    <Text className="text-black text-[18px] font-normal">
                      Our AI handles all Tier-1 renter qualification for you.
                    </Text>
                    <ul className="list-disc pl-5 mt-3">
                      <li className="text-black text-[18px] font-normal">
                        "Do you accept Section 8?"
                      </li>
                      <li className="text-black text-[18px] font-normal">
                        "What are the move-in fees?"
                      </li>
                      <li className="text-black text-[18px] font-normal">
                        "Is it pet-friendly?"
                      </li>
                    </ul>
                  </div>
                </div>

                {/* card 3 */}
                <div
                  ref={card3Ref}
                  className="relative w-full md:max-w-[546px] mb-[15px]"
                >
                  <Image
                    src={cardbg}
                    alt="cardbg"
                    className="w-full absolute inset-0 min-h-[397px] z-20"
                  />
                  <div className="relative z-10 w-full px-8 min-h-[397px] flex flex-col justify-center">
                    <div className="w-[67px] h-[43px] bg-[#E8BE45] rounded-[8px] mb-[20px]" />
                    <Text className="text-black text-[24px] md:leading-[44px] font-semibold mb-2">
                      Instant Knowledge (MLS Sync)
                    </Text>
                    <Text className="text-black text-[18px] font-normal">
                      AI that references live MLS data to answer callers
                      instantly.
                    </Text>
                    <ul className="list-disc pl-5 mt-3">
                      <li className="text-black text-[18px] font-normal">
                        Caller: "How much is the house on Oak Street?"
                      </li>
                      <li className="text-black text-[18px] font-normal">
                        AI: "It's listed at $650,000 and has a heated pool.
                        Would you like to book a showing?"
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
