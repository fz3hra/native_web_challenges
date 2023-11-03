import React from 'react'

function Sidebar() {
  return (
    <div className='w-60 p-3 flex flex-col'>
        <div className='flex items-center gap-2 px-1 py-3 justify-center'>
           <h1 className='text-black'>CloudFinance</h1>
        </div>
         {/* Category */}
            <div className=''>
               <h1>MENU</h1>
             </div>
            {/* Subcategory */}
            <div className='flex flex-col items-center justify-center'>
              <h2>Overview</h2>
              <h2>Statistics</h2>
            </div>
      </div>
  )
}

export default Sidebar