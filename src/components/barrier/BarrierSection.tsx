'use client';

import React from 'react';
import { BarrierCard } from './BarrierCard';
import type { BarrierCardProps } from './BarrierCard';
import styles from './BarrierSection.module.css';

export interface BarrierSectionProps {
  barriers: BarrierCardProps[];
  layout?: 'grid' | 'horizontal';
  showIntroduction?: boolean;
  introductionText?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const BarrierSection: React.FC<BarrierSectionProps> = ({
  barriers,
  layout = 'grid',
  showIntroduction = true,
  introductionText = 'Nói Ngay + Có Cấu Trúc = Tự Tin Giao Tiếp. Đừng để phương pháp sai cản trở bạn.',
  ctaText,
  ctaHref,
}) => {
  return (
    <section className={styles.barrierSection}>
      <div className="container">
        {/* Introduction */}
        {showIntroduction && (
          <div className={styles.introduction}>
            <h2 className={styles.headline}>Học Nhiều Năm Nhưng Vẫn Sợ Nói?</h2>
            <p className={styles.subtitle}>Vấn Đề Không Phải Tải Năng, Là Phương Pháp</p>
            <p className={styles.introText}>{introductionText}</p>
          </div>
        )}

        {/* Barrier Cards */}
        <div className={`${styles.barriersGrid} ${styles[layout]}`}>
          {barriers.map((barrier, index) => (
            <BarrierCard
              key={barrier.level}
              {...barrier}
              delay={index * 100}
            />
          ))}
        </div>

        {/* CTA */}
        {ctaText && ctaHref && (
          <div className={styles.ctaContainer}>
            <a href={ctaHref} className={styles.ctaButton}>
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BarrierSection;
