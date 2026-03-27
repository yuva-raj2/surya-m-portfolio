import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const educationData = [
  {
    degree: "Master of Business Administration",
    institution: "Hindustan Institute of Technology",
    year: "2023 - 2025",
    score: "75%",
  },
  {
    degree: "B.Com (Computer Application)",
    institution: "R.V.S. College of Arts & Science, Coimbatore",
    year: "",
    score: "70%",
  },
  {
    degree: "HSC",
    institution: "Sacred Heart Matric. HR. Sec School",
    year: "March 2020",
    score: "72%",
  },
  {
    degree: "SSLC",
    institution: "Beula Matric. HR. Sec School",
    year: "March 2018",
    score: "90%",
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-24 px-6 reveal">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-dark z-10" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-3">
                    {edu.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-gray-400 mb-3">{edu.institution}</p>
                  <span className="text-accent font-semibold">Score: {edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}