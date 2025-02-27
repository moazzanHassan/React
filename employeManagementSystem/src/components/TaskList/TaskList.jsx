import React from 'react'

const TaskList  = () => {
  return (
    <div id='task-list' style={{marginTop:"50px", padding:"20px 0"}} className='overflow-x-auto h-[55%] w-full  gap-2 flex'>
        <div style={{padding:"10px 15px"}} className='w-[300px] h-full bg-sky-500 rounded-3xl flex-nowrap shrink-0'>
          <div className='flex justify-between items-center'>
          <h3 style={{padding:"5px 20px"}} className='bg-red-600 rounded-xl'>High</h3>
          <h4 className='font-bold'>27-feb-2025</h4>
          </div>

        </div>
        
    </div>
  )
}

export default TaskList