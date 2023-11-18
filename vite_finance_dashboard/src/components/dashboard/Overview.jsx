import React from 'react'
import FinanceService from "./service/FinanceService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Overview() {
  return (
     <div className='p-4 pt-6'>
        <h1 className='text-black text-xl'>Overview</h1>
        <div className='flex flex-row pt-4'>
            {FinanceService.map((item, index) => (
                <div className='w-2/12 bg-white p-4 rounded-lg mr-2'>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faDollarSign} className='text-xs'/>
                        <p className='pl-1 text-xs text-gray-500'>{item.financeName}</p>
                    </div>
                    <div className='pt-2 flex items-center'>
                        <p>$ {item.amount}</p>
                        <div className={`ml-1 ${item.hasIncreased ? 'bg-green-100' : 'bg-red-500'} rounded-lg p-1`}>
                            <p className={`text-xs ${item.hasIncreased ? 'text-green-500' : 'text-white'}`}>{item.percentage}%</p>
                        </div>
                    </div>
                    <div className='pt-1 flex items-center'>
                        <p className={`text-sm ${item.hasIncreased ? 'text-green-500' : 'text-red-500'}`}>+${item.changedAmount}</p>
                        <p className='pl-1 text-xs text-gray-500'>than last month</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Overview