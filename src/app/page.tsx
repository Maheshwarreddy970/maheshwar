"use client"


import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Exprience } from "@/components/Exprience";
import { Herosection } from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { RecoilRoot } from "recoil";


export default function Home() {
  return (
    <RecoilRoot>
      <main className=" flex flex-col items-center ">
        <Navbar></Navbar>
        <Herosection></Herosection>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Exprience></Exprience>
        <Contact></Contact>
      </main>
    </RecoilRoot>

  );
}
