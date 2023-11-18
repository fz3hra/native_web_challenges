import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function Savings() {
  return (
    <div className='mr-4 m-4 p-3 rounded-lg bg-white flex flex-col flex-grow justify-around'>
        <div className='flex justify-between items-center'>
            <p className='text-xs text-gray-400'>Total Savings</p>
            <div className='text-gray-500'>
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
        </div>
        <div className='mt-4 flex'>
            <p className='text-xl font-semi-bold'>$406.27</p>
             <div className='ml-1 bg-green-100 rounded-lg p-1'>
                <p className='text-xs text-green-500'>8.2%</p>
            </div>
        </div>
        <div className='pt-1 flex items-center'>
            <p className='text-sm text-green-500'>+53.3</p>
            <p className='pl-1 text-xs text-gray-500'>than last month</p>
        </div>
        <div className='bg-gray-100 mt-4 mb-4 h-0.5'></div>
        {/* TODO: calculate width: */}
        <div>
            <div class="mt-4 flex justify-between items-center">
                <p className='text-sm font-medium dark:text-black'>Dream Studio</p>
                <p className='text-xs font-bold'>$25<span className='font-normal'>/100</span></p>
            </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div class="mt-2 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" ></div>
            </div>
            <div class="mt-8 flex justify-between items-center">
                <p className='text-sm font-medium dark:text-black'>Education</p>
                <p className='text-xs font-bold'>$25<span className='font-normal'>/100</span></p>
            </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div class="mt-2 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" ></div>
            </div>
            <div class="mt-8 flex justify-between items-center">
                <p className='text-sm font-medium dark:text-black'>Health Care</p>
                <p className='text-xs font-bold'>$25<span className='font-normal'>/100</span></p>
            </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div class="mt-2 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-1/4" ></div>
            </div>
        </div>
    </div>
  )
}

export default Savings