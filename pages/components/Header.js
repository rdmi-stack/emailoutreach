import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-blue-600 hover:text-blue-700 flex items-center">
            <i className="fas fa-paper-plane mr-2"></i>
            OutMail.io
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex items-center ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
            </li>

            <li className="md:ml-4">
              <a href="#login" className="text-blue-600 hover:text-blue-700 font-medium">Login</a>
            </li>
            <li>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
                Signup
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-8 md:hidden">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-6">
            <a href="#features" className="text-2xl text-gray-600 hover:text-blue-600 font-medium" onClick={closeMenu}>Features</a>
            <a href="#pricing" className="text-2xl text-gray-600 hover:text-blue-600 font-medium" onClick={closeMenu}>Pricing</a>


            <a href="#login" className="text-2xl text-blue-600 hover:text-blue-700 font-medium" onClick={closeMenu}>Login</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded focus:outline-none focus:shadow-outline" onClick={closeMenu}>
              Signup
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
