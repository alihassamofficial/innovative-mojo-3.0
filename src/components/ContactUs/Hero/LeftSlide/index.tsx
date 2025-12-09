"use client";

import Image from 'next/image'
import leftSlideBg from '@/public/images/contact/slidebg.png'
import Text from '@/components/ui/Text'
import { useState, useEffect } from 'react'

const LeftSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [bulletIndex, setBulletIndex] = useState(0);

    const animatedTexts = [
        "that scale",
        "that convert",
        "that actually work",
        "worth the hype",
        "that closed deals",
        "ready to ship"
    ];

    const description = "Start building voice agents in minutes. No complex setups. Just real results from day one.";

    // Auto-change text animation every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % animatedTexts.length);
                setIsAnimating(false);
            }, 300); // Half of transition duration
        }, 5000);

        return () => clearInterval(interval);
    }, [animatedTexts.length]);

    // Auto-change bullet animation synchronized with text (every 5 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setBulletIndex((prev) => (prev + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Get size and color based on position (0 = first/biggest, 1 = second/medium, 2 = third/smallest)
    const getBulletStyles = (position: number) => {
        // Calculate relative position from active bullet
        const relativePos = (position - bulletIndex + 3) % 3;
        
        if (relativePos === 0) {
            // Active position - biggest width and gold
            return 'bg-[#E5BF5B] w-14 h-1.5';
        } else if (relativePos === 1) {
            // Next position - medium width and white
            return 'bg-white w-10 h-1.5';
        } else {
            // Previous position - smallest width and white
            return 'bg-white w-6 h-1.5';
        }
    };

    return (
        <div className='max-w-[505px] relative md:min-h-[682px] min-h-[400px]  flex flex-col items-center justify-center'>
            <Image className='object-cover absolute  z-0 md:p-1 px-5' src={leftSlideBg} alt="leftSlideBg" />

            <div className='relative z-10 flex flex-col pl-12  w-full  '>
                
                {/* Content */}
                <div className='w-full max-w-[379px] pr-8'>
                    <div className='text-left'>
                        <h2 className='text-white text-2xl md:text-[40px] font-normal font-mona-sans mb-2 leading-tight'>
                            Join thousands building agents{' '}
                            <span 
                                className={`inline-block transition-all duration-500 ease-in-out ${
                                    isAnimating 
                                        ? 'opacity-0 translate-y-2' 
                                        : 'opacity-100 translate-y-0'
                                }`}
                            >
                                <span className='font-bold'>{animatedTexts[activeIndex]}</span>
                            </span>
                        </h2>
                        <p className='text-white text-[14px] md:text-[18px]  font-normal font-mona-sans'>
                            {description}
                        </p>
                    </div>

                    {/* Animated Bullets */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                            @keyframes bulletGroupFloat {
                                0%, 100% {
                                    transform: translateX(0px);
                                }
                                50% {
                                    transform: translateX(4px);
                                }
                            }
                            @keyframes bulletPulse {
                                0%, 100% {
                                    transform: scale(1);
                                }
                                50% {
                                    transform: scale(1.05);
                                }
                            }
                            .bullet-group-container {
                                animation: bulletGroupFloat 3s ease-in-out infinite;
                            }
                            .bullet-item {
                                animation: bulletPulse 2s ease-in-out infinite;
                            }
                            .bullet-item:nth-child(2) {
                                animation-delay: 0.2s;
                            }
                            .bullet-item:nth-child(3) {
                                animation-delay: 0.4s;
                            }
                        `
                    }} />
                    <div className='flex items-center justify-start gap-2 mt-5 bullet-group-container'>
                        {[0, 1, 2].map((position) => (
                            <div
                                key={position}
                                className={`rounded-full transition-all duration-700 ease-in-out bullet-item ${getBulletStyles(position)}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSlide