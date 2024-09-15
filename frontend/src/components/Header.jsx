import React, { useState } from 'react';
import { BellIcon, UserCircleIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white relative">
      <div className="text-xl font-bold">FlakeTube</div>
      <input
        type="text"
        placeholder="Search"
        className="w-1/2 p-2 rounded bg-gray-800 text-white"
      />
      <div className="flex items-center space-x-4">
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <div className="relative">
          <UserCircleIcon 
            className="h-6 w-6 cursor-pointer" 
            onClick={handleProfileClick}
          />
          <ProfileDropdown isOpen={isDropdownOpen} onClose={handleCloseDropdown} />
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-400" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
