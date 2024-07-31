"use client"

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { useRecoilState } from 'recoil'
import { useInView } from 'framer-motion'
import { Navbartab } from '@/store/atom'
import { ShineBorder } from './ui/shineborder'

export default function Contact() {

    const ref = useRef(null);

    const isInview = useInView(ref, { amount: 0.5 })
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(() => {
        if (isInview) setActiveTab('contact');
    }, [isInview, setActiveTab])


    return (
        <section ref={ref} id="contact"
            className='relative h-[400px] p-2'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='relative h-[calc(100vh+400px)] sm:h-[calc(100vh+400px)] -top-[100vh]'>
                <div className='h-[400px] md:p-10 sticky top-[calc(100vh-400px)] '>
                    <ShineBorder>
                        <div
                            className={cn(
                                "group relative col-span-3 py-9 px-5 grid grid-cols-1 justify-items-center overflow-hidden rounded-xl m-0.5",
                                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                            )}
                        >
                            <div className=' grid grid-cols-1 justify-items-center gap-6'>
                                <h1 className="text-6xl font-bold inline-flex animate-shine bg-[linear-gradient(110deg,#0E0E0E,45%,#666666,55%,#0E0E0E)]  dark:bg-[linear-gradient(110deg,#F4F4F4,45%,#1e2631,55%,#F4F4F4)] bg-[length:200%_100%] text-transparent bg-clip-text">
                                    Contact
                                </h1>

                                <div className=' w-full flex items-center gap-4 px-2  py-2 rounded-md border  hover:dark:shadow-white  border-neutral-300 bg-white dark:bg-black dark:text-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                    <MdOutlineEmail className=' h-6 w-6' />
                                    <a className=" text-lg md:text-xl font-semibold " href="mailto:maheshwarreddymutupuri@gmail.com">
                                        maheshwarreddymutupuri@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className=" h-[1px] my-5 w-full inset-x-12 bg-gradient-to-r from-transparent via-black/30 to-transparent">
                            </div>
                            <div className=' flex md:flex-row flex-col items-center  gap-16 justify-between'>
                                <div className='flex gap-2'>
                                    <a href='https://leetcode.com/u/maheshwarreddy7075/' target='_blank' className='p-1 flex gap-3 rounded-full border dark:text-black hover:dark:shadow-white   border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                        <SiLeetcode className=' size-8 rounded-full'></SiLeetcode  >
                                    </a>
                                    <a href='https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/' target='_blank' className='p-1 flex gap-3 rounded-full border dark:text-black hover:dark:shadow-white   border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                        <BsLinkedin className=' size-8 rounded-full'></BsLinkedin >
                                    </a>
                                    <a href='https://github.com/Maheshwarreddy970' target='_blank' className='p-1 flex gap-3 rounded-full border dark:text-black hover:dark:shadow-white  border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                        <BsGithub className=' size-8'></BsGithub>
                                    </a>
                                    <a href='https://x.com/Maheshw65793810' target='_blank' className='p-1 flex gap-3 rounded-full border dark:text-black hover:dark:shadow-white  border-neutral-300 bg-white text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md'>
                                        <FaSquareXTwitter className=' rounded-full size-8'></FaSquareXTwitter>
                                    </a>
                                </div>
                                <span >© 2024 Maheshwarreddy. All rights reserved.</span>
                            </div>

                        </div>
                    </ShineBorder>
                </div>
            </div>
        </section>
    )
}
