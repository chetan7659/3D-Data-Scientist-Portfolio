import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chetansethy2001@gmail.com',
      link: 'mailto:chetansethy2001@gmail.com',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 828097112',
      link: 'tel:+91828097112',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'chetan7659',
      link: 'https://github.com/chetan7659',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'chetan-sethy',
      link: 'https://www.linkedin.com/in/chetan-sethy/',
      gradient: 'from-purple-600 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-xl bg-white dark:bg-[#161b22] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center group shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800/50`}
                  >
                    <Icon size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className={`text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                    {item.label}
                  </h3>
                  <p className="text-gray-400 text-sm break-all">{item.value}</p>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button - Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="mailto:chetansethy2001@gmail.com"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Send size={24} />
              <span>Send me a message</span>
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center text-gray-500"
          >
            <p>© 2026 CHETAN SETHY. Built with React & Motion.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}