import { motion } from 'motion/react';
import { Award, BadgeCheck, ShieldCheck, ExternalLink } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Microsoft DP-700: Fabric Data Engineer Associate',
      issuer: 'Udemy (Instructor: Ansh Lambda)',
      date: 'Mar 2026',
      icon: BadgeCheck,
      color: 'from-blue-500 to-cyan-500',
      link: 'https://www.udemy.com/certificate/UC-b35c40ba-38d6-4de6-b7a1-69b6fa5efe26/',
    },
    {
      title: 'Associate Generative AI (NCA-GENL) Exam Prep Course',
      issuer: 'Udemy (Instructors: Manifold AI Learning)',
      date: 'Mar 2026',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      link: 'https://www.udemy.com/certificate/UC-b62d510d-1c97-431b-9b6a-8386388a4eb3/',
    }
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
            Certifications & Licenses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col group hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800/50`}>
                    <Icon size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex flex-col gap-1 mb-6 flex-grow">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">{cert.issuer}</span>
                    <span className="text-gray-500 text-sm">Issued: {cert.date}</span>
                  </div>

                  {/* Verification Button */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center items-center gap-2 w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Verify Credential</span>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
