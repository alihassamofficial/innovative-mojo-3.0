"use client";

import Image from 'next/image'
import Link from 'next/link'
import Text from '@/components/ui/Text'
import Button from '@/ui/Button'
import rightSlideBg from '@/public/images/contact/rightbg.png'
import headphone from '@/public/images/contact/headphone.png'



const RightSide = () => {
    return (
        <div className=' w-full relative h-full md:min-h-[650px] min-h-[500px] overflow-hidden flex items-center justify-center'>
            {/* Background Image */}
            <Image
                fill
                className='w-ful  z-0 md:p-1 px-5'
                src={rightSlideBg}
                alt="rightSlideBg"
            />

            {/* Card Content */}
            <div className='relative z-10 w-full max-w-[650px] mx-auto px-5 md:px-8'>
                <div className=' rounded-[20px]  relative overflow-hidden md:mt-16 mt-8'>


                    <div className='relative z-10 px-5 md:px-0'>
                        {/* Contact Label */}
                        <div className="mx-auto flex items-center justify-center bg-white border border-[#E1E3E8] rounded-full w-[107px] h-[35px] mb-[12px]">
                            <Text className="text-[13px] font-medium leading-none text-primary tet-center">
                                Contact
                            </Text>
                        </div>

                        {/* Main Heading */}
                        <Text
                            as="h2"
                            className='text-[#050000] text-[30px] md:text-[50px] font-medium font-mona-sans mb-4 text-center leading-tight'
                        >
                            Don&apos;t Just <br /> Read About AI.
                            Talk to It.
                        </Text>

                        {/* Description */}
                        <Text className='text-[#050000] text-[16px] md:text-[18px] font-normal font-mona-sans mb-6 text-center leading-relaxed'>
                            Words can describe the technology, but interaction proves it. We invite you to test our infrastructure right now. No forms. No waiting.
                        </Text>

                        {/* CTA Button */}
                        <div className='flex justify-center mb-3'>
                            <Link href="#" className='w-full '>
                                <Button className='bg-white border relative  border-[#E5BF5B] max-w-[330px] md:max-w-full mx-auto w-full md:w-[464px] h-[55px] md:h-[65px] text-[#050000] text-[14px] md:text-[22px] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full font-mona-sans hover:bg-white transition-colors flex items-center gap-3 shadow-md'>
                                    <div className="bg-[#E5BF5B] p-2 md:p-3 rounded-full absolute  left-2">
                                        <Image
                                            src={headphone}
                                            alt="Headphone"
                                            width={20}
                                            height={20}
                                            className='w-5 md:w-7 h-5 md:h-7'
                                        />
                                    </div>
                                    <span className="ml-3 md:ml-0">Mojo AI Is Online & Ready</span>
                                </Button>
                            </Link>
                        </div>

                        {/* Sub-text */}
                        <Text className='text-[#050000] text-[16px] font-normal font-mona-sans mb-4 text-center'>
                            Available 24/7 • No spam, ever
                        </Text>


                    </div>
                </div>
                {/* Bottom Text */}
                <div className="flex flex-col items-center justify-center md:mt-16 my-8">
                    <Text className='text-[#050000] text-base md:text-[20px] font-normal font-mona-sans italic text-center'>
                        Test The Technology
                    </Text>
                    <Text className='text-[#050000] text-sm md:text-[14px] font-normal font-mona-sans italic text-center'>
                        Inbound Call (You Call Us)
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default RightSide