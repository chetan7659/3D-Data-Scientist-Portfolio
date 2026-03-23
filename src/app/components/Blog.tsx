import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts: any[] = [];

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-50/50 dark:bg-[#0d1117]/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800/50 mb-6">
              <BookOpen size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
              Latest Writing
            </h2>
          </div>

          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-10 border border-gray-200 dark:border-gray-800 shadow-sm text-center max-w-2xl w-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm currently working on some exciting new content. Check back later for articles on AI systems, scalable data platforms, and machine learning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
