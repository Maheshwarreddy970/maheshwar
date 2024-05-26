"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Expriencedata } from "@/lib/data/data";
import Expriencecard from "./ui/Expriencecard";
import Divider from "./ui/Divider";
import Textshine from "./ui/Textshine";


export function Exprience() {
  return (
<>
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
   </>
  );
}

