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
    style?: React.CSSProperties;
}

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
    fullWidth = false,
    style
}: ButtonProps) {
    const btnClass = `${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className}`;

    if (href) {
        if (href.startsWith("http")) {
            return <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass} style={style}>{children}</a>;
        }
        return <Link href={href} className={btnClass} style={style}>{children}</Link>;
    }

    return (
        <button onClick={onClick} className={btnClass} style={style}>
            {children}
        </button>
    );
}
