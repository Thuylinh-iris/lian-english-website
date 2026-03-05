'use client';

import React from 'react';
import { Check } from 'lucide-react';
import styles from './ProgressTracker.module.css';

export interface Level {
  id: string;
  name: string;
  completed: boolean;
  current?: boolean;
}

export interface ProgressTrackerProps {
  levels: Level[];
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  levels,
  size = 'md',
  showLabels = true
}) => {
  return (
    <div className={`${styles.progressTracker} ${styles[size]}`}>
      {levels.map((level, index) => (
        <React.Fragment key={level.id}>
          <div
            className={`${styles.level} ${level.completed ? styles.completed : ''} ${level.current ? styles.current : ''}`}
          >
            <div className={styles.iconWrapper}>
              {level.completed ? (
                <Check size={size === 'sm' ? 14 : size === 'lg' ? 24 : 18} strokeWidth={3} />
              ) : (
                <span className={styles.levelNumber}>{index + 1}</span>
              )}
            </div>
            {showLabels && (
              <span className={styles.label}>{level.name}</span>
            )}
          </div>
          {index < levels.length - 1 && (
            <div
              className={`${styles.connector} ${level.completed ? styles.connectorCompleted : ''} ${
                level.current ? styles.connectorActive : ''
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressTracker;
