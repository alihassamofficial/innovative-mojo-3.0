import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import problemBg from "@/public/images/real-estate/problembg.png";
import problemIcon from "@/public/images/real-estate/problem.png";
import bgImage from "@/public/images/home/futuristic-approach/bg.png";
const Problem = () => {
    return (
        <>
            <div className="relative w-full bg-white overflow-hidden md:h-[424px] mt-[85px] mb-[92px]">
                <div className="relative flex gap-0 justify-center">
                    <div className="relative md:left-[3.8%]">
                        <Image
                            src={problemBg}
                            alt="problemBg"
                            className="w-full absolute inset-0 max-w-[818px] h-[425px]"
                        />
                        <div className="relative w-full max-w-[815px] z-10 pl-[32px] pr-[72px] flex flex-col justify-center items-center min-h-[425px]">
                            <Text className="text-[#050000] text-[20px] leading-[32px] font-normal mb-[50px]">
                                You are in the middle of a walkthrough with a high-value client.
                                Your phone buzzes. It's a new lead calling from a listing site.
                            </Text>
                            <ul className="list-disc pl-5">
                                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                                    The "Tire Kickers": You spend 20 minutes on a "free consultation" call only to realize the person has no case or cannot afford your retainer.
                                </li>
                                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                                    The After-Hours Emergency: A high-value Personal Injury lead calls at 2:00 AM. You are asleep. They call the next firm on Google who does answer.
                                </li>
                                <li className="text-[#050000] text-[20px] leading-[32px] font-bold">
                                    The Front Desk Gap: Your receptionist is overwhelmed. Calls go to hold. Clients hang up.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={problemIcon}
                            alt="problemIcon"
                            className="w-full max-w-[504px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Problem;