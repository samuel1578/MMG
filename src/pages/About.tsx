import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import './About.css';

const About = () => {
  const values = [
    { title: 'Integrity', description: 'We uphold honesty and strong moral principles.', icon: '⚖️' },
    { title: 'Excellence', description: 'We strive for the highest standards in all we do.', icon: '⭐' },
    { title: 'Community', description: 'We build strong, supportive networks.', icon: '🌍' },
    { title: 'Growth', description: 'We foster continuous personal and professional development.', icon: '🌱' },
  ];

  return (
    <div className="about">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Male Mentors Ghana</h1>
        <p>Building a stronger future through mentorship and guidance</p>
      </motion.section>

      <section className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Mission</h2>
          <p>
            Male Mentors Ghana is dedicated to empowering young men across Ghana through
            structured mentorship programs, skill development workshops, and community
            engagement initiatives. We believe that every young man deserves access to
            guidance, support, and opportunities to reach their full potential.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Our Vision</h2>
          <p>
            To create a Ghana where every young man has access to positive role models
            and the resources needed to become responsible, successful, and contributing
            members of society.
          </p>
        </motion.div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
