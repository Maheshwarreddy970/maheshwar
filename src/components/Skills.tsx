import React from 'react'
import { cn } from '@/lib/utils'
import { SkillsData } from '@/lib/data/skills'

export function Skills() {
    return (
        <div>
            <div className=' font-bold text-6xl'>Skills</div>
        <div
            className={cn(
                "group relative flex flex-wrap justify-center col-span-3 gap-5  p-14  overflow-hidden rounded-xl",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}>
            {
                SkillsData.map((data, key) => (
                    <Skillscard key={key} name={data.skill_name}>
                        {data.Icon}
                    </Skillscard>
                ))
            }
        </div>
        </div>
    )
}


function Skillscard({ children, key,name }: { children: JSX.Element, key: number ,name:string}) {
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