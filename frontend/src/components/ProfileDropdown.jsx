import React from 'react';
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-14 right-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-lg w-48 z-50"
      onClick={onClose}
    >
      <div className="p-2">
        <Link to="/profile" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <img src="https://via.placeholder.com/32" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
          <span>Your Profile</span>
        </Link>
        <Link to="/settings" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <CogIcon className="h-5 w-5 mr-2" />
          <span>Settings</span>
        </Link>
        <button className="flex items-center p-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5 mr-2" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
