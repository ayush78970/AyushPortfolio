import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaTools,
  FaBrain,
  FaUserTie,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        About Me
      </h2>
      <div className="max-w-2xl mx-auto text-lg">
        <p className="mb-8 text-center text-gray-700 dark:text-gray-200">
          I'm a passionate developer with expertise in full-stack web development
          and mobile app development. I specialize in building modern,
          responsive, and scalable applications using cutting-edge technologies.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Stack */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <FaCode className="text-4xl text-pink-500" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Tech Stack
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                MERN (MongoDB, Express, React, Node.js), PostgreSQL, TypeScript,
                React Native.
              </p>
            </div>
          </div>

          {/* Specialties */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <FaTools className="text-4xl text-orange-500" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Specialties
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Web & Mobile Development, API Development, CI/CD Pipelines,
                Linux, Git.
              </p>
            </div>
          </div>

          {/* DSA & Algorithms */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <FaBrain className="text-4xl text-blue-500" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                DSA & Algorithms
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Strong foundation in problem-solving and data structures.
              </p>
            </div>
          </div>

          {/* Freelancing & Career Goals */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <FaUserTie className="text-4xl text-purple-500" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Freelancing & Career Goals
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Interested in frontend engineering freelancing and full-time
                remote roles.
              </p>
            </div>
          </div>
        </div>

        {/* Passion for Learning */}
        <div className="mt-8 text-center">
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Passion for Learning:</strong> Continuously learning and
            sharing my journey on{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <FaTwitter className="inline mr-1" />
              Twitter
            </a>{" "}
            and{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <FaLinkedin className="inline mr-1" />
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;