import React, { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Full-Stack Developer", "Mobile App Developer"]; // Updated texts array
  const period = 2000; // Time between typing/deleting

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-r from-pink-500 to-orange-500 text-white">
      {/* Ball Background Animation (CSS-based) */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-white rounded-full animate-fast-move"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`, // Average speed
              animationDelay: `${Math.random() * 2}s`, // Average delay
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-4">Ayush Yadav</h1>
        <p className="text-2xl mb-8">
          I'm a <span className="text-white">{text}</span>
          <span className="blinking-cursor">|</span>
        </p>
        <p className="max-w-2xl text-lg text-white mb-8">
          I build scalable web and mobile applications with a focus on performance
          and user experience. Let's create something amazing together!
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-8 px-6 py-3 bg-white text-pink-500 rounded-lg hover:bg-pink-100 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* CSS for Animations */}
      <style>
        {`
          @keyframes fast-move {
            0% { transform: translate(0, 0); }
            25% { transform: translate(100vw, 50vh); }
            50% { transform: translate(50vw, 100vh); }
            75% { transform: translate(100vw, 0); }
            100% { transform: translate(0, 100vh); }
          }

          .animate-fast-move {
            animation: fast-move linear infinite;
          }

          .blinking-cursor {
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;