"use client"

import React, { useState } from 'react'
import { SquigglyUnderline } from './ui/SquigglyUnderline'
import ThemeToggle from './ui/ThemeToggle'
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigationItems = ["home", "about", 'projects', "skills", "exprience", "contact"];
const navVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" },
  open: {
    height: "auto",
    transition: { duration: 0.5, ease: 'easeInOut', type: 'just', stiffness: 50 }
  },
  close: {
    height: "auto",
    transition: { duration: 0.5, ease: 'easeInOut', type: 'just', stiffness: 50 }
  }
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      animate={isMenuOpen ? "open" : "close"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05
      }}
      className='z-50 md:py-3 fixed top-5  border rounded-xl  w-full border-white dark:border-white/30 dark:shadow-md dark:border-black dark:shadow-white/30  backdrop-blur-xl shadow-xl   shadow-black/10 dark:bg-white/20  bg-black/10 h-12 px-9   max-w-2xl'>
      <div className='w-full flex justify-between items-center'>
        <ThemeToggle></ThemeToggle>
        <SquigglyUnderline navigationItems={navigationItems}></SquigglyUnderline>
        <MenuToggle isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {isMenuOpen && (
        <div className=' w-full flex justify-center p-4'>
          <SquigglyUnderline className=' flex w-full md:hidden justify-center' navigationItems={navigationItems}></SquigglyUnderline>
        </div>
      )}
    </motion.nav>
  )
}


// MenuToggle component for the hamburger menu
interface MenuToggleProps {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuToggle({ isMenuOpen, setMenuOpen }: MenuToggleProps) {
  return (
    <button
      className={cn("md:hidden group inline-flex w-12 h-12 text-center items-center justify-center transition rounded-lg text-black dark:text-white")}
      onClick={() => setMenuOpen(!isMenuOpen)}
    >
      <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "rotate-[315deg] [x:0] [y:7]" : "")} y="2" x="7" width="9" height="1.5" rx="1"></rect>
        <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]", isMenuOpen ? "rotate-45" : "")} y="7" width="16" height="1.5" rx="1"></rect>
        <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "[y:7] [x:0] -rotate-[225deg]" : "")} y="12" width="9" height="1.5" rx="1"></rect>
      </svg>
    </button>
  );
}