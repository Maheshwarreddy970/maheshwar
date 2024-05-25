import { ReactNode } from "react"
import { GoArrowRight } from "react-icons/go"

const ShineButton = ({name,children}:{name:string,children:ReactNode}) => {
    return (
      <button className="group/button  relative inline-flex gap-3 items-center justify-center overflow-hidden rounded-md bg-white px-4 py-1.5 text-xs font-normal text-black dark:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ">
        <span className="text-sm ">{name}</span>
        {children}
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-black/5 dark:bg-white/20" />
        </div>
      </button>
    )
  }
  
  export default ShineButton