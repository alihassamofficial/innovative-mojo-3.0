"use client";

import { Headphones, BarChart3 } from "lucide-react";
import Text from "@/components/ui/Text";

import { AnalystIcon, CustomAgentIcon, ReceptionistIcon } from "@/ui/Icons";

import cardBg from "@/public/images/home/clone-your-employe/card-bg.png";
import cardBgBottom from "@/public/images/home/clone-your-employe/vertical-card-bg.png";

const CloneYourEmployee = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto  ">
        <div className="mt-[90px] px-5">
          {/* Main Headline */}
          <Text
            as="h2"
            className="md:text-[60px] md:leading-[120%] font-semibold capitalize tracking-[-1px]  mb-[18px] text-center"
          >
            We Don&apos;t Replace Your Team We
            <br />
            Clone Your Best Employee.
          </Text>

          {/* Sub-headline */}
          <Text className="md:text-[24px] md:leading-[120%] mb-[60px] text-center  font-normal">
            We Integrate Top-Tier Technologies (OpenAI GPT-4o, Vapi.Ai) <br />{" "}
            Directly Into Your Existing Phone Lines.
          </Text>

          {/* Feature Boxes  */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Left Column - Two boxes stacked */}
            <div className="flex flex-col gap-6 w-full md:max-w-[745px] ">
              {/* Top-Left Box */}
              <div
                className="bg-[#F1F4F9] rounded-[10px] p-6 md:px-[38px] md:pt-[56px] flex flex-col"
                style={{
                  backgroundImage: `url(${cardBg.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <ReceptionistIcon className="mb-2" />
                <Text
                  as="h2"
                  className="md:text-[26px] md:leading-[44px] font-semibold capitalize mb-2"
                >
                  The 24/7 Digital Receptionist
                </Text>
                <Text className="md:text-[20px] md:leading-[30px] font-mona-sans  mb-2 w-full md:max-w-[487px]">
                  Eliminate hold times. Our Voice AI answers instantly with
                  1-second latency, engaging callers with human-level natural
                  language. It handles intake, answers FAQs, and routes calls
                  professionally.
                </Text>
              </div>

              {/* Bottom-Left Box */}
              <div
                className="bg-[#F1F4F9] rounded-[10px] p-6 md:px-[38px] md:pt-[56px] flex flex-col"
                style={{
                  backgroundImage: `url(${cardBg.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <AnalystIcon className="mb-2" />
                <Text
                  as="h2"
                  className="md:text-[26px] md:leading-[44px] font-semibold capitalize mb-2"
                >
                  The Intelligent Analyst
                </Text>
                <Text className="md:text-[20px] md:leading-[30px] font-mona-sans  mb-2 w-full md:max-w-[487px]">
                  Resources are best spent on qualified prospects. Our system
                  acts as a gatekeeper, asking the hard questions (&quot;What is
                  your budget&quot;, &quot;Do you have a case&quot;) before the
                  lead ever reaches your calendar.
                </Text>
              </div>
            </div>

            {/* Right Box - Taller, spans height of both left boxes */}
            <div
              className="bg-[#F1F4F9] rounded-[10px]  p-6 md:px-[38px] md:pt-[56px] flex flex-col w-full md:max-w-[484px]"
              style={{
                backgroundImage: `url(${cardBgBottom.src})`,
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
              }}
            >
              <CustomAgentIcon className="mb-2" />
              <Text
                as="h2"
                className="md:text-[26px] md:leading-[44px] font-semibold capitalize mb-2"
              >
                The Automated Operator
              </Text>
              <Text className="md:text-[20px] md:leading-[30px] font-mona-sans  mb-2 w-full md:max-w-[365px]">
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
