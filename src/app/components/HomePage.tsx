import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Certifications } from "@/app/components/Certifications";
import { Resume } from "@/app/components/Resume";
import { Blog } from "@/app/components/Blog";
import { Contact } from "@/app/components/Contact";
import backgroundImg from "@/assets/88e3f160051ca1e741fb186e60b3b74391e0c797.png";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#0d1117] dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      {/* Premium Modern Background Gradient */}
      <div 
        className="fixed inset-0 w-full h-full z-0 transition-opacity duration-300 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-200/50 via-transparent to-transparent dark:from-gray-800/30 dark:via-transparent dark:to-transparent" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}
