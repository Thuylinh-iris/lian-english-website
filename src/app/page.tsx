import styles from "./page.module.css";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Zap, ArrowRight, Star, User, HelpCircle } from "lucide-react";

// Force cache bust: v2

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section id="hero" className={`section ${styles.heroSection}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.cmaHeroText}>
              <h1>
                Bạn đã học tiếng Anh nhiều năm<br />
                <span className={styles.textAccent}>nhưng vẫn ngại mở miệng?</span>
              </h1>
              <p className={styles.cmaHeroSubtitle}>
                Lian giúp bạn nói tự tin trong 8 tuần với phương pháp Phản Xạ Bài Bản — kết hợp tự nhiên và cấu trúc.
              </p>

              <div className={styles.cmaActions}>
                <Button href="/test" className={styles.primaryBtn}>
                  Kiểm Tra Trình Độ Miễn Phí
                </Button>
                <Button href="#courses" className={styles.secondaryBtn}>
                  Xem Lộ Trình
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Course Cards */}
      <section className={`section ${styles.coursesSection}`} id="courses">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Chọn Lộ Trình Phù Hợp Với Bạn</h2>
            <p className={styles.subtitle}>Mỗi cấp độ giải quyết một nút thắt riêng biệt</p>
          </div>

          <div className={styles.courseCardsGrid}>
            {/* A1 Card */}
            <div className={styles.courseCard}>
              <div className={styles.courseCardImage}>
                <Image src="/cma-images/a1.png" alt="Lớp A1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.courseCardContent}>
                <div className={styles.courseCardBadge}>A1</div>
                <h3 className={styles.courseCardTitle}>
                  Sợ mở miệng vì nghĩ mình "mất gốc"?
                </h3>
                <p className={styles.courseCardDescription}>
                  Bạn có vốn từ, nhưng tâm lý e ngại khiến bạn khó mở lời. Bắt đầu nói từ Ngày 1 trong môi trường an toàn.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Tuần 2 đã tự tin giới thiệu bản thân
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
                <div className={styles.courseCardBadge}>A2</div>
                <h3 className={styles.courseCardTitle}>
                  Não bộ "trống rỗng" khi cần nói?
                </h3>
                <p className={styles.courseCardDescription}>
                  Thói quen dịch thầm khiến bộ nhớ làm việc quá tải. Học cách tư duy trực tiếp bằng tiếng Anh.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Diễn đạt mượt mà không cần dịch thầm
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
                <div className={styles.courseCardBadge}>A2+</div>
                <h3 className={styles.courseCardTitle}>
                  Trả lời được, nhưng không kéo dài câu chuyện?
                </h3>
                <p className={styles.courseCardDescription}>
                  Học cách phát triển ý và mở rộng hội thoại từ câu trả lời ngắn thành câu chuyện 2-3 phút.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Biến câu ngắn thành câu chuyện cuốn hút
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
                <div className={styles.courseCardBadge}>B1</div>
                <h3 className={styles.courseCardTitle}>
                  Khó thảo luận chuyên sâu?
                </h3>
                <p className={styles.courseCardDescription}>
                  Xây dựng tư duy phản biện và lập luận có chiều sâu để bảo vệ quan điểm tự tin.
                </p>
                <div className={styles.courseCardFooter}>
                  <p className={styles.courseCardResult}>
                    ✓ Thảo luận, bảo vệ quan điểm tự tin
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

      {/* 3. Testimonials */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Câu Chuyện Học Viên</h2>
            <p className={styles.subtitle}>Kết quả thực tế từ những người từng "sợ mở miệng"</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
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
              <div className={styles.testimonialStars}>
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

      {/* 4. Methodology - Phản Xạ Bài Bản */}
      <section className={`section section-alt ${styles.methodologySection}`} id="methodology">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Phản Xạ Bài Bản là gì?</h2>
            <p className={styles.subtitle}>Kết hợp tự nhiên và cấu trúc để nói đúng, nói hay</p>
          </div>

          {/* Text-based explanation instead of visual */}
          <div className={styles.methodologyContent}>
            <p className={styles.methodologyParagraph}>
              <strong>Nhiều người học tiếng Anh mãi nhưng vẫn ngại mở miệng.</strong> Lý do không phải vì họ thiếu từ vựng hay ngữ pháp. Vấn đề nằm ở cách họ học — học từ vựng rời rạc, ghép câu thủ công, và dịch thầm từ tiếng Việt sang tiếng Anh trong đầu. Điều này khiến não bộ làm việc quá tải, dẫn đến hiện tượng "quên sạch" khi cần nói.
            </p>

            <p className={styles.methodologyParagraph}>
              <strong>Phản Xạ Bài Bản</strong> là phương pháp kết hợp hai yếu tố: <strong>tự nhiên</strong> (như trẻ em học nói) và <strong>cấu trúc</strong> (như người trưởng thành phân tích). Trẻ em không học ngữ pháp trước khi nói — chúng học qua bắt chước, lặp lại, và sửa dần. Người trưởng thành cần cấu trúc để hiểu tại sao sao mình nói đúng và tại sao câu đó có nghĩa.
            </p>

            <p className={styles.methodologyParagraph}>
              <strong>Chúng tôi dạy theo chunks và patterns</strong> — các cụm từ và mẫu câu có thể lắp ráp linh hoạt, thay vì học từ vựng đơn lẻ. Bạn sẽ học cách tư duy trực tiếp bằng tiếng Anh, không dịch thầm. Điều này giúp phản xạ nói tự nhiên, đúng cấu trúc, không cần suy nghĩ quá lâu.
            </p>

            <p className={styles.methodologyParagraph}>
              <strong>Trong lớp học:</strong> Bạn sẽ nói từ Ngày 1 trong môi trường an toàn, siêu nhỏ (4-6 người). Giáo viên sửa lỗi ngay lập tức, giúp bạn hoàn thiện dần dần. Không ai cười khi bạn sai — tất cả đều đang học. Kết quả: từ người "sợ nói" thành người tự tin giao tiếp.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Câu Hỏi Thường Gặp</h2>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3><HelpCircle size={20} className={styles.textAccent} /> Mất gốc hoàn toàn có theo được không?</h3>
              <p>Lộ trình A1 thiết kế riêng cho người "sợ nói". Bạn sẽ đi từ bước cơ bản nhất.</p>
            </div>
            <div className={styles.faqCard}>
              <h3><HelpCircle size={20} className={styles.textAccent} /> Thời gian rảnh ít, học có theo kịp không?</h3>
              <p>Lian tối ưu hóa thời gian trên lớp để ép phản xạ 100%. Bạn không phải mất hàng giờ ở nhà làm bài tập ngữ pháp.</p>
            </div>
            <div className={styles.faqCard}>
              <h3><HelpCircle size={20} className={styles.textAccent} /> Khác gì với các trung tâm khác?</h3>
              <p>Phản xạ tốc độ kết hợp với khung sườn để nói đúng, dài, và có chiều sâu — không học "bồi".</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className={`section ${styles.finalCtaSection}`} id="final-cta">
        <div className="container">
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>
              Sẵn sàng nói tiếng Anh tự tin?
            </h2>
            <p className={styles.finalCtaSubtitle}>
              Lớp A1 khai giảng 26/03/2026 — chỉ còn vài chỗ.
            </p>

            <div className={styles.finalCtaButtons}>
              <Button href="/test" className={styles.primaryBtn}>
                Kiểm Tra Trình Độ Miễn Phí
              </Button>
            </div>

            {/* Contact Options */}
            <div className={styles.finalCtaContacts}>
              <div className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.contactIconFacebook}`}>
                  <span style={{ color: 'white', fontSize: '18px' }}>📘</span>
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactLabel}>Facebook</p>
                  <p className={styles.contactValue}>Lian English</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.contactIconEmail}`}>
                  <span style={{ color: 'white', fontSize: '18px' }}>✉️</span>
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>fluencybeyondtests@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Key Info */}
            <div className={styles.keyInfo}>
              <p><CheckCircle2 size={18} className={styles.textAccent} /> Lớp siêu nhỏ 4-6 người</p>
              <p><CheckCircle2 size={18} className={styles.textAccent} /> 100% giáo viên TESOL</p>
              <p><CheckCircle2 size={18} className={styles.textAccent} /> Hoàn tiền 100% trong 2 tuần đầu</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
