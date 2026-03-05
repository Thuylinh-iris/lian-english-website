"use client";
import React, { useState } from "react";
import styles from "./PlacementTest.module.css";
import Button from "./Button";
import { Target, Mail, CheckCircle2, Loader2 } from "lucide-react";

// CEFR-Aligned Placement Test Questions
const testQuestions = [
    {
        id: 1,
        question: "Chào buổi sáng! Bạn sẽ đáp lại thế nào khi ai đó hỏi: 'How are you?'",
        questionEn: "Good morning! How do you respond when someone asks: 'How are you?'",
        options: ["I am doing doctor.", "I am fine, thank you. And you?", "Pretty good, thanks! How about yourself?", "What?"],
        correctWeight: [0, 1, 2, 0] // 0=incorrect, 1=basic, 2=advanced
    },
    {
        id: 2,
        question: "Câu nào ĐÚNG ngữ pháp?",
        questionEn: "Which sentence is grammatically CORRECT?",
        options: ["She don't like coffee.", "She doesn't likes coffee.", "She doesn't like coffee.", "She not like coffee."],
        correctWeight: [0, 0, 2, 0]
    },
    {
        id: 3,
        question: "Hôm qua tôi _____ đến siêu thị.",
        questionEn: "Yesterday I _____ to the supermarket.",
        options: ["go", "goed", "went", "gone"],
        correctWeight: [0, 0, 2, 0]
    },
    {
        id: 4,
        question: "Nếu tôi _____ giàu, tôi sẽ đi du lịch khắp thế giới.",
        questionEn: "If I _____ rich, I would travel the world.",
        options: ["am", "was", "were", "been"],
        correctWeight: [0, 1, 2, 0]
    },
    {
        id: 5,
        question: "Bạn tự đánh giá khả năng Giao tiếp (Nghe - Nói) của mình ở mức độ nào?",
        questionEn: "How would you rate your Speaking and Listening skills?",
        options: [
            "Chưa biết gì / Mất gốc hoàn toàn",
            "Biết từ vựng nhưng không phản xạ được khi cần nói",
            "Hiểu người khác nói nhưng ngắc ngứ khi cần trả lời",
            "Giao tiếp cơ bản tốt nhưng thiếu từ vựng chuyên sâu"
        ],
        correctWeight: [1, 2, 3, 4]
    }
];

