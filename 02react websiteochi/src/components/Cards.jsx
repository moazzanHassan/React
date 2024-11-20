import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Cards() {
    const cards = [  useAnimation(), useAnimation()]

    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }
    
  return (
    <div className='w-full py-10 '>
        <div className='px-16 py-5'>
            <h1 className='text-[4vw] font-[new] '>Featured Projects</h1>
        </div>
        <div className='w-full h-[1px] bg-gray-800'></div>
        <div className='w-full px-16 py-12 flex gap-5'>

            <motion.div 
            onHoverStart={()=>handleHover(0)}
            onHoverEnd={()=>handleHoverEnd(0)}
            
            className='card relative w-[50vw]'>
            <div className=' w-full h-[30vw] bg-red-100 rounded-3xl overflow-hidden'>
                <div className='absolute z-10  top-1/2 left-full -translate-x-[50%] -translate-y-[50%]'>
                <h1 className='text-[5vw] font-[fot] flex overflow-hidden uppercase'>
                        {"Fyde".split("").map((item,index) =>(
                            <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1, 0.36,1],delay: index*.05}}>{item}</motion.span>
                        ))}
                    </h1>
                </div>
                <img className='w-full h-full bg-cover bg-center' src="https://images.unsplash.com/photo-1517153295259-74eb0b416cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            </motion.div>

            <motion.div
            onHoverStart={()=>handleHover(1)}
            onHoverEnd={()=>handleHoverEnd(1)}
            className='card relative w-[50vw]'>
            <div className='w-full h-[30vw] bg-red-100 rounded-3xl overflow-hidden'>
            <div className='absolute z-10  top-1/2 right-full translate-x-[50%] -translate-y-[50%]'>
                    <h1 className='text-[5vw] font-[fot] flex overflow-hidden uppercase'>
                    {"Vise".split("").map((item,index) =>(
                            <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1, 0.36,1],delay: index*.05}}>{item}</motion.span>
                        ))}
                    </h1>
                </div>
            <img className='w-full h-full bg-cover bg-center' src="https://images.unsplash.com/photo-1522932523034-a6af66247291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            </motion.div>
        </div>
        </div>
  )
}

export default Cards