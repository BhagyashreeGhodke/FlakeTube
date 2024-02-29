import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Logo } from './index';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const SignupForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const [error, setError] = useState("");
  // Separate state for each input field
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to hold form data
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('avatar', avatar);

    try {
        console.log("formData: ", formData);
      // Make a POST request to your backend server using Axios
      const response = await axios.post('/api/v1/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Check if the request was successful
      if (response.status === 201) {
        // Reset form fields
        setFullName('');
        setEmail('');
        setUsername('');
        setPassword('');
        setAvatar(null);
        console.log("response in signup: ", response);
        dispatch(login(response))
        navigate('/')
        // Optionally, you can redirect the user to another page or display a success message
        console.log('User signed up successfully!');
      } else {
        // Handle errors if the request was not successful
        console.error('Failed to sign up:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred while signing up:', error);
      setError(error.message);
    }
  };

  // Define the validateEmail function for email validation
  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regular expression and return true or false
    return regex.test(email);
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className='space-y-5'>
            <Input
              label="Username: "
              name="username"
              placeholder="Enter your Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Email: "
              name="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                !email || !validateEmail(email) ? 'border-red-500' : ''
              }`}
            />
            <Input
              label="Fullname: "
              name="fullName"
              placeholder="Enter your Full name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              label="Password: "
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Avatar: "
              name="avatar"
              type="file"
              placeholder="Select your avatar"
              required
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
