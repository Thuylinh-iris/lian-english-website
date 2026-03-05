import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.footerBrand}>
                    <div className={styles.logo}>
                        <div className={styles.logoImage}></div>
                        <span className={styles.logoText}>Lian English</span>
                    </div>
                    <p className={styles.footerDescription}>
                        Hành trình xây dựng nền tảng tiếng Anh vững chắc từ A1 tới B1. Học thực chất, dùng thực tế!
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com/lianenglish1" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.footerLinks}>
                    <h4 className={styles.footerTitle}>Khóa Học</h4>
                    <ul>
                        <li><Link href="/classes/a1">Communicate A1</Link></li>
                        <li><Link href="/classes/a2">Communicate A2</Link></li>
                        <li><Link href="/classes/a2-plus">Communicate A2+</Link></li>
                        <li><Link href="/classes/b1">Communicate B1</Link></li>
                    </ul>
                </div>

                <div className={styles.footerLinks}>
                    <h4 className={styles.footerTitle}>Thông Tin</h4>
                    <ul>
                        <li><Link href="/#about">Về Lian</Link></li>
                        <li><Link href="/#philosophy">Triết lý đào tạo</Link></li>
                        <li><Link href="/#team">Đội ngũ giáo viên</Link></li>
                        <li><Link href="/test">Kiểm tra trình độ</Link></li>
                    </ul>
                </div>

                <div className={styles.footerContact}>
                    <h4 className={styles.footerTitle}>Liên Hệ</h4>
                    <p><MapPin size={18} className={styles.footerIcon} /> Học online toàn quốc</p>
                    <p><Phone size={18} className={styles.footerIcon} /> Hỗ trợ: <a href="m.me/405160506005369" target="_blank" rel="noreferrer">Nhắn tin Messenger</a></p>
                    <p><Mail size={18} className={styles.footerIcon} /> Email: info.lianenglish@gmail.com</p>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className="container">
                    <p>&copy; {currentYear} Lian English. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
