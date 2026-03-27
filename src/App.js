import { useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Scroll Reveal Observer
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="reveal py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Objective</h2>
            <div className="glass rounded-2xl p-8 text-gray-300 leading-relaxed">
              To get an opportunity that allows me to showcase my skills and contribute to the company's growth. 
              To enhance my skills by taking on this challenging position and expanding my knowledge. 
              To seek a position in a company that can launch my career and help me build a stronger skill set.
            </div>
          </div>
        </section>
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Surya. M | All Rights Reserved.</p>
        <p className="mt-2 text-xs">Crafted with ❤️ using React + Three.js</p>
      </footer>
    </div>
  );
}

export default App;