import React from 'react'
import InputField from '../InputField'

const WorkExp = ({handleChange}) => {
  return (
    <div>
      <div className='text-lg font-medium mb-2'>Work Experience</div>
      <div>
        <label className='sidebar-label-container text-slate-700'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange}  />
            <span className='checkmark'></span>All
        </label>
        </div>
        <div className='text-slate-700'>
<div>
<InputField handleChange={handleChange} value="Any experience" title="Any experience" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="Internship" title="Internship" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test" />
</div>

</div>
        
      
    
    </div>
  )
}

export default WorkExp
