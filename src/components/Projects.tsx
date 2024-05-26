import React from 'react'
import Projectcard from './ui/Projectcard'
import { Projectdata } from "@/lib/data/data"
import Divider from './ui/Divider'
import Textshine from './ui/Textshine'

export const Projects = () => {
  return (
    <div >
     <Textshine text='Projects'></Textshine>
     <div className=' flex flex-col gap-10'>
      {
        Projectdata.map((data, key) => (
          <Projectcard key={key} projectdetails={data}></Projectcard>
        ))
      }
      </div>
      <Divider></Divider>
    </div>
  )
}
