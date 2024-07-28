"use client"

import React from 'react'
import { SquigglyUnderline } from './ui/SquigglyUnderline'
import ThemeToggle from './ui/ThemeToggle'

export default function Navbar() {
  return (
    <nav className='z-50 sticky top-5  border border-white dark:border-white/30 dark:shadow-md dark:border-black dark:shadow-white/30  backdrop-blur-xl shadow-xl  py-1  shadow-black/10 dark:bg-white/20  bg-black/10 h-12 px-9 rounded-xl items-center w-full flex justify-between max-w-2xl'>
      <ThemeToggle></ThemeToggle>
      <div>
        <SquigglyUnderline></SquigglyUnderline>
      </div>
    </nav>
  )
}
