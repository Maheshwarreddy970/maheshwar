import { cn } from '@/lib/utils'
import React from 'react'

export default function Textshine({text,className}:{text:string,className?:string}) {
    return (
        <h1 className={cn("text-6xl py-3 font-bold inline-flex animate-shine bg-[linear-gradient(110deg,#0E0E0E,45%,#666666,55%,#0E0E0E)]  dark:bg-[linear-gradient(110deg,#F4F4F4,45%,#1e2631,55%,#F4F4F4)] bg-[length:200%_100%] text-transparent bg-clip-text",className)}>
           {text}
        </h1>
    )
}
