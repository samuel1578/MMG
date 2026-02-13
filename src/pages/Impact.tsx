import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import './Impact.css';

const Impact = () => {
  const stats = [
    { value: '500+', label: 'Mentees Served', icon: '👥' },
    { value: '150+', label: 'Active Mentors', icon: '🎓' },
    { value: '50+', label: 'Programs Run', icon: '📊' },
    { value: '10+', label: 'Communities Reached', icon: '🌍' },
  ];

  return (
    <div className="impact">
      <motion.section
        className="impact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Impact</h1>
        <p>Transforming lives, one mentorship at a time</p>
      </motion.section>

      <section className="impact-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Making a Difference
        </motion.h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="impact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            Since our founding, Male Mentors Ghana has made significant strides in
            empowering young men across the country. Our mentorship programs have
            helped hundreds of mentees develop crucial life skills, pursue education,
            and build successful careers.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Impact;
