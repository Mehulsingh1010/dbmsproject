import React from "react";
import { useNavigate } from "react-router-dom";
import "../././../global.css";
import img1 from "../components/logo.png";

const Frontpage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-auto flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Logo and Information */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 to-white">
          <img
            src={img1}
            alt="BetterMent Logo"
            className="w-40 h-40 rounded-full shadow-lg mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 text-center">
            Welcome to BetterMent
          </h1>
          <p className="text-base md:text-lg text-center text-gray-700 leading-relaxed">
            Discover your path to academic excellence with BetterMent. Our
            advanced analysis tool provides valuable insights into your test
            performance, highlights your strengths, and identifies areas for
            improvement. Start your journey towards academic success today!
          </p>
        </div>

        {/* Right Side: Login and Signup Buttons */}
        <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8 md:p-12">
          <div className="flex flex-col gap-6 w-full max-w-sm">
            <button
              onClick={() => navigate('/login')}
              className="relative px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 w-full text-lg font-semibold group"
            >
              Login
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-5 h-5 text-blue-300 transition-transform duration-300 transform group-hover:translate-x-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
            <button
              onClick={() => navigate('/register')}
              className="relative px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 w-full text-lg font-semibold group"
            >
              Sign Up
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-5 h-5 text-green-300 transition-transform duration-300 transform group-hover:translate-x-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
            <div className="flex flex-col items-center mt-8">
              <p className="text-center text-gray-600 mb-4 font-medium">
                Download our app for easy access to BetterMent:
              </p>
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
                    className="w-36 h-auto"
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
                    className="w-36 h-auto"
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
