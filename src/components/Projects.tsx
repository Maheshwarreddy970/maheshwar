"use client"

import React, { useEffect, useRef } from 'react'
import Projectcard from './ui/Projectcard'
import { Projectdata } from "@/lib/data/data"
import Divider from './ui/Divider'
import Textshine from './ui/Textshine'
import { useInView } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { Navbartab } from '@/store/atom'

export const Projects = () => {

  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.2 })
  let [activeTab, setActiveTab] = useRecoilState(Navbartab);

  useEffect(() => {
    console.log("hit project")
    if (isInview) setActiveTab('projects');
  }, [isInview, setActiveTab])

  return (
    <section ref={ref} id='projects' className='max-w-2xl p-5'>
      <Textshine text='Projects'></Textshine>
      <div className=' flex flex-col mt-16 gap-24 '>
        {
          Projectdata.map((data, i) => (
            <Projectcard key={i} projectdetails={data}></Projectcard>
          ))
        }
      </div>
      <Divider></Divider>
    </section>
  )
}
