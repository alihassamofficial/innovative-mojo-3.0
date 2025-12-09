"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import RoundedPolygon from "./RoundedPolygon";

import problemBg from "@/public/images/real-estate/problembg.png";
import problemIcon from "@/public/images/home/implementation/problem.png";

// Points configuration
const RECT_POINTS = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

const LEFT_POLYGON = [
  { x: 0, y: 0 },
  { x: 0.945, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

const RIGHT_POLYGON = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0.09, y: 1 },
];

const Mobile_RECT_POINTS = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

const MOBILE_BOTTOM_POLYGON = [
  { x: 0, y: 0.55 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

const MOBILE_TOP_POLYGON = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 0.75 },
  { x: 0, y: 1 },
];

// Helper to interpolate between two points arrays
const interpolatePoints = (
  start: { x: number; y: number }[],
  end: { x: number; y: number }[],
  t: number
) => {
  return start.map((p, i) => ({
    x: p.x + (end[i].x - p.x) * t,
    y: p.y + (end[i].y - p.y) * t,
  }));
};

// Helper for easing (ease-in-out cubic)
const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const HomeProblem = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation State
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  // Constants
  const ANIMATION_DURATION = 1000; // 1s
  const CONTAINER_HEIGHT = 425; // Assuming fixed height from design
  const MOBILE_TEXT_CONTAINER_HEIGHT = 750; // Increased height for mobile text content

  // Intersection Observer
  useEffect(() => {
    const isDesktop =
      typeof window !== "undefined"
        ? window.matchMedia("(min-width: 768px)").matches
        : false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: isDesktop ? 0 : 0.1,
        rootMargin: isDesktop ? "-45% 0px -45% 0px" : "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!isInView) return;

    const animate = (time: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = time;
      }

      const elapsed = time - startTimeRef.current;
      const rawT = Math.min(elapsed / ANIMATION_DURATION, 1);
      const easedT = easeInOutCubic(rawT);

      setProgress(easedT);

      if (rawT < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isInView]);

  // Derived Values based on progress
  const leftWidth = 1022 + (818 - 1022) * progress;
  const rightWidth = 300 + (504 - 300) * progress;

  const currentLeftPoints = interpolatePoints(
    RECT_POINTS,
    LEFT_POLYGON,
    progress
  );
  const currentRightPoints = interpolatePoints(
    RECT_POINTS,
    RIGHT_POLYGON,
    progress
  );

  const currentMobileBottomPoints = interpolatePoints(
    Mobile_RECT_POINTS,
    MOBILE_BOTTOM_POLYGON,
    progress
  );

  const currentMobileTopPoints = interpolatePoints(
    Mobile_RECT_POINTS,
    MOBILE_TOP_POLYGON,
    progress
  );

  return (
    <>
      <section className="relative w-full overflow-hidden md:mb-[74px] mb-[30px]">
        <div className="max-w-[1240px] mx-auto  ">
          <div className="mt-[90px] px-5">
            {/* Main Headline */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <Text
                as="h2"
                className="md:text-[48px] md:leading-[60px] font-semibold capitalize   mb-[8px] text-center"
              >
                Implementation <br className="md:hidden block" /> (The
                &quot;Retrofit&quot;)
              </Text>
            </div>
            {/* Sub-headline */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <Text className="md:text-[32px] md:leading-[44px]  text-center  font-normal">
                We Don&apos;t Disrupt Your Business.{" "}
                <br className="md:hidden block" /> We Upgrade It.
              </Text>
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full bg-white md:h-[424px] md:mt-[85px]  md:mb-[77px] px-5">
        <div
          ref={containerRef}
          className="relative flex md:flex-row flex-col justify-center items-stretch"
        >
          {/* Left Side: Text Container */}
          <RoundedPolygon
            points={currentLeftPoints}
            borderColor="#00000033"
            borderWidth={1}
            radius={22}
            fixedWidth={leftWidth}
            fixedHeight={CONTAINER_HEIGHT}
            className="relative md:block hidden"
            disableClipPathTransition={true}
          >
            {/* We explicitly set width on the wrapper div to drive layout */}
            <div
              style={{ maxWidth: `${leftWidth}px`, height: "100%" }}
              className="relative"
            >
              <Image
                src={problemBg}
                alt="problemBg"
                className="w-full absolute inset-0 h-[425px] object-cover"
              />
              <div className="relative w-full z-10 pl-[32px] pr-[72px] flex flex-col justify-center items-start min-h-[425px]">
                <Text className="text-[#050000] text-[20px] leading-[32px] text-left font-normal mb-[50px]">
                  You don&apos;t need a new website or a new phone number. We
                  act as the &quot;Intelligence Layer&quot; on top of what you
                  already have.
                </Text>
                <ul className="list-disc pl-5">
                  <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                    Web Integration: We embed AI widgets into your site to turn
                    clicks into conversations.
                  </li>

                  <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                    CRM Sync: We map the AIfs data directly to your database
                    fields.
                  </li>
                  <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                    Dashboard Access: You get a crystal-clear dashboard to
                    listen to call recordings and track ROI in real-time.
                  </li>
                </ul>
              </div>
            </div>
          </RoundedPolygon>

          {/* Right Side: Image */}
          <RoundedPolygon
            points={currentRightPoints}
            radius={22}
            fixedWidth={rightWidth}
            fixedHeight={CONTAINER_HEIGHT}
            className="md:block hidden"
            disableClipPathTransition={true}
          >
            <div
              style={{ width: `${rightWidth}px`, height: "100%" }}
              className="relative"
            >
              <Image
                src={problemIcon}
                alt="problemIcon"
                className="w-full h-full object-cover"
              />
            </div>
          </RoundedPolygon>

          {/* mobile view image */}
          <div className="relative md:hidden block w-full max-h-[398px] mb-[30px]">
            <Image
              src={problemIcon}
              alt="problemIcon"
              className="w-full max-h-[398px] object-cover rounded-[22px]"
            />
          </div>

          {/* mobile view text div */}
          <div className="relative md:hidden block">
            <div className="relative rounded-[22px] pb-8 border border-black/20 mb-[50px]">
              <Image
                src={problemBg}
                alt="problemBg"
                className="w-full absolute bottom-0 "
              />
              <div className="relative w-full z-10 px-5 md:pl-[32px] md:pr-[72px] flex flex-col md:justify-center md:items-center pt-10 md:pt-0">
                <Text className="text-[#050000] text-[18px] leading-[28px] font-normal mb-[30px]">
                  You don&apos;t need a new website or a new phone number. We
                  act as the &quot;Intelligence Layer&quot; on top of what you
                  already have.
                </Text>
                <ul className="list-disc pl-5">
                  <li className="text-[#050000] text-[18px] leading-[28px] font-bold">
                    Web Integration: We embed AI widgets into your site to turn
                    clicks into conversations.
                  </li>
                  <li className="text-[#050000] text-[18px] leading-[28px] font-bold">
                    CRM Sync: We map the AIfs data directly to your database
                    fields.
                  </li>
                  <li className="text-[#050000] text-[18px] leading-[28px] font-bold">
                    Dashboard Access: You get a crystal-clear dashboard to
                    listen to call recordings and track ROI in real-time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProblem;
