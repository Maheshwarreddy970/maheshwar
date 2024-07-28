"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { Navbartab } from "@/store/atom";

const navigation = ["home", "about", 'projects', "skills", "exprience", "contact"];

export const SquigglyUnderline = () => {
  const [selectedLink, setSelectedLink] = useRecoilState(Navbartab);

  return (
    <div className="flex gap-3 sm:gap-9">
      {navigation.map((item) => {
        const isSelected = item === selectedLink;
        return (
          <Link
            key={item}
            href={`#${item}`}
            className={`relative capitalize text-xs sm:text-sm leading-6 no-underline ${isSelected ? "font-semibold text-blue-600" : "text-gray-800 dark:text-gray-300"
              }`}
            onClick={() => setSelectedLink(item)}
          >
            {item}
            {isSelected ? (
              <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    className=" stroke-blue-600"
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </motion.div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};


