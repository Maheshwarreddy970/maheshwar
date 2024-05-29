"use client";
import React, { useEffect, useRef } from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Expriencedata } from "@/lib/data/data";
import Expriencecard from "./ui/Expriencecard";
import Divider from "./ui/Divider";
import Textshine from "./ui/Textshine";
import { useInView } from "framer-motion";
import { useRecoilState } from "recoil";
import { Navbartab } from "@/store/atom";


export function Exprience() {
  
  const ref=useRef(null);

  const isInview=useInView(ref,{amount:0.5})
  let [activeTab, setActiveTab] = useRecoilState(Navbartab);

  useEffect(()=>{
      if(isInview)setActiveTab('exprience');
  },[isInview,setActiveTab])


  return (
<section ref={ref} id="exprience">
    <div className=" grid grid-cols-1 gap-5">
      <Textshine text="Exprience"></Textshine>
      <TracingBeam className="px-6 ">
        {
          Expriencedata.map((data)=>(
            <>
            <Expriencecard expriencedetails={data}></Expriencecard>
            </>
          ))
        }
      </TracingBeam>
    </div>
   <Divider/>
   </section>
  );
}

