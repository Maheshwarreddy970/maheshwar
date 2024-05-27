
"use client"

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function PlusePingAnimation({ className, children }: {
    className?: string;
    children: ReactNode

}) {
    return (
        <div
            className={cn(' relative',className)}>
            <motion.span className='absolute flex justify-center items-center left-[50%] top-[50%] z-0 h-80 w-80'>
                <span className='w-12 h-12 p-1 rounded-full border-[1px] border-green-500 bg-gradient-to-br from-green-500/50 to-green-800/20 shadow-2xl shadow-green-500/40'>
                    {children}
                </span>
            </motion.span>
            <motion.span
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: [0, 1, 0.5, 0],
                    scale: 1,
                    z: 0,
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    delay: 0,
                }}
                className='absolute left-[50%] top-[50%] z-0 h-80 w-80 rounded-full border-[1px] border-green-500 bg-gradient-to-br from-green-500/50 to-green-800/20 shadow-xl shadow-green-500/40'>
            </motion.span>
            <motion.span
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: [0, 1, 0.5, 0],
                    scale: 1,
                    z: 0,
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    delay: 1,
                }}
                className='absolute left-[50%] top-[50%] z-0 h-80 w-80 rounded-full border-[1px] border-green-500 bg-gradient-to-br from-green-500/50 to-green-800/20 shadow-xl shadow-green-500/40'>
            </motion.span>
            <motion.span
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: [0, 1, 0.5, 0],
                    scale: 1,
                    z: 0,
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    delay: 2,
                }}
                className='absolute left-[50%] top-[50%] z-0 h-80 w-80 rounded-full border-[1px] border-green-500 bg-gradient-to-br from-green-500/50 to-green-800/20 shadow-xl shadow-green-500/40'>
            </motion.span>
            <motion.span
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: [0, 1, 0.5, 0],
                    scale: 1,
                    z: 0,
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    delay: 5,
                }}
                className='absolute left-[50%] top-[50%] z-0 h-80 w-80 rounded-full border-[1px] border-green-500 bg-gradient-to-br from-green-500/50 to-green-800/20 shadow-xl shadow-green-500/40'>
            </motion.span>
        </div>
    )
}