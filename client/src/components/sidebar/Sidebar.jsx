import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPosting from './JobPosting'
import WorkExp from './WorkExp'
import Type from './Type'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
      <h1 className='text-lg font-bold mb-2'>Filters</h1>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick}/>
      <JobPosting/>
      <WorkExp handleChange={handleChange}/>
      <Type handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
