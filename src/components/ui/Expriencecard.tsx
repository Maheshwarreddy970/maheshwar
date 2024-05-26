import { cn } from '@/lib/utils'
import { Link } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react'
import ShineButton from './LinkButton';

export default function Expriencecard({ expriencedetails}: {
    expriencedetails: {
        name:string,
        period:string,
        time:string,
        title: string;
        discription: string;
        technology: string[];
        logo: StaticImageData;
    },
}) {

    const {name,time,period, title, discription, technology,logo } = expriencedetails


    return (
        <div
            className={cn(
                "group relative col-span-3 px-8 py-4 flex flex-col justify-between overflow-hidden rounded-xl",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div>
                <div className=' flex justify-between '>
                <div className='flex flex-col gap-1'>
                    <Image src={logo} alt='pr' className='h-16 w-16'></Image>
                    <span className=' text-2xl font-bold'>{name}</span>
                    <span className=' font-medium'>{title}</span>
                </div>
                <div>
                    <h1 className=' font-semibold text-2xl'>{time}</h1>
                    <div className=' font-medium text-base'>{period}</div>
                </div>
                </div>
                <div>
                    <p>
                        {discription}
                    </p>

                </div>
                <div className=' flex flex-wrap gap-x-4 pt-3 gap-y-3 pb-4 '>
                    {technology.map((tech, index) => (
                        <span key={index} className="inline-flex animate-shine items-center justify-center rounded-lg text-xs border border-neutral-200 dark:border-neutral-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[linear-gradient(110deg,#f0f1f2,45%,#ffffff,55%,#f0f1f2)] bg-[length:200%_100%] px-2 py-[1px] font-medium text-neutral-950 dark:text-neutral-400 transition-colors">
                            {tech}

                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
