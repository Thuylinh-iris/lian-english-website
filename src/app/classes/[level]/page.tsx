import { courseData } from "@/data/courses";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { Target, Star, Sparkles, Clock, Users, FileEdit, BookOpen, Info, Lightbulb, Shield, TrendingUp, CheckCircle2, ArrowRight, Award } from "lucide-react";

type Props = {
    params: Promise<{ level: string }>
};

// @ts-ignore (Next.js 15 has changes to params but this is standard pattern)
export default async function ClassPage({ params }: Props) {
    const resolvedParams = await params;
    const level = resolvedParams.level.toLowerCase();

    if (!(level in courseData)) {
        notFound();
    }

    const course = courseData[level as keyof typeof courseData];

    return (
        <div className={styles.classPage}>
            {/* Hero with Vision Preview */}
            <section className={`${styles.classHero} section`}>
                <div className="container">
                    <div className={`${styles.heroContent} animate-fade-in`}>
                        <div className={styles.badge} style={{ backgroundColor: course.levelColor }}>
                            Level {level.toUpperCase()}
                        </div>
                        <h1 className={styles.title}>{course.title}</h1>
                        <p className={styles.subtitle}>{course.subtitle}</p>

                        {/* Vision Preview */}
                        {course.vision && (
                            <div className={styles.visionPreview}>
                                <h3 className={styles.visionTitle}>Sau khi hoàn thành khóa học:</h3>
                                <ul className={styles.outcomesList}>
                                    {course.vision.outcomes.map((outcome, idx) => (
                                        <li key={idx} className={styles.outcome}>
                                            <CheckCircle2 size={20} strokeWidth={2.5} className={styles.outcomeIcon} />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Barrier Section */}
            {course.barrier && course.bridge && (
                <section className="section section-alt">
                    <div className="container">
                        <div className={`${styles.barrierSection} animate-slide-in-up`}>
                            <div className={styles.barrierHeader}>
                                <h2 className={styles.barrierTitle}>Rào Cản Bạn Đang Gặp Phải?</h2>
                                <p className={styles.barrierSubtitle}>{course.barrier.name}</p>
                            </div>

                            <div className={styles.barrierContent}>
                                <div className={styles.barrierBlock}>
                                    <div className={styles.blockIcon} style={{ color: 'var(--color-navy)' }}>
                                        <Shield size={32} strokeWidth={1.5} />
                                    </div>
                                    <p>{course.barrier.description}</p>
                                </div>

                                <div className={styles.bridgeBlock} style={{ backgroundColor: course.levelColor }}>
                                    <div className={styles.bridgeLabel}>{course.bridge.name}</div>
                                    <p className={styles.bridgeText}>{course.bridge.solution}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Content */}
            <section className="section section-alt">
                <div className={`container ${styles.grid} `}>

                    <div className={styles.mainContent}>
                        {course.description && (
                            <div className={styles.contentBlock}>
                                <h2><Info size={24} className={styles.sectionIcon} /> Giới thiệu chi tiết</h2>
                                <div className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: course.description }} />
                            </div>
                        )}

                        {course.methodology && (
                            <div className={styles.contentBlock}>
                                <h2><Lightbulb size={24} className={styles.sectionIcon} /> Phương pháp học tập độc đáo</h2>
                                <div className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: course.methodology }} />
                            </div>
                        )}

                        <div className={styles.contentBlock}>
                            <h2><Target size={24} className={styles.sectionIcon} /> Khóa học này dành cho ai?</h2>
                            <p className={styles.descriptionText}>{course.students}</p>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2><Star size={24} className={styles.sectionIcon} /> Mục tiêu đầu ra</h2>
                            <ul className={styles.list}>
                                {course.goals.map((goal, idx) => (
                                    <li key={idx}>{goal}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2><Sparkles size={24} className={styles.sectionIcon} /> Đặc điểm nổi bật</h2>
                            <ul className={styles.list}>
                                {course.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {course.syllabus && course.syllabus.length > 0 && (
                            <div className={styles.contentBlock}>
                                <h2><BookOpen size={24} className={styles.sectionIcon} /> Lộ trình học tập ({course.syllabus.length} {level === 'a1' ? 'Tuần' : 'Chặng'})</h2>
                                <div className={styles.syllabusList}>
                                    {course.syllabus.map((week, idx) => (
                                        <div key={idx} className={styles.syllabusItem}>
                                            <h3 className={styles.weekTitle}>{week.title}</h3>
                                            <ul className={styles.topicList}>
                                                {week.topics.map((topic, tIdx) => (
                                                    <li key={tIdx}>{topic}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.stickyCard}>
                            <h3>Thông Tin Khóa Học</h3>
                            <div className={styles.infoItem}>
                                <span className={styles.infoSpan}><Clock size={18} className={styles.infoIcon} /> Thời lượng:</span>
                                <strong>{course.duration}</strong>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoSpan}><Users size={18} className={styles.infoIcon} /> Sĩ số:</span>
                                <strong>4-6 học viên</strong>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoSpan}><FileEdit size={18} className={styles.infoIcon} /> Đầu vào:</span>
                                <strong>Cần Test Trình Độ</strong>
                            </div>

                            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                                <Button href="/test" fullWidth className={styles.ctaBtn}>
                                    Đăng Ký Test & Tư Vấn
                                </Button>
                                <p style={{ fontSize: '13px', color: 'var(--color-text-light)', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>
                                    hoặc
                                </p>
                                <a
                                    href="https://m.me/405160506005369"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        padding: '12px 20px',
                                        background: '#25D366',
                                        color: 'white',
                                        textAlign: 'center',
                                        borderRadius: 'var(--radius-md)',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        textDecoration: 'none',
                                        transition: 'background 0.3s ease'
                                    }}
                                >
                                    💬 Chat qua Messenger
                                </a>
                            </div>

                            <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid #10b981' }}>
                                <p style={{ fontSize: '13px', color: 'var(--color-text)', margin: 0, lineHeight: '1.5' }}>
                                    <strong>Cam kết:</strong> Hoàn tiền 100% trong 2 tuần đầu nếu không phù hợp
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export function generateStaticParams() {
    return [
        { level: 'a1' },
        { level: 'a2' },
        { level: 'a2-plus' },
        { level: 'b1' },
    ];
}
