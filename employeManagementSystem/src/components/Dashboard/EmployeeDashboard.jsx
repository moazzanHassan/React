import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (data) => {
  console.log(data)
  return (
    <div style={{padding:"20px"}} className='h-screen bg-[#1C1C1C]'>
        <Header />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard