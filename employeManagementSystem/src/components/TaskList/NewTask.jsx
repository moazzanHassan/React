import React from 'react'

const NewTask = () => {
  return (
    <div style={{padding:"10px 15px"}} className='w-[300px] h-full bg-green-500 rounded-3xl flex-nowrap shrink-0'>
          <div className='flex justify-between items-center'>
          <h3 style={{padding:"5px 20px"}} className='bg-red-600 text-sm rounded-xl'>High</h3>
          <h4 className='font-semibold text-sm'>27-feb-2025</h4>
          </div>
          <div style={{marginTop:"20px"}} className=''>
            <h2 className='text-2xl font-bold'>Make a youtube video</h2>
            <p className='text-sm font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis veritatis quaerat adipisci nisi distinctio.</p>
          </div>
          <div style={{marginTop:"15px"}}>
            <button style={{padding:"10px 20px 10px 20px"}} className='bg-amber-400'>Accept Task</button>
          </div>

        </div>
  )
}

export default NewTask