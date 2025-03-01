import React from 'react'
import Header from '../Other/Header'

const AdminDashboard = () => {
  return (
    <div style={{padding:"2%"}} className='w-full h-screen'>
        <Header />
        <div>
          <form className='flex justify-between items-start'>
            <div>
            <h3>Task Title</h3>
            <input type="text" placeholder='Design a UI design' />
            </div>
            <div>
            <h3>Description</h3>
            <textarea col='15' rows="3" name="" id=""></textarea>
            </div>
            <div>
            <h3>Date</h3>
            <input type="date" name="" id="" />
            </div>
            <div>
            <h3>Assgn To</h3>
            <input type="text" placeholder='emp name' name="" id="" />
            </div>
            <div>
            <h3>Category</h3>
            <input type="text" placeholder='design, dev,etc' name="" id="" />
            </div>
            <button>Create Task</button>
          </form>
        </div>
    </div>
  )
}

export default AdminDashboard