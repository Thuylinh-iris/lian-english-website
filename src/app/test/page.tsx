"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function TestWelcomePage() {
  const router = useRouter();
  const [experience, setExperience] = useState<string>("");

  const handleStart = () => {
    // All students take Test 1 (A1-B1) since we don't offer B1-B2+ courses
    router.push("/test/listening");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Placement Test</h1>

        <div className={styles.info}>
          <p className={styles.description}>
            This test helps us place you in the right class level. It takes
            about <strong>60 minutes</strong> to complete.
          </p>

          <div className={styles.sections}>
            <h3>Test Sections:</h3>
            <ul>
              <li>
                <strong>Listening</strong> - 20 questions (audio)
              </li>
              <li>
                <strong>Grammar</strong> - 30 questions
              </li>
              <li>
                <strong>Vocabulary</strong> - 20 questions
              </li>
              <li>
                <strong>Reading</strong> - 10 questions (3 passages)
              </li>
              <li>
                <strong>Speaking</strong> - 2 tasks (audio recording)
              </li>
              <li>
                <strong>Writing</strong> - 1 task (optional, 30 minutes)
              </li>
            </ul>
          </div>

          <div className={styles.tips}>
            <h3>📋 Tips:</h3>
            <ul>
              <li>Find a quiet place where you can focus</li>
              <li>Use headphones for the listening section</li>
              <li>You can take breaks between sections</li>
              <li>Answer honestly - there are no "right" or "wrong" levels</li>
            </ul>
          </div>

          <div className={styles.note}>
            <p>
              <strong>Note:</strong> Your email will be required at the end to
              receive your results.
            </p>
          </div>
        </div>

        <button className={styles.startButton} onClick={handleStart}>
          Start Test →
        </button>

        <p className={styles.privacy}>
          By starting this test, you agree to receive email communications from
          Lian English. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
