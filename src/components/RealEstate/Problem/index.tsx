"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import RoundedPolygon from "./RoundedPolygon";

import problemBg from "@/public/images/real-estate/problembg.png";
import problemIcon from "@/public/images/real-estate/problem.png";
import bgImage from "@/public/images/home/futuristic-approach/bg.png";

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

const Problem = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation State
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  // Constants
  const ANIMATION_DURATION = 1000; // 1s
  const CONTAINER_HEIGHT = 425; // Assuming fixed height from design
  const MOBILE_CONTAINER_HEIGHT = 665;

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
      <div className="relative w-full bg-white md:h-[424px] mt-[85px] mb-[-50px] md:mb-[233px] px-5">
        <div className="flex flex-col items-center justify-center text-center">
          <Text
            as="h2"
            className="text-black md:text-[48px] text-[32px] font-bold  md:leading-[54px] leading-[33px] font-mona-sans capitalize mb-[31px] md:mb-[75px] text-center mx-auto"
          >{`The Problem: The "Showing" Dilemma`}</Text>
        </div>
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
              <div className="relative w-full z-10 pl-[32px] pr-[72px] flex flex-col justify-center items-center min-h-[425px]">
                <Text className="text-[#050000] text-[20px] leading-[32px] font-normal mb-[50px]">
                  You are in the middle of a walkthrough with a high-value
                  client. Your phone buzzes. It&apos;s a new lead calling from a
                  listing site.
                </Text>
                <ul className="list-disc pl-5">
                  <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                    Choice A: Answer it, and be rude to the client standing in
                    front of you.
                  </li>
                  <br />
                  <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                    Choice B: Send it to voicemail, and watch that lead call the
                    next agent on the list.
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
          <div className="relative md:hidden block mb-[100px]">
            <div className="relative rounded-[22px] pb-8 border border-black/20 ">
              <Image
                src={problemBg}
                alt="problemBg"
                className="w-full absolute bottom-0 "
              />
              <div className=" relative w-full z-10 px-5 md:pl-[32px] md:pr-[72px] flex flex-col md:justify-center md:items-center  pt-10 md:pt-0">
                <Text className="text-[#050000] text-[20px] leading-[32px] font-normal mb-[50px]">
                  You are in the middle of a walkthrough with a high-value
                  client. Your phone buzzes. It&apos;s a new lead calling from a
                  listing site.
                </Text>
                <ul className="list-disc pl-5">
                  <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                    Choice A: Answer it, and be rude to the client standing in
                    front of you.
                  </li>
                  <br />
                  <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                    Choice B: Send it to voicemail, and watch that lead call the
                    next agent on the list.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div
          className="relative w-full bg-white py-20 md:py-[84px] overflow-hidden md:min-h-[516px] min-h-[400px] flex items-center justify-center"
          style={{
            background: `url(${bgImage.src}) no-repeat center center`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative max-w-[859px] mx-auto px-5">
            <div className="flex flex-col items-center justify-center text-center">
              {/* First Line */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Text
                  as="h2"
                  className="md:text-[32px] md:leading-[120%] font-light font-mona-sans"
                >
                  The Reality:{" "}
                  <span className="font-semibold"> 78% of leads </span> do
                  business with the first agent who speaks to them. If you rely
                  on voicemail, you have already lost the commission
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
