import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Text from "@/components/ui/Text";
import { StaticImageData } from "next/image";

import CardBorder from "@/public/images/home/core-capabilities/border.png";
import { ShimmerDiv } from "@/components/ui/ShimmerDiv";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: StaticImageData;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  image,
  className,
  onClick,
}) => {
  return (
    // <ShimmerDiv>
    <div
      className={twMerge(
        "bg-[#F1F4F9] rounded-[20px] px-[23px] pt-[22px] pb-[13px] flex flex-col min-h-[366px] w-[326px] relative",
        className
      )}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${CardBorder.src})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${CardBorder.src})`,
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Icon/Image Placeholder */}
      <div className="w-full h-[139px] border-[0.5px] border-black/20 rounded-[10px] mb-[18px] flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={280}
            height={139}
          />
        ) : (
          icon
        )}
      </div>

      {/* Title */}
      <Text className="md:text-[20px] md:leading-[28px] mb-[9px] font-medium text-center">
        {title}
      </Text>

      {/* Description */}
      <Text className="md:text-[15px] md:leading-[20px] font-normal text-center mb-5">
        {description}
      </Text>

      {/* Action Button */}
      <div className="flex justify-end mt-auto">
        <button
          onClick={onClick}
          className="w-10 h-10 bg-secondary rounded-[5px] flex items-center justify-center hover:bg-[#E8BE45] transition-colors duration-200 group"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
    // </ShimmerDiv>
  );
};

export default Card;
