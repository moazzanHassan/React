import React from 'react'

const Header = ({data}) => {
  return (
    <div>
        <div className='flex justify-between items-end text-white '>
            <h1 className='text-2xl px-56'>Helllo <span className='text-3xl'>{data.firstName}👋</span></h1>
            <button style={{padding:"10px 20px"}} className='bg-red-500 rounded-xl'>Log in </button>
        </div>
    </div>
  )
}

export default Header