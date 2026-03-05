'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { VisionCard, VisionCardProps } from './VisionCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VisionCarousel.module.css';

export interface VisionCarouselProps {
  visions: VisionCardProps[];
  autoRotate?: boolean;
  autoRotateInterval?: number;
  pauseOnHover?: boolean;
}

export const VisionCarousel: React.FC<VisionCarouselProps> = ({
  visions,
  autoRotate = true,
  autoRotateInterval = 6000,
  pauseOnHover = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    const newIndex = (currentIndex - 1 + visions.length) % visions.length;
    goToSlide(newIndex);
  }, [currentIndex, visions.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % visions.length;
    goToSlide(newIndex);
  }, [currentIndex, visions.length, goToSlide]);

  useEffect(() => {
    if (!autoRotate || isPaused) return;

    const interval = setInterval(goToNext, autoRotateInterval);
    return () => clearInterval(interval);
  }, [autoRotate, autoRotateInterval, isPaused, goToNext]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className={styles.trackContainer}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {visions.map((vision, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              <div className={styles.slideContent}>
                <VisionCard {...vision} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        className={`${styles.navButton} ${styles.prev}`}
        onClick={goToPrevious}
        aria-label="Previous vision"
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>
      <button
        className={`${styles.navButton} ${styles.next}`}
        onClick={goToNext}
        aria-label="Next vision"
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>

      {/* Indicators */}
      <div className={styles.indicators}>
        {visions.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={styles.indicatorInner} />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      {autoRotate && !isPaused && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              animation: `progress ${autoRotateInterval}ms linear`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VisionCarousel;
