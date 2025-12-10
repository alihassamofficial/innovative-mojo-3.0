"use client";

import { Headphones, BarChart3 } from "lucide-react";
import Text from "@/components/ui/Text";

import { AnalystIcon, CustomAgentIcon, ReceptionistIcon } from "@/ui/Icons";

import cardBg from "@/public/images/home/clone-your-employe/card-bg.png";
import cardBgBottom from "@/public/images/home/clone-your-employe/vertical-card-bg.png";
import hrCardBorder from "@/public/images/home/clone-your-employe/hr-card-border.png";
import vrCardBorder from "@/public/images/home/clone-your-employe/vr-card-border.png";

const CloneYourEmployee = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto  ">
        <div className="md:mt-[90px] mt-[50px] px-5">
          {/* Main Headline */}
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <Text
              as="h2"
              className="md:text-[60px] md:leading-[120%] font-semibold capitalize tracking-[-1px]  mb-[18px] text-center"
            >
              We Don&apos;t Replace Your Team We
              <br className="hidden md:block" />
              Clone Your Best Employee.
            </Text>
          </div>
          {/* Sub-headline */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Text className="md:text-[24px] md:leading-[120%] md:mb-[60px] mb-[30px] text-center  font-normal">
              We Integrate Top-Tier Technologies (OpenAI GPT-4o, Vapi.Ai){" "}
              <br className="hidden md:block" /> Directly Into Your Existing
              Phone Lines.
            </Text>
          </div>

          {/* Feature Boxes  */}
          <div
            className="flex flex-col md:flex-row gap-4 items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            {/* Left Column - Two boxes stacked */}
            <div className="flex flex-col gap-6 w-full md:max-w-[745px] ">
              {/* Top-Left Box */}
              <div
                className="bg-[#F1F4F9] rounded-[10px] p-6 md:px-[38px] md:pt-[56px] flex flex-col relative"
                style={{
                  backgroundImage: `url(${cardBg.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${hrCardBorder.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="absolute bottom-0  left-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${hrCardBorder.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <ReceptionistIcon className="mb-2" />
                <Text
                  as="h2"
                  className="text-[20px] md:text-[26px] md:leading-[44px] font-semibold capitalize mb-2"
                >
                  The 24/7 Digital Receptionist
                </Text>
                <Text className="md:text-[20px] md:leading-[30px] font-mona-sans capitalize  mb-2 w-full md:max-w-[490px]">
                  Eliminate hold times. Our Voice AI answers instantly with &lt;
                  1-second latency, engaging callers with human-level natural
                  language. It handles intake, answers FAQs, and routes calls
                  professionally.
                </Text>
              </div>

              {/* Bottom-Left Box */}
              <div
                className="bg-[#F1F4F9] rounded-[10px] p-6 md:px-[38px] md:pt-[56px] flex flex-col relative"
                style={{
                  backgroundImage: `url(${cardBg.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${hrCardBorder.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${hrCardBorder.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <AnalystIcon className="mb-2" />
                <Text
                  as="h2"
                  className="text-[20px] md:text-[26px] md:leading-[44px] font-semibold capitalize mb-2"
                >
                  The Intelligent Analyst
                </Text>
                <Text className="md:text-[20px] md:leading-[30px] font-mona-sans  mb-2 w-full md:max-w-[490px] capitalize">
                  Resources are best spent on qualified prospects. Our system
                  acts as a gatekeeper, asking the hard questions
                  <br />
                  1. &quot;What is your budget&quot;
                  <br />
                  2. &quot;Do you have a case&quot; <br />
                  before the lead ever reaches your calendar.
                </Text>
              </div>
            </div>

            {/* Right Box - Taller, spans height of both left boxes */}
            <div
              className="bg-[#F1F4F9] rounded-[10px]  p-6 md:px-[38px] md:pt-[56px] flex flex-col w-full md:max-w-[484px] relative"
              style={{
                backgroundImage: `url(${cardBgBottom.src})`,
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url(${vrCardBorder.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url(${vrCardBorder.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <CustomAgentIcon className="mb-2" />
              <Text
                as="h2"
                className="text-[20px] md:text-[26px] md:leading-[44px] font-semibold capitalize mb-2"
              >
                The Automated Operator
              </Text>
              <Text className="md:text-[20px] md:leading-[30px] font-mona-sans  mb-2 w-full md:max-w-[365px] capitalize">
                Efficiency lies in the follow-through. Once a call concludes,
                our architecture triggers immediate workflows: updating your CRM
                (HubSpot/GoHighLevel), sending confirmation texts, and securing
                appointments.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloneYourEmployee;
