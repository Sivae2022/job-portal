import React from 'react'
import InputField from '../InputField'


const JobPosting = (handleChange) => {
    const now=new Date()
    
    const twentyFourHourAgo=new Date(now-24*60*60*1000)
    const sevenDayAgo=new Date(now-7*24*60*60*1000)
    const ThirtyDatAgo=new Date(now-30*24*60*60*1000)
   // console.log(twentyFourHourAgo);

   const twentyFourHourAgoDate=twentyFourHourAgo.toISOString().slice(0,10)
   const sevenDayAgoDate=sevenDayAgo.toISOString().slice(0,10)
   const ThirtyDatAgoDate=ThirtyDatAgo.toISOString().slice(0,10)
  console.log(twentyFourHourAgoDate);
  return (
    <div>
      <div>
        <div className='text-lg font-medium mb-2'>Posting Date</div>
        <label className='sidebar-label-container text-slate-700'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange}  />
            <span className='checkmark'></span>All
        </label>
        </div>
        <div className='text-slate-700'>
<div>
<InputField handleChange={handleChange} value={twentyFourHourAgo} title="Last 24 hours" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value={sevenDayAgo} title="Last Week" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value={ThirtyDatAgoDate} title="Last Month" name="test" />
</div>
</div>

       
        
      
    </div>
  )
}

export default JobPosting
