import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    href?: string;
    onClick?: () => void;
    className?: string;
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
    fullWidth = false
}: ButtonProps) {
    const btnClass = `${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className}`;

    if (href) {
        if (href.startsWith("http")) {
            return <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass}>{children}</a>;
        }
        return <Link href={href} className={btnClass}>{children}</Link>;
    }

    return (
        <button onClick={onClick} className={btnClass}>
            {children}
        </button>
    );
}
