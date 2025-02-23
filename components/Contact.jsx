import { motion } from "framer-motion";

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <section className="p-6 sm:p-12 bg-[#0a192f] relative overflow-hidden" >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#ff9a9e,#fad0c4,#fbc2eb,#a6c1ee,#fbc2eb)] opacity-20 animate-gradient"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-12 text-white">
          Get in Touch
        </h2>
        <motion.form
          className="space-y-4 sm:space-y-6 bg-white/10 backdrop-blur-md p-5 sm:p-8 rounded-2xl shadow-2xl border border-white/20"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 pl-10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 text-white placeholder:text-white/70"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">
              👤
            </span>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 pl-10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 text-white placeholder:text-white/70"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">
              ✉
            </span>
          </div>
          <div className="relative">
            <textarea
              placeholder="Your Message"
              className="w-full min-h-[150px] p-3 pl-10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 text-white placeholder:text-white/70"
            ></textarea>
            <span className="absolute left-3 top-4 text-white/70">
              💬
            </span>
          </div>
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
            variants={buttonVariants}
            whileHover="hover"
          >
            <span className="mr-2">Send Message</span>
            <span>🚀</span>
          </motion.button>
        </motion.form>

        {/* Social Links Section */}
        <div className="mt-6 sm:mt-12 text-center">
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            Or Reach Out Directly
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {/* Phone */}
            <a
              href="tel:+7839427160"
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-all duration-300"
            >
              <span className="text-lg sm:text-2xl">📞</span>
              <span className="text-sm sm:text-lg">Phone</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/7839427160"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400 transition-all duration-300"
            >
              <span className="text-lg sm:text-2xl">💬</span>
              <span className="text-sm sm:text-lg">WhatsApp</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayush-yadav-27b009292/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-blue-500 transition-all duration-300"
            >
              <span className="text-lg sm:text-2xl">🔗</span>
              <span className="text-sm sm:text-lg">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ayush78970/AyushPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-gray-400 transition-all duration-300"
            >
              <span className="text-lg sm:text-2xl">🐙</span>
              <span className="text-sm sm:text-lg">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
