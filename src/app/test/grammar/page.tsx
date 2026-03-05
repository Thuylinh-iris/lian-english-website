"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../listening/page.module.css";
import { test1Questions } from "@/data/testQuestions";

export default function GrammarSection() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(30).fill(-1));

  const questions = test1Questions.grammar;

  useEffect(() => {
    const saved = localStorage.getItem("grammarAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    localStorage.setItem("grammarAnswers", JSON.stringify(newAnswers));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem("grammarAnswers", JSON.stringify(answers));
      router.push("/test/vocabulary");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Section 2: Grammar</h1>
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
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(97 + index)}
              </span>
              {option}
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
          {currentQuestion === questions.length - 1 ? "Next Section →" : "Next →"}
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
