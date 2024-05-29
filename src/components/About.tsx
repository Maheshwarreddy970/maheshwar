"use client"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Globe from "@/components/ui/globe";
import Divider from "./ui/Divider";
import Textshine from "./ui/Textshine";
import { Skillsball } from "./ui/Skillsball";
import { Keypad } from "./ui/Keyboard";
import PlusePingAnimation from "./ui/Pluseanimation";
import { IoIosContact } from "react-icons/io";
import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import { Navbartab } from "@/store/atom";
import { useInView } from "framer-motion";



const features = [
  {
    name: "I'm passionate about creating software that solves business problems, builds innovative solutions, and makes life easier. I thrive on learning new technologies and continuously improving my skills.",
    href: "/",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Keypad></Keypad>
    ),
  },
  {
    name: "I prioritize collaboration and clear communication, offering flexibility to work across any time zone.",
    href: "/",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Globe className="top-0 h-[400px] w-[400px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    name: "Got questions or ideas? Reach out and let's make something awesome together! 🚀  ",
    href: "/",
    className: "col-span-3 lg:col-span-1",
    background: (
      <PlusePingAnimation className=" top-0">
      <IoIosContact className='h-full w-full  ' />
      </PlusePingAnimation>
    ),
  },
  
  {
    name: "I'm a flexible and passionate developer, always eager to learn new technologies. I can easily switch tech stacks based on project requirements. My adaptability ensures I stay updated and deliver optimal solutions.",
    className: "col-span-3 lg:col-span-2",
    href: "/",
    background: (
      <Skillsball
        className="absolute right-0 origin-top transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function About() {
  
  const ref=useRef(null);

    const isInview=useInView(ref,{amount:0.5})
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(()=>{
        if(isInview)setActiveTab('about');
    },[isInview,setActiveTab])

  return (
    <section id="about" ref={ref} className="">
      <Textshine text="About"></Textshine>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
      <Divider></Divider>
    </section>
  );
}
