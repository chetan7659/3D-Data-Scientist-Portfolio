import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../../assets/Profile.png';

export function Hero() {
  const roles = [
    'Data Scientist',
    'Machine Learning Engineer',
    'AI Engineer',
    'Data Engineer',
    'Data Analyst'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
            {/* Name and Title - No Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100"
            >
              CHETAN SETHY
            </motion.h1>

            {/* Animated Role Rotation */}
            <div className="h-10 md:h-12 mb-8 relative w-full flex justify-center md:justify-start items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium absolute origin-center md:origin-left"
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-12"
            >
              Specializing in AI systems, scalable data platforms, and transforming large-scale data into intelligent analytics solutions.
            </motion.p>

            {/* Social Links with Liquid Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-6"
            >
              <motion.a
                href="https://github.com/chetan7659"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-xl backdrop-blur-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/chetan-sethy/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-xl backdrop-blur-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:chetansethy2001@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-xl backdrop-blur-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
             <motion.img 
                src={profilePic} 
                alt="Chetan Sethy - Profile Picture" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-full border-4 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
             />
          </div>

        </div>

        {/* Animated Scroll Indicator - Centered below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.5 } }}
          className="mt-16 w-full flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}