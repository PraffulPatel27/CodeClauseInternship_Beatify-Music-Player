import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function dashboard_header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Add a state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

  // Function to toggle dark mode
  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // Use effect to load theme from local storage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div id='home' className='scroll-smooth'>
      {/* Navbar start from here */}
      <header className='bg-transparent transition-colors duration-300 sticky top-0 z-50 border-b border-gray-800'>
        <div className="mx-auto w-[100%] md:max-w-screen-xl lg:max-w-screen-xl flex h-18 py-2 items-center gap-4 lg:gap-16 px-2 sm:px-4 md:px-6 lg:px-6">
          <a className="block text-primary" href="#">
            <span className="sr-only">Home</span>

            <div className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-4 flex-wrap">
              <span className="text-2xl sm:text-3xl font-bold mt-1 bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent">
                Beatify
              </span>
            </div>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 lg:gap-6 text-sm">
                <li><a className="text-gray-500 font-bold transition hover:text-[#65D36E]" href="#home">Home</a></li>
                <li><a className="text-gray-500 font-bold transition hover:text-[#65D36E]" href="#about-Us">About Us</a></li>
                <li><a className="text-gray-500 font-bold transition hover:text-[#65D36E]" href="#contact-us">Contact </a></li>
                <li><a className="text-gray-500 font-bold transition hover:text-[#65D36E]" href="#contact-us">Premuim </a></li>
              </ul>
            </nav>

            <div className="flex items-center gap-2 md:gap-4 lg:gap-4">
              <a className="w-21 sm:w-28 block rounded-md bg-transparent px-4 sm:px-5 py-2.5 text-sm text-center font-medium text-[#65D36E] border border-[#65D36E] transition hover:bg-[#65D36E] hover:text-white" href="files">
                Login 
              </a>

              <a className="w-21 sm:w-28 text-center block rounded-md bg-[#65D36E] px-4 sm:px-5 py-2.5 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#65D36E] hover:border hover:border-[#65D36E]" href="files">
                Sign Up 
              </a>

              <div>
                <button
                  className="block rounded bg-gray-100 p-2 border border-gray-300 text-[#65D36E] transition hover:text-gray-600/75 md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav aria-label="Mobile" className="md:hidden px-4 pt-2 pb-4 bg-transparent">
            <ul className="flex flex-col gap-2 text-sm">
              <li><a className="text-gray-600 transition hover:text-[#65D36E]" href="#">Home</a></li>
              <li><a className="text-gray-600 transition hover:text-[#65D36E]" href="#">About Us</a></li>
              <li><a className="text-gray-600 transition hover:text-[#65D36E]" href="#">Contact Us</a></li>
              <li><a className="text-gray-600 transition hover:text-[#65D36E]" href="#">Premuim</a></li>

            </ul>
          </nav>
        )}
      </header>
      {/* Navbar end here */}
    </div>
  );
}

export default dashboard_header;