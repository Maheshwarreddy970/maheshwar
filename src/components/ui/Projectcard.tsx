'use client';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { useRef, useState } from 'react';
import ShineButton from './LinkButton';
import Link from 'next/link';
import { LuCode2 } from 'react-icons/lu';
import { FaRegEye } from 'react-icons/fa';
import { ShineBorder } from './shineborder';


const Projectcard = ({ projectdetails, key }: {
    projectdetails: {
        title: string;
        discription: string;
        technology: string[];
        sourcecode: string;
        preview: string;
        logo: StaticImageData;
        image: StaticImageData;
    },
    key: number
}) => {

    const { title, discription, technology, sourcecode, preview, logo, image } = projectdetails
    const divRef = useRef<HTMLDivElement>(null);


    return (
        <div
            key={key}
            ref={divRef}
            className={cn(
                "group relative col-span-3 m-0.5  flex flex-col rounded-xl bg-white",
                " [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-neutral-950 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className='p-3  grid grid-cols-1'>
                <div>
                    <div className=' flex flex-col gap-2'>
                        <div className='flex flex-row items-center justify-between'>
                            <Image src={logo} alt='pr' className='h-16 w-16'></Image>
                            <span className=' text-2xl font-bold'>{title}</span>
                        </div>
                        <p>
                            {discription}
                        </p>
                        <div className='flex  gap-7'>
                            <Link href={sourcecode} target='_blank'>
                                <ShineButton name={"Sourcecode"}>
                                    <LuCode2 />
                                </ShineButton>
                            </Link>
                            <Link href={preview} target='_blank'>
                                <ShineButton name={"Preview"}>
                                    <FaRegEye />
                                </ShineButton>
                            </Link>
                        </div>
                    </div>
                    <div className=' flex flex-wrap gap-x-4 pt-3 gap-y-3 pb-4 '>
                        {technology.map((tech, index) => (
                            <span key={index} className="inline-flex animate-shine items-center justify-center rounded-lg text-xs border border-neutral-200 dark:border-neutral-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[linear-gradient(110deg,#f0f1f2,45%,#ffffff,55%,#f0f1f2)] bg-[length:200%_100%] px-2 py-[1px] font-medium text-neutral-950 dark:text-neutral-400 transition-colors">
                                {tech}

                            </span>
                        ))}
                    </div>
                </div>
                <div className='-mt-16 border rounded-lg hover:shadow-md mb-8 order-first'>
                    <Image src={image} alt='project' className='bg-white w-full h-full rounded-xl'></Image>
                </div>
            </div>
        </div>
    );
};

export default Projectcard;
