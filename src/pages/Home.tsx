import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: 'Mentorship Programs',
      description: 'Connect with experienced mentors who guide you on your journey to success.',
      icon: '🎯',
    },
    {
      title: 'Community Support',
      description: 'Join a supportive community of young men committed to growth and excellence.',
      icon: '🤝',
    },
    {
      title: 'Skill Development',
      description: 'Access workshops and resources to develop essential life and career skills.',
      icon: '📚',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="home">
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Young Men
            <br />
            <span className="gradient-text">Through Mentorship</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Male Mentors Ghana connects young men with experienced mentors to foster
            personal growth, leadership, and community impact.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/become-mentee">
              <Button size="large">Become a Mentee</Button>
            </Link>
            <Link to="/become-mentor">
              <Button variant="outline" size="large">
                Become a Mentor
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="features">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Make a Difference?</h2>
          <p>Join our community of mentors and mentees today.</p>
          <Link to="/contact">
            <Button size="large">Get in Touch</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
