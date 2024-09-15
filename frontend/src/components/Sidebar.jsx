import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, FireIcon, StarIcon, FolderIcon, ClockIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 h-screen">
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-black dark:hover:text-white cursor-pointer"
          >
            <HomeIcon className="h-6 w-6" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/trending"
            className="flex items-center space-x-2 hover:text-black dark:hover:text-white cursor-pointer"
          >
            <FireIcon className="h-6 w-6" />
            <span>Trending</span>
          </Link>
        </li>
        <li>
          <Link
            to="/subscriptions"
            className="flex items-center space-x-2 hover:text-black dark:hover:text-white cursor-pointer"
          >
            <StarIcon className="h-6 w-6" />
            <span>Subscriptions</span>
          </Link>
        </li>
        <li>
          <Link
            to="/library"
            className="flex items-center space-x-2 hover:text-black dark:hover:text-white cursor-pointer"
          >
            <FolderIcon className="h-6 w-6" />
            <span>Library</span>
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            className="flex items-center space-x-2 hover:text-black dark:hover:text-white cursor-pointer"
          >
            <ClockIcon className="h-6 w-6" />
            <span>History</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
