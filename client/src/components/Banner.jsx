
import React from 'react'

import { FiMapPin, FiSearch } from 'react-icons/fi'

const Banner = ({search,handleInputChange}) => {



  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-20'>
      <h1 className='text-5xl font-bold text-black'>Find your <span className='text-blue-800'> new job</span> today</h1><br />
      <p className='text-lg text-black/70 mb-8'> Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
    <form action="">
        <div className='flex justify-start md:flex-row flex-col gap-3'> 
        <div className='relative md:w-1/2 w-full'>
    <input type="text" name='title' id='title' placeholder=' &nbsp;&nbsp;&nbsp; Job title or keywords' className='border w-96 p-2 pr-10 rounded-sm sm:text-sm sm:leading-5 relative' onChange={handleInputChange} value={search}/>
    <FiSearch className='absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400'/>
</div>

<div className='relative md:w-1/2 w-full'>
    <input type="text" name='title' id='title' placeholder=' &nbsp;&nbsp;&nbsp; enter location' className='border w-96 p-2 pr-10 rounded-sm sm:text-sm sm:leading-5 relative'/>
    <FiMapPin className='absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400'/>
</div>
<div>
    <button type='submit' className='bg-blue-700 rounded-sm text-white px-4 py-1'>Search</button>
</div>


        </div>
    </form>
    
    </div>
  )
}

export default Banner
