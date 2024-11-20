import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function Landingpage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-gray-900 text-white pt-1 px-20'>
  <div className="textstructure mt-32">
    {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
      <div 
        key={index} 
        className={`masker font-[fot] ${index === 1 ? "flex items-center gap-4" : ""}`} // Adds flex layout for 2nd item
      >
        {index === 1 && (
          <motion.img
            initial={{width: 0}} 
            animate={{width:"12vw"}}
            transition={{ease:'linear',duration:.5}}
            src="https://images.unsplash.com/photo-1517153192978-b2e379ac0710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
            alt="Decorative"
            className="w-[12vw] h-[6vw] mt-[1vw]  bg-cover bg-center rounded" // Adjust size as needed
          />
        )}
        <h1 className='uppercase text-[8vw] text-nowrap leading-[6.9vw] font-semibold'>{item}</h1>
      </div>
    ))}
  </div>
  <div className='border-t-[1px] border-zinc-800 mt-32 flex items-center justify-between py-4 px-15'>
    {["For public and private companies","From the first pitch to the last pitch IPO"].map((item,index)=>(<p className='text-[1vw]'>{item}</p>))}
    <div className='flex items-center gap-5'>
      <div className='uppercase text-[1vw] text-nowrap px-3 py-1 border-[1px] border-gray-300 rounded-full '>
        start the new project
      </div>
      <div className='px-2 py-2 border-[1px] border-gray-300 rounded-full rotate-[45deg]'>
          <FaArrowUpLong />
      </div>
    </div>
  </div>
</div>

  )
}

export default Landingpage