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
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 p-8 bg-gray-200 text-gray-800">
          <img src={logo} alt="Company Logo" className="w-36 rounded-full mb-4" />
          <h2 className="text-2xl font-semibold mb-5">Contact Information</h2>
          <p className="text-lg mb-5">If you have any questions or need further information, please don't hesitate to reach out to us.</p>
          <h3 className="text-xl font-semibold mb-2">Our Address</h3>
          <p className="text-lg mb-5">VIT BHOPAL UNIVERSITY</p>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-lg mb-5">+123 456 7890</p>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-lg">vitbhopal@ac.in</p>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 bg-white">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">Contact Us Form</h1>
            <input type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none" />
            <input type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none" />
            <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none" />
            <input type="text" id="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required className="w-full h-12 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none" />
            <h4 className="text-xl font-light text-gray-800 mt-4 mb-4">Type Your Message Here...</h4>
            <textarea id="message" value={formData.message} onChange={handleChange} required className="w-full h-32 px-3 mb-4 border-b-2 border-gray-800 bg-gray-100 rounded-md focus:outline-none resize-none"></textarea>
            <input type="submit" value="Send" id="button" className="w-full h-12 bg-gray-800 text-white rounded-md font-semibold cursor-pointer hover:bg-gray-600 transition-colors duration-300" />
            {status && <p className="mt-4 text-gray-800">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
