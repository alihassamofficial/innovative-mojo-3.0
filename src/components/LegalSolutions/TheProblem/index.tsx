import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import problemBg from "@/public/images/real-estate/problembg.png";
import problemIcon from "@/public/images/legal-solution/problem.png";
const Problem = () => {
    return (
        <>
            <div className="relative w-full bg-white overflow-hidden md:h-[424px] mt-[85px] mb-[92px]">
                <div className="relative flex gap-0 justify- max-w-[1220px] mx-auto">
                    <div className="relative ">
                        <Image
                            src={problemBg}
                            alt="problemBg"
                            className="w-full absolute inset-0 max-w-[790px] h-[425px]"
                        />
                        <div className="relative w-full max-w-[790px] z-10 pl-[32px] pr-[82px] flex flex-col justify-center items-center min-h-[425px]">
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
                            className="w-auto  h-full absolute right-0"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Problem;