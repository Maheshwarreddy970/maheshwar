"use client"

import Image from 'next/image'
import React from 'react'
import profile from '@/../public/profile.png'
import { SquigglyUnderline } from './ui/SquigglyUnderline'
import ThemeToggle from './ui/ThemeToggle'

export default function Navbar() {
  return (
    <nav className='z-50 mt-10 flex justify-center  items-center h-11'>
        <div className=' flex justify-between gap-8 items-center sm:gap-28 lg:gap-64'>
            <ThemeToggle></ThemeToggle>
            <SquigglyUnderline></SquigglyUnderline>
            <Image src={profile} alt='profile' className='w-6 h-6 sm:w-9 sm:h-9 rounded-full'></Image>
        </div>
    </nav>
  )
}
