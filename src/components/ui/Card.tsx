import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
  animate = true,
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden';
  const hoverClasses = hoverable
    ? 'transform hover:-translate-y-1 hover:shadow-lg cursor-pointer'
    : '';
  
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (!animate) {
    return (
      <div 
        className={`${cardClasses} transition-all duration-300`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;