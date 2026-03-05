"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

interface TestSubmission {
  id: string;
  name: string;
  email: string;
  level: string;
  score: number;
  date: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<TestSubmission[]>([]);

  useEffect(() => {
    // Mock data (will be replaced with actual API call)
    const mockSubmissions: TestSubmission[] = [
      {
        id: "1",
        name: "Nguyen Van A",
        email: "nguyen@email.com",
        level: "A2",
        score: 45,
        date: "2026-03-04",
      },
      {
        id: "2",
        name: "Tran Thi B",
        email: "tran@email.com",
        level: "A1",
        score: 30,
        date: "2026-03-04",
      },
    ];
    setSubmissions(mockSubmissions);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Lian English - Test Dashboard</h1>
        <p>View all placement test submissions</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{submissions.length}</div>
          <div className={styles.statLabel}>Total Submissions</div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Level</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.date}</td>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>
                  <span className={styles.levelBadge}>{submission.level}</span>
                </td>
                <td>{submission.score}/80</td>
                <td>
                  <button className={styles.viewButton}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {submissions.length === 0 && (
          <div className={styles.emptyState}>
            <p>No submissions yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
