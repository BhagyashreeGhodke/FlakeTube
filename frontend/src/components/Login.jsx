import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Logo } from './index';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../store/authSlice'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend server using Axios
      const response = await axios.post('/api/v1/users/login', {
        email,
        password,
      });
      if(response){
       const userData=  await axios.get('/api/v1/users/current-user')
       console.log("userData in login: ", userData);
        if (userData){
            dispatch(authLogin(userData.data));
                
        }
      }

      // Check if the request was successful
      if (response.status === 200) {
        // Reset form fields
        setEmail('');
        setPassword('');

        navigate('/');
        // Optionally, you can redirect the user to another page or display a success message
        console.log('User logged in successfully!');
      } else {
        // Handle errors if the request was not successful
        console.error('Failed to log in:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred while logging in:', error);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Log in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don't have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className='space-y-5'>
            <Input
              label="Email: "
              name="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password: "
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
