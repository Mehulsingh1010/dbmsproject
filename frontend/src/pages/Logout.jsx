import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');

        toast.success('Successfully logged out!');

        navigate('/');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
