import React, { useState, useEffect } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#user-menu') && !event.target.closest('#user-dropdown')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-blue-600 hover:text-blue-700 flex items-center">
            <i className="fas fa-paper-plane mr-2"></i>
            Email Outreach
          </a>
          <nav className="ml-8 hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Campaigns</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contacts</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Analytics</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
            Upgrade
          </button>
          <div className="relative">
            <button
              className="flex items-center focus:outline-none"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://example.com/avatar.jpg"
                alt="User avatar"
              />
              <span className="text-gray-700 font-medium">John Doe</span>
              <svg
                className="w-4 h-4 ml-1 fill-current text-gray-600"
                viewBox="0 0 20 20"
              >
                <path d="M6 8l4 4 4-4"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
                id="user-dropdown"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
