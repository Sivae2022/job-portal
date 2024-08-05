import { Input } from 'postcss'
import React from 'react'
import InputField from '../InputField'

const Location = ({handleChange}) => {
  return (
    <div >
      <div >
        <div className='text-lg font-medium mb-2'>Location</div>
        <label className='sidebar-label-container text-slate-700'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange}  />
            <span className='checkmark'></span>All
        </label>
        </div>
        <div className='text-slate-600'>
<div >
<InputField handleChange={handleChange} value="london" title="London" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="Brussels" title="Brussels" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="San Francisco" title="San Francisco" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="Seattle" title="Seattle" name="test" />
</div>

<div>
<InputField handleChange={handleChange} value="Madrid" title="Madrid" name="test" />
</div>
<div>
<InputField handleChange={handleChange} value="Boston" title="Boston" name="test" />
</div>
</div>
       
        
     
    </div>
  )
}

export default Location
