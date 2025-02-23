import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: "🌐", // You can replace this with an actual icon library like FontAwesome or Material Icons
      description:
        "Building responsive and scalable web applications using modern technologies.",
    },
    {
      title: "React Native Mobile Development",
      icon: "📱",
      description:
        "Creating cross-platform mobile apps with React Native for iOS and Android.",
    },
    {
      title: "Figma to Code Conversion",
      icon: "🎨",
      description:
        "Transforming Figma designs into clean, responsive, and pixel-perfect code.",
    },
    {
      title: "Code Review & Debugging",
      icon: "🐛", // Debugging icon
      description:
        "Thoroughly reviewing code and debugging to ensure high-quality, efficient, and bug-free applications.",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations for each child
      },
    },
  };

  return (
    <section className="p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Services
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;