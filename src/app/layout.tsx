import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lian English – Nói Tiếng Anh Tự Tin Trong 8 Tuần | Phản Xạ Bài Bản",
  description: "Bạn đã học tiếng Anh nhiều năm nhưng vẫn ngại mở miệng? Lian English giúp bạn nói tự tin trong 8 tuần với phương pháp Phản Xạ Bài Bản. Lớp siêu nhỏ 4-6 người, 100% giáo viên TESOL, hoàn tiền 100% nếu không phù hợp.",
  keywords: ["Học tiếng anh", "Lian English", "Giao tiếp tiếng anh", "Tiếng anh văn phòng", "Phản xạ tiếng anh", "Lớp học tiếng anh nhỏ", "Tiếng anh cho người mất gốc", "Tiếng anh giao tiếp"],

  // Favicon and icons
  icons: {
    icon: "/lian-english-logo.png",
    shortcut: "/lian-english-logo.png",
    apple: "/lian-english-logo.png",
  },

  // Open Graph for social sharing
  openGraph: {
    title: "Lian English – Nói Tiếng Anh Tự Tin Trong 8 Tuần",
    description: "Bạn đã học tiếng Anh nhiều năm nhưng vẫn ngại mở miệng? Lian English giúp bạn nói tự tin trong 8 tuần với phương pháp Phản Xạ Bài Bản.",
    url: "https://lianenglish.com",
    siteName: "Lian English",
    images: [
      {
        url: "/lian-english-logo.png",
        width: 1200,
        height: 630,
        alt: "Lian English - Phản Xạ Bài Bản",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Lian English – Nói Tiếng Anh Tự Tin Trong 8 Tuần",
    description: "Bạn đã học tiếng Anh nhiều năm nhưng vẫn ngại mở miệng? Lian English giúp bạn nói tự tin trong 8 tuần.",
    images: ["/lian-english-logo.png"],
  },

  // Additional meta
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
