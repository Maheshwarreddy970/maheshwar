import { About } from "@/components/About";
import { Herosection } from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import{ Projects} from "@/components/Projects";


export default function Home() {
  return (
    <main className=" gird pb-80 grid-cols-1 place-items-center px-56 ">
      <Navbar></Navbar>
      <Herosection></Herosection>
      <div className=" h-[1px] w-full inset-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent">
      </div>
      <About></About>
      <div className=" h-[1px] w-full inset-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent">
      </div>
      <Projects></Projects>
    </main>
  );
}
