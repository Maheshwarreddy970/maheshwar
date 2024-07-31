"use client"

import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image';
import React from 'react'

export default function Expriencecard({ expriencedatatype }: {
    expriencedatatype: {
        name: string;
        discription: string[];
        logo: StaticImageData;
        time: string;
        title: string;
        period: string;
    }
}) {

    const { name, time, period, title, discription, logo } = expriencedatatype

    return (

        <div
            className={cn(
                "group m-0.5 relative p-5 overflow-hidden rounded-xl",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div>
                <div className=' flex flex-col md:flex-row justify-between '>
                    <div className='flex flex-col gap-1 items-start'>
                        <span className='size-14 rounded-lg'>
                            <Image src={logo} alt='pr' className='h-full w-full '></Image>
                        </span>
                        <span className=' text-2xl font-bold'>{name}</span>
                        <span className=' font-medium'>{title}</span>
                    </div>
                    <div className=' flex flex-row md:flex-col  items-start'>
                        <h1 className=' font-semibold text-base md:text-2xl'>{time}</h1>
                        <div className=' font-medium text-base'>{period}</div>
                    </div>
                </div>
                <ul className=''>
                    {
                        discription.map((point, index) => (
                            <li key={index} className=' text-start list-inside'>{point}</li>
                        ))
                    }
                </ul>

            </div>
        </div>

    )
}
