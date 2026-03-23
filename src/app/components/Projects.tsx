import { motion } from 'motion/react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'MartScout AI: Indiamart B2B Scraper',
      description: 'Built a clean, modular web scraper for Indiamart B2B product listings using Python and a robust architecture. Extracted key product data (titles, prices, ratings, company names) and designed a user-friendly Streamlit interface for seamless exploration. Integrated Google Gemini to power an intelligent "Best Deal" recommendation agent.',
      period: 'Python & Generative AI',
      tags: ['Python', 'Web Scraping', 'Streamlit', 'Google Gemini', 'Data Extraction'],
      github: 'https://github.com/chetan7659/MartScout-AI-Indiamart-B2B-Scraper.git',
      demo: 'https://martscout-ai-indiamart-b2b-scraper-e43.streamlit.app/',
      image: '/projects/martscout-architecture.png',
    },
    {
      title: 'Resume Shortlisting System',
      description: 'Built an AI-powered resume screening system using spaCy and sentence-transformers, achieving 90%+ experience extraction accuracy and 70% fewer false-positive matches through a custom 500+ skill taxonomy. Implemented semantic resume-JD matching with all-MiniLM-L6-v2 embeddings and a transparent scoring engine for HR-compliant rankings. Integrated Google Gemini for explainable AI with anti-hallucination prompts. Deployed on Streamlit for batch processing, reducing manual screening time by 80%.',
      period: 'Aug 2025 - Sept 2025',
      tags: ['NLP', 'Machine Learning', 'spaCy', 'Gemini', 'Streamlit'],
      github: 'https://github.com/chetan7659/NLP-Powered-Resume-Shortlisting-System.git',
      image: '/projects/resume-shortlisting-architecture.png',
    },
    {
      title: 'Skin Cancer Recognizer using DL',
      description: 'Built a deep learning system to analyze dermoscopic skin lesion images and classify them into cancerous and non-cancerous categories. Leveraged MobileNetV2 with transfer learning for a highly accurate and computationally efficient lightweight model. Implemented robust data preprocessing, augmentation, and a prediction pipeline that rejects non-skin images. Evaluated using confusion matrices and classification reports.',
      period: 'Deep Learning Project',
      tags: ['Deep Learning', 'MobileNetV2', 'TensorFlow', 'Keras', 'OpenCV'],
      github: 'https://github.com/chetan7659/Skin-Cancer-Recognizer-using-DL.git',
      image: '/projects/skin-cancer-architecture.png',
    },
    {
      title: 'SecurityBERT: IoT Cyber Threat Detection',
      description: 'Developed a transformer-based intrusion detection system to classify 14 cyberattack types using the Edge IIoT dataset (61 structured network features). Designed PPFLE encoding, converting network traffic features into NLP-compatible tokens using SHA256 hashing for privacy-preserving learning. Built a custom Byte-Level BPE tokenizer (vocab size: 5000, sequence length: 512) tailored for encoded network traffic.',
      period: 'July 2025 – Present',
      tags: ['Transformers', 'Deep Learning', 'Cybersecurity', 'NLP', 'Edge AI'],
      github: 'https://github.com/chetan7659/SecurityBERT',
      image: '/projects/securitybert-architecture.png',
    },
    {
      title: 'Enterprise Sales Assistant AI (NL-to-SQL)',
      description: 'Built an enterprise NL-to-SQL AI assistant enabling non-technical users to query CRM sales data using natural language. Integrated Gemini with Snowflake to translate user queries into executable SQL queries. Developed a SQL validation engine enforcing SELECT-only execution to prevent destructive database operations.',
      period: 'Dec 2025 – Jan 2026',
      tags: ['LLM', 'Gemini', 'Snowflake', 'NL-to-SQL', 'Streamlit'],
      github: 'https://github.com/chetan7659/Enterprise-Sales-AI-agent.git',
      image: '/projects/nl-to-sql-architecture.png',
    },
    {
      title: 'AI-Powered Medical Chatbot with RAG',
      description: 'Built a RAG-based medical chatbot using Python, LangChain, FAISS, and HuggingFace Transformers. Generated embeddings using Sentence Transformers and stored them in a FAISS vector database for semantic search. Used Mistral-7B-Instruct with controlled prompting to reduce hallucinations and ensure evidence-based responses.',
      period: 'Nov 2025 – Dec 2025',
      tags: ['RAG', 'LangChain', 'FAISS', 'Mistral-7B', 'LLM'],
      github: 'https://github.com/chetan7659/Medical-RAG-Chatbot',
      image: '/projects/rag-chatbot-architecture.png',
    },
    {
      title: 'Biometric Authentication System',
      description: 'Developed a biometric authentication system using Python and OpenCV for dorsal hand vein recognition. Implemented Maximum Curvature Random Transform to generate revocable biometric templates for improved privacy protection. Applied Kernel Fisher Analysis (KFA) to reduce feature dimensionality by 75% while achieving 94% classification accuracy.',
      period: 'Aug 2022 – May 2023',
      tags: ['OpenCV', 'Biometrics', 'ML', 'Computer Vision', 'Streamlit'],
      github: 'https://github.com/chetan7659/Biometric-Authentication-System-Using-Dorsal-Hand-Vein-Pattern.git',
      image: '/projects/biometric-architecture.png',
    },
    {
      title: 'End-to-End Data Analytics on NYC Taxi Using Microsoft Fabric',
      description: 'Built an end-to-end Microsoft Fabric data pipeline using Lakehouse, Data Factory, Data Warehouse, and Power BI on NYC Taxi Parquet data (millions of records). Implemented metadata-driven, incremental data loading to automate monthly ingestion without reprocessing historical data. Created a curated presentation layer and semantic model, delivering interactive Power BI dashboards.',
      period: 'Azure & Microsoft Fabric',
      tags: ['Azure', 'Microsoft Fabric', 'Power BI', 'Data Pipeline', 'Lakehouse'],
      github: 'https://github.com/chetan7659/Fabric-Data-Pipeline',
      image: '/projects/fabric-pipeline-architecture.png',
    },
    {
      title: 'Insurance Fraud & Risk Analytics',
      description: 'Built an end-to-end insurance analytics project using Microsoft Fabric, following a Bronze-Silver-Gold Lakehouse architecture for claims data. Used PySpark to clean, standardize, and prepare noisy and incomplete insurance datasets. Built fraud detection and claim severity prediction models using PySpark and statistical analysis techniques.',
      period: 'Azure & Microsoft Fabric',
      tags: ['PySpark', 'Azure', 'Power BI', 'Fraud Detection', 'Data Analytics'],
      github: 'https://github.com/chetan7659/Insurance-Fraud-Analytics',
      image: '/projects/insurance-analytics-architecture.png',
    },
    {
      title: 'Real-Time Weather Analytics System',
      description: 'Built a real-time weather data pipeline using Weather API for live data ingestion. Used Azure Functions and Databricks to process streaming weather data. Implemented Azure Event Hub for real-time event streaming. Stored processed data in Kusto DB for fast querying and analytics. Built Power BI dashboards for live weather insights and alerts.',
      period: 'Azure & Microsoft Fabric',
      tags: ['Azure Functions', 'Event Hub', 'Databricks', 'Kusto DB', 'Real-time Analytics'],
      github: 'https://github.com/chetan7659/Real-time-Weather-Analytics',
      image: '/projects/weather-analytics-architecture.png',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col group hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Image / Architecture Box */}
                <div className="h-48 w-full rounded-lg bg-gray-200 dark:bg-gray-800 mb-6 flex items-center justify-center border border-gray-300 dark:border-gray-700 overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} Architecture`}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.querySelector('.placeholder-icon')?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <Github size={48} className={`text-gray-400 dark:text-gray-600 absolute placeholder-icon ${project.image ? 'hidden' : ''}`} />
                </div>

                <h3 className={`text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                  {project.title}
                </h3>

                {/* Period */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>

                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Liquid Glass Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={'demo' in project ? (project as any).demo : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>View</span>
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