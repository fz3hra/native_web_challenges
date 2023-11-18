import React from 'react'

function Sidebar() {
  return (
    <div className='w-60 p-3 flex flex-col'>
        <div className='menu_components'>
          <div className='flex items-center gap-2 px-1 py-3 justify-center'>
           <h1 className='text-black font-semibold'>CloudFinance</h1>
        </div>
         {/* Category */}
            <div className=''>
               <p className='text-sm font-medium'>MENU</p>
             </div>
            {/* Subcategory */}
            <div className='flex flex-col items-start justify-center pl-2 pt-4 gap-4 text-sm text-gray-500'>
              <h2>Overview</h2>
              <h2>Statistics</h2>
              <h2>Savings</h2>
              <h2>Portfolios</h2>
              <h2>Messages</h2>
              <h2>Transactions</h2>
            </div>
        </div>
        <div className='general_components pt-8'>
         {/* Category */}
            <div className=''>
               <p className='text-sm font-medium'>General</p>
             </div>
            {/* Subcategory */}
            <div className='flex flex-col items-start justify-center pl-2 pt-4 gap-4 text-sm text-gray-500'>
              <h2>Settings</h2>
              <h2>Appearance</h2>
              <h2>Need Help?</h2>
            </div>
        </div>
        <div className='flex-grow'></div>
        <div className='pl-2 text-sm font-semibold'>
          <p>Log Out</p>
        </div>
      </div>
  )
}

export default Sidebar