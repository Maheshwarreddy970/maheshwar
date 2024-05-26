"use client"

import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { SkillsData } from '@/lib/data/skills'
import Divider from './ui/Divider'
import Textshine from './ui/Textshine'

export function Skills() {

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
        <div >
            <Textshine text='Skills'></Textshine>
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "group relative flex flex-wrap justify-center col-span-3 gap-5  p-14  overflow-hidden rounded-xl",
                    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                )}>
                <div
                    className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px,rgba(0, 255, 255, 0.1), transparent 40%)`,
                    }}
                />
                {
                    SkillsData.map((data, key) => (
                        <Skillscard key={key} name={data.skill_name}>
                            {data.Icon}
                        </Skillscard>
                    ))
                }
            </div>
            <Divider />
        </div>
    )
}


function Skillscard({ children, key, name }: { children: JSX.Element, key: number, name: string }) {
    return (
        <div key={key} className=' px-4 py-2 flex gap-3 rounded-md border border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
            <span className=' [&>*]:size-4'>
                {children}
            </span>
            <span className='text-black text-sm '>
                {name}
            </span>
        </div>
    )
}