"use client";
import React from "react";
import styles from "./WhatsAppButton.module.css";

export default function FacebookButton() {
    const messengerUrl = "https://m.me/Lianenglish.fluencybeyondtests";

    return (
        <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            aria-label="Chat via Facebook Messenger"
        >
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
            </svg>
            <span className={styles.tooltip}>Chat với chúng tôi</span>
        </a>
    );
}
