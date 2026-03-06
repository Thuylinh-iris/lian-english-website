"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../listening/page.module.css";
import { test1Questions } from "@/data/testQuestions";

export default function GrammarSection() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(Array(30).fill(-1));

  const questions = test1Questions.grammar;

  useEffect(() => {
    const saved = localStorage.getItem("grammarAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
    localStorage.setItem("grammarAnswers", JSON.stringify(newAnswers));
  };

  const handleNextSection = () => {
    localStorage.setItem("grammarAnswers", JSON.stringify(answers));
    router.push("/test/vocabulary");
  };

  const answeredCount = answers.filter(a => a !== -1).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Section 2: Grammar</h1>
        <div className={styles.progress}>
          Answered {answeredCount} of {questions.length} questions
        </div>
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
              Question {questionIndex + 1}
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
                    {String.fromCharCode(97 + optionIndex)}
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
          Next Section → Vocabulary
        </button>
      </div>
    </div>
  );
}
