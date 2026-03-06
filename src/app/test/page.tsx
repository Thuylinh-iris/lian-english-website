"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Headphones, BookOpen, Mic, PenTool, Lightbulb, Mail } from "lucide-react";

export default function TestWelcomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/test/listening");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Bài Kiểm Tra Trình Độ</h1>

        <p className={styles.description}>
          Bài test này giúp chúng tôi xếp bạn vào lớp phù hợp. 
          Thời gian hoàn thành khoảng <strong>60 phút</strong>.
        </p>

        <div className={styles.sections}>
          <h3 className={styles.sectionTitle}>Các phần bài test:</h3>
          <ul className={styles.sectionList}>
            <li>
              <Headphones size={18} className={styles.icon} />
              <div>
                <strong>Nghe</strong>
                <span>20 câu hỏi (audio)</span>
              </div>
            </li>
            <li>
              <BookOpen size={18} className={styles.icon} />
              <div>
                <strong>Ngữ pháp</strong>
                <span>30 câu hỏi</span>
              </div>
            </li>
            <li>
              <BookOpen size={18} className={styles.icon} />
              <div>
                <strong>Từ vựng</strong>
                <span>20 câu hỏi</span>
              </div>
            </li>
            <li>
              <BookOpen size={18} className={styles.icon} />
              <div>
                <strong>Đọc hiểu</strong>
                <span>10 câu hỏi (3 bài đọc)</span>
              </div>
            </li>
            <li>
              <Mic size={18} className={styles.icon} />
              <div>
                <strong>Nói</strong>
                <span>2 bài (ghi âm audio)</span>
              </div>
            </li>
            <li>
                <PenTool size={18} className={styles.icon} />
              <div>
                <strong>Viết</strong>
                <span>1 bài (tùy chọn, 30 phút)</span>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.tips}>
          <h3>
            <Lightbulb size={20} className={styles.icon} />
            Lưu ý:
          </h3>
          <ul>
            <li>Tìm nơi yên tĩnh để tập trung</li>
            <li>Sử dụng tai nghe cho phần nghe</li>
            <li>Có thể nghỉ giữa các phần</li>
            <li>Trả lời trung thực - không có trình độ "đúng" hay "sai"</li>
          </ul>
        </div>

        <div className={styles.note}>
          <Mail size={18} className={styles.icon} />
          <p>
            <strong>Lưu ý:</strong> Bạn cần cung cấp email để nhận kết quả.
          </p>
        </div>

        <button className={styles.startButton} onClick={handleStart}>
          Bắt đầu bài test →
        </button>

        <p className={styles.privacy}>
          Bằng cách bắt đầu bài test này, bạn đồng ý nhận email từ Lian English. 
          Bạn có thể hủy đăng ký bất kỳ lúc nào.
        </p>
      </div>
    </div>
  );
}
