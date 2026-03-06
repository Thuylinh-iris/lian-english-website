"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { test1Questions } from "@/data/testQuestions";
import { Headphones } from "lucide-react";

export default function ListeningSection() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(Array(20).fill(-1));
  const [audioPlayed, setAudioPlayed] = useState(false);

  const questions = test1Questions.listening;

  useEffect(() => {
    const saved = localStorage.getItem("listeningAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
    localStorage.setItem("listeningAnswers", JSON.stringify(newAnswers));
  };

  const handleNextSection = () => {
    localStorage.setItem("listeningAnswers", JSON.stringify(answers));
    router.push("/test/grammar");
  };

  const answeredCount = answers.filter(a => a !== -1).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Phần 1: Nghe</h1>
        <div className={styles.progress}>
          Đã trả lời {answeredCount} / {questions.length} câu
        </div>
      </div>

      <div className={styles.audioSection}>
        <h3>
          <Headphones size={20} />
          Hướng dẫn nghe
        </h3>
        <p>
          Nhấn nút play để bắt đầu nghe. Bạn sẽ nghe các cuộc hội thoại và bài nói,
          sau đó trả lời các câu hỏi về chúng.
        </p>
        <audio
          controls
          onEnded={() => setAudioPlayed(true)}
          className={styles.audioPlayer}
        >
          <source
            src="/audio/placement-test-listening.mp3"
            type="audio/mpeg"
          />
          Trình duyệt của bạn không hỗ trợ phát audio.
        </audio>
        {!audioPlayed && (
          <div className={styles.audioNote}>
            Vui lòng nghe audio trước khi trả lời câu hỏi.
          </div>
        )}
      </div>

      <div className={styles.progressIndicator}>
        <div
          className={styles.progressBar}
          style={{
            width: `${(answeredCount / questions.length) * 100}%`,
          }}
        />
      </div>

      <div className={styles.questionsList}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className={styles.questionCard}>
            <div className={styles.questionNumber}>
              Câu {questionIndex + 1}
            </div>
            <div className={styles.questionText}>
              {question.question}
            </div>

            <div className={styles.options}>
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`${styles.option} ${
                    answers[questionIndex] === optionIndex ? styles.selected : ""
                  }`}
                  onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                >
                  <span className={styles.optionLetter}>
                    {String.fromCharCode(65 + optionIndex)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={handleNextSection}>
          Phần tiếp theo → Ngữ pháp
        </button>
      </div>
    </div>
  );
}
