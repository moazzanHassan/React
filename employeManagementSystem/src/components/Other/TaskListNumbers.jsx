import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div style={{marginTop:"100px"}} className='flex justify-between gap-5 screen'>
        <div style={{padding:"20px"}} className='rounded-xl w-[45%] bg-red-400'>
        <h2>{data.taskCounts.newTask}</h2>
        <h3>New Task</h3>
        </div>
        <div style={{padding:"20px"}} className='rounded-xl w-[45%] bg-green-400'>
        <h2>{data.taskCounts.completed}</h2>
        <h3>Completed</h3>
        </div>
        <div style={{padding:"20px"}} className='rounded-xl w-[45%] bg-blue-400'>
        <h2>{data.taskCounts.active}</h2>
        <h3>Accepted Tasks</h3>
        </div>
        <div style={{padding:"20px"}} className='rounded-xl w-[45%] bg-yellow-400'>
        <h2>{data.taskCounts.failed}</h2>
        <h3>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers