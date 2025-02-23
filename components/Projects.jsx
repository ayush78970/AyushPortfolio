import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "DSA Visualizer",
      description:
        "An interactive platform to visualize Data Structures and Algorithms. Built with React and D3.js for dynamic animations.",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Quiz Website",
      description:
        "A real-time quiz platform with user authentication and leaderboard. Built with Node.js, Express, and MongoDB.",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "FlexNow – Train Anywhere, Anytime",
      description:
        "A fitness app that provides personalized workout plans and tracks progress. Built with React Native and Firebase.",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "TechScribe – Writing the Future of Tech",
      description:
        "A platform for sharing technical articles and tutorials. Built with Next.js, Markdown, and Tailwind CSS.",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for each child
      },
    },
  };

  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Projects
      </h2>
      <motion.div
        className="flex justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className={`grid gap-8 justify-items-center max-w-7xl w-full ${
            projects.length === 1
              ? "grid-cols-1 max-w-md"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;