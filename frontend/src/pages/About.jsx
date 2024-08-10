import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E0F7FA] text-black dark:bg-[#111827] dark:text-white">
      {/* Main Content */}
      <div className="flex-1 ml-[92px] p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-[#1F2937]">
          <h1 className="text-4xl font-extrabold mb-6 text-black dark:text-gray-100">
            About Us
          </h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black dark:text-gray-100">
              Our Mission
            </h2>
            <p className="text-gray-900 dark:text-gray-300 mb-4">
              At BetterMent, we understand that academic success is crucial for students, but analyzing and improving performance can often be overwhelming. 
              Students need accurate, insightful feedback to understand their strengths and areas for improvement, which can be challenging to obtain from traditional methods.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-gray-100">
              Our Solution
            </h3>
            <p className="text-gray-900 dark:text-gray-300 mb-8">
              BetterMent offers an advanced analysis tool designed to simplify this process. By entering your test scores, our tool provides detailed feedback to help you grasp your performance. 
              It calculates grades, generates visual reports, and offers actionable insights to guide you toward academic excellence. Our goal is to make performance analysis straightforward and beneficial for all students.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black dark:text-gray-100">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member Card 1 */}
              <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg dark:bg-[#374151]">
                <img
                  src="https://th.bing.com/th/id/OIP.d14ED9H9QeOn7Uka5EpxVwHaHa?rs=1&pid=ImgDetMain"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Mehul Singh
                </h3>
                <p className="text-gray-900 dark:text-gray-300"> Developer</p>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id pariatur accusamus labore vero praesentium architecto recusandae, necessitatibus nisi asperiores laudantium error aspernatur sunt animi.                </p>
                <div className="flex justify-center mt-4">
                  <a href="#" className="text-blue-500 mx-2">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
              {/* Team Member Card 2 */}
              <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg dark:bg-[#374151]">
                <img
                  src="https://th.bing.com/th/id/OIP.d14ED9H9QeOn7Uka5EpxVwHaHa?rs=1&pid=ImgDetMain"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Disha Gupta
                </h3>
                <p className="text-gray-900 dark:text-gray-300">Developer</p>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe accusamus rem minima omnis atque, suscipit ipsam odio consequatur fuga alias perferendis, obcaecati magnam pariatur explicabo!                </p>
                <div className="flex justify-center mt-4">
                  <a href="#" className="text-blue-500 mx-2">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
              {/* Team Member Card 3 */}
              <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg dark:bg-[#374151]">
                <img
                  src="https://th.bing.com/th/id/OIP.d14ED9H9QeOn7Uka5EpxVwHaHa?rs=1&pid=ImgDetMain"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Parth Krishna 
                </h3>
                <p className="text-gray-900 dark:text-gray-300">Developer</p>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nemo, cum velit exercitationem voluptatem non neque. Vel beatae officia quasi sit culpa itaque dolore, facere eveniet.                </p>
                <div className="flex justify-center mt-4">
                  <a href="#" className="text-blue-500 mx-2">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
              {/* Team Member Card 4 */}
              <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg dark:bg-[#374151]">
                <img
                  src="https://th.bing.com/th/id/OIP.d14ED9H9QeOn7Uka5EpxVwHaHa?rs=1&pid=ImgDetMain"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Anshika
                </h3>
                <p className="text-gray-900 dark:text-gray-300">Developer</p>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam amet inventore, obcaecati tempora dolorum corporis nostrum distinctio expedita harum, libero nobis reprehenderit nisi nam veritatis?                </p>
                <div className="flex justify-center mt-4">
                  <a href="#" className="text-blue-500 mx-2">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
              {/* Team Member Card 5 */}
              <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg dark:bg-[#374151]">
                <img
                  src="https://th.bing.com/th/id/OIP.d14ED9H9QeOn7Uka5EpxVwHaHa?rs=1&pid=ImgDetMain"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Jhirish
                </h3>
                <p className="text-gray-900 dark:text-gray-300">Developer</p>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit fuga adipisci nostrum nemo delectus accusamus perferendis, exercitationem ad error explicabo quas possimus nisi laborum impedit.                </p>
                <div className="flex justify-center mt-4">
                  <a href="#" className="text-blue-500 mx-2">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-blue-500 mx-2">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
