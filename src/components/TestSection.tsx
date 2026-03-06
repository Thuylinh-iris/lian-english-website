"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./TestSection.module.css";

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface TestSectionProps {
  title: string;
  questions: Question[];
  nextRoute: string;
  storageKey: string;
}

export default function TestSection({
  title,
  questions,
  nextRoute,
  storageKey,
}: TestSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem(storageKey, JSON.stringify(answers));
      router.push(nextRoute);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = questions.length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.progress}>
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      <div className={styles.questionCard}>
        <div className={styles.questionNumber}>
          Question {currentQuestion + 1}
        </div>
        <div className={styles.questionText}>
          {questions[currentQuestion].question}
        </div>

        <div className={styles.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`${styles.option} ${
                answers[currentQuestion] === index ? styles.selected : ""
              } : 'var(--background: 0.1)'
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(97 + index)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.navigation}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>
        <button className={styles.navButton} onClick={handleNext}>
          {currentQuestion === questions.length - 1
            ? "Next Section →"
            : "Next →"
        </button>
      </div>

      <div className={styles.progressIndicator}>
        <div
          className={styles.progressBar}
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}