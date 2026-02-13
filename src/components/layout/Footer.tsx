import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3>Male Mentors Ghana</h3>
            <p>Empowering young men through mentorship and guidance.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/impact">Our Impact</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/become-mentor">Become a Mentor</Link></li>
              <li><Link to="/become-mentee">Become a Mentee</Link></li>
              <li><Link to="/stories">Success Stories</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Male Mentors Ghana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
