"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../listening/page.module.css";
import { test1Questions } from "@/data/testQuestions";
import { BookOpen } from "lucide-react";

export default function ReadingSection() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));

  const questions = test1Questions.reading;

  useEffect(() => {
    const saved = localStorage.getItem("readingAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
    localStorage.setItem("readingAnswers", JSON.stringify(newAnswers));
  };

  const handleNextSection = () => {
    localStorage.setItem("readingAnswers", JSON.stringify(answers));
    router.push("/test/speaking");
  };

  // Get reading text for current question
  const getReadingText = (questionId: number) => {
    if (questionId >= 71 && questionId <= 73) {
      return {
        title: "Thông báo về bãi đậu xe",
        text: `Từ: Văn phòng bãi đậu xe
Đến: Tất cả nhân viên tòa nhà 45

Bắt đầu từ ngày mai, bãi đậu xe của văn phòng sẽ đóng cửa trong hai tuần. Chúng tôi cần sửa sàn bãi đậu xe. Chúng tôi cũng sẽ vẽ các đường kẻ mới để thêm hai mươi chỗ đậu xe.

Trong hai tuần tới, bạn có thể đậu xe ở bãi đậu xe trên góc đường High và phố 1. Đó là bãi đậu xe bên cạnh khách sạn Crowne Plaza. Cho nhân viên ID của công ty, và bạn có thể đậu xe miễn phí.

Bạn cũng có thể đậu xe trên đường High từ 9 giờ sáng đến 5 giờ chiều. Nhưng xin hãy nhớ, bạn không thể đậu xe trên phố 1. Nếu bạn có bất kỳ câu hỏi nào, vui lòng gọi cho văn phòng bãi đậu xe theo số 020-9809-9090.`
      };
    } else if (questionId >= 74 && questionId <= 76) {
      return {
        title: "Hướng dẫn du lịch Cornwall",
        text: `Tôi đã sống và làm việc ở Cornwall phần lớn cuộc đời. Đây là một nơi rất đặc biệt, và tôi may mắn khi được dành phần lớn cuộc đời mình ở vùng đất xinh đẹp này. Tôi thích chia sẻ với bạn những nơi yêu thích của tôi ở Cornwall. Mục tiêu của tôi với trang web này là cung cấp cho bạn thông tin hữu ích về cộng đồng của chúng tôi.

BẢO TÀNG: Có hơn 70 bảo tàng ở Cornwall. Trang này cung cấp cho bạn danh sách tất cả các bảo tàng, địa chỉ, số điện thoại, giờ mở và đóng cửa, và giá vé.

CHỖ NGỦ: Bạn có thể tìm thấy danh sách tất cả các khách sạn trong khu vực trên trang này. Ngoài ra còn có danh sách các nhà riêng để thuê. Bạn có thể xem qua tất cả các danh sách và đặt phòng trực tiếp trên trang này.

BỜ BIỂN: Trang này bao gồm thông tin về tất cả các bãi biển trong khu vực. Hầu hết các bãi biển đều rất tốt để bơi, nhưng một số nguy hiểm - vì vậy hãy đọc các quy tắc trên trang này cẩn thận. Bạn cũng có thể tìm thông tin về bãi đậu xe, thức ăn và các hoạt động tại đây.

Tôi mời bạn kiểm tra thường xuyên vì tôi chia sẻ thông tin mới cho mùa này. Tôi hy vọng bạn sẽ có khoảng thời gian tuyệt vời trong chuyến thăm Cornwall của mình.`
      };
    } else {
      return {
        title: "Anh em nhà Wright",
        text: `Wilbur và Orville Wright là những nhà phát minh người Mỹ về chiếc máy bay đầu tiên. Wilbur là anh cả trong hai anh em, và họ luôn có mối quan hệ thân thiết. Cha của họ, Milton Wright, thường đi công tác, và ông thích mang về những món đồ chơi nhỏ cho các con mình. Khi Wilbur 11 tuổi, Milton đã mang về một chiếc máy bay mô hình cho các con trai. Chiếc máy bay được làm bằng gỗ và giấy, và hai anh em rất thích chơi với nó.

Khi trưởng thành, Wilbur và Orville tiếp tục quan tâm đến cơ học và công nghệ đằng sau cách mọi thứ hoạt động. Vào những năm 1890, xe đạp trở nên phổ biến trong cả nước. Hai anh em giỏi về việc sửa xe đạp và bắt đầu bán các thiết kế của riêng họ. Họ cũng nghiên cứu công việc của phi công người Đức Otto Lilienthal. Nhưng khi Lilienthal chết trong một tai nạn bay, hai anh em quyết định bắt đầu các thử nghiệm bay của riêng mình. Họ nghiên cứu các loài chim và cách chúng sử dụng cánh để kiểm soát việc bay. Họ sử dụng ý tưởng tương tự để phát minh chiếc máy bay đầu tiên, và vào ngày 17 tháng 12 năm 1903, họ đã thành công. Họ bay chiếc máy bay trên không trong 59 giây.

Tuy nhiên, nhiều người không tin rằng hai anh em thực sự bay một chiếc máy bay. Điều này chưa từng được thực hiện trước đây, và người Mỹ không nghĩ rằng việc bay là có thể. Vào thời điểm đó, Châu Âu cởi mở hơn với các ý tưởng mới. Vì vậy, hai anh em chuyển đến Châu Âu vào năm 1908 và dành vài năm tiếp theo cố gắng bán máy bay của họ. Phải mất Wilbur và Orville nhiều năm sau chuyến bay đầu tiên để trở nên nổi tiếng, nhưng chuyến bay đầu tiên kéo dài 59 giây của họ đã thay đổi lịch sử thế giới mãi mãi.`
      };
    }
  };

  const readingText = getReadingText(questions[0].id);

  const answeredCount = answers.filter(a => a !== -1).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Phần 4: Đọc hiểu</h1>
        <div className={styles.progress}>
          Đã trả lời {answeredCount} / {questions.length} câu
        </div>
      </div>

      <div className={styles.readingText}>
        <h3>
          <BookOpen size={18} style={{ display: 'inline', marginRight: '8px' }} />
          {readingText.title}
        </h3>
        <p style={{ whiteSpace: 'pre-line' }}>{readingText.text}</p>
      </div>

      <div className={styles.progressIndicator}>
        <div
          className={styles.progressBar}
          style={{
            width: `${(answeredCount / questions.length) * 100}%`,
          }}
        />
      </div>

      <div className={styles.questionsList}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className={styles.questionCard}>
            <div className={styles.questionNumber}>
              Câu {questionIndex + 1}
            </div>
            <div className={styles.questionText}>
              {question.question}
            </div>

            <div className={styles.options}>
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`${styles.option} ${
                    answers[questionIndex] === optionIndex ? styles.selected : ""
                  }`}
                  onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                >
                  <span className={styles.optionLetter}>
                    {String.fromCharCode(65 + optionIndex)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={handleNextSection}>
          Phần tiếp theo → Nói
        </button>
      </div>
    </div>
  );
}
