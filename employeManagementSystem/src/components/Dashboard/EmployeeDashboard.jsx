import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'

const EmployeeDashboard = () => {
  return (
    <div style={{padding:"20px"}} className='h-screen bg-[#1C1C1C]'>
        <Header />
        <TaskListNumbers />
    </div>
  )
}

export default EmployeeDashboard