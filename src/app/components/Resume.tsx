import { motion } from 'motion/react';
import { FileText, Download, ExternalLink } from 'lucide-react';

export function Resume() {
  const resumes = [
    {
      title: 'Data Engineer Resume',
      description: 'Focused on scalable data pipelines, cloud architecture, and big data tools like PySpark and Databricks.',
      file: '/resume-data-engineer.pdf',
    },
    {
      title: 'AI / ML Engineer Resume',
      description: 'Focused on machine learning models, RAG systems, LLMs, and intelligent analytics solutions.',
      file: '/resume-ai-ml-engineer.pdf',
    },
  ];

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
            Resumes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {resumes.map((resume, index) => (
              <motion.div
                key={resume.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800/50">
                    <FileText size={28} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {resume.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  {resume.description}
                </p>

                <div className="flex gap-4">
                  <motion.a
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>View</span>
                  </motion.a>
                  <motion.a
                    href={resume.file}
                    download
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Download size={20} />
                    <span>Download</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
