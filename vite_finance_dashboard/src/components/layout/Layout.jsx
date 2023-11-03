import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Dashboard from '../dashboard/Dashboard'

function Layout() {
  return (
     <div className='h-screen w-screen overflow-hidden flex flex-row'>
      {/* Sidebar */}
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default Layout