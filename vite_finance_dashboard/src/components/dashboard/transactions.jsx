import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function LatestTransactions() {
  return (
    <div className='m-4 bg-white rounded-lg p-4'>
        <div className='flex justify-between'>
            <p>Latest Transactions</p>
            <p className='text-xs text-blue-500'>View all</p>
        </div>
        <div className='table_component mt-2'>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-gray-400 ">
                        <tr className="bg-white border-b">
                             <th scope="col" className="">
                                <input type="checkbox" />
                            </th>
                            <th scope="col" className="px-6 py-3">
                                To/From
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                             <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b text-xs">
                            <th scope="col" className="">
                                <input type="checkbox" />
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                Elevate Agency
                            </th>
                            <td className="px-6 py-4 text-gray-400">
                                2 October 2023
                            </td>
                            <td className="px-6 py-4 text-xs">
                                Monthly Salary
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                +$2999
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex items-center justify-center border border-green-500 text-green-500 rounded-lg pt-2 pb-2 px-0 py-0'>
                                    Success
                                </div>
                            </td>
                            <td className='px-6 py-4 text-gray-500'>
                                <FontAwesomeIcon icon={faLink} className='mr-3'/>
                                <FontAwesomeIcon icon={faTrash} className='mr-3'/>
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </div>
  )
}

export default LatestTransactions