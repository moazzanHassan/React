import React from 'react'

function SecondCard() {
  return (
    <div  className='w-full h-screen bg-zinc-600 flex gap-5 px-16 items-center'>
        <div className='w-1/2 h-[60vh] rounded-2xl '>
            <div className='relative w-full h-full bg-[#004D43] rounded-3xl flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <   button className='absolute px-4 py-1 border-[1px] border-white rounded-full bottom-5 left-24'>&copy;2019-2024</button>
            </div>
        </div>
        <div className='w-1/2 h-[60vh] flex gap-5 '>
        <div className='relative w-1/2 h-full bg-zinc-800 rounded-3xl flex items-center justify-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <   button className='absolute px-4 py-1 border-[1px] border-white rounded-full bottom-5 left-16'>&copy;2019-2024</button>
        </div>
        <div className='relative w-1/2 h-full bg-zinc-800 rounded-3xl flex items-center justify-center'>
        <img className='mix-blend-lighten' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <   button className='absolute px-4 py-1 border-[1px] border-white rounded-full bottom-5 left-16'>&copy;2019-2024</button>
        </div>
        </div>
        
    </div>
  )
}

export default SecondCard