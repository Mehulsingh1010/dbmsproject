import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../components/hero section.jpeg";
import logo from "../components/logo.png";
import DateTime from "../components/DateTime"; // Import the DateTime component

const Home = () => {
  return (
    <div className="overflow-y-hidden min-h-screen mt-[-27px] bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-6 lg:px-12">
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-center w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative w-full lg:w-2/3 h-[60vh] lg:h-[80vh] overflow-hidden rounded-lg shadow-lg mb-6 lg:mb-0">
          <img
            src={heroImage}
            alt="Hero"
            className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
              Welcome to BetterMent!
            </h1>
            <p className="text-lg lg:text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
              Unlock your academic potential with our advanced analysis tool.
              Gain valuable insights into your performance and excel in your
              studies.
            </p>
            <Link to="/result">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 animate__animated animate__fadeIn animate__delay-3s">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full lg:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Discover BetterMent
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 dark:text-gray-300">
            At BetterMent, we’re committed to your academic success. Our tools
            provide actionable feedback on your test scores to help you improve
            and achieve your goals.
          </p>

          {/* Additional Aesthetic Component */}
          <div className="p-6 bg-blue-100 border border-blue-200 rounded-lg shadow-lg dark:bg-blue-900 dark:border-blue-800 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Student Success Tips
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Set clear academic goals.</li>
              <li>Regularly review and practice your material.</li>
              <li>Utilize available resources and seek help when needed.</li>
              <li>Stay organized and manage your time effectively.</li>
            </ul>
          </div>

          {/* DateTime Component */}
          <div className="mb-[-80px]">
            {" "}
            <DateTime />
          </div>

          {/* Logo Section */}
          <div className="flex flex-col items-center mt-6 lg:mt-8 space-y-4">
            <div className="h-[70px] mt-[] w-[200px] mb-4">
              {/* <img src={logo} alt="Logo" className="object-cover transition-transform duration-500 transform hover:scale-110" /> */}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Explore more and start your journey towards academic excellence
              today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
