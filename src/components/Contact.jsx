import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const contactInfo = [
    { icon: FiPhone, label: "Phone", value: "+91 6384982892", href: "tel:+916384982892" },
    { icon: FiMail, label: "Email", value: "surya063433892@gmail.com", href: "mailto:surya063433892@gmail.com" },
    { icon: FiMapPin, label: "Location", value: "Valparai, Coimbatore-642127", href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 gradient-text"
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-12 text-lg"
        >
          I'm currently seeking opportunities to contribute and grow. 
          Feel free to reach out!
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-6 block hover:shadow-xl hover:shadow-primary/20 transition-all ${
                !item.href ? 'cursor-default' : 'hover:-translate-y-2'
              }`}
            >
              <item.icon className="text-3xl mx-auto mb-4 text-accent" />
              <p className="text-gray-400 text-sm">{item.label}</p>
              <p className="font-medium mt-1">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <a href="#" className="p-4 glass rounded-full hover:bg-primary/20 transition-colors">
            <FiLinkedin className="text-2xl" />
          </a>
          <a href="#" className="p-4 glass rounded-full hover:bg-primary/20 transition-colors">
            <FiGithub className="text-2xl" />
          </a>
          <a href="mailto:surya063433892@gmail.com" className="p-4 glass rounded-full hover:bg-primary/20 transition-colors">
            <FiMail className="text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}