import React from 'react'
import InputField from '../InputField'

const Type = ({handleChange}) => {
  return (
    <div>
         <div className='text-lg font-medium mb-2'>Work Type </div>
      <div>
        <label className='sidebar-label-container text-slate-700'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange}  />
            <span className='checkmark'></span>All
        </label>
        <div className='text-slate-700'>
<div >
<InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test" />
</div>

</div>
        
     
    </div>
    </div>
  )
}

export default Type
