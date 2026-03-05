import { Award, Users, Globe, Shield, BookOpen, Target, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';
import styles from './page.module.css';

export default function MethodologyPage() {
  return (
    <div className={styles.methodologyPage}>
      {/* Hero Section */}
      <section className={`${styles.hero} section`}>
        <div className="container">
          <div className={`${styles.heroContent} animate-fade-in`}>
            <BookOpen className={styles.heroIcon} size={48} strokeWidth={1.5} />
            <h1>Phương Pháp Phản Xạ Bài Bản</h1>
            <p className={styles.heroSubtitle}>
              Điểm cân bằng hoàn hảo: Nói ngay từ ngày 1, vẫn đủ nền tảng để đi đường dài
            </p>
          </div>
        </div>
      </section>

      {/* Vision - Bridge - Vehicle Framework */}
      <section className="section section-alt">
        <div className="container">
          <div className={`${styles.frameworkIntro} animate-slide-in-up`}>
            <h2 className={styles.sectionTitle}>Cấu Trúc Giáo Dục Lian English</h2>
            <p className={styles.sectionDescription}>
              Chúng tôi bán tầm nhìn, cung cấp công cụ. Đây là cách Lian English giúp bạn đạt được tự do ngôn ngữ.
            </p>
          </div>

          <div className={styles.frameworkGrid}>
            {/* The Vision */}
            <div className={`${styles.frameworkCard} animate-slide-in-up`} style={{ animationDelay: '100ms' }}>
              <div className={styles.frameworkIcon} style={{ background: 'rgba(184, 134, 11, 0.15)' }}>
                <Target size={32} strokeWidth={1.5} style={{ color: '#B8860B' }} />
              </div>
              <h3 className={styles.frameworkTitle}>Tầm Nhìn (The Vision)</h3>
              <p className={styles.frameworkDescription}>
                Giấc mơ chúng tôi bán
              </p>
              <ul className={styles.frameworkList}>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>Mở rộng thế giới:</strong> Đi du lịch khắp nơi, bạn bè bốn phương. Rào cản duy nhất là tiền bạc, chứ không phải ngôn ngữ.</span>
                </li>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>Phiên bản tốt hơn:</strong> Dùng tiếng Anh mỗi ngày để đọc, học hỏi, mở rộng tri thức.</span>
                </li>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>Mở khóa sự nghiệp:</strong> Công việc yêu thích, thu nhập tốt, duy trì cuộc sống thú vị.</span>
                </li>
              </ul>
            </div>

            {/* The Bridge */}
            <div className={`${styles.frameworkCard} animate-slide-in-up`} style={{ animationDelay: '200ms' }}>
              <div className={styles.frameworkIcon} style={{ background: 'rgba(15, 32, 57, 0.15)' }}>
                <Shield size={32} strokeWidth={1.5} style={{ color: '#0F2039' }} />
              </div>
              <h3 className={styles.frameworkTitle}>Cây Cầu (The Bridge)</h3>
              <p className={styles.frameworkDescription}>
                Cách Lian giúp bạn vượt qua rào cản
              </p>
              <ul className={styles.frameworkList}>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>A1 - Không gian an toàn:</strong> Lớp siêu nhỏ 4-6 người, ép phản xạ sinh tồn từ ngày 1.</span>
                </li>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>A2 - Cắt dịch thầm:</strong> 100% tiếng Anh, cấu trúc câu trực tiếp, không dịch word-by-word.</span>
                </li>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>A2+/B1 - Phát triển ý:</strong> Linking words, storytelling framework, tư duy phản biện.</span>
                </li>
              </ul>
            </div>

            {/* The Vehicle */}
            <div className={`${styles.frameworkCard} animate-slide-in-up`} style={{ animationDelay: '300ms' }}>
              <div className={styles.frameworkIcon} style={{ background: 'rgba(184, 134, 11, 0.15)' }}>
                <BookOpen size={32} strokeWidth={1.5} style={{ color: '#B8860B' }} />
              </div>
              <h3 className={styles.frameworkTitle}>Công Cụ (The Vehicle)</h3>
              <p className={styles.frameworkDescription}>
                Sản phẩm chúng tôi cung cấp
              </p>
              <ul className={styles.frameworkList}>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>Phản Xạ Bài Bản:</strong> Nói ngay + Có cấu trúc + Scale được lên cao.</span>
                </li>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>Môi trường 100% tiếng Anh:</strong> Ép não bộ nạp/xuất trực tiếp, cắt đuôi dịch thầm.</span>
                </li>
                <li className={styles.frameworkItem}>
                  <CheckCircle2 size={20} strokeWidth={2.5} className={styles.listIcon} />
                  <span><strong>Lộ trình từ A1 đến B1:</strong> Mỗi bước là nền tảng cho bước sau, không học vẹt.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Phản Xạ Bài Bản */}
      <section className="section">
        <div className="container">
          <div className={styles.comparisonSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Tại Sao "Phản Xạ Bài Bản"?</h2>
              <p className={styles.sectionDescription}>
                Hầu hết người học tiếng Anh đang mắc kẹt giữa hai thái cực. Lian English tìm thấy điểm cân bằng hoàn hảo.
              </p>
            </div>

            <div className={styles.comparisonGrid}>
              {/* Traditional Method */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonIcon} style={{ background: '#F8F9FA', borderColor: '#5A6C7D' }}>
                    <GraduationCap size={28} strokeWidth={1.5} style={{ color: '#5A6C7D' }} />
                  </div>
                  <h3 className={styles.comparisonTitle} style={{ color: '#5A6C7D' }}>Hệ 12 Năm Ngữ Pháp</h3>
                </div>
                <p className={styles.comparisonTagline}>Chờ "đủ từ" mới dám nói</p>
                <ul className={styles.comparisonList}>
                  <li className={styles.comparisonItem}>Mở miệng không nói được</li>
                  <li className={styles.comparisonItem}>Học 6-12 tháng chưa áp dụng được</li>
                  <li className={styles.comparisonItem}>Đợi mãi không bao giờ "đủ"</li>
                </ul>
                <div className={styles.comparisonResult}>
                  <span className={styles.resultLabel}>Kết quả:</span>
                  <span className={styles.resultText} style={{ color: '#5A6C7D' }}>Giỏi lý thuyết, yếu thực hành</span>
                </div>
              </div>

              {/* Balanced Method - Featured */}
              <div className={`${styles.comparisonCard} ${styles.featured}`}>
                <div className={styles.featuredBanner}>Phương pháp Lian English</div>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonIcon} style={{ background: 'rgba(184, 134, 11, 0.15)', borderColor: '#B8860B' }}>
                    <Award size={28} strokeWidth={1.5} style={{ color: '#B8860B' }} />
                  </div>
                  <h3 className={styles.comparisonTitle} style={{ color: '#B8860B' }}>Phản Xạ Bài Bản</h3>
                </div>
                <p className={styles.comparisonTagline} style={{ color: '#B8860B' }}>Nói ngay + Có cấu trúc + Scale được</p>
                <ul className={styles.comparisonList}>
                  <li className={styles.comparisonItem}><strong style={{ color: '#B8860B' }}>NGAY từ Ngày 1:</strong> Ép phản xạ sinh tồn</li>
                  <li className={styles.comparisonItem}><strong style={{ color: '#B8860B' }}>CÓ CẤU TRÚC:</strong> Không nghe sao nói vậy</li>
                  <li className={styles.comparisonItem}><strong style={{ color: '#B8860B' }}>SCALE LÊN:</strong> Mỗi bước là nền tảng bước sau</li>
                </ul>
                <div className={styles.comparisonResult}>
                  <span className={styles.resultLabel}>Kết quả:</span>
                  <span className={styles.resultText} style={{ color: '#B8860B' }}>Nói được ngay, có nền tảng vững chắc</span>
                </div>
              </div>

              {/* Parrot Learning */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonIcon} style={{ background: '#F8F9FA', borderColor: '#5A6C7D' }}>
                    <Users size={28} strokeWidth={1.5} style={{ color: '#5A6C7D' }} />
                  </div>
                  <h3 className={styles.comparisonTitle} style={{ color: '#5A6C7D' }}>Tiếng Anh Bồi</h3>
                </div>
                <p className={styles.comparisonTagline}>Nghe sao nói vậy, không hiểu cấu trúc</p>
                <ul className={styles.comparisonList}>
                  <li className={styles.comparisonItem}>Giao tiếp sinh tồn OK</li>
                  <li className={styles.comparisonItem}>Chạm "trần kính" ngay</li>
                  <li className={styles.comparisonItem}>Vào chuyên nghiệp là fail</li>
                </ul>
                <div className={styles.comparisonResult}>
                  <span className={styles.resultLabel}>Kết quả:</span>
                  <span className={styles.resultText} style={{ color: '#5A6C7D' }}>Học vẹt, không scale lên được</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works at Each Level */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.levelProgression}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Phản Xạ Bài Bản Ở Từng Trình Độ</h2>
              <p className={styles.sectionDescription}>
                Phương pháp của chúng tôi không phải "một kích thước vừa hết". Mỗi trình độ có cây cầu riêng.
              </p>
            </div>

            <div className={styles.progressionFlow}>
              {/* A1 */}
              <div className={styles.levelStage}>
                <div className={styles.stageHeader}>
                  <span className={styles.stageBadge} style={{ background: '#0F2039' }}>A1</span>
                  <h3 className={styles.stageTitle}>Phản Xạ Sinh Tồn + An Toàn Tâm Lý</h3>
                  <ArrowRight className={styles.stageArrow} size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.stageContent}>
                  <div className={styles.stageProblem}>
                    <h4 className={styles.stageProblemTitle}>Rào Cản</h4>
                    <p>Sợ sai, sợ bị đánh giá → Câm lặng ngay cả khi đã học từ vựng. Não bộ block lại.</p>
                  </div>
                  <div className={styles.stageSolution}>
                    <h4 className={styles.stageSolutionTitle}>Cây Cầu Lian English</h4>
                    <ul className={styles.solutionList}>
                      <li>Lớp siêu nhỏ 4-6 người = Không gian an toàn để thử sai</li>
                      <li>Bắt đầu bằng câu ĐƠN NHẤT: "Hello, I'm [name]"</li>
                      <li>Không đợi đủ từ, không đợi học xong ngữ pháp</li>
                    </ul>
                  </div>
                  <div className={styles.stageOutcome}>
                    <h4 className={styles.stageOutcomeTitle}>Kết Quả</h4>
                    <p>Đập tan nỗi sợ trong 2 tuần đầu. Đầu Ngày 3 đã tự tin giới thiệu bản thân.</p>
                  </div>
                </div>
              </div>

              {/* A2 */}
              <div className={styles.levelStage}>
                <div className={styles.stageHeader}>
                  <span className={styles.stageBadge} style={{ background: '#0F2039' }}>A2</span>
                  <h3 className={styles.stageTitle}>Cắt Dịch Thầm + Cấu Trúc Câu</h3>
                  <ArrowRight className={styles.stageArrow} size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.stageContent}>
                  <div className={styles.stageProblem}>
                    <h4 className={styles.stageProblemTitle}>Rào Cản</h4>
                    <p>Non bộ bận dịch tiếng Việt → Giao tiếp rùa bầu. Nói được nhưng ngắc ngứ, KHÔNG CẤU TRÚC.</p>
                  </div>
                  <div className={styles.stageSolution}>
                    <h4 className={styles.stageSolutionTitle}>Cây Cầu Lian English</h4>
                    <ul className={styles.solutionList}>
                      <li>100% English Environment = Ép não bộ nạp/xuất trực tiếp</li>
                      <li>Học các KHUNG câu (patterns) không học từ rời rạc</li>
                      <li>Lắp ráp từ vựng vào khung có sẵn → Nói chuẩn, nói nhanh</li>
                    </ul>
                  </div>
                  <div className={styles.stageOutcome}>
                    <h4 className={styles.stageOutcomeTitle}>Kết Quả</h4>
                    <p>Ngắt nghỉ đúng, nối câu đúng. Không còn dịch "tôi là" = "I am" từng chữ một.</p>
                  </div>
                </div>
              </div>

              {/* A2+ */}
              <div className={styles.levelStage}>
                <div className={styles.stageHeader}>
                  <span className={styles.stageBadge} style={{ background: '#B8860B' }}>A2+</span>
                  <h3 className={styles.stageTitle}>Phát Triển Ý + Storytelling</h3>
                  <ArrowRight className={styles.stageArrow} size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.stageContent}>
                  <div className={styles.stageProblem}>
                    <h4 className={styles.stageProblemTitle}>Rào Cản</h4>
                    <p>Trả lời Yes/No, không biết phát triển ý → Hội thoại đứt đoạn. Có từ vựng, không biết NÓI DÀI.</p>
                  </div>
                  <div className={styles.stageSolution}>
                    <h4 className={styles.stageSolutionTitle}>Cây Cầu Lian English</h4>
                    <ul className={styles.solutionList}>
                      <li>Linking Words: however, therefore, additionally...</li>
                      <li>Storytelling Framework: STAR (Situation, Task, Action, Result)</li>
                      <li>Hỏi ngược (Wh- questions) để kéo dài hội thoại</li>
                    </ul>
                  </div>
                  <div className={styles.stageOutcome}>
                    <h4 className={styles.stageOutcomeTitle}>Kết Quả</h4>
                    <p>Biến "Yes, I like coffee" thành câu chuyện 2-3 phút cuốn hút.</p>
                  </div>
                </div>
              </div>

              {/* B1 */}
              <div className={styles.levelStage}>
                <div className={styles.stageHeader}>
                  <span className={styles.stageBadge} style={{ background: '#B8860B' }}>B1</span>
                  <h3 className={styles.stageTitle}>Lập Luận + Critical Thinking</h3>
                  <Award className={styles.stageFinalIcon} size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.stageContent}>
                  <div className={styles.stageProblem}>
                    <h4 className={styles.stageProblemTitle}>Rào Cản</h4>
                    <p>Giao tiếp được nhưng không BÀN LUẬN được. Không biết giải thích "TẠI SAO" → Hạn chế trong môi trường chuyên nghiệp.</p>
                  </div>
                  <div className={styles.stageSolution}>
                    <h4 className={styles.stageSolutionTitle}>Cây Cầu Lian English</h4>
                    <ul className={styles.solutionList}>
                      <li>Point - Reason - Example - Point (PREP)</li>
                      <li>Opinion phrases: "I believe that...", "In my view..."</li>
                      <li>Disagree politely: "I see your point, but..."</li>
                    </ul>
                  </div>
                  <div className={styles.stageOutcome}>
                    <h4 className={styles.stageOutcomeTitle}>Kết Quả</h4>
                    <p>Thảo luận, bảo vệ quan điểm, và có đủ nền tảng TỰ HỌC trọn đời.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment & Credentials */}
      <section className="section">
        <div className="container">
          <div className={styles.environmentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Môi Trường & Uy Tín</h2>
              <p className={styles.sectionDescription}>
                Phương pháp tốt cần môi trường phù hợp và người dẫn dắt có tâm.
              </p>
            </div>

            <div className={styles.environmentGrid}>
              <div className={styles.environmentCard}>
                <div className={styles.envIcon} style={{ background: 'rgba(15, 32, 57, 0.15)' }}>
                  <Users size={32} strokeWidth={1.5} style={{ color: '#0F2039' }} />
                </div>
                <h3 className={styles.envTitle}>Lớp Siêu Nhỏ</h3>
                <p className={styles.envDescription}>
                  Chỉ 4-6 học viên/lớp. Mọi người đều có cơ hội nói, giáo viên chú ý từng người, sửa lỗi chi tiết.
                </p>
                <ul className={styles.envBenefits}>
                  <li className={styles.envBenefit}>Tương tác tối đa với giáo viên</li>
                  <li className={styles.envBenefit}>Không gian an toàn, không sợ sai</li>
                  <li className={styles.envBenefit}>Cá nhân hóa lộ trình học</li>
                </ul>
              </div>

              <div className={styles.environmentCard}>
                <div className={styles.envIcon} style={{ background: 'rgba(15, 32, 57, 0.15)' }}>
                  <Globe size={32} strokeWidth={1.5} style={{ color: '#0F2039' }} />
                </div>
                <h3 className={styles.envTitle}>100% Tiếng Anh</h3>
                <p className={styles.envDescription}>
                  Môi trường hoàn toàn tiếng Anh. Không dịch thầm, não bộ buộc phải tư duy trực tiếp bằng tiếng Anh.
                </p>
                <ul className={styles.envBenefits}>
                  <li className={styles.envBenefit}>Cắt đuôi thói quen dịch word-by-word</li>
                  <li className={styles.envBenefit}>Xây dựng phản xạ trực tiếp</li>
                  <li className={styles.envBenefit}>Lắng nghe tự nhiên như người bản xứ</li>
                </ul>
              </div>

              <div className={styles.environmentCard}>
                <div className={styles.envIcon} style={{ background: 'rgba(184, 134, 11, 0.15)' }}>
                  <Award size={32} strokeWidth={1.5} style={{ color: '#B8860B' }} />
                </div>
                <h3 className={styles.envTitle}>Giáo Viên TESOL</h3>
                <p className={styles.envDescription}>
                  Giáo viên có chứng chỉ TESOL quốc tế, kinh nghiệm thực tế giảng dạy và làm việc trong môi trường đa quốc gia.
                </p>
                <ul className={styles.envBenefits}>
                  <li className={styles.envBenefit}>Phương pháp khoa học, đã được kiểm chứng</li>
                  <li className={styles.envBenefit}>Hiểu sâu sắc khó khăn của người Việt</li>
                  <li className={styles.envBenefit}>Cam kết hoàn tiền 100% tuần đầu</li>
                </ul>
              </div>

              <div className={styles.environmentCard}>
                <div className={styles.envIcon} style={{ background: 'rgba(15, 32, 57, 0.15)' }}>
                  <Shield size={32} strokeWidth={1.5} style={{ color: '#0F2039' }} />
                </div>
                <h3 className={styles.envTitle}>Cam Kết Kết Quả</h3>
                <p className={styles.envDescription}>
                  Chúng tôi tự tin vào phương pháp. Nếu bạn không hài lòng trong tuần đầu, hoàn tiền 100% không điều kiện.
                </p>
                <ul className={styles.envBenefits}>
                  <li className={styles.envBenefit}>Thử nghiệm không rủi ro</li>
                  <li className={styles.envBenefit}>Đo lường tiến độ rõ ràng</li>
                  <li className={styles.envBenefit}>Hỗ trợ trọn đời sau khóa học</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.historySection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Câu Chuyện Lian English</h2>
            </div>

            <div className={styles.historyContent}>
              <div className={styles.historyText}>
                <p className={styles.historyParagraph}>
                  Lian English được sinh ra từ một quan sát đơn giản: Hầu hết người Việt học tiếng Anh 12 năm, vẫn không thể giao tiếp tự tin.
                </p>
                <p className={styles.historyParagraph}>
                  Chúng tôi thấy hai thái cực phổ biến. Một nhóm dành cả tuổi trẻ học ngữ pháp trên giấy, giải xuất sắc, nhưng mở miệng không nói được. Một nhóm khác học "tiếng anh bồi", nghe sao nói vậy, giao tiếp sinh tồn được nhưng chạm "trần kính" ngay, vào môi trường chuyên nghiệp là fail.
                </p>
                <p className={styles.historyParagraph}>
                  <strong style={{ color: '#0F2039' }}>Phản Xạ Bài Bản</strong> là câu trả lời của chúng tôi. Không đợi 6 tháng ngữ pháp mới được nói, nhưng cũng không học vẹt nghe sao nói vậy. Chúng tôi dạy CẤU TRÚC để nói chuẩn, nói dài, và scale lên từ A1 đến B1, B2.
                </p>
                <p className={styles.historyParagraph}>
                  Tên "Lian" bắt nguồn từ "Liên kết" (Connection) - vì mục tiêu cuối cùng không phải là giỏi tiếng Anh, mà là dùng tiếng Anh để kết nối với thế giới, mở ra cơ hội, và trở thành phiên bản tốt hơn của chính mình.
                </p>
              </div>
              <div className={styles.historyHighlight}>
                <h3 className={styles.highlightTitle}>Sứ Mệnh Của Chúng Tôi</h3>
                <p className={styles.highlightText}>
                  "Giúp 10,000 người Việt đạt được tự do ngôn ngữ, dùng tiếng Anh để mở ra thế giới và nắm bắt cơ hội nghề nghiệp."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Sẵn Sàng Bắt Đầu Hành Trình?</h2>
            <p className={styles.ctaText}>
              Đừng để nỗi sợ hoặc sai lầm của phương pháp cũ cản trở bạn. Hãy trải nghiệm Phản Xạ Bài Bản ngay hôm nay.
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
