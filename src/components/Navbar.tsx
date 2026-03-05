"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoImage}></div>
                    <span className={styles.logoText}>Lian English</span>
                </Link>

                {/* Desktop Menu */}
                <ul className={styles.navMenu}>
                    <li><Link href="/#vision">Tầm Nhìn</Link></li>
                    <li><Link href="/classes">Lộ Trình</Link></li>
                    <li><Link href="/methodology">Phương Pháp</Link></li>
                    <li><Link href="/success-stories">Câu Chuyện</Link></li>
                </ul>

                <div className={styles.navActions}>
                    <Link href="/test" className={styles.navCta}>Test Trình Độ</Link>

                    {/* Mobile Menu Toggle */}
                    <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                            {isMobileMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <ul className={styles.mobileNavList}>
                        <li><Link href="/#vision" onClick={toggleMobileMenu}>Tầm Nhìn</Link></li>
                        <li><Link href="/classes" onClick={toggleMobileMenu}>Lộ Trình</Link></li>
                        <li><Link href="/methodology" onClick={toggleMobileMenu}>Phương Pháp</Link></li>
                        <li><Link href="/success-stories" onClick={toggleMobileMenu}>Câu Chuyện</Link></li>
                        <li><Link href="/test" className={styles.mobileCta} onClick={toggleMobileMenu}>Test Trình Độ</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
