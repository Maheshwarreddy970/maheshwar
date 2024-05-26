"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Expriencedata } from "@/lib/data/data";
import Expriencecard from "./ui/Expriencecard";


export function Exprience() {
  return (

    <div>
      <h3 className=' text-6xl font-bold'>Exprience</h3>
    <TracingBeam className="px-6">
      <div>
        <h3 className=' text-3xl font-bold'>UI Libary</h3>
        <Expriencecard expriencedetails={Expriencedata[0]}></Expriencecard>
      </div>
      <div>
        <h3 className=' text-3xl font-bold'>Course</h3>
        <Expriencecard expriencedetails={Expriencedata[0]}></Expriencecard>
      </div>
      <div>

      </div>
    </TracingBeam>
    </div>
  );
}

