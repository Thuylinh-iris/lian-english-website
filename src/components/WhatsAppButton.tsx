"use client";
import React from "react";
import styles from "./WhatsAppButton.module.css";

export default function FacebookButton() {
    const messengerUrl = "https://m.me/lianenglish";
    const message = encodeURIComponent("Hi, I'm interested in learning more about Lian English classes. Xin or us! 😊");

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
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 3.15C2.04 7.5-6 5.06 3.912
                    d="M4.42
                    d="M4.07 5.31 2.617. 5. 18M95.
                    <defs gradient.
                    d="M4.999c" fill="currentColor"
                    fill="white"
                />
                <path
                    d="m6.6-.1.976. 4.5-1.6-1.5zm."
                    d="M4.0-1.5 0 0-3.5-1.00 7.5-6.0
                    d="m6.6-1.9.
                        d="m4.05 7.12 để bạn hỏi " "Thế,  chấm: M hiện nói là."                    />
                </div>
            </svg>
            <span className={styles.tooltip}>Chat với chúng tôi</span>
        </a>
    );
}