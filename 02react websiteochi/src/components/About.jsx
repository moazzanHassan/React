import React from 'react'

function About() {
  return (
    <div className='w-full min-h-[100vh] py-5  text-[3vw] leading-[3.3vw] bg-[#CDEA68] text-black rounded-t-3xl'>
        <h1 className='font-[new] pt-20 pb-10 md:pb-20 text-xl md:text-[3vw] md:leading-[3.3vw] px-10 sm:p-20 tracking-tight '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full border-t-[1px] py-2 px-10 sm:px-20 border-[#616d35] flex flex-col md:flex-row gap-5'>
            <div className='w-1/2'>
             <h2 className='font-[new] text-3xl md:text-[3vw]'>Our approach:</h2>
             <button className=' flex text-nowrap items-center gap-10 uppercase text-sm text-white rounded-full py-6 px-10 bg-zinc-900 mt-8'>Read More <div className='w-2 h-2 bg-zinc-50 rounded-full'></div></button>
            </div>
            <div className='w-full md:w-1/2  h-[35vh] md:h-[35vw] rounded-3xl bg-[url(https://images.unsplash.com/photo-1571625109522-4327b4a10154?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover'>

            </div>
        </div>
    </div>
  )
}

export default About