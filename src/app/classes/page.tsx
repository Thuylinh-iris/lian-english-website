import { courseData } from "@/data/courses";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import { ArrowRight, Users, Clock, CheckCircle2, Target } from "lucide-react";

export default function ClassesPage() {
    const courses = [
        { level: 'a1', data: courseData['a1'], color: '#0F2039' },
        { level: 'a2', data: courseData['a2'], color: '#0F2039' },
        { level: 'a2-plus', data: courseData['a2-plus'], color: '#B8860B' },
        { level: 'b1', data: courseData['b1'], color: '#B8860B' },
    ];

    return (
        <div className={styles.classesPage}>
            {/* Hero */}
            <section className={`${styles.hero} section`}>
                <div className="container">
                    <div className={`${styles.heroContent} animate-fade-in`}>
                        <Target className={styles.heroIcon} size={48} strokeWidth={1.5} />
                        <h1>Lộ Trình Học Tập</h1>
                        <p className={styles.heroSubtitle}>
                            Tìm khóa học phù hợp với trình độ và mục tiêu của bạn. Mỗi cấp độ giải quyết một nút thắt riêng biệt.
                        </p>
                    </div>
                </div>
            </section>

            {/* Course Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.coursesGrid}>
                        {courses.map((course, index) => (
                            <div
                                key={course.level}
                                className={`${styles.courseCard} animate-slide-in-up`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={styles.courseHeader} style={{ backgroundColor: course.color }}>
                                    <div className={styles.levelBadge}>Level {course.level.toUpperCase()}</div>
                                    <h2 className={styles.courseTitle}>{course.data.title}</h2>
                                    <p className={styles.courseSubtitle}>{course.data.subtitle}</p>
                                </div>

                                <div className={styles.courseBody}>
                                    {/* Quick Info */}
                                    <div className={styles.quickInfo}>
                                        <div className={styles.infoItem}>
                                            <Clock size={18} className={styles.infoIcon} />
                                            <span>{course.data.duration}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <Users size={18} className={styles.infoIcon} />
                                            <span>4-6 học viên</span>
                                        </div>
                                    </div>

                                    {/* Barrier Preview */}
                                    {course.data.barrier && (
                                        <div className={styles.barrierPreview}>
                                            <h3 className={styles.barrierTitle}>Rào cản bạn gặp phải:</h3>
                                            <p className={styles.barrierText}>{course.data.barrier.description}</p>
                                        </div>
                                    )}

                                    {/* Bridge Preview */}
                                    {course.data.bridge && (
                                        <div className={styles.bridgePreview}>
                                            <h3 className={styles.bridgeTitle}>Cách Lian giúp bạn:</h3>
                                            <p className={styles.bridgeText}>{course.data.bridge.solution}</p>
                                        </div>
                                    )}

                                    {/* Key Outcomes */}
                                    {course.data.vision && (
                                        <div className={styles.outcomesPreview}>
                                            <h3 className={styles.outcomesTitle}>Sau khi hoàn thành:</h3>
                                            <ul className={styles.outcomesList}>
                                                {course.data.vision.outcomes.slice(0, 2).map((outcome, idx) => (
                                                    <li key={idx} className={styles.outcomeItem}>
                                                        <CheckCircle2 size={16} className={styles.outcomeIcon} />
                                                        <span>{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <div className={styles.cardActions}>
                                        <Link href={`/classes/${course.level}`} className={styles.learnMoreBtn}>
                                            Tìm hiểu thêm <ArrowRight size={18} />
                                        </Link>
                                        <Link href="/test" className={styles.testBtn}>
                                            Test trình độ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Not Sure Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className={styles.notSureSection}>
                        <h2 className={styles.notSureTitle}>Không Chắc Mình Thuộc Cấp Độ Nào?</h2>
                        <p className={styles.notSureText}>
                            Đừng lo! Bài test trình độ miễn phí sẽ giúp bạn xác định chính xác vị trí hiện tại và gợi ý lộ trình phù hợp nhất.
                        </p>
                        <div className={styles.notSureActions}>
                            <Button href="/test" className={styles.primaryBtn}>
                                Kiểm Tra Trình Độ Miễn Phí
                            </Button>
                            <p className={styles.notSureNote}>
                                Chỉ mất 2-3 phút • Không cần đăng ký trước • Kết quả ngay lập tức
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section">
                <div className="container">
                    <div className={styles.comparisonSection}>
                        <h2 className={styles.comparisonTitle}>So Sánh Các Cấp Độ</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.comparisonTable}>
                                <thead>
                                    <tr>
                                        <th>Cấp Độ</th>
                                        <th>Rào Cản Chính</th>
                                        <th>Kết Quả Sau Khóa</th>
                                        <th>Dành Cho Ai</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong style={{ color: '#0F2039' }}>A1</strong></td>
                                        <td>Sợ mở miệng, nghĩ mình "mất gốc"</td>
                                        <td>Tự tin giới thiệu bản thân từ ngày 3</td>
                                        <td>Người mới bắt đầu hoặc mất gốc</td>
                                    </tr>
                                    <tr>
                                        <td><strong style={{ color: '#0F2039' }}>A2</strong></td>
                                        <td>Thói quen dịch thầm trong đầu</td>
                                        <td>Ngắt nghỉ đúng, diễn đạt mượt mà</td>
                                        <td>Có vốn từ nhưng không phản xạ</td>
                                    </tr>
                                    <tr>
                                        <td><strong style={{ color: '#B8860B' }}>A2+</strong></td>
                                        <td>Trả lời ngắn, không kéo dài được</td>
                                        <td>Kể chuyện 2-3 phút cuốn hút</td>
                                        <td>Giao tiếp được nhưng thiếu chiều sâu</td>
                                    </tr>
                                    <tr>
                                        <td><strong style={{ color: '#B8860B' }}>B1</strong></td>
                                        <td>Khó thảo luận chuyên sâu</td>
                                        <td>Bảo vệ quan điểm tự tin</td>
                                        <td>Đi làm trong môi trường quốc tế</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Quick */}
            <section className="section section-alt">
                <div className="container">
                    <div className={styles.faqSection}>
                        <h2 className={styles.faqTitle}>Câu Hỏi Thường Gặp</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>Tôi có cần test trình độ trước không?</h3>
                                <p>Có! Bài test giúp chúng tôi hiểu trình độ thực tế của bạn và gợi ý lộ trình phù hợp nhất. Bạn có thể làm test miễn phí tại đây.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Lớp học bao nhiêu người?</h3>
                                <p>Lớp siêu nhỏ chỉ 4-6 học viên. Điều này đảm bảo mọi người đều có cơ hội nói và giáo viên chú ý từng người.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Tôi có được hoàn tiền nếu không phù hợp?</h3>
                                <p>Có! Chúng tôi cam kết hoàn tiền 100% trong 2 tuần đầu nếu bạn không hài lòng với phương pháp học.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Giáo viên có bằng cấp gì?</h3>
                                <p>100% giáo viên có chứng chỉ TESOL quốc tế và kinh nghiệm giảng dạy thực tế trong môi trường đa quốc gia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Sẵn Sàng Bắt Đầu?</h2>
                        <p className={styles.ctaText}>
                            Đừng để nỗi sợ cản trở cơ hội của bạn. Hãy để Lian English giúp bạn xây dựng phản xạ bài bản để tự tin giao tiếp tiếng Anh.
                        </p>
                        <div className={styles.ctaActions}>
                            <Button href="/test" className={styles.primaryBtn}>
                                Test Trình Độ Miễn Phí
                            </Button>
                            <Button href="https://m.me/405160506005369" className={styles.secondaryBtn}>
                                Chat Với Chúng Tôi
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
