/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import img1 from "../../../components/logo.png";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register', {
                username,
                password
            });

            toast.success('Successfully Registered!');
            setMessage('Registration successful!');
            navigate('/home');
        } catch (err) {
            console.error('Registration error:', err);
            setMessage('Registration failed: ' + (err.response?.data?.message || 'Unknown error'));
            toast.error(err.response?.data?.message || 'Registration failed!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#1b16a2]">
            <div className="h-[500px] bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>
                <div className="flex justify-center mb-6">
                    <img src={img1} alt="User Icon" className="w-32 h-32 rounded-full shadow-md" /> {/* Removed border */}
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        className="mb-4 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="mb-6 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full max-w-xs px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
                {message && <p className="text-center mt-4 text-gray-800">{message}</p>}
            </div>
        </div>
    );
};

export default Register;
