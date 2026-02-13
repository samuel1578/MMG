import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import './Stories.css';

const Stories = () => {
  const stories = [
    {
      name: 'Kwame Mensah',
      role: 'Software Developer',
      story: 'Through the mentorship program, I gained the confidence and skills to pursue a career in tech. My mentor guided me through learning to code and helped me land my first job.',
      image: '👨‍💻',
    },
    {
      name: 'Kofi Asante',
      role: 'Business Owner',
      story: 'The guidance I received helped me start my own business. My mentor taught me about entrepreneurship, financial planning, and building customer relationships.',
      image: '👨‍💼',
    },
    {
      name: 'Yaw Boateng',
      role: 'Medical Student',
      story: 'My mentor inspired me to pursue medicine and supported me throughout my academic journey. I\'m now in medical school, working towards my dream of becoming a doctor.',
      image: '👨‍⚕️',
    },
  ];

  return (
    <div className="stories">
      <motion.section
        className="stories-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Success Stories</h1>
        <p>Real lives transformed through mentorship</p>
      </motion.section>

      <section className="stories-content">
        <div className="stories-grid">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hover>
                <div className="story-image">{story.image}</div>
                <h3>{story.name}</h3>
                <p className="story-role">{story.role}</p>
                <p className="story-text">"{story.story}"</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stories;
