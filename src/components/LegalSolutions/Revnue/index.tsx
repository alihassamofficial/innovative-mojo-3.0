import Image from 'next/image'

import bg from "@/public/images/legal-solution/revnue.png"
import Text from '@/components/ui/Text'

const Revnue = () => {
    return (
        <div className='mx-auto max-w-[1240px] px-5'>
            <Image src={bg} alt="bg" height={644} width={1240} />
            <div className="flex flex-wrap md:flex-row justify-between gap-5 mt-12">
                <Text className='text-[48px] leading-[60px] font-bold font-mona-sans max-w-[600px]'><span className="font-normal">The</span> "Revenue Protection"
                    <span className="font-normal"> ROI</span></Text>
                <ul className="flex flex-col gap-4 list-none pl-0 max-w-[490px]">
                    <li className="flex items-start gap-3">
                        <div className="w-[6px] h-[6px] rounded-full bg-black mt-2 shrink-0"></div>
                        <p className="text-black font-mona-sans text-[16px] leading-[24px] m-0">
                            Zero Missed Calls: Capture every lead, 24/7/365.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-[6px] h-[6px] rounded-full bg-black mt-2 shrink-0"></div>
                        <p className="text-black font-mona-sans text-[16px] leading-[24px] m-0">
                            Higher Quality Consults: You only speak to clients who have
                            been vetted and are ready to hire you.

                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-[6px] h-[6px] rounded-full bg-black mt-2 shrink-0"></div>
                        <p className="text-black font-mona-sans text-[16px] leading-[24px] m-0">
                            Instant Follow-Up: The AI sends a text with your retainer agreement or meeting location immediately after the call ends.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Revnue