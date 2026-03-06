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
      <section id="hero" className="section" style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(90deg, rgba(248, 249, 250, 0.95) 0%, rgba(248, 249, 250, 0.8) 50%, rgba(248, 249, 250, 0.2) 100%), url("/cma-images/hero-bg.png") center/cover no-repeat' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={20} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>50+ học viên đã tự tin giao tiếp</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={20} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>100% giáo viên TESOL</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={20} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>Hoàn tiền 100% trong 2 tuần đầu</span>
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
      <section className="section" id="courses" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Chọn Lộ Trình Phù Hợp Với Bạn</h2>
            <p className={styles.subtitle}>Mỗi cấp độ giải quyết một nút thắt riêng biệt — tìm hiểu xem bạn đang gặp phải nút thắt nào</p>
          </div>

          <div className={styles.cmaGrid3} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {/* A1 Card */}
            <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image src="/cma-images/a1.png" alt="Lớp A1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '8px', letterSpacing: '1px' }}>LỘ TRÌNH A1</div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '15px', lineHeight: '1.3' }}>
                  Bạn sợ mở miệng vì nghĩ mình "mất gốc"?
                </h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '15px', fontSize: '15px' }}>
                  Thực ra bạn không mất gốc — bạn chỉ chưa có môi trường an toàn để luyện phản xạ. Lớp A1 giúp bạn xóa bỏ sự e ngại trong 2 tuần đầu, bắt đầu nói từ Ngày 1.
                </p>
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '8px' }}>
                    ✓ Đầu tuần 2 đã tự tin giới thiệu bản thân
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/a1" style={{ textDecoration: 'none' }}>
                  <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--color-accent)', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    Tìm hiểu thêm <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>

            {/* A2 Card */}
            <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image src="/cma-images/a2.png" alt="Lớp A2" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '8px', letterSpacing: '1px' }}>LỘ TRÌNH A2</div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '15px', lineHeight: '1.3' }}>
                  Não bộ "trống rỗng" khi cần nói?
                </h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '15px', fontSize: '15px' }}>
                  Bạn có thói quen dịch thầm từ tiếng Việt sang tiếng Anh trong đầu? Quá trình này khiến bộ nhớ làm việc quá tải, dẫn đến hiện tượng quên sạch ngay khi cần nói.
                </p>
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '8px' }}>
                    ✓ Ngắt nghỉ đúng, diễn đạt mượt mà không cần dịch thầm
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/a2" style={{ textDecoration: 'none' }}>
                  <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--color-accent)', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    Tìm hiểu thêm <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>

            {/* A2+ Card */}
            <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image src="/cma-images/a2-plus.png" alt="Lớp A2+" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '8px', letterSpacing: '1px' }}>LỘ TRÌNH A2+</div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '15px', lineHeight: '1.3' }}>
                  Trả lời được, nhưng không kéo dài được câu chuyện?
                </h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '15px', fontSize: '15px' }}>
                  Bạn có từ vựng, nhưng chưa quen cách duy trì mạch chuyện. Học cách phát triển ý và mở rộng hội thoại từ câu trả lời ngắn thành câu chuyện 2-3 phút.
                </p>
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '8px' }}>
                    ✓ Biến câu trả lời ngắn thành câu chuyện cuốn hút
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/a2-plus" style={{ textDecoration: 'none' }}>
                  <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--color-accent)', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    Tìm hiểu thêm <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>

            {/* B1 Card */}
            <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image src="/cma-images/b1.png" alt="Lớp B1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '8px', letterSpacing: '1px' }}>LỘ TRÌNH B1</div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '15px', lineHeight: '1.3' }}>
                  Giao tiếp đời thường ổn, nhưng khó thảo luận chuyên sâu?
                </h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '15px', fontSize: '15px' }}>
                  Bạn lúng túng khi cần giải thích "TẠI SAO" (reasoning) và bảo vệ quan điểm. Xây dựng tư duy phản biện và lập luận có chiều sâu.
                </p>
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '8px' }}>
                    ✓ Thảo luận, bảo vệ quan điểm tự tin, tự học trọn đời
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
                    8 tuần | 4-6 học viên/lớp
                  </p>
                </div>
                <Link href="/classes/b1" style={{ textDecoration: 'none' }}>
                  <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--color-accent)', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    Tìm hiểu thêm <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA after courses */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '20px', fontSize: '16px' }}>
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
      <section className="section section-alt" id="methodology-explanation" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className={styles.cmaSectionHead}>
            <h2 className={styles.textNavy}>Phản Xạ Bài Bản là gì?</h2>
            <p className={styles.subtitle}>Phương pháp giúp bạn nói tự nhiên mà vẫn đúng cấu trúc</p>
          </div>

          {/* Visual Process */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginBottom: '60px', flexWrap: 'wrap' }}>
            {/* Step 1: Reflex */}
            <div style={{ textAlign: 'center', maxWidth: '250px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #B8860B 0%, #D4A84B 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 10px 30px rgba(184, 134, 11, 0.3)' }}>
                <Zap size={50} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '10px' }}>Phản Xạ</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Tự nhiên như trẻ em học nói<br />
                Mở miệng ngay, không đợi hoàn hảo
              </p>
            </div>

            {/* Arrow */}
            <div style={{ fontSize: '32px', color: 'var(--color-accent)' }}>→</div>

            {/* Step 2: Structure */}
            <div style={{ textAlign: 'center', maxWidth: '250px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F2039 0%, #1a3055 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 10px 30px rgba(15, 32, 57, 0.3)' }}>
                <CheckCircle2 size={50} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '10px' }}>Bài Bản</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Logic như người trưởng thành<br />
                Khung mẫu câu rõ ràng
              </p>
            </div>

            {/* Arrow */}
            <div style={{ fontSize: '32px', color: 'var(--color-accent)' }}>→</div>

            {/* Step 3: Freedom */}
            <div style={{ textAlign: 'center', maxWidth: '250px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}>
                <ArrowRight size={50} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '10px' }}>Tự Do</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Nói tự tin, đúng ngữ cảnh<br />
                Tự học trọn đời
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {/* Traditional Method */}
              <div style={{ background: '#fef2f2', padding: '30px', borderRight: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#991b1b', marginBottom: '20px', textAlign: 'center' }}>
                  ❌ Cách truyền thống
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ color: '#dc2626', fontSize: '18px' }}>•</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Học từ vựng rời rạc, ghép câu thủ công</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ color: '#dc2626', fontSize: '18px' }}>•</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Dịch thầm từ tiếng Việt sang tiếng Anh</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ color: '#dc2626', fontSize: '18px' }}>•</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Đợi học xong ngữ pháp mới dám nói</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#dc2626', fontSize: '18px' }}>•</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Lớp đông, ngại sai, không được sửa nhiều</span>
                  </li>
                </ul>
              </div>

              {/* Our Method */}
              <div style={{ background: '#f0fdf4', padding: '30px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#166534', marginBottom: '20px', textAlign: 'center' }}>
                  ✅ Phản Xạ Bài Bản
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ color: '#16a34a', fontSize: '18px' }}>✓</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Học chunks & patterns, lắp ráp linh hoạt</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ color: '#16a34a', fontSize: '18px' }}>✓</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Tư duy trực tiếp bằng tiếng Anh</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ color: '#16a34a', fontSize: '18px' }}>✓</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Nói từ Ngày 1, hoàn thiện dần dần</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#16a34a', fontSize: '18px' }}>✓</span>
                    <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.5' }}>Lớp siêu nhỏ 4-6 người, sửa từng lỗi</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Result */}
            <div style={{ background: 'var(--color-primary)', padding: '20px', textAlign: 'center' }}>
              <p style={{ color: 'white', fontSize: '16px', fontWeight: '600', margin: 0 }}>
                Kết quả: Bạn sẽ nói tự nhiên, đúng cấu trúc, không cần dịch thầm
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
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
      <section className="section" id="cta-test" style={{ background: 'linear-gradient(135deg, #0F2039 0%, #1a3055 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
              Kiểm Tra Trình Độ Của Bạn
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '30px', lineHeight: '1.6' }}>
              80 câu hỏi, khoảng 60 phút. Nhận kết quả ngay và lộ trình học phù hợp nhất với bạn. Hoàn toàn miễn phí.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
              <Button href="/test" className={styles.primaryBtn} style={{ background: '#B8860B', border: 'none', fontSize: '18px', padding: '15px 40px' }}>
                Bắt Đầu Bài Test Miễn Phí
              </Button>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
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
      <section className="section" style={{ background: 'linear-gradient(135deg, #0F2039 0%, #1a3055 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'inline-block', background: 'rgba(184, 134, 11, 0.2)', padding: '8px 20px', borderRadius: '50px', marginBottom: '20px' }}>
              <span style={{ color: '#B8860B', fontWeight: '700', fontSize: '14px', letterSpacing: '1px' }}>KHAI GIẢNG SẮP TỚI</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
              Lớp A1 khai giảng ngày 26/03/2026
            </h2>
            <p style={{ fontSize: '20px', color: '#B8860B', fontWeight: '600', marginBottom: '40px' }}>
              Chỉ còn 22 ngày. 4-6 học viên mỗi lớp. Số chỗ có hạn.
            </p>

            {/* Benefits List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span style={{ color: 'white', fontSize: '16px' }}>8 tuần từ A1 đến tự tin giao tiếp cơ bản</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span style={{ color: 'white', fontSize: '16px' }}>Lớp siêu nhỏ 4-6 người</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span style={{ color: 'white', fontSize: '16px' }}>100% giáo viên TESOL quốc tế</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                <span style={{ color: 'white', fontSize: '16px' }}>Hoàn tiền 100% trong 2 tuần đầu nếu không phù hợp</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button href="/test" className={styles.primaryBtn} style={{ background: '#B8860B', border: 'none', fontSize: '18px', padding: '15px 40px' }}>
              Đăng Ký Ngay (Miễn Phí Test Trình Độ)
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA with Risk Reversal + Contact */}
      <section className="section" id="final-cta" style={{ paddingTop: '80px', paddingBottom: '80px', background: '#F8F9FA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              Bạn đã sẵn sàng nói tiếng Anh tự tin?
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-light)', marginBottom: '40px', lineHeight: '1.6' }}>
              Hãy để Lian giúp bạn tháo gỡ rào cản tâm lý và xây dựng phản xạ tự nhiên.<br />
              Lớp A1 khai giảng ngày 26/03 — chỉ còn vài chỗ.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
              <Button href="/test" className={styles.primaryBtn} style={{ fontSize: '18px', padding: '15px 40px' }}>
                Kiểm Tra Trình Độ Miễn Phí
              </Button>
              <p style={{ color: 'var(--color-text-light)', fontSize: '14px' }}>
                hoặc liên hệ trực tiếp
              </p>
            </div>

            {/* Contact Options */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>📘</span>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-light)', margin: 0 }}>Facebook</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>Lian English</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>✉️</span>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-light)', margin: 0 }}>Email</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>fluencybeyondtests@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Risk Reversal */}
            <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '30px', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                <ShieldCheck size={48} style={{ color: 'white', flexShrink: 0 }} />
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', margin: '0 0 5px 0' }}>💯 CAM KẾT HOÀN TIỀN 100%</h3>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>Nếu bạn cảm thấy phương pháp không phù hợp trong 2 tuần đầu, chúng tôi hoàn tiền toàn bộ. Không câu hỏi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
