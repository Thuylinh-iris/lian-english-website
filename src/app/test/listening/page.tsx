"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { test1Questions } from "@/data/testQuestions";

export default function ListeningSection() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(20).fill(-1));
  const [audioPlayed, setAudioPlayed] = useState(false);

  const questions = test1Questions.listening;

  useEffect(() => {
    // Load any previously saved answers
    const saved = localStorage.getItem("listeningAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    // Save to localStorage
    localStorage.setItem("listeningAnswers", JSON.stringify(newAnswers));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Save answers and move to grammar section
      localStorage.setItem("listeningAnswers", JSON.stringify(answers));
      router.push("/test/grammar");
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
        <h1>Section 1: Listening</h1>
        <div className={styles.progress}>
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      <div className={styles.audioSection}>
        <h3>🎧 Audio Instructions</h3>
        <p>
          Click play to start the audio. You will hear conversations and talks,
          then answer questions about them.
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
          Your browser does not support the audio element.
        </audio>
        {!audioPlayed && (
          <p className={styles.audioNote}>
            Please listen to the audio before answering questions.
          </p>
        )}
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
