import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
