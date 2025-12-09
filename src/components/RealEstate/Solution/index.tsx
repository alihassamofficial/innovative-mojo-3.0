"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";

import bgImage from "@/public/images/real-estate/solution-bg.png";
import solutionIcon from "@/public/images/real-estate/solution-right.png";
import cardbg from "@/public/images/real-estate/cardbg.png";
import {
  InstanKnowledgeIcon,
  PhoneCallIcon,
  UserGroupIcon,
} from "@/components/ui/Icons";

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

    const mm = gsap.matchMedia();

    // Desktop Animation
    mm.add("(min-width: 768px)", () => {
      const cardsHeight = cardsContainer.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Card 1 Metrics
      const card1Height = card1Ref.current?.offsetHeight || 0;
      const card1Top = card1Ref.current?.offsetTop || 0;
      const card1Center = card1Top + card1Height / 2;

      // Card 3 Metrics
      const card3Height = card3Ref.current?.offsetHeight || 0;
      const card3Top = card3Ref.current?.offsetTop || 0;
      const card3Center = card3Top + card3Height / 2;

      // Calculate Start and End positions for the container
      const startY = viewportHeight * 0.8 - card1Center;
      const endY = viewportHeight * 0.5 - card3Center;
      const travelDistance = startY - endY;
      const maxYOffset = travelDistance;

      const cards = [
        { ref: card1Ref.current, offset: card1Ref.current?.offsetTop || 0 },
        { ref: card2Ref.current, offset: card2Ref.current?.offsetTop || 0 },
        { ref: card3Ref.current, offset: card3Ref.current?.offsetTop || 0 },
      ];

      const updateCardScales = (progress: number) => {
        const currentY = startY - progress * travelDistance;
        const viewportCenter = viewportHeight / 2;
        const activeZone = viewportHeight * 0.5;

        cards.forEach((card) => {
          if (!card.ref) return;
          const cardHeight = card.ref.offsetHeight;
          const cardCenter = card.offset + cardHeight / 2;
          const cardCenterInViewport = currentY + cardCenter;
          const distanceFromCenter = Math.abs(
            cardCenterInViewport - viewportCenter
          );
          let factor = 1 - distanceFromCenter / activeZone;
          factor = Math.max(0, Math.min(1, factor));
          const smoothFactor = factor * factor * (3 - 2 * factor);
          const minScale = 0.85;
          const maxScale = 1.0;
          const scale = minScale + (maxScale - minScale) * smoothFactor;
          gsap.set(card.ref, { scale });
        });
      };

      updateCardScales(0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainer,
          start: "top top",
          end: `+=${maxYOffset}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => updateCardScales(self.progress),
        },
      });

      tl.fromTo(cardsContainer, { y: startY }, { y: endY, ease: "none" });
    });

    // Mobile Animation
    mm.add("(max-width: 767px)", () => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      cards.forEach((card) => {
        if (!card) return;

        // Simple scaling based on individual card position in viewport
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom", // enter viewport
            end: "bottom top", // exit viewport
            scrub: 0.5,
            onUpdate: (self) => {
              // Calculate scale: 1.0 at center, 0.85 at edges
              // Progress 0 (entering) -> 0.5 (center) -> 1 (exiting)
              // We want scale peak at 0.5
              const p = self.progress;
              // Map 0 -> 0, 0.5 -> 1, 1 -> 0
              const normalized = 1 - Math.abs(p - 0.5) * 2;

              const minScale = 0.85;
              const maxScale = 1.0;
              // Smooth it
              const smooth = normalized * normalized * (3 - 2 * normalized);
              const scale = minScale + (maxScale - minScale) * smooth;

              gsap.set(card, { scale });
            },
          },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="md:px-0 px-5">
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <Text
          as="h2"
          className="text-black w-full max-w-[1093px] mb-[15px] mt-[51px] md:text-[48px] md:leading-[60px] text-center mx-auto"
        >
          The Solution: The 24/7 Inside Sales Agent (ISA)
        </Text>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        <Text className="text-black md:text-[22px] leading-[32px] w-full max-w-[1014px] mb-10 md:mb-[145px] text-center mx-auto">
          We don&apos;t sell generic &quot;answering services.&quot; We engineer
          intelligent AI Agents that plug directly into your Follow Up Boss,
          kvCORE, or Lofty CRM.
        </Text>
      </div>
      <div className="w-full relative" ref={containerRef}>
        <div>
          <div
            className="relative z-10 w-full md:h-screen"
            ref={pinContainerRef}
          >
            {/* Background Image */}
            <Image
              src={bgImage}
              alt="background"
              className="w-full h-full absolute inset-0 object-cover -z-10"
            />

            <div className="hidden md:block absolute left-0 top-0 w-full max-w-[705px] z-20">
              <Image
                src={solutionIcon}
                alt="solutionIcon"
                className="w-full max-w-[605px]"
              />
            </div>

            {/* <div className="md:hidden w-full max-w-[705px] mx-auto mb-8">
              <Image
                src={solutionIcon}
                alt="solutionIcon"
                className="w-full max-w-[705px] "
              />
            </div> */}

            <div className="max-w-[1240px] mx-auto  md:px-0">
              <div className="relative flex md:flex-row flex-col items-center md:justify-end">
                <div
                  ref={cardsContainerRef}
                  className="relative z-10 w-full md:w-auto md:max-w-[546px]"
                >
                  {/* card 1 */}
                  <div
                    ref={card1Ref}
                    className="relative w-full max-h-[357px] py-5 md:py-0 rounded-[22px] md:max-h-auto md:max-w-[546px] mb-[15px] z-20! bg-[#F1F4F9]"
                  >
                    <Image
                      src={cardbg}
                      alt="cardbg"
                      className="w-full absolute inset-0 min-h-[289px] z-20 rounded-[22px]"
                      fill
                    />
                    <div className="relative z-30 w-full md:px-8 px-5 min-h-[289px] flex flex-col justify-center">
                      <div className="w-[73px] h-[52px] bg-[#E8BE45] rounded-[8px] mb-[20px] flex items-center justify-center">
                        <UserGroupIcon />
                      </div>
                      <Text className="text-black text-[24px] md:leading-[44px] font-semibold mb-2">
                        Automated Showing Coordination
                      </Text>
                      <Text className="text-black text-[18px] font-normal">
                        We {`don't`} sell generic &quot;answering
                        services.&quot; We engineer intelligent AI Agents that
                        integrate with your CRM.
                      </Text>
                    </div>
                  </div>

                  {/* card 2 */}
                  <div
                    ref={card2Ref}
                    className="relative w-full py-5 md:py-0 rounded-[22px] md:max-h-auto md:max-w-[546px] mb-[15px] z-20! bg-[#F1F4F9]"
                  >
                    <Image
                      src={cardbg}
                      alt="cardbg"
                      fill
                      className="w-full absolute inset-0 min-h-[405px] z-20 rounded-[22px]"
                    />

                    <div className="relative z-30 w-full md:px-8 px-5 min-h-[405px] flex flex-col justify-center">
                      <div className="w-[73px] h-[52px] bg-[#E8BE45] rounded-[8px] mb-[20px] flex items-center justify-center">
                        <PhoneCallIcon />
                      </div>
                      <Text className="text-black text-[24px] md:leading-[44px] font-semibold mb-2">
                        The &quot;Renter Firewall&quot; <br /> (Property
                        Management)
                      </Text>
                      <Text className="text-black text-[18px] font-normal">
                        Our AI handles all Tier-1 renter qualification for you.
                      </Text>
                      <ul className="list-disc pl-5 mt-3">
                        <li className="text-black text-[18px] font-normal">
                          &quot;Do you accept Section 8?&quot;
                        </li>
                        <li className="text-black text-[18px] font-normal">
                          &quot;What are the move-in fees?&quot;
                        </li>
                        <li className="text-black text-[18px] font-normal">
                          &quot;Is it pet-friendly?&quot;
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* card 3 */}
                  <div
                    ref={card3Ref}
                    className="relative w-full py-5 md:py-0 rounded-[22px] md:max-h-auto md:max-w-[546px] mb-[15px] z-20! bg-[#F1F4F9]"
                  >
                    <Image
                      src={cardbg}
                      alt="cardbg"
                      fill
                      className="w-full absolute inset-0 min-h-[397px] z-20 rounded-[22px]"
                    />
                    <div className="relative z-30 w-full md:px-8 px-5 min-h-[397px] flex flex-col justify-center">
                      <div className="w-[73px] h-[52px] bg-[#E8BE45] rounded-[8px] mb-[20px] flex items-center justify-center">
                        <InstanKnowledgeIcon />
                      </div>
                      <Text className="text-black text-[24px] md:leading-[44px] font-semibold mb-2">
                        Instant Knowledge (MLS Sync)
                      </Text>
                      <Text className="text-black text-[18px] font-normal">
                        AI that references live MLS data to answer callers
                        instantly.
                      </Text>
                      <ul className="list-disc pl-5 mt-3">
                        <li className="text-black text-[18px] font-normal">
                          Caller: &quot;How much is the house on Oak
                          Street?&quot;
                        </li>
                        <li className="text-black text-[18px] font-normal">
                          AI: &quot;It&apos;s listed at $650,000 and has a
                          heated pool. Would you like to book a showing?&quot;
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
    </div>
  );
};

export default Solution;
