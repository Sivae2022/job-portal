import React from 'react';
import Button from './Button';
import InputField from '../InputField';

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
    <div className='mb-4'>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <Button onClickHandler={handleClick} value="" title="Hourly" />
      <Button onClickHandler={handleClick} value="hourly" title="Monthly" />
      <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
    </div>

    <div className=''>
    <label className='sidebar-label-container text-slate-700'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange}  />
            <span className='checkmark'></span>All
        </label>
        </div>
<div className='text-slate-700'>
        <div>
<InputField handleChange={handleChange} value={30} title="<30000k" name="test2" />
</div>
<div>
<InputField handleChange={handleChange} value={50} title="<50000k" name="test2" />
</div>
<div>
<InputField handleChange={handleChange} value={80} title="<80000k" name="test2" />
</div>
<div>
<InputField handleChange={handleChange} value={100} title="<100000" name="test2" />
</div>


       
</div>
    
    </div>

    
  );
};

export default Salary;
