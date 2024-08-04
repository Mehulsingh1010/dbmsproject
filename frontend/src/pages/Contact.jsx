import React, { useState } from 'react';
import axios from 'axios';
import logo from '../components/logo.png'; // Adjust the path based on your file structure

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/contact', formData); // Ensure this URL matches your backend
      setStatus(response.data.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E0F7FA] dark:bg-gray-900 py-12 px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl bg-white rounded-lg shadow-lg dark:bg-gray-800 overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 p-8 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
          <div className="flex items-center justify-center bg-gray-300 dark:bg-white rounded-full w-36 h-36 mb-4 p-2">
            <img src={logo} alt="Company Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <h2 className="text-2xl font-semibold mb-5 text-gray-900 dark:text-white">Contact Information</h2>
          <p className="text-lg mb-5">If you have any questions or need further information, please don't hesitate to reach out to us.</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Our Address</h3>
          <p className="text-lg mb-5">VIT BHOPAL UNIVERSITY</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Phone</h3>
          <p className="text-lg mb-5">+123 456 7890</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
          <p className="text-lg text-gray-900 dark:text-white">vitbhopal@ac.in</p>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 bg-white dark:bg-gray-800">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Contact Us Form</h1>
            <input 
              type="text" 
              id="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
              className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            />
            <input 
              type="text" 
              id="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            />
            <input 
              type="text" 
              id="mobile" 
              placeholder="Mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              required 
              className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            />
            <h4 className="text-xl font-light text-gray-800 dark:text-white mt-4 mb-4">Type Your Message Here...</h4>
            <textarea 
              id="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="w-full h-32 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
            <input 
              type="submit" 
              value="Send" 
              id="button" 
              className="w-full h-12 bg-gray-800 text-white rounded-md font-semibold cursor-pointer hover:bg-gray-600 transition-colors duration-300" 
            />
            {status && <p className="mt-4 text-gray-800 dark:text-white">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
