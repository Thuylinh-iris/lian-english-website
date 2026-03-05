'use client';

import React from 'react';
import { Play, Sparkles, TrendingUp, Award, ArrowRight } from 'lucide-react';
import styles from './ProgressiveSteps.module.css';

export interface Step {
  number: number;
  phase: string;
  title: string;
  description: string;
  example: string;
  icon: React.ReactNode;
}

const defaultSteps: Step[] = [
  {
    number: 1,
    phase: 'Day 1',
    title: 'Phản Xạ Sinh Tồn',
    description: 'Bạn được KHUYẾN KHÍCH NÓI ngay lập tức với những câu đơn giản nhất. Không cần đợi học đủ từ vựng hay ngữ pháp hoàn hảo.',
    example: '"Hello, I\'m Tuan. I live in Hanoi. I like coffee."',
    icon: <Play size={32} strokeWidth={1.5} />
  },
  {
    number: 2,
    phase: 'Week 2-4',
    title: 'Lắp Ráp Cấu Trúc',
    description: 'Sau khi tâm lý e ngại được tháo gỡ, bạn bắt đầu ghép các khối ngôn ngữ lớn hơn. Diễn đạt tự nhiên nhưng vẫn CÓ CẤU TRÚC vững vàng.',
    example: '"I live in Hanoi, which is the capital of Vietnam. I\'ve been here for 5 years."',
    icon: <Sparkles size={32} strokeWidth={1.5} />
  },
  {
    number: 3,
    phase: 'Week 5-8',
    title: 'Mở Rộng Ý Tưởng',
    description: 'Từ câu đơn, học cách PHÁT TRIỂN Ý (Developing Ideas). Việc thêm lý do, ví dụ và cảm xúc giúp hội thoại trở nên gắn kết hơn.',
    example: '"I like coffee because it helps me focus. I usually drink it in the morning before work..."',
    icon: <TrendingUp size={32} strokeWidth={1.5} />
  },
  {
    number: 4,
    phase: 'Week 9-12',
    title: 'Phản Xạ Tư Duy',
    description: 'Không chỉ giao tiếp, mà còn THẢO LUẬN. Nêu quan điểm tự tin, bảo vệ ý kiến thuyết phục, tạo nền tảng vững vàng để TỰ HỌC trọn đời.',
    example: '"I think remote work is better because... First, it saves time. Second, it increases productivity..."',
    icon: <Award size={32} strokeWidth={1.5} />
  }
];

export interface ProgressiveStepsProps {
  steps?: Step[];
  showPhase?: boolean;
}

export const ProgressiveSteps: React.FC<ProgressiveStepsProps> = ({
  steps = defaultSteps,
  showPhase = true
}) => {
  return (
    <div className={styles.progressiveSteps}>
      <div className={styles.container}>
        {steps.map((step, index) => (
          <div key={step.number} className={styles.stepRow}>
            <div className={styles.stepNumber}>
              <div className={styles.numberBadge}>{step.number}</div>
              {index < steps.length - 1 && (
                <div className={styles.connectingLine} />
              )}
            </div>

            <div className={styles.stepContent}>
              {showPhase && (
                <div className={styles.phase}>{step.phase}</div>
              )}
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <div className={styles.example}>
                <ArrowRight size={16} strokeWidth={2} className={styles.exampleArrow} />
                <span>{step.example}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressiveSteps;
