import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { login, logout } from './store/authSlice';

import { Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users/current-user');
                const userData = response.data; // Assuming userData is a property of the response data
                console.log('userData: ', userData);
                if (userData) {
                    dispatch(login(userData)); // Dispatch the login action with userData
                } else {
                    dispatch(logout());
                }
            } catch (error) {
                console.log('Error in app.jsx: ', error);
                // Handle error
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return !loading ? (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    ) : (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl font-semibold text-gray-700">Loading...</p>
        </div>
    );
}

export default App;
