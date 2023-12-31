import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <div className='bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between'>
          <div className='relative'> 
            <h1 className='text-black'>Dashboard</h1>
          </div>
          <div className='right_components flex items-center'>
            <div className='input_component relative inline-block	'>
              <input type="text" className='p-2 bg-slate-50	rounded-md	pl-10 placeholder-gray-400 placeholder-sm' placeholder="Search here" value={inputValue} onChange={handleChange}/>
              <FontAwesomeIcon icon={faSearch} className="icon absolute left-2 top-1/2 -translate-y-1/2	" />
            </div>
            <div className='notification_component pl-2'>
              <FontAwesomeIcon icon={faBell} className="text-black text-lg" />
            </div>
            <div className='bg-gray-200 mx-2 my-2 w-px h-10'></div>
            <div className='userInfo_component flex flex-row mt-4 mb-4'>
              {/* Row, inside the row. and image and column in a text */}
              <div className=''>
                  <img src="https://images.unsplash.com/photo-1682685796852-aa311b46f50d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww" alt="" className="rounded-full w-10 h-10" />
              </div>
              <div className='px-2'>
                <p className='text-sm'>Graham Alexander</p>
                <p className='text-xs text-gray-500'>graham@gmail.com</p>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Navbar