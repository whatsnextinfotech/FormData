import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col ">
      {/* Navigation Bar */}
      <nav className="bg-white py-4 px-4 md:px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12">
              {/* <svg viewBox="0 0 50 50" className="w-full h-full">
                <circle cx="15" cy="20" r="10" fill="#567d2c" />
                <circle cx="30" cy="15" r="10" fill="#6a9434" />
                <circle cx="15" cy="35" r="10" fill="#567d2c" />
                <circle cx="30" cy="30" r="10" fill="#6a9434" />
              </svg> */}
            </div>
            <div className="ml-2">
              <div className="font-bold text-base md:text-lg text-green-800">Pulse Cash</div>
              <div className="flex items-center">
                {/* <span className="font-bold text-base md:text-lg text-gray-800">Loan</span> */}
                {/* <div className="h-1 w-12 md:w-16 bg-green-700 ml-1"></div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-green-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
      {/* Navigation Links - Desktop */}
<div className="hidden md:flex space-x-4 lg:space-x-8">
  <a href="/" className="text-green-800 font-medium">Home</a>
  <a href="#" className="text-black font-medium">About us</a>
  <a href="#" className="text-black font-medium">Our Service</a>

  {/* Dropdown for Loan Programs */}
  <div className="relative group">
    <button className="text-black font-medium flex items-center focus:outline-none">
      Loan Programs
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    {/* Dropdown Menu */}
    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Loans</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Car Loans</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personal Loans</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Education Loans</a>
    </div>
  </div>

  <a href="#" className="text-black font-medium">Contact Us</a>
</div>

        {/* Apply Now Button - Desktop */}
        <div className="hidden md:block">
          <button className="border-2 border-green-700 text-green-800 font-medium px-4 lg:px-6 py-2 rounded hover:bg-green-50 transition duration-300">
          <Link to="/form" className="">
           Apply
          </Link>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-green-800 font-medium py-1">Home</a>
            <a href="#" className="text-black font-medium py-1">About us</a>
            <a href="#" className="text-black font-medium py-1">Our Service</a>
            <a href="#" className="text-black font-medium py-1 flex items-center">
              Loan Programs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            {/* <a href="#" className="text-black font-medium py-1">FAQ's</a> */}
            <a href="#" className="text-black font-medium py-1">Contact Us</a>
            <button className="w-full bg-green-700 text-white font-medium py-2 mt-2 rounded text-center">
              Apply Now
            </button>
          </div>
        </div>
      )}

     
    </div>
  );
}