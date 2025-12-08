import React from "react";
import { ArrowUpRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Text from "@/components/ui/Text";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
  onClick,
}) => {
  return (
    <div
      className={twMerge(
        "bg-[#F1F4F9] rounded-[20px] px-[23px] pt-[22px] pb-[13px] flex flex-col h-full w-[326px]",
        className
      )}
    >
      {/* Icon/Image Placeholder */}
      <div className="w-full h-[139px] border-[0.5px] border-black/20 rounded-[10px] mb-[18px] flex items-center justify-center">
        {icon}
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
  );
};

export default Card;
