export type CourseData = {
    title: string;
    subtitle: string;
    description: string;
    students: string;
    duration: string;
    goals: string[];
    features: string[];
    methodology: string;
    syllabus: { title: string; topics: string[] }[];

    // NEW: Vision connection
    vision: {
        headline: string;        // "Đập Tan Nỗi Sợ - Bước Đầu Tiên"
        outcomes: string[];      // What they can achieve
        aspirationalImage: string; // Travel/career/growth imagery
    };

    // NEW: Barrier & Bridge
    barrier: {
        name: string;            // "Nỗi Sợ (Affective Filter)"
        description: string;     // What's blocking them
        symptoms: string[];      // Signs they have this barrier
    };
    bridge: {
        name: string;            // "Cây Cầu An Toàn Tâm Lý"
        solution: string;        // How Lian solves it
        keyFeatures: string[];   // 4-6 people class, 100% English, etc.
    };

    // NEW: Level identity
    levelColor: string;        // "#06B6D4" for A1
    levelIcon: string;         // "rocket" | "trending-up" | "sparkles" | "trophy"
    levelTheme: "travel" | "connection" | "growth" | "independence";
};

export const courseData: Record<string, CourseData> = {
    "a1": {
        "title": "Nói Tiếng Anh Từ Ngày Đầu Tiên",
        "subtitle": "Ngay Cả Khi Bạn Đang \"Mất Gốc\"",
        "description": "<p>Khóa học Communicate with Confidence A1 giúp bạn giao tiếp thực tế từng bước một, tháo gỡ tâm lý e ngại \"thiếu từ vựng, yếu ngữ pháp mới không dám mở miệng\".</p>\n<h3 style=\"color: #0F2039; margin-top: 15px;\">Những rào cản tâm lý thường gặp</h3>\n<p>Nhiều người học thường mang theo suy nghĩ: <strong>\"Mình phải có đủ từ vựng và ngữ pháp thì mới dám mở miệng nói.\"</strong></p>\n<ul>\n<li><strong>Cảm giác chưa bắt đầu được</strong> – Bạn e ngại bị đánh giá khi lỡ nói sai.</li>\n<li><strong>Chờ đợi sự hoàn hảo</strong> – Bạn muốn học đủ từ, nhưng hiếm khi cảm thấy \"đủ\".</li>\n<li><strong>Học ngữ pháp thụ động</strong> – Nắm chắc lý thuyết trên giấy, nhưng lại lúng túng khi cần phản xạ thực tế.</li>\n</ul>",
        "students": "Người lớn mất gốc tiếng Anh, sợ sai, sợ bị đánh giá. Người học nhiều phương pháp nhưng không giao tiếp được, phản xạ chậm. Người bận rộn cần môi trường luyện nói trong lớp.",
        "duration": "12 tuần - 24 buổi học (2 buổi/tuần, 90 phút/buổi)",
        "goals": [
            "Chào hỏi, giới thiệu bản thân, gia đình và bạn bè.",
            "Hỏi và trả lời thông tin cá nhân, mua sắm, hỏi đường.",
            "Tham gia đối thoại ngắn về thói quen hàng ngày, sở thích, sức khỏe.",
            "Viết tin nhắn, email ngắn với cấu trúc câu đơn giản."
        ],
        "methodology": "<p>Tại Lian English, chúng tôi ưu tiên trải nghiệm: <strong>Từng bước xây dựng phản xạ giao tiếp cơ bản ngay từ Ngày 1 trong môi trường hoàn toàn an toàn.</strong></p>\n<ul>\n<li><strong>Phản xạ bài bản:</strong> Bạn sẽ thực hành biểu đạt ý nghĩ ngay cả khi chưa biết hết từ vựng, đặt nền móng cho phản xạ có hội thoại một cách tự nhiên.</li>\n<li><strong>Môi trường An toàn tâm lý:</strong> Không phán xét, chấp nhận sự lóng ngóng. Lớp học siêu nhỏ 4-6 người là nơi tháo gỡ sự e ngại để bạn yên tâm bước những bước đầu tiên.</li>\n<li><strong>Giao tiếp ứng dụng:</strong> Bạn được hướng dẫn nạp từ vựng chủ động để tự tin xử lý các tình huống giao tiếp cơ bản ở mức độ A1.</li>\n</ul>",
        "features": [
            "Lớp siêu nhỏ 4-6 người (Tối đa hóa thời gian nói)",
            "Chăm sóc tận tình cả lớp và kèm 1-1 khi cần",
            "Môi trường 100% tiếng Anh",
            "Cam kết hoàn tiền 100% sau 1 tuần nếu không phù hợp"
        ],
        "syllabus": [
            {
                "title": "Tuần 1: First Meetings",
                "topics": [
                    "Chào hỏi và giới thiệu bản thân một cách tự tin.",
                    "Hỏi và cung cấp thông tin cá nhân cơ bản (tên, tuổi, quốc tịch).",
                    "Đánh vần tên và cung cấp số điện thoại chính xác."
                ]
            },
            {
                "title": "Tuần 2: People and Jobs",
                "topics": [
                    "Nói về nghề nghiệp hiện tại của bạn và những người xung quanh.",
                    "Giới thiệu các thành viên trong gia đình và bạn bè.",
                    "Hỏi đáp cơ bản về nơi ở và môi trường làm việc."
                ]
            },
            {
                "title": "Tuần 3: Things and Possessions",
                "topics": [
                    "Gọi tên và mô tả các đồ vật cá nhân thông dụng.",
                    "Hỏi về quyền sở hữu (đây là của ai?) và trả lời tự nhiên.",
                    "Sử dụng các tính từ đơn giản để miêu tả tình trạng đồ vật."
                ]
            },
            {
                "title": "Tuần 4: Every Day Life",
                "topics": [
                    "Kể về thói quen ăn uống và tần suất các hoạt động hàng ngày.",
                    "Mô tả một ngày điển hình của bạn từ sáng đến tối.",
                    "Đóng vai đặt món tại quán café một cách lịch sự."
                ]
            },
            {
                "title": "Tuần 5: Abilities & People",
                "topics": [
                    "Tự tin nói về những khả năng bạn 'có thể' và 'không thể' làm.",
                    "Mô tả ngoại hình và tính cách của đồng nghiệp, bạn bè.",
                    "Luyện tập các đoạn hội thoại ngắn giới thiệu người mới."
                ]
            },
            {
                "title": "Tuần 6: Requests & Social Interaction",
                "topics": [
                    "Đưa ra lời yêu cầu và đề nghị giúp đỡ một cách tinh tế.",
                    "Nói về ngày sinh nhật, các tháng và sự kiện quan trọng.",
                    "Phản hồi tự nhiên khi người khác nhờ vả hoặc đưa lời mời."
                ]
            },
            {
                "title": "Tuần 7: My Home & City",
                "topics": [
                    "Mô tả chi tiết các phòng và vị trí đồ đạc trong nhà.",
                    "Giới thiệu về khu phố bạn đang sống và các tiện ích xung quanh.",
                    "Hỏi về vị trí của các địa điểm công cộng trong thành phố."
                ]
            },
            {
                "title": "Tuần 8: Navigation & Discovery",
                "topics": [
                    "Hỏi đường và chỉ đường chính xác cho người nước ngoài.",
                    "Thảo luận về các kế hoạch khám phá thành phố trong 1 ngày.",
                    "Đọc hiểu các biển báo và chỉ dẫn cơ bản tại nơi công cộng."
                ]
            },
            {
                "title": "Tuần 9: Past Experiences",
                "topics": [
                    "Kể về những người hùng hoặc nhân vật bạn ngưỡng mộ trong quá khứ.",
                    "Chia sẻ những kỷ niệm đẹp hoặc sự kiện đáng nhớ thời thơ ấu.",
                    "Luyện tập phản xạ kể chuyện sử dụng các mốc thời gian."
                ]
            },
            {
                "title": "Tuần 10: Health & Wellbeing",
                "topics": [
                    "Nói về các vấn đề sức khỏe thường gặp và bộ phận cơ thể.",
                    "Thảo luận về thói quen tập thể dục và lối sống lành mạnh.",
                    "Đóng vai đi khám bệnh và trao đổi với bác sĩ về tình trạng sức khỏe."
                ]
            },
            {
                "title": "Tuần 11: Weekend Activities",
                "topics": [
                    "Chia sẻ về các hoạt động giải trí vào kỳ nghỉ cuối tuần.",
                    "Kể lại những việc đã làm cùng bạn bè hoặc người thân.",
                    "Nhắn tin/Trao đổi nhóm để lên lịch trình đi chơi."
                ]
            },
            {
                "title": "Tuần 12: Travel & Future Plans",
                "topics": [
                    "Mua vé tàu/xe và hỏi thông tin hành trình tại bến bãi.",
                    "Nói về những trải nghiệm du lịch bạn muốn thử trong tương lai.",
                    "Thảo luận và thống nhất các kế hoạch cho kỳ nghỉ sắp tới."
                ]
            }
        ],

        // NEW: Vision
        "vision": {
            "headline": "Đập Tan Nỗi Sợ - Bước Đầu Tiên Đến Thế Giới Mới",
            "outcomes": [
                "Tự tin đi du lịch tự túc, hỏi đường, đặt món bằng tiếng Anh",
                "Kể về gia đình, sở thích của bản thân một cách tự nhiên",
                "Tham gia các hội thoại ngắn đơn giản trong cuộc sống hàng ngày",
                "Có nền tảng vững chắc để tiếp tục lên trình độ cao hơn"
            ],
            "aspirationalImage": "travel"
        },

        // NEW: Barrier
        "barrier": {
            "name": "Tâm Lý E Ngại (Affective Filter)",
            "description": "Bạn có vốn từ, nhưng rào cản vô hình xuất hiện vì e ngại bị đánh giá. Bạn cảm thấy mình xuất phát chậm và luôn chờ đợi sự hoàn hảo mới dám mở lời.",
            "symptoms": [
                "Ngập ngừng trong môi trường giao tiếp dù đã học từ vựng",
                "Luôn suy nghĩ rất lâu trước khi nói",
                "Chờ đợi 'đủ từ' và 'đủ ngữ pháp' nhưng hiếm khi cảm thấy đủ",
                "E ngại khi phát âm chưa chuẩn hoặc dùng chưa đúng ngữ pháp"
            ]
        },

        // NEW: Bridge
        "bridge": {
            "name": "Phản Xạ Bài Bản tại A1: Không Gian An Toàn",
            "solution": "Tại Lian, chúng tôi khuyến khích bạn phản xạ tự nhiên ngay từ Ngày 1 trong môi trường tôn trọng sự khác biệt. Bạn không cần sự hoàn hảo, bắt đầu bằng câu đơn giản nhất: 'Hello, I\\'m [name]'.",
            "keyFeatures": [
                "Lớp siêu nhỏ 4-6 người = Không gian an toàn, không phán xét",
                "Môi trường 100% tiếng Anh = Khuyến khích nạp/xuất trực tiếp",
                "Được hướng dẫn cách mở lời ngay từ Ngày 1 với những câu đơn giản",
                "Thấu cảm và trân trọng từng nỗ lực, cho phép sự lóng ngóng"
            ]
        },

        // NEW: Level identity
        "levelColor": "#0F2039",  // Very Dark Navy
        "levelIcon": "rocket",
        "levelTheme": "travel"
    },
    "a2": {
        "title": "Giao Tiếp Phản Xạ A2",
        "subtitle": "Từ 'Dịch Thầm' Sang Phản Xạ Trực Tiếp",
        "description": "<p>Khóa học Communicate with Confidence A2 giúp bạn dần thay thế thói quen: <strong>dịch tiếng Việt sang tiếng Anh trong đầu</strong> trước khi nói.</p>\n<h3 style=\"color: #0F2039; margin-top: 15px;\">Những khó khăn thường gặp khi giao tiếp</h3>\n<ul>\n<li><strong>Tốc độ giao tiếp ngập ngừng</strong> vì não bộ bận \"dịch thầm\" và sắp xếp từng từ.</li>\n<li><strong>Khựng lại, thiếu tự tin</strong> do e ngại mắc các lỗi ngữ pháp cơ bản (số ít số nhiều, giới từ, chia thì).</li>\n<li><strong>Vốn từ vựng \"thụ động\"</strong> – Bạn có thể hiểu khi nghe, đọc nhưng lại khó khăn khi tự mình bật ra thành lời.</li>\n<li><strong>Hội thoại gián đoạn:</strong> Đa phần sử dụng những câu đơn ngắn, chưa duy trì được mạch trò chuyện liên tục.</li>\n</ul>",
        "students": "Người học hay bị ngập ngừng vì thói quen dịch word-by-word. Người muốn tự tin trao đổi trôi chảy hơn thay vì e ngại ngữ pháp. Người có vốn từ thụ động cần kích hoạt thành phản xạ tự nhiên.",
        "duration": "24 tuần - 48 buổi học (2 buổi/tuần, 90 phút/buổi)",
        "goals": [
            "Giảm dần thói quen dịch từ tiếng Việt sang tiếng Anh khi giao tiếp.",
            "Trò chuyện tự nhiên, phản xạ nhanh với các chủ đề đời sống: gia đình, sở thích, mô tả sự kiện.",
            "Tự tin bước ra khỏi vùng 'e ngại hội thoại dài', bắt đầu biết cách duy trì nhịp độ giao tiếp.",
            "Biến một lượng lớn từ vựng thụ động trở thành từ vựng chủ động trong ngữ cảnh thực tế."
        ],
        "methodology": "<p>Tại khóa A2, chúng tôi tập trung vào <strong>Khả năng phản hồi tự nhiên</strong> và sự mạch lạc thay vì sự hoàn hảo.</p>\n<ul>\n<li><strong>Hạn chế dịch thầm:</strong> Môi trường 100% tiếng Anh giúp não bộ quen với việc nạp và xử lý thông tin trực tiếp, giảm bớt khâu trung gian tiếng Việt.</li>\n<li><strong>Khung sườn Phản xạ bài bản:</strong> Không dừng lại ở việc lặp lại thụ động, bạn được cung cấp cấu trúc để tự tin ghép nối thành câu hoàn chỉnh, diễn đạt mạch lạc hơn.</li>\n<li><strong>Giao tiếp ứng dụng đời sống:</strong> Tập trung vào các chủ đề quen thuộc chân thực nhất để bạn tự tin ứng dụng ngay vào cuộc sống và công việc.</li>\n</ul>",
        "features": [
            "Lớp siêu nhỏ 4-6 người (Tối đa hóa thời gian nói)",
            "Chăm sóc tận tình cả lớp và kèm 1-1 khi cần",
            "Môi trường 100% tiếng Anh",
            "Cam kết hoàn tiền 100% sau 1 tuần nếu không phù hợp"
        ],
        "syllabus": [
            {
                "title": "Chặng 1: Phá vỡ \"Dịch thầm\" & Giao tiếp nền tảng",
                "topics": [
                    "Giới thiệu bản thân ấn tượng và tự nhiên, không theo văn mẫu.",
                    "Phản xạ hỏi đáp nhanh về gia đình, công việc, sở thích không cần dịch thầm.",
                    "Khơi gợi chủ đề để bắt đầu và duy trì nhịp trò chuyện mượt mà."
                ]
            },
            {
                "title": "Chặng 2: Giao tiếp không gian & Trải nghiệm sống",
                "topics": [
                    "Mô tả sinh động về không gian sống và khu vực xung quanh.",
                    "Hỏi đường, chỉ đường và hiểu tường tận các chỉ dẫn trong thành phố.",
                    "Tự tin kể lại các sự kiện đã diễn ra trong quá khứ (kỳ nghỉ, cuối tuần)."
                ]
            },
            {
                "title": "Chặng 3: Xử lý tình huống & Vấn đề phát sinh",
                "topics": [
                    "Xử lý mượt mà sự cố thực tế: xin lỗi, giải thích lý do đến muộn, trễ hẹn.",
                    "Trình bày vấn đề và nhờ người khác giúp đỡ một cách lịch sự, tinh tế.",
                    "Hỏi đáp và trao đổi thông tin chính xác, tự nhiên qua điện thoại."
                ]
            },
            {
                "title": "Chặng 4: Mở rộng chủ đề & Giao tiếp độc lập",
                "topics": [
                    "Thảo luận trôi chảy về các công việc, kỹ năng mềm và nghề nghiệp.",
                    "Đưa ra lời khuyên du lịch, lập kế hoạch và thống nhất lịch trình nhóm.",
                    "Đóng vai xử lý các tình huống tại khách sạn, sân bay hoặc đi nước ngoài."
                ]
            }
        ],

        // NEW: Vision
        "vision": {
            "headline": "Giao Tiếp Trôi Chảy - Không Còn 'Dịch Thầm' Trong Đầu",
            "outcomes": [
                "Ngắt nghỉ đúng, nối câu đúng, nói chuẩn ngữ pháp mà không cần suy nghĩ",
                "Trò chuyện tự nhiên về các chủ đề quen thuộc: gia đình, công việc, sở thích",
                "Không còn khựng lại, ngắc ngứ vì đang dịch từng chữ trong đầu",
                "Có tốc độ phản xạ nhanh, tự tin giao tiếp trong môi trường nói tiếng Anh"
            ],
            "aspirationalImage": "connection"
        },

        // NEW: Barrier
        "barrier": {
            "name": "Thói Quen Dịch Thầm",
            "description": "Não bộ bận rộn dịch từ tiếng Việt sang tiếng Anh trước khi nói. Điều này làm giao tiếp ngập ngừng, rời rạc, và thiếu cấu trúc tự nhiên, dẫn đến cảm giác đi vào lối mòn.",
            "symptoms": [
                "Nói ngập ngừng, tốc độ phản xạ có độ trễ nhất định",
                "Cần thời gian dừng lại ('ê...', 'ờ...') để não bộ dịch",
                "Diễn đạt được ý tưởng nhưng câu chưa có cấu trúc rõ ràng",
                "Hiểu người khác nói nhưng khó gọi từ ra để phản hồi nhanh"
            ]
        },

        // NEW: Bridge
        "bridge": {
            "name": "Phản Xạ Bài Bản tại A2: Thay Thế Dịch Thầm Bằng Khung Cấu Trúc",
            "solution": "Môi trường tiếng Anh giúp não bộ nạp và xử lý trực tiếp. Tập trung học các KHUNG câu (patterns) thay vì từ rời rạc. Lắp ráp từ vựng vào khung có sẵn để nói một cách tự nhiên và chính xác hơn.",
            "keyFeatures": [
                "100% English Environment = Giúp não bộ quen xử lý thông tin trực tiếp",
                "Học KHUNG câu (sentence patterns) ứng dụng cao",
                "Lắp ráp từ vựng vào khung có sẵn → Diễn đạt mạch lạc, tự tin",
                "Cải thiện cách ngắt nghỉ và nối câu tự nhiên"
            ]
        },

        // NEW: Level identity
        "levelColor": "#0F2039",  // Very Dark Navy
        "levelIcon": "trending-up",
        "levelTheme": "connection"
    },
    "a2-plus": {
        "title": "Kết Nối & Kéo Dài Hội Thoại A2+",
        "subtitle": "Nghệ Thuật Small Talk & Phát Triển Ý",
        "description": "<p>Khóa học Communicate with Confidence A2+ là bước đệm tinh tế chuyển giao từ mức \"Cơ bản\" lên \"Độc lập\", giúp bạn biến những câu trả lời ngắn thành một chia sẻ cuốn hút và mang cá tính riêng.</p>\n<h3 style=\"color: #0F2039; margin-top: 15px;\">Những điểm chững thường gặp ở giai đoạn này</h3>\n<ul>\n<li><strong>Giới hạn ở câu trả lời ngắn:</strong> Cuộc đối thoại dễ bị gián đoạn vì bạn thấy khó khăn trong việc phát triển thêm ý (Developing ideas).</li>\n<li><strong>Bối rối khi \"Small Talk\":</strong> Lúng túng, chưa biết cách mở lời, hỏi thăm hay duy trì nhịp trò chuyện xã giao một cách thoải mái.</li>\n<li><strong>Thiếu sự kết nối trong diễn đạt:</strong> Có nhiều ý tưởng nhưng khi nói ra lại là những câu đơn rời rạc, chưa linh hoạt dùng các từ nối (linking words) để xâu chuỗi sự việc tự nhiên.</li>\n</ul>",
        "students": "Học viên tiệm cận B1 cần phá vỡ giới hạn chỉ trả lời câu đơn. Người lúng túng khi gặp tình huống giao tiếp xã giao tự do. Người muốn rèn luyện kỹ năng kể chuyện và liên kết ý tưởng.",
        "duration": "24 tuần - 48 buổi học (2 buổi/tuần, 90 phút/buổi)",
        "goals": [
            "Sở hữu nghệ thuật 'Small Talk' tự nhiên, biết cách gợi mở và dẫn dắt cuộc trò chuyện.",
            "Nâng cấp kỹ năng diễn đạt từ 'Câu Đơn' lên thành 'Đoạn Văn' mạch lạc, có tổ chức.",
            "Làm chủ các từ nối (linking words & phrases) để kể một câu chuyện hay miêu tả diễn biến mượt mà.",
            "Phản xạ cực tốt với các tình huống giao tiếp mở, không có kịch bản trước."
        ],
        "methodology": "<p>Phương pháp cốt lõi của A2+ là <strong>Mở rộng, Ghép nối và Kể chuyện (Storytelling)</strong>.</p>\n<ul>\n<li><strong>Hỏi & Đào Sâu (Drill Down):</strong> Rèn luyện phản xạ đưa thêm chi tiết, lý do, và cảm xúc vào mỗi câu trả lời ngắn để biến nó thành một chủ đề hấp dẫn.</li>\n<li><strong>Khung sườn Phản xạ bài bản:</strong> Cung cấp các công cụ và cấu trúc liên kết từ vựng để hội thoại trôi chảy, logic, không bị gãy nhịp.</li>\n<li><strong>Mô phỏng chân thực:</strong> Liên tục nhập vai vào các tình huống giao tiếp đời sống không báo trước, rèn luyện sự nhạy bén và tự nhiên.</li>\n</ul>",
        "features": [
            "Lớp siêu nhỏ 4-6 người (Tối đa hóa thời gian nói)",
            "Chăm sóc tận tình cả lớp và kèm 1-1 khi cần",
            "Môi trường 100% tiếng Anh",
            "Cam kết hoàn tiền 100% sau 1 tuần nếu không phù hợp"
        ],
        "syllabus": [
            {
                "title": "Chặng 1: Nghệ thuật Small Talk & Bắt chuyện",
                "topics": [
                    "Nắm bắt nghệ thuật \"Small Talk\" – bắt chuyện tự nhiên với người lạ, đối tác.",
                    "Luyện tập kỹ năng \"Hỏi ngược lại\" để câu chuyện không rơi vào ngõ cụt.",
                    "Dùng từ đệm (filler words) để cách tiếp chuyện tự nhiên nhất."
                ]
            },
            {
                "title": "Chặng 2: Kể chuyện (Storytelling) Mạch lạc",
                "topics": [
                    "Kỹ năng \"Storytelling\" – kể lại một trải nghiệm cá nhân hấp dẫn, lôi cuốn.",
                    "Sử dụng nhuần nhuyễn các từ nối (Linking words) để móc nối sự kiện.",
                    "Thể hiện sự đồng cảm, ngạc nhiên hoặc phản đối lịch sự khi nghe chuyện."
                ]
            },
            {
                "title": "Chặng 3: Bày tỏ quan điểm & Cảm xúc cá nhân",
                "topics": [
                    "Diễn đạt chính xác các sắc thái cảm xúc thay vì chỉ dùng từ cơ bản.",
                    "Đưa ra nhận định, đánh giá cá nhân về các sự kiện đời sống / công sở.",
                    "Trình bày quan điểm đồng ý hoặc không đồng ý kèm theo lý do thuyết phục."
                ]
            },
            {
                "title": "Chặng 4: Mở rộng chủ đề & Tranh biện sơ cấp",
                "topics": [
                    "Tập làm quen với \"Debate\" (Tranh biện) ở mức độ cơ bản, không sợ đối đầu.",
                    "Luyện tập phản xạ xử lý câu hỏi hóc búa, biết cách giữ quyền nói (Take the floor).",
                    "Sẵn sàng tâm thế, từ vựng và phản xạ để bước vào giai đoạn B1 độc lập."
                ]
            }
        ],

        // NEW: Vision
        "vision": {
            "headline": "Kể Chuyện Trọn Vẹn - Tạo Kết Nối Chân Thực",
            "outcomes": [
                "Phát triển câu trả lời ngắn thành câu chuyện 2-3 phút mang cá tính riêng",
                "Làm chủ Small Talk: mở lời, duy trì hội thoại xã giao nhẹ nhàng và tự nhiên",
                "Diễn đạt mạch lạc, biết cách triển khai ý tưởng (Developing Ideas)",
                "Xây dựng sự gắn kết chân thực với người nghe thông qua cách kể chuyện"
            ],
            "aspirationalImage": "growth"
        },

        // NEW: Barrier
        "barrier": {
            "name": "Giới Hạn Ở Câu Trả Lời Ngắn",
            "description": "Thường trả lời Yes/No, gặp khó khăn khi phát triển thêm ý → Hội thoại thiếu tính liên tục. Bạn có ý tưởng và từ vựng, nhưng chưa tìm được cách NÓI TRỌN VẸN.",
            "symptoms": [
                "Dừng lại ở Yes/No, khiến hội thoại khó kéo dài",
                "Lúng túng khi bắt chuyện xã giao (Small Talk) với người mới quen",
                "Cách diễn đạt chưa liền mạch, thiếu từ nối (linking words) tự nhiên",
                "Cảm thấy bối rối khi muốn phát triển từ một câu trả lời ngắn thành đoạn hội thoại"
            ]
        },

        // NEW: Bridge
        "bridge": {
            "name": "Phản Xạ Bài Bản tại A2+: Nghệ Thuật Phát Triển Ý",
            "solution": "Ứng dụng Linking Words (however, therefore...) và Storytelling Framework (STAR). Kỹ năng dùng câu hỏi (Wh- questions) để duy trì sự mượt mà cho cuộc trò chuyện.",
            "keyFeatures": [
                "Sử dụng Linking Words: however, therefore, additionally...",
                "Áp dụng Storytelling Framework: STAR (Situation, Task, Action, Result)",
                "Dùng câu hỏi mở (Wh- questions) để kéo dài và làm phong phú hội thoại",
                "Biến ý tưởng ngắn thành những chia sẻ 2-3 phút cuốn hút"
            ]
        },

        // NEW: Level identity
        "levelColor": "#B8860B",  // Gold
        "levelIcon": "sparkles",
        "levelTheme": "growth"
    },
    "b1": {
        "title": "Bứt Phá Giới Hạn B1",
        "subtitle": "Trở Thành Người Dùng Tiếng Anh Độc Lập",
        "description": "<p>Khóa Communicate with Confidence B1 vượt qua <strong>\"Điểm chững B1\" (B1 Plateau)</strong>, đồng hành cùng bạn đạt tới sự Độc Lập (Independent User) – nơi bạn có đủ kỹ năng để tự tin giao tiếp sâu sắc và tự học trọn đời.</p>\n<h3 style=\"color: #0F2039; margin-top: 15px;\">Thách thức lớn tại ngưỡng B1</h3>\n<ul>\n<li><strong>Điểm chững \"B1 Plateau\":</strong> Cảm giác học mãi nhưng chưa thấy rõ sự tiến bộ, giao tiếp đáp ứng được nhu cầu cơ bản nhưng thiếu sự sắc bén.</li>\n<li><strong>Thiếu công cụ bảo vệ quan điểm:</strong> Thoải mái trao đổi thông thường, nhưng lúng túng khi cần đưa ra góc nhìn cá nhân, hệ thống hóa lý do (reasoning) khi bàn luận sự việc.</li>\n<li><strong>Chưa tối ưu hóa khả năng tự học:</strong> Cảm thấy chưa đủ vững về cấu trúc và từ vựng để tự tin làm chủ các tài liệu tiếng Anh nguyên bản hay chủ động tự trau dồi lên trình độ cao hơn.</li>\n</ul>",
        "students": "Người kẹt ở B1 Plateau. Người muốn diễn đạt ý tưởng, giải thích lý do mạch lạc trong các chủ đề quen thuộc, và cần bệ phóng nền tảng vững chắc để tự học tiếng Anh suốt đời.",
        "duration": "24 tuần - 48 buổi học (2 buổi/tuần, 90 phút/buổi)",
        "goals": [
            "Bứt phá khỏi trạng thái chững mức B1, chính thức trở thành người dùng ngôn ngữ độc lập (Independent User).",
            "Tự tin diễn đạt ý tưởng, giải thích lý do và quan điểm cá nhân mạch lạc trong các chủ đề đời sống quen thuộc.",
            "Đánh thức lượng từ vựng \"ngủ đông\", áp dụng bộ Khung sườn lập luận (Point - Reason) để ăn nói có logic.",
            "Đạt đủ độ vững vàng về Nền tảng (Phản xạ bài bản) để tự đọc tài liệu, tự xem video và tự đào tạo bản thân."
        ],
        "methodology": "<p>Khóa B1 hướng tới sự độc lập ngôn ngữ: <strong>Trang bị Bệ phóng để bạn có thể Tự Học Trọn Đời một cách vững vàng</strong>.</p>\n<ul>\n<li><strong>Phản Xạ Bài Bản (Point - Reason):</strong> Nuôi dưỡng thói quen lập luận đi kèm dẫn chứng khi đưa ra ý kiến, giúp bạn chia sẻ quan điểm rõ ràng và đầy thuyết phục trong các hội thoại chuyên sâu.</li>\n<li><strong>Xử lý tình huống linh hoạt:</strong> Rèn luyện sự bình tĩnh trước các tình huống ngoài kịch bản, giúp bạn chủ động diễn đạt ý tưởng linh hoạt từ vốn từ hiện có.</li>\n<li><strong>Khơi dậy Tinh thần Tự Trau Dồi:</strong> Hướng dẫn cách thức tiếp cận và thấu hiểu các nguồn tài liệu tiếng Anh chân thực (báo chí, video) làm bệ đỡ cho hành trình hướng tới B2/C1 của riêng bạn.</li>\n</ul>",
        "features": [
            "Lớp siêu nhỏ 4-6 người (Tối đa hóa thời gian nói)",
            "Chăm sóc tận tình cả lớp và kèm 1-1 khi cần",
            "Môi trường 100% tiếng Anh",
            "Cam kết hoàn tiền 100% sau 1 tuần nếu không phù hợp"
        ],
        "syllabus": [
            {
                "title": "Chặng 1: Nêu ý kiến và Dẫn chứng logic",
                "topics": [
                    "Nâng cấp đưa ý kiến: cấu trúc Lập luận - Lý do (Point - Reason).",
                    "Bày tỏ sự đồng ý hoặc không đồng ý trong các cuộc thảo luận quen thuộc.",
                    "Đánh thức vốn từ \"ngủ đông\", kích hoạt từ vựng thụ động thành phản xạ chủ động."
                ]
            },
            {
                "title": "Chặng 2: Phá vỡ rào cản diễn đạt ý tưởng",
                "topics": [
                    "Mở rộng thảo luận về đời sống: Tâm lý học cơ bản, Mối quan hệ, Thói quen sống.",
                    "Giải thích một khái niệm khó hoặc một chủ đề văn hóa cho người nước ngoài.",
                    "Xử lý tinh tế các bất đồng quan điểm, biết cách nhượng bộ hoặc trình bày lại ý."
                ]
            },
            {
                "title": "Chặng 3: Bàn luận về xu hướng quen thuộc",
                "topics": [
                    "Thảo luận về sự thay đổi của Công nghệ, Mạng xã hội và Đời sống thường nhật.",
                    "Trình bày thông tin cơ bản: Nguyên nhân - Giải pháp cho các vấn đề gia đình, môi trường.",
                    "Cập nhật và thuật lại một bản tin thời sự hoặc một bài báo dài vừa đọc."
                ]
            },
            {
                "title": "Chặng 4: Khẳng định sự Độc Lập (Independent User)",
                "topics": [
                    "Giao tiếp độc lập trong các tình huống khó khăn, bất ngờ (VD: khiếu nại dịch vụ, thay đổi lịch trình phút chót).",
                    "Làm quen với việc tự học (Self-study) thông qua việc khai thác video/podcast không phụ đề.",
                    "Thoát khỏi \"B1 Plateau\", đã sẵn sàng bệ phóng để tiến tới những môi trường phức tạp hơn."
                ]
            }
        ],

        // NEW: Vision
        "vision": {
            "headline": "Bứt Phá Giới Hạn - Trở Thành Người Dùng Độc Lập",
            "outcomes": [
                "Thảo luận, bảo vệ quan điểm một cách logic và thuyết phục",
                "Tự học trọn đời: đọc tài liệu, xem video không phụ đề",
                "Sẵn sàng bước vào môi trường chuyên nghiệp sử dụng tiếng Anh",
                "Thoát khỏi B1 Plateau, có nền tảng vững chắc để phát triển lên B2/C1"
            ],
            "aspirationalImage": "growth"
        },

        // NEW: Barrier
        "barrier": {
            "name": "Thiếu Công Cụ Tư Duy (Critical Thinking)",
            "description": "Hoàn thành tốt giao tiếp cơ bản nhưng gặp trở ngại khi BÀN LUẬN. Chưa quen với việc giải thích 'TẠI SAO' (reasoning) một cách hệ thống → Hạn chế không gian phát triển trong môi trường chuyên nghiệp.",
            "symptoms": [
                "Giao tiếp sinh tồn trôi chảy nhưng thiếu tự tin khi cần tranh luận",
                "Chưa hệ thống hóa được lý do (reasoning) cho nhận định của mình",
                "Thiếu khung cấu trúc lập luận khi thảo luận các vấn đề đa chiều",
                "Cảm thấy thiếu công cụ để tự rèn luyện và học hỏi trọn đời"
            ]
        },

        // NEW: Bridge
        "bridge": {
            "name": "Phản Xạ Bài Bản tại B1: Cấu Trúc Lập Luận",
            "solution": "Ứng dụng mô hình Point - Reason - Example - Point (PREP). Bổ sung Opinion phrases ('I believe that...', 'In my view...') và cách bày tỏ sự khác biệt góc nhìn một cách tích cực ('I see your point, but...').",
            "keyFeatures": [
                "Áp dụng cấu trúc Point - Reason - Example - Point (PREP)",
                "Làm chủ Opinion phrases: 'I believe that...', 'In my view...'",
                "Thể hiện sự khác biệt quan điểm tinh tế: 'I see your point, but...'",
                "Bảo vệ quan điểm tự tin, mở ra cơ hội tự rèn luyện bền vững"
            ]
        },

        // NEW: Level identity
        "levelColor": "#B8860B",  // Gold
        "levelIcon": "trophy",
        "levelTheme": "independence"
    }
};
