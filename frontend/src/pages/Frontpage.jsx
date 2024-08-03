/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login/Signup/Login";
import "../././../global.css"
import img1 from "../components/logo.png"
import Register from "./Login/Signup/Register";

const Frontpage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1b16a2] flex items-center justify-center">
      <div className="bg-white flex rounded-lg shadow-lg w-full max-w-6xl h-[90vh]">
        {/* Left Side: Logo and Information */}
        <div className="w-1/2 flex flex-col items-center justify-center p-12">
          <img src={img1} alt="BetterMent Logo" className="w-32 h-32 rounded-full shadow-md mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Welcome to BetterMent</h1>
          <p className="text-lg text-center text-gray-700">
            At BetterMent, we're dedicated to helping students achieve academic excellence. Our advanced analysis tool allows you to gain valuable insights into your test performance. Simply enter your test scores, and we’ll provide you with detailed feedback to help you understand your strengths and identify areas for improvement.
          </p>
        </div>

        {/* Right Side: Login and Signup Buttons */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 p-12">
          <div className="flex flex-col gap-6 w-full max-w-xs">
            <button 
              onClick={() => navigate('/login')}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-full"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 w-full"
            >
              Sign Up
            </button>
            <div className="flex flex-col items-center mt-8">
              <p className="text-center text-gray-600 mb-4">Download our app:</p>
              <div className="flex gap-4">
                <a 
                  href="https://play.google.com/store/apps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img 
                    src="https://th.bing.com/th/id/OIP.tX5I3xynx2Pap_qcEx49KgHaC9?w=338&h=140&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                    alt="Download on Google Play" 
                    className="w-40 h-auto" 
                  />
                </a>
                <a 
                  href="https://apps.apple.com/us/genre/ios/id36" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img 
                    src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Image.png" 
                    alt="Download on the App Store" 
                    className="w-40 h-auto" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
