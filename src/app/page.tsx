import styles from "./page.module.css";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, AlertTriangle, ShieldCheck, CheckCircle2, Zap, ArrowRight, Star, User, HelpCircle } from "lucide-react";
import { BarrierSection } from "@/components/barrier/BarrierSection";
import type { BarrierCardProps } from "@/components/barrier/BarrierCard";


// Define the barriers for each level
const barriers: BarrierCardProps[] = [
  {
    level: 'A1',
    barrierName: 'Rào Cản: Tâm Lý E Ngại (Affective Filter)',
    barrierDescription: 'Sợ sai, sợ bị đánh giá → Tạo ra rào cản vô hình ngay cả khi đã học từ vựng. Bạn có vốn từ, nhưng tâm lý e ngại khiến bạn khó mở lời.',
    bridgeName: 'Phản Xạ Bài Bản tại A1',
    bridgeSolution: 'Khuyến khích phản xạ tự nhiên ngay từ Ngày 1. Không cần hoàn hảo, không cần đợi học xong ngữ pháp.',
    bridgeKeyFeatures: [
      'Lớp siêu nhỏ 4-6 người = Không gian an toàn, không phán xét',
      'Bắt đầu tự tin với câu đơn giản: "Hello, I\'m [name]"',
      'Học qua trải nghiệm, không đợi đủ từ mới dám nói'
    ],
    result: '→ Tháo gỡ sự e ngại trong 2 tuần đầu. Đầu Ngày 3 đã tự tin giới thiệu bản thân.',
    levelColor: '#0F2039'  // Very Dark Navy
  },
  {
    level: 'A2',
    barrierName: 'Rào Cản: Thói Quen Dịch Thầm',
    barrierDescription: 'Não bộ bận dịch tiếng Việt → Giao tiếp ngập ngừng. Nói được nhưng rời rạc, thiếu cấu trúc → Dễ gặp điểm chững.',
    bridgeName: 'Phản Xạ Bài Bản tại A2',
    bridgeSolution: 'Thay thế thói quen dịch thầm bằng phản xạ tự nhiên + Xây dựng cấu trúc câu.',
    bridgeKeyFeatures: [
      'Môi trường 100% tiếng Anh = Giúp não bộ quen xử lý thông tin trực tiếp',
      'Học các KHUNG câu (patterns) không học từ rời rạc',
      'Lắp ráp từ vựng vào khung có sẵn → Diễn đạt mạch lạc, tự nhiên'
    ],
    result: '→ Ngắt nghỉ đúng, nối câu đúng. Diễn đạt mượt mà không cần qua bước dịch thầm.',
    levelColor: '#0F2039'  // Very Dark Navy
  },
  {
    level: 'A2+',
    barrierName: 'Rào Cản: Giới Hạn Ở Câu Trả Lời Ngắn',
    barrierDescription: 'Trả lời Yes/No, gặp khó khăn khi phát triển ý → Hội thoại thiếu sự kết nối. Bạn có từ vựng, nhưng chưa quen cách duy trì mạch chuyện.',
    bridgeName: 'Phản Xạ Bài Bản tại A2+',
    bridgeSolution: 'Kỹ thuật phát triển ý (Developing Ideas).',
    bridgeKeyFeatures: [
      'Linking Words: however, therefore, additionally...',
      'Storytelling Framework: STAR (Situation, Task, Action, Result)',
      'Hỏi ngược (Wh- questions) để mở rộng và duy trì hội thoại'
    ],
    result: '→ Biến câu trả lời ngắn thành câu chuyện 2-3 phút cuốn hút và mang dấu ấn cá nhân.',
    levelColor: '#B8860B'  // Gold
  },
  {
    level: 'B1',
    barrierName: 'Rào Cản: Thiếu Công Cụ Tư Duy (Critical Thinking)',
    barrierDescription: 'Giao tiếp đời thường ổn nhưng khó thảo luận chuyên sâu. Lúng túng khi cần giải thích "TẠI SAO" (reasoning) → Hạn chế trong môi trường làm việc độc lập.',
    bridgeName: 'Phản Xạ Bài Bản tại B1',
    bridgeSolution: 'Cấu trúc lập luận (Critical Thinking Framework).',
    bridgeKeyFeatures: [
      'Point - Reason - Example - Point (PREP)',
      'Opinion phrases: "I believe that...", "In my view..."',
      'Disagree politely: "I see your point, but..."'
    ],
    result: '→ Thảo luận, bảo vệ quan điểm tự tin, và xây dựng nền tảng vững vàng để tự học trọn đời.',
    levelColor: '#B8860B'  // Gold
  }
];

