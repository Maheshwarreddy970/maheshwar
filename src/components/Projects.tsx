import React from 'react'
import Projectcard from './ui/Projectcard'
import {Projectdata} from "@/lib/data/data"

export const Projects = () => {
  return (
    <div className=' flex flex-col gap-10'>
    {
      Projectdata.map((data,key)=>(
        <Projectcard projectdetails={data}></Projectcard>
      ))
    }  
    </div>
  )
}
