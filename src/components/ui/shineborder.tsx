import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const ShineBorder = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef<HTMLButtonElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: '-100%', y: '-100%' })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            setMousePosition({ x: `${x}px`, y: `${y}px` })
        }
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <button
            className={cn("relative overflow-hidden dark:bg-black  bg-white transform transition-transform ease-in-out  border rounded-xl shadow-sm hover:shadow-lg", className)}
            ref={ref}
        >
            <span
                className={`absolute z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#2563eb_0%,transparent_70%)] `}
                style={
                    {
                        left: mousePosition.x,
                        top: mousePosition.y,
                    }
                }
            ></span>
            {children}
        </button>
    )
}