import { cn } from '@/lib/utils'
import React from 'react'

export default function Divider({className}:{className?:string}) {
  return (
    <div className={cn("h-[1px] w-full mt-8 inset-x-12 bg-gradient-to-r from-transparent via-black/40 dark:via-white/30 to-transparent", className)}>
      </div>
  )
}
