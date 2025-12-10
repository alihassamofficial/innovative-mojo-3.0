"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Text from "@/components/ui/Text";
import {
  CloseIcon,
  BulletsIcon,
  BulletsBlackIcon,
} from "@/components/ui/Icons";

import modalBg from "@/public/images/digital-bp/modal-bg.png";

interface PhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: StaticImageData | string;
  description?: string;
  bulletPoints?: string[];
}

const PhaseModal: React.FC<PhaseModalProps> = ({
  isOpen,
  onClose,
  title,
  image,
  description,
  bulletPoints,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      // Trigger animation after a small delay
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);

      // Cleanup function to restore scroll when modal closes
      return () => {
        setIsAnimating(false);
        // Restore scroll position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Get image src safely
  const getImageSrc = () => {
    if (!image) return "";
    if (typeof image === "string") return image;
    if (image.src) return image.src;
    return "";
  };

  const imageSrc = getImageSrc();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-secondary rounded-[20px] bg-[linear-gradient(180deg,#FFEDBE_0%,#E8BE45_100%)] border-2 border-[#E1E3E8] py-6 px-5 lg:py-[34px] lg:px-[39px] max-w-[700px] w-full max-h-[90vh] overflow-y-auto relative transition-all duration-300 ${
          isAnimating
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute z-0 top-0 left-0 w-full h-full">
          <Image
            src={modalBg}
            alt="modal-bg"
            fill
            className="object-contain object-top"
          />
        </div>
        {/* Image */}
        <div className="w-full h-[140px] lg:h-[223px] relative overflow-hidden rounded-[10px] mb-[12px] bg-gray-200">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="pointer-events-none"
              sizes="(max-width: 700px) 100vw, 700px"
              priority
              onError={(e) => {
                console.error(`Image failed to load for ${title}:`, imageSrc);
                // Hide image on error
                const target = e.target as HTMLImageElement;
                if (target) {
                  target.style.display = "none";
                }
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Image not available
            </div>
          )}
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-[10px] right-[10px] z-10 md:w-[44px] md:h-[44px] w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 lg:px-[19px] relative z-10 ">
          {/* Title */}
          <Text className="max-w-full lg:max-w-[433px] text-[24px] leading-[32px] md:text-[32px] md:leading-[42px]  mb-[10px] font-semibold">
            {title}
          </Text>

          {/* Description */}
          {description && (
            <Text className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] mb-[16px] font-normal ">
              {description}
            </Text>
          )}

          {/* Bullet Points */}
          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="pl-3 ">
              {bulletPoints.map((point, index) => {
                // Split the point at the colon to separate heading from content
                const colonIndex = point.indexOf(":");
                const hasHeading = colonIndex !== -1;

                const heading = hasHeading
                  ? point.substring(0, colonIndex + 1)
                  : "";
                const content = hasHeading
                  ? point.substring(colonIndex + 1).trim()
                  : point;

                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      <BulletsBlackIcon />
                    </div>

                    <div>
                      <Text className="text-[14px] leading-[22px] md:text-[17px] md:leading-[26px]">
                        {hasHeading ? (
                          <>
                            <span className="font-bold">{heading}</span>
                            {content && (
                              <span className="font-normal"> {content}</span>
                            )}
                          </>
                        ) : (
                          point
                        )}
                      </Text>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhaseModal;
