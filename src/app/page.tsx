import { About } from "@/components/About";
import Contact from "@/components/Contsct";
import {Exprience} from "@/components/Exprience";
import { Herosection } from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import{ Projects} from "@/components/Projects";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <main className=" gird grid-cols-1 space-y-9  place-items-center px-56 ">
      <Navbar></Navbar>
      <Herosection></Herosection>
      
      <About></About>
      
      <Projects></Projects>
      
      <Skills></Skills>
      
      <Exprience></Exprience>
      <Contact></Contact>
    </main>
  );
}
