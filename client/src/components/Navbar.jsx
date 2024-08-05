import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 const handleMenuToggler = () => {
  setIsMenuOpen(!isMenuOpen);
 }

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-jobs", title: "My Jobs" },
    { path: "/salary", title: "Salary" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className="flex items-center justify-between p-6">
      <div className=''>
  <span className="text-7xl font-bold text-blue-800 ">JOBBE</span>
  
</div>

        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li  key={path} className= ' text-base font-semibold text-2xl'>
              <NavLink
                to={path}
                className={({ isActive }) => 
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
            <div className='text-base  font-medium space-x-5 hidden lg:block'>
              <Link to="/login" className=' text-black py-2 px-5 border rounded hover:bg-blue-700  hover:text-white duration-1000'>Login</Link>
              <Link to="/register" className='py-2 px-5 border rounded bg-blue-700 text-white hover:bg-white hover:text-black duration-1000'>Register</Link>
            </div>

            <div className='md:hidden block'>
              <button onClick={handleMenuToggler}>
               {
                isMenuOpen ? <FaXmark className='text-2xl ' /> : <FaBarsStaggered className='text-2xl ' />
               }
</button>
            </div>
          </nav>
          <div className={`px-4 bg-black py-4 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
  <ul>
    {navItems.map(({ path, title }) => (
      <li key={path} className="text-base text-white first:text-white py-1">
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {title}
        </NavLink>
      </li>
    ))}
    <Link to="/login" className=' p-1  text-white'>Login</Link>
    
  </ul>
</div>

        </header>
  );
};

export default Navbar;
