'use client';

import React from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';
import styles from './BalanceScale.module.css';

export interface ComparisonOption {
  id: string;
  title: string;
  description: string;
  points: string[];
  type: 'pain' | 'solution';
}

export interface BalanceScaleProps {
  left?: ComparisonOption;
  center?: ComparisonOption;
  right?: ComparisonOption;
  onHover?: (side: 'left' | 'center' | 'right' | null) => void;
}

const defaultLeft: ComparisonOption = {
  id: 'traditional',
  title: 'Traditional Grammar-First',
  description: 'Wait until you have enough vocabulary',
  type: 'pain',
  points: [
    'Can speak after 6-12 months of study',
    'Focus on perfect grammar before speaking',
    'Never feel "ready enough" to start'
  ]
};

const defaultCenter: ComparisonOption = {
  id: 'balanced',
  title: 'Phản Xạ Bài Bản',
  description: 'Speak from day one with structured foundation',
  type: 'solution',
  points: [
    'Start speaking immediately: Day 1',
    'Build structure that scales to fluency',
    'Every level prepares you for the next'
  ]
};

const defaultRight: ComparisonOption = {
  id: 'parrot',
  title: 'Parrot Learning',
  description: 'Repeat without understanding structure',
  type: 'pain',
  points: [
    'Basic survival communication only',
    'Hit the glass ceiling quickly',
    'Cannot advance to professional level'
  ]
};

export const BalanceScale: React.FC<BalanceScaleProps> = ({
  left = defaultLeft,
  center = defaultCenter,
  right = defaultRight,
  onHover
}) => {
  return (
    <div className={styles.balanceScale}>
      <div className={styles.scaleGrid}>
        {/* Left Side */}
        <div
          className={`${styles.scaleCard} ${styles.pain}`}
          onMouseEnter={() => onHover?.('left')}
          onMouseLeave={() => onHover?.(null)}
        >
          <div className={styles.cardHeader}>
            <AlertCircle size={28} strokeWidth={1.5} className={styles.painIcon} />
            <h3 className={styles.cardTitle}>{left.title}</h3>
          </div>
          <p className={styles.cardDescription}>{left.description}</p>
          <ul className={styles.pointsList}>
            {left.points.map((point, idx) => (
              <li key={idx} className={styles.point}>
                <X size={16} strokeWidth={2.5} className={styles.pointIconPain} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center - Solution */}
        <div
          className={`${styles.scaleCard} ${styles.solution}`}
          onMouseEnter={() => onHover?.('center')}
          onMouseLeave={() => onHover?.(null)}
        >
          <div className={styles.featuredBanner}>Recommended</div>
          <div className={styles.cardHeader}>
            <CheckCircle2 size={32} strokeWidth={2} className={styles.solutionIcon} />
            <h3 className={styles.cardTitle}>{center.title}</h3>
          </div>
          <p className={styles.cardDescription}>{center.description}</p>
          <ul className={styles.pointsList}>
            {center.points.map((point, idx) => (
              <li key={idx} className={styles.point}>
                <CheckCircle2 size={16} strokeWidth={2.5} className={styles.pointIconSuccess} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div
          className={`${styles.scaleCard} ${styles.pain}`}
          onMouseEnter={() => onHover?.('right')}
          onMouseLeave={() => onHover?.(null)}
        >
          <div className={styles.cardHeader}>
            <AlertCircle size={28} strokeWidth={1.5} className={styles.painIcon} />
            <h3 className={styles.cardTitle}>{right.title}</h3>
          </div>
          <p className={styles.cardDescription}>{right.description}</p>
          <ul className={styles.pointsList}>
            {right.points.map((point, idx) => (
              <li key={idx} className={styles.point}>
                <X size={16} strokeWidth={2.5} className={styles.pointIconPain} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BalanceScale;
