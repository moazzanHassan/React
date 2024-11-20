import React from 'react'
import { motion } from "motion/react"

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='py-10 bg-[#004D43] w-full rounded-t-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300  flex whitespace-nowrap   overflow-hidden'>
          <motion.h1 initial={{x:0}}  animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:8}}  className='uppercase text-[16vw] pl-[2vw] leading-none text-white font-[new] font-semibold'>We are Ochi</motion.h1 >
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear" ,duration:8}} className='uppercase text-[16vw] pl-[2vw] leading-none text-white font-[new] font-semibold' >We are Ochi</motion.h1>
     , </div>   
       </div>
  )
}

export default Marquee