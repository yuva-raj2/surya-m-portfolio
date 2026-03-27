import { motion } from 'framer-motion';

const experience = {
  title: "Internship",
  company: "Parry Agro Industries Limited",
  location: "Iyerpadi Factory",
  duration: "10/07/2024 - 10/08/2024",
  points: [
    "Supporting preparation of financial reports & statements",
    "Reconciling bank statements and petty cash accounts",
    "Supporting production field operations",
    "Learning financial operations specific to tea estate industry"
  ]
};

const project = {
  title: "A Study on Parry Agro Industries Ltd",
  description: "Comprehensive analysis of one of India's leading producers of CTC, Organic, and Green teas",
  highlights: [
    "Analyzed Vision & Mission: Quality Leadership, Sustainability, Innovation",
    "Conducted SWOT Analysis: Strengths, Weaknesses, Opportunities",
    "Evaluated Economic & Trade Factors for company growth",
    "Provided findings, suggestions & conclusions for strategic growth"
  ]
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Experience & Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all group"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">{experience.title}</h3>
                <p className="text-primary font-medium">{experience.company}</p>
              </div>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm whitespace-nowrap">
                {experience.duration}
              </span>
            </div>
            <p className="text-gray-400 mb-4">{experience.location}</p>
            <ul className="space-y-3">
              {experience.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Project Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all group"
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.description}</p>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▶</span>
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}