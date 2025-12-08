"use client";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Text from "@/components/ui/Text";
import { ChevronUp } from "lucide-react";

import bgImage from "@/public/images/home/power-of-ai/bg.png";

const PowerOfAI = () => {
  const items = [
    {
      id: "challenge",
      title: "The Challenge",
      description:
        "Your business needs to be online 24/7, but your human staff cannot be.",
    },
    {
      id: "solutions",
      title: "The Solutions",
      description: "A digital workforce that never sleeps.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-[84px] overflow-hidden">
      {/* Background radial lines effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image src={bgImage} alt="bg" fill className="object-cover" />
      </div>

      <div className="relative max-w-[1240px] mx-auto ">
        <div className="flex flex-col md:flex-row items-start gap-[57px] px-5">
          {/* Left Section - Accordion Cards */}
          <div className="flex flex-col gap-4 w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="challenge"
              className="w-full space-y-4"
            >
              {items.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white border border-black/10 transition-shadow w-full rounded-tr-[30px] rounded-bl-[30px] py-[26px"
                  style={{ boxShadow: "0px 4px 4px 0px #0000001A" }}
                  data-aos="fade-right"
                >
                  <AccordionTrigger
                    showIcon={false}
                    className="pl-[29px]  hover:no-underline w-full [&>div>svg]:rotate-0 [&[data-state=open]>div>svg]:rotate-180"
                  >
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="text-left flex-1 min-w-0">
                        <Text className="md:text-[20px] md:leading-[44px] font-semibold ">
                          {item.title}
                        </Text>
                      </div>
                      <ChevronUp className="h-5 w-5 shrink-0 text-black transition-transform duration-200 ml-4" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6  w-full">
                    <Text className="text-black/70 text-base md:text-lg font-poppins">
                      {item.description}
                    </Text>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Section  */}
          <div className="pt-[50px] flex flex-col justify-center w-full md:w-[380px] shrink-0">
            {/* Main Title */}
            <Text
              as="h2"
              className="md:text-[50px] md:leading-[58px] font-medium mb-[9px]"
            >
              The Power Of AI Voice Agents
            </Text>

            {/* Subtitle */}
            <Text className="md:text-[20px] md:leading-[30px] font-normal  font-mona-sans">
              The Math is Simple. You Are Losing Money.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfAI;
