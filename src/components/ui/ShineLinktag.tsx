import { cn } from "@/lib/utils"

const ShineLink = ({text,children,className,link,download}:{text:string,link:string,children:React.ReactElement,className?:string,download?:boolean}) => {
    return (
      <a href={link} className={cn("group/button relative inline-flex items-center gap-5 overflow-hidden px-2 py-1 md:px-4 md:py-2  rounded-full font-normal transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ",className)} download={download}>
        <span className="text-xs md:text-base">{text}</span>
        <>{children}</>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
      </a>
    )
  }
  
  export default ShineLink