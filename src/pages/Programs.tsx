import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      title: 'Youth Leadership Program',
      description: 'Develop leadership skills through workshops, seminars, and hands-on projects.',
      duration: '6 months',
      icon: '🎯',
    },
    {
      title: 'Career Guidance & Mentorship',
      description: 'One-on-one mentorship with professionals in various fields to guide career development.',
      duration: '12 months',
      icon: '💼',
    },
    {
      title: 'Skills Development Workshops',
      description: 'Learn practical skills including communication, financial literacy, and technical skills.',
      duration: '3 months',
      icon: '🛠️',
    },
    {
      title: 'Community Service Initiative',
      description: 'Engage in community projects that create positive impact and develop social responsibility.',
      duration: 'Ongoing',
      icon: '🤝',
    },
  ];

  return (
    <div className="programs">
      <motion.section
        className="programs-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Programs</h1>
        <p>Comprehensive mentorship and development opportunities</p>
      </motion.section>

      <section className="programs-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="programs-intro">
            Male Mentors Ghana offers a variety of programs designed to empower young
            men with the skills, knowledge, and confidence they need to succeed in life.
          </p>
        </motion.div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <div className="program-duration">
                  <strong>Duration:</strong> {program.duration}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
