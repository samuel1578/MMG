import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './BecomeMentee.css';

const BecomeMentee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    interests: '',
    goals: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mentee application:', formData);
    alert('Thank you for your application! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      education: '',
      interests: '',
      goals: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    { text: 'Personal guidance from experienced mentors', icon: '🎓' },
    { text: 'Access to workshops and skill-building programs', icon: '📚' },
    { text: 'Networking opportunities', icon: '🤝' },
    { text: 'Career and educational support', icon: '🚀' },
  ];

  return (
    <div className="become-mentee">
      <motion.section
        className="mentee-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Become a Mentee</h1>
        <p>Start your journey to personal and professional growth</p>
      </motion.section>

      <section className="mentee-content">
        <motion.div
          className="mentee-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>What You'll Gain</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="benefit-icon">{benefit.icon}</div>
                  <p>{benefit.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mentee-form-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <h2>Application Form</h2>
            <form onSubmit={handleSubmit} className="mentee-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="15"
                  max="30"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="education">Current Education Level *</label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="secondary">Secondary School</option>
                  <option value="tertiary">Tertiary/University</option>
                  <option value="graduate">Graduate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="interests">Areas of Interest *</label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="e.g., Technology, Business, Arts"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="goals">What are your goals? *</label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us what you hope to achieve through mentorship..."
                  required
                />
              </div>

              <Button type="submit" size="large">
                Submit Application
              </Button>
            </form>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default BecomeMentee;
