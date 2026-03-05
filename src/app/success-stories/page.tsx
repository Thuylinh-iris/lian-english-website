import { Star, Quote, Award, TrendingUp } from 'lucide-react';
import styles from './page.module.css';

export interface Story {
  id: string;
  name: string;
  role: string;
  beforeLevel: string;
  afterLevel: string;
  barrier: string;
  result: string;
  quote: string;
  rating: number;
}

const stories: Story[] = [
  {
    id: 'tuan-anh',
    name: 'Anh Tuấn Anh',
    role: 'Senior Developer',
    beforeLevel: 'A2',
    afterLevel: 'B1',
    barrier: 'Sợ nói sai ngữ pháp, luôn câm lặng trong meeting với client Mỹ',
    result: 'Tự tin giải thích logic code và chốt requirements trực tiếp, lương tăng 30%',
    quote: '"Trước đây mình làm IT, suốt ngày ngồi câm lặng trong meeting với client Mỹ chỉ vì sợ sai ngữ pháp. Lian đã giúp mình đập tan nỗi sợ và xây dựng phản xạ giao tiếp chuyên nghiệp."',
    rating: 5
  },
  {
    id: 'mai-huong',
    name: 'Chị Mai Hương',
    role: 'Du học sinh Thạc sĩ',
    beforeLevel: 'A2+',
    afterLevel: 'B1',
    barrier: 'Sợ rớt phỏng vấn visa du lịch vì không tự tin giao tiếp',
    result: 'Đậu phỏng vấn visa, hiện đang học tại Sydney và tự tin bắt chuyện với bạn bè quốc tế',
    quote: '"Chỉ vì quá sợ nói mà mình suýt rớt phỏng vấn visa du học. Lian đã "đập đi xây lại" lòng can đảm cho mình. Hiện tại mình sang Sydney được 3 tháng và hoàn toàn tự tin."',
    rating: 5
  },
  {
    id: 'minh-thuy',
    name: 'Chị Minh Thùy',
    role: 'Marketing Manager',
    beforeLevel: 'A1',
    afterLevel: 'A2',
    barrier: 'Không dám mở miệng trong các cuộc họp quốc tế, luôn né tránh nói tiếng Anh',
    result: 'Thuyết phục được khách hàng và đối tác, được cất nhắc lên vị trí quản lý',
    quote: '"Mình luôn né tránh nói tiếng Anh trong các cuộc họp, dù đã học nhiều năm. Phương pháp Phản Xạ Bài Bản đã giúp mình bắt buộc phải nói ngay từ những buổi đầu."',
    rating: 5
  },
  {
    id: 'hoang-anh',
    name: 'Anh Hoàng Anh',
    role: 'Business Analyst',
    beforeLevel: 'A2',
    afterLevel: 'B1',
    barrier: 'Giao tiếp rùa bầu, luôn dịch thầm từng câu trong đầu trước khi nói',
    result: 'Nói trôi chảy trong các buổi thuyết trình, được đánh giá cao về khả năng trình bày',
    quote: '"Tốc độ giao tiếp của mình rất chậm vì luôn dịch từng câu trong đầu. Lian đã giúp mình cắt dứt thói quen này và xây dựng phản xạ trực tiếp."',
    rating: 5
  },
  {
    id: 'thuy-duong',
    name: 'Chị Thùy Dung',
    role: 'HR Manager',
    beforeLevel: 'A1',
    afterLevel: 'A2+',
    barrier: 'Chỉ trả lời được Yes/No, không biết cách phát triển ý trong hội thoại',
    result: 'Duy trì hội thoại mạch lạc với ứng viên và quản lý cấp cao, tạo kết nối chân thực',
    quote: '"Mình luôn trả lời Yes/No cụt lủn trong các cuộc phỏng vấn. Lian đã dạy mình cách phát triển ý và kể chuyện cuốn hút trong giao tiếp."',
    rating: 5
  },
  {
    id: 'quoc-bao',
    name: 'Anh Quốc Bảo',
    role: 'Software Engineer',
    beforeLevel: 'A2+',
    afterLevel: 'B1',
    barrier: 'Không thể bảo vệ quan điểm kỹ thuật trong các buổi họp team quốc tế',
    result: 'Tự tin tranh luận và bảo vệ quan điểm kỹ thuật, được công nhận trong team toàn cầu',
    quote: '"Mình hiểu kỹ thuật nhưng không thể bảo vệ quan điểm khi họp bàn với team quốc tế. Lian đã giúp mình xây dựng tư duy phản biện và thuyết phục."',
    rating: 5
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className={styles.storiesPage}>
      {/* Hero */}
      <section className={`${styles.hero} section`}>
        <div className="container">
          <div className={`${styles.heroContent} animate-fade-in`}>
            <Award className={styles.heroIcon} size={48} strokeWidth={1.5} />
            <h1>Câu Chuyện Bứt Phá</h1>
            <p className={styles.heroSubtitle}>
              Khởi từ những người từng sợ nói tiếng Anh, giờ đây đã tự tin sử dụng tiếng Anh mỗi ngày trong công việc và cuộc sống.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.storiesGrid}>
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`${styles.storyCard} animate-slide-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={styles.storyHeader}>
                  <div className={styles.storyAvatar}>
                    <span className={styles.avatarInitials}>
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className={styles.storyInfo}>
                    <h3 className={styles.storyName}>{story.name}</h3>
                    <p className={styles.storyRole}>{story.role}</p>
                  </div>
                </div>

                <div className={styles.storyRating}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < story.rating ? 'currentColor' : 'none'}
                      className={styles.star}
                      style={{ color: i < story.rating ? 'var(--color-gold)' : 'var(--color-grey)' }}
                    />
                  ))}
                </div>

                <div className={styles.storyBody}>
                  <div className={styles.transformation}>
                    <div className={styles.transformationItem}>
                      <div className={styles.transformationLabel}>Trước:</div>
                      <div className={styles.transformationText}>{story.barrier}</div>
                    </div>
                    <TrendingUp size={20} strokeWidth={2} className={styles.transformationArrow} />
                    <div className={styles.transformationItem}>
                      <div className={styles.transformationLabel}>Sau:</div>
                      <div className={styles.transformationText}>{story.result}</div>
                    </div>
                  </div>

                  <div className={styles.storyQuote}>
                    <Quote size={20} className={styles.quoteIcon} />
                    <p>{story.quote}</p>
                  </div>
                </div>

                <div className={styles.storyMeta}>
                  <div className={styles.metaBadge}>
                    <span className={styles.metaLabel}>Trước:</span>
                    <span className={styles.metaValue}>{story.beforeLevel}</span>
                  </div>
                  <div className={styles.metaBadge}>
                    <span className={styles.metaLabel}>Sau:</span>
                    <span className={styles.metaValue}>{story.afterLevel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Bạn Muốn Là Câu Chuyện Tiếp Theo?</h2>
            <p className={styles.ctaText}>
              Đừng để nỗi sợ cản trở cơ hội của bạn. Hãy để Lian English giúp bạn xây dựng Phản Xạ Bài Bản để tự tin giao tiếp tiếng Anh.
            </p>
            <div className={styles.ctaActions}>
              <a href="/test" className={styles.primaryBtn}>
                Test Trình Độ Miễn Phí
              </a>
              <a href="/classes" className={styles.secondaryBtn}>
                Xem Các Khóa Học
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
