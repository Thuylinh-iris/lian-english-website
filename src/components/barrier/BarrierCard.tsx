'use client';

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Shield, Zap, Brain, MessageCircle } from 'lucide-react';
import styles from './BarrierCard.module.css';

export interface BarrierCardProps {
  level: string;
  barrierName: string;
  barrierDescription: string;
  barrierIcon?: React.ReactNode;
  bridgeName: string;
  bridgeSolution: string;
  bridgeKeyFeatures: string[];
  result: string;
  levelColor?: string;
  delay?: number;
}

const barrierIcons: Record<string, React.ReactNode> = {
  'A1': <Shield size={32} strokeWidth={1.5} />,
  'A2': <Zap size={32} strokeWidth={1.5} />,
  'A2+': <MessageCircle size={32} strokeWidth={1.5} />,
  'B1': <Brain size={32} strokeWidth={1.5} />,
};

export const BarrierCard: React.FC<BarrierCardProps> = ({
  level,
  barrierName,
  barrierDescription,
  barrierIcon,
  bridgeName,
  bridgeSolution,
  bridgeKeyFeatures,
  result,
  levelColor,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const icon = barrierIcon || barrierIcons[level] || <AlertCircle size={32} strokeWidth={1.5} />;
  const color = levelColor || `var(--color-${level.toLowerCase().replace('+', '-plus')})`;

  return (
    <div
      className={`${styles.barrierCard} ${isHovered ? styles.hovered : ''}`}
      style={{ animationDelay: `${delay}ms`, '--level-color': color } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Level Badge */}
      <div className={styles.levelBadge} style={{ backgroundColor: color }}>
        Level {level}
      </div>

      {/* Barrier Section */}
      <div className={styles.section}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon} style={{ color: 'var(--color-navy)' }}>
            {icon}
          </div>
        </div>
        <h3 className={styles.title}>{barrierName}</h3>
        <p className={styles.description}>{barrierDescription}</p>
      </div>

      {/* Arrow Divider */}
      <div className={styles.divider}>
        <ArrowRight size={20} className={styles.arrowIcon} strokeWidth={2} />
      </div>

      {/* Bridge Section */}
      <div className={styles.section}>
        <div className={styles.bridgeLabel}>{bridgeName}</div>
        <p className={styles.solution}>{bridgeSolution}</p>
        <ul className={styles.features}>
          {bridgeKeyFeatures.map((feature, idx) => (
            <li key={idx} className={styles.feature}>
              <CheckCircle2 size={16} strokeWidth={2.5} className={styles.checkIcon} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className={styles.result}>
          <ArrowRight size={16} strokeWidth={2} className={styles.resultArrow} />
          <span>{result}</span>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className={styles.overlay} style={{ background: `linear-gradient(180deg, transparent 0%, ${color}15 100%)` } as React.CSSProperties} />
    </div>
  );
};

export default BarrierCard;
