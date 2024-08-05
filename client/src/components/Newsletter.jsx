import React from 'react';
import { FaEnvelope, FaRocket } from 'react-icons/fa6';

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaEnvelope />
          Email me for new jobs
        </h3>
        <p className='text-black/75 text-base mb-4'>It is the best job finder platform</p>
        <div className='w-full space-y-4'>
          <input 
            type="email" 
            name='email' 
            id='email' 
            placeholder='name@gmail.com' 
            className='w-full block py-2 pl-3 border focus:outline-none'
          />
          <input 
            type="submit" 
            value="Subscribe" 
            className='w-full block py-2 pl-3 border focus:outline-none bg-blue-700 text-white rounded cursor-pointer font-bold'
          />
        </div>
      </div>

      <div className='m-8'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaRocket />
          Get noticed faster
        </h3>
        <p className='text-black/75 text-base mb-4'>It is the best job finder platform</p>
        <div className='w-full space-y-4'>
          <input 
            type="file" 
            className='w-full block py-2 pl-3 border focus:outline-none bg-blue-700 text-white rounded cursor-pointer font-bold'
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
