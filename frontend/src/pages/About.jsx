import React from 'react';


const About = () => {
  return (
    <div className="flex">
  
      {/* Main Content */}
      <div className="flex-1 ml-[92px] p-8 dark:bg-gray-900 min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At BetterMent, we understand that academic success is crucial for students, but analyzing and improving performance can often be overwhelming. 
              Students need accurate, insightful feedback to understand their strengths and areas for improvement, which can be challenging to obtain from traditional methods.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Solution</h3>
            <p className="text-gray-700 dark:text-gray-300">
              BetterMent offers an advanced analysis tool designed to simplify this process. By entering your test scores, our tool provides detailed feedback to help you grasp your performance. 
              It calculates grades, generates visual reports, and offers actionable insights to guide you toward academic excellence. Our goal is to make performance analysis straightforward and beneficial for all students.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Jane Doe</h3>
                <p className="text-gray-700 dark:text-gray-300">Lead Developer</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Jane is a passionate developer with a knack for solving complex problems and creating user-friendly applications. She leads the development team with a focus on innovation and excellence.
                </p>
              </div>
              {/* Team Member Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">John Smith</h3>
                <p className="text-gray-700 dark:text-gray-300">UX/UI Designer</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  John designs intuitive and engaging user experiences. With a keen eye for detail and a passion for design, he ensures our platform is visually appealing and easy to use.
                </p>
              </div>
              {/* Team Member Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Emily Johnson</h3>
                <p className="text-gray-700 dark:text-gray-300">Project Manager</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Emily oversees project progress and ensures everything runs smoothly. Her organizational skills and leadership keep the team on track and focused on delivering the best results.
                </p>
              </div>
              {/* Team Member Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Michael Brown</h3>
                <p className="text-gray-700 dark:text-gray-300">Backend Developer</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Michael specializes in backend development, ensuring that our systems are robust and scalable. His expertise in server-side technologies helps us deliver a reliable platform.
                </p>
              </div>
              {/* Team Member Card 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sarah Lee</h3>
                <p className="text-gray-700 dark:text-gray-300">Marketing Specialist</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Sarah manages our marketing efforts, working to increase our visibility and reach. Her skills in digital marketing and communication help us connect with students effectively.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
