import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Jobs from "./Jobs";
import Card from "../components/Card";
import Sidebar from "../components/sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredItems = jobs.filter(
    (job) => job.jobTitle && job.jobTitle.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredData = (jobs, selected, search) => {
    let filteredJobs = filteredItems;

    if (search) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => 
          postingDate >= selected ||
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((job, i) => <Card key={i} data={job} />);
  };

  const result = filteredData(jobs, selectedCategory, search);

  return (
    <>
      <Banner search={search} handleInputChange={handleInputChange} />
      <div className="grid grid-cols-4 md:grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left card */}
        <div className="bg-indigo-50 rounded p-4">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* Job cards */}
        <div className="col-span-2 bg-indigo-50 p-4 rounded">
          {isLoading ? (
            <p>Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">No Jobs Found</h3>
              <p>No data found</p>
            </>
          )}
          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-4">
              <button onClick={prevPage} disabled={currentPage===1} className="hover:underline">Previous</button>
              <span className="mx-2">
                Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length/itemsPerPage)} className="hover:underline">Next</button>
            </div>
          )}
        </div>
        {/* Right cards */}
        <div className="bg-indigo-50 p-4 rounded">
          <Newsletter/>
        </div>
      </div>
    </>
  );
};

export default Home;
