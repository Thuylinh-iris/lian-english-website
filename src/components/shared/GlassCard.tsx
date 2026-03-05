import React from 'react';
import styles from './GlassCard.module.css';

export interface GlassCardProps {
  children: React.ReactNode;
  elevation?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  elevation = 'md',
  rounded = 'lg',
  padding = 'lg',
  hover = false,
  className = ''
}) => {
  return (
    <div
      className={`${styles.glassCard} ${styles[elevation]} ${styles[rounded]} ${styles[padding]} ${hover ? styles.hover : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
