"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { calculateSectionScore, test1Questions } from "@/data/testQuestions";

export default function ResultsPage() {
  const [level, setLevel] = useState<string>("");
  const [levelName, setLevelName] = useState<string>("");
  const [scores, setScores] = useState({
    listening: 0,
    grammar: 0,
    vocabulary: 0,
    reading: 0,
  });
  const [totalScore, setTotalScore] = useState(0);
  const [recommendedClass, setRecommendedClass] = useState("");
  const [studentName, setStudentName] = useState("");
  const [speakingAssessment, setSpeakingAssessment] = useState<any>(null);

  useEffect(() => {
    // Load answers from localStorage
    const listeningAnswers = JSON.parse(localStorage.getItem("listeningAnswers") || "[]");
    const grammarAnswers = JSON.parse(localStorage.getItem("grammarAnswers") || "[]");
    const vocabularyAnswers = JSON.parse(localStorage.getItem("vocabularyAnswers") || "[]");
    const readingAnswers = JSON.parse(localStorage.getItem("readingAnswers") || "[]");
    const name = localStorage.getItem("studentName") || "";
    const speakingData = localStorage.getItem("speakingAssessment");
    
    if (speakingData) {
      setSpeakingAssessment(JSON.parse(speakingData));
    }

    setStudentName(name);

    // Calculate scores
    const listeningScore = calculateSectionScore(listeningAnswers, "listening");
    const grammarScore = calculateSectionScore(grammarAnswers, "grammar");
    const vocabularyScore = calculateSectionScore(vocabularyAnswers, "vocabulary");
    const readingScore = calculateSectionScore(readingAnswers, "reading");

    const total = listeningScore + grammarScore + vocabularyScore + readingScore;

    setScores({
      listening: listeningScore,
      grammar: grammarScore,
      vocabulary: vocabularyScore,
      reading: readingScore,
    });
    setTotalScore(total);

    // Determine level based on total score (out of 80)
    // Scoring: 0-4 Below A1, 5-35 A1, 36-56 A2, 57-68 A2+, 69-75 B1, 76-80 suggest Test 2
    let determinedLevel = "";
    let determinedLevelName = "";
    let className = "";

    if (total <= 4) {
      determinedLevel = "Below A1";
      determinedLevelName = "Beginner";
      className = "A1 Level Class";
    } else if (total <= 35) {
      determinedLevel = "A1";
      determinedLevelName = "Beginner";
      className = "A1 Level Class";
    } else if (total <= 56) {
      determinedLevel = "A2";
      determinedLevelName = "Elementary";
      className = "A2 Level Class";
    } else if (total <= 68) {
      determinedLevel = "A2+";
      determinedLevelName = "Pre-Intermediate";
      className = "A2+ Level Class";
    } else if (total <= 75) {
      determinedLevel = "B1";
      determinedLevelName = "Intermediate";
      className = "B1 Level Class";
    } else {
      determinedLevel = "B1+";
      determinedLevelName = "Upper-Intermediate";
      className = "Contact us for B1+ classes";
    }

    setLevel(determinedLevel);
    setLevelName(determinedLevelName);
    setRecommendedClass(className);

    // Submit results to API
    submitResults({
      studentName: name,
      studentEmail: localStorage.getItem("studentEmail") || "",
      listeningAnswers,
      grammarAnswers,
      vocabularyAnswers,
      readingAnswers,
      totalScore: total,
      level: determinedLevel,
    });
  }, []);

  const submitResults = async (data: any) => {
    try {
      const response = await fetch("/api/submit-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Results submitted:", result);
    } catch (error) {
      console.error("Error submitting results:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.resultsCard}>
        <div className={styles.header}>
          <h1>Your Placement Test Results</h1>
          {studentName && <p className={styles.greeting}>Great job, {studentName}!</p>}
        </div>

        <div className={styles.levelCard}>
          <div className={styles.levelBadge}>{level}</div>
          <h2 className={styles.levelName}>{levelName}</h2>
          <p className={styles.scoreText}>
            You scored <strong>{totalScore}</strong> out of <strong>80</strong> questions
          </p>
        </div>

        <div className={styles.breakdown}>
          <h3>Score Breakdown</h3>
          <div className={styles.scoreGrid}>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Listening</span>
              <span className={styles.scoreValue}>{scores.listening}/20</span>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreFill}
                  style={{ width: `${(scores.listening / 20) * 100}%` }}
                />
              </div>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Grammar</span>
              <span className={styles.scoreValue}>{scores.grammar}/30</span>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreFill}
                  style={{ width: `${(scores.grammar / 30) * 100}%` }}
                />
              </div>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Vocabulary</span>
              <span className={styles.scoreValue}>{scores.vocabulary}/20</span>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreFill}
                  style={{ width: `${(scores.vocabulary / 20) * 100}%` }}
                />
              </div>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Reading</span>
              <span className={styles.scoreValue}>{scores.reading}/10</span>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreFill}
                  style={{ width: `${(scores.reading / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {speakingAssessment && (
          <div className={styles.speakingSection}>
            <h3>🎯 Speaking Assessment</h3>
            <div className={styles.speakingLevel}>
              <span className={styles.levelBadge}>{speakingAssessment.level}</span>
              <span className={styles.speakingScore}>Score: {speakingAssessment.score}/100</span>
            </div>
            <div className={styles.transcription}>
              <h4>What you said:</h4>
              <p>"{speakingAssessment.transcription}"</p>
            </div>
            <div className={styles.feedbackGrid}>
              <div className={styles.feedbackItem}>
                <strong>Fluency:</strong> {speakingAssessment.feedback.fluency}
              </div>
              <div className={styles.feedbackItem}>
                <strong>Grammar:</strong> {speakingAssessment.feedback.grammar}
              </div>
              <div className={styles.feedbackItem}>
                <strong>Vocabulary:</strong> {speakingAssessment.feedback.vocabulary}
              </div>
              <div className={styles.feedbackItem}>
                <strong>Pronunciation:</strong> {speakingAssessment.feedback.pronunciation}
              </div>
            </div>
            <div className={styles.overallFeedback}>
              <strong>Overall:</strong> {speakingAssessment.overallFeedback}
            </div>
          </div>
        )}

        <div className={styles.recommendation}>
          <h3>Recommended Class</h3>
          <p className={styles.className}>{recommendedClass}</p>
          <p className={styles.duration}>Duration: 8 weeks</p>
          <p className={styles.startDate}>Next class starts: March 26, 2026</p>
        </div>

        <div className={styles.nextSteps}>
          <h3>What's Next?</h3>
          <ul>
            <li>✅ Check your email for detailed results</li>
            <li>📞 A Lian consultant will contact you within 24 hours</li>
            <li>📅 Book a free 15-minute consultation call</li>
            <li>🎓 Reserve your spot for the March 26 class</li>
          </ul>
        </div>

        <div className={styles.cta}>
          <a
            href="mailto:fluencybeyondtests@gmail.com"
            className={styles.emailButton}
          >
            ✉️ Email Us
          </a>
          <a
            href="https://www.facebook.com/LianEnglish"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.facebookButton}
            style={{ marginLeft: '15px' }}
          >
            📘 Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