export default function PlacementTest() {
    const [currentStep, setCurrentStep] = useState<"start" | "quiz" | "lead_capture" | "calculating" | "result">("start");
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);

    // Lead info
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [apiResult, setApiResult] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const startTest = () => setCurrentStep("quiz");

    const handleAnswer = (weight: number) => {
        setAnswers(prev => [...prev, weight]);
        if (currentQuestionIdx < testQuestions.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
        } else {
            // Show lead capture form instead of calculating immediately
            setCurrentStep("lead_capture");
        }
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName || !userEmail) return;

        setIsSubmitting(true);
        setCurrentStep("calculating");

        try {
            const response = await fetch('/api/submit-test', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    answers: answers
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setApiResult(data.result);
            } else {
                console.error("API error:", data.error);
                setApiResult(getRecommendedLevelFallback(answers));
            }
        } catch (error) {
            console.error("Failed to submit:", error);
            setApiResult(getRecommendedLevelFallback(answers));
        } finally {
            setCurrentStep("result");
            setIsSubmitting(false);
        }
    };

    const getRecommendedLevelFallback = (ansArr: number[]) => {
        const score = ansArr.reduce((a, b) => a + b, 0);
        if (score <= 3) return { level: "A1", course: "Communicate with Confidence A1", desc: "Phù hợp cho người mới bắt đầu hoặc mất gốc hoàn toàn." };
        if (score <= 6) return { level: "A2", course: "Communicate with Confidence A2", desc: "Xây dựng phản xạ cơ bản, phù hợp nếu bạn đã có nền tảng từ vựng nhưng chưa dám nói." };
        if (score <= 8) return { level: "A2+", course: "Communicate with Confidence A2+", desc: "Nâng cao khả năng diễn đạt dài và tự nhiên hơn." };
        return { level: "B1", course: "Communicate with Confidence B1", desc: "Sử dụng tiếng Anh linh hoạt trong công việc và đời sống hàng ngày." };
    };

    return (
        <div className={styles.testContainer} id="test">
            {currentStep === "start" && (
                <div className={`${styles.stepCard} animate-fade-in`}>
                    <Target size={48} className={styles.iconWrapper} />
                    <h3>Kiểm tra Trình độ Nhanh</h3>
                    <p>Bài test 5 câu (Mẫu) giúp AI phân tích thói quen ngôn ngữ và định vị trình độ hiện tại của bạn.</p>
                    <Button onClick={startTest} className={styles.startBtn}>Bắt đầu bài Test</Button>
                </div>
            )}

            {currentStep === "quiz" && (
                <div className={`${styles.stepCard} animate-fade-in`}>
                    <div className={styles.progress}>
                        <span>Câu {currentQuestionIdx + 1} / {testQuestions.length}</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${((currentQuestionIdx + 1) / testQuestions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <h3 className={styles.questionText}>{testQuestions[currentQuestionIdx].question}</h3>

                    <div className={styles.optionsList}>
                        {testQuestions[currentQuestionIdx].options.map((opt, idx) => (
                            <button
                                key={idx}
                                className={styles.optionBtn}
                                onClick={() => handleAnswer(testQuestions[currentQuestionIdx].correctWeight[idx])}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {currentStep === "lead_capture" && (
                <div className={`${styles.stepCard} animate-fade-in`}>
                    <Mail size={48} className={styles.iconWrapper} />
                    <h3>Hoàn thành bài test!</h3>
                    <p>Nhập thông tin để hệ thống gửi báo cáo đánh giá và lộ trình học vào email của bạn.</p>

                    <form onSubmit={handleLeadSubmit} className={styles.leadForm}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Họ và tên</label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Ví dụ: Nguyễn Văn A"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email nhận kết quả</label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="Ví dụ: email@gmail.com"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>

                        <Button fullWidth className={styles.submitLeadBtn} variant="primary">
                            {isSubmitting ? "Đang xử lý..." : "Nhận Kết Quả Ngay"}
                        </Button>
                        <p className={styles.privacyNote}>* Chúng tôi cam kết bảo mật thông tin của bạn.</p>
                    </form>
                </div>
            )}

            {currentStep === "calculating" && (
                <div className={`${styles.stepCard} animate-fade-in`}>
                    <Loader2 size={48} className={styles.loaderIcon} />
                    <h3>Đang chấm điểm & Gửi Email...</h3>
                    <p>Hệ thống AI đang phân tích dữ liệu và khởi tạo lộ trình học tối ưu nhất cho bạn.</p>
                </div>
            )}

            {currentStep === "result" && (() => {
                const result = apiResult || getRecommendedLevelFallback(answers);
                return (
                    <div className={`${styles.stepCard} animate-fade-in`}>
                        <div className={styles.resultBadge}>Level {result.level}</div>
                        <h3>Kết quả Phân tích</h3>
                        <p className={styles.resultDesc}>{result.desc}</p>

                        <div className={styles.recommendation}>
                            <span>Khóa học phù hợp với bạn:</span>
                            <strong>{result.course}</strong>
                        </div>

                        <div className={styles.emailConfirmedMsg}>
                            <CheckCircle2 size={24} className={styles.checkIcon} /> Biên bản chi tiết đã được gửi vào hòm thư <strong>{userEmail}</strong>.
                        </div>

                        <div className={styles.resultActions}>
                            <Button href="/test" onClick={() => window.location.reload()} variant="outline">Làm Lại</Button>
                            <Button href={`/classes/${result.level.toLowerCase().replace('+', '-plus')}`}>Xem Lộ Trình Lớp {result.level}</Button>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
}
