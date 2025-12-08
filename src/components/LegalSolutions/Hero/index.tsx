"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import heroBg from "@/public/images/real-estate/bg.png";
import border from "@/public/images/real-estate/border.svg";
import Button from "@/components/ui/Button";

const RealEstateHero = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden min-h-[508px]">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src={heroBg}
                    alt="Hero Background"
                    width={1440}
                    height={808}
                    className="w-full h-full"
                    priority
                />
            </div>

            {/* Border Image - positioned at bottom */}
            <div className="absolute bottom-0 left-0 w-full">
                <Image src={border} alt="border" className="w-full" />
            </div>

            {/* Content */}
            <div className="relative max-w-[1240px] mx-auto px-5 py-20">
                <div className="flex flex-col items-center text-center ">
                    {/* Rating Badge */}
                    <div className="flex items-center justify-center bg-white border border-[#E1E3E8] rounded-full w-[107px] h-[35px] mb-[12px]">
                        <Text className="text-[13px] font-medium leading-none text-primary">
                            Legal
                        </Text>
                    </div>

                    {/* Main Heading */}
                    <Text as="h1" className="text-black mb-2 leading-[76px] max-w-[982px] mx-auto">
                        Stop Wasting Billable Hours on Unqualified Leads.
                    </Text>

                    {/* Description */}
                    <Text className="text-[20px] leading-[32px] font-normal max-w-[1122px] mx-auto">
                        Your time is your inventory. Innovative Mojo builds AI Intake Specialists that screen potential clients 24/7, filter out non-viable cases, and secure retainers—before you ever pick up the phone.
                    </Text>

                    {/* CTA Section */}

                    <Button className="w-[358px] h-[61px] flex justify-center items-center mt-[30px]">
                        Audit My Intake Process
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default RealEstateHero;
