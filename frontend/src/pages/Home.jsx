import React from "react";
import img1 from "../components/logo.png";
import img2 from "../components/hero section.jpeg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="flex items-start p-6 space-x-4 mt-[30px] ">
        {/* Sidebar Placeholder */}
        <div className="hidden lg:block lg:w-[50px] bg-gray-100 p-2 rounded-lg shadow-md">
          {/* Sidebar content can go here */}
          <h2 className="text-sm font-semibold">Menu</h2>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col w-full lg:flex-row lg:w-[calc(100%-50px)] space-x-4">
          {/* Image Section */}
          <div className="relative w-full ml-[50px]  lg:w-[50%] h-[40rem] overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/5553061/pexels-photo-5553061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Classroom"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col w-full lg:w-[50%] p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">
              Welcome to BetterMent!
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              At BetterMent, we're dedicated to helping students achieve
              academic excellence. Our advanced analysis tool allows you to gain
              valuable insights into your test performance. Simply enter your
              test scores, and we’ll provide you with detailed feedback to help
              you understand your strengths and identify areas for improvement.
            </p>

            {/* Additional Aesthetic Component */}
            <div className="p-4 bg-blue-100 border border-blue-200 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Student Success Tips
              </h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Set clear academic goals.</li>
                <li>Regularly review and practice your material.</li>
                <li>Utilize available resources and seek help when needed.</li>
                <li>Stay organized and manage your time effectively.</li>
              </ul>
            </div>
            <div className="flex">
              <Link to="/result"><div className=" flex mt-6">
                Try our Analyzing Systems now !
                
                  <button className="h-[50px] w-[150px] ml-[-255px] mt-[42px] border-2 border-gray-700 bg-black text-white font-semibold uppercase rounded-lg py-2 px-4 transition-colors duration-300 hover:bg-gray-700 hover:border-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
                    Click Here
                  </button>
                
              </div></Link>
              <div className="h-[100px] w-[200px] ml-[250px] mt-[30px]">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
