"use client";

import Text from "@/components/ui/Text";
import tiersBg from "@/public/images/home/service-tiers/bg.png";

const ServiceTiers = () => {
  return (
    <section className="relative w-full overflow-hidden md:mt-[77px] mb-[122px]">
      <div className="max-w-[1240px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12 md:mb-[50px]">
          <Text
            as="h2"
            className="md:text-[48px] md:leading-[60px]  mb-[3px] font-bold"
          >
            Service Tiers
          </Text>
          <Text className="md:text-[32px] md:leading-[44px] font-mona-sans font-regular  ">
            Scalable Autonomy
          </Text>
        </div>

        {/* Table */}
        <div
          className="bg-[#F1F4F9] rounded-[10px] border border-black/20 p-6 md:px-[50px] md:py-[70px] "
          style={{
            backgroundImage: `url(${tiersBg.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "0px 12px 15px 0px #00000024",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Tier 1: Front Desk */}
            <div className="flex flex-col  border-r border-black/10 last:border-r-0 max-w-[328px] w-full">
              <div className="flex flex-col ">
                {/* Tier Header */}
                <div className="mb-6 pb-4 border-b border-black/10">
                  <Text className="text-primary text-xl md:text-2xl font-semibold font-mona-sans max-w-[261px] text-center">
                    Tier 1: Front Desk
                  </Text>
                </div>

                {/* Capabilities List */}
                <div className="flex flex-col">
                  <div className="py-3 border-b border-black/10">
                    <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[261px] text-center">
                      24/7 Intake
                    </Text>
                  </div>
                  <div className="py-3 border-b border-black/10">
                    <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[261px] text-center">
                      Spam Screening
                    </Text>
                  </div>
                  <div className="py-3 border-b border-black/10">
                    <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[261px] text-center">
                      Calendar Booking
                    </Text>
                  </div>
                  <div className="py-3">
                    <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[261px] text-center">
                      Immediate Response
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 2: Analyst */}
            <div className="flex flex-col  border-r border-black/10 last:border-r-0 mt-8 md:mt-0 max-w-[480px] w-full mx-auto text-center">
              {/* Tier Header */}
              <div className="mb-6 pb-4 border-b border-black/10">
                <Text className="text-primary text-xl md:text-2xl font-semibold font-mona-sans">
                  Tier 2: Analyst
                </Text>
              </div>

              {/* Capabilities List */}
              <div className="flex flex-col">
                <div className="py-3 border-b border-black/10">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins">
                    Complex Q&A
                  </Text>
                </div>
                <div className="py-3 border-b border-black/10">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins">
                    Lead Qualification
                  </Text>
                </div>
                <div className="py-3 border-b border-black/10">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins">
                    Knowledge & Vetting
                  </Text>
                </div>
                <div className="py-3">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins">
                    Custom Knowledge Base
                  </Text>
                </div>
              </div>
            </div>

            {/* Tier 3: Operator */}
            <div className="flex flex-col  mt-8 md:mt-0 max-w-[319px] w-full  ">
              {/* Tier Header */}
              <div className="mb-6 pb-4 border-b border-black/10">
                <Text className="text-primary text-xl md:text-2xl font-semibold font-mona-sans max-w-[249px] ml-auto text-center">
                  Tier 3: Operator
                </Text>
              </div>

              {/* Capabilities List */}
              <div className="flex flex-col">
                <div className="py-3 border-b border-black/10">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[249px] text-center ml-auto ">
                    Full Automation
                  </Text>
                </div>
                <div className="py-3 border-b border-black/10">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[249px] text-center ml-auto ">
                    Deep CRM Sync
                  </Text>
                </div>
                <div className="py-3 border-b border-black/10">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[249px] text-center ml-auto ">
                    Contract Sending
                  </Text>
                </div>
                <div className="py-3">
                  <Text className="text-primary text-base md:text-lg font-normal font-poppins max-w-[249px] text-center ml-auto ">
                    Zero-Touch Admin
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;
