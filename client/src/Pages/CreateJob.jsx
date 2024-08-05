import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import Creatable from 'react-select/creatable';

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    data.skills=selectedOption;
    // console.log(data);
    console.log(selectedOption); // This will log the selected skills
    fetch("http://localhost:3000/post-jobs",{
      method:"POST",
      headers:{"Content-Type" : 'application/json'},
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then((result)=>{
      console.log(result);

    })
  };
  
  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'C++', label: 'C++' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'React', label: 'React' },
    { value: 'Node', label: 'Node' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Redux', label: 'Redux' },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-24">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue="Web Developer"
                {...register("JobTitle", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.JobTitle && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("CompanyName", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.CompanyName && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="number"
                placeholder="Ex: 50000"
                {...register("MinSalary", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.MinSalary && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="number"
                placeholder="Ex: 100000"
                {...register("MaxSalary", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.MaxSalary && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* 3rd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Type</label>
              <input
                type="text"
                placeholder="Ex: Full-time"
                {...register("JobType", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.JobType && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                {...register("JobLocation", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.JobLocation && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* 4th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                {...register("JobPostingDate", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.JobPostingDate && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("ExperienceLevel", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              >
                <option value="">Select experience level</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              {errors.ExperienceLevel && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* 5th row */}
          <div className="lg:w-full w-full">
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <Creatable
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="block w-full"
            />
          </div>

          {/* 6th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                {...register("CompanyLogo", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.CompanyLogo && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <input
                type="text"
                placeholder="Ex: Permanent"
                {...register("EmploymentType", { required: true })}
                className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {errors.EmploymentType && <span className="text-red-500">This field is required</span>}
            </div>
          </div>

          {/* 7th row */}
          <div className="lg:w-full w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              {...register("JobDescription", { required: true })}
              placeholder="Enter job description"
              className="block w-full border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              rows="5"
            ></textarea>
            {errors.JobDescription && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="lg:w-full w-full">
            <label className="block mb-2 text-lg">Posted By</label>
            <input
              type='email'
              placeholder='your email address'
              {...register('PostedBy')}
              className="block w-1/2 border border-gray-300 bg-white py-1.5 pl-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              rows="5"
              />
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <input
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;

