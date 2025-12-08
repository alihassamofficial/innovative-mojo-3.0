"use client";

import Image from "next/image";
import Text from "@/components/ui/Text";

import empathyImage from "@/public/images/legal-solution/empathy.png";
import automaticImage from "@/public/images/legal-solution/automatic.png";
import paralegelImage from "@/public/images/legal-solution/paralegal.png";

const TheSolution = () => {
    const solutions = [
        {
            id: 1,
            title: "Empathy & Professionalism",
            description:
                "Legal clients are often in distress. Using advanced Voice AI (GPT-4o), our agents speak with patience, empathy,and a professional tone that reflects your firm's reputation. They don't sound robotic; they sound reassuring.",
            image: empathyImage,
        },
        {
            id: 2,
            title: "Automatic Conflict Checks & Scheduling",
            description:
                "Once a lead is qualified, the AI integrates with your practice management software (Clio, MyCase, PracticePanther). It checks for conflicts and books a paid or free consultation directly onto your calendar.",
            image: automaticImage,
        },
        {
            id: 3,
            title: '"Paralegal-Level" Screening',
            description: (
                <>
                    <div className="text-[14px] leading-[22px] font-normal font-mona-sans">We train the AI on your specific acceptance criteria.
                        It asks the critical questions so you don&apos;t have to.</div>
                    <ul className="list-disc pl-5 text-[14px] leading-[22px] font-normal font-mona-sans">
                        <li className="text-black">
                            Personal Injury: &quot;When did the accident happen?&quot; (Statute of limitations check). &quot;Was there a police report filed?&quot;
                        </li>
                        <li className="text-black">
                            Family Law: &quot;Are there minor children involved?&quot; &quot;Is there a current court order in place?&quot;
                        </li>
                    </ul>
                </>
            ),
            image: paralegelImage,
        },
    ];

    return (
        <section className="relative w-full bg-white mb-[92px]  overflow-hidden">
            <h1 className="text-center text-[48px] leading-[60px] font-bold font-mona-sans mb-[12px]">The Solution: The AI Intake Specialist</h1>
            <Text className="text-center max-w-[740px] mx-auto mb-12">We deploy HIPAA-compliant, secure voice agents that act as your firm’s first line of defense. This is not a "call center." This is a custom-trained logic engine.</Text>
            <div className="max-w-[1240px] mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            className="group relative w-full md:flex-1 rounded-[20px] overflow-hidden h-[354px] max-w-[403px] cursor-pointer transition-all duration-500 ease-in-out "
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out md:group-hover:scale-[1.05]"
                                />
                            </div>


                            {/* Content Container - Fixed at bottom */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                {/* Title - Moves up on hover (desktop only) */}
                                <Text
                                    as="h3"
                                    className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold font-mona-sans text-black transition-all duration-500 ease-in-out md:group-hover:-translate-y-2"
                                >
                                    {solution.id === 1 ? (
                                        <>
                                            Empathy &<br />
                                            Professionalism
                                        </>
                                    ) : solution.id === 3 ? (
                                        <>
                                            &quot;Paralegal-Level&quot;<br />
                                            Screening
                                        </>
                                    ) : (
                                        solution.title
                                    )}
                                </Text>

                                {/* Description - Visible on mobile, shown on hover for desktop */}
                                <div className="overflow-hidden">
                                    <div
                                        className="text-[14px] leading-[22px] font-normal font-mona-sans text-black block transform translate-y-0 opacity-100 max-h-[400px] md:translate-y-4 md:opacity-0 md:max-h-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:max-h-[400px] transition-all duration-500 ease-in-out"
                                    >
                                        {typeof solution.description === 'string' ? (
                                            <Text className="text-[14px] leading-[22px] font-normal font-mona-sans text-black ">{solution.description}</Text>
                                        ) : (
                                            solution.description
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheSolution;