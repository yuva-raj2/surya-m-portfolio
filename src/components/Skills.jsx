import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const technicalSkills = [
  { name: "Excel", level: 85 },
  { name: "PowerBI", level: 80 },
  { name: "Tableau", level: 75 },
  { name: "Data Analytics", level: 85 },
];

const softSkills = [
  "Strong Communication",
  "Interpersonal Skills", 
  "Problem Solving",
  "Research & Evaluation",
  "Quick Learner",
  "Adaptability"
];

const certifications = [
  { name: "Data Analytics Course", issuer: "Online" },
  { name: "Consumer Behaviour", issuer: "NPTEL Online Course" }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Skills & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={controls}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      variants={{
                        visible: { width: `${skill.level}%` }
                      }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Languages & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['English', 'Tamil', 'Malayalam'].map((lang) => (
                <span key={lang} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={controls}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  variants={{
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                >
                  <span className="text-accent">✓</span>
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}