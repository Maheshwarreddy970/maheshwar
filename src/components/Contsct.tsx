import React from 'react'
import { Projects } from './Projects'
import { cn } from '@/lib/utils'
import { MdOutlineEmail } from 'react-icons/md'
import { GiTheater } from 'react-icons/gi'
import { BsGithub } from 'react-icons/bs'

export default function Contact() {
    return (
        <div
            className='relative h-[200px] sm:h-[400px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='relative h-[calc(100vh+200px)] sm:h-[calc(100vh+400px)] -top-[100vh]'>
                <div className='h-[200px] sm:h-[400px] p-10 sticky top-[calc(100vh-200px)] sm:top-[calc(100vh-400px)]'>
                    <div
                        className={cn(
                            "group relative col-span-3 py-9 grid grid-cols-1 justify-items-center overflow-hidden rounded-xl",
                            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                        )}
                    >
                        <div  className=' flex flex-col gap-6'>
                            <h3 className=' text-6xl font-bold'>Exprience</h3>

                            <div className=' w-full flex items-center gap-4 px-4 py-2 rounded-md border border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                <MdOutlineEmail className=' h-6 w-6' />
                                <a className=" text-xl font-semibold " href="mailto:example@gmail.com">
                                    example@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className=" h-[1px] my-5 w-full inset-x-12 bg-gradient-to-r from-transparent via-black/30 to-transparent">
                        </div>
                        <div className=' flex items-center gap-16 justify-between'>
                            <div className='flex gap-2'>
                            <a className='p-1 flex gap-3 rounded-full border border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                <BsGithub className=' size-8'></BsGithub>
                            </a>
                            <a className='p-1 flex gap-3 rounded-full border border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                <BsGithub className=' size-8'></BsGithub>
                            </a>
                            </div>
                            <span>© 2024 Devpro Portfolio Template. All rights reserved.</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
