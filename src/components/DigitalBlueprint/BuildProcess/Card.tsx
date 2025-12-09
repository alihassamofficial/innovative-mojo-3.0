"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Text from "@/components/ui/Text";

import cardBg from "@/public/images/digital-bp/card-bg.png";
import cardBgMob from "@/public/images/digital-bp/card-bg-mob.png";
import { RightArrowIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import { useIsMobile } from "@/hooks/useIsMobile";

interface CardProps {
  title: string;
  image: string;
  readmoreLink?: string;
  onReadMore?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, image, onReadMore, className }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={twMerge(
        "bg-no-repeat bg-cover bg-center rounded-[20px] px-[18px] md:px-[23px] pt-[22px] pb-[25px] flex flex-col min-h-[320px] md:h-[360px] w-full md:w-[512px]",
        className
      )}
      style={{
        backgroundImage: `url(${isMobile ? cardBgMob.src : cardBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Image */}
      <div className="w-full h-[140px] md:h-[163px] rounded-[14px] mb-[9px] relative overflow-hidden shrink-0 ">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
            onError={() => {
              console.error(`Image failed to load for ${title}:`, image);
            }}
          />
        )}
      </div>

      {/* Title */}
      <Text className="text-[18px] md:text-[24px] leading-[26px] md:leading-[36px] mb-[15px] md:mb-[20px] font-semibold shrink-0">
        {title}
      </Text>

      {/* Read More Button */}
      <div className="flex justify-between items-center md:pr-[10px] mt-auto shrink-0">
        <button
          onClick={onReadMore}
          className="bg-black text-white rounded-full w-[129px] h-[35px] justify-center flex items-center gap-[10px] hover:bg-black/90 transition-colors duration-200 group"
          aria-label={`Read more about ${title}`}
        >
          <span className="text-sm md:text-[13px] md:leading-[100%] font-medium font-mona-sans text-white">
            Read More
          </span>
          <div className="w-4 h-4 flex items-center justify-center">
            <ArrowUpRightIcon
              className="w-full h-full group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </button>

        <div>
          <button onClick={onReadMore} aria-label={`View ${title}`}>
            <RightArrowIcon className="w-[26px] md:w-[42px] md:h-[26px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
