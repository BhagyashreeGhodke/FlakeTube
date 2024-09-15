import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home'; // Import Home component
import ProfilePage from './components/ProfilePage';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
        <Header toggleTheme={toggleTheme} />
        <div className="flex flex-grow h-screen">
          <Sidebar />
          <div className="flex-grow overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<Home />} /> {/* Route for Home */}
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
