"use client"

import React, { useEffect, useRef, useState } from 'react'
import { SkillsData } from '@/lib/data/skills'
import Divider from './ui/Divider'
import Textshine from './ui/Textshine'
import { useInView } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { Navbartab } from '@/store/atom'
import { ShineBorder } from './ui/shineborder'

export function Skills() {
    const ref = useRef(null);

    const isInview = useInView(ref, { amount: 0.5 })
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(() => {
        if (isInview) setActiveTab('skills');
    }, [isInview, setActiveTab])


    return (
        <section id='skills' ref={ref} className='max-w-2xl p-5'>
            <Textshine text='Skills' className='mb-2 md:mb-0'></Textshine>
            <div className="group relative flex flex-wrap justify-center col-span-3 gap-5 p-2 lg:p-5  md:p-14  overflow-hidden rounded-xl">
                {
                    SkillsData.map((data, key) => (
                        <Skillscard key={key} name={data.skill_name}>
                            {data.Icon}
                        </Skillscard>
                    ))
                }
            </div>
            <Divider />
        </section>
    )
}


function Skillscard({ children, name }: { children: JSX.Element, name: string }) {
    return (
        <ShineBorder className=' rounded-md'>
            <div className=' px-4 py-2 flex gap-3 rounded-md border border-neutral-300 bg-white dark:bg-black text-neutral-500 text-sm m-[1px] transform transition duration-200 hover:shadow-md hover:shadow-blue-600'>
                <span className=' [&>*]:size-4'>
                    {children}
                </span>
                <span className='text-black text-sm '>
                    {name}
                </span>
            </div>
        </ShineBorder>
    )
}