export default function Home() {
  return (
    <>
      {/* 1. The Professional Hero - Pain Hook First */}
      <section id="hero" className={`section ${styles.heroSection}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.cmaHeroText}>
              <h1>
                Bạn đã học tiếng Anh nhiều năm<br />
                <span className={styles.textAccent}>nhưng vẫn ngại mở miệng?</span>
              </h1>
              <p className={styles.cmaHeroSubtitle}>
                Bạn không "mất gốc" — bạn chỉ chưa có môi trường an toàn để luyện phản xạ. Lian giúp bạn nói tự tin trong 8 tuần, không học lại từ đầu, không học mãi mãi.
              </p>

              {/* Mini Social Proof */}
              <div className={styles.miniSocialProof}>
                <div className={styles.miniSocialProofItem}>
                  <CheckCircle2 size={20} style={{ color: '#10b981' }} />
                  <span className={styles.miniSocialProofText}>50+ học viên đã tự tin giao tiếp</span>
                </div>
                <div className={styles.miniSocialProofItem}>
                  <CheckCircle2 size={20} style={{ color: '#10b981' }} />
                  <span className={styles.miniSocialProofText}>100% giáo viên TESOL</span>
                </div>
                <div className={styles.miniSocialProofItem}>
                  <ShieldCheck size={20} style={{ color: '#10b981' }} />
                  <span className={styles.miniSocialProofText}>Hoàn tiền 100% trong 2 tuần đầu</span>
                </div>
              </div>

              <div className={styles.cmaActions}>
                <Button href="/test" className={styles.primaryBtn}>
                  Kiểm Tra Trình Độ Miễn Phí
                </Button>
                <Button href="#methodology" className={styles.secondaryBtn}>
                  Xem Phương Pháp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Course Cards - Pain → Solution → Outcome */}
      <section className={`section ${styles.coursesSection}`} id="courses">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Chọn Lộ Trình Phù Hợp Với Bạn</h2>
            <p className={styles.subtitle}>Mỗi cấp độ giải quyết một nút thắt riêng biệt — tìm hiểu xem bạn đang gặp phải nút thắt nào</p>
          </div>

          <div className={styles.courseCardsGrid}>
            {/* A1 Card */}
            <div className={styles.courseCard}>
              <div className={styles.courseCardImage}>
                <Image src="/cma-images/a1.png" alt="Lớp A1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.courseCardContent}>
                <div className={styles.courseCardBadge}>LỘ TRÌNH A1</div>
                <h3 className={styles.courseCardTitle}>
                  Bạn sợ mở miệng vì nghĩ mình "mất gốc"?
                </h3>
                <p className={styles.courseCardDescription}>
                  Thực ra bạn không mất gốc — bạn chỉ chưa có môi trường an toàn để luyện phản xạ. Lớp A1 giúp bạn xóa bỏ sự e ngại trong 2 tuần đầu, bắt đầu nói từ Ngày 1.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Đầu tuần 2 đã tự tin giới thiệu bản thân
                  </p>
                  <p className={styles.courseCardMeta}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/a1" className={styles.courseCardLink}>
                  Tìm hiểu thêm <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* A2 Card */}
            <div className={styles.courseCard}>
              <div className={styles.courseCardImage}>
                <Image src="/cma-images/a2.png" alt="Lớp A2" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.courseCardContent}>
                <div className={styles.courseCardBadge}>LỘ TRÌNH A2</div>
                <h3 className={styles.courseCardTitle}>
                  Não bộ "trống rỗng" khi cần nói?
                </h3>
                <p className={styles.courseCardDescription}>
                  Bạn có thói quen dịch thầm từ tiếng Việt sang tiếng Anh trong đầu? Quá trình này khiến bộ nhớ làm việc quá tải, dẫn đến hiện tượng quên sạch ngay khi cần nói.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Ngắt nghỉ đúng, diễn đạt mượt mà không cần dịch thầm
                  </p>
                  <p className={styles.courseCardMeta}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/a2" className={styles.courseCardLink}>
                  Tìm hiểu thêm <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* A2+ Card */}
            <div className={styles.courseCard}>
              <div className={styles.courseCardImage}>
                <Image src="/cma-images/a2-plus.png" alt="Lớp A2+" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.courseCardContent}>
                <div className={styles.courseCardBadge}>LỘ TRÌNH A2+</div>
                <h3 className={styles.courseCardTitle}>
                  Trả lời được, nhưng không kéo dài được câu chuyện?
                </h3>
                <p className={styles.courseCardDescription}>
                  Bạn có từ vựng, nhưng chưa quen cách duy trì mạch chuyện. Học cách phát triển ý và mở rộng hội thoại từ câu trả lời ngắn thành câu chuyện 2-3 phút.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Biến câu trả lời ngắn thành câu chuyện cuốn hút
                  </p>
                  <p className={styles.courseCardMeta}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/a2-plus" className={styles.courseCardLink}>
                  Tìm hiểu thêm <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* B1 Card */}
            <div className={styles.courseCard}>
              <div className={styles.courseCardImage}>
                <Image src="/cma-images/b1.png" alt="Lớp B1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.courseCardContent}>
                <div className={styles.courseCardBadge}>LỘ TRÌNH B1</div>
                <h3 className={styles.courseCardTitle}>
                  Giao tiếp đời thường ổn, nhưng khó thảo luận chuyên sâu?
                </h3>
                <p className={styles.courseCardDescription}>
                  Bạn lúng túng khi cần giải thích "TẠI SAO" (reasoning) và bảo vệ quan điểm. Xây dựng tư duy phản biện và lập luận có chiều sâu.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Thảo luận, bảo vệ quan điểm tự tin, tự học trọn đời
                  </p>
                  <p className={styles.courseCardMeta}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/b1" className={styles.courseCardLink}>
                  Tìm hiểu thêm <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA after courses */}
          <div className={styles.simpleCta}>
            <p className={styles.simpleCtaText}>
              Không chắc mình thuộc cấp độ nào?
            </p>
            <Button href="/test" className={styles.primaryBtn}>
              Kiểm Tra Trình Độ Miễn Phí
            </Button>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS - Moved Up for Social Proof */}
      <section className="section" id="testimonials" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Những Câu Chuyện Bứt Phá</h2>
            <p className={styles.subtitle}>Kết quả thực tế từ những người từng "sợ mở miệng" như bạn</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div style={{ color: "#fbbf24", marginBottom: "15px", display: "flex", gap: "5px" }}>
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className={styles.testimonialText}>"Trước đây mình làm IT, suốt ngày ngồi câm lặng trong meeting với client Mỹ chỉ vì sợ sai ngữ pháp. Giờ thì mình đã có thể ung dung giải thích logic code và chốt requirements trực tiếp 1-1, lương cũng tăng 30%."</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}><User size={24} /></div>
                <div className={styles.authorInfo}>
                  <h4>Anh Tuấn Anh</h4>
                  <p>Senior Developer</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div style={{ color: "#fbbf24", marginBottom: "15px", display: "flex", gap: "5px" }}>
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className={styles.testimonialText}>"Chỉ vì quá sợ nói mà mình suýt rớt phỏng vấn visa du học. Lian đã 'đập đi xây lại' lòng can đảm cho mình. Hiện tại mình sang Sydney được 3 tháng và hoàn toàn tự tin bắt chuyện với bạn bè quốc tế."</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}><User size={24} /></div>
                <div className={styles.authorInfo}>
                  <h4>Chị Mai Hương</h4>
                  <p>Du học sinh Thạc sĩ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Evidence-based Gap (The Diagnosis) */}
      <section id="diagnosis" className="section section-alt">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Giải quyết triệt để Nút thắt Giao tiếp</h2>
            <h2 className={styles.textAccent}>Xóa bỏ sự ngập ngừng và dịch thầm</h2>
          </div>

          <div className={styles.cmaGrid3}>
            <div className={styles.cmaFeatureCard}>
              <AlertTriangle size={32} className={styles.textAccent} />
              <h3 className={styles.cmaFeatureTitle}>Nút thắt Working Memory</h3>
              <p className={styles.cmaFeatureText}>
                Bạn có đang bận "dịch thầm" từ tiếng Việt sang tiếng Anh? Quá trình này khiến bộ nhớ làm việc (Working Memory) của bạn quá tải, dẫn đến hiện tượng não bộ "trống rỗng" ngay khi cần nói.
              </p>
            </div>

            <div className={styles.cmaFeatureCard}>
              <ShieldCheck size={32} className={styles.textAccent} />
              <h3 className={styles.cmaFeatureTitle}>Rào cản Tâm lý (Affective Filter)</h3>
              <p className={styles.cmaFeatureText}>
                Áp lực phải nói đúng ngữ pháp hoàn hảo tạo ra căng thẳng cho bạn. Khi lo âu dâng cao, bộ não tự đóng sập khả năng truy xuất từ vựng, khiến bạn đông cứng dù vốn từ rất khá.
              </p>
            </div>

            <div className={styles.cmaFeatureCard}>
              <Lightbulb size={32} className={styles.textAccent} />
              <h3 className={styles.cmaFeatureTitle}>Thiếu Phương pháp Bài Bản</h3>
              <p className={styles.cmaFeatureText}>
                Chúng tôi hiểu bạn từng phải nhồi nhét từ vựng nhưng lại thiếu các "mảnh ghép" (chunks) để ráp câu. Thứ bạn cần là một môi trường an toàn để lóng ngóng và được chúng tôi sửa sai từng bước.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Phản Xạ Bài Bản" Visual Explanation - NEW SECTION */}
      <section className={`section section-alt ${styles.methodologySection}`} id="methodology-explanation">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Phản Xạ Bài Bản là gì?</h2>
            <p className={styles.subtitle}>Phương pháp giúp bạn nói tự nhiên mà vẫn đúng cấu trúc</p>
          </div>

          {/* Visual Process */}
          <div className={styles.methodologyVisual}>
            {/* Step 1: Reflex */}
            <div className={styles.methodologyStep}>
              <div className={`${styles.methodologyIconWrapper} ${styles.methodologyIconGold}`}>
                <Zap size={50} style={{ color: 'white' }} />
              </div>
              <h3 className={styles.methodologyStepTitle}>Phản Xạ</h3>
              <p className={styles.methodologyStepText}>
                Tự nhiên như trẻ em học nói<br />
                Mở miệng ngay, không đợi hoàn hảo
              </p>
            </div>

            {/* Arrow */}
            <span className={styles.methodologyArrow}>→</span>

            {/* Step 2: Structure */}
            <div className={styles.methodologyStep}>
              <div className={`${styles.methodologyIconWrapper} ${styles.methodologyIconNavy}`}>
                <CheckCircle2 size={50} style={{ color: 'white' }} />
              </div>
              <h3 className={styles.methodologyStepTitle}>Bài Bản</h3>
              <p className={styles.methodologyStepText}>
                Logic như người trưởng thành<br />
                Khung mẫu câu rõ ràng
              </p>
            </div>

            {/* Arrow */}
            <span className={styles.methodologyArrow}>→</span>

            {/* Step 3: Freedom */}
            <div className={styles.methodologyStep}>
              <div className={`${styles.methodologyIconWrapper} ${styles.methodologyIconGreen}`}>
                <ArrowRight size={50} style={{ color: 'white' }} />
              </div>
              <h3 className={styles.methodologyStepTitle}>Tự Do</h3>
              <p className={styles.methodologyStepText}>
                Nói tự tin, đúng ngữ cảnh<br />
                Tự học trọn đời
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className={styles.comparisonTable}>
            <div className={styles.comparisonTableGrid}>
              {/* Traditional Method */}
              <div className={`${styles.comparisonColumn} ${styles.comparisonColumnTraditional}`}>
                <h3 className={`${styles.comparisonTitle} ${styles.comparisonTitleBad}`}>
                  ❌ Cách truyền thống
                </h3>
                <ul className={styles.comparisonList}>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletBad}`}>•</span>
                    <span className={styles.comparisonText}>Học từ vựng rời rạc, ghép câu thủ công</span>
                  </li>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletBad}`}>•</span>
                    <span className={styles.comparisonText}>Dịch thầm từ tiếng Việt sang tiếng Anh</span>
                  </li>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletBad}`}>•</span>
                    <span className={styles.comparisonText}>Đợi học xong ngữ pháp mới dám nói</span>
                  </li>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletBad}`}>•</span>
                    <span className={styles.comparisonText}>Lớp đông, ngại sai, không được sửa nhiều</span>
                  </li>
                </ul>
              </div>

              {/* Our Method */}
              <div className={`${styles.comparisonColumn} ${styles.comparisonColumnOur}`}>
                <h3 className={`${styles.comparisonTitle} ${styles.comparisonTitleGood}`}>
                  ✅ Phản Xạ Bài Bản
                </h3>
                <ul className={styles.comparisonList}>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletGood}`}>✓</span>
                    <span className={styles.comparisonText}>Học chunks & patterns, lắp ráp linh hoạt</span>
                  </li>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletGood}`}>✓</span>
                    <span className={styles.comparisonText}>Tư duy trực tiếp bằng tiếng Anh</span>
                  </li>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletGood}`}>✓</span>
                    <span className={styles.comparisonText}>Nói từ Ngày 1, hoàn thiện dần dần</span>
                  </li>
                  <li className={styles.comparisonListItem}>
                    <span className={`${styles.comparisonBullet} ${styles.comparisonBulletGood}`}>✓</span>
                    <span className={styles.comparisonText}>Lớp siêu nhỏ 4-6 người, sửa từng lỗi</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Result */}
            <div className={styles.comparisonResult}>
              <p className={styles.comparisonResultText}>
                Kết quả: Bạn sẽ nói tự nhiên, đúng cấu trúc, không cần dịch thầm
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.simpleCta}>
            <Button href="/test" className={styles.primaryBtn}>
              Kiểm Tra Trình Độ Miễn Phí
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Original Methodology Section */}
      <section className="section" id="methodology">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Triết lý Đào tạo: <span className={styles.textAccent}>Phản Xạ Bài Bản</span></h2>
            <p className={styles.subtitle}>Học ngôn ngữ như một đứa trẻ, nhưng với tư duy logic của người trưởng thành.</p>
          </div>

          <div className={styles.philosophyBox}>
            <div className={styles.philosophyVisual}>
              <div className={styles.cookingIcon}>
                <Zap size={60} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.philosophyContent} style={{ flex: 1.5 }}>
              <ul className={styles.philosophyList}>
                <li>
                  <CheckCircle2 size={24} className={styles.checkIcon} />
                  <span><strong>Khởi Đầu Tự Nhiên (Phản Xạ):</strong> Chúng tôi đánh thức ngôn ngữ của bạn thông qua bài tập phản xạ âm thanh liên tục. Bạn sẽ luyện mở miệng ngay từ Buổi 1, không đợi đến khi hoàn hảo.</span>
                </li>
                <li>
                  <CheckCircle2 size={24} className={styles.checkIcon} />
                  <span><strong>Lắp Ráp Bằng Khung Mẫu (Cấu Trúc):</strong> Bạn sẽ xóa bỏ thói quen dịch thầm bằng cách nạp ngôn ngữ qua các "Chunks & Patterns". Chỉ việc bóc cụm từ ra xài linh hoạt dưới sự hướng dẫn của chúng tôi.</span>
                </li>
                <li>
                  <CheckCircle2 size={24} className={styles.checkIcon} />
                  <span><strong>Vùng Luyện Tập An Toàn:</strong> Lớp học của chúng tôi siêu nhỏ chỉ 4-6 học viên. Không phán xét. Giáo viên tỉ mỉ sửa từng lỗi sai, nâng đỡ bạn tiến lên vững vàng.</span>
                </li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <Button href="/test" className={styles.primaryBtn}>
                  Trải nghiệm 2 Tuần Thực Hành
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section - Take the Test */}
      <section className={`section ${styles.testCtaSection}`} id="cta-test">
        <div className="container">
          <div className={styles.testCtaContent}>
            <h2 className={styles.testCtaTitle}>
              Kiểm Tra Trình Độ Của Bạn
            </h2>
            <p className={styles.testCtaDescription}>
              80 câu hỏi, khoảng 60 phút. Nhận kết quả ngay và lộ trình học phù hợp nhất với bạn. Hoàn toàn miễn phí.
            </p>
            <div className={styles.testCtaButtons}>
              <Button href="/test" className={`${styles.primaryBtn} ${styles.testCtaPrimaryBtn}`}>
                Bắt Đầu Bài Test Miễn Phí
              </Button>
              <p className={styles.testCtaNote}>
                Đăng ký sau khi hoàn thành test
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Kept Same */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Câu Hỏi Thường Gặp</h2>
            <p className={styles.subtitle}>Gỡ bỏ mọi trăn trở trước khi bắt đầu</p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3><HelpCircle size={20} style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }} /> Mất gốc hoàn toàn, bỏ tiếng Anh rất lâu có theo được không?</h3>
              <p>Hoàn toàn được. Lộ trình A1 của chúng mình thiết kế riêng cho người "sợ nói", lớp siêu nhỏ chỉ 4-6 người giúp bạn không bị ngại. Bạn sẽ đi từ bước cơ bản nhất.</p>
            </div>
            <div className={styles.faqCard}>
              <h3><HelpCircle size={20} style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }} /> Thời gian rảnh ít, học có theo kịp không?</h3>
              <p>Lian tối ưu hóa "thời gian trên lớp" để ép phản xạ 100%. Lớp học linh hoạt cho người bận rộn. Bạn không phải mất hàng giờ ở nhà làm bài tập ngữ pháp.</p>
            </div>
            <div className={styles.faqCard}>
              <h3><HelpCircle size={20} style={{ flexShrink: 0, marginTop: "2px", color: "var(--color-accent)" }} /> Khác gì với các trung tâm kỹ năng?</h3>
              <p>Chúng mình rèn luyện Phản xạ tốc độ kết hợp với Khung sườn (Structure) để nói đúng, dài, và có chiều sâu ý tưởng chứ không học "bồi".</p>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY SECTION - March 26 Deadline */}
      <section className={`section ${styles.urgencySection}`}>
        <div className="container">
          <div className={styles.urgencyContent}>
            <div className={styles.urgencyBadge}>
              <span className={styles.urgencyBadgeText}>KHAI GIẢNG SẮP TỚI</span>
            </div>
            <h2 className={styles.urgencyTitle}>
              Lớp A1 khai giảng ngày 26/03/2026
            </h2>
            <p className={styles.urgencySubtitle}>
              Chỉ còn 22 ngày. 4-6 học viên mỗi lớp. Số chỗ có hạn.
            </p>

            {/* Benefits List */}
            <div className={styles.urgencyBenefits}>
              <div className={styles.urgencyBenefit}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span className={styles.urgencyBenefitText}>8 tuần từ A1 đến tự tin giao tiếp cơ bản</span>
              </div>
              <div className={styles.urgencyBenefit}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span className={styles.urgencyBenefitText}>Lớp siêu nhỏ 4-6 người</span>
              </div>
              <div className={styles.urgencyBenefit}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span className={styles.urgencyBenefitText}>100% giáo viên TESOL quốc tế</span>
              </div>
              <div className={styles.urgencyBenefit}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span className={styles.urgencyBenefitText}>Hoàn tiền 100% trong 2 tuần đầu nếu không phù hợp</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button href="/test" className={`${styles.primaryBtn} ${styles.urgencyCta}`}>
              Đăng Ký Ngay (Miễn Phí Test Trình Độ)
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA with Risk Reversal + Contact */}
      <section className={`section ${styles.finalCtaSection}`} id="final-cta">
        <div className="container">
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>
              Bạn đã sẵn sàng nói tiếng Anh tự tin?
            </h2>
            <p className={styles.finalCtaSubtitle}>
              Hãy để Lian giúp bạn tháo gỡ rào cản tâm lý và xây dựng phản xạ tự nhiên.<br />
              Lớp A1 khai giảng ngày 26/03 — chỉ còn vài chỗ.
            </p>

            {/* CTA Buttons */}
            <div className={styles.finalCtaButtons}>
              <Button href="/test" className={styles.primaryBtn}>
                Kiểm Tra Trình Độ Miễn Phí
              </Button>
              <p className={styles.finalCtaNote}>
                hoặc liên hệ trực tiếp
              </p>
            </div>

            {/* Contact Options */}
            <div className={styles.finalCtaContacts}>
              <div className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.contactIconFacebook}`}>
                  <span style={{ color: 'white', fontSize: '20px' }}>📘</span>
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactLabel}>Facebook</p>
                  <p className={styles.contactValue}>Lian English</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.contactIconEmail}`}>
                  <span style={{ color: 'white', fontSize: '20px' }}>✉️</span>
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>fluencybeyondtests@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Risk Reversal */}
            <div className={styles.riskReversal}>
              <div className={styles.riskReversalContent}>
                <ShieldCheck size={48} style={{ color: 'white', flexShrink: 0 }} />
                <div>
                  <h3 className={styles.riskReversalTitle}>💯 CAM KẾT HOÀN TIỀN 100%</h3>
                  <p className={styles.riskReversalText}>Nếu bạn cảm thấy phương pháp không phù hợp trong 2 tuần đầu, chúng tôi hoàn tiền toàn bộ. Không câu hỏi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
