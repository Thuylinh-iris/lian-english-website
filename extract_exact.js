const fs = require('fs');
const path = require('path');

const dir = 'd:/code-project/AI marketing team/class-description';
const files = {
    'a1': 'communicate-confidence-a1.html',
    'a2': 'communicate-confidence-a2.html',
    'a2-plus': 'communicate-confidence-a2plus.html',
    'b1': 'communicate-confidence-b1.html'
};

const result = {};

for (const [level, file] of Object.entries(files)) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Extract methodology
    let methodMatch = content.match(/<section class="method-highlight">([\s\S]*?)<\/section>/);
    let methodology = methodMatch ? methodMatch[1].replace(/<h2>.*?<\/h2>/, '').trim() : '';

    // Extract weeks
    const syllabus = [];
    const weekRegex = /<h4 class="week-title">(.*?)<\/h4>.*?<div class="week-content">.*?<ul>(.*?)<\/ul>.*?<\/div>/gs;
    let match;
    while ((match = weekRegex.exec(content)) !== null) {
        const title = match[1].replace(/<[^>]*>?/gm, '').trim();
        const liContent = match[2];
        const liRegex = /<li>(.*?)<\/li>/g;
        const items = [];
        let liMatch;
        while ((liMatch = liRegex.exec(liContent)) !== null) {
            items.push(liMatch[1].replace(/<[^>]*>?/gm, '').trim());
        }
        syllabus.push({ title, topics: items });
    }

    // Extract target audience explicitly
    let students = '';
    let suitableMatch = content.match(/<p>Phù hợp với:<\/p>\s*<ul>([\s\S]*?)<\/ul>/) || content.match(/<p>Chương trình đặc biệt phù hợp với:<\/p>\s*<ul>([\s\S]*?)<\/ul>/);
    if (suitableMatch) {
        const liRegex = /<li>(.*?)<\/li>/g;
        let liMatch;
        let targets = [];
        while ((liMatch = liRegex.exec(suitableMatch[1])) !== null) {
            targets.push(liMatch[1].replace(/<[^>]*>?/gm, '').trim());
        }
        students = targets.join(' ');
    } else {
        // A2+ fallback
        if (level === 'a2-plus') students = "Người đã nói được câu đơn Yes/No nhưng thiếu kết nối ý tưởng. Người cần giao tiếp xã giao (Small talk) tự nhiên với đồng nghiệp/đối tác nước ngoài.";
    }

    // Extract Outcomes
    const outcomeMatch = content.match(/<h3[^>]*>Sau khi hoàn thành khóa học, bạn sẽ có thể:<\/h3>\s*<ul>([\s\S]*?)<\/ul>/);
    let goals = [];
    if (outcomeMatch) {
        const liRegex = /<li>(.*?)<\/li>/g;
        let liMatch;
        while ((liMatch = liRegex.exec(outcomeMatch[1])) !== null) {
            goals.push(liMatch[1].replace(/<[^>]*>?/gm, '').trim());
        }
    }

    // Extract intro description directly
    const descMatch = content.match(/<h2>Giới thiệu khóa học<\/h2>\s*<p>(.*?)<\/p>/s);
    let description = descMatch ? descMatch[1].replace(/<\/?strong>/g, '') : '';

    // Extract title
    const titleMatch = content.match(/<h1>(.*?)<\/h1>/);
    let title = titleMatch ? titleMatch[1] : '';

    // Extract duration
    let duration = "24 buổi";
    const durationMatch = content.match(/<span class="info-label">Thời gian:<\/span><span>(.*?)<\/span>/);
    if (durationMatch) {
        duration = durationMatch[1];
        // get the buoi info too
        const buoiMatch = content.match(/<span class="info-label">Lịch học:<\/span><span>(.*?)<\/span>/);
        const sisoMatch = content.match(/<span class="info-label">Sĩ số:<\/span><span>(.*?)<\/span>/);

        let buoi = buoiMatch ? buoiMatch[1] : "";
        if (level === 'a1') {
            duration = "12 tuần - 24 buổi học (" + buoi + ")";
        } else if (level === 'a2' || level === 'b1') {
            duration = "24 tuần - 48 buổi học (" + buoi + ")";
        }
    }

    // Fallbacks for A2+ since it doesn't have a file with these completed
    if (level === 'a2-plus') {
        title = "Communicate with Confidence A2+";
        description = "Communicate with Confidence A2+ là chương trình học tiếng Anh trực tuyến kết hợp (blended learning) chuyên sâu dành cho học viên mong muốn xây dựng kỹ năng nói dài và lập luận sắc bén hơn.";
        goals = ["Sở hữu khả năng trò chuyện xã giao (Small talk) tự nhiên.", "Biết cách giải thích chi tiết, dẫn chứng, đưa lập luận.", "Phản xạ nhanh với các tình huống giao tiếp đời sống và công việc."];
        duration = "24 tuần - 48 buổi học (2 buổi/tuần)";
        methodology = `<h3>Học tương tác + Debate</h3>
<ul>
<li><strong>Bước 1:</strong> Chuẩn bị từ vựng & ý tưởng trên nền tảng e-learning (video, bài giảng).</li>
<li><strong>Bước 2:</strong> Lớp live-class 100% tiếng Anh, tập trung thực hành phản xạ, tranh luận tình huống.</li>
</ul>`;
    }

    result[level] = {
        title,
        subtitle: title.replace("Communicate with Confidence ", "") + " " + (level === 'a1' ? "Khởi Đầu" : level === 'a2' ? "Phản Xạ" : level === 'a2-plus' ? "Kết Nối" : "Tự Tin"),
        description,
        students,
        duration,
        goals,
        methodology,
        features: [
            "Lớp học 100% tiếng Anh",
            "Nhóm nhỏ 4-6 học viên",
            "Hỗ trợ song ngữ (đối với người học còn yếu)",
            "Thực hành tương tác và debate thực tế"
        ],
        syllabus
    };
}

const fileContent = `export type CourseData = {
    title: string;
    subtitle: string;
    description: string;
    students: string;
    duration: string;
    goals: string[];
    features: string[];
    methodology: string;
    syllabus: { title: string; topics: string[] }[];
};

export const courseData: Record<string, CourseData> = ${JSON.stringify(result, null, 4)};\n`;

fs.writeFileSync('d:/code-project/AI marketing team/class-description/lian-english-web/src/data/courses.ts', fileContent);
console.log("Extraction and update complete");
