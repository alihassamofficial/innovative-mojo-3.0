import React from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Text from "@/components/ui/Text";

import cardBg from "@/public/images/digital-bp/card-bg.png";
import { RightArrowIcon, ArrowUpRightIcon } from "@/components/ui/Icons";

interface CardProps {
  title: string;
  image: string;
  readmoreLink?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  readmoreLink,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "bg-no-repeat bg-cover bg-center rounded-[20px] px-[23px] pt-[22px] pb-[13px] flex flex-col h-full w-[512px]",
        className,
        "bg-image-[url('/images/digital-bp/card-bg.png')]"
      )}
      style={{ backgroundImage: `url(${cardBg.src})` }}
    >
      {/* Image */}
      <div className="w-full h-[163px] border-[0.5px] border-black/20 rounded-[10px] mb-[18px] relative overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Title */}
      <Text className="md:text-[24px] md:leading-[36px] mb-[30px] font-semibold">
        {title}
      </Text>
      {/* Read More Button */}
      <div className="flex justify-start mt-auto">
        <Link
          href={readmoreLink || "#"}
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
        </Link>
      </div>

      {/* Read More Link */}
      <div className="flex justify-end mt-auto mr-[10px]">
        <Link href={readmoreLink || ""}>
          <RightArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default Card;
