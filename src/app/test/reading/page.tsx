"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../listening/page.module.css";
import { test1Questions } from "@/data/testQuestions";

export default function ReadingSection() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));
  const [selectedText, setSelectedText] = useState(0);

  const questions = test1Questions.reading;

  useEffect(() => {
    const saved = localStorage.getItem("readingAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
    localStorage.setItem("readingAnswers", JSON.stringify(newAnswers));
  };

  const handleNextSection = () => {
    localStorage.setItem("readingAnswers", JSON.stringify(answers));
    router.push("/test/speaking");
  };

  // Get reading text for current question
  const getReadingText = (questionId: number) => {
    if (questionId >= 71 && questionId <= 73) {
      return {
        title: "Parking Notice",
        text: `From: Parking office
To: All workers in building 45

Starting tomorrow, the office car park will close for two weeks. We need to fix the car park floor. We will also draw new lines to add twenty more parking spaces.

For the next two weeks, you can park your car in the car park on the corner of High and 1st Street. It is the car park next to the Crowne Plaza Hotel. Show your company ID card, and you can park for free.

You can also park on High Street from 9 am to 5 pm. But please remember, you cannot park on 1st Street. If you have any questions, please call the parking office at 020-9809-9090.`
      };
    } else if (questionId >= 74 && questionId <= 76) {
      return {
        title: "Cornwall Travel Guide",
        text: `I have lived and worked in Cornwall for most of my life. It is a very special place, and I am lucky to have spent most of my life in this beautiful area. I enjoy sharing with you my favourite places to go in Cornwall. My goal with this website is to give you helpful information about our community.

MUSEUMS: There are more than 70 museums in Cornwall. This page gives you a list of all the museums, their addresses, phone numbers, the times they open and close, and ticket prices.

SLEEP: You can find a list of all the hotels in the area on this page. There is also a list of private houses to rent. You can look through all the listings and make reservations directly on this page.

SWIM: This page includes information about all the beaches in the area. Most beaches are great for swimming, but some are dangerous — so read the rules on this page carefully. You can also find information about parking, food, and activities here.

I invite you to check back often as I share new information for the season. I hope you have a wonderful time during your visit to Cornwall.`
      };
    } else {
      return {
        title: "The Wright Brothers",
        text: `Wilbur and Orville Wright were the American inventors of the first aeroplane. Wilbur was the older of the two brothers, and they always had a close relationship. Their father, Milton Wright, often travelled for work, and he liked to bring back small toys for his children. When Wilbur was 11 years old, Milton brought a model aeroplane for his boys. The plane was made of wood and paper, and the brothers loved playing with it.

As adults, Wilbur and Orville continued to be interested in mechanics and the technology behind how things work. In the 1890s, bicycles became popular in the country. The brothers were good at fixing bicycles and began selling their own designs. They also studied the work of German flyer Otto Lilienthal. But when Lilienthal died in a flying accident, the brothers decided to start their own experiments with flying. They studied birds and how they used their wings to control their flying. They used a similar idea to invent their first plane, and on 17 December 1903, they succeeded. They flew the plane in the air for 59 seconds.

Many people, however, did not believe the brothers really flew an aeroplane. It had never been done before, and the American people didn't think flying was possible. At that time, Europe was more open to new ideas. So, the brothers moved to Europe in 1908 and spent the next few years trying to sell their aeroplanes. It took Wilbur and Orville many years after their first flight to become famous, but their first 59-second flight changed the history of the world forever.`
      };
    }
  };

  const readingText = getReadingText(questions[0].id);

  const answeredCount = answers.filter(a => a !== -1).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Section 4: Reading</h1>
        <div className={styles.progress}>
          Answered {answeredCount} of {questions.length} questions
        </div>
      </div>

      <div className={styles.readingText}>
        <h3>{readingText.title}</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{readingText.text}</p>
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
          Next Section → Speaking
        </button>
      </div>
    </div>
  );
}
