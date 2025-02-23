import React, { useState, useEffect } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React JS", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Next JS", level: 85 },
    { name: "Node JS", level: 88 },
    { name: "Express JS", level: 85 },
    { name: "MongoDB & Mongoose", level: 80 },
    { name: "Authentication & Authorization", level: 85 },
    { name: "WebSockets & WebRTC", level: 75 },
    { name: "API", level: 90 },
    { name: "Advanced Projects with Deployment", level: 88 },
  ];

  const [animatedLevels, setAnimatedLevels] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    // Animate the progress bars
    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      const newLevels = skills.map((skill) => Math.floor(skill.level * progress));
      setAnimatedLevels(newLevels);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-800 ">
      <h2 className="text-4xl font-bold text-center mb-8">Skills & Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Circular Progress Bar */}
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                {/* Background Circle */}
                <path
                  className="text-gray-200 dark:text-gray-600"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Progress Circle */}
                <path
                  className="text-blue-500"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${animatedLevels[index]}, 100`}
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              {/* Skill Level Percentage */}
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800 dark:text-gray-200">
                {animatedLevels[index]}%
              </div>
            </div>
            {/* Skill Name */}
            <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;