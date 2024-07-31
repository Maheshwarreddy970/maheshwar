"use client";

import Divider from "./ui/Divider";
import Textshine from "./ui/Textshine";
import TextRevealByWord from "./ui/text-reveal";
import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import { Navbartab } from "@/store/atom";
import { useInView } from "framer-motion";

// Define the About component
export function About() {
  // Ref to attach to the section element
  const ref = useRef<HTMLDivElement>(null);

  // Use the useInView hook to determine if the section is in view
  // This configuration checks if 20% of the element is visible
  const isInview = useInView(ref, { amount: 0.2 });

  // Recoil state for managing the active tab
  const [activeTab, setActiveTab] = useRecoilState(Navbartab);

  // Effect to update the active tab when the section comes into view
  useEffect(() => {
    if (isInview) {
      setActiveTab('about');
    }
  }, [isInview, setActiveTab]);

  // Text content for the about section
  const aboutText: string = 'I am an experienced Full Stack Developer with expertise in Java, JavaScript, Python, TypeScript, React, and Node.js, specializing in building high-quality, user-friendly applications. With a strong background in both frontend and backend technologies, I have successfully led projects from ideation to deployment, consistently delivering innovative solutions.';

  return (
    <section
      id="about" // Section identifier for scrolling and navigation
      ref={ref} // Attach ref to section element
      className="max-w-2xl z-10 p-5 rounded-lg bg-white dark:bg-black"
    >
      {/* Component to display a shining text effect */}
      <Textshine text="About" className="translate-y-10" />

      {/* Component to reveal text by word */}
      <TextRevealByWord text={aboutText} />

      {/* Divider component for visual separation */}
      <Divider />
    </section>
  );
}
