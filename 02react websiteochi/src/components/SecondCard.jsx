import React from 'react'

function SecondCard() {
  return (
    <div  className='w-full h-screen bg-zinc-600 flex flex-col md:flex-row py-10 md:py-0 gap-5 px-5 md:px-16 items-center'>
        <div className='w-full md:w-1/2 h-[60vh] rounded-2xl '>
            <div className='relative w-full h-full bg-[#004D43] rounded-3xl flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <   button className='absolute px-4 py-1 border-[1px] border-white rounded-full bottom-5 left-24'>&copy;2019-2024</button>
            </div>
        </div>
        <div className='w-full md:w-1/2 h-[90vh] md:h-[60vh] flex gap-5 '>
        <div className='relative w-1/2 h-full bg-zinc-800 rounded-3xl flex items-center justify-center'>
        <img className='w-[60%]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <   button className='absolute px-4 py-1 text-sm md:text-[1.1vw] border-[1px] -translate-x-[50%] -translate-y-[50%] text-nowrap border-white rounded-full bottom-5 left-20'>&copy;2019-2024</button>
        </div>
        <div className='relative w-1/2 h-full bg-zinc-800 rounded-3xl flex items-center justify-center'>
        <img className='mix-blend-lighten w-[60%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <   button className='absolute px-4 py-1 text-sm md:text-[1.1vw] border-[1px] -translate-x-[50%] -translate-y-[50%] text-nowrap border-white rounded-full bottom-5 left-20'>&copy;2019-2024</button>
        </div>
        </div>
        
    </div>
  )
}

export default SecondCard