import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
            About Me
          </h2>

          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 text-center shadow-lg"
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Data Science graduate student at Defence Institute of Advanced Technology (DIAT), Pune, specializing in AI systems and scalable data platforms. Experienced in building end-to-end data pipelines using Microsoft Fabric, Azure Data Factory, Databricks, and PySpark, as well as developing machine learning and LLM-powered applications including transformer models and RAG systems. Skilled in transforming large-scale data into analytics-ready datasets and building intelligent analytics solutions for data-driven decision making.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education - Liquid Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* 3D Icon */}
                <div
                  className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center relative border border-blue-200 dark:border-blue-800/50"
                  style={{
                    transform: 'translateZ(20px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <GraduationCap size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                    <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">M.Tech in Data Science</p>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800/50 whitespace-nowrap">2024 – 2026</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Defence Institute of Advanced Technology, Pune</p>
                </div>
                
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                    <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science Engineering</p>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800/50 whitespace-nowrap">2019 – 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">NIST University, Berhampur, Odisha</p>
                </div>
              </div>
            </motion.div>

            {/* Key Strengths - Liquid Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Realistic 3D Icon */}
                <div
                  className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center relative border border-blue-200 dark:border-blue-800/50"
                  style={{
                    transform: 'translateZ(20px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <Award size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Strengths</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                  <span className="text-gray-600 dark:text-gray-300">Strong problem-solving and analytical thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                  <span className="text-gray-600 dark:text-gray-300">Quick learner and adaptive to new technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                  <span className="text-gray-600 dark:text-gray-300">Excellent teamwork and communication skills</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
