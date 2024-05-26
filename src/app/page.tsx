import { About } from "@/components/About";
import Contact from "@/components/Contsct";
import {Exprience} from "@/components/Exprience";
import { Herosection } from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import{ Projects} from "@/components/Projects";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <main className=" gird grid-cols-1 place-items-center px-56 ">
      <Navbar></Navbar>
      <Herosection></Herosection>
      <div className=" h-[1px] w-full inset-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent">
      </div>
      <About></About>
      <div className=" h-[1px] w-full inset-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent">
      </div>
      <Projects></Projects>
      <div className=" h-[1px] w-full inset-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent">
      </div>
      <Skills></Skills>
      <div className=" h-[1px] w-full inset-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent">
      </div>
      <Exprience></Exprience>
      <div className=" h-[1px] w-full mt-8 inset-x-12 bg-gradient-to-r from-transparent via-black/40 dark:via-white/30 to-transparent">
      </div>
      <Contact></Contact>
    </main>
  );
}
