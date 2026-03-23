import { motion } from 'motion/react';
import { Code2, Brain, BarChart3, Cloud, Bot, Server } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Databases',
      icon: Code2,
      color: 'from-cyan-500 to-blue-600',
      skills: ['Python', 'C', 'SQL', 'MongoDB'],
    },
    {
      title: 'Machine Learning & Data Science',
      icon: Brain,
      color: 'from-purple-600 to-pink-500',
      skills: ['Machine Learning', 'Deep Learning', 'Feature Engineering', 'Model Evaluation', 'Data Analysis', 'Statistical Analysis', 'Model Training', 'Classification', 'Data Preprocessing'],
    },
    {
      title: 'NLP & LLMs',
      icon: Bot,
      color: 'from-fuchsia-500 to-purple-600',
      skills: ['NLP', 'Transformer Models', 'Tokenization', 'RAG', 'LangChain', 'LangGraph', 'Vector Databases'],
    },
    {
      title: 'Data Tools & Frameworks',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'FAISS', 'Streamlit', 'HuggingFace', 'Power BI'],
    },
    {
      title: 'Big Data & Cloud',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: ['AWS (EC2, S3, IAM)', 'Azure Data Factory', 'Synapse Analytics', 'Databricks', 'PySpark', 'MS Fabric', 'ADLS Gen2', 'Stream Analytics', 'Azure Functions', 'Cosmos DB', 'Blob Storage', 'Data Modeling', 'Data Warehousing', 'ETL / ELT Pipelines'],
    },
    {
      title: 'DevOps & Architecture',
      icon: Server,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'Linux', 'Terraform', 'Ansible', 'Git', 'GitHub', 'CI/CD', 'System Design'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mb-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800/50`}
                  >
                    <Icon size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className={`text-xl font-bold mb-4 text-gray-900 dark:text-gray-100`}>
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-blue-500/50 hover:bg-white dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
