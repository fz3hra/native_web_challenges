import React from 'react'

function Dashboard() {
  return (
     <div className='bg-gray-100 flex flex-col flex-1'>
        <div className='bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between'>
          <div className='relative'> 
            <h1 className='text-black'>Dashboard</h1>
          </div>
        </div>
          <h1 className='text-black'>Overview</h1>
      </div>
  )
}

export default Dashboard