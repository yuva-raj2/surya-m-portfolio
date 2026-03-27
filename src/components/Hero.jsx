import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Profile Image with Float Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-full glass flex items-center justify-center animate-float">
            <span className="text-5xl font-bold gradient-text">SM</span>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hello, I'm <span className="gradient-text">Surya. M</span>
        </motion.h1>

        {/* Typing Animation - FIXED */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 min-h-[2.5rem]"
        >
          I am a{' '}
          <span className="gradient-text font-semibold">
            <TypeAnimation
              sequence={[
                'MBA Candidate',
                2000,
                'Data Analytics Enthusiast',
                2000,
                'Finance Professional',
                2000,
                'Problem Solver',
                2000,
              ]}
              loop={Infinity}
              wrapper="span"
              speed={50}
              className="inline-block"
            />
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link to="contact" smooth duration={500} offset={-70}>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1 cursor-pointer">
              Get In Touch
            </button>
          </Link>
          <a 
            href="/resume.pdf" 
            download
            className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all cursor-pointer"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Contact Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <span className="flex items-center gap-2"><FiPhone /> +91 6384982892</span>
          <span className="flex items-center gap-2"><FiMail /> surya063433892@gmail.com</span>
          <span className="flex items-center gap-2"><FiMapPin /> Valparai, Coimbatore</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} offset={-70} className="cursor-pointer">
          <FiArrowDown className="text-2xl animate-bounce text-gray-400" />
        </Link>
      </motion.div>
    </section>
  );
}