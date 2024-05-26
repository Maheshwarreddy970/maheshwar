import React from 'react'
import Projectcard from './ui/Projectcard'
import {Projectdata} from "@/lib/data/data"

export const Projects = () => {
  return (
    <div className=' flex flex-col gap-10'>
      <h3 className=' text-6xl font-bold'>Projects</h3>
    {
      Projectdata.map((data,key)=>(
        <Projectcard key={key} projectdetails={data}></Projectcard>
      ))
    }  
    </div>
  )
}
