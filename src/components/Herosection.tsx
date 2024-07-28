"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Divider from "./ui/Divider";
import Image from "next/image";
import profile from "@/../public/profile.jpg"
import Textshine from "./ui/Textshine";
import ShineLink from "./ui/ShineLinktag";
import { FiArrowRight } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRecoilState } from "recoil";
import { Navbartab } from "@/store/atom";


export const Herosection = () => {
  const { scrollY } = useScroll();

  let [activeTab, setActiveTab] = useRecoilState(Navbartab);

  useMotionValueEvent(scrollY, 'change', (top) => {
    if (top < 100) {
      setActiveTab('home')
    }

  })


  return (
    <section id="home" className="relative flex w-full  items-center justify-center overflow-hidden  bg-background py-10 lg:py-20 px-5 max-w-2xl">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className=" z-30 flex h-full  justify-between w-full">

        <div >
          <Textshine className="py-0 lg:py-1 text-2xl lg:text-5xl" text="Hi">
          </Textshine>
          <br></br>
          <Textshine className="py-0 lg:py-1 text-2xl lg:text-5xl" text="i'am Maheshwar">
          </Textshine>
          <br></br>
          <Textshine className="py-0 text-2xl bg-[linear-gradient(110deg,#1978F7,45%,#E8F1FE,55%,#1978F7)] dark:bg-[linear-gradient(110deg,#1978F7,45%,#E8F1FE,55%,#1978F7)]  lg:py-1 lg:text-5xl" text="Developer">
          </Textshine>
          <div className=" flex gap-2 md:gap-6 mt-7 items-center">
            <ShineLink link="#contact" text={"Contact me here"} className="hover:shadow-slate-900/30 group text-white bg-slate-900"><FiArrowRight className=" -translate-x-2 group-hover:translate-x-1 transition-all duration-500 ease-in-out size-4" /></ShineLink>
            <ShineLink link="/myresume.pdf" download={true} text={"Download CV"} className="hover:shadow-slate-100/30  text-black bg-slate-100 border border-black/40"><BsDownload className=" size-4" /></ShineLink>
          </div>
        </div>
        <div className="">
          <Image src={profile} alt="profile" className=" size-20  lg:size-32 rounded-xl shadow-xl"></Image>
        </div>
      </div>
      <Divider className="mt-0 absolute bottom-0" ></Divider>
    </section>
  );
};


