"use client"
import Divider from "./ui/Divider";
import Textshine from "./ui/Textshine";
import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import { Navbartab } from "@/store/atom";
import { useInView } from "framer-motion";
import TextRevealByWord from "./ui/text-reveal";




export function About() {

  const ref = useRef(null);

  const isInview = useInView(ref, { amount: 0.2 })
  let [activeTab, setActiveTab] = useRecoilState(Navbartab);

  useEffect(() => {
    console.log("hit about")
    if (isInview) setActiveTab('about');
  }, [isInview, setActiveTab])

  const about_text = 'I am an experienced Full Stack Developer with expertise in Java, JavaScript, Python, TypeScript, React, and Node.js, specializing in building high-quality, user-friendly applications. With a strong background in both frontend and backend technologies, I have successfully led projects from ideation to deployment, consistently delivering innovative solutions.'

  return (
    <section id="about" ref={ref} className="max-w-2xl z-10 p-5 rounded-lg bg-white dark:bg-black">
      <Textshine text="About" className=" translate-y-10"></Textshine>
      <TextRevealByWord text={about_text} />
      <Divider></Divider>
    </section>
  );
}
