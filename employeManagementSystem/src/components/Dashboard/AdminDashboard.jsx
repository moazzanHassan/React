import React from 'react'
import Header from '../Other/Header'
import CreateTasks from '../Other/CreateTasks'
import AllTasks from '../Other/AllTasks'

const AdminDashboard = () => {
  return (
    <div style={{padding:"2%"}} className='w-full h-screen'>
        <Header />
        <CreateTasks />
        <AllTasks />


    </div>
  )
}

export default AdminDashboard