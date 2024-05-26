'use client';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { useRef, useState } from 'react';
import ShineButton from './LinkButton';
import Link from 'next/link';
import { LuCode2 } from 'react-icons/lu';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEye } from 'react-icons/fa';


const Projectcard = ({ projectdetails,key }: {
    projectdetails: {
        title: string;
        discription: string;
        technology: string[];
        sourcecode: string;
        preview: string;
        logo: StaticImageData;
        image: StaticImageData;
    },
    key:number
}) => {

    const { title, discription, technology, sourcecode, preview, logo, image } = projectdetails
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            key={key}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "group relative col-span-3  flex flex-col justify-between overflow-hidden rounded-xl",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-neutral-950 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div
                className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px,rgba(0, 255, 255, 0.1), transparent 40%)`,
                }}
            />
            <div className='pl-10 pt-9 grid gap-5  grid-cols-2'>
                <div>
                    <div className=' flex flex-col gap-2'>
                        <Image src={logo} alt='pr' className='h-16 w-16'></Image>
                        <span className=' text-2xl font-bold'>{title}</span>
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
                <div>
                    <Image src={image} alt='project' className=' w-full h-full rounded'></Image>
                </div>
            </div>
        </div>
    );
};

export default Projectcard;
