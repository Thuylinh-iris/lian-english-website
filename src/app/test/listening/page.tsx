"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { test1Questions } from "@/data/testQuestions";

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
        <h1>Section 1: Listening</h1>
        <div className={styles.progress}>
          Answered {answeredCount} of {questions.length} questions
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
          Next Section → Grammar
        </button>
      </div>
    </div>
  );
}
