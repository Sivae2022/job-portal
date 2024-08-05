import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Card = ({ data }) => {
  const {
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    employmentType,
    description,
    jobTitle
  } = data;

  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-lg bg-white shadow-sm">
      <Link to="/" className="flex flex-col gap-4 sm:flex-row items-start">
        <img src={companyLogo} alt={`${companyName} logo`} className="max-w-[100px] max-h-[100px] object-contain" />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{jobTitle}</h3>
          <p className="text-gray-600">{companyName}</p>
          <div className="flex items-center text-gray-600">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>{jobLocation}</span>
          </div>
          <p className="text-gray-600">Salary: {minPrice} - {maxPrice} {salaryType}</p>
          <p className="text-gray-600">Employment Type: {employmentType}</p>
          <p className="text-gray-600">Posted on: {postingDate}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
