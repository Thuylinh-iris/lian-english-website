"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function EmailCapture() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    // Save to localStorage (will be sent to server later)
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentName", name);

    // Redirect to results page
    router.push("/test/results");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>🎉</div>
        <h1 className={styles.title}>Test Complete!</h1>

        <p className={styles.description}>
          Great job! You've finished the placement test.
        </p>

        <div className={styles.benefits}>
          <h3>Get Your Results:</h3>
          <ul>
            <li>✓ Detailed level assessment</li>
            <li>✓ Class recommendations</li>
            <li>✓ Exclusive offers for new students</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Get My Results →"}
          </button>
        </form>

        <p className={styles.privacy}>
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
