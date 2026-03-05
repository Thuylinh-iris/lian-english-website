'use client';

import React, { useState } from 'react';
import styles from './FloatEffect.module.css';

export type FloatVariant = 'float' | 'pulse' | 'glow' | 'scale';

export interface FloatEffectProps {
  children: React.ReactNode;
  variant?: FloatVariant;
  disabled?: boolean;
  intensity?: 'subtle' | 'medium' | 'strong';
}

export const FloatEffect: React.FC<FloatEffectProps> = ({
  children,
  variant = 'float',
  disabled = false,
  intensity = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.floatEffect} ${styles[variant]} ${styles[intensity]} ${disabled ? styles.disabled : ''} ${isHovered ? styles.active : ''}`}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default FloatEffect;
