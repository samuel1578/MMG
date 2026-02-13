import type { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  ...props 
}: ButtonProps) => {
  return (
    <motion.button
      className={`btn btn-${variant} btn-${size} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
