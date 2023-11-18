import React from 'react'

import Overview from './Overview';
import Navbar from './Navbar';
import Statistics from './Statistics';
import Savings from './Savings';
import LatestTransactions from './transactions';

// ! started 12:35 - 17:41
function Dashboard() {
  return (
     <div className='overflow-y-auto bg-gray-100 flex flex-col flex-1'>
        <Navbar />
        <Overview />
        <div className='flex'>
          <Statistics />
          <Savings />
        </div>
        <LatestTransactions />
      </div>
  )
}

export default Dashboard