import React from 'react';
import { Globe, Briefcase, BookOpen, ArrowRight } from 'lucide-react';
import styles from './VisionCard.module.css';

export type VisionType = 'travel' | 'career' | 'growth';

export interface VisionCardProps {
  variant: VisionType;
  icon: React.ReactNode;
  title: string;
  description: string;
  levelBadge?: string;
  delay?: number;
}

const visionConfig: Record<VisionType, { gradient: string; iconColor: string }> = {
  travel: {
    gradient: 'linear-gradient(135deg, rgba(15, 32, 57, 0.12) 0%, rgba(15, 32, 57, 0.04) 100%)',
    iconColor: '#0F2039'  // Very Dark Navy
  },
  career: {
    gradient: 'linear-gradient(135deg, rgba(15, 32, 57, 0.12) 0%, rgba(15, 32, 57, 0.04) 100%)',
    iconColor: '#0F2039'  // Very Dark Navy
  },
  growth: {
    gradient: 'linear-gradient(135deg, rgba(184, 134, 11, 0.12) 0%, rgba(184, 134, 11, 0.04) 100%)',
    iconColor: '#B8860B'  // Gold
  },
};

export const VisionCard: React.FC<VisionCardProps> = ({
  variant,
  icon,
  title,
  description,
  levelBadge,
  delay = 0,
}) => {
  const config = visionConfig[variant];

  return (
    <div
      className={styles.visionCard}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={styles.cardInner} style={{ background: config.gradient }}>
        <div className={styles.iconContainer} style={{ color: config.iconColor }}>
          {icon}
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        {levelBadge && (
          <div className={styles.badge}>
            <span className={styles.badgeText}>{levelBadge}</span>
          </div>
        )}

        <div className={styles.divider} />
      </div>

      <div className={styles.hoverOverlay} />
    </div>
  );
};

export default VisionCard;
