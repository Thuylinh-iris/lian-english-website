import React from 'react';
import { VisionCard, VisionCardProps } from './VisionCard';
import styles from './VisionGrid.module.css';

export interface VisionGridProps {
    visions: VisionCardProps[];
}

export const VisionGrid: React.FC<VisionGridProps> = ({ visions }) => {
    return (
        <div className={styles.gridContainer}>
            {visions.map((vision, index) => (
                <div key={index} className={styles.gridItem}>
                    <VisionCard {...vision} delay={index * 100} />
                </div>
            ))}
        </div>
    );
};

export default VisionGrid;
