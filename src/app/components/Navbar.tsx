import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Resume', id: 'resume' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-white/10 dark:bg-black/30' : 'bg-transparent'
      }`}
      style={{
        boxShadow: isScrolled ? '0 8px 32px 0 rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(link.id)}
                className="px-6 py-2 rounded-lg backdrop-blur-md bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-blue-500/50 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 relative group"
              >
                <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{link.name}</span>
              </motion.button>
            ))}
            
            {/* Theme Toggle Button Desktop */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 ml-4 rounded-lg backdrop-blur-md bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg backdrop-blur-md bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Mobile Menu Button */}
            <button
              className="text-gray-700 dark:text-gray-300 backdrop-blur-md bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 space-y-2 backdrop-blur-md bg-white/90 dark:bg-[#0d1117]/90 border border-gray-200 dark:border-white/10 rounded-lg p-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded transition-colors"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
