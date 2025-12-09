"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Text from "@/components/ui/Text";
import { CloseIcon } from "@/components/ui/Icons";

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

      // Cleanup function to restore scroll when modal closes
      return () => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 "
      onClick={onClose}
    >
      <div
        className="bg-secondary rounded-[20px] bg-[linear-gradient(180deg,#FFEDBE_0%,#E8BE45_100%)] border-2 border-[#E1E3E8]  py-[34px] px-[39px] max-w-[700px] w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
        // style={{
        //   backgroundImage: `url(${modalBg.src})`,
        //   backgroundSize: "contain",
        //   backgroundPosition: "center",
        // }}
      >
        {/* Image */}
        <div className="w-full h-[223px] relative overflow-hidden rounded-t-[10px] mb-[12px] bg-gray-200">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover pointer-events-none"
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
            className="absolute top-[10px] right-[10px] z-10 w-[44px] h-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="px-[19px] ">
          {/* Title */}
          <Text className="max-w-[433px] md:text-[32px] md:leading-[47px] mb-[10px] font-semibold">
            {title}
          </Text>

          {/* Description */}
          {description && (
            <Text className="md:text-[18px] md:leading-[28px] mb-[16px] font-normal ">
              {description}
            </Text>
          )}

          {/* Bullet Points */}
          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="pl-[19px]">
              {bulletPoints.map((point, index) => {
                return (
                  <li key={index} className="list-disc ">
                    <Text className="md:text-[16px] md:leading-[26px] font-bold">
                      {point}
                    </Text>
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
