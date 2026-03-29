import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiPython,SiJavascript,SiHtml5,SiCss,SiMysql } from 'react-icons/si';
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact'];

  if (isLoading) {
    return (
      <div className="loader">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="loader-spinner"
        />
        <h2>Loading Portfolio...</h2>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="logo"
        >
          <span className="logo-text">BR</span>
        </motion.div>
        <ul className="nav-links">
          {sections.map((section, index) => (
            <motion.li
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                onClick={() => setActiveSection(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'education' && <EducationSection />}
        {activeSection === 'experience' && <ExperienceSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'certifications' && <CertificationsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Home Section
function HomeSection() {
  return (
    <motion.section 
      className="section home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home-content">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="profile-image"
        >
          <div className="profile-circle">
            <span>BR</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Bavya R
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="tagline"
        >
          Junior Software Developer
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="social-links"
        >
          <a href="#" className="social-icon"><FaGithub /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="mailto:bavyasudha20@gmail.com" className="social-icon"><FaEnvelope /></a>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
          View My Work
        </motion.button>
      </div>
    </motion.section>
  );
}

// About Section
function AboutSection() {
  return (
    <motion.section 
      className="section about-section"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="about-card"
        >
          <p>
            Junior Software Developer with a solid foundation in <strong>Python, SQL</strong>, 
            and core programming concepts. Skilled in writing clean, efficient code, debugging, 
            and collaborating with teams to deliver functional software solutions.
          </p>
          <p>
            Eager to apply technical skills and contribute to high-quality development projects.
          </p>
        </motion.div>
        
        <div className="info-grid">
          <InfoCard icon={<FaMapMarkerAlt />} label="Location" value="Thanjavur" delay={0.3} />
          <InfoCard icon={<FaEnvelope />} label="Email" value="bavyasudha20@gmail.com" delay={0.4} />
          <InfoCard icon={<FaPhone />} label="Phone" value="6374026589" delay={0.5} />
        </div>
      </div>
    </motion.section>
  );
}

function InfoCard({ icon, label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="info-card"
    >
      <div className="info-icon">{icon}</div>
      <h4>{label}</h4>
      <p>{value}</p>
    </motion.div>
  );
}

// Education Section
function EducationSection() {
  const education = [
    {
      degree: "B.E – Computer Science and Engineering",
      year: "2020 – 2024",
      institution: "University College of Engineering, BIT Campus, Anna University, Trichy",
      score: "CGPA: 8.4"
    },
    {
      degree: "HSE",
      year: "2019 – 2020",
      institution: "MMA Higher Secondary School",
      score: "Percentage: 82%"
    }
  ];

  return (
    <motion.section 
      className="section education-section"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <h2>Education</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className="timeline-item"
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
              <p className="institution">{edu.institution}</p>
              <span className="score">{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      title: "Data Science and Artificial Intelligence",
      company: "Durham University",
      location: "Durham, England, United Kingdom",
      type: "On-Site",
      date: "June 2024",
      description: "Completed a one-month online training program followed by a one-week on-site session at Durham University, gaining hands-on experience in Microsoft Copilot Studio and Computer Vision; participated in a Machine Learning challenge and research discussions."
    },
    {
      title: "Front-End Web Development Intern",
      company: "AICTE – Edunet Foundation (IBM SkillsBuild)",
      location: "Remote",
      type: "Internship",
      date: "Aug 2025 - Sep 2025",
      description: "Completed a 6-week Front-End Web Development internship with hands-on experience in HTML, CSS, and JavaScript."
    }
  ];

  return (
    <motion.section 
      className="section experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            className="experience-card"
          >
            <div className="card-header">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
            </div>
            <div className="card-details">
              <span className="location"><FaMapMarkerAlt /> {exp.location}</span>
              <span className="type">{exp.type}</span>
              <span className="date">{exp.date}</span>
            </div>
            <p className="description">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "Library Management System",
      tech: ["Python", "MySQL"],
      description: "Built using Python and MySQL with mysql-connector; implemented CRUD operations, ensured data integrity using primary keys and constraints, and developed a command-line interface for managing books."
    },
    {
      title: "Task Manager – Progress Tracker",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Developed a responsive web app to add, edit, delete, and track tasks with a dynamic progress bar; organized tasks by category and ensured data persistence using Local Storage."
    }
  ];

  return (
    <motion.section 
      className="section projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            whileHover={{ y: -10 }}
            className="project-card"
          >
            <div className="project-icon">
              <SiPython />
            </div>
            <h3>{project.title}</h3>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="view-project-btn"
            >
              View Project
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Skills Section
function SkillsSection() {
  const skills = [
    { name: "Python", icon: <SiPython />, level: 90 },
    { name: "SQL", icon: <SiMysql />, level: 85 },
    { name: "HTML", icon: <SiHtml5 />, level: 90 },
    { name: "CSS", icon: <SiCss />, level: 85 },
    { name: "JavaScript", icon: <SiJavascript />, level: 80 }
  ];

  return (
    <motion.section 
      className="section skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="skill-item"
          >
            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Certifications Section
function CertificationsSection() {
  const certifications = [
    { name: "Crash Course on Python", issuer: "Google", date: "Aug 2025" },
    { name: "Front-End Web Development Internship", issuer: "AICTE and Edunet Foundation", date: "Sep 2025" },
    { name: "Full Stack Web Development", issuer: "Tap Academy", date: "Nov 2024" },
    { name: "SCOUT: GREAT Scholars Programme", issuer: "Durham University, UK", date: "June 2024" }
  ];

  return (
    <motion.section 
      className="section certifications-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="cert-card"
          >
            <div className="cert-icon">🏆</div>
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer}</p>
            <span className="date">{cert.date}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <motion.section 
      className="section contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="contact-info"
        >
          <h3>Let's Connect!</h3>
          <p>I'm always open to discussing new opportunities and projects.</p>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope />
              <span>bavyasudha20@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>6374026589</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Thanjavur</span>
            </div>
          </div>
          <div className="social-links-large">
            <a href="#" className="social-btn"><FaGithub /></a>
            <a href="#" className="social-btn"><FaLinkedin /></a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="contact-form"
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default App;