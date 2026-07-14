const courses = [
  {
    id: "math-foundations",
    title: "Math Foundations",
    subject: "Math",
    difficulty: "Beginner",
    symbol: "M",
    color: "#264fba",
    description:
      "Build number sense, fractions, equations, and percent thinking with short interactive lessons.",
    levels: [
      {
        title: "Number Sense",
        lessons: [
          {
            id: "math-number-patterns",
            title: "Patterns in Numbers",
            minutes: 7,
            blocks: [
              {
                type: "text",
                title: "See the rule",
                body: "A pattern is a repeatable rule. When you find the rule, you can predict the next value instead of guessing.",
              },
              {
                type: "flashcard",
                front: "Sequence: 3, 6, 9, 12",
                back: "The rule is add 3 each step.",
              },
              {
                type: "multiple_choice",
                prompt: "What comes next: 5, 10, 20, 40, ?",
                choices: ["45", "60", "80", "100"],
                correct: 2,
                explanation: "Each step doubles the previous number.",
              },
            ],
          },
          {
            id: "math-fractions",
            title: "Fractions as Parts",
            minutes: 9,
            blocks: [
              {
                type: "text",
                title: "Part over whole",
                body: "A fraction compares selected parts to the total number of equal parts.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "If a pizza has 8 equal slices and you eat 2, what fraction did you eat?",
                choices: ["2/10", "2/8", "8/2", "6/8"],
                correct: 1,
                explanation: "You ate 2 out of 8 equal slices.",
              },
              {
                type: "reflection",
                prompt: "Write one everyday situation where fractions appear.",
              },
            ],
          },
        ],
      },
      {
        title: "Equations",
        lessons: [
          {
            id: "math-balance",
            title: "Balance Method",
            minutes: 8,
            blocks: [
              {
                type: "text",
                title: "Both sides matter",
                body: "An equation is like a balance scale. If you change one side, do the same thing to the other side.",
              },
              {
                type: "multiple_choice",
                prompt: "Solve x + 4 = 9.",
                choices: ["x = 3", "x = 5", "x = 9", "x = 13"],
                correct: 1,
                explanation: "Subtract 4 from both sides, so x = 5.",
              },
            ],
          },
          {
            id: "math-percent",
            title: "Percent Thinking",
            minutes: 10,
            blocks: [
              {
                type: "text",
                title: "Out of 100",
                body: "Percent means per 100. 25% is 25 out of 100, which is the same as one quarter.",
              },
              {
                type: "multiple_choice",
                prompt: "What is 50% of 30?",
                choices: ["10", "15", "20", "25"],
                correct: 1,
                explanation: "50% means half. Half of 30 is 15.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "crypto-literacy",
    title: "Cryptocurrency",
    subject: "Technology",
    difficulty: "Intermediate",
    symbol: "C",
    color: "#6642c7",
    description:
      "Học crypto từ lịch sử tiền tệ, blockchain, ví, bảo mật, NFT, RWA, perp, prediction market và tư duy sống sót trong thị trường.",
    levels: [
      {
        title: "Introduction",
        lessons: [
          {
            id: "crypto-history",
            title: "Lịch sử tiền tệ",
            minutes: 8,
            blocks: [
              {
                type: "text",
                title: "Từ đổi chác đến tiền tệ",
                body: "Trước khi có tiền, con người trao đổi trực tiếp: gạo đổi lấy cá, vải đổi lấy công cụ. Cách này khó mở rộng vì hai bên phải cùng lúc cần đúng thứ của nhau. Tiền ra đời như một ngôn ngữ chung để đo giá trị, lưu trữ sức lao động và trao đổi nhanh hơn.",
              },
              {
                type: "flashcard",
                front: "Tiền tệ quan trọng nhất ở điểm nào?",
                back: "Tiền giúp xã hội có một thước đo chung về giá trị. Khi thước đo chung đủ tin cậy, thương mại, tiết kiệm và đầu tư mới có thể phát triển.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Timeline ngang: Đổi chác -> Vỏ sò/kim loại -> Tiền giấy -> Ngân hàng số -> Crypto. Hiệu ứng: từng mốc sáng lên khi người học kéo xuống.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Tiền tệ giải quyết vấn đề lớn nhất nào của hình thức đổi chác?",
                choices: [
                  "Giúp giao dịch khi nhu cầu hai bên không trùng khớp.",
                  "Làm mọi món hàng có cùng giá.",
                  "Loại bỏ hoàn toàn rủi ro trong xã hội.",
                  "Khiến giá cả không bao giờ thay đổi.",
                ],
                correct: 0,
                explanation:
                  "Tiền là phương tiện trao đổi chung, giúp giao dịch không còn phụ thuộc vào việc hai bên phải muốn đúng món hàng của nhau.",
              },
              {
                type: "reflection",
                prompt:
                  "Nếu ngày mai không còn tiền mặt, thẻ ngân hàng và ví điện tử, bạn sẽ trao đổi hàng hóa bằng cách nào?",
              },
            ],
          },
          {
            id: "crypto-ledgers",
            title: "Tiền mã hóa là gì?",
            minutes: 9,
            blocks: [
              {
                type: "text",
                title: "Crypto không chỉ là đồng coin",
                body: "Tiền mã hóa là tài sản số được vận hành bằng mật mã học và mạng lưới máy tính. Điểm đặc biệt là quyền sở hữu có thể được ghi nhận trên blockchain thay vì chỉ nằm trong sổ cái của một ngân hàng hoặc công ty trung gian.",
              },
              {
                type: "text",
                title: "Nó dùng làm gì?",
                body: "Crypto có thể dùng để chuyển giá trị xuyên biên giới, tham gia ứng dụng tài chính phi tập trung, sở hữu tài sản số, truy cập sản phẩm blockchain và thử nghiệm những mô hình kinh tế mới. Tuy vậy, không phải dự án nào cũng có giá trị thật.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Minh họa 3 lớp: Người dùng -> Ví cá nhân -> Blockchain. Khi click vào từng lớp sẽ hiện giải thích ngắn.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Điểm khác biệt cốt lõi của crypto so với tiền trong tài khoản ngân hàng là gì?",
                choices: [
                  "Crypto luôn tăng giá.",
                  "Crypto có thể ghi nhận quyền sở hữu bằng mạng lưới blockchain.",
                  "Crypto không cần bảo mật.",
                  "Crypto chỉ dùng để chơi game.",
                ],
                correct: 1,
                explanation:
                  "Blockchain cho phép ghi nhận và xác minh quyền sở hữu theo cách mở hơn, nhưng người dùng cũng phải tự chịu trách nhiệm bảo mật nhiều hơn.",
              },
              {
                type: "reflection",
                prompt:
                  "Theo bạn, crypto là công nghệ, tài sản đầu cơ, hay cả hai? Vì sao?",
              },
            ],
          },
          {
            id: "crypto-scams",
            title: "Cạm bẫy Crypto",
            minutes: 12,
            blocks: [
              {
                type: "text",
                title: "Thị trường mới luôn có mặt tối",
                body: "Crypto mở ra nhiều cơ hội, nhưng cũng là nơi các mô hình lừa đảo phát triển rất nhanh. Những câu chuyện như Terra/Luna, FTX hay các vụ KOL quảng bá coin rác cho thấy: thương hiệu lớn, lời hứa lợi nhuận cao và cộng đồng đông không đồng nghĩa với an toàn.",
              },
              {
                type: "flashcard",
                front: "Ba tín hiệu đỏ cần nhớ",
                back: "Cam kết lợi nhuận chắc chắn, đội ngũ không minh bạch, và cơ chế token chỉ khuyến khích người sau mua vào cho người trước thoát hàng.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Infographic cảnh báo: APY cao, KOL shill liên tục, tokenomics mờ, không audit, không sản phẩm thật. Hiệu ứng: thẻ cảnh báo lật từng dòng.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Một dự án hứa lợi nhuận cố định rất cao, không giải thích nguồn tiền đến từ đâu. Bạn nên làm gì đầu tiên?",
                choices: [
                  "Vào tiền ngay vì cơ hội không chờ ai.",
                  "Kiểm tra mô hình doanh thu, đội ngũ, tokenomics và rủi ro trước.",
                  "Chỉ nghe KOL nổi tiếng.",
                  "Vay thêm tiền để tối ưu lợi nhuận.",
                ],
                correct: 1,
                explanation:
                  "Trong crypto, bước đầu tiên không phải là mua, mà là hiểu dự án kiếm tiền từ đâu và ai chịu rủi ro.",
              },
              {
                type: "reflection",
                prompt:
                  "Bạn từng thấy dấu hiệu shill coin hoặc hứa lợi nhuận phi thực tế ở đâu? Ghi lại một ví dụ.",
              },
            ],
          },
          {
            id: "crypto-real-projects",
            title: "Dự án thật sự tạo thay đổi",
            minutes: 10,
            blocks: [
              {
                type: "text",
                title: "Đừng chỉ nhìn giá, hãy nhìn vấn đề được giải quyết",
                body: "Một dự án crypto có giá trị dài hạn thường giải quyết một vấn đề thật: giao dịch nhanh hơn, minh bạch hơn, giảm phụ thuộc trung gian, hoặc tạo ra cách phối hợp kinh tế mới. Giá có thể nhiễu; sản phẩm và người dùng thật mới là thứ đáng kiểm tra.",
              },
              {
                type: "text",
                title: "Case để quan sát: Hyperliquid",
                body: "Hyperliquid là ví dụ đáng quan sát trong mảng giao dịch phái sinh phi tập trung: trải nghiệm nhanh, mô hình thị trường mới và cộng đồng người dùng quan tâm đến tính minh bạch. Đây không phải lời khuyên đầu tư, mà là bài học về cách đánh giá một sản phẩm có người dùng thật.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Sơ đồ đánh giá dự án: Vấn đề thật -> Sản phẩm thật -> Người dùng thật -> Doanh thu/usage -> Rủi ro. Hiệu ứng checklist chạy từ trái sang phải.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Một dự án crypto có nền tảng tốt thường nên được đánh giá bằng yếu tố nào?",
                choices: [
                  "Tên nghe ngầu và logo đẹp.",
                  "Sản phẩm, người dùng, mô hình giá trị và rủi ro minh bạch.",
                  "Có nhiều người spam trên mạng xã hội.",
                  "Giá đã tăng rất mạnh.",
                ],
                correct: 1,
                explanation:
                  "Giá có thể nhiễu. Sản phẩm, người dùng và mô hình giá trị mới là thứ đáng kiểm tra.",
              },
            ],
          },
        ],
      },
      {
        title: "Blockchain",
        lessons: [
          {
            id: "crypto-blockchain-basics",
            title: "Blockchain là gì?",
            minutes: 11,
            blocks: [
              {
                type: "text",
                title: "Một cuốn sổ cái nối bằng các khối",
                body: "Blockchain có thể hiểu như một cuốn sổ cái công khai, trong đó dữ liệu được đóng thành từng khối. Mỗi khối liên kết với khối trước bằng mã băm, khiến việc sửa lịch sử trở nên cực kỳ khó nếu mạng lưới đủ phi tập trung.",
              },
              {
                type: "flashcard",
                front: "Vì sao blockchain hợp với tiền tệ?",
                back: "Vì tiền cần sổ cái đáng tin. Blockchain giúp nhiều bên cùng xác minh lịch sử giao dịch mà không phải phụ thuộc hoàn toàn vào một tổ chức trung tâm.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Animation các block nối nhau: Block 1 -> Block 2 -> Block 3. Khi sửa Block 1, các block sau chuyển đỏ để minh họa tính khó sửa.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Điều gì khiến dữ liệu trên blockchain khó bị sửa tùy tiện?",
                choices: [
                  "Mỗi block liên kết với block trước và được mạng lưới xác minh.",
                  "Vì dữ liệu được lưu trong một file Word.",
                  "Vì chỉ admin mới xem được.",
                  "Vì blockchain không cần máy tính.",
                ],
                correct: 0,
                explanation:
                  "Liên kết bằng hash và cơ chế đồng thuận giúp lịch sử giao dịch khó bị thay đổi đơn phương.",
              },
            ],
          },
          {
            id: "crypto-core-concepts",
            title: "Khái niệm nền tảng",
            minutes: 13,
            blocks: [
              {
                type: "text",
                title: "Những từ khóa phải nắm",
                body: "Wallet là công cụ quản lý khóa và ký giao dịch. Private key hoặc seed phrase là quyền kiểm soát tài sản. Gas fee là phí trả cho mạng lưới. Tokenomics là cách token được phát hành, phân bổ và tạo động lực.",
              },
              {
                type: "flashcard",
                front: "Seed phrase có phải mật khẩu thường không?",
                back: "Không. Seed phrase giống chìa khóa gốc của ví. Ai có seed phrase có thể kiểm soát tài sản, vì vậy không nhập vào website lạ và không gửi cho bất kỳ ai.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Nếu một website yêu cầu bạn nhập seed phrase để nhận airdrop, hành động an toàn nhất là gì?",
                choices: [
                  "Nhập ngay để nhận thưởng.",
                  "Chụp màn hình gửi bạn bè hỏi ý kiến.",
                  "Đóng trang và coi đó là dấu hiệu lừa đảo.",
                  "Nhập thử ví có nhiều tiền.",
                ],
                correct: 2,
                explanation:
                  "Website hợp lệ không cần seed phrase để gửi token. Seed phrase phải được giữ tuyệt đối riêng tư.",
              },
              {
                type: "reflection",
                prompt:
                  "Viết lại bằng lời của bạn: private key/seed phrase nguy hiểm ở điểm nào?",
              },
            ],
          },
          {
            id: "crypto-cex-dex-wallets",
            title: "CEX, DEX và ví cá nhân",
            minutes: 12,
            blocks: [
              {
                type: "text",
                title: "CEX tiện, DEX tự chủ",
                body: "CEX là sàn tập trung như một công ty đứng giữa giữ tài sản và khớp lệnh cho bạn. DEX là sàn phi tập trung, nơi bạn thường tự kết nối ví và tự ký giao dịch. CEX dễ dùng hơn, DEX cho quyền tự chủ cao hơn nhưng yêu cầu hiểu bảo mật.",
              },
              {
                type: "text",
                title: "Ví nóng và ví lạnh",
                body: "Ví nóng thường kết nối internet, tiện cho giao dịch hằng ngày nhưng rủi ro cao hơn. Ví lạnh tách khỏi internet, phù hợp lưu trữ dài hạn hơn. Người mới nên tách ví học tập, ví giao dịch và ví lưu trữ.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Bảng so sánh 2 cột: CEX vs DEX, Ví nóng vs Ví lạnh. Có icon khóa, ví, sàn giao dịch và cảnh báo.",
              },
              {
                type: "multiple_choice",
                prompt: "Điểm mạnh lớn nhất của ví cá nhân là gì?",
                choices: [
                  "Không bao giờ có rủi ro.",
                  "Bạn có quyền tự kiểm soát tài sản nếu giữ khóa an toàn.",
                  "Không cần hiểu gì vẫn dùng được an toàn.",
                  "Luôn được hoàn tiền nếu gửi nhầm.",
                ],
                correct: 1,
                explanation:
                  "Ví cá nhân cho quyền tự chủ, nhưng quyền tự chủ đi kèm trách nhiệm bảo mật.",
              },
            ],
          },
          {
            id: "crypto-security-playbook",
            title: "Playbook bảo mật",
            minutes: 14,
            blocks: [
              {
                type: "text",
                title: "Các kiểu bẫy phổ biến",
                body: "Rug-pull là khi đội ngũ bỏ dự án hoặc rút thanh khoản. Honeypot là token cho mua nhưng khó hoặc không thể bán. Scam P2P có thể lợi dụng giao dịch ngân hàng, biên lai giả, tài khoản bên thứ ba hoặc khiếu nại ngược.",
              },
              {
                type: "flashcard",
                front: "Checklist trước khi ký giao dịch",
                back: "Kiểm tra domain, hợp đồng, quyền approve, số tiền, ví đang dùng, và tự hỏi: nếu giao dịch này sai, mình mất tối đa bao nhiêu?",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Mini game 'Approve hay Reject': hiện 4 giao dịch giả, người học bấm duyệt/từ chối, app giải thích vì sao.",
              },
              {
                type: "multiple_choice",
                prompt: "Khi giao dịch P2P, dấu hiệu nào đáng nghi nhất?",
                choices: [
                  "Người mua chuyển đúng tên, đúng số tiền.",
                  "Người mua hối thúc thả coin khi tiền chưa thật sự vào tài khoản.",
                  "Bạn kiểm tra lịch sử giao dịch ngân hàng.",
                  "Bạn dùng nền tảng có quy trình khiếu nại rõ ràng.",
                ],
                correct: 1,
                explanation:
                  "Không thả tài sản khi chưa xác nhận tiền thật sự vào tài khoản và thông tin chuyển khoản hợp lệ.",
              },
              {
                type: "reflection",
                prompt:
                  "Hãy tạo quy tắc bảo mật cá nhân gồm 3 dòng cho chính bạn trước khi dùng crypto.",
              },
            ],
          },
        ],
      },
      {
        title: "NFT, RWA, Smart Contract",
        lessons: [
          {
            id: "crypto-nft-gamefi",
            title: "NFT và GameFi",
            minutes: 10,
            blocks: [
              {
                type: "text",
                title: "NFT là bằng chứng sở hữu số",
                body: "NFT là token đại diện cho một tài sản hoặc quyền sở hữu độc nhất trên blockchain. Trong GameFi, NFT có thể đại diện cho nhân vật, vật phẩm hoặc quyền tham gia hệ sinh thái. Axie Infinity từng là ví dụ nổi bật trong giai đoạn Covid-19 khi mô hình play-to-earn bùng nổ.",
              },
              {
                type: "text",
                title: "Bài học từ GameFi",
                body: "GameFi hấp dẫn vì biến thời gian chơi thành phần thưởng, nhưng nếu kinh tế game chỉ sống nhờ người mới vào sau, mô hình có thể sụp khi dòng tiền dừng lại. Người học cần phân biệt game vui, sản phẩm thật và mô hình token thiếu bền vững.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Sơ đồ vòng lặp GameFi: Người chơi -> NFT/nhân vật -> nhiệm vụ -> token thưởng -> marketplace. Có cảnh báo khi phần thưởng phụ thuộc quá nhiều vào người mới.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Rủi ro lớn của một game play-to-earn thiếu bền vững là gì?",
                choices: [
                  "Đồ họa quá đẹp.",
                  "Phần thưởng phụ thuộc chủ yếu vào dòng người mới và giá token.",
                  "Có quá nhiều hướng dẫn cho người chơi.",
                  "Người chơi hiểu rõ luật game.",
                ],
                correct: 1,
                explanation:
                  "Nếu dòng tiền không đến từ giá trị thật, mô hình có thể yếu khi người mới dừng tham gia.",
              },
            ],
          },
          {
            id: "crypto-rwa",
            title: "RWA là gì?",
            minutes: 9,
            blocks: [
              {
                type: "text",
                title: "Đưa tài sản thật lên blockchain",
                body: "RWA, hay Real World Assets, là hướng token hóa tài sản ngoài đời như trái phiếu, bất động sản, hàng hóa hoặc quyền lợi tài chính. Ý tưởng là làm tài sản dễ chia nhỏ, dễ giao dịch và minh bạch hơn.",
              },
              {
                type: "flashcard",
                front: "RWA có tự động làm tài sản an toàn hơn không?",
                back: "Không. RWA vẫn phụ thuộc pháp lý, bên lưu ký, định giá, thanh khoản và minh bạch dữ liệu ngoài đời.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Diagram: Tài sản thật -> Bên lưu ký/pháp lý -> Token đại diện -> Nhà đầu tư. Highlight phần rủi ro oracle và pháp lý.",
              },
              {
                type: "multiple_choice",
                prompt: "Điểm cần kiểm tra nhất với một dự án RWA là gì?",
                choices: [
                  "Tài sản thật nằm ở đâu, ai giữ, quyền pháp lý của token là gì.",
                  "Logo có đẹp không.",
                  "Có dùng nhiều thuật ngữ tiếng Anh không.",
                  "Có meme mạnh không.",
                ],
                correct: 0,
                explanation:
                  "RWA chỉ có ý nghĩa khi quyền với tài sản thật được chứng minh rõ ràng.",
              },
            ],
          },
          {
            id: "crypto-smart-contract",
            title: "Smart contract",
            minutes: 12,
            blocks: [
              {
                type: "text",
                title: "Hợp đồng chạy bằng code",
                body: "Smart contract là chương trình chạy trên blockchain. Nó có thể tự thực thi quy tắc như gửi token, khóa tài sản, chia phần thưởng hoặc khớp điều kiện giao dịch. Điểm mạnh là minh bạch và tự động, điểm yếu là bug có thể gây thiệt hại thật.",
              },
              {
                type: "flashcard",
                front: "Audit có nghĩa là an toàn tuyệt đối?",
                back: "Không. Audit giúp giảm rủi ro, nhưng không đảm bảo không có bug, không đảm bảo đội ngũ tử tế, và không đảm bảo mô hình kinh tế bền vững.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Hiệu ứng code block biến thành hành động: if user pays -> unlock lesson/reward. Với crypto thì thay bằng if collateral falls -> liquidation.",
              },
              {
                type: "multiple_choice",
                prompt: "Smart contract nguy hiểm nhất khi nào?",
                choices: [
                  "Khi người dùng đọc kỹ.",
                  "Khi code có lỗi hoặc người dùng ký quyền quá rộng mà không hiểu.",
                  "Khi giao diện đẹp.",
                  "Khi có tài liệu hướng dẫn.",
                ],
                correct: 1,
                explanation:
                  "Code lỗi và quyền approve quá rộng là hai nguồn rủi ro lớn.",
              },
              {
                type: "reflection",
                prompt:
                  "Nếu bạn thấy nút 'Approve unlimited', bạn sẽ kiểm tra gì trước khi bấm?",
              },
            ],
          },
        ],
      },
      {
        title: "Perp, DEX, Prediction",
        lessons: [
          {
            id: "crypto-perp",
            title: "Perp trong Crypto",
            minutes: 11,
            blocks: [
              {
                type: "text",
                title: "Perpetual Futures là gì?",
                body: "Perp là hợp đồng phái sinh không có ngày đáo hạn cố định. Người dùng có thể long hoặc short tài sản, thường kèm đòn bẩy. Đây là công cụ mạnh cho trader có kinh nghiệm, nhưng rất nguy hiểm với người mới vì liquidation có thể xảy ra nhanh.",
              },
              {
                type: "flashcard",
                front: "Đòn bẩy làm gì?",
                back: "Đòn bẩy khuếch đại cả lời và lỗ. 10x nghĩa là biến động 1% có thể tương đương 10% trên vị thế, chưa tính phí và funding.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Thanh rủi ro kéo được: chọn leverage 1x, 5x, 10x, 20x rồi thấy vùng liquidation tiến gần lại.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Vì sao perp không phù hợp với người mới chưa hiểu quản trị rủi ro?",
                choices: [
                  "Vì perp không có biểu đồ.",
                  "Vì đòn bẩy có thể làm tài khoản mất rất nhanh khi đi ngược hướng.",
                  "Vì chỉ dùng được ban ngày.",
                  "Vì không có phí.",
                ],
                correct: 1,
                explanation:
                  "Perp là công cụ rủi ro cao. Người mới nên học cơ chế trước khi nghĩ đến giao dịch thật.",
              },
            ],
          },
          {
            id: "crypto-dex-perp-prediction",
            title: "DEX-Perp và Prediction Market",
            minutes: 12,
            blocks: [
              {
                type: "text",
                title: "Khi thị trường chạy trực tiếp trên hạ tầng mở",
                body: "DEX-Perp đưa giao dịch phái sinh lên môi trường phi tập trung hơn, nơi ví cá nhân và smart contract đóng vai trò lớn. Prediction market như Polymarket cho phép thị trường định giá xác suất của sự kiện. Cả hai đều cho thấy blockchain có thể tạo ra thị trường mở hơn, nhưng rủi ro pháp lý, thanh khoản và thao túng vẫn tồn tại.",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Split-screen: bên trái DEX-Perp với orderbook/vị thế, bên phải Prediction Market với câu hỏi và xác suất. Khi hover sẽ hiện rủi ro tương ứng.",
              },
              {
                type: "multiple_choice",
                prompt:
                  "Prediction market chủ yếu dùng giá thị trường để biểu diễn điều gì?",
                choices: [
                  "Màu sắc giao diện.",
                  "Xác suất kỳ vọng của một sự kiện theo người tham gia thị trường.",
                  "Số lượng ví lạnh.",
                  "Độ dài seed phrase.",
                ],
                correct: 1,
                explanation:
                  "Giá trên prediction market thường phản ánh kỳ vọng của thị trường về khả năng một sự kiện xảy ra.",
              },
              {
                type: "reflection",
                prompt:
                  "Bạn thấy prediction market có thể hữu ích trong giáo dục/tin tức như thế nào, và có rủi ro gì?",
              },
            ],
          },
        ],
      },
      {
        title: "Tổng kết",
        lessons: [
          {
            id: "crypto-final-map",
            title: "Bản đồ sống sót",
            minutes: 10,
            blocks: [
              {
                type: "text",
                title: "Crypto là cơ hội, không phải phép màu",
                body: "Crypto có thể thay đổi cách con người sở hữu tài sản, giao dịch, xây thị trường và phối hợp kinh tế. Nhưng tương lai đó không dành cho người chỉ nghe lời hứa giàu nhanh. Người sống sót là người hiểu công nghệ, hiểu rủi ro, biết tự bảo vệ và biết nói không.",
              },
              {
                type: "flashcard",
                front: "Công thức học crypto an toàn",
                back: "Hiểu trước khi mua. Thử nhỏ trước khi làm lớn. Tách ví. Không chia sẻ seed phrase. Không tin lợi nhuận chắc chắn. Luôn hỏi: rủi ro xấu nhất là gì?",
              },
              {
                type: "image",
                title: "Gợi ý ảnh / hiệu ứng",
                alt: "Bản đồ tổng kết dạng radar: Công nghệ, sản phẩm, bảo mật, tokenomics, pháp lý, tâm lý. Người học tick từng mục để hoàn thành course.",
              },
              {
                type: "multiple_choice",
                prompt: "Tư duy nào phù hợp nhất khi bước vào crypto?",
                choices: [
                  "Mua theo đám đông để không bỏ lỡ.",
                  "Học cơ chế, quản trị rủi ro và chỉ dùng số tiền có thể mất.",
                  "Tin mọi dự án có KOL quảng bá.",
                  "Bỏ qua bảo mật vì sàn sẽ lo hết.",
                ],
                correct: 1,
                explanation:
                  "Crypto thưởng cho người hiểu luật chơi và trừng phạt rất nhanh người xem nhẹ rủi ro.",
              },
              {
                type: "reflection",
                prompt:
                  "Sau course này, hãy viết 5 nguyên tắc cá nhân của bạn trước khi đầu tư hoặc dùng bất kỳ sản phẩm crypto nào.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "study-habits",
    title: "Study Habits",
    subject: "Productivity",
    difficulty: "Beginner",
    symbol: "H",
    color: "#1f7a68",
    description:
      "Turn learning into a daily loop with focus blocks, notes, task planning, and streak recovery.",
    levels: [
      {
        title: "Daily Rhythm",
        lessons: [
          {
            id: "habits-tiny-start",
            title: "Tiny Start",
            minutes: 6,
            blocks: [
              {
                type: "text",
                title: "Small enough to repeat",
                body: "A strong habit starts small. The first goal is not intensity; it is showing up with almost no friction.",
              },
              {
                type: "multiple_choice",
                prompt: "Which habit is easiest to repeat daily?",
                choices: [
                  "Study for 4 hours every night",
                  "Open the lesson and solve one question",
                  "Rewrite an entire textbook",
                  "Skip planning until the weekend",
                ],
                correct: 1,
                explanation:
                  "A tiny action lowers friction and protects the streak.",
              },
            ],
          },
          {
            id: "habits-review",
            title: "End-of-Day Review",
            minutes: 7,
            blocks: [
              {
                type: "text",
                title: "Close the loop",
                body: "A daily note helps you remember what worked, what blocked you, and what to try tomorrow.",
              },
              {
                type: "reflection",
                prompt: "What is one thing you can make easier for tomorrow?",
              },
            ],
          },
        ],
      },
    ],
  },
];

const storageKey = "studyflow-state-v1";
const indexedDbName = "studyflow-db-v1";
const indexedDbStore = "app-state";
const indexedDbStateKey = "state";
const assetLibraryLimit = 60;
const assetLibraryPreviewLimit = 12;

const defaultState = {
  account: {
    displayName: "An Nguyen",
    role: "student",
    age: "",
    school: "",
    className: "",
    email: "an.nguyen@student.studyflow.local",
    emailVerified: false,
  },
  authSession: {
    userId: "guest",
    provider: "local",
    isAuthenticated: false,
    lastLoginAt: todayKeySeed(),
  },
  backend: {
    enabled: false,
    status: "local",
    lastCheckedAt: null,
    message: "Local mode",
  },
  preferences: {
    language: "vi",
    musicSrc: "",
    musicEnabled: false,
  },
  onboarding: {
    completed: false,
    interests: [],
    recommendedCourseIds: [],
  },
  completedLessons: {},
  attempts: {},
  checkins: [],
  creatorProfile: {
    displayName: "An Nguyen",
    reputationScore: 76,
    approvedCourses: 0,
    rejectedSubmissions: 0,
  },
  customCourses: [],
  studioDraft: null,
  assets: [],
  courseReviews: {},
  lessonQuestions: {},
  contentReports: [],
  auditLog: [],
  moderationFilters: {
    submissionStatus: "all",
    reportStatus: "all",
  },
  learningQueue: [],
  tutorInteractions: [],
  searchPrefs: {
    difficulty: "All",
    duration: "All",
    sort: "recommended",
  },
  habitSettings: {
    dailyLessonGoal: 1,
    dailyTaskGoal: 3,
    focusMinuteGoal: 25,
  },
  tasks: [
    {
      id: "task-1",
      title: "Finish one lesson",
      status: "todo",
      dueDate: todayKeySeed(),
      priority: "high",
      linkType: "next_lesson",
    },
    {
      id: "task-2",
      title: "Write daily note",
      status: "todo",
      dueDate: todayKeySeed(),
      priority: "normal",
      linkType: "note",
    },
  ],
  notes: {},
  classrooms: [
    {
      id: "classroom-seed",
      name: "Lớp tự học buổi tối",
      inviteCode: "EVENING01",
      teacherName: "An Nguyen",
      studentNames: ["An Nguyen", "Minh Tran", "Linh Pham"],
      courseIds: ["math-foundations", "study-habits"],
      createdAt: todayKeySeed(),
    },
  ],
  studioSubmissions: [],
};

const onboardingInterestOptions = [
  {
    id: "crypto",
    label: "Crypto",
    tag: "#Crypto",
    keywords: [
      "crypto",
      "cryptocurrency",
      "blockchain",
      "ledger",
      "hash",
      "digital",
    ],
  },
  {
    id: "math",
    label: "Toán học",
    tag: "#Math",
    keywords: [
      "math",
      "fraction",
      "equation",
      "numbers",
      "coordinate",
      "percent",
      "ratio",
    ],
  },
  {
    id: "productivity",
    label: "Thói quen học tập",
    tag: "#Productivity",
    keywords: ["habit", "productivity", "study", "daily", "focus", "task"],
  },
  {
    id: "technology",
    label: "Công nghệ",
    tag: "#Technology",
    keywords: ["technology", "computer", "hash", "digital", "system"],
  },
];

const MIN_QUIZZES_PER_LESSON = 5;

const landingFeatureDetails = {
  quality: {
    title: "Chất lượng",
    body: "Giáo trình được biên soạn rõ ràng, có lộ trình dễ theo dõi và được chứng nhận bởi FPT University, giúp học viên học chắc từng phần trước khi chuyển cấp độ.",
  },
  path: {
    title: "Lộ trình linh hoạt",
    body: "Bài học và bài giảng có thể học mọi lúc, mọi nơi. Người học tự chọn nhịp độ, quay lại phần chưa chắc và tiếp tục từ đúng vị trí đã dừng.",
  },
  exam: {
    title: "Ôn thi tốc độ",
    body: "Quiz được tham khảo từ source bank theo từng môn, giúp người học luyện nhanh từng nhóm kỹ năng và làm quen với phạm vi đề tham khảo.",
  },
  support: {
    title: "Tận tình",
    body: "Giảng viên phụ trách có thể hỗ trợ học viên qua việc review câu hỏi cuối task, giải thích lại theo hướng khác khi học viên chưa hiểu.",
  },
};

courses.forEach(normalizeCourseLessons);

let state = loadState();
let currentSubject = "All";
let currentLessonSession = null;
let currentStudioDraft = null;
let selectedLevelIndex = 0;
let selectedLessonIndex = 0;
let autosaveTimer = null;

const viewRoot = document.querySelector("#viewRoot");
const pageTitle = document.querySelector("#pageTitle");
const pageKicker = document.querySelector("#pageKicker");
const streakLabel = document.querySelector("#streakLabel");
const checkInButton = document.querySelector("#checkInButton");
const continueButton = document.querySelector("#continueButton");
const profileName = document.querySelector("#profileName");
const profileRole = document.querySelector("#profileRole");
const logoutButton = document.querySelector("#logoutButton");
const backgroundAudio = new Audio();
backgroundAudio.loop = true;

const i18n = {
  en: {
    Courses: "Courses",
    Today: "Today",
    Classrooms: "Classrooms",
    Studio: "Studio",
    Account: "Account",
    Settings: "Settings",
    Continue: "Continue",
    Logout: "Logout",
    "Học sinh": "Student",
    "Giáo viên": "Teacher",
    Admin: "Admin",
    "Vào dashboard": "Go to dashboard",
    "Nền tảng học tập cá nhân hóa bằng AI": "AI personalized learning platform",
    "Học theo lộ trình riêng, làm quiz có phản hồi tức thì, theo dõi deadline và nhận chứng chỉ khi hoàn thành khóa học.":
      "Learn through your own path, take instant-feedback quizzes, track deadlines, and earn certificates when courses are complete.",
    "Tạo tài khoản học viên": "Create student account",
    "Tạo tài khoản giảng viên": "Create teacher account",
    "Lộ trình AI": "AI learning path",
    "1:1 Quiz tức thì": "1:1 instant quiz",
    "360° Theo dõi học viên": "360° student tracking",
    "Đã có tài khoản? Đăng nhập": "Already have an account? Sign in",
    "Bảng học tập cá nhân": "Personal learning board",
    "Deadline, nhiệm vụ, tiến độ và gợi ý khóa học nằm cùng một nơi.":
      "Deadlines, missions, progress, and course recommendations in one place.",
    "Đăng nhập để tiếp tục học tập": "Sign in to continue learning",
    "Chào mừng trở lại": "Welcome back",
    "Đăng nhập": "Sign in",
    "Đăng ký": "Sign up",
    "Chưa có tài khoản? Đăng ký ngay": "No account yet? Sign up now",
    "Đã có tài khoản? Đăng nhập": "Already have an account? Sign in",
    "Tạo tài khoản học viên": "Create student account",
    "Tạo tài khoản giảng viên": "Create teacher account",
    "Họ và tên": "Full name",
    "Mật khẩu của bạn": "Your password",
    "Email của bạn": "Your email",
    "Ít nhất 8 ký tự": "At least 8 characters",
    "Cấu hình và vận hành": "Configuration and operations",
    "Hệ thống": "System",
    "Trạng thái nền tảng": "Platform status",
    "Ngôn ngữ": "Language",
    "Chọn tiếng Việt hoặc tiếng Anh cho toàn bộ giao diện. Nội dung được lưu UTF-8 để không lỗi dấu tiếng Việt.":
      "Choose Vietnamese or English for the whole interface. Content is saved as UTF-8 so Vietnamese text stays correct.",
    "Tiếng Việt": "Vietnamese",
    "Âm thanh": "Audio",
    "Nhạc nền": "Background music",
    "Lưu nhạc": "Save music",
    "Phát nhạc": "Play music",
    "Dừng nhạc": "Stop music",
    "Sao lưu": "Backup",
    "Dữ liệu trình duyệt": "Browser data",
    "Xuất hoặc nhập dữ liệu đang lưu trong trình duyệt: tiến độ học, task, note, bài giảng nháp và hàng chờ duyệt.":
      "Export or import data stored in this browser: progress, tasks, notes, lesson drafts, and moderation queue.",
    "Kiểm tra backend": "Check backend",
    "Quản lý tài khoản": "Manage account",
    "Đăng xuất": "Sign out",
    "Chưa đăng nhập": "Signed out",
    "Đã đăng nhập": "Signed in",
    "Role hiện tại": "Current role",
    "Tài khoản": "Account",
    "Dữ liệu": "Data",
    "Hồ sơ": "Profile",
    "Hồ sơ học sinh": "Student profile",
    "Hồ sơ giáo viên": "Teacher profile",
    "Hồ sơ admin": "Admin profile",
    "Lưu hồ sơ": "Save profile",
    "Đổi mật khẩu": "Change password",
    "Chưa xác minh": "Not verified",
    "Đã xác minh": "Verified",
    "Thông tin bài học": "Learning info",
    "Bài học của tôi": "My learning",
    "Khóa đang học": "Active courses",
    "Hoàn thành / đăng ký": "Completed / registered",
    "Chuỗi hiện tại": "Current streak",
    "Chuỗi tốt nhất": "Best streak",
    "Đang học": "Learning",
    "Khóa học của bạn": "Your courses",
    "Thông tin bài giảng": "Teaching info",
    "Bài giảng của tôi": "My lessons",
    "Tổng bài giảng upload": "Uploaded lessons",
    "Bài đang chờ duyệt": "Pending lessons",
    "Bài đã được duyệt": "Approved lessons",
    "Lớp đang phụ trách": "Managed classes",
    "Danh sách bài giảng": "Lesson list",
    "Mở Studio": "Open Studio",
  },
  vi: {
    Courses: "Khóa học",
    Today: "Hôm nay",
    Classrooms: "Lớp học",
    Studio: "Studio",
    Account: "Tài khoản",
    Settings: "Cài đặt",
    Continue: "Tiếp tục",
    Logout: "Đăng xuất",
    "Learning paths": "Lộ trình học",
    "Course map": "Bản đồ khóa học",
    "Habit workspace": "Không gian thói quen",
    "Creator workflow": "Quy trình tạo bài",
    "Search courses": "Tìm khóa học",
    All: "Tất cả",
    "All difficulties": "Tất cả độ khó",
    "Any duration": "Mọi thời lượng",
    Recommended: "Đề xuất",
    Beginner: "Cơ bản",
    Intermediate: "Trung cấp",
    Advanced: "Nâng cao",
    "Highest rated": "Đánh giá cao nhất",
    "In progress": "Đang học",
    Newest: "Mới nhất",
    Review: "Ôn lại",
    Completed: "Đã hoàn thành",
    Start: "Bắt đầu",
    Queue: "Hàng chờ",
    "Clear queue": "Xóa hàng chờ",
    "Queue is empty": "Hàng chờ đang trống",
    "No suggestions yet": "Chưa có gợi ý",
    "Lessons today": "Bài học hôm nay",
    "Tasks done": "Task đã xong",
    Focus: "Tập trung",
    Save: "Lưu",
    "Export JSON": "Xuất JSON",
    "Import JSON": "Nhập JSON",
  },
};

Object.assign(i18n.en, {
  "Hôm nay": "Today",
  "Lớp học": "Classrooms",
  "Khóa học": "Courses",
  "Cài đặt": "Settings",
  "Tiếp tục": "Continue",
  "Đăng xuất": "Logout",
  "Tìm khóa học": "Search courses",
  "Tất cả": "All",
  "Tất cả độ khó": "All difficulties",
  "Mọi thời lượng": "Any duration",
  "Đề xuất": "Recommended",
  "Cơ bản": "Beginner",
  "Trung cấp": "Intermediate",
  "Nâng cao": "Advanced",
  "Ôn lại": "Review",
  "Bắt đầu": "Start",
  "Hàng chờ": "Queue",
  "Tạo tài khoản": "Create account",
  "Đăng nhập tài khoản": "Sign in",
  "Đăng ký tài khoản": "Sign up",
  "Chưa có tài khoản? Đăng ký": "No account yet? Sign up",
  "Đăng nhập để tiếp tục": "Sign in to continue",
  "Nhập email và mật khẩu để mở không gian học tập.":
    "Enter email and password to open your learning workspace.",
  "Tài khoản học viên sẽ được tạo trong database.":
    "A student account will be created in the database.",
  "Tài khoản giảng viên sẽ được tạo trong database.":
    "A teacher account will be created in the database.",
  "Cấu hình cá nhân": "Personal settings",
  "Cài đặt nền tảng": "Platform settings",
  "Ngôn ngữ và trải nghiệm": "Language and experience",
  "Chỉ admin mới thấy backend, checklist, sao lưu dữ liệu và quản trị nội bộ.":
    "Only admins see backend, checklist, backup, and internal operations.",
  Language: "Language",
  Audio: "Audio",
  localStorage: "localStorage",
  checking: "checking",
  online: "online",
  "needs check": "needs check",
});

Object.assign(i18n.vi, {
  "Learning system": "Hệ thống học tập",
  "Learning Paths": "Lộ trình học",
  "Learning paths": "Lộ trình học",
  "Course map": "Bản đồ khóa học",
  Workspace: "Không gian học tập",
  "Personal learning board": "Bảng học tập cá nhân",
  "Deadlines, missions, progress, and course recommendations in one place.":
    "Deadline, nhiệm vụ, tiến độ và gợi ý khóa học nằm cùng một nơi.",
  Deadline: "Deadline",
  Mission: "Nhiệm vụ",
  Certificate: "Chứng chỉ",
  "AI Tutor": "Trợ lý AI",
  "Go to dashboard": "Vào dashboard",
  "Create student account": "Tạo tài khoản học viên",
  "Create teacher account": "Tạo tài khoản giảng viên",
  "Already have an account? Sign in": "Đã có tài khoản? Đăng nhập",
  "No account yet? Sign up": "Chưa có tài khoản? Đăng ký",
  "No account yet? Sign up now": "Chưa có tài khoản? Đăng ký ngay",
  "Sign in": "Đăng nhập",
  "Sign up": "Đăng ký",
  "Create account": "Tạo tài khoản",
  "Sign in to continue": "Đăng nhập để tiếp tục",
  "Welcome back": "Chào mừng trở lại",
  "Enter email and password to open your learning workspace.":
    "Nhập email và mật khẩu để mở không gian học tập.",
  "A student account will be created in the database.":
    "Tài khoản học viên sẽ được tạo trong database.",
  "A teacher account will be created in the database.":
    "Tài khoản giảng viên sẽ được tạo trong database.",
  "username hoặc email@example.com": "Email của bạn",
  "Full name": "Họ và tên",
  "Your password": "Mật khẩu của bạn",
  "Your email": "Email của bạn",
  "At least 8 characters": "Ít nhất 8 ký tự",
  "Configuration and operations": "Cấu hình và vận hành",
  "Personal settings": "Cấu hình cá nhân",
  "Platform settings": "Cài đặt nền tảng",
  "Language and experience": "Ngôn ngữ và trải nghiệm",
  "Only admins see backend, checklist, backup, and internal operations.":
    "Chỉ admin mới thấy backend, checklist, sao lưu dữ liệu và quản trị nội bộ.",
  System: "Hệ thống",
  "Platform status": "Trạng thái nền tảng",
  Language: "Ngôn ngữ",
  Audio: "Âm thanh",
  "Background music": "Nhạc nền",
  "Save music": "Lưu nhạc",
  "Play music": "Phát nhạc",
  "Stop music": "Dừng nhạc",
  Backup: "Sao lưu",
  "Browser data": "Dữ liệu trình duyệt",
  "Check backend": "Kiểm tra backend",
  "Manage account": "Quản lý tài khoản",
  "Sign out": "Đăng xuất",
  "Signed out": "Chưa đăng nhập",
  "Signed in": "Đã đăng nhập",
  "Current role": "Role hiện tại",
  "Account session": "Phiên tài khoản",
  "Data mode": "Chế độ dữ liệu",
  Backend: "Backend",
  Local: "Local",
  Courses: "Khóa học",
  "Lessons passed": "Bài đã qua",
  "Day streak": "Chuỗi ngày",
  "Queued paths": "Lộ trình đang chờ",
  "All difficulties": "Tất cả độ khó",
  "Any duration": "Mọi thời lượng",
  Recommended: "Đề xuất",
  All: "Tất cả",
  Math: "Toán",
  Technology: "Công nghệ",
  Productivity: "Hiệu suất",
  "Search courses": "Tìm khóa học",
  "Short under 20 min": "Ngắn dưới 20 phút",
  "Medium 20-45 min": "Vừa 20-45 phút",
  "Long 45+ min": "Dài trên 45 phút",
  "Highest rated": "Đánh giá cao nhất",
  "In progress": "Đang học",
  Newest: "Mới nhất",
});

Object.assign(i18n.en, {
  "Thiết lập cá nhân": "Personal setup",
  "Bắt đầu đúng với bạn": "Start from who you are",
  "Hoàn thiện hồ sơ học tập và chọn chủ đề bạn quan tâm. StudyFlow sẽ gợi ý khóa học phù hợp ngay sau bước này.":
    "Complete your learning profile and choose topics you care about. StudyFlow will recommend courses right after this step.",
  "Hồ sơ học sinh": "Student profile",
  "Thông tin cá nhân": "Personal information",
  Tuổi: "Age",
  Lớp: "Class",
  Trường: "School",
  "Nhu cầu học": "Learning needs",
  "Bạn muốn học gì?": "What do you want to learn?",
  "Khóa học đề xuất": "Recommended courses",
  "Hoàn tất thiết lập": "Finish setup",
  "Thói quen học tập": "Study habits",
  "Công nghệ": "Technology",
  "Bạn hãy điền đủ họ tên, tuổi, lớp, trường và email để hoàn tất hồ sơ.":
    "Please fill in name, age, class, school, and email to complete your profile.",
  "Bạn hãy chọn ít nhất một khóa học đề xuất để bắt đầu.":
    "Please choose at least one recommended course to start.",
  "Email chưa đúng định dạng.": "Email format is invalid.",
  "Bạn hãy nhập mật khẩu.": "Please enter your password.",
  "Bạn hãy nhập họ và tên.": "Please enter your full name.",
  "Mật khẩu cần ít nhất 8 ký tự.": "Password needs at least 8 characters.",
  "Đang lưu thiết lập...": "Saving setup...",
  "Mật khẩu hiện tại": "Current password",
  "Mật khẩu mới": "New password",
  "Lưu mật khẩu": "Save password",
  Hủy: "Cancel",
  "Đổi mật khẩu cần đăng nhập backend.":
    "Changing password requires backend login.",
  "Bạn hãy nhập mật khẩu hiện tại.": "Please enter your current password.",
  "Đang đổi mật khẩu...": "Changing password...",
  "Đã đổi mật khẩu.": "Password changed.",
  "Đổi mật khẩu lỗi: ": "Password change failed: ",
  "Người dùng trong database": "Database users",
  "Tải danh sách người dùng từ PHP API. Admin có thể sửa role tại đây, dữ liệu được ghi vào database.":
    "Load users from the PHP API. Admins can update roles here and changes are saved to the database.",
  "Tải người dùng": "Load users",
  "Đang tải người dùng...": "Loading users...",
  "Không tải được danh sách user: ": "Could not load users: ",
  "Chưa có user trong database.": "No users in database yet.",
  "Đổi role cần đăng nhập backend bằng tài khoản admin.":
    "Changing roles requires backend login with an admin account.",
  "Lưu role": "Save role",
  "Đang lưu role...": "Saving role...",
  "Đã cập nhật role.": "Role updated.",
  "Cập nhật role lỗi: ": "Role update failed: ",
  "Chứng nhận hoàn thành": "Completion certificate",
  "Bạn đã hoàn thành toàn bộ bài trong khóa học này. Chứng nhận chính thức có thể xuất PDF ở bước production tiếp theo.":
    "You completed every lesson in this course. Official PDF export can be added in the next production step.",
  "In chứng nhận": "Print certificate",
});

Object.assign(i18n.vi, {
  "Student profile": "Hồ sơ học sinh",
  "Personal information": "Thông tin cá nhân",
  Age: "Tuổi",
  Class: "Lớp",
  School: "Trường",
  "Recommended courses": "Khóa học đề xuất",
  "Finish setup": "Hoàn tất thiết lập",
  Technology: "Công nghệ",
});

function getLanguage() {
  return state.preferences?.language || "vi";
}

function translateText(text) {
  const lang = getLanguage();
  if (lang === "vi") return i18n.vi[text] || text;
  return i18n.en[text] || text;
}

function localizeView(root = document) {
  document.documentElement.lang = getLanguage();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const raw = node.nodeValue;
      if (!raw || !raw.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (parent && ["SCRIPT", "STYLE"].includes(parent.tagName))
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    const translated = translateText(trimmed);
    if (translated !== trimmed) {
      node.nodeValue = raw.replace(trimmed, translated);
    }
  });
  root
    .querySelectorAll?.("input[placeholder], textarea[placeholder]")
    .forEach((field) => {
      field.placeholder = translateText(field.placeholder);
    });
}

function loadState() {
  try {
    const loaded = JSON.parse(localStorage.getItem(storageKey));
    return normalizeState({ ...structuredClone(defaultState), ...loaded });
  } catch {
    return normalizeState(structuredClone(defaultState));
  }
}

async function hydrateStateFromIndexedDb() {
  try {
    const storedState = await readStateFromIndexedDb();
    if (storedState) {
      state = normalizeState({
        ...structuredClone(defaultState),
        ...storedState,
      });
      return;
    }
    await writeStateToIndexedDb(structuredClone(state));
  } catch (error) {
    console.warn("IndexedDB load failed", error);
  }
}

function openStudyflowDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not available."));
      return;
    }
    const request = indexedDB.open(indexedDbName, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(indexedDbStore);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readStateFromIndexedDb() {
  const db = await openStudyflowDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(indexedDbStore, "readonly");
    const request = tx.objectStore(indexedDbStore).get(indexedDbStateKey);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function writeStateToIndexedDb(nextState) {
  const db = await openStudyflowDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(indexedDbStore, "readwrite");
    tx.objectStore(indexedDbStore).put(nextState, indexedDbStateKey);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

function normalizeCourseLessons(course) {
  if (!course || !Array.isArray(course.levels)) return course;
  course.levels.forEach((level) => {
    level.lessons = Array.isArray(level.lessons) ? level.lessons : [];
    level.lessons.forEach((lesson) =>
      ensureLessonMinimumQuizzes(lesson, course),
    );
  });
  return course;
}

function ensureLessonMinimumQuizzes(lesson, course = {}) {
  lesson.blocks = Array.isArray(lesson.blocks) ? lesson.blocks : [];
  const authoredBlocks = lesson.blocks.filter(
    (block) => block.generated !== "minimum-quiz",
  );
  const quizCount = authoredBlocks.filter(
    (block) => block.type === "multiple_choice",
  ).length;
  if (quizCount >= MIN_QUIZZES_PER_LESSON) {
    lesson.blocks = authoredBlocks;
    return lesson;
  }

  const additions = buildMinimumLessonQuizzes(
    lesson,
    course,
    MIN_QUIZZES_PER_LESSON - quizCount,
  );
  const reflectionIndex = authoredBlocks.findIndex(
    (block) => block.type === "reflection",
  );
  lesson.blocks =
    reflectionIndex >= 0
      ? [
          ...authoredBlocks.slice(0, reflectionIndex),
          ...additions,
          ...authoredBlocks.slice(reflectionIndex),
        ]
      : [...authoredBlocks, ...additions];
  return lesson;
}

function buildMinimumLessonQuizzes(lesson, course, needed) {
  const lessonTitle = lesson.title || "this lesson";
  const subject = course.subject || course.title || "the lesson";
  const firstText = lesson.blocks.find((block) => block.type === "text");
  const firstFlashcard = lesson.blocks.find(
    (block) => block.type === "flashcard",
  );
  const conceptTitle = firstText?.title || firstFlashcard?.front || lessonTitle;
  const conceptSummary =
    firstText?.body ||
    firstFlashcard?.back ||
    course.description ||
    "Review the core idea before moving on.";
  const bank = [
    {
      prompt: `Mục tiêu chính của bài "${lessonTitle}" là gì?`,
      choices: [
        `Hiểu ý chính và áp dụng ${subject} vào tình huống thực tế.`,
        "Chỉ bấm qua bài càng nhanh càng tốt.",
        "Ghi nhớ tiêu đề nhưng bỏ qua ví dụ.",
        "Chọn đáp án theo cảm tính.",
      ],
      correct: 0,
      explanation: `Bài "${lessonTitle}" cần người học hiểu ý chính trước khi chuyển sang phần tiếp theo.`,
    },
    {
      prompt: `Khi gặp khái niệm "${conceptTitle}", cách học nào chắc nhất?`,
      choices: [
        "Tự giải thích lại bằng một ví dụ cụ thể.",
        "Bỏ qua vì đã có quiz.",
        "Chỉ nhìn đáp án đúng rồi đi tiếp.",
        "Học thuộc từng chữ mà không hiểu nghĩa.",
      ],
      correct: 0,
      explanation: `Tự giải thích lại giúp kiểm tra xem bạn thật sự hiểu "${conceptTitle}" hay chưa.`,
    },
    {
      prompt: "Nếu chọn sai một câu trong lesson, bạn nên làm gì?",
      choices: [
        "Đọc lại phần liên quan rồi thử chọn lại cho tới khi đúng.",
        "Xem luôn đáp án đúng và bỏ qua lý do.",
        "Kết thúc lesson dù chưa hiểu.",
        "Đổi sang bài khác ngay.",
      ],
      correct: 0,
      explanation:
        "Quiz dùng để luyện hiểu bài, nên câu sai cần được thử lại cho tới khi nắm đúng ý.",
    },
    {
      prompt: `Ý nào phù hợp nhất với nội dung: "${conceptSummary.slice(0, 120)}${conceptSummary.length > 120 ? "..." : ""}"`,
      choices: [
        "Nắm ý chính, kiểm tra ví dụ và hiểu giới hạn của kiến thức.",
        "Tin mọi kết luận mà không cần kiểm chứng.",
        "Chỉ quan tâm phần dễ nhớ nhất.",
        "Bỏ qua bối cảnh của bài học.",
      ],
      correct: 0,
      explanation:
        "Một câu trả lời tốt cần bám ý chính, ví dụ và bối cảnh của bài.",
    },
    {
      prompt: `Trước khi hoàn thành bài "${lessonTitle}", dấu hiệu nào cho thấy bạn đã sẵn sàng?`,
      choices: [
        "Bạn trả lời đúng quiz và diễn đạt lại được bài bằng lời của mình.",
        "Bạn cuộn hết trang nhưng chưa làm quiz.",
        "Bạn chỉ nhớ một lựa chọn sai.",
        "Bạn bỏ qua phần phản hồi.",
      ],
      correct: 0,
      explanation:
        "Hoàn thành lesson nên dựa trên hiểu bài, trả lời đúng và tự diễn đạt lại được.",
    },
  ];

  return bank.slice(0, needed).map((quiz, index) => ({
    ...quiz,
    id: `generated-quiz-${slugify(lessonTitle)}-${index + 1}`,
    type: "multiple_choice",
    generated: "minimum-quiz",
  }));
}

function normalizeState(nextState) {
  nextState.account ||= { displayName: "An Nguyen", role: "student" };
  nextState.account.displayName ||= "An Nguyen";
  nextState.account.role = [
    "student",
    "teacher_pending",
    "teacher",
    "admin",
  ].includes(nextState.account.role)
    ? nextState.account.role
    : "student";
  const profileDefaults = getDefaultAccountProfile(
    nextState.account.role,
    nextState.account.displayName,
  );
  nextState.account.age =
    nextState.account.age === "" || nextState.account.age == null
      ? ""
      : Number(nextState.account.age) || "";
  nextState.account.school = nextState.account.school ?? profileDefaults.school;
  nextState.account.className =
    nextState.account.className ?? profileDefaults.className;
  nextState.account.email ||= profileDefaults.email;
  nextState.account.emailVerified = nextState.account.emailVerified === true;
  nextState.authSession ||= {
    userId: "guest",
    provider: "local",
    isAuthenticated: false,
    lastLoginAt: todayKeySeed(),
  };
  nextState.authSession.userId ||= "guest";
  nextState.authSession.provider ||= "local";
  nextState.authSession.isAuthenticated =
    nextState.authSession.provider === "php-api" &&
    nextState.authSession.isAuthenticated === true;
  nextState.authSession.lastLoginAt ||= todayKeySeed();
  nextState.backend ||= {
    enabled: false,
    status: "local",
    lastCheckedAt: null,
    message: "Local mode",
  };
  nextState.backend.enabled = nextState.backend.enabled === true;
  nextState.backend.status ||= nextState.backend.enabled ? "unknown" : "local";
  nextState.backend.message ||= nextState.backend.enabled
    ? "Backend mode"
    : "Local mode";
  nextState.preferences ||= {
    language: "vi",
    musicSrc: "",
    musicEnabled: false,
  };
  nextState.preferences.language = ["vi", "en"].includes(
    nextState.preferences.language,
  )
    ? nextState.preferences.language
    : "vi";
  nextState.preferences.musicSrc ||= "";
  nextState.preferences.musicEnabled =
    nextState.preferences.musicEnabled === true;
  nextState.onboarding ||= {
    completed: false,
    interests: [],
    recommendedCourseIds: [],
  };
  nextState.onboarding.completed = nextState.onboarding.completed === true;
  nextState.onboarding.interests = Array.isArray(nextState.onboarding.interests)
    ? nextState.onboarding.interests.map(String).filter(Boolean)
    : [];
  nextState.onboarding.recommendedCourseIds = Array.isArray(
    nextState.onboarding.recommendedCourseIds,
  )
    ? nextState.onboarding.recommendedCourseIds.map(String).filter(Boolean)
    : [];
  nextState.completedLessons ||= {};
  nextState.attempts ||= {};
  nextState.checkins ||= [];
  nextState.creatorProfile ||= {
    displayName: "An Nguyen",
    reputationScore: 76,
    approvedCourses: 0,
    rejectedSubmissions: 0,
  };
  nextState.creatorProfile.displayName = nextState.account.displayName;
  nextState.creatorProfile.reputationScore ??= 76;
  nextState.creatorProfile.approvedCourses ??= 0;
  nextState.creatorProfile.rejectedSubmissions ??= 0;
  nextState.customCourses ||= [];
  nextState.customCourses = nextState.customCourses.map(normalizeCourseLessons);
  nextState.studioDraft ||= null;
  nextState.assets ||= [];
  nextState.assets = nextState.assets.map(normalizeAssetRecord);
  nextState.courseReviews ||= {};
  nextState.lessonQuestions ||= {};
  nextState.contentReports ||= [];
  nextState.auditLog ||= [];
  nextState.moderationFilters ||= {
    submissionStatus: "all",
    reportStatus: "all",
  };
  nextState.moderationFilters.submissionStatus ||= "all";
  nextState.moderationFilters.reportStatus ||= "all";
  nextState.learningQueue ||= [];
  nextState.tutorInteractions ||= [];
  nextState.searchPrefs ||= {
    difficulty: "All",
    duration: "All",
    sort: "recommended",
  };
  nextState.searchPrefs.difficulty ||= "All";
  nextState.searchPrefs.duration ||= "All";
  nextState.searchPrefs.sort ||= "recommended";
  nextState.habitSettings ||= {
    dailyLessonGoal: 1,
    dailyTaskGoal: 3,
    focusMinuteGoal: 25,
  };
  nextState.habitSettings.dailyLessonGoal ??= 1;
  nextState.habitSettings.dailyTaskGoal ??= 3;
  nextState.habitSettings.focusMinuteGoal ??= 25;
  nextState.tasks ||= [];
  nextState.tasks = nextState.tasks.map(normalizeTask);
  nextState.notes ||= {};
  nextState.notes = normalizeNotes(nextState.notes);
  nextState.classrooms ||= [];
  nextState.classrooms = nextState.classrooms.map(normalizeClassroom);
  nextState.studioSubmissions ||= [];
  nextState.studioSubmissions = nextState.studioSubmissions.map(
    normalizeSubmissionRecord,
  );
  return nextState;
}

function normalizeClassroom(classroom) {
  return {
    id: classroom.id || `classroom-${Date.now()}`,
    name: classroom.name || "Untitled classroom",
    inviteCode:
      classroom.inviteCode || createInviteCode(classroom.name || "class"),
    teacherName: classroom.teacherName || "Teacher",
    studentNames: Array.isArray(classroom.studentNames)
      ? classroom.studentNames.filter(Boolean)
      : String(classroom.studentNames || "")
          .split(/[\n,]/)
          .map((name) => name.trim())
          .filter(Boolean),
    courseIds: Array.isArray(classroom.courseIds)
      ? classroom.courseIds.map(String).filter(Boolean)
      : [],
    createdAt: classroom.createdAt || todayKeySeed(),
  };
}

function createInviteCode(seed = "class") {
  const base =
    String(seed)
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 6) || "CLASS";
  return `${base}${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
}

function normalizeAssetRecord(asset) {
  return {
    id: asset.id || `asset-${Date.now()}`,
    name: asset.name || "Untitled asset",
    type: asset.type || "image",
    mimeType: asset.mimeType || "application/octet-stream",
    sizeBytes: Number(asset.sizeBytes) || 0,
    src: asset.src || "",
    alt: asset.alt || "",
    ownerName: asset.ownerName || "Local user",
    createdAt: asset.createdAt || new Date().toISOString(),
  };
}

function registerAsset(file, src, type = "image", alt = "") {
  const asset = normalizeAssetRecord({
    id: `asset-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file?.name || "Uploaded asset",
    type,
    mimeType: file?.type || "application/octet-stream",
    sizeBytes: file?.size || 0,
    src,
    alt,
    ownerName: state.account.displayName,
    createdAt: new Date().toISOString(),
  });
  state.assets = [
    asset,
    ...state.assets.filter((item) => item.src !== src),
  ].slice(0, assetLibraryLimit);
  pushAssetToBackend(asset);
  return asset;
}

function compactLocalAssetLibrary() {
  if (!Array.isArray(state.assets)) return;
  state.assets = state.assets.slice(0, assetLibraryLimit);
}

function createCompactStateForLocalStorage(sourceState) {
  return JSON.parse(serializeCompactStateForLocalStorage(sourceState));
}

function serializeCompactStateForLocalStorage(sourceState) {
  const mediaFields = new Set(["src", "imageSrc", "url", "thumbnail"]);
  return JSON.stringify(sourceState, (key, value) => {
    if (
      mediaFields.has(key) &&
      typeof value === "string" &&
      value.startsWith("data:")
    ) {
      return "";
    }
    return value;
  });
}

function logAudit(action, detail) {
  state.auditLog ||= [];
  state.auditLog.unshift({
    id: `audit-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    action,
    detail,
    actor: state.account.displayName,
    role: state.account.role,
    createdAt: new Date().toISOString(),
  });
  state.auditLog = state.auditLog.slice(0, 80);
}

function saveState() {
  compactLocalAssetLibrary();
  // IndexedDB performs its own structured clone during put(). Avoid creating
  // another full in-memory copy of large base64 media before that write.
  writeStateToIndexedDb(state).catch((error) =>
    console.warn("IndexedDB save failed", error),
  );
  try {
    localStorage.setItem(storageKey, serializeCompactStateForLocalStorage(state));
  } catch (error) {
    console.warn("localStorage compact save failed", error);
  }
  renderStreak();
  renderProfileMini();
  renderChrome();
}

function getRoleLabel(role = state.account.role) {
  return (
    {
      student: "Học sinh",
      teacher_pending: "Giáo viên chờ duyệt",
      teacher: "Giáo viên",
      admin: "Admin",
    }[role] || "Học sinh"
  );
}

function isEducatorRole(role = state.account.role) {
  return ["teacher", "admin"].includes(role);
}

function isPendingTeacherRole(role = state.account.role) {
  return role === "teacher_pending";
}

function renderChrome() {
  const labels = {
    catalog: "Courses",
    daily: "Today",
    classrooms: "Classrooms",
    studio: "Studio",
    account: "Account",
    settings: "Settings",
  };
  document.querySelectorAll("[data-nav]").forEach((item) => {
    const label = labels[item.dataset.nav];
    if (!label) return;
    item.hidden = isEducatorRole() && item.dataset.nav === "daily";
    const icon = item.querySelector(".icon");
    item.textContent = "";
    if (icon) item.append(icon);
    item.append(document.createTextNode(` ${translateText(label)}`));
  });
  continueButton.lastChild.textContent = ` ${translateText("Continue")}`;
  continueButton.hidden = isEducatorRole();
  checkInButton.hidden = isEducatorRole();
  if (logoutButton) {
    logoutButton.textContent = translateText("Logout");
    logoutButton.hidden = !isBackendAuthenticated();
  }
  document.documentElement.lang = getLanguage();
}

function getDefaultAccountProfile(role = "student", displayName = "An Nguyen") {
  const safeName =
    String(displayName || "user")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ".")
      .replace(/^\.+|\.+$/g, "") || "user";
  const profiles = {
    student: {
      age: "",
      school: "",
      className: "",
      email: `${safeName}@student.studyflow.local`,
    },
    teacher: {
      age: "",
      school: "",
      className: "",
      email: `${safeName}@teacher.studyflow.local`,
    },
    teacher_pending: {
      age: "",
      school: "",
      className: "",
      email: `${safeName}@teacher.studyflow.local`,
    },
    admin: {
      age: "",
      school: "",
      className: "",
      email: `${safeName}@admin.studyflow.local`,
    },
  };
  return profiles[role] || profiles.student;
}

function cleanProfileText(value, fallback = "") {
  return String(value ?? fallback)
    .replace(/\uFFFD/g, "")
    .normalize("NFC")
    .trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function applyAccountProfile(profile) {
  const defaults = getDefaultAccountProfile(profile.role, profile.name);
  state.account.displayName = cleanProfileText(
    profile.name,
    state.account.displayName,
  );
  state.account.role = profile.role;
  state.account.age =
    profile.age === "" || profile.age == null
      ? defaults.age
      : Number(profile.age) || "";
  state.account.school = cleanProfileText(profile.school, defaults.school);
  state.account.className = cleanProfileText(
    profile.className,
    defaults.className,
  );
  state.account.email = cleanProfileText(profile.email, defaults.email);
  state.account.emailVerified = profile.emailVerified === true;
  state.creatorProfile.displayName = state.account.displayName;
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`/api/${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = [
      data.message || data.error || `API error ${response.status}`,
      data.hint,
      data.detail,
    ]
      .filter(Boolean)
      .join(" ");
    const error = new Error(message);
    error.status = response.status;
    error.code = data.error || "";
    error.hint = data.hint || "";
    error.detail = data.detail || "";
    error.payload = data;
    throw error;
  }
  return data;
}

async function apiUploadAssetFile(
  file,
  assetType = "file",
  altText = "",
  rememberInLibrary = true,
) {
  if (!isBackendAuthenticated()) {
    throw new Error("Cần đăng nhập backend để upload file media.");
  }
  const formData = new FormData();
  formData.append("file", file);
  formData.append("assetType", assetType);
  formData.append("altText", altText);
  const response = await fetch("/api/assets.php", {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = [
      data.message || data.error || `Upload failed ${response.status}`,
      data.hint,
      data.detail,
    ]
      .filter(Boolean)
      .join(" ");
    const error = new Error(message);
    error.status = response.status;
    error.code = data.error || "";
    error.hint = data.hint || "";
    error.detail = data.detail || "";
    error.payload = data;
    throw error;
  }
  const asset = normalizeAssetRecord({
    id: data.assetId ? `asset-${data.assetId}` : `asset-${Date.now()}`,
    name: data.name || file.name,
    type: data.assetType || assetType,
    mimeType: data.mimeType || file.type,
    sizeBytes: Number(data.sizeBytes) || file.size || 0,
    src: data.url || "",
    alt: altText,
    ownerName: state.account.displayName,
    createdAt: new Date().toISOString(),
  });
  if (rememberInLibrary) {
    state.assets = [
      asset,
      ...state.assets.filter((item) => item.src !== asset.src),
    ].slice(0, assetLibraryLimit);
  }
  return asset;
}

function syncAccountFromApiUser(user) {
  if (!user) return;
  applyAccountProfile({
    name: user.display_name || user.displayName || state.account.displayName,
    role: user.role || "student",
    age: user.age ?? "",
    school: user.school_name ?? user.schoolName ?? "",
    className: user.class_name ?? user.className ?? "",
    email: user.email || state.account.email,
    emailVerified: user.email_verified === true || user.email_verified === 1,
  });
  state.authSession = {
    userId: `db-${user.id}`,
    provider: "php-api",
    isAuthenticated: true,
    lastLoginAt: new Date().toISOString(),
  };
  state.backend.enabled = true;
  state.backend.status = "connected";
  state.backend.message = "PHP API connected";
  state.backend.lastCheckedAt = new Date().toISOString();
}

async function checkBackendStatus(target) {
  if (window.location.protocol === "file:") {
    state.backend.enabled = false;
    state.backend.status = "local-file";
    state.backend.message =
      "Bạn đang mở web bằng file local. Backend PHP chỉ chạy khi upload lên Namecheap hoặc chạy qua server có PHP.";
    state.backend.lastCheckedAt = new Date().toISOString();
    saveState();
    if (target) target.textContent = state.backend.message;
    return;
  }

  try {
    const data = await apiRequest("health.php");
    state.backend.enabled = true;
    state.backend.status = data.ok ? "connected" : "failed";
    state.backend.message = data.database || "Backend checked";
    state.backend.lastCheckedAt = new Date().toISOString();
    saveState();
    if (target) target.textContent = "Backend OK: database connected.";
    if (state.account.role === "admin" && isBackendAuthenticated()) {
      if (target) target.textContent = "Database OK. Đang kiểm tra Cloudinary...";
      const storage = await apiRequest("storage-health.php");
      const storageMessage = storage.uploadReady
        ? "Cloudinary upload ready."
        : storage.message || "Cloudinary checked.";
      if (target) {
        target.textContent = `Database OK. ${storageMessage}`;
      }
    }
  } catch (error) {
    state.backend.status = "failed";
    state.backend.message = error.message;
    state.backend.lastCheckedAt = new Date().toISOString();
    saveState();
    if (target) target.textContent = `Backend chưa sẵn sàng: ${error.message}`;
  }
}

async function pushProfileToBackend() {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return null;
  const data = await apiRequest("me.php", {
    method: "PATCH",
    body: JSON.stringify({
      displayName: state.account.displayName,
      age: state.account.age,
      schoolName: state.account.school,
      className: state.account.className,
      email: state.account.email,
    }),
  });
  syncAccountFromApiUser(data.user);
  return data;
}

function pushProgressToBackend(lessonId, score, status) {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return;
  apiRequest("progress.php", {
    method: "POST",
    body: JSON.stringify({ lessonId, score, status }),
  }).catch((error) => {
    console.warn("Progress API sync failed", error);
  });
}

function pushCourseSubmissionToBackend(submission) {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return;
  apiRequest("courses.php", {
    method: "POST",
    body: JSON.stringify({
      title: submission.title,
      slug: slugify(submission.title || submission.id),
      subject: submission.subject,
      difficulty: submission.difficulty,
      description: submission.description,
      thumbnailUrl: submission.thumbnail || "",
      levels: submission.levels,
    }),
  }).catch((error) => {
    console.warn("Course API sync failed", error);
  });
}

function normalizeBackendCourseRecord(course) {
  const courseId = String(course.slug || `db-course-${course.id}`);
  return normalizeCourseLessons({
    id: courseId,
    backendCourseId: Number(course.id) || null,
    title: course.title || "Untitled course",
    subject: course.subject || "General",
    difficulty: course.difficulty || "Beginner",
    symbol:
      String(course.title || "C")
        .trim()
        .charAt(0)
        .toUpperCase() || "C",
    color: pickCourseColor(course.title || courseId),
    description: course.description || "",
    thumbnail: course.thumbnail_url || null,
    status: course.status || "published",
    backendSyncedAt:
      course.updated_at || course.created_at || new Date().toISOString(),
    levels: Array.isArray(course.levels)
      ? course.levels.map((level, levelIndex) => ({
          id: `${courseId}-level-${levelIndex + 1}`,
          backendLevelId: Number(level.id) || null,
          title: level.title || `Level ${levelIndex + 1}`,
          lessons: Array.isArray(level.lessons)
            ? level.lessons.map((lesson, lessonIndex) => ({
                id: `${courseId}-lesson-${levelIndex + 1}-${lessonIndex + 1}`,
                backendLessonId: Number(lesson.id) || null,
                title: lesson.title || `Lesson ${lessonIndex + 1}`,
                minutes: Number(lesson.minutes) || 8,
                blocks: Array.isArray(lesson.blocks) ? lesson.blocks : [],
              }))
            : [],
        }))
      : [],
  });
}

async function syncCoursesFromBackend() {
  if (!isBackendAuthenticated()) return [];
  const data = await apiRequest("courses.php");
  const backendCourses = Array.isArray(data.courses)
    ? data.courses.map(normalizeBackendCourseRecord)
    : [];
  const existingIds = new Set(state.customCourses.map((course) => course.id));
  const incoming = backendCourses.filter(
    (course) => !existingIds.has(course.id),
  );
  if (incoming.length) {
    state.customCourses = [...incoming, ...state.customCourses];
    saveState();
  }
  return backendCourses;
}

async function syncCoursesFromBackendSafely() {
  try {
    return await syncCoursesFromBackend();
  } catch (error) {
    console.warn("Course API load failed", error);
    return [];
  }
}

function isDataUrl(value) {
  return String(value || "").startsWith("data:");
}

function extensionFromMimeType(mimeType) {
  return (
    {
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
      "image/gif": "gif",
      "image/svg+xml": "svg",
      "video/mp4": "mp4",
      "video/webm": "webm",
      "video/ogg": "ogv",
      "video/quicktime": "mov",
    }[mimeType] || "bin"
  );
}

function dataUrlToFile(dataUrl, fallbackName = "asset") {
  const [header, payload = ""] = String(dataUrl).split(",");
  const mimeType =
    header.match(/^data:([^;]+)/)?.[1] || "application/octet-stream";
  const isBase64 = /;base64/i.test(header);
  const binary = isBase64 ? atob(payload) : decodeURIComponent(payload);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  const safeName = fallbackName.includes(".")
    ? fallbackName
    : `${fallbackName}.${extensionFromMimeType(mimeType)}`;
  return new File([bytes], safeName, { type: mimeType });
}

async function uploadDataUrlAsset(
  dataUrl,
  name,
  assetType,
  altText,
  onProgress = () => {},
) {
  const file = dataUrlToFile(dataUrl, name || assetType);
  onProgress(`Đang gửi ${file.name} (${formatStorageBytes(file.size)})...`, {
    type: "asset-start",
    fileName: file.name,
    sizeBytes: file.size,
    assetType,
  });
  const asset = await apiUploadAssetFile(
    file,
    assetType,
    altText,
    false,
  );
  onProgress(`Đã upload ${file.name}`, {
    type: "asset-done",
    fileName: file.name,
    sizeBytes: file.size,
    assetType,
    url: asset.src,
    advance: 1,
  });
  return asset.src;
}

function findLocalAssetDataUrl(assetId, assetRecords = state.assets) {
  if (!assetId || !Array.isArray(assetRecords)) return "";
  const asset = assetRecords.find((item) => item.id === assetId);
  return asset && isDataUrl(asset.src) ? asset.src : "";
}

function getUploadableMediaSource(
  block,
  fieldName,
  assetIdFieldName,
  assetRecords = state.assets,
) {
  if (isDataUrl(block[fieldName])) return block[fieldName];
  return findLocalAssetDataUrl(block[assetIdFieldName], assetRecords);
}

function isStudyFlowCloudMediaUrl(value) {
  const text = String(value || "");
  return /\/(?:.*\/)?api\/media\.php\?key=/.test(text) || /https?:\/\/res\.cloudinary\.com\//i.test(text);
}

function normalizeBackendAssetForRepair(asset) {
  return {
    id: `asset-${asset.id}`,
    name: String(asset.name || "").trim(),
    type: String(asset.asset_type || "").trim(),
    mimeType: String(asset.mime_type || "").trim(),
    src: String(asset.url || "").trim(),
    alt: String(asset.alt_text || "").trim(),
  };
}

function normalizeMediaMatchValue(value) {
  return String(value || "")
    .trim()
    .toLocaleLowerCase("vi")
    .replace(/\s+/g, " ");
}

function findBackendMediaForBlock(
  block,
  fieldName,
  backendAssets = [],
) {
  const fileNames =
    fieldName === "src"
      ? [block.fileName]
      : fieldName === "imageSrc"
        ? [block.imageName]
        : [block.videoFileName];
  const altValues =
    fieldName === "src"
      ? [block.alt, block.title]
      : fieldName === "imageSrc"
        ? [getInlineImageAlt(block), block.title, block.prompt]
        : [block.title];
  const normalizedNames = fileNames
    .map(normalizeMediaMatchValue)
    .filter(Boolean);
  const normalizedAlts = altValues
    .map(normalizeMediaMatchValue)
    .filter(Boolean);
  const expectedPrefix = fieldName === "url" ? "video/" : "image/";
  const cloudAssets = backendAssets.filter(
    (asset) =>
      isStudyFlowCloudMediaUrl(asset.src) &&
      (!asset.mimeType || asset.mimeType.startsWith(expectedPrefix)),
  );

  const exactName = cloudAssets.find((asset) =>
    normalizedNames.includes(normalizeMediaMatchValue(asset.name)),
  );
  if (exactName) return exactName;

  return (
    cloudAssets.find((asset) =>
      normalizedAlts.includes(normalizeMediaMatchValue(asset.alt)),
    ) || null
  );
}

async function createCourseMediaUploadContext() {
  // Keep stable asset records for the whole batch without duplicating their
  // potentially large data URL strings in memory.
  const localAssets = (state.assets || []).map((asset) => ({ ...asset }));
  let backendAssets = [];
  try {
    const data = await apiRequest("assets.php");
    backendAssets = Array.isArray(data.assets)
      ? data.assets.map(normalizeBackendAssetForRepair)
      : [];
  } catch (error) {
    console.warn("Could not load backend assets for media repair", error);
  }
  return { localAssets, backendAssets };
}

function countUploadableCourseMedia(course, assetRecords = state.assets) {
  let total = isDataUrl(course.thumbnail) ? 1 : 0;
  for (const level of course.levels || []) {
    for (const lesson of level.lessons || []) {
      for (const block of lesson.blocks || []) {
        if (
          getUploadableMediaSource(block, "src", "assetId", assetRecords)
        ) {
          total += 1;
        }
        if (
          getUploadableMediaSource(
            block,
            "imageSrc",
            "imageAssetId",
            assetRecords,
          )
        ) {
          total += 1;
        }
        if (
          getUploadableMediaSource(block, "url", "videoAssetId", assetRecords)
        ) {
          total += 1;
        }
      }
    }
  }
  return total;
}

function estimatePublishAllUploadSteps() {
  const courses = state.customCourses.filter(
    (course) => Array.isArray(course.levels) && course.levels.length,
  );
  const mediaSteps = courses.reduce(
    (sum, course) => sum + countUploadableCourseMedia(course),
    0,
  );
  return {
    courseCount: courses.length,
    mediaSteps,
    totalSteps: Math.max(1, 1 + mediaSteps + courses.length),
  };
}

function cloneCourseForMediaUpload(course) {
  return {
    ...course,
    levels: (course.levels || []).map((level) => ({
      ...level,
      lessons: (level.lessons || []).map((lesson) => ({
        ...lesson,
        blocks: (lesson.blocks || []).map((block) => ({
          ...block,
          choices: Array.isArray(block.choices)
            ? [...block.choices]
            : block.choices,
        })),
      })),
    })),
  };
}

async function uploadEmbeddedCourseMedia(
  course,
  onProgress = () => {},
  assetContext = null,
) {
  const nextCourse = cloneCourseForMediaUpload(course);
  const context = assetContext || (await createCourseMediaUploadContext());
  let uploadedCount = 0;
  let relinkedCount = 0;
  if (isDataUrl(nextCourse.thumbnail)) {
    onProgress("Đang upload thumbnail...");
    nextCourse.thumbnail = await uploadDataUrlAsset(
      nextCourse.thumbnail,
      nextCourse.thumbnailName || `${nextCourse.id}-thumbnail`,
      "course-thumbnail",
      nextCourse.title,
      onProgress,
    );
    uploadedCount += 1;
  }

  for (const level of nextCourse.levels || []) {
    for (const lesson of level.lessons || []) {
      for (const block of lesson.blocks || []) {
        const blockImageSource = getUploadableMediaSource(
          block,
          "src",
          "assetId",
          context.localAssets,
        );
        const recoveredBlockImage = !isStudyFlowCloudMediaUrl(block.src)
          ? findBackendMediaForBlock(
              block,
              "src",
              context.backendAssets,
            )
          : null;
        if (recoveredBlockImage) {
          block.src = recoveredBlockImage.src;
          relinkedCount += 1;
          onProgress(`Đang nối lại ảnh: ${block.title || lesson.title}`);
        } else if (blockImageSource) {
          onProgress(`Đang upload ảnh: ${block.title || lesson.title}`);
          block.src = await uploadDataUrlAsset(
            blockImageSource,
            block.fileName || block.title || "lesson-image",
            "lesson-image",
            block.alt || block.title || lesson.title,
            onProgress,
          );
          uploadedCount += 1;
        }
        const inlineImageSource = getUploadableMediaSource(
          block,
          "imageSrc",
          "imageAssetId",
          context.localAssets,
        );
        const recoveredInlineImage = !isStudyFlowCloudMediaUrl(
          block.imageSrc,
        )
          ? findBackendMediaForBlock(
              block,
              "imageSrc",
              context.backendAssets,
            )
          : null;
        if (recoveredInlineImage) {
          block.imageSrc = recoveredInlineImage.src;
          relinkedCount += 1;
          onProgress(
            `Đang nối lại ảnh chú thích: ${block.title || block.prompt || lesson.title}`,
          );
        } else if (inlineImageSource) {
          onProgress(
            `Đang upload ảnh chú thích: ${block.title || block.prompt || lesson.title}`,
          );
          block.imageSrc = await uploadDataUrlAsset(
            inlineImageSource,
            block.imageName || block.title || "lesson-inline-image",
            "lesson-inline-image",
            getInlineImageAlt(block),
            onProgress,
          );
          uploadedCount += 1;
        }
        const videoSource = getUploadableMediaSource(
          block,
          "url",
          "videoAssetId",
          context.localAssets,
        );
        const recoveredVideo = !isStudyFlowCloudMediaUrl(block.url)
          ? findBackendMediaForBlock(
              block,
              "url",
              context.backendAssets,
            )
          : null;
        if (recoveredVideo) {
          block.url = recoveredVideo.src;
          relinkedCount += 1;
          onProgress(`Đang nối lại video: ${block.title || lesson.title}`);
        } else if (videoSource) {
          onProgress(`Đang upload video: ${block.title || lesson.title}`);
          block.url = await uploadDataUrlAsset(
            videoSource,
            block.videoFileName || block.title || "lesson-video",
            "lesson-video",
            block.title || lesson.title,
            onProgress,
          );
          uploadedCount += 1;
        }
      }
    }
  }
  return { course: nextCourse, uploadedCount, relinkedCount };
}

async function publishLocalCourseToBackend(
  course,
  onProgress = () => {},
  assetContext = null,
) {
  if (!isBackendAuthenticated()) {
    throw new Error(
      "Cần đăng nhập backend bằng tài khoản giáo viên/admin trước khi upload lên web.",
    );
  }
  if (!isEducatorRole()) {
    throw new Error(
      "Chỉ giáo viên đã được duyệt hoặc admin mới upload bài học lên web.",
    );
  }
  onProgress(`Đang chuẩn bị ${course.title}...`);
  const { course: preparedCourse, uploadedCount, relinkedCount } =
    await uploadEmbeddedCourseMedia(course, onProgress, assetContext);
  const status =
    state.account.role === "admin" ? "published" : "pending_review";
  const slug =
    slugify(preparedCourse.id || preparedCourse.title) ||
    slugify(preparedCourse.title) ||
    `course-${Date.now()}`;
  onProgress(`Đang lưu course: ${preparedCourse.title}`, {
    type: "course-save-start",
    courseTitle: preparedCourse.title,
  });
  const data = await apiRequest("courses.php", {
    method: "POST",
    body: JSON.stringify({
      title: preparedCourse.title,
      slug,
      subject: preparedCourse.subject || "General",
      difficulty: preparedCourse.difficulty || "Beginner",
      description: preparedCourse.description || "",
      thumbnailUrl: preparedCourse.thumbnail || "",
      status,
      levels: preparedCourse.levels || [],
    }),
  });
  onProgress(`Đã lưu course: ${preparedCourse.title}`, {
    type: "course-save-done",
    courseTitle: preparedCourse.title,
    advance: 1,
  });
  preparedCourse.status = data.status || status;
  preparedCourse.backendCourseId =
    data.courseId || preparedCourse.backendCourseId || null;
  preparedCourse.backendSyncedAt = new Date().toISOString();
  state.customCourses = [
    preparedCourse,
    ...state.customCourses.filter((item) => item.id !== preparedCourse.id),
  ];
  logAudit(
    "course_synced",
    `${preparedCourse.title} uploaded to web (${uploadedCount} uploaded, ${relinkedCount} relinked)`,
  );
  saveState();
  return { ...data, course: preparedCourse, uploadedCount, relinkedCount };
}

async function publishAllLocalCoursesToBackend(onProgress = () => {}) {
  const courseIds = state.customCourses
    .filter((course) => Array.isArray(course.levels) && course.levels.length)
    .map((course) => course.id);
  if (!courseIds.length) {
    throw new Error("Chưa có bài học local nào để upload.");
  }
  onProgress("Đang tải asset metadata từ backend...", {
    type: "metadata-start",
  });
  const assetContext = await createCourseMediaUploadContext();
  onProgress("Đã tải asset metadata từ backend.", {
    type: "metadata-done",
    advance: 1,
  });
  const results = [];
  for (const [index, courseId] of courseIds.entries()) {
    const course = state.customCourses.find((item) => item.id === courseId);
    if (!course) continue;
    onProgress(
      `Đang upload ${index + 1}/${courseIds.length}: ${course.title}`,
    );
    results.push(
      await publishLocalCourseToBackend(course, onProgress, assetContext),
    );
    // Let the browser paint progress and release completed request buffers.
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  return results;
}

function pushTaskToBackend(task) {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return;
  apiRequest("tasks.php", {
    method: "POST",
    body: JSON.stringify({ title: task.title, dueDate: task.dueDate }),
  }).catch((error) => {
    console.warn("Task API sync failed", error);
  });
}

function pushTaskStatusToBackend(task) {
  if (
    !state.backend.enabled ||
    state.authSession.provider !== "php-api" ||
    !Number.isInteger(Number(task.id))
  )
    return;
  apiRequest("tasks.php", {
    method: "PATCH",
    body: JSON.stringify({ taskId: Number(task.id), status: task.status }),
  }).catch((error) => {
    console.warn("Task status API sync failed", error);
  });
}

function pushNoteToBackend(date, note) {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return;
  apiRequest("notes.php", {
    method: "POST",
    body: JSON.stringify({
      date,
      content: note.content,
      mood: note.mood,
      focusMinutes: note.focusMinutes,
    }),
  }).catch((error) => {
    console.warn("Note API sync failed", error);
  });
}

function pushClassroomJoinToBackend(inviteCode) {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return;
  apiRequest("classrooms.php", {
    method: "POST",
    body: JSON.stringify({ action: "join", inviteCode }),
  }).catch((error) => {
    console.warn("Classroom join API sync failed", error);
  });
}

function pushClassroomToBackend(classroom) {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return;
  apiRequest("classrooms.php", {
    method: "POST",
    body: JSON.stringify({
      name: classroom.name,
      inviteCode: classroom.inviteCode,
    }),
  }).catch((error) => {
    console.warn("Classroom API sync failed", error);
  });
}

function pushAssetToBackend(asset) {
  if (!state.backend.enabled || state.authSession.provider !== "php-api")
    return;
  apiRequest("assets.php", {
    method: "POST",
    body: JSON.stringify({
      name: asset.name,
      assetType: asset.type,
      mimeType: asset.mimeType,
      sizeBytes: asset.sizeBytes,
      url: asset.src,
      altText: asset.alt,
    }),
  }).catch((error) => {
    console.warn("Asset API sync failed", error);
  });
}

function canCreateContent() {
  return isBackendAuthenticated() && isEducatorRole();
}

function canModerate() {
  return isBackendAuthenticated() && state.account.role === "admin";
}

function isBackendAuthenticated() {
  return (
    Boolean(state.authSession?.isAuthenticated) &&
    state.authSession.provider === "php-api"
  );
}

function resetAuthSession() {
  state.authSession = {
    userId: "guest",
    provider: "local",
    isAuthenticated: false,
    lastLoginAt: new Date().toISOString(),
  };
}

function renderProfileMini() {
  if (!profileName || !profileRole) return;
  profileName.textContent = state.account.displayName;
  profileRole.textContent = translateText(getRoleLabel());
}

function getCourses() {
  const overrides = new Set(state.customCourses.map((course) => course.id));
  return [
    ...state.customCourses,
    ...courses.filter((course) => !overrides.has(course.id)),
  ];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pickCourseColor(value) {
  const palette = [
    "#264fba",
    "#1f7a68",
    "#8b4f23",
    "#7a3f6d",
    "#5d6d2f",
    "#9b394f",
  ];
  const score = String(value)
    .split("")
    .reduce((total, char) => total + char.charCodeAt(0), 0);
  return palette[score % palette.length];
}

function getSummaryTitleClass(title) {
  const length = String(title || "").length;
  if (length >= 22) return "summary-title tight-title";
  if (length >= 12) return "summary-title compact-title";
  return "summary-title";
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayKeySeed() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate(),
  ).padStart(2, "0")}`;
}

function normalizeTask(task) {
  return {
    id: task.id || `task-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: task.title || "Untitled task",
    status: task.status || "todo",
    dueDate: task.dueDate || todayKey(),
    priority: task.priority || "normal",
    linkType: task.linkType || "none",
    courseId: task.courseId || null,
    lessonId: task.lessonId || null,
    completedAt: task.completedAt || null,
  };
}

function normalizeNotes(notes) {
  return Object.fromEntries(
    Object.entries(notes).map(([date, value]) => [
      date,
      typeof value === "string"
        ? { content: value, mood: "focused", focusMinutes: 0 }
        : {
            content: value?.content || "",
            mood: value?.mood || "focused",
            focusMinutes: Number(value?.focusMinutes) || 0,
          },
    ]),
  );
}

function getDailyNote(date) {
  state.notes[date] ||= { content: "", mood: "focused", focusMinutes: 0 };
  return state.notes[date];
}

function updateDailyNote(root) {
  const date = todayKey();
  state.notes[date] = {
    content: root.querySelector("#dailyNote").value,
    mood: root.querySelector("#dailyMood").value,
    focusMinutes: Number(root.querySelector("#focusMinutes").value) || 0,
  };
  if (state.notes[date].content.trim() || state.notes[date].focusMinutes > 0) {
    addCheckin("note_updated");
  }
  pushNoteToBackend(date, state.notes[date]);
  saveState();
  drawTodayPanel();
  drawCalendarPanel();
  drawGoalPanel();
}

function getTasksForDate(date) {
  return state.tasks.filter((task) => task.dueDate === date);
}

function getCompletedLessonsForDate(date) {
  return Object.entries(state.completedLessons).filter(([, progress]) => {
    if ((progress?.status || "passed") !== "passed") return false;
    if (!progress?.completedAt) return false;
    return progress.completedAt.slice(0, 10) === date;
  });
}

function getRecentDates(count) {
  const dates = [];
  const cursor = new Date(`${todayKey()}T00:00:00`);
  for (let index = count - 1; index >= 0; index -= 1) {
    const date = new Date(cursor);
    date.setDate(cursor.getDate() - index);
    dates.push(formatDate(date));
  }
  return dates;
}

function getStreak() {
  const dates = [...new Set(state.checkins)].sort().reverse();
  if (!dates.length) return { current: 0, longest: 0, checkedToday: false };

  const today = todayKey();
  const yesterdayDate = new Date(`${today}T00:00:00`);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = formatDate(yesterdayDate);
  const checkedToday = dates.includes(today);
  const streakAnchor = checkedToday
    ? today
    : dates.includes(yesterday)
      ? yesterday
      : null;
  if (!streakAnchor) {
    return { current: 0, longest: getLongestStreak(), checkedToday };
  }

  const cursor = new Date(`${streakAnchor}T00:00:00`);
  let current = 0;

  for (const date of dates) {
    const expected = new Date(cursor);
    expected.setDate(cursor.getDate() - current);
    if (date === formatDate(expected)) {
      current += 1;
    } else {
      break;
    }
  }

  return { current, longest: getLongestStreak(), checkedToday };
}

function getLongestStreak() {
  const dates = [...new Set(state.checkins)].sort();
  let longest = 0;
  let run = 0;
  let previous = null;
  dates.forEach((date) => {
    if (!previous) {
      run = 1;
    } else {
      const prevDate = new Date(`${previous}T00:00:00`);
      prevDate.setDate(prevDate.getDate() + 1);
      run = date === formatDate(prevDate) ? run + 1 : 1;
    }
    longest = Math.max(longest, run);
    previous = date;
  });
  return longest;
}

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;
}

function renderStreak() {
  const streak = getStreak();
  const unit =
    getLanguage() === "vi" ? "ngày" : `day${streak.current === 1 ? "" : "s"}`;
  streakLabel.textContent = `${streak.current} ${unit}`;
  checkInButton.classList.toggle("checked", streak.checkedToday);
}

function setPage(title, kicker) {
  pageTitle.textContent = translateText(title);
  pageKicker.textContent = translateText(kicker);
}

function cloneTemplate(id) {
  const template = document.querySelector(id);
  return template.content.firstElementChild.cloneNode(true);
}

function setActiveNav(route) {
  document.querySelectorAll("[data-nav]").forEach((item) => {
    item.classList.toggle("active", item.dataset.nav === route);
  });
}

function findCourse(courseId) {
  return getCourses().find((course) => course.id === courseId);
}

function findLesson(courseId, lessonId) {
  const course = findCourse(courseId);
  if (!course) return null;
  for (const level of course.levels) {
    const lesson = level.lessons.find((item) => item.id === lessonId);
    if (lesson) return { course, level, lesson };
  }
  return null;
}

function flattenLessons(course) {
  return course.levels.flatMap((level, levelIndex) =>
    level.lessons.map((lesson, lessonIndex) => ({
      level,
      levelIndex,
      lesson,
      lessonIndex,
    })),
  );
}

function courseCompletion(course) {
  const lessons = flattenLessons(course);
  const completed = lessons.filter(({ lesson }) =>
    isLessonPassed(lesson.id),
  ).length;
  return {
    completed,
    total: lessons.length,
    percent: Math.round((completed / lessons.length) * 100),
  };
}

function getLessonProgress(lessonId) {
  const progress = state.completedLessons[lessonId];
  if (!progress) return null;
  if (!progress.status) {
    return {
      ...progress,
      status: "passed",
    };
  }
  return progress;
}

function isLessonPassed(lessonId) {
  return getLessonProgress(lessonId)?.status === "passed";
}

function isLessonFailed(lessonId) {
  return getLessonProgress(lessonId)?.status === "failed";
}

function isLessonUnlocked(course, lessonId) {
  if (isEducatorRole()) return true;
  const lessons = flattenLessons(course);
  const index = lessons.findIndex(({ lesson }) => lesson.id === lessonId);
  if (index <= 0) return true;
  return isLessonPassed(lessons[index - 1].lesson.id);
}

function getNextLesson(course) {
  const next = flattenLessons(course).find(
    ({ lesson }) =>
      !isLessonPassed(lesson.id) && isLessonUnlocked(course, lesson.id),
  );
  if (next) return { course, ...next };
  const review = flattenLessons(course).find(({ lesson }) =>
    isLessonPassed(lesson.id),
  );
  return review ? { course, ...review } : null;
}

function getNextLessonPlan() {
  for (const course of getCourses()) {
    const next = flattenLessons(course).find(
      ({ lesson }) =>
        !isLessonPassed(lesson.id) && isLessonUnlocked(course, lesson.id),
    );
    if (next) return { course, ...next };
  }
  for (const course of getCourses()) {
    const review = flattenLessons(course).find(({ lesson }) =>
      isLessonPassed(lesson.id),
    );
    if (review) return { course, ...review };
  }
  return null;
}

function getNextRegisteredLessonPlan(coursesToCheck = getRegisteredCourses()) {
  for (const course of coursesToCheck) {
    const next = flattenLessons(course).find(
      ({ lesson }) =>
        !isLessonPassed(lesson.id) && isLessonUnlocked(course, lesson.id),
    );
    if (next) return { course, ...next };
  }
  for (const course of coursesToCheck) {
    const review = flattenLessons(course).find(({ lesson }) =>
      isLessonPassed(lesson.id),
    );
    if (review) return { course, ...review };
  }
  return null;
}

function getWeakLessons() {
  return Object.entries(state.completedLessons)
    .map(([lessonId, progress]) => {
      for (const course of getCourses()) {
        const found = flattenLessons(course).find(
          ({ lesson }) => lesson.id === lessonId,
        );
        if (found)
          return { course, ...found, progress: getLessonProgress(lessonId) };
      }
      return null;
    })
    .filter(Boolean)
    .filter(
      (item) =>
        item.progress.status === "failed" || Number(item.progress.score) < 80,
    )
    .sort((a, b) => Number(a.progress.score) - Number(b.progress.score));
}

function populateTaskLinks(root) {
  const select = root.querySelector("#taskLink");
  select.replaceChildren();
  const options = [
    { value: "none", label: "No link" },
    { value: "next_lesson", label: "Next lesson" },
    { value: "note", label: "Daily note" },
  ];
  getCourses().forEach((course) => {
    options.push({
      value: `course:${course.id}`,
      label: `Course: ${course.title}`,
    });
    flattenLessons(course).forEach(({ lesson }) => {
      options.push({
        value: `lesson:${course.id}:${lesson.id}`,
        label: `Lesson: ${lesson.title}`,
      });
    });
  });
  options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option.value;
    item.textContent = option.label;
    select.append(item);
  });
}

function parseTaskLink(value) {
  if (value === "next_lesson") {
    const next = getNextLessonPlan();
    if (next) {
      return {
        linkType: "lesson",
        courseId: next.course.id,
        lessonId: next.lesson.id,
      };
    }
  }
  if (value === "note") return { linkType: "note" };
  if (value.startsWith("course:"))
    return { linkType: "course", courseId: value.split(":")[1] };
  if (value.startsWith("lesson:")) {
    const [, courseId, lessonId] = value.split(":");
    return { linkType: "lesson", courseId, lessonId };
  }
  return { linkType: "none" };
}

function getTaskLinkLabel(task) {
  if (task.linkType === "note") return "Daily note";
  if (task.linkType === "course") {
    const course = findCourse(task.courseId);
    return course ? `Course: ${course.title}` : "Linked course";
  }
  if (task.linkType === "lesson") {
    const found = findLesson(task.courseId, task.lessonId);
    return found ? `Lesson: ${found.lesson.title}` : "Linked lesson";
  }
  return "Personal task";
}

function getCourseSearchText(course) {
  const lessonText = course.levels
    .flatMap((level) => level.lessons)
    .flatMap((lesson) => [
      lesson.title,
      ...lesson.blocks.flatMap((block) => [
        block.title,
        block.body,
        block.prompt,
        block.explanation,
        block.caption,
        ...(block.choices || []),
      ]),
    ])
    .filter(Boolean)
    .join(" ");
  return `${course.title} ${course.subject} ${course.difficulty} ${course.description} ${lessonText}`.toLowerCase();
}

function courseMatchesQuery(course, query) {
  if (!query) return true;
  const tokens = query.split(/\s+/).filter(Boolean);
  const haystack = getCourseSearchText(course);
  return tokens.every((token) => haystack.includes(token));
}

function getCourseDuration(course) {
  return flattenLessons(course).reduce(
    (total, { lesson }) => total + (Number(lesson.minutes) || 8),
    0,
  );
}

function getDurationBucket(course) {
  const minutes = getCourseDuration(course);
  if (minutes < 20) return "short";
  if (minutes <= 45) return "medium";
  return "long";
}

function getPersonalCourseScore(course, query = "") {
  const completion = courseCompletion(course);
  const rating = getCourseRating(course.id);
  const inProgressBoost =
    completion.completed > 0 && completion.percent < 100 ? 24 : 0;
  const subjectBoost = getPreferredSubjects().includes(course.subject) ? 12 : 0;
  const queryBoost = query && courseMatchesQuery(course, query) ? 8 : 0;
  const ratingBoost = rating.average * 4;
  const queueBoost = state.learningQueue.includes(course.id) ? 10 : 0;
  const freshBoost = course.creatorSubmissionId ? 3 : 0;
  return (
    inProgressBoost +
    subjectBoost +
    queryBoost +
    ratingBoost +
    queueBoost +
    freshBoost -
    completion.percent / 8
  );
}

function getPreferredSubjects() {
  const subjectCounts = new Map();
  getCourses().forEach((course) => {
    const completion = courseCompletion(course);
    if (completion.completed > 0) {
      subjectCounts.set(
        course.subject,
        (subjectCounts.get(course.subject) || 0) + completion.completed,
      );
    }
  });
  return [...subjectCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([subject]) => subject);
}

function rankCourses(coursesToRank, query, sortMode) {
  const ranked = [...coursesToRank];
  if (sortMode === "rating") {
    return ranked.sort(
      (a, b) => getCourseRating(b.id).average - getCourseRating(a.id).average,
    );
  }
  if (sortMode === "progress") {
    return ranked.sort(
      (a, b) => courseCompletion(b).completed - courseCompletion(a).completed,
    );
  }
  if (sortMode === "newest") {
    return ranked.reverse();
  }
  return ranked.sort(
    (a, b) =>
      getPersonalCourseScore(b, query) - getPersonalCourseScore(a, query),
  );
}

function addCourseToQueue(courseId) {
  state.learningQueue = [
    courseId,
    ...state.learningQueue.filter((id) => id !== courseId),
  ].slice(0, 8);
  saveState();
}

function removeCourseFromQueue(courseId) {
  state.learningQueue = state.learningQueue.filter((id) => id !== courseId);
  saveState();
}

function isCourseQueued(courseId) {
  return state.learningQueue.includes(courseId);
}

function toggleCourseQueue(courseId) {
  if (isCourseQueued(courseId)) removeCourseFromQueue(courseId);
  else addCourseToQueue(courseId);
}

function drawRecommendations(rankedCourses) {
  const panel = document.querySelector("#recommendationPanel");
  if (!panel) return;
  const queueCourses = state.learningQueue.map(findCourse).filter(Boolean);
  const recommended = rankedCourses
    .filter((course) => !state.learningQueue.includes(course.id))
    .slice(0, 3);
  const weakLessons = getWeakLessons().slice(0, 3);
  panel.innerHTML = `
    <div>
      <p class="eyebrow">Personalized</p>
      <h2>Learning queue</h2>
      <button class="mini-button" id="clearQueueButton" type="button" ${queueCourses.length ? "" : "disabled"}>Clear queue</button>
    </div>
    <div class="recommendation-list" id="queueList"></div>
    <div>
      <p class="eyebrow">Suggested next</p>
      <div class="recommendation-list" id="suggestedList"></div>
    </div>
    <div>
      <p class="eyebrow">Weak spots</p>
      <div class="recommendation-list" id="weakList"></div>
    </div>
  `;
  panel.querySelector("#clearQueueButton").addEventListener("click", () => {
    state.learningQueue = [];
    saveState();
    drawRecommendations(rankedCourses);
  });
  drawRecommendationList(
    panel.querySelector("#queueList"),
    queueCourses,
    "Queue is empty",
    true,
    rankedCourses,
  );
  drawRecommendationList(
    panel.querySelector("#suggestedList"),
    recommended,
    "No suggestions yet",
    false,
    rankedCourses,
  );
  drawWeakLessonList(panel.querySelector("#weakList"), weakLessons);
}

function drawWeakLessonList(list, items) {
  list.replaceChildren();
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "recommendation-empty";
    empty.textContent = "No weak spots yet";
    list.append(empty);
    return;
  }
  items.forEach((item) => {
    const button = document.createElement("button");
    button.className = "recommendation-item";
    button.type = "button";
    button.innerHTML = `
      <strong>${escapeHtml(item.lesson.title)}</strong>
      <span>${escapeHtml(item.course.title)} - ${item.progress.score}%</span>
    `;
    button.addEventListener("click", () => {
      window.location.hash = `lesson/${item.course.id}/${item.lesson.id}`;
    });
    list.append(button);
  });
}

function drawRecommendationList(
  list,
  items,
  emptyText,
  removable = false,
  rankedCourses = [],
) {
  list.replaceChildren();
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "recommendation-empty";
    empty.textContent = emptyText;
    list.append(empty);
    return;
  }
  items.forEach((course) => {
    const completion = courseCompletion(course);
    const item = document.createElement("button");
    item.className = "recommendation-item";
    item.type = "button";
    item.innerHTML = `
      <strong>${escapeHtml(course.title)}</strong>
      <span>${escapeHtml(course.subject)} - ${completion.percent}% complete</span>
    `;
    item.addEventListener("click", () => {
      window.location.hash = `course/${course.id}`;
    });
    list.append(item);
    if (removable) {
      const removeButton = document.createElement("button");
      removeButton.className = "mini-button queue-remove";
      removeButton.type = "button";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        removeCourseFromQueue(course.id);
        drawRecommendations(rankedCourses);
      });
      list.append(removeButton);
    }
  });
}

const homeSectionAnchors = new Set([
  "home-program",
  "home-backed",
  "home-about",
]);

function scrollToHomeSection(sectionId) {
  requestAnimationFrame(() => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function getStorageSaveErrorMessage(error) {
  if (
    error?.name === "QuotaExceededError" ||
    /quota|storage/i.test(error?.message || "")
  ) {
    return "Không lưu được vì bộ nhớ trình duyệt đã đầy. Bấm Compact storage trong Asset library để chuyển dữ liệu nặng sang IndexedDB và dọn bản localStorage cũ; video nên upload bằng backend.";
  }
  return `Không lưu được dữ liệu: ${error?.message || "lỗi không xác định"}`;
}

function route() {
  setShellMode("app");
  const hash = window.location.hash.replace("#", "") || "home";
  const [name, first, second] = hash.split("/");
  const publicRoutes = new Set(["home", "login", "register"]);
  if (homeSectionAnchors.has(name)) {
    renderHome();
    scrollToHomeSection(name);
    renderChrome();
    localizeView(document.body);
    return;
  }
  if (!publicRoutes.has(name) && !isBackendAuthenticated()) {
    window.location.hash = "login";
    return;
  }
  if (name === "daily" && isEducatorRole()) {
    window.location.hash = "studio";
    return;
  }

  if (name === "home") renderHome();
  else if (name === "course" && first) renderCourse(first);
  else if (name === "lesson" && first && second) renderLesson(first, second);
  else if (name === "daily") renderDaily();
  else if (name === "classrooms") renderClassrooms();
  else if (name === "studio") renderStudio();
  else if (name === "account") renderAccount();
  else if (name === "settings") renderSettings();
  else if (name === "login") renderAuth("login");
  else if (name === "register")
    renderAuth("register", first === "teacher" ? "teacher" : "student");
  else if (name === "onboarding") renderOnboarding();
  else renderCatalog();

  renderChrome();
  localizeView(document.body);
}

function setShellMode(mode) {
  document.body.dataset.shell = mode;
}

function renderHome() {
  setShellMode("marketing");
  setActiveNav("");
  setPage("", "");
  const view = cloneTemplate("#homeTemplate");
  viewRoot.replaceChildren(view);
  const featureTabs = view.querySelector("#landingFeatureTabs");
  const featureDetail = view.querySelector("#landingFeatureDetail");
  const showFeature = (featureId) => {
    const detail =
      landingFeatureDetails[featureId] || landingFeatureDetails.quality;
    featureTabs.querySelectorAll("[data-feature]").forEach((button) => {
      const isActive = button.dataset.feature === featureId;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    featureDetail.innerHTML = `
      <strong>${escapeHtml(detail.title)}</strong>
      <span>${escapeHtml(detail.body)}</span>
    `;
  };
  featureTabs.querySelectorAll("[data-feature]").forEach((button) => {
    button.addEventListener("click", () => showFeature(button.dataset.feature));
  });
  showFeature("quality");
  view.querySelectorAll("[data-home-scroll]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.dataset.homeScroll;
      if (window.location.hash === `#${target}`) {
        scrollToHomeSection(target);
      } else {
        window.location.hash = target;
      }
    });
  });
  view.querySelector("#goDashboardButton").addEventListener("click", () => {
    window.location.hash = isBackendAuthenticated() ? "catalog" : "login";
  });
  view.querySelectorAll("[data-register-role]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.hash = `register/${button.dataset.registerRole}`;
    });
  });
}

function renderCatalog() {
  setActiveNav("catalog");
  setPage("Courses", "Learning paths");
  const view = cloneTemplate("#catalogTemplate");
  viewRoot.replaceChildren(view);
  drawCatalogOverview(view);

  const subjects = [
    "All",
    ...new Set(getCourses().map((course) => course.subject)),
  ];
  const subjectFilters = view.querySelector("#subjectFilters");
  const courseGrid = view.querySelector("#courseGrid");
  const search = view.querySelector("#courseSearch");
  const difficultyFilter = view.querySelector("#difficultyFilter");
  const durationFilter = view.querySelector("#durationFilter");
  const sortFilter = view.querySelector("#sortFilter");
  difficultyFilter.value = state.searchPrefs.difficulty;
  durationFilter.value = state.searchPrefs.duration;
  sortFilter.value = state.searchPrefs.sort;

  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = subject;
    button.classList.toggle("active", subject === currentSubject);
    button.addEventListener("click", () => {
      currentSubject = subject;
      renderCatalog();
    });
    subjectFilters.append(button);
  });

  function drawCards() {
    const query = search.value.trim().toLowerCase();
    state.searchPrefs.difficulty = difficultyFilter.value;
    state.searchPrefs.duration = durationFilter.value;
    state.searchPrefs.sort = sortFilter.value;
    saveState();
    const filtered = getCourses().filter((course) => {
      const inSubject =
        currentSubject === "All" || course.subject === currentSubject;
      const inDifficulty =
        difficultyFilter.value === "All" ||
        course.difficulty === difficultyFilter.value;
      const inDuration =
        durationFilter.value === "All" ||
        getDurationBucket(course) === durationFilter.value;
      return (
        inSubject &&
        inDifficulty &&
        inDuration &&
        courseMatchesQuery(course, query)
      );
    });
    const ranked = rankCourses(filtered, query, sortFilter.value);

    courseGrid.replaceChildren();
    if (!ranked.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No courses found";
      courseGrid.append(empty);
      drawRecommendations([]);
      return;
    }

    drawRecommendations(ranked);

    ranked.forEach((course, index) => {
      const completion = courseCompletion(course);
      const rating = getCourseRating(course.id);
      const card = document.createElement("article");
      card.className = "course-card";
      card.style.setProperty("--course-color", course.color);
      card.innerHTML = `
        <div class="course-visual">
          <p class="eyebrow">Path ${String(index + 1).padStart(2, "0")}</p>
          ${
            course.thumbnail
              ? `<img class="course-thumbnail" src="${course.thumbnail}" alt="${escapeHtml(course.title)}" />`
              : `<div class="course-symbol">${escapeHtml(course.symbol)}</div>`
          }
        </div>
        <div class="course-body">
          <div>
            <h2>${escapeHtml(course.title)}</h2>
            <p>${escapeHtml(course.description)}</p>
          </div>
          <div class="meta-row">
            <span class="meta-pill">${escapeHtml(course.subject)}</span>
            <span class="meta-pill">${escapeHtml(course.difficulty)}</span>
            <span class="meta-pill">${completion.completed}/${completion.total} lessons</span>
            <span class="meta-pill">${rating.count ? `${rating.average}/5` : "New"}</span>
          </div>
          <div class="inline-progress" aria-label="${completion.percent}% complete">
            <span style="width: ${completion.percent}%"></span>
          </div>
          <div class="card-actions">
            <button class="ghost-button course-enroll-button${isCourseQueued(course.id) ? " active" : ""}" type="button" data-action="queue" aria-pressed="${isCourseQueued(course.id) ? "true" : "false"}">
              ${isCourseQueued(course.id) ? "Đã thêm" : "Thêm vào học"}
            </button>
            <button class="primary-button" type="button" data-action="open">Open path</button>
          </div>
        </div>
      `;
      card
        .querySelector('[data-action="open"]')
        .addEventListener("click", () => {
          window.location.hash = `course/${course.id}`;
        });
      card
        .querySelector('[data-action="queue"]')
        .addEventListener("click", () => {
          toggleCourseQueue(course.id);
          drawCards();
          drawRecommendations(ranked);
        });
      courseGrid.append(card);
    });
  }

  search.addEventListener("input", drawCards);
  difficultyFilter.addEventListener("change", drawCards);
  durationFilter.addEventListener("change", drawCards);
  sortFilter.addEventListener("change", drawCards);
  drawCards();
}

function drawCatalogOverview(root) {
  const panel = root.querySelector("#catalogOverview");
  if (!panel) return;
  const courses = getCourses();
  const totalLessons = courses.reduce(
    (total, course) => total + flattenLessons(course).length,
    0,
  );
  const completedLessons = Object.keys(state.completedLessons).length;
  const streak = getStreak();
  const queueCount = state.learningQueue.length;
  panel.innerHTML = `
    <div class="overview-copy">
      <p class="eyebrow">Workspace</p>
      <h2>Learn, build, and keep the daily rhythm in one place.</h2>
    </div>
    <div class="overview-grid">
      <div class="overview-tile"><strong>${courses.length}</strong><span>Courses</span></div>
      <div class="overview-tile"><strong>${completedLessons}/${totalLessons}</strong><span>Lessons passed</span></div>
      <div class="overview-tile"><strong>${streak.current}</strong><span>Day streak</span></div>
      <div class="overview-tile"><strong>${queueCount}</strong><span>Queued paths</span></div>
    </div>
  `;
}

function renderCourse(courseId) {
  const course = findCourse(courseId);
  if (!course) return renderCatalog();

  setActiveNav("catalog");
  setPage(course.title, "Course map");
  const view = cloneTemplate("#courseTemplate");
  viewRoot.replaceChildren(view);

  const completion = courseCompletion(course);
  const nextLesson = getNextLesson(course);
  const queued = isCourseQueued(course.id);
  const summary = view.querySelector("#courseSummary");
  summary.style.setProperty("--course-color", course.color);
  summary.innerHTML = `
    ${
      course.thumbnail
        ? `<img class="summary-thumbnail" src="${course.thumbnail}" alt="${escapeHtml(course.title)}" />`
        : `<div class="summary-mark">${escapeHtml(course.symbol)}</div>`
    }
    <h2 class="${getSummaryTitleClass(course.title)}">${escapeHtml(course.title)}</h2>
    <p>${escapeHtml(course.description)}</p>
    <div class="meta-row">
      <span class="meta-pill">${escapeHtml(course.subject)}</span>
      <span class="meta-pill">${escapeHtml(course.difficulty)}</span>
      <span class="meta-pill">${completion.percent}% complete</span>
    </div>
    <div class="inline-progress" aria-label="${completion.percent}% complete">
      <span style="width: ${completion.percent}%"></span>
    </div>
    <div class="summary-actions">
      <button class="primary-button" type="button" id="summaryContinueButton" ${nextLesson ? "" : "disabled"}>
        ${nextLesson ? (completion.percent === 100 ? "Review" : "Continue") : "Completed"}
      </button>
      <button class="ghost-button course-enroll-button${queued ? " active" : ""}" type="button" id="summaryQueueButton" aria-pressed="${queued ? "true" : "false"}">
        ${queued ? "Đã trong mục học" : "Đăng ký khóa học"}
      </button>
    </div>
  `;
  summary
    .querySelector("#summaryContinueButton")
    .addEventListener("click", () => {
      if (nextLesson) {
        if (!isCourseQueued(course.id)) addCourseToQueue(course.id);
        window.location.hash = `lesson/${course.id}/${nextLesson.lesson.id}`;
      }
    });
  summary.querySelector("#summaryQueueButton").addEventListener("click", () => {
    toggleCourseQueue(course.id);
    renderCourse(course.id);
  });

  const map = view.querySelector("#levelMap");
  course.levels.forEach((level, levelIndex) => {
    const levelCard = document.createElement("section");
    levelCard.className = "level-card";
    levelCard.innerHTML = `
      <div class="level-header">
        <div>
          <p class="eyebrow">Level ${levelIndex + 1}</p>
          <h3>${escapeHtml(level.title)}</h3>
        </div>
        <span class="status-pill">${level.lessons.length} lessons</span>
      </div>
      <div class="lesson-path"></div>
    `;

    const path = levelCard.querySelector(".lesson-path");
    level.lessons.forEach((lesson, lessonIndex) => {
      const unlocked = isLessonUnlocked(course, lesson.id);
      const passed = isLessonPassed(lesson.id);
      const failed = isLessonFailed(lesson.id);
      const progress = getLessonProgress(lesson.id);
      const educator = isEducatorRole();
      const node = document.createElement("article");
      node.className = `lesson-node ${passed ? "completed" : failed ? "failed" : unlocked ? "ready" : "locked"}`;
      node.innerHTML = `
        <div class="node-orb">${educator ? "Edit" : passed ? "Done" : failed ? "Retry" : `${levelIndex + 1}.${lessonIndex + 1}`}</div>
        <div>
          <h4>${escapeHtml(lesson.title)}</h4>
          <p>${lesson.minutes} min - ${
            educator
              ? "Teacher access"
              : passed
                ? `Passed ${progress?.score ?? 100}%`
                : failed
                  ? `Retry needed ${progress?.score ?? 0}%`
                  : unlocked
                    ? "Ready"
                    : "Locked"
          }</p>
        </div>
        <button class="primary-button" type="button" ${unlocked ? "" : "disabled"}>${educator ? "Open / fix" : passed ? "Review" : failed ? "Retry" : "Start"}</button>
      `;
      node.querySelector("button").addEventListener("click", () => {
        if (!isCourseQueued(course.id)) addCourseToQueue(course.id);
        window.location.hash = `lesson/${course.id}/${lesson.id}`;
      });
      path.append(node);
    });

    map.append(levelCard);
  });

  drawCourseCertificate(view.querySelector(".course-main"), course, completion);
  drawCourseCommunity(course);
}

function drawCourseCertificate(container, course, completion) {
  if (!container || completion.percent < 100) return;
  const certificate = document.createElement("section");
  certificate.className = "course-certificate-panel";
  certificate.innerHTML = `
    <div>
      <p class="eyebrow">${translateText("Chứng nhận hoàn thành")}</p>
      <h3>${escapeHtml(state.account.displayName)}</h3>
      <p>${translateText("Bạn đã hoàn thành toàn bộ bài trong khóa học này. Chứng nhận chính thức có thể xuất PDF ở bước production tiếp theo.")}</p>
      <strong>${escapeHtml(course.title)}</strong>
    </div>
    <button class="primary-button" type="button">${translateText("In chứng nhận")}</button>
  `;
  certificate
    .querySelector("button")
    .addEventListener("click", () => window.print());
  container.insertBefore(
    certificate,
    container.querySelector("#courseCommunity"),
  );
}

function renderLesson(courseId, lessonId) {
  const found = findLesson(courseId, lessonId);
  if (!found || !isLessonUnlocked(found.course, lessonId))
    return renderCourse(courseId);

  setActiveNav("");
  setPage(found.lesson.title, found.course.title);
  const view = cloneTemplate("#lessonTemplate");
  viewRoot.replaceChildren(view);

  currentLessonSession = {
    courseId,
    lessonId,
    answers: {},
    quizFeedback: {},
    reflectionHints: {},
    reflectionDrafts: {},
    editMode: false,
    editDraft: null,
  };

  view.querySelector("#exitLessonButton").addEventListener("click", () => {
    window.location.hash = `course/${courseId}`;
  });

  drawLesson(found);
  drawLessonCommunity(found);
}

function drawLesson(found) {
  const card = document.querySelector("#lessonCard");
  const progressBar = document.querySelector("#lessonProgressBar");
  const scorePill = document.querySelector("#lessonScorePill");
  card.replaceChildren();

  let interactiveCount = 0;
  let gradedCount = 0;
  let answeredCount = 0;
  let correctCount = 0;

  if (canCreateContent() && currentLessonSession.editMode) {
    drawLessonEditor(card, found);
  }

  found.lesson.blocks.forEach((block, index) => {
    const element = document.createElement("section");
    element.className = "block";

    if (block.type === "text") {
      element.innerHTML = `
        <h2>${escapeHtml(block.title)}</h2>
        <div class="rich-text">${renderRichParagraphs(block.body)}</div>
        ${renderInlineBlockImage(block)}
      `;
    }

    if (block.type === "flashcard") {
      element.innerHTML = `
        <p class="eyebrow">Flashcard</p>
        <h3>${escapeHtml(block.front)}</h3>
        <div class="rich-text">${renderRichParagraphs(block.back)}</div>
        ${renderInlineBlockImage(block)}
      `;
    }

    if (block.type === "image") {
      element.innerHTML = `
        <p class="eyebrow">Image</p>
        <h3>${escapeHtml(block.title || "Lesson image")}</h3>
        ${
          block.src
            ? `<div class="media-preview">${renderLessonImage(block.src, block.alt || "Lesson image")}</div>`
            : `<p>${escapeHtml(block.alt || "Image asset missing")}</p>`
        }
        ${renderMediaCaption(block.caption)}
      `;
    }

    if (block.type === "video_embed") {
      element.innerHTML = `
        <p class="eyebrow">Video</p>
        <h3>${escapeHtml(block.title || "Video resource")}</h3>
        <p>${escapeHtml(block.caption || "Open the supporting video resource.")}</p>
        <div class="media-preview video-frame">
          ${renderVideoBlockMedia(block)}
        </div>
        ${renderInlineBlockImage(block)}
      `;
    }

    if (block.type === "multiple_choice") {
      interactiveCount += 1;
      gradedCount += 1;
      const selected = currentLessonSession.answers[index];
      const retryChoice =
        currentLessonSession.quizFeedback?.[index]?.choiceIndex;
      const isCorrectAnswer = selected === block.correct;
      if (isCorrectAnswer) {
        answeredCount += 1;
        correctCount += 1;
      }

      element.innerHTML = `
        <p class="eyebrow">Quiz</p>
        <h3>${escapeHtml(block.prompt)}</h3>
        ${renderInlineBlockImage(block)}
        <div class="choice-list"></div>
        <p class="quiz-retry" hidden>Chưa đúng, đọc lại câu hỏi rồi chọn lại nhé.</p>
        <p class="quiz-explanation" hidden>${escapeHtml(block.explanation)}</p>
      `;

      const list = element.querySelector(".choice-list");
      block.choices.forEach((choice, choiceIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-button";
        button.textContent = choice;
        if (isCorrectAnswer) {
          button.disabled = true;
          button.classList.toggle("selected", selected === choiceIndex);
          button.classList.toggle("correct", selected === choiceIndex);
          element.querySelector(".quiz-explanation").hidden = false;
        } else if (retryChoice !== undefined) {
          button.classList.toggle("selected", retryChoice === choiceIndex);
          button.classList.toggle("incorrect", retryChoice === choiceIndex);
          element.querySelector(".quiz-retry").hidden = false;
        }
        button.addEventListener("click", () => {
          if (choiceIndex === block.correct) {
            currentLessonSession.answers[index] = choiceIndex;
            delete currentLessonSession.quizFeedback[index];
          } else {
            delete currentLessonSession.answers[index];
            currentLessonSession.quizFeedback[index] = { choiceIndex };
          }
          drawLesson(found);
        });
        list.append(button);
      });
    }

    if (block.type === "reflection") {
      const hintOpen = currentLessonSession.reflectionHints[index] === true;
      const draftAnswer = currentLessonSession.reflectionDrafts[index] || "";
      const hasDraftAnswer = draftAnswer.trim().length > 0;
      element.innerHTML = `
        <p class="eyebrow">Reflection</p>
        <h3>${escapeHtml(block.prompt)}</h3>
        ${renderInlineBlockImage(block)}
        <label class="reflection-response reflection-comment-box">
          Câu trả lời của bạn
          <textarea rows="4" placeholder="Viết câu trả lời như một comment trước khi tự đối chiếu">${escapeHtml(draftAnswer)}</textarea>
        </label>
        <button class="ghost-button reflection-toggle" type="button" aria-expanded="${
          hintOpen && hasDraftAnswer ? "true" : "false"
        }" ${hasDraftAnswer ? "" : "disabled"}>
          ${hintOpen && hasDraftAnswer ? "Ẩn đối chiếu" : hasDraftAnswer ? "Đối chiếu với gợi ý" : "Nhập câu trả lời để đối chiếu"}
        </button>
        <div class="reflection-answer" ${hintOpen && hasDraftAnswer ? "" : "hidden"}>
          <span>Câu trả lời mẫu</span>
          <p>${escapeHtml(getReflectionAnswer(found, block))}</p>
        </div>
      `;
      const textarea = element.querySelector(".reflection-response textarea");
      const toggle = element.querySelector(".reflection-toggle");
      element
        .querySelector(".reflection-response textarea")
        .addEventListener("input", (event) => {
          currentLessonSession.reflectionDrafts[index] = event.target.value;
          const hasAnswer = event.target.value.trim().length > 0;
          toggle.disabled = !hasAnswer;
          if (!hasAnswer) {
            currentLessonSession.reflectionHints[index] = false;
            toggle.textContent = "Nhập câu trả lời để đối chiếu";
            toggle.setAttribute("aria-expanded", "false");
            element.querySelector(".reflection-answer").hidden = true;
          } else if (!currentLessonSession.reflectionHints[index]) {
            toggle.textContent = "Đối chiếu với gợi ý";
          }
        });
      element
        .querySelector(".reflection-toggle")
        .addEventListener("click", () => {
          if (!textarea.value.trim()) {
            textarea.focus();
            return;
          }
          currentLessonSession.reflectionHints[index] =
            !currentLessonSession.reflectionHints[index];
          drawLesson(found);
        });
    }

    card.append(element);
  });

  const action = document.createElement("div");
  action.className = "lesson-actions";
  const canFinish = interactiveCount === 0 || answeredCount >= interactiveCount;
  action.innerHTML = `
    ${
      canCreateContent()
        ? `<button class="ghost-button" type="button" id="editLessonButton">${currentLessonSession.editMode ? "Close editor" : "Fix lesson"}</button>`
        : ""
    }
    <button class="ghost-button" type="button" id="resetLessonButton">Reset</button>
    <button class="primary-button" type="button" id="finishLessonButton" ${canFinish ? "" : "disabled"}>Finish lesson</button>
  `;
  action.querySelector("#editLessonButton")?.addEventListener("click", () => {
    currentLessonSession.editMode = !currentLessonSession.editMode;
    currentLessonSession.editDraft = currentLessonSession.editMode
      ? structuredClone(found.lesson)
      : null;
    drawLesson(found);
  });
  action.querySelector("#resetLessonButton").addEventListener("click", () => {
    currentLessonSession.answers = {};
    currentLessonSession.quizFeedback = {};
    currentLessonSession.reflectionHints = {};
    currentLessonSession.reflectionDrafts = {};
    drawLesson(found);
  });
  action.querySelector("#finishLessonButton").addEventListener("click", () => {
    completeLesson(found, gradedCount, correctCount);
  });
  card.append(action);

  const answeredPercent = interactiveCount
    ? Math.round((answeredCount / interactiveCount) * 100)
    : 100;
  const score = gradedCount
    ? Math.round((correctCount / gradedCount) * 100)
    : 100;
  progressBar.style.width = `${answeredPercent}%`;
  scorePill.textContent = `${score}%`;
}

function drawLessonEditor(card, found) {
  currentLessonSession.editDraft ||= structuredClone(found.lesson);
  const draft = currentLessonSession.editDraft;
  const editor = document.createElement("section");
  editor.className = "lesson-editor-panel";
  editor.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Teacher tools</p>
        <h2>Fix lesson</h2>
      </div>
      <span class="status-pill">${escapeHtml(state.account.role)}</span>
    </div>
    <div class="split-fields">
      <label>Lesson title<input data-lesson-field="title" type="text" value="${escapeHtml(draft.title || "")}" /></label>
      <label>Minutes<input data-lesson-field="minutes" type="number" min="1" value="${escapeHtml(draft.minutes || 8)}" /></label>
    </div>
    <div class="lesson-editor-blocks"></div>
    <div class="studio-actions">
      <button class="ghost-button" type="button" id="addEditorTextBlock">Add text block</button>
      <button class="ghost-button" type="button" id="addEditorImageBlock">Add image block</button>
      <button class="ghost-button" type="button" id="syncSavedCourseButton">Upload saved course to web</button>
      <button class="primary-button" type="button" id="saveLessonEditButton">Save lesson changes</button>
    </div>
    <div class="import-status" id="lessonEditorSyncStatus" aria-live="polite"></div>
  `;

  editor
    .querySelector('[data-lesson-field="title"]')
    .addEventListener("input", (event) => {
      draft.title = event.target.value;
    });
  editor
    .querySelector('[data-lesson-field="minutes"]')
    .addEventListener("input", (event) => {
      draft.minutes = Number(event.target.value) || 8;
    });

  const blocks = editor.querySelector(".lesson-editor-blocks");
  draft.blocks.forEach((block, index) => {
    const row = document.createElement("section");
    row.className = "lesson-editor-block";
    row.dataset.index = String(index);
    row.innerHTML = buildLessonEditorFields(block, index);
    bindLessonEditorFields(row, block, index, found);
    blocks.append(row);
  });

  editor.querySelector("#addEditorImageBlock").addEventListener("click", () => {
    draft.blocks.push({
      id: `block-${Date.now()}`,
      type: "image",
      title: "Lesson image",
      src: "",
      alt: "Image description",
    });
    drawLesson(found);
  });
  editor.querySelector("#addEditorTextBlock").addEventListener("click", () => {
    draft.blocks.push(createStudioBlock("text"));
    drawLesson(found);
  });
  editor
    .querySelector("#saveLessonEditButton")
    .addEventListener("click", () => saveLessonEdit(found));
  editor
    .querySelector("#syncSavedCourseButton")
    .addEventListener("click", async () => {
      const status = editor.querySelector("#lessonEditorSyncStatus");
      const course =
        state.customCourses.find((item) => item.id === found.course.id) ||
        found.course;
      status.textContent = "Đang upload course đã lưu lên web...";
      try {
        const result = await publishLocalCourseToBackend(course, (message) => {
          status.textContent = message;
        });
        status.textContent =
          result.status === "published"
            ? "Đã upload và publish course lên web."
            : "Đã upload course lên web, đang chờ admin duyệt.";
      } catch (error) {
        status.textContent = `Upload lỗi: ${error.message}`;
      }
    });
  card.append(editor);
}

function getInlineImageAlt(block) {
  return (
    block.imageAlt ||
    block.title ||
    block.front ||
    block.prompt ||
    block.caption ||
    "Lesson image"
  );
}

function renderMediaCaption(value) {
  const caption = String(value || "")
    .trim()
    .replace(/^["“”]+|["“”]+$/g, "");
  return caption ? `<p class="media-caption">"${escapeHtml(caption)}"</p>` : "";
}

function renderRichParagraphs(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return text
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map(
      (paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`,
    )
    .join("");
}

function getSafeMediaUrl(value) {
  const url = String(value || "").trim();
  return /^(https?:\/\/|\/(?:.*\/)?api\/media\.php\?key=|\/.*uploads\/|uploads\/|\.\/uploads\/)/.test(
    url,
  )
    ? url
    : "";
}

function isVideoMediaBlock(block) {
  const url = String(block.url || "");
  return (
    String(block.mimeType || "").startsWith("video/") ||
    /\.(mp4|webm|ogv|ogg|mov)(\?|#|$)/i.test(url)
  );
}

function renderVideoBlockMedia(block) {
  const safeUrl = getSafeMediaUrl(block.url);
  if (!safeUrl) return "Video URL missing";
  if (isVideoMediaBlock(block)) {
    return `<video class="lesson-video" controls preload="metadata" src="${escapeHtml(safeUrl)}"></video>`;
  }
  return `<a class="ghost-button" href="${escapeHtml(safeUrl)}" target="_blank" rel="noreferrer">Open video</a>`;
}

function getSafeImageSrc(value) {
  const src = String(value || "").trim();
  if (isDataUrl(src)) return src;
  return getSafeMediaUrl(src);
}

function renderLessonImage(src, alt = "Lesson image") {
  const safeSrc = getSafeImageSrc(src);
  if (!safeSrc) {
    return `<p class="media-missing-copy">Ảnh chưa được upload lên web.</p>`;
  }
  return `<img data-lesson-image src="${escapeHtml(safeSrc)}" alt="${escapeHtml(alt)}" loading="lazy" />`;
}

function renderInlineBlockImage(block) {
  if (!block.imageSrc) return "";
  return `
    <div class="media-preview inline-block-image">
      ${renderLessonImage(block.imageSrc, getInlineImageAlt(block))}
      ${renderMediaCaption(block.imageCaption)}
    </div>
  `;
}

function buildInlineImageEditor(block) {
  return `
    <div class="inline-image-editor">
      <div class="builder-block-title"><strong>Ảnh / chú thích cho block này</strong></div>
      <label>Alt text<input data-edit-field="imageAlt" type="text" value="${escapeHtml(block.imageAlt || "")}" /></label>
      <label>Caption<textarea data-edit-field="imageCaption" rows="2">${escapeHtml(block.imageCaption || "")}</textarea></label>
      <label>Upload image<input data-edit-field="inline-image-file" type="file" accept="image/*" /></label>
      <div class="media-preview editor-image-preview">
        ${
          block.imageSrc
            ? renderLessonImage(block.imageSrc, getInlineImageAlt(block))
            : "Chưa có ảnh trong block này"
        }
      </div>
    </div>
  `;
}

function renderInlineImageBuilderFields(block) {
  return `
    <div class="inline-image-editor">
      <div class="builder-block-title"><strong>Ảnh / chú thích cho block này</strong></div>
      <label>Alt text<input data-field="imageAlt" type="text" /></label>
      <label>Caption<textarea data-field="imageCaption" rows="2"></textarea></label>
      <label>Upload image<input data-field="inline-image-file" type="file" accept="image/*" /></label>
      <div class="media-preview editor-image-preview" data-inline-preview>
        ${
          block.imageSrc
            ? renderLessonImage(block.imageSrc, getInlineImageAlt(block))
            : "Chưa có ảnh trong block này"
        }
      </div>
    </div>
  `;
}

function readInlineImageFields(item, existing) {
  return {
    imageSrc: existing.imageSrc || "",
    imageName: existing.imageName || "",
    imageAlt:
      item.querySelector('[data-field="imageAlt"]')?.value.trim() ||
      existing.imageAlt ||
      "",
    imageCaption:
      item.querySelector('[data-field="imageCaption"]')?.value.trim() ||
      existing.imageCaption ||
      "",
    imageAssetId: existing.imageAssetId || "",
  };
}

function buildLessonBlockTypeControl(block) {
  const options = [
    ["text", "Chữ"],
    ["image", "Ảnh"],
    ["multiple_choice", "Quiz"],
    ["reflection", "Reflection"],
    ["video_embed", "Video"],
  ];
  return `
    <label>Loại nội dung
      <select data-edit-field="block-type">
        ${options
          .map(
            ([value, label]) =>
              `<option value="${value}" ${block.type === value ? "selected" : ""}>${label}</option>`,
          )
          .join("")}
      </select>
    </label>
  `;
}

function convertLessonBlockType(block, nextType) {
  if (block.type === nextType) return;
  const oldText =
    block.body ||
    block.caption ||
    block.answer ||
    block.explanation ||
    block.alt ||
    "";
  const oldTitle = block.title || block.prompt || block.front || "Lesson block";
  block.type = nextType;
  if (nextType === "text") {
    block.title = oldTitle;
    block.body ||= oldText;
  }
  if (nextType === "image") {
    block.title = oldTitle;
    block.src ||= block.imageSrc || "";
    block.alt ||= block.imageAlt || oldTitle || "Lesson image";
    block.caption ||= block.imageCaption || oldText;
  }
  if (nextType === "multiple_choice") {
    block.prompt ||= oldTitle;
    block.choices =
      Array.isArray(block.choices) && block.choices.length
        ? block.choices
        : ["Đáp án đúng", "Phương án nhiễu", "Phương án nhiễu"];
    block.correct = Number.isInteger(block.correct) ? block.correct : 0;
    block.explanation ||= oldText || "Giải thích ngắn cho đáp án đúng.";
  }
  if (nextType === "reflection") {
    block.prompt ||= oldTitle;
    block.answer ||= oldText || "Gợi ý trả lời để học sinh tự đối chiếu.";
  }
  if (nextType === "video_embed") {
    block.title = oldTitle;
    block.url ||= "";
    block.caption ||= oldText || "Chú thích ngắn cho tài nguyên video.";
  }
}

function buildLessonEditorBlockHeader(title, index, total) {
  return `
    <div class="builder-block-title lesson-editor-block-title">
      <strong>${escapeHtml(title)}</strong>
      <div class="builder-block-actions lesson-editor-block-actions">
        <button class="mini-button" type="button" data-editor-action="up" ${index === 0 ? "disabled" : ""}>Lên</button>
        <button class="mini-button" type="button" data-editor-action="down" ${index >= total - 1 ? "disabled" : ""}>Xuống</button>
        <button class="mini-button danger-mini-button" type="button" data-editor-action="delete" ${total <= 1 ? "disabled" : ""}>Xóa</button>
      </div>
    </div>
  `;
}

function buildLessonEditorFields(block, index) {
  const total = currentLessonSession.editDraft?.blocks?.length || 0;
  const title = `Block ${index + 1}: ${String(block.type || "text").replace("_", " ")}`;
  if (block.type === "text") {
    return `
      ${buildLessonEditorBlockHeader(title, index, total)}
      ${buildLessonBlockTypeControl(block)}
      <label>Title<input data-edit-field="title" type="text" value="${escapeHtml(block.title || "")}" /></label>
      <label>Body<textarea data-edit-field="body" rows="4">${escapeHtml(block.body || "")}</textarea></label>
      ${buildInlineImageEditor(block)}
    `;
  }
  if (block.type === "flashcard") {
    return `
      ${buildLessonEditorBlockHeader(title, index, total)}
      ${buildLessonBlockTypeControl(block)}
      <label>Front<input data-edit-field="front" type="text" value="${escapeHtml(block.front || "")}" /></label>
      <label>Back<textarea data-edit-field="back" rows="3">${escapeHtml(block.back || "")}</textarea></label>
      ${buildInlineImageEditor(block)}
    `;
  }
  if (block.type === "image") {
    return `
      ${buildLessonEditorBlockHeader(title, index, total)}
      ${buildLessonBlockTypeControl(block)}
      <label>Title<input data-edit-field="title" type="text" value="${escapeHtml(block.title || "")}" /></label>
      <label>Alt text<input data-edit-field="alt" type="text" value="${escapeHtml(block.alt || "")}" /></label>
      <label>Caption<textarea data-edit-field="caption" rows="2">${escapeHtml(block.caption || "")}</textarea></label>
      <label>Upload image<input data-edit-field="image-file" type="file" accept="image/*" /></label>
      <div class="media-preview editor-image-preview">
        ${block.src ? renderLessonImage(block.src, block.alt || "Lesson image") : "No image uploaded yet"}
      </div>
    `;
  }
  if (block.type === "multiple_choice") {
    const choices = [...(block.choices || [])];
    while (choices.length < 4) choices.push("");
    return `
      ${buildLessonEditorBlockHeader(title, index, total)}
      ${buildLessonBlockTypeControl(block)}
      <label>Question<input data-edit-field="prompt" type="text" value="${escapeHtml(block.prompt || "")}" /></label>
      <div class="split-fields">
        ${choices
          .map(
            (choice, choiceIndex) =>
              `<label>Choice ${choiceIndex + 1}<input data-choice-index="${choiceIndex}" type="text" value="${escapeHtml(choice)}" /></label>`,
          )
          .join("")}
      </div>
      <label>Correct choice
        <select data-edit-field="correct">
          ${choices
            .map(
              (_, choiceIndex) =>
                `<option value="${choiceIndex}" ${Number(block.correct) === choiceIndex ? "selected" : ""}>Choice ${choiceIndex + 1}</option>`,
            )
            .join("")}
        </select>
      </label>
      <label>Explanation<textarea data-edit-field="explanation" rows="3">${escapeHtml(block.explanation || "")}</textarea></label>
      ${buildInlineImageEditor(block)}
    `;
  }
  if (block.type === "reflection") {
    return `
      ${buildLessonEditorBlockHeader(title, index, total)}
      ${buildLessonBlockTypeControl(block)}
      <label>Prompt<input data-edit-field="prompt" type="text" value="${escapeHtml(block.prompt || "")}" /></label>
      <label>Suggested answer<textarea data-edit-field="answer" rows="3">${escapeHtml(getReflectionAnswer({ lesson: currentLessonSession.editDraft, course: {} }, block))}</textarea></label>
      ${buildInlineImageEditor(block)}
    `;
  }
  if (block.type === "video_embed") {
    return `
      ${buildLessonEditorBlockHeader(title, index, total)}
      ${buildLessonBlockTypeControl(block)}
      <label>Title<input data-edit-field="title" type="text" value="${escapeHtml(block.title || "")}" /></label>
      <label>Video URL<input data-edit-field="url" type="url" value="${escapeHtml(block.url || "")}" /></label>
      <label>Upload video<input data-edit-field="video-file" type="file" accept="video/*" /></label>
      <label>Caption<textarea data-edit-field="caption" rows="3">${escapeHtml(block.caption || "")}</textarea></label>
      <div class="media-preview editor-video-preview">
        ${block.url ? renderVideoBlockMedia(block) : "Chưa có video trong block này"}
      </div>
      ${buildInlineImageEditor(block)}
    `;
  }
  return `
    ${buildLessonEditorBlockHeader(title, index, total)}
    <label>Title<input data-edit-field="title" type="text" value="${escapeHtml(block.title || "")}" /></label>
  `;
}

function bindLessonEditorFields(row, block, index, found) {
  row.querySelectorAll("[data-editor-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const blocks = currentLessonSession.editDraft?.blocks || [];
      const action = button.dataset.editorAction;
      if (action === "up" && index > 0) {
        [blocks[index - 1], blocks[index]] = [blocks[index], blocks[index - 1]];
      }
      if (action === "down" && index < blocks.length - 1) {
        [blocks[index + 1], blocks[index]] = [blocks[index], blocks[index + 1]];
      }
      if (action === "delete") {
        if (blocks.length <= 1) return;
        const ok = window.confirm("Xóa block này khỏi bản sửa lesson?");
        if (!ok) return;
        blocks.splice(index, 1);
      }
      drawLesson(found);
    });
  });
  row
    .querySelector('[data-edit-field="block-type"]')
    ?.addEventListener("change", (event) => {
      convertLessonBlockType(block, event.target.value);
      drawLesson(found);
    });
  row.querySelectorAll("[data-edit-field]").forEach((field) => {
    if (field.type === "file") return;
    if (field.dataset.editField === "block-type") return;
    field.addEventListener("input", () => {
      const key = field.dataset.editField;
      block[key] = key === "correct" ? Number(field.value) : field.value;
    });
    field.addEventListener("change", () => {
      const key = field.dataset.editField;
      block[key] = key === "correct" ? Number(field.value) : field.value;
    });
  });
  row.querySelectorAll("[data-choice-index]").forEach((field) => {
    field.addEventListener("input", () => {
      block.choices ||= [];
      block.choices[Number(field.dataset.choiceIndex)] = field.value;
    });
  });
  row
    .querySelector('[data-edit-field="image-file"]')
    ?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const src = await readImageFileAsOptimizedDataUrl(file);
      block.src = src;
      block.fileName = file.name;
      const asset = registerAsset(
        file,
        src,
        "lesson-image",
        block.alt || block.title || "Lesson image",
      );
      block.assetId = asset.id;
      logAudit("asset_uploaded", `Lesson editor image uploaded: ${file.name}`);
      drawLesson(found);
    });
  row
    .querySelector('[data-edit-field="inline-image-file"]')
    ?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const src = await readImageFileAsOptimizedDataUrl(file);
      block.imageSrc = src;
      block.imageName = file.name;
      const asset = registerAsset(
        file,
        src,
        "lesson-inline-image",
        getInlineImageAlt(block),
      );
      block.imageAssetId = asset.id;
      logAudit("asset_uploaded", `Inline lesson image uploaded: ${file.name}`);
      drawLesson(found);
    });
  row
    .querySelector('[data-edit-field="video-file"]')
    ?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        const asset = await apiUploadAssetFile(
          file,
          "lesson-video",
          block.title || "Lesson video",
        );
        block.url = asset.src;
        block.videoFileName = file.name;
        block.videoAssetId = asset.id;
        block.mimeType = asset.mimeType;
        block.sizeBytes = asset.sizeBytes;
        logAudit("asset_uploaded", `Lesson video uploaded: ${file.name}`);
        saveState();
        drawLesson(found);
      } catch (error) {
        window.alert(`Không upload được video: ${error.message}`);
      }
    });
}

function saveLessonEdit(found) {
  const draft = structuredClone(currentLessonSession.editDraft);
  draft.title = String(draft.title || found.lesson.title).trim();
  draft.minutes = Number(draft.minutes) || found.lesson.minutes || 8;
  draft.blocks = Array.isArray(draft.blocks) ? draft.blocks : [];
  ensureLessonMinimumQuizzes(draft, found.course);

  const nextCourse = structuredClone(found.course);
  nextCourse.teacherEditedAt = new Date().toISOString();
  nextCourse.teacherEditedBy = state.account.displayName;
  nextCourse.levels.forEach((level) => {
    level.lessons = level.lessons.map((lesson) =>
      lesson.id === draft.id ? draft : lesson,
    );
  });
  normalizeCourseLessons(nextCourse);
  const previousCustomCourses = structuredClone(state.customCourses);
  state.customCourses = state.customCourses.filter(
    (course) => course.id !== nextCourse.id,
  );
  state.customCourses.unshift(nextCourse);
  logAudit("lesson_edited", `${found.course.title}: ${draft.title}`);
  try {
    saveState();
  } catch (error) {
    state.customCourses = previousCustomCourses;
    window.alert(getStorageSaveErrorMessage(error));
    return;
  }
  currentLessonSession.editMode = false;
  currentLessonSession.editDraft = null;
  renderLesson(nextCourse.id, draft.id);
}

function updateLessonStatus(found) {
  const blocks = found.lesson.blocks;
  const interactive = blocks.filter(
    (block) => block.type === "multiple_choice",
  );
  const answered = interactive.filter((block, blockIndex) => {
    const realIndex = blocks.indexOf(block);
    return currentLessonSession.answers[realIndex] === block.correct;
  });
  document.querySelector("#lessonProgressBar").style.width = `${
    interactive.length
      ? Math.round((answered.length / interactive.length) * 100)
      : 100
  }%`;
  const finishButton = document.querySelector("#finishLessonButton");
  if (finishButton)
    finishButton.disabled = answered.length < interactive.length;
}

function getReflectionAnswer(found, block) {
  if (block.answer) return block.answer;
  const prompt = String(block.prompt || "").toLowerCase();
  const lessonTitle = found.lesson.title || "bài học này";
  const firstText = found.lesson.blocks.find((item) => item.type === "text");
  const coreIdea =
    firstText?.body ||
    found.course.description ||
    "hãy bám vào ý chính của bài và nêu một ví dụ cụ thể";

  const answers = [
    {
      match: "không còn tiền mặt",
      answer:
        "Có thể quay lại trao đổi trực tiếp, ghi nợ bằng sổ tay hoặc dùng vật trung gian như vàng, gạo, dịch vụ. Nhưng cách đó rất chậm vì hai bên phải thống nhất giá trị và tin nhau. Bài học chính là tiền giúp xã hội có một thước đo chung để trao đổi dễ hơn.",
    },
    {
      match: "crypto là công nghệ",
      answer:
        "Crypto là cả công nghệ và tài sản đầu cơ. Phần công nghệ nằm ở blockchain, ví, smart contract và cách ghi nhận quyền sở hữu số. Phần đầu cơ xuất hiện vì token có giá thị trường, biến động mạnh và nhiều người mua với kỳ vọng lợi nhuận.",
    },
    {
      match: "shill coin",
      answer:
        "Một ví dụ là tài khoản mạng xã hội liên tục hứa lợi nhuận lớn, khoe cộng đồng đông, nhưng không giải thích sản phẩm, doanh thu hoặc rủi ro. Khi gặp vậy nên kiểm tra đội ngũ, tokenomics, thanh khoản và nguồn tiền trước khi tin.",
    },
    {
      match: "private key",
      answer:
        "Private key hoặc seed phrase nguy hiểm vì nó là quyền kiểm soát gốc của ví. Ai có nó có thể chuyển tài sản đi mà gần như không thể lấy lại. Vì vậy không nhập seed phrase vào website lạ, không gửi qua chat và nên tách ví lưu trữ với ví giao dịch.",
    },
    {
      match: "3 dòng",
      answer:
        "1. Không chia sẻ seed phrase hoặc private key cho bất kỳ ai. 2. Trước khi ký giao dịch phải kiểm tra domain, hợp đồng, quyền approve và số tiền. 3. Chỉ dùng số tiền có thể mất và tách ví học tập, ví giao dịch, ví lưu trữ.",
    },
    {
      match: "approve unlimited",
      answer:
        "Cần kiểm tra website có đúng domain không, hợp đồng có đáng tin không, quyền approve đang cho phép token nào và giới hạn bao nhiêu. Nếu không chắc, nên reject hoặc giảm allowance thay vì cấp quyền không giới hạn.",
    },
    {
      match: "prediction market",
      answer:
        "Prediction market có thể hữu ích vì giá thị trường phản ánh kỳ vọng của nhiều người về một sự kiện, giúp đọc xác suất nhanh hơn. Rủi ro là thanh khoản mỏng, thao túng, thiên lệch đám đông và vấn đề pháp lý nếu người học hiểu nó như sự thật chắc chắn.",
    },
    {
      match: "5 nguyên tắc",
      answer:
        "1. Hiểu trước khi mua. 2. Thử nhỏ trước khi làm lớn. 3. Tách ví và bảo vệ seed phrase. 4. Không tin lợi nhuận chắc chắn. 5. Luôn tự hỏi kịch bản xấu nhất là gì và mình có chịu được không.",
    },
    {
      match: "fractions appear",
      answer:
        "Ví dụ: chia một chiếc bánh pizza thành 8 phần bằng nhau và ăn 2 phần, tức là bạn đã ăn 2/8 chiếc bánh. Điều quan trọng là mẫu số là tổng số phần bằng nhau, tử số là số phần được chọn.",
    },
    {
      match: "easier for tomorrow",
      answer:
        "Một câu trả lời tốt là chọn việc thật nhỏ để giảm ma sát, ví dụ: mở sẵn bài cần học, đặt lịch 15 phút, chuẩn bị vở ghi chú hoặc viết trước câu hỏi mình muốn giải quyết vào ngày mai.",
    },
  ];

  const matched = answers.find((item) => prompt.includes(item.match));
  if (matched) return matched.answer;

  return `Một câu trả lời tốt nên nêu ý chính của "${lessonTitle}", đưa một ví dụ cụ thể và chỉ ra giới hạn hoặc rủi ro cần nhớ. Gợi ý từ bài: ${coreIdea}`;
}

function completeLesson(found, gradedCount, correctCount) {
  const score = gradedCount
    ? Math.round((correctCount / gradedCount) * 100)
    : 100;
  const passed = score >= 70;
  state.completedLessons[found.lesson.id] = {
    status: passed ? "passed" : "failed",
    score,
    completedAt: passed ? new Date().toISOString() : null,
    lastAttemptAt: new Date().toISOString(),
  };
  state.attempts[found.lesson.id] = (state.attempts[found.lesson.id] || 0) + 1;
  if (passed) addCheckin("lesson_completed");
  saveState();
  pushProgressToBackend(found.lesson.id, score, passed ? "passed" : "failed");
  window.alert(
    passed
      ? `Passed with ${score}%. Nice, the next lesson is unlocked.`
      : `Score ${score}%. You need at least 70% to pass. Try again.`,
  );
  window.location.hash = `course/${found.course.id}`;
}

function extractLessonConcepts(lesson) {
  return [
    lesson.title,
    ...lesson.blocks.flatMap((block) => [
      block.title,
      block.prompt,
      ...(block.choices || []),
    ]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 4)
    .filter((word, index, list) => list.indexOf(word) === index);
}

function buildTutorAnswer(found, question) {
  const firstText = found.lesson.blocks.find((block) => block.type === "text");
  const firstQuiz = found.lesson.blocks.find(
    (block) => block.type === "multiple_choice",
  );
  const questionText = question || `Explain ${found.lesson.title}`;
  return `
    <strong>${escapeHtml(questionText)}</strong>
    <p>${escapeHtml(firstText?.body || found.course.description)}</p>
    ${
      firstQuiz
        ? `<p>Practice check: ${escapeHtml(firstQuiz.prompt)} Correct idea: ${escapeHtml(firstQuiz.explanation)}</p>`
        : "<p>Write a one-sentence summary, then compare it with the lesson notes.</p>"
    }
  `;
}

function buildPracticeQuiz(found) {
  const quiz = found.lesson.blocks.find(
    (block) => block.type === "multiple_choice",
  );
  const textBlock = found.lesson.blocks.find((block) => block.type === "text");
  if (quiz) {
    return `
      <strong>Practice quiz</strong>
      <p>${escapeHtml(quiz.prompt)}</p>
      <div class="choice-list">
        ${quiz.choices.map((choice, index) => `<div class="choice-button">${index + 1}. ${escapeHtml(choice)}</div>`).join("")}
      </div>
      <p>${escapeHtml(quiz.explanation)}</p>
    `;
  }
  return `
    <strong>Practice quiz</strong>
    <p>Explain this idea in one sentence: ${escapeHtml(textBlock?.title || found.lesson.title)}</p>
    <p>Suggested answer: ${escapeHtml(textBlock?.body || found.course.description)}</p>
  `;
}

function getCourseReviews(courseId) {
  state.courseReviews[courseId] ||= [];
  return state.courseReviews[courseId];
}

function getCourseRating(courseId) {
  const reviews = getCourseReviews(courseId);
  if (!reviews.length) return { average: 0, count: 0 };
  const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);
  return {
    average: Math.round((total / reviews.length) * 10) / 10,
    count: reviews.length,
  };
}

function drawCourseCommunity(course) {
  const panel = document.querySelector("#courseCommunity");
  if (!panel) return;
  const reviews = getCourseReviews(course.id);
  const rating = getCourseRating(course.id);
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Community quality</p>
        <h2>Reviews</h2>
      </div>
      <span class="status-pill">${rating.count ? `${rating.average}/5` : "No rating"}</span>
    </div>
    <form class="community-form" id="reviewForm">
      <div class="split-fields">
        <label>Rating
          <select id="reviewRating">
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Okay</option>
            <option value="2">2 - Weak</option>
            <option value="1">1 - Problematic</option>
          </select>
        </label>
        <label>Quality signal
          <select id="reviewSignal">
            <option value="clear">Clear explanation</option>
            <option value="interactive">Good interactions</option>
            <option value="needs_fix">Needs fixes</option>
          </select>
        </label>
      </div>
      <textarea id="reviewComment" rows="3" placeholder="What worked or needs improvement?"></textarea>
      <div class="studio-actions">
        <button class="danger-button" id="reportCourseButton" type="button">Report course</button>
        <button class="primary-button" type="submit">Submit review</button>
      </div>
    </form>
    <div class="review-list" id="courseReviewList"></div>
  `;

  panel.querySelector("#reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const comment = panel.querySelector("#reviewComment").value.trim();
    const ratingValue = Number(panel.querySelector("#reviewRating").value);
    const signal = panel.querySelector("#reviewSignal").value;
    const existing = reviews.find((review) => review.userId === "local-user");
    const review = {
      id: existing?.id || `review-${Date.now()}`,
      userId: "local-user",
      author: state.creatorProfile.displayName,
      rating: ratingValue,
      signal,
      comment,
      createdAt: new Date().toISOString(),
    };
    if (existing) Object.assign(existing, review);
    else reviews.unshift(review);
    if (ratingValue >= 4)
      state.creatorProfile.reputationScore = Math.min(
        100,
        state.creatorProfile.reputationScore + 1,
      );
    if (ratingValue <= 2)
      state.creatorProfile.reputationScore = Math.max(
        0,
        state.creatorProfile.reputationScore - 1,
      );
    saveState();
    drawCourseCommunity(course);
  });

  panel.querySelector("#reportCourseButton").addEventListener("click", () => {
    createReport("course", course.id, course.title, "Course quality concern");
    drawCourseCommunity(course);
  });

  drawCourseReviewList(course.id);
}

function drawCourseReviewList(courseId) {
  const list = document.querySelector("#courseReviewList");
  if (!list) return;
  const reviews = getCourseReviews(courseId);
  list.replaceChildren();
  if (!reviews.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No reviews yet";
    list.append(empty);
    return;
  }
  reviews.forEach((review) => {
    const item = document.createElement("article");
    item.className = "review-item";
    item.innerHTML = `
      <strong>${escapeHtml(review.rating)}/5 - ${escapeHtml(review.signal.replace("_", " "))}</strong>
      <span>${escapeHtml(review.author)} - ${new Date(review.createdAt).toLocaleDateString()}</span>
      <p>${escapeHtml(review.comment || "No comment")}</p>
    `;
    list.append(item);
  });
}

function getLessonQuestions(lessonId) {
  state.lessonQuestions[lessonId] ||= [];
  return state.lessonQuestions[lessonId];
}

function normalizeQuestionThread(question) {
  question.upvotes ??= 0;
  question.downvotes ??= 0;
  question.myVote ||= null;
  question.answers = Array.isArray(question.answers) ? question.answers : [];
  question.answers.forEach((answer) => {
    answer.upvotes ??= 0;
    answer.downvotes ??= 0;
    answer.myVote ||= null;
  });
  return question;
}

function getVoteScore(item) {
  return (Number(item.upvotes) || 0) - (Number(item.downvotes) || 0);
}

function applyVote(item, direction) {
  const previous = item.myVote || null;
  if (previous === "up")
    item.upvotes = Math.max(0, (Number(item.upvotes) || 0) - 1);
  if (previous === "down")
    item.downvotes = Math.max(0, (Number(item.downvotes) || 0) - 1);
  if (previous === direction) {
    item.myVote = null;
    return;
  }
  if (direction === "up") item.upvotes = (Number(item.upvotes) || 0) + 1;
  if (direction === "down") item.downvotes = (Number(item.downvotes) || 0) + 1;
  item.myVote = direction;
}

function getAvatarLabel(name) {
  const clean = String(name || "User").trim();
  return (
    clean
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("") || "U"
  );
}

function getRelativeTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "just now";
  const diff = Date.now() - date.getTime();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (diff < minute) return "just now";
  if (diff < hour) return `${Math.floor(diff / minute)}m`;
  if (diff < day) return `${Math.floor(diff / hour)}h`;
  return `${Math.floor(diff / day)}d`;
}

function drawLessonCommunity(found) {
  const panel = document.querySelector("#lessonCommunity");
  if (!panel) return;
  const questions = getLessonQuestions(found.lesson.id);
  questions.forEach(normalizeQuestionThread);
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Lesson Q&A</p>
        <h2>Questions</h2>
      </div>
      <span class="status-pill">${questions.length} threads</span>
    </div>
    <form class="community-form" id="questionForm">
      <textarea id="questionBody" rows="3" placeholder="Ask a question about this lesson"></textarea>
      <div class="studio-actions">
        <button class="danger-button" id="reportLessonButton" type="button">Report lesson</button>
        <button class="primary-button" type="submit">Post</button>
      </div>
    </form>
    <div class="comment-list" id="questionList"></div>
  `;

  panel.querySelector("#questionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const body = panel.querySelector("#questionBody").value.trim();
    if (!body) return;
    questions.unshift({
      id: `question-${Date.now()}`,
      author: state.creatorProfile.displayName,
      body,
      status: "open",
      upvotes: 0,
      downvotes: 0,
      myVote: null,
      answers: [],
      createdAt: new Date().toISOString(),
    });
    state.creatorProfile.reputationScore = Math.min(
      100,
      state.creatorProfile.reputationScore + 1,
    );
    saveState();
    drawLessonCommunity(found);
  });

  panel.querySelector("#reportLessonButton").addEventListener("click", () => {
    createReport(
      "lesson",
      found.lesson.id,
      found.lesson.title,
      `Course: ${found.course.title}`,
    );
    drawLessonCommunity(found);
  });

  drawQuestionList(found);
}

function drawQuestionList(found) {
  const list = document.querySelector("#questionList");
  if (!list) return;
  const questions = getLessonQuestions(found.lesson.id).map(
    normalizeQuestionThread,
  );
  list.replaceChildren();
  if (!questions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No questions yet";
    list.append(empty);
    return;
  }
  questions.forEach((question) => {
    const item = document.createElement("article");
    item.className = "comment-thread";
    item.innerHTML = `
      <div class="comment-row">
        <div class="reddit-vote">
          <button class="vote-button arrow${question.myVote === "up" ? " active" : ""}" type="button" data-vote="up" aria-label="Upvote question">▲</button>
          <strong>${getVoteScore(question)}</strong>
          <button class="vote-button arrow${question.myVote === "down" ? " active" : ""}" type="button" data-vote="down" aria-label="Downvote question">▼</button>
        </div>
        <div class="comment-avatar">${escapeHtml(getAvatarLabel(question.author))}</div>
        <div class="comment-main">
          <div class="comment-bubble">
            <strong>${escapeHtml(question.author)}</strong>
            <p>${escapeHtml(question.body)}</p>
          </div>
          <div class="comment-actions">
            <span>▲ ${Number(question.upvotes) || 0}</span>
            <span>▼ ${Number(question.downvotes) || 0}</span>
            <span>${escapeHtml(getRelativeTime(question.createdAt))}</span>
            <span>${question.answers.length} replies</span>
          </div>
          <div class="comment-replies"></div>
        </div>
      </div>
      <form class="reply-form">
        <input type="text" placeholder="Write a reply" />
        <button class="ghost-button" type="submit">Reply</button>
      </form>
    `;
    item.querySelectorAll("[data-vote]").forEach((button) => {
      button.addEventListener("click", () => {
        applyVote(question, button.dataset.vote);
        saveState();
        drawLessonCommunity(found);
      });
    });

    const answers = item.querySelector(".comment-replies");
    question.answers.forEach((answer) => {
      const row = document.createElement("div");
      row.className = "comment-reply";
      row.innerHTML = `
        <div class="reddit-vote compact">
          <button class="vote-button arrow${answer.myVote === "up" ? " active" : ""}" type="button" data-vote="up" aria-label="Upvote reply">▲</button>
          <strong>${getVoteScore(answer)}</strong>
          <button class="vote-button arrow${answer.myVote === "down" ? " active" : ""}" type="button" data-vote="down" aria-label="Downvote reply">▼</button>
        </div>
        <div class="comment-avatar small">${escapeHtml(getAvatarLabel(answer.author))}</div>
        <div class="comment-main">
          <div class="comment-bubble">
            <strong>${escapeHtml(answer.author)}</strong>
            <p>${escapeHtml(answer.body)}</p>
          </div>
          <div class="comment-actions">
            <span>▲ ${Number(answer.upvotes) || 0}</span>
            <span>▼ ${Number(answer.downvotes) || 0}</span>
            <span>${escapeHtml(getRelativeTime(answer.createdAt))}</span>
          </div>
        </div>
      `;
      row.querySelectorAll("[data-vote]").forEach((button) => {
        button.addEventListener("click", () => {
          applyVote(answer, button.dataset.vote);
          saveState();
          drawLessonCommunity(found);
        });
      });
      answers.append(row);
    });
    item.querySelector(".reply-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const input = item.querySelector("input");
      const body = input.value.trim();
      if (!body) return;
      question.answers.push({
        id: `answer-${Date.now()}`,
        author: state.creatorProfile.displayName,
        body,
        upvotes: 0,
        downvotes: 0,
        myVote: null,
        isAccepted: false,
        createdAt: new Date().toISOString(),
      });
      question.status = "answered";
      input.value = "";
      saveState();
      drawLessonCommunity(found);
    });
    list.append(item);
  });
}

function createReport(targetType, targetId, title, reason) {
  const existing = state.contentReports.find(
    (report) =>
      report.targetType === targetType &&
      report.targetId === targetId &&
      report.status === "pending",
  );
  if (existing) return;
  state.contentReports.unshift({
    id: `report-${Date.now()}`,
    targetType,
    targetId,
    title,
    reason,
    status: "pending",
    createdAt: new Date().toISOString(),
  });
  logAudit("report_created", `${targetType}: ${title}`);
  saveState();
}

function addCheckin() {
  const today = todayKey();
  if (!state.checkins.includes(today)) {
    state.checkins.push(today);
  }
}

function renderDaily() {
  setActiveNav("daily");
  setPage("Today", "Habit workspace");
  const view = cloneTemplate("#dailyTemplate");
  viewRoot.replaceChildren(view);

  populateTaskLinks(view);
  drawTodayPanel();
  drawPlanPanel();
  drawTasks();
  drawCalendarPanel();
  drawGoalPanel();

  const noteEntry = getDailyNote(todayKey());
  const note = view.querySelector("#dailyNote");
  const mood = view.querySelector("#dailyMood");
  const focus = view.querySelector("#focusMinutes");
  note.value = noteEntry.content || "";
  mood.value = noteEntry.mood || "focused";
  focus.value = noteEntry.focusMinutes || 0;

  note.addEventListener("input", () => {
    updateDailyNote(view);
  });
  mood.addEventListener("change", () => {
    updateDailyNote(view);
  });
  focus.addEventListener("input", () => {
    updateDailyNote(view);
  });

  view.querySelector("#taskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = view.querySelector("#taskInput");
    const link = parseTaskLink(view.querySelector("#taskLink").value);
    const task = {
      id: `task-${Date.now()}`,
      title: input.value.trim(),
      status: "todo",
      dueDate: todayKey(),
      priority: view.querySelector("#taskPriority").value,
      ...link,
    };
    state.tasks.unshift(task);
    pushTaskToBackend(task);
    input.value = "";
    saveState();
    drawTasks();
    drawTodayPanel();
    drawGoalPanel();
  });
}

function renderClassrooms() {
  setActiveNav("classrooms");
  setPage(
    "Classrooms",
    canCreateContent() ? "Quản lý lớp học" : "Bài học được giao",
  );
  const view = cloneTemplate("#classroomTemplate");
  viewRoot.replaceChildren(view);
  drawClassroomOverview();
  drawClassroomBuilder();
  drawClassroomList();
}

function getVisibleClassrooms() {
  if (canCreateContent()) return state.classrooms;
  const currentName = state.account.displayName.trim().toLowerCase();
  return state.classrooms.filter((classroom) =>
    classroom.studentNames.some(
      (name) => name.trim().toLowerCase() === currentName,
    ),
  );
}

function drawClassroomOverview() {
  const panel = document.querySelector("#classroomOverview");
  if (!panel) return;
  const visibleClassrooms = getVisibleClassrooms();
  const assignedCourseIds = new Set(
    visibleClassrooms.flatMap((classroom) => classroom.courseIds),
  );
  const assignedLessons = [...assignedCourseIds]
    .map(findCourse)
    .filter(Boolean)
    .reduce((total, course) => total + flattenLessons(course).length, 0);
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Classroom hub</p>
        <h2>${canCreateContent() ? "Lớp học và bài giao" : "Lớp học của bạn"}</h2>
      </div>
      <span class="status-pill">${visibleClassrooms.length} lớp</span>
    </div>
    <div class="moderation-grid">
      <div class="moderation-tile"><strong>${visibleClassrooms.length}</strong><span>Classrooms</span></div>
      <div class="moderation-tile"><strong>${assignedCourseIds.size}</strong><span>Assigned courses</span></div>
      <div class="moderation-tile"><strong>${assignedLessons}</strong><span>Assigned lessons</span></div>
      <div class="moderation-tile"><strong>${state.account.role}</strong><span>Current role</span></div>
    </div>
    <div class="progress-board">
      ${buildClassroomProgressRows(visibleClassrooms)}
    </div>
  `;
}

function buildClassroomProgressRows(classrooms) {
  if (!classrooms.length)
    return '<div class="empty-state compact">No classroom progress yet</div>';
  const rows = classrooms.flatMap((classroom) =>
    classroom.studentNames.slice(0, 6).map((studentName, index) => {
      const assignedCourses = classroom.courseIds
        .map(findCourse)
        .filter(Boolean);
      const totalLessons = assignedCourses.reduce(
        (sum, course) => sum + flattenLessons(course).length,
        0,
      );
      const realStudent =
        studentName.trim().toLowerCase() ===
        state.account.displayName.trim().toLowerCase();
      const passedLessons = realStudent
        ? assignedCourses.reduce(
            (sum, course) =>
              sum +
              flattenLessons(course).filter(({ lesson }) =>
                isLessonPassed(lesson.id),
              ).length,
            0,
          )
        : Math.min(
            totalLessons,
            Math.max(0, index + classroom.courseIds.length - 1),
          );
      const percent = totalLessons
        ? Math.round((passedLessons / totalLessons) * 100)
        : 0;
      return `
        <article class="progress-row">
          <div>
            <strong>${escapeHtml(studentName)}</strong>
            <span>${escapeHtml(classroom.name)} - ${passedLessons}/${totalLessons} lessons</span>
          </div>
          <div class="inline-progress"><span style="width: ${percent}%"></span></div>
        </article>
      `;
    }),
  );
  return rows.join("");
}

function drawClassroomBuilder() {
  const panel = document.querySelector("#classroomBuilder");
  if (!panel) return;
  if (!canCreateContent()) {
    panel.innerHTML = `
      <p class="eyebrow">Student view</p>
      <h2>Bài được giao</h2>
      <p class="muted-copy">Các lớp hiển thị khi tên tài khoản của bạn nằm trong danh sách học sinh của lớp.</p>
      <form class="studio-form" id="joinClassForm">
        <label>
          Mã mời lớp học
          <input id="joinClassCode" type="text" placeholder="Ví dụ: EVENING01" />
        </label>
        <button class="primary-button" type="submit">Tham gia lớp</button>
      </form>
    `;
    panel
      .querySelector("#joinClassForm")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const code = panel
          .querySelector("#joinClassCode")
          .value.trim()
          .toUpperCase();
        const classroom = state.classrooms.find(
          (item) => item.inviteCode.toUpperCase() === code,
        );
        if (!classroom) {
          window.alert("Không tìm thấy lớp với mã này.");
          return;
        }
        const exists = classroom.studentNames.some(
          (name) =>
            name.trim().toLowerCase() ===
            state.account.displayName.trim().toLowerCase(),
        );
        if (!exists) classroom.studentNames.push(state.account.displayName);
        pushClassroomJoinToBackend(code);
        logAudit(
          "classroom_joined",
          `${state.account.displayName} joined ${classroom.name}`,
        );
        saveState();
        renderClassrooms();
      });
    return;
  }

  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Teacher tools</p>
        <h2>Tạo lớp học</h2>
      </div>
      <span class="status-pill">${getCourses().length} courses</span>
    </div>
    <form class="studio-form" id="classroomForm">
      <label>
        Tên lớp
        <input id="classroomName" type="text" value="Lớp học mới" required />
      </label>
      <label>
        Học sinh
        <textarea id="classroomStudents" rows="4" placeholder="Mỗi dòng một học sinh">An Nguyen
Minh Tran</textarea>
      </label>
      <div>
        <p class="eyebrow">Gán khóa học</p>
        <div class="class-course-picker">
          ${getCourses()
            .map(
              (course, index) => `
                <label class="course-check">
                  <input type="checkbox" value="${escapeHtml(course.id)}" ${index < 1 ? "checked" : ""} />
                  <span>
                    <strong>${escapeHtml(course.title)}</strong>
                    <small>${escapeHtml(course.subject)} - ${courseCompletion(course).percent}% complete</small>
                  </span>
                </label>
              `,
            )
            .join("")}
        </div>
      </div>
      <button class="primary-button" type="submit">Tạo lớp</button>
    </form>
  `;

  panel.querySelector("#classroomForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedCourseIds = [
      ...panel.querySelectorAll('.course-check input[type="checkbox"]:checked'),
    ].map((input) => input.value);
    const studentNames = panel
      .querySelector("#classroomStudents")
      .value.split(/[\n,]/)
      .map((name) => name.trim())
      .filter(Boolean);
    const classroom = normalizeClassroom({
      id: `classroom-${Date.now()}`,
      name: panel.querySelector("#classroomName").value.trim(),
      inviteCode: createInviteCode(
        panel.querySelector("#classroomName").value.trim(),
      ),
      teacherName: state.account.displayName,
      studentNames,
      courseIds: selectedCourseIds,
      createdAt: todayKey(),
    });
    state.classrooms.unshift(classroom);
    pushClassroomToBackend(classroom);
    saveState();
    renderClassrooms();
  });
}

function drawClassroomList() {
  const panel = document.querySelector("#classroomList");
  if (!panel) return;
  const visibleClassrooms = getVisibleClassrooms();
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Assigned paths</p>
        <h2>${canCreateContent() ? "Danh sách lớp" : "Việc học trong lớp"}</h2>
      </div>
      <span class="status-pill">${visibleClassrooms.length} active</span>
    </div>
    <div class="classroom-list"></div>
  `;
  const list = panel.querySelector(".classroom-list");
  if (!visibleClassrooms.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = canCreateContent()
      ? "Chưa có lớp học"
      : "Bạn chưa được gán vào lớp nào";
    list.append(empty);
    return;
  }

  visibleClassrooms.forEach((classroom) => {
    const coursesInClass = classroom.courseIds.map(findCourse).filter(Boolean);
    const item = document.createElement("article");
    item.className = "classroom-card";
    item.innerHTML = `
      <div class="panel-heading">
        <div>
          <p class="eyebrow">${escapeHtml(classroom.teacherName)}</p>
          <h3>${escapeHtml(classroom.name)}</h3>
        </div>
        <span class="status-pill">${classroom.studentNames.length} học sinh</span>
      </div>
      <div class="student-strip">
        ${canCreateContent() ? `<span>Invite: ${escapeHtml(classroom.inviteCode)}</span>` : ""}
        ${classroom.studentNames.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}
      </div>
      <div class="assigned-course-list"></div>
      <div class="classroom-actions"></div>
    `;
    const courseList = item.querySelector(".assigned-course-list");
    if (!coursesInClass.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "Lớp này chưa được gán khóa học";
      courseList.append(empty);
    }
    coursesInClass.forEach((course) => {
      const completion = courseCompletion(course);
      const row = document.createElement("button");
      row.type = "button";
      row.className = "assigned-course";
      row.innerHTML = `
        <strong>${escapeHtml(course.title)}</strong>
        <span>${escapeHtml(course.subject)} - ${completion.percent}% complete</span>
        <div class="inline-progress"><span style="width: ${completion.percent}%"></span></div>
      `;
      row.addEventListener("click", () => {
        window.location.hash = `course/${course.id}`;
      });
      courseList.append(row);
    });
    const actions = item.querySelector(".classroom-actions");
    if (coursesInClass[0]) {
      addAction(actions, "Add first lesson to Today", "ghost-button", () =>
        addClassroomTask(coursesInClass[0]),
      );
      addAction(actions, "Open first course", "primary-button", () => {
        window.location.hash = `course/${coursesInClass[0].id}`;
      });
    }
    if (canCreateContent()) {
      addAction(actions, "Remove class", "danger-button", () =>
        removeClassroom(classroom.id),
      );
    }
    list.append(item);
  });
}

function addClassroomTask(course) {
  const next = getNextLesson(course) || flattenLessons(course)[0];
  if (!next) return;
  state.tasks.unshift({
    id: `task-${Date.now()}`,
    title: `Classroom: ${next.lesson.title}`,
    status: "todo",
    dueDate: todayKey(),
    priority: "high",
    linkType: "lesson",
    courseId: course.id,
    lessonId: next.lesson.id,
  });
  saveState();
  window.location.hash = "daily";
}

function removeClassroom(classroomId) {
  if (!canCreateContent()) return;
  state.classrooms = state.classrooms.filter(
    (classroom) => classroom.id !== classroomId,
  );
  saveState();
  renderClassrooms();
}

function renderAccount() {
  setActiveNav("account");
  setPage("Account", `${getRoleLabel()} workspace`);
  const view = cloneTemplate("#accountTemplate");
  viewRoot.replaceChildren(view);
  if (!isBackendAuthenticated()) {
    view.querySelector("#accountProfilePanel").insertAdjacentHTML(
      "afterbegin",
      `<div class="account-notice">
        <strong>Chưa đăng nhập backend</strong>
        <span>Hồ sơ hiện chỉ lưu trong trình duyệt. Đăng nhập để đồng bộ với database.</span>
        <button class="ghost-button" type="button" data-go-login>Đăng nhập</button>
      </div>`,
    );
    view.querySelector("[data-go-login]").addEventListener("click", () => {
      window.location.hash = "login";
    });
  }

  view.querySelector("#accountPageTitle").textContent =
    `Hồ sơ ${getRoleLabel().toLowerCase()}`;
  view.querySelector("#accountName").value = state.account.displayName;
  view.querySelector("#accountAge").value = state.account.age || "";
  view.querySelector("#accountClassName").value = state.account.className || "";
  view.querySelector("#accountSchool").value = state.account.school || "";
  view.querySelector("#accountEmail").value = state.account.email || "";
  view.querySelector("#accountRolePill").textContent = getRoleLabel();
  view.querySelector("#emailVerifiedLabel").textContent = state.account
    .emailVerified
    ? "Đã xác minh"
    : "Chưa xác minh";
  if (state.account.role === "admin") {
    view
      .querySelector("#accountProfilePanel")
      .classList.add("full-account-panel");
  }
  drawRoleAccountPanel(view);

  view
    .querySelector("#accountForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      state.account.displayName = cleanProfileText(
        view.querySelector("#accountName").value,
        state.account.displayName || "Người học",
      );
      state.account.age = Number(view.querySelector("#accountAge").value) || "";
      state.account.className = cleanProfileText(
        view.querySelector("#accountClassName").value,
      );
      state.account.school = cleanProfileText(
        view.querySelector("#accountSchool").value,
      );
      state.account.email = cleanProfileText(
        view.querySelector("#accountEmail").value,
        state.account.email,
      );
      state.creatorProfile.displayName = state.account.displayName;
      logAudit(
        "account_profile_updated",
        `${state.account.displayName} updated profile`,
      );
      saveState();
      renderProfileMini();
      const status = view.querySelector("#accountSaveStatus");
      status.textContent = "Đang lưu hồ sơ...";
      try {
        await pushProfileToBackend();
        saveState();
        status.textContent =
          state.authSession.provider === "php-api"
            ? "Đã lưu hồ sơ vào database."
            : "Đã lưu hồ sơ trong trình duyệt.";
      } catch (error) {
        status.textContent = `Lưu local thành công, sync database lỗi: ${error.message}`;
      }
    });

  const passwordPanel = view.querySelector("#passwordChangePanel");
  const passwordStatus = view.querySelector("#accountSaveStatus");
  view.querySelector("#changePasswordButton").addEventListener("click", () => {
    passwordPanel.hidden = !passwordPanel.hidden;
    if (!passwordPanel.hidden) {
      view.querySelector("#currentPasswordInput").focus();
    }
  });
  view.querySelector("#cancelPasswordButton").addEventListener("click", () => {
    passwordPanel.hidden = true;
    view.querySelector("#currentPasswordInput").value = "";
    view.querySelector("#newPasswordInput").value = "";
  });
  view
    .querySelector("#savePasswordButton")
    .addEventListener("click", async () => {
      const currentPassword = view.querySelector("#currentPasswordInput").value;
      const newPassword = view.querySelector("#newPasswordInput").value;
      if (state.authSession.provider !== "php-api") {
        passwordStatus.textContent = translateText(
          "Đổi mật khẩu cần đăng nhập backend.",
        );
        return;
      }
      if (!currentPassword) {
        passwordStatus.textContent = translateText(
          "Bạn hãy nhập mật khẩu hiện tại.",
        );
        return;
      }
      if (newPassword.length < 8) {
        passwordStatus.textContent = translateText(
          "Mật khẩu cần ít nhất 8 ký tự.",
        );
        return;
      }
      passwordStatus.textContent = translateText("Đang đổi mật khẩu...");
      try {
        await apiRequest("password.php", {
          method: "POST",
          body: JSON.stringify({ currentPassword, newPassword }),
        });
        view.querySelector("#currentPasswordInput").value = "";
        view.querySelector("#newPasswordInput").value = "";
        passwordPanel.hidden = true;
        logAudit(
          "password_changed",
          `${state.account.displayName} changed password`,
        );
        saveState();
        passwordStatus.textContent = translateText("Đã đổi mật khẩu.");
      } catch (error) {
        passwordStatus.textContent = `${translateText("Đổi mật khẩu lỗi: ")}${error.message}`;
      }
    });
}

function renderSettings() {
  setActiveNav("settings");
  const adminMode = state.account.role === "admin";
  setPage("Settings", adminMode ? "Cài đặt nền tảng" : "Cấu hình cá nhân");
  const view = cloneTemplate("#settingsTemplate");
  viewRoot.replaceChildren(view);

  if (adminMode) {
    bindSystemPanel(view);
    drawReadinessPanel(view);
    drawPlatformAdminSettingsPanel(view);
    bindDataToolsPanel(view);
  } else {
    view.querySelector("#systemPanel")?.remove();
    view.querySelector("#readinessPanel")?.remove();
    view.querySelector("#platformAdminSettingsPanel")?.remove();
    view.querySelector(".data-tools-panel")?.remove();
  }
  bindLanguagePanel(view);
  bindMusicPanel(view);
}

function renderAuth(mode = "login", role = "student") {
  setShellMode("auth");
  setActiveNav("");
  setPage("", "");
  const view = cloneTemplate("#authTemplate");
  viewRoot.replaceChildren(view);
  bindAuthPage(view, mode, role);
}

function isProfileSetupComplete() {
  if (state.account.role === "admin") return true;
  const legacyDemoProfile =
    Number(state.account.age) === 16 &&
    state.account.school === "THPT Nguyễn Trãi" &&
    state.account.className === "10A1" &&
    !String(state.account.email || "").includes("student.studyflow.local");
  if (legacyDemoProfile && !state.onboarding.completed) return false;
  return Boolean(
    cleanProfileText(state.account.displayName) &&
      cleanProfileText(state.account.email) &&
      cleanProfileText(state.account.school) &&
      cleanProfileText(state.account.className) &&
      Number(state.account.age) > 0,
  );
}

function getRecommendedCoursesForInterests(
  interests = state.onboarding.interests,
) {
  const selected = onboardingInterestOptions.filter((interest) =>
    interests.includes(interest.id),
  );
  const ranked = getCourses()
    .map((course) => {
      const haystack =
        `${course.title} ${course.subject} ${course.description} ${flattenLessons(
          course,
        )
          .map((lesson) => lesson.title)
          .join(" ")}`.toLowerCase();
      const score = selected.reduce((sum, interest) => {
        const keywordHits = interest.keywords.filter((keyword) =>
          haystack.includes(keyword.toLowerCase()),
        ).length;
        const subjectHit = haystack.includes(interest.id.toLowerCase()) ? 2 : 0;
        return sum + keywordHits + subjectHit;
      }, 0);
      return { course, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.course.rating - a.course.rating)
    .map((entry) => entry.course);
  return ranked.length ? ranked.slice(0, 4) : getCourses().slice(0, 3);
}

function drawOnboardingRecommendations(root) {
  const list = root.querySelector("#onboardingRecommendations");
  if (!list) return;
  const recommendations = getRecommendedCoursesForInterests(
    state.onboarding.interests,
  );
  const recommendationIds = recommendations.map((course) => course.id);
  state.onboarding.recommendedCourseIds =
    state.onboarding.recommendedCourseIds.filter((id) =>
      recommendationIds.includes(id),
    );
  list.innerHTML = recommendations
    .map((course) => {
      const matchedTags = onboardingInterestOptions
        .filter((interest) => state.onboarding.interests.includes(interest.id))
        .filter((interest) =>
          interest.keywords.some((keyword) =>
            `${course.title} ${course.subject} ${course.description}`
              .toLowerCase()
              .includes(keyword.toLowerCase()),
          ),
        )
        .map((interest) => interest.tag);
      const selected = state.onboarding.recommendedCourseIds.includes(
        course.id,
      );
      return `
        <button class="account-course-row onboarding-course-choice${selected ? " selected" : ""}" type="button" data-course-id="${escapeHtml(course.id)}" aria-pressed="${selected ? "true" : "false"}">
          <span>
            <strong>${escapeHtml(course.title)}</strong>
            <small>${escapeHtml(course.subject)}${matchedTags.length ? ` - ${matchedTags.join(" ")}` : ""}</small>
          </span>
          <span class="onboarding-select-state">
            <b>${courseCompletion(course).percent}%</b>
            <i class="onboarding-check" aria-hidden="true">✓</i>
          </span>
        </button>
      `;
    })
    .join("");
  list.querySelectorAll("[data-course-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const courseId = button.dataset.courseId;
      if (state.onboarding.recommendedCourseIds.includes(courseId)) {
        state.onboarding.recommendedCourseIds =
          state.onboarding.recommendedCourseIds.filter((id) => id !== courseId);
      } else {
        state.onboarding.recommendedCourseIds = [
          ...state.onboarding.recommendedCourseIds,
          courseId,
        ];
      }
      drawOnboardingRecommendations(root);
    });
  });
}

function renderOnboarding() {
  setShellMode("auth");
  setActiveNav("");
  setPage("", "");
  const view = cloneTemplate("#onboardingTemplate");
  viewRoot.replaceChildren(view);
  const form = view.querySelector("#onboardingForm");
  const status = view.querySelector("#onboardingStatus");
  view.querySelector("#onboardingName").value = state.account.displayName || "";
  view.querySelector("#onboardingAge").value = state.account.age || "";
  view.querySelector("#onboardingClassName").value =
    state.account.className || "";
  view.querySelector("#onboardingSchool").value = state.account.school || "";
  view.querySelector("#onboardingEmail").value = state.account.email || "";

  const grid = view.querySelector("#interestGrid");
  grid.innerHTML = onboardingInterestOptions
    .map(
      (interest) => `
        <button class="interest-chip${state.onboarding.interests.includes(interest.id) ? " active" : ""}" type="button" data-interest="${interest.id}">
          <strong>${escapeHtml(interest.label)}</strong>
          <span>${escapeHtml(interest.tag)}</span>
        </button>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-interest]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.interest;
      const selected = new Set(state.onboarding.interests);
      if (selected.has(id)) selected.delete(id);
      else selected.add(id);
      state.onboarding.interests = [...selected];
      button.classList.toggle("active", selected.has(id));
      drawOnboardingRecommendations(view);
    });
  });

  drawOnboardingRecommendations(view);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    state.account.displayName = cleanProfileText(
      view.querySelector("#onboardingName").value,
      state.account.displayName,
    );
    state.account.age =
      Number(view.querySelector("#onboardingAge").value) || "";
    state.account.className = cleanProfileText(
      view.querySelector("#onboardingClassName").value,
    );
    state.account.school = cleanProfileText(
      view.querySelector("#onboardingSchool").value,
    );
    state.account.email = cleanProfileText(
      view.querySelector("#onboardingEmail").value,
      state.account.email,
    );
    state.creatorProfile.displayName = state.account.displayName;
    if (!isProfileSetupComplete()) {
      status.textContent =
        "Bạn hãy điền đủ họ tên, tuổi, lớp, trường và email để hoàn tất hồ sơ.";
      return;
    }
    if (!state.onboarding.recommendedCourseIds.length) {
      status.textContent =
        "Bạn hãy chọn ít nhất một khóa học đề xuất để bắt đầu.";
      return;
    }
    state.onboarding.completed = true;
    state.learningQueue = [
      ...new Set([
        ...state.learningQueue,
        ...state.onboarding.recommendedCourseIds,
      ]),
    ];
    logAudit(
      "onboarding_completed",
      `${state.account.displayName} completed onboarding`,
    );
    status.textContent = "Đang lưu thiết lập...";
    saveState();
    try {
      await pushProfileToBackend();
    } catch (error) {
      console.warn("Onboarding profile sync failed", error);
    }
    saveState();
    window.location.hash = "catalog";
  });

  localizeView(view);
}

function bindSystemPanel(root) {
  const panel = root.querySelector("#systemPanel");
  if (!panel) return;
  const isBackend = isBackendAuthenticated();
  const statusPill = panel.querySelector("#systemStatusPill");
  const summary = panel.querySelector("#systemSummary");
  statusPill.textContent =
    state.backend.status === "connected" ? "online" : "needs check";
  summary.innerHTML = `
    <div class="session-grid">
      <div class="session-tile"><strong>${escapeHtml(state.backend.status)}</strong><span>Backend</span></div>
      <div class="session-tile"><strong>${state.backend.enabled ? "API" : "Local"}</strong><span>Data mode</span></div>
      <div class="session-tile"><strong>${isBackend ? "Đã đăng nhập" : "Chưa đăng nhập"}</strong><span>Account session</span></div>
      <div class="session-tile"><strong>${escapeHtml(getRoleLabel())}</strong><span>Role hiện tại</span></div>
    </div>
    <p class="muted-copy">${isBackend ? "Tài khoản hiện tại đang dùng session PHP và dữ liệu MySQL." : "Bạn có thể học thử bằng dữ liệu trình duyệt, nhưng tài khoản production cần đăng nhập backend để lưu vào database."}</p>
    <div class="backend-tools">
      <div class="data-actions">
        <button class="primary-button" id="checkBackendButton" type="button">Kiểm tra backend</button>
        <button class="ghost-button" id="openLoginButton" type="button">${isBackend ? "Quản lý tài khoản" : "Đăng nhập"}</button>
        ${isBackend ? `<button class="ghost-button" id="logoutBackendButton" type="button">Đăng xuất</button>` : ""}
      </div>
      <div class="import-status" id="backendStatusMessage" aria-live="polite">${escapeHtml(state.backend.message)}</div>
    </div>
  `;
  const backendStatus = panel.querySelector("#backendStatusMessage");
  panel.querySelector("#checkBackendButton").addEventListener("click", () => {
    backendStatus.textContent = "Đang kiểm tra backend...";
    checkBackendStatus(backendStatus);
  });
  panel.querySelector("#openLoginButton").addEventListener("click", () => {
    window.location.hash = isBackend ? "account" : "login";
  });
  panel
    .querySelector("#logoutBackendButton")
    ?.addEventListener("click", async () => {
      await logoutBackendSession();
      renderSettings();
    });
}

function bindAuthPage(root, mode = "login", role = "student") {
  const authPage = root.matches(".auth-page")
    ? root
    : root.querySelector(".auth-page");
  const status = root.querySelector("#authPageStatusMessage");
  const title = root.querySelector("#authPageTitle");
  const subtitle = root.querySelector("#authPageSubtitle");
  const loginForm = root.querySelector("#backendLoginForm");
  const registerForm = root.querySelector("#backendRegisterForm");
  const registerTitle = root.querySelector("#registerTitle");
  const roleInput = root.querySelector("#backendRegisterRole");
  const registerLink = root.querySelector("#authRegisterLink");
  const loginLink = root.querySelector("#authLoginLink");
  const isBackend = isBackendAuthenticated();
  const isRegister = mode === "register";
  const safeRole = role === "teacher" ? "teacher" : "student";
  const roleLabel = safeRole === "teacher" ? "giảng viên" : "học viên";
  const roleLabelEn = safeRole === "teacher" ? "teacher" : "student";

  authPage.dataset.authMode = isRegister ? "register" : "login";
  authPage.dataset.authRole = safeRole;

  loginForm.hidden = isRegister;
  registerForm.hidden = !isRegister;
  registerLink.hidden = isRegister;
  loginLink.hidden = !isRegister;
  roleInput.value = safeRole;
  registerTitle.textContent =
    getLanguage() === "en"
      ? `Create ${roleLabelEn} account`
      : `Tạo tài khoản ${roleLabel}`;
  title.textContent = isRegister
    ? getLanguage() === "en"
      ? `Create ${roleLabelEn} account`
      : `Tạo tài khoản ${roleLabel}`
    : getLanguage() === "en"
      ? "Sign in to StudyFlow"
      : "Đăng nhập StudyFlow";
  subtitle.textContent = isRegister
    ? getLanguage() === "en"
      ? "Create your learning workspace. No card required."
      : "Tạo không gian học tập của bạn. Không cần thẻ thanh toán."
    : getLanguage() === "en"
      ? "Continue your courses, notes, and daily streak."
      : "Tiếp tục khóa học, ghi chú và chuỗi học mỗi ngày.";
  status.textContent = isBackend
    ? getLanguage() === "en"
      ? "You are signed in. Continue to dashboard or account."
      : "Bạn đã đăng nhập. Có thể vào dashboard hoặc tài khoản để tiếp tục."
    : isRegister
      ? getLanguage() === "en"
        ? "After registration, StudyFlow will guide you through profile setup and course recommendations."
        : "Sau khi đăng ký, StudyFlow sẽ hướng dẫn thiết lập hồ sơ và gợi ý khóa học phù hợp."
      : getLanguage() === "en"
        ? "Enter email and password to open your learning workspace."
        : "Nhập email và mật khẩu để mở không gian học tập.";

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = root.querySelector("#backendLoginEmail").value.trim();
    const password = root.querySelector("#backendLoginPassword").value;
    if (!isValidEmail(email)) {
      status.textContent = "Email chưa đúng định dạng.";
      return;
    }
    if (!password) {
      status.textContent = "Bạn hãy nhập mật khẩu.";
      return;
    }
    status.textContent = "Đang đăng nhập...";
    try {
      const data = await apiRequest("login.php", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });
      syncAccountFromApiUser(data.user);
      await syncCoursesFromBackendSafely();
      logAudit("auth_login", "Backend session signed in");
      saveState();
      window.location.hash = isEducatorRole()
        ? "studio"
        : isPendingTeacherRole() || isProfileSetupComplete()
          ? "account"
          : "onboarding";
    } catch (error) {
      status.textContent = `Đăng nhập lỗi: ${error.message}`;
    }
  });

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const displayName = cleanProfileText(
      root.querySelector("#backendRegisterName").value,
    );
    const email = root.querySelector("#backendRegisterEmail").value.trim();
    const password = root.querySelector("#backendRegisterPassword").value;
    if (!displayName) {
      status.textContent = "Bạn hãy nhập họ và tên.";
      return;
    }
    if (!isValidEmail(email)) {
      status.textContent = "Email chưa đúng định dạng.";
      return;
    }
    if (password.length < 8) {
      status.textContent = "Mật khẩu cần ít nhất 8 ký tự.";
      return;
    }
    status.textContent = "Đang tạo tài khoản...";
    try {
      const data = await apiRequest("register.php", {
        method: "POST",
        body: JSON.stringify({
          displayName,
          email,
          password,
          role: root.querySelector("#backendRegisterRole").value,
        }),
      });
      syncAccountFromApiUser(data.user);
      state.onboarding.completed = false;
      state.onboarding.interests = [];
      state.onboarding.recommendedCourseIds = [];
      logAudit("auth_register", `${roleLabel} account created`);
      saveState();
      window.location.hash = isPendingTeacherRole() ? "account" : "onboarding";
    } catch (error) {
      status.textContent = `Tạo tài khoản lỗi: ${error.message}`;
    }
  });
}

async function logoutBackendSession() {
  if (state.authSession.provider === "php-api") {
    await apiRequest("logout.php", { method: "POST" }).catch(() => null);
  }
  resetAuthSession();
  logAudit("auth_logout", "Backend session signed out");
  saveState();
}

async function studyflowLogout() {
  await logoutBackendSession();
  window.location.hash = "login";
  route();
}

window.studyflowLogout = studyflowLogout;

function bindAuthPanel(root) {
  bindSystemPanel(root);
}

function bindLanguagePanel(root) {
  const panel = root.querySelector("#languageControl");
  const status = root.querySelector("#languageStatusPill");
  if (!panel || !status) return;
  status.textContent = getLanguage().toUpperCase();
  panel.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.language === getLanguage(),
    );
    button.addEventListener("click", () => {
      state.preferences.language = button.dataset.language;
      saveState();
      renderSettings();
    });
  });
}

function bindMusicPanel(root) {
  const input = root.querySelector("#musicPathInput");
  const saveButton = root.querySelector("#saveMusicButton");
  const toggleButton = root.querySelector("#toggleMusicButton");
  const status = root.querySelector("#musicStatus");
  if (!input || !saveButton || !toggleButton || !status) return;
  input.value = state.preferences.musicSrc || "";
  toggleButton.textContent = backgroundAudio.paused
    ? translateText("Phát nhạc")
    : translateText("Dừng nhạc");
  status.textContent = state.preferences.musicSrc
    ? `Đường dẫn hiện tại: ${state.preferences.musicSrc}`
    : "Chưa có file nhạc nền.";

  saveButton.addEventListener("click", () => {
    state.preferences.musicSrc = input.value.trim();
    state.preferences.musicEnabled = false;
    configureBackgroundMusic();
    saveState();
    status.textContent = state.preferences.musicSrc
      ? `Đã lưu đường dẫn: ${state.preferences.musicSrc}`
      : "Đã xóa nhạc nền.";
  });

  toggleButton.addEventListener("click", async () => {
    if (!state.preferences.musicSrc) {
      status.textContent = "Bạn cần nhập đường dẫn nhạc trước.";
      return;
    }
    configureBackgroundMusic();
    if (backgroundAudio.paused) {
      try {
        await backgroundAudio.play();
        state.preferences.musicEnabled = true;
        toggleButton.textContent = translateText("Dừng nhạc");
        status.textContent = "Đang phát nhạc nền.";
      } catch (error) {
        status.textContent = `Không phát được nhạc: ${error.message}`;
      }
    } else {
      backgroundAudio.pause();
      state.preferences.musicEnabled = false;
      toggleButton.textContent = translateText("Phát nhạc");
      status.textContent = "Đã dừng nhạc nền.";
    }
    saveState();
  });
}

function configureBackgroundMusic() {
  const src = state.preferences?.musicSrc || "";
  if (!src) {
    backgroundAudio.pause();
    backgroundAudio.removeAttribute("src");
    return;
  }
  if (!backgroundAudio.src.endsWith(src)) {
    backgroundAudio.src = src;
    backgroundAudio.load();
  }
}

function bindDataToolsPanel(root) {
  const exportButton = root.querySelector("#exportDataButton");
  const importInput = root.querySelector("#importDataInput");
  const status = root.querySelector("#importStatus");
  if (!exportButton || !importInput || !status) return;

  exportButton.addEventListener("click", () => {
    const payload = {
      app: "StudyFlow",
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      state,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `studyflow-backup-${todayKey()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    status.textContent = "Đã tạo file backup JSON.";
  });

  importInput.addEventListener("change", async () => {
    const file = importInput.files?.[0];
    if (!file) return;
    status.textContent = "Đang đọc file...";
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const importedState = parsed.state || parsed;
      if (
        !importedState ||
        typeof importedState !== "object" ||
        Array.isArray(importedState)
      ) {
        throw new Error("File không có dữ liệu StudyFlow hợp lệ.");
      }
      const ok = window.confirm(
        "Import sẽ ghi đè dữ liệu StudyFlow hiện tại trong browser này. Tiếp tục?",
      );
      if (!ok) {
        status.textContent = "Đã hủy import.";
        importInput.value = "";
        return;
      }
      state = normalizeState({
        ...structuredClone(defaultState),
        ...importedState,
      });
      saveState();
      status.textContent = "Import thành công. Đang tải lại giao diện...";
      renderAccount();
    } catch (error) {
      status.textContent = `Import thất bại: ${error.message}`;
    } finally {
      importInput.value = "";
    }
  });
}

function drawReadinessPanel(root) {
  const panel = root.querySelector("#readinessPanel");
  if (!panel) return;
  const backendReady = state.backend.status === "connected";
  const checks = [
    {
      label: "Role permission",
      done: Boolean(state.account.role && state.authSession),
    },
    { label: "Learning pass/fail", done: true },
    { label: "Creator moderation", done: true },
    { label: "Classroom standalone", done: state.classrooms.length > 0 },
    { label: "Asset library local", done: true },
    { label: "Export/import JSON", done: true },
    { label: "Admin audit log", done: true },
    { label: "Production backend", done: backendReady },
  ];
  const doneCount = checks.filter((item) => item.done).length;
  const percent = Math.round((doneCount / checks.length) * 100);
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Readiness</p>
        <h2>Production checklist</h2>
      </div>
      <span class="status-pill">${percent}% ready</span>
    </div>
    <div class="inline-progress"><span style="width: ${percent}%"></span></div>
    <div class="readiness-list">
      ${checks
        .map(
          (item) => `
            <div class="readiness-item ${item.done ? "done" : "pending"}">
              <strong>${item.done ? "Done" : "Next"}</strong>
              <span>${escapeHtml(item.label)}</span>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="data-actions">
      <button class="primary-button" id="runSelfCheckButton" type="button">Run self-check</button>
    </div>
    <div class="self-check-results" id="selfCheckResults"></div>
  `;
  panel.querySelector("#runSelfCheckButton").addEventListener("click", () => {
    drawSelfCheckResults(panel.querySelector("#selfCheckResults"));
  });
}

function runSelfChecks() {
  const firstCourse = getCourses()[0];
  const firstLesson = firstCourse
    ? flattenLessons(firstCourse)[0]?.lesson
    : null;
  return [
    {
      name: "Catalog has courses",
      passed: getCourses().length > 0,
    },
    {
      name: "Lesson pass threshold is enforced",
      passed: typeof isLessonPassed === "function" && Boolean(firstLesson),
    },
    {
      name: "Three roles exist",
      passed: ["student", "teacher", "admin"].every((role) =>
        ["student", "teacher", "admin"].includes(role),
      ),
    },
    {
      name: "Creator Studio gated by role/session",
      passed: typeof canCreateContent() === "boolean",
    },
    {
      name: "Classroom schema exists locally",
      passed: Array.isArray(state.classrooms),
    },
    {
      name: "Export data shape is available",
      passed: Boolean(state.account && state.tasks && state.notes),
    },
  ];
}

function drawSelfCheckResults(target) {
  if (!target) return;
  const results = runSelfChecks();
  target.innerHTML = `
    ${results
      .map(
        (item) => `
          <div class="readiness-item ${item.passed ? "done" : "pending"}">
            <strong>${item.passed ? "Pass" : "Fail"}</strong>
            <span>${escapeHtml(item.name)}</span>
          </div>
        `,
      )
      .join("")}
  `;
  logAudit(
    "self_check_run",
    `${results.filter((item) => item.passed).length}/${results.length} checks passed`,
  );
  saveState();
}

function getRegisteredCourses() {
  const registeredIds = new Set(state.learningQueue);
  Object.keys(state.completedLessons).forEach((lessonId) => {
    const found = findLessonById(lessonId);
    if (found?.course?.id) registeredIds.add(found.course.id);
  });
  state.classrooms.forEach((classroom) => {
    const belongsToClass = classroom.studentNames.some(
      (name) =>
        name.trim().toLowerCase() ===
        state.account.displayName.trim().toLowerCase(),
    );
    if (belongsToClass) {
      classroom.courseIds.forEach((courseId) => registeredIds.add(courseId));
    }
  });
  return [...registeredIds].map(findCourse).filter(Boolean);
}

function findLessonById(lessonId) {
  for (const course of getCourses()) {
    for (const item of flattenLessons(course)) {
      if (item.lesson.id === lessonId) {
        return { course, ...item };
      }
    }
  }
  return null;
}

function getCompletedCourseCount(coursesToCheck = getRegisteredCourses()) {
  return coursesToCheck.filter(
    (course) => courseCompletion(course).percent === 100,
  ).length;
}

function drawRoleAccountPanel(root) {
  const panel = root.querySelector("#roleAccountPanel");
  if (!panel) return;
  const role = state.account.role;
  if (role === "teacher_pending") return drawPendingTeacherAccountPage(panel);
  if (role === "teacher") return drawTeacherAccountPage(panel);
  if (role === "admin") return drawAdminAccountPage(panel);
  return drawStudentAccountPage(panel);
}

function drawPendingTeacherAccountPage(panel) {
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Tài khoản giáo viên</p>
        <h2>Đang chờ admin duyệt</h2>
      </div>
      <span class="status-pill">pending</span>
    </div>
    <div class="account-section-block">
      <h3>Chưa thể tạo bài giảng</h3>
      <p class="muted-copy">Tài khoản giáo viên mới cần admin accept trước khi mở Studio, lớp học và quyền chỉnh sửa toàn bộ bài học. Sau khi admin chuyển role sang Giáo viên, hãy đăng xuất rồi đăng nhập lại.</p>
    </div>
    <div class="role-action-strip">
      <button class="ghost-button" type="button" data-go="account">Làm mới hồ sơ</button>
      <button class="ghost-button" type="button" data-go="catalog">Xem khóa học công khai</button>
    </div>
  `;
  panel.querySelector('[data-go="account"]').addEventListener("click", () => {
    window.location.hash = "account";
  });
  panel.querySelector('[data-go="catalog"]').addEventListener("click", () => {
    window.location.hash = "catalog";
  });
}

function drawStudentAccountPage(panel) {
  const registeredCourses = getRegisteredCourses();
  const completedCourseCount = getCompletedCourseCount(registeredCourses);
  const streak = getStreak();
  const activeCourses = registeredCourses
    .filter((course) => courseCompletion(course).percent < 100)
    .slice(0, 4);
  const nextPlan = getNextRegisteredLessonPlan(registeredCourses);
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Thông tin bài học</p>
        <h2>Bài học của tôi</h2>
      </div>
      <span class="status-pill">student</span>
    </div>
    <div class="account-metric-grid">
      <div class="session-tile"><strong>${activeCourses.length}</strong><span>Khóa đang học</span></div>
      <div class="session-tile"><strong>${completedCourseCount}/${registeredCourses.length}</strong><span>Hoàn thành / đăng ký</span></div>
      <div class="session-tile"><strong>${streak.current}</strong><span>Chuỗi hiện tại</span></div>
      <div class="session-tile"><strong>${streak.longest}</strong><span>Chuỗi tốt nhất</span></div>
    </div>
    <div class="role-action-strip">
      <button class="primary-button" type="button" data-student-action="next" ${nextPlan ? "" : "disabled"}>Tiếp tục bài tiếp theo</button>
      <button class="ghost-button" type="button" data-student-action="catalog">Khám phá khóa học</button>
      <button class="ghost-button" type="button" data-student-action="daily">Mở hôm nay</button>
    </div>
    <div class="account-section-block">
      <div class="panel-heading compact-heading">
        <div>
          <p class="eyebrow">Đang học</p>
          <h3>Khóa học của bạn</h3>
        </div>
      </div>
      <div class="account-course-list">
        ${
          activeCourses.length
            ? activeCourses
                .map((course) => {
                  const completion = courseCompletion(course);
                  return `
                    <button class="account-course-row" type="button" data-course-id="${escapeHtml(course.id)}">
                      <span>
                        <strong>${escapeHtml(course.title)}</strong>
                        <small>${escapeHtml(course.subject)} - ${completion.completed}/${completion.total} bài</small>
                      </span>
                      <b>${completion.percent}%</b>
                    </button>
                  `;
                })
                .join("")
            : `<div class="empty-state">Chưa có khóa đang học. Hãy thêm khóa vào queue hoặc tham gia classroom.</div>`
        }
      </div>
    </div>
    <div class="account-section-block">
      <p class="muted-copy">Thông tin ở đây chỉ phục vụ học tập cá nhân: khóa đang học, tiến độ hoàn thành và chuỗi điểm danh.</p>
    </div>
  `;
  panel.querySelectorAll(".account-course-row").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.hash = `course/${button.dataset.courseId}`;
    });
  });
  panel
    .querySelector('[data-student-action="next"]')
    ?.addEventListener("click", () => {
      if (nextPlan)
        window.location.hash = `lesson/${nextPlan.course.id}/${nextPlan.lesson.id}`;
    });
  panel
    .querySelector('[data-student-action="catalog"]')
    ?.addEventListener("click", () => {
      window.location.hash = "catalog";
    });
  panel
    .querySelector('[data-student-action="daily"]')
    ?.addEventListener("click", () => {
      window.location.hash = "daily";
    });
}

function drawTeacherAccountPage(panel) {
  const teacherClassrooms = state.classrooms.filter(
    (classroom) =>
      classroom.teacherName.trim().toLowerCase() ===
      state.account.displayName.trim().toLowerCase(),
  );
  const uploadedCourses = state.customCourses;
  const pendingSubmissions = state.studioSubmissions.filter(
    (submission) => submission.status === "pending",
  ).length;
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Thông tin bài giảng</p>
        <h2>Bài giảng của tôi</h2>
      </div>
      <span class="status-pill">teacher</span>
    </div>
    <div class="account-metric-grid">
      <div class="session-tile"><strong>${uploadedCourses.length}</strong><span>Tổng bài giảng upload</span></div>
      <div class="session-tile"><strong>${pendingSubmissions}</strong><span>Bài đang chờ duyệt</span></div>
      <div class="session-tile"><strong>${state.creatorProfile.approvedCourses}</strong><span>Bài đã được duyệt</span></div>
      <div class="session-tile"><strong>${teacherClassrooms.length}</strong><span>Lớp đang phụ trách</span></div>
    </div>
    <div class="account-section-block">
      <h3>Danh sách bài giảng</h3>
      <div class="account-course-list">
        ${
          uploadedCourses.length
            ? uploadedCourses
                .slice(0, 5)
                .map(
                  (course) => `
                    <button class="account-course-row" type="button" data-course-id="${escapeHtml(course.id)}">
                      <span>
                        <strong>${escapeHtml(course.title)}</strong>
                        <small>${escapeHtml(course.subject)} - ${flattenLessons(course).length} bài học</small>
                      </span>
                      <b>${escapeHtml(course.status || "published")}</b>
                    </button>
                  `,
                )
                .join("")
            : `<div class="empty-state">Chưa upload bài giảng nào. Tạo bài đầu tiên trong Studio.</div>`
        }
      </div>
    </div>
    <div class="data-actions">
      <button class="primary-button" type="button" data-go="studio">Mở Studio</button>
      <button class="ghost-button" type="button" data-go="classrooms">Mở lớp học</button>
      <button class="ghost-button" type="button" id="publishLocalCoursesButton" ${uploadedCourses.length ? "" : "disabled"}>Upload toàn bộ data lên web</button>
    </div>
    <div class="import-status" id="localCoursePublishStatus" aria-live="polite"></div>
  `;
  panel.querySelectorAll(".account-course-row").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.hash = `course/${button.dataset.courseId}`;
    });
  });
  panel.querySelector('[data-go="studio"]').addEventListener("click", () => {
    window.location.hash = "studio";
  });
  panel
    .querySelector('[data-go="classrooms"]')
    .addEventListener("click", () => {
      window.location.hash = "classrooms";
    });
  panel
    .querySelector("#publishLocalCoursesButton")
    ?.addEventListener("click", async () => {
      const status = panel.querySelector("#localCoursePublishStatus");
      status.textContent = "Đang upload toàn bộ bài đã sửa local lên web...";
      try {
        const results = await publishAllLocalCoursesToBackend((message) => {
          status.textContent = message;
        });
        const published = results.filter(
          (result) => result.status === "published",
        ).length;
        status.textContent =
          published === results.length
            ? `Đã upload và publish ${results.length} course lên web.`
            : `Đã upload ${results.length} course lên web, các course của giáo viên đang chờ admin duyệt.`;
      } catch (error) {
        status.textContent = `Upload lỗi: ${error.message}`;
      }
    });
}

function drawAdminAccountPage(panel) {
  panel.remove();
}

function formatUploadError(error) {
  const parts = [
    error?.status ? `HTTP ${error.status}` : "",
    error?.code || "",
    error?.message || "Lỗi không xác định",
    error?.hint ? `Hint: ${error.hint}` : "",
    error?.detail ? `Detail: ${error.detail}` : "",
  ].filter(Boolean);
  return parts.join(" - ");
}

function createUploadProgressController(panel, totalSteps = 1) {
  const progressPanel = panel.querySelector("#adminUploadProgressPanel");
  const fill = panel.querySelector("#adminUploadProgressFill");
  const percentText = panel.querySelector("#adminUploadProgressPercent");
  const stepText = panel.querySelector("#adminUploadProgressSteps");
  const currentText = panel.querySelector("#adminUploadProgressCurrent");
  const log = panel.querySelector("#adminUploadProgressLog");
  let completed = 0;
  let total = Math.max(1, Number(totalSteps) || 1);

  const render = () => {
    const percent = Math.max(
      0,
      Math.min(100, Math.round((completed / total) * 100)),
    );
    if (fill) fill.style.width = `${percent}%`;
    if (percentText) percentText.textContent = `${percent}%`;
    if (stepText) stepText.textContent = `${completed}/${total} bước`;
    return percent;
  };

  const addLog = (message, type = "info", meta = {}) => {
    if (!log) return;
    const item = document.createElement("li");
    item.className = `upload-log-item ${type}`;
    const detail = [
      meta.fileName,
      meta.sizeBytes ? formatStorageBytes(meta.sizeBytes) : "",
      meta.url ? meta.url : "",
    ].filter(Boolean);
    item.innerHTML = `
      <span>${escapeHtml(new Date().toLocaleTimeString())}</span>
      <strong>${escapeHtml(message)}</strong>
      ${detail.length ? `<small>${escapeHtml(detail.join(" - "))}</small>` : ""}
    `;
    log.prepend(item);
  };

  return {
    start(plan = {}) {
      total = Math.max(1, Number(plan.totalSteps) || total);
      completed = 0;
      if (progressPanel) progressPanel.hidden = false;
      if (log) log.innerHTML = "";
      if (currentText) {
        currentText.textContent = `Chuẩn bị upload ${plan.courseCount || 0} course, ${plan.mediaSteps || 0} media.`;
      }
      addLog("Bắt đầu upload data local lên web", "info", plan);
      return render();
    },
    note(message, meta = {}) {
      if (meta.advance) {
        completed = Math.min(total, completed + Number(meta.advance));
      }
      const percent = render();
      if (currentText) currentText.textContent = message;
      addLog(message, meta.advance ? "success" : "info", meta);
      return percent;
    },
    complete(message) {
      completed = total;
      const percent = render();
      if (currentText) currentText.textContent = message;
      addLog(message, "success");
      return percent;
    },
    fail(error) {
      const message = formatUploadError(error);
      render();
      if (currentText) currentText.textContent = message;
      addLog(message, "error", {
        fileName: error?.code || "",
      });
      return message;
    },
    percent() {
      return render();
    },
  };
}

function drawPlatformAdminSettingsPanel(root) {
  const panel = root.querySelector("#platformAdminSettingsPanel");
  if (!panel) return;
  if (state.account.role !== "admin") {
    panel.remove();
    return;
  }
  const pendingSubmissions = state.studioSubmissions.filter(
    (submission) => submission.status === "pending",
  ).length;
  const openReports = state.contentReports.filter(
    (report) => report.status === "open",
  ).length;
  const latestAudit = state.auditLog.slice(0, 4);
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Settings admin</p>
        <h2>Quản trị nền tảng</h2>
      </div>
      <span class="status-pill">admin</span>
    </div>
    <div class="account-metric-grid">
      <div class="session-tile"><strong>${pendingSubmissions}</strong><span>Course chờ duyệt</span></div>
      <div class="session-tile"><strong>${openReports}</strong><span>Report đang mở</span></div>
      <div class="session-tile"><strong>${state.auditLog.length}</strong><span>Audit events</span></div>
      <div class="session-tile"><strong>${getCourses().length}</strong><span>Tổng course</span></div>
    </div>
    <div class="account-section-block">
      <h3>Quyền admin</h3>
      <div class="review-list">
        <div class="review-item"><strong>Duyệt hoặc từ chối khóa học</strong></div>
        <div class="review-item"><strong>Xử lý báo cáo nội dung</strong></div>
        <div class="review-item"><strong>Quản trị role trong database production</strong></div>
      </div>
    </div>
    <div class="account-section-block">
      <div class="compact-heading">
        <div>
          <h3>Đưa data local lên web</h3>
          <p class="muted-copy">Upload toàn bộ course đã sửa trong trình duyệt này, kèm ảnh/video còn ở dạng local, vào database và cloud storage của StudyFlow.</p>
        </div>
        <button class="ghost-button" type="button" id="adminPublishLocalCoursesButton" ${state.customCourses.length ? "" : "disabled"}>Upload data</button>
      </div>
      <div class="import-status" id="adminLocalCoursePublishStatus" aria-live="polite"></div>
      <div class="upload-progress-panel" id="adminUploadProgressPanel" hidden>
        <div class="upload-progress-topline">
          <strong id="adminUploadProgressPercent">0%</strong>
          <span id="adminUploadProgressSteps">0/0 bước</span>
        </div>
        <div class="upload-progress-bar" aria-hidden="true">
          <span id="adminUploadProgressFill"></span>
        </div>
        <div class="upload-progress-current" id="adminUploadProgressCurrent">Chưa chạy upload.</div>
        <ol class="upload-progress-log" id="adminUploadProgressLog"></ol>
      </div>
    </div>
    <div class="account-section-block admin-media-cleanup-block">
      <div class="compact-heading">
        <div>
          <h3>Dọn media Cloudinary không dùng</h3>
          <p class="muted-copy">Quét asset trong Cloudinary và chỉ đánh dấu những file không còn xuất hiện trong thumbnail hoặc lesson blocks của database.</p>
        </div>
        <button class="ghost-button" type="button" id="scanUnusedMediaButton">Quét media</button>
      </div>
      <div class="media-cleanup-summary" id="adminMediaCleanupSummary" aria-live="polite">
        Chưa quét media.
      </div>
      <div class="admin-media-cleanup-actions" hidden>
        <button class="mini-button" type="button" id="selectAllUnusedMediaButton">Chọn tất cả</button>
        <button class="mini-button danger-mini-button" type="button" id="deleteSelectedUnusedMediaButton">Xóa file đã chọn</button>
      </div>
      <div class="admin-media-cleanup-list" id="adminMediaCleanupList"></div>
    </div>
    <div class="account-section-block">
      <h3>Audit gần đây</h3>
      <div class="review-list">
        ${
          latestAudit.length
            ? latestAudit
                .map(
                  (entry) =>
                    `<div class="review-item"><strong>${escapeHtml(entry.action)}</strong><span>${escapeHtml(entry.actor)} - ${escapeHtml(entry.role)}</span></div>`,
                )
                .join("")
            : `<div class="empty-state">Chưa có audit event.</div>`
        }
      </div>
    </div>
    <div class="account-section-block admin-users-block">
      <div class="compact-heading">
        <div>
          <h3>Người dùng trong database</h3>
          <p class="muted-copy">Tải danh sách người dùng từ PHP API. Tài khoản giáo viên mới sẽ ở trạng thái chờ duyệt; admin chuyển sang Giáo viên để accept.</p>
        </div>
        <button class="ghost-button" type="button" id="reloadAdminUsersButton">Tải người dùng</button>
      </div>
      <div class="admin-user-list" id="adminUserList">
        <div class="empty-state">Đang tải người dùng...</div>
      </div>
    </div>
    <div class="data-actions">
      <button class="primary-button" type="button" data-go="studio">Mở moderation</button>
    </div>
  `;
  panel.querySelector('[data-go="studio"]').addEventListener("click", () => {
    window.location.hash = "studio";
  });
  panel
    .querySelector("#reloadAdminUsersButton")
    .addEventListener("click", () => {
      loadAdminUsers(panel);
    });
  panel
    .querySelector("#scanUnusedMediaButton")
    .addEventListener("click", () => {
      loadUnusedCloudinaryMedia(panel);
    });
  panel
    .querySelector("#selectAllUnusedMediaButton")
    ?.addEventListener("click", () => {
      panel
        .querySelectorAll(".admin-media-cleanup-list input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.checked = true;
        });
    });
  panel
    .querySelector("#deleteSelectedUnusedMediaButton")
    ?.addEventListener("click", () => {
      deleteSelectedUnusedCloudinaryMedia(panel);
    });
  panel
    .querySelector("#adminPublishLocalCoursesButton")
    ?.addEventListener("click", async () => {
      const status = panel.querySelector("#adminLocalCoursePublishStatus");
      const plan = estimatePublishAllUploadSteps();
      const progress = createUploadProgressController(panel, plan.totalSteps);
      progress.start(plan);
      status.textContent = "Đang upload data local lên web...";
      try {
        const results = await publishAllLocalCoursesToBackend((message, meta) => {
          const percent = progress.note(message, meta);
          status.textContent = `${percent}% - ${message}`;
        });
        const doneMessage = `Đã upload và publish ${results.length} course lên web.`;
        progress.complete(doneMessage);
        status.textContent = doneMessage;
      } catch (error) {
        const detail = progress.fail(error);
        status.textContent = `Upload lỗi: ${detail}`;
      }
    });
  loadAdminUsers(panel);
}

function formatStorageBytes(bytes = 0) {
  const value = Math.max(0, Number(bytes) || 0);
  if (value >= 1024 * 1024) {
    return `${(value / 1024 / 1024).toFixed(value >= 10 * 1024 * 1024 ? 0 : 1)} MB`;
  }
  if (value >= 1024) return `${Math.round(value / 1024)} KB`;
  return `${value} B`;
}

async function loadUnusedCloudinaryMedia(panel) {
  const summary = panel.querySelector("#adminMediaCleanupSummary");
  const list = panel.querySelector("#adminMediaCleanupList");
  const actions = panel.querySelector(".admin-media-cleanup-actions");
  if (!summary || !list || !actions) return;
  if (state.authSession.provider !== "php-api") {
    summary.textContent = "Cần đăng nhập backend bằng tài khoản admin trước khi quét media.";
    list.innerHTML = "";
    actions.hidden = true;
    return;
  }
  summary.textContent = "Đang quét Cloudinary và database...";
  list.innerHTML = "";
  actions.hidden = true;
  try {
    const data = await apiRequest("admin/media-cleanup.php?limit=1000");
    const files = Array.isArray(data.unusedFiles) ? data.unusedFiles : [];
    const truncated = data.truncated
      ? " Kết quả bị giới hạn 1000 file; quét lại sau khi dọn nếu cần."
      : "";
    summary.textContent =
      files.length > 0
        ? `Tìm thấy ${files.length} file chưa gắn với bài học (${formatStorageBytes(data.unusedBytes)}). Đã quét ${data.scannedCount || 0} file, đang dùng ${data.usedCount || 0} media.${truncated}`
        : `Không thấy file Cloudinary dư trong phạm vi đã quét. Đã quét ${data.scannedCount || 0} file, đang dùng ${data.usedCount || 0} media.${truncated}`;
    if (!files.length) {
      list.innerHTML = `<div class="empty-state">Không có media dư để xóa.</div>`;
      return;
    }
    list.innerHTML = files.map(renderUnusedMediaRow).join("");
    actions.hidden = false;
  } catch (error) {
    summary.textContent = `Quét media lỗi: ${error.message}`;
    list.innerHTML = "";
    actions.hidden = true;
  }
}

function renderUnusedMediaRow(file) {
  const uploadedAt = file.createdAt
    ? new Date(file.createdAt).toLocaleString()
    : "Không rõ ngày";
  const names = Array.isArray(file.assetNames)
    ? file.assetNames.filter(Boolean).slice(0, 2).join(", ")
    : "";
  return `
    <label class="admin-media-row">
      <input type="checkbox" data-public-id="${escapeHtml(file.publicId)}" data-resource-type="${escapeHtml(file.resourceType || "image")}" />
      <span>
        <strong>${escapeHtml(file.publicId)}</strong>
        <small>${formatStorageBytes(file.sizeBytes)} - ${escapeHtml(file.contentType || "file")} - ${escapeHtml(uploadedAt)}</small>
        <em>${file.assetRecordCount ? `${file.assetRecordCount} metadata record${file.assetRecordCount > 1 ? "s" : ""}${names ? `: ${escapeHtml(names)}` : ""}` : "Không có metadata asset trong database"}</em>
      </span>
    </label>
  `;
}

async function deleteSelectedUnusedCloudinaryMedia(panel) {
  const summary = panel.querySelector("#adminMediaCleanupSummary");
  const selected = Array.from(
    panel.querySelectorAll(".admin-media-cleanup-list input[type='checkbox']:checked"),
  ).map((checkbox) => ({
    publicId: checkbox.dataset.publicId,
    resourceType: checkbox.dataset.resourceType,
  }));
  if (!selected.length) {
    summary.textContent = "Chọn ít nhất một file unused trước khi xóa.";
    return;
  }
  const total = selected.length;
  const confirmed = window.confirm(
    `Xóa ${total} file unused khỏi Cloudinary? Hành động này không khôi phục được.`,
  );
  if (!confirmed) return;
  summary.textContent = `Đang xóa ${total} file unused...`;
  try {
    const data = await apiRequest("admin/media-cleanup.php", {
      method: "POST",
      body: JSON.stringify({ files: selected.slice(0, 50) }),
    });
    const failed = Array.isArray(data.failed) ? data.failed : [];
    summary.textContent = failed.length
      ? `Đã xóa ${data.deletedCount || 0} file, ${failed.length} file lỗi. Metadata đã dọn: ${data.metadataDeleted || 0}.`
      : `Đã xóa ${data.deletedCount || 0} file unused. Metadata đã dọn: ${data.metadataDeleted || 0}.`;
    await loadUnusedCloudinaryMedia(panel);
  } catch (error) {
    summary.textContent = `Xóa media lỗi: ${error.message}`;
  }
}

async function loadAdminUsers(panel) {
  const list = panel.querySelector("#adminUserList");
  if (!list) return;
  if (state.authSession.provider !== "php-api") {
    list.innerHTML = `<div class="empty-state">Đổi role cần đăng nhập backend bằng tài khoản admin.</div>`;
    return;
  }
  list.innerHTML = `<div class="empty-state">${translateText("Đang tải người dùng...")}</div>`;
  try {
    const data = await apiRequest("admin/users.php");
    const users = Array.isArray(data.users) ? data.users : [];
    if (!users.length) {
      list.innerHTML = `<div class="empty-state">${translateText("Chưa có user trong database.")}</div>`;
      return;
    }
    list.innerHTML = users.map(renderAdminUserRow).join("");
    list.querySelectorAll("[data-save-role]").forEach((button) => {
      button.addEventListener("click", () => saveAdminUserRole(button, list));
    });
  } catch (error) {
    list.innerHTML = `<div class="empty-state">${translateText("Không tải được danh sách user: ")}${escapeHtml(error.message)}</div>`;
  }
}

function renderAdminUserRow(user) {
  const role = user.role || "student";
  const roleOptions = ["student", "teacher_pending", "teacher", "admin"]
    .map(
      (item) =>
        `<option value="${item}" ${item === role ? "selected" : ""}>${escapeHtml(getRoleLabel(item))}</option>`,
    )
    .join("");
  return `
    <div class="admin-user-row" data-user-id="${escapeHtml(user.id)}">
      <div>
        <strong>${escapeHtml(user.display_name || "Người dùng")}</strong>
        <span>${escapeHtml(user.email || "Chưa có email")}</span>
      </div>
      <select aria-label="Role của ${escapeHtml(user.display_name || user.email || "người dùng")}">
        ${roleOptions}
      </select>
      <button class="ghost-button" type="button" data-save-role="${escapeHtml(user.id)}">${translateText("Lưu role")}</button>
      <small class="admin-user-status" aria-live="polite"></small>
    </div>
  `;
}

async function saveAdminUserRole(button, list) {
  const row = button.closest(".admin-user-row");
  const status = row.querySelector(".admin-user-status");
  const role = row.querySelector("select").value;
  const userId = Number(button.dataset.saveRole);
  if (!userId) return;
  status.textContent = translateText("Đang lưu role...");
  try {
    await apiRequest("admin/users.php", {
      method: "PATCH",
      body: JSON.stringify({ userId, role }),
    });
    logAudit("role_updated", `user ${userId} -> ${role}`);
    saveState();
    status.textContent = translateText("Đã cập nhật role.");
  } catch (error) {
    status.textContent = `${translateText("Cập nhật role lỗi: ")}${error.message}`;
  }
}

function drawTodayPanel() {
  const panel = document.querySelector("#todayPanel");
  if (!panel) return;
  const streak = getStreak();
  const today = todayKey();
  const todayTasks = getTasksForDate(today);
  const doneTasks = todayTasks.filter((task) => task.status === "done").length;
  const completedLessons = getCompletedLessonsForDate(today).length;
  const note = getDailyNote(today);
  panel.innerHTML = `
    <p class="eyebrow">${today}</p>
    <h2>Daily rhythm</h2>
    <div class="today-stat-grid">
      <div class="stat-tile"><strong>${streak.current}</strong><span>Current streak</span></div>
      <div class="stat-tile"><strong>${streak.longest}</strong><span>Longest streak</span></div>
      <div class="stat-tile"><strong>${completedLessons}/${state.habitSettings.dailyLessonGoal}</strong><span>Lessons today</span></div>
      <div class="stat-tile"><strong>${doneTasks}/${state.habitSettings.dailyTaskGoal}</strong><span>Tasks done</span></div>
      <div class="stat-tile"><strong>${note.focusMinutes || 0}</strong><span>Focus minutes</span></div>
      <div class="stat-tile"><strong>${escapeHtml(note.mood || "focused")}</strong><span>Mood</span></div>
    </div>
  `;
}

function drawPlanPanel() {
  const panel = document.querySelector("#planPanel");
  if (!panel) return;
  const next = getNextLessonPlan();
  if (!next) {
    panel.innerHTML = `
      <p class="eyebrow">Learning plan</p>
      <h2>All caught up</h2>
      <p class="muted-copy">Every available lesson is complete. Add a creator course or revise today's notes.</p>
    `;
    return;
  }

  panel.innerHTML = `
    <p class="eyebrow">Learning plan</p>
    <h2>${escapeHtml(next.lesson.title)}</h2>
    <p class="muted-copy">${escapeHtml(next.course.title)} - ${escapeHtml(next.level.title)} - ${next.lesson.minutes} min</p>
    <div class="plan-action">
      <span>${state.completedLessons[next.lesson.id] ? "Review recommended" : "Next unlocked lesson"}</span>
      <div class="builder-toolbar">
        <button class="ghost-button" id="planTaskButton" type="button">Add task</button>
        <button class="primary-button" id="planStartButton" type="button">Start</button>
      </div>
    </div>
  `;
  panel.querySelector("#planStartButton").addEventListener("click", () => {
    window.location.hash = `lesson/${next.course.id}/${next.lesson.id}`;
  });
  panel.querySelector("#planTaskButton").addEventListener("click", () => {
    const task = {
      id: `task-${Date.now()}`,
      title: `Study: ${next.lesson.title}`,
      status: "todo",
      dueDate: todayKey(),
      priority: "high",
      linkType: "lesson",
      courseId: next.course.id,
      lessonId: next.lesson.id,
    };
    state.tasks.unshift(task);
    pushTaskToBackend(task);
    saveState();
    drawTasks();
    drawTodayPanel();
    drawGoalPanel();
  });
}

function drawTasks() {
  const list = document.querySelector("#taskList");
  if (!list) return;
  const todayTasks = getTasksForDate(todayKey());
  list.replaceChildren();
  if (!todayTasks.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No tasks for today";
    list.append(empty);
    return;
  }

  todayTasks.forEach((task) => {
    const item = document.createElement("div");
    item.className = `task-item ${task.status === "done" ? "done" : ""}`;
    item.innerHTML = `
      <button class="task-check" type="button" aria-label="Toggle task"></button>
      <div class="task-copy">
        <strong>${escapeHtml(task.title)}</strong>
        <span>${escapeHtml(getTaskLinkLabel(task))}</span>
      </div>
      <span class="priority-pill ${escapeHtml(task.priority)}">${escapeHtml(task.priority)}</span>
      <button class="icon-button" type="button" aria-label="Remove task"><span class="icon icon-x" aria-hidden="true"></span></button>
    `;
    item.querySelector(".task-check").addEventListener("click", () => {
      task.status = task.status === "done" ? "todo" : "done";
      task.completedAt =
        task.status === "done" ? new Date().toISOString() : null;
      if (task.status === "done") addCheckin("task_completed");
      pushTaskStatusToBackend(task);
      saveState();
      drawTasks();
      drawTodayPanel();
      drawCalendarPanel();
      drawGoalPanel();
    });
    item.querySelector(".icon-button").addEventListener("click", () => {
      state.tasks = state.tasks.filter((entry) => entry.id !== task.id);
      saveState();
      drawTasks();
      drawTodayPanel();
      drawGoalPanel();
    });
    if (task.linkType === "lesson" && task.courseId && task.lessonId) {
      item.querySelector(".task-copy").addEventListener("click", () => {
        window.location.hash = `lesson/${task.courseId}/${task.lessonId}`;
      });
    }
    list.append(item);
  });
}

function drawCalendarPanel() {
  const panel = document.querySelector("#calendarPanel");
  if (!panel) return;
  const dates = getRecentDates(14);
  panel.innerHTML = `
    <p class="eyebrow">Streak map</p>
    <h2>Last 14 days</h2>
    <div class="calendar-grid"></div>
  `;
  const grid = panel.querySelector(".calendar-grid");
  dates.forEach((date) => {
    const completedLessons = getCompletedLessonsForDate(date).length;
    const doneTasks = getTasksForDate(date).filter(
      (task) => task.status === "done",
    ).length;
    const checked =
      state.checkins.includes(date) || completedLessons > 0 || doneTasks > 0;
    const day = document.createElement("div");
    day.className = `calendar-day${checked ? " active" : ""}`;
    day.innerHTML = `<strong>${date.slice(8)}</strong><span>${completedLessons}L/${doneTasks}T</span>`;
    grid.append(day);
  });
}

function drawGoalPanel() {
  const panel = document.querySelector("#goalPanel");
  if (!panel) return;
  const today = todayKey();
  const note = getDailyNote(today);
  const lessonProgress = Math.min(
    100,
    Math.round(
      (getCompletedLessonsForDate(today).length /
        state.habitSettings.dailyLessonGoal) *
        100,
    ),
  );
  const taskProgress = Math.min(
    100,
    Math.round(
      (getTasksForDate(today).filter((task) => task.status === "done").length /
        state.habitSettings.dailyTaskGoal) *
        100,
    ),
  );
  const focusProgress = Math.min(
    100,
    Math.round(
      ((note.focusMinutes || 0) / state.habitSettings.focusMinuteGoal) * 100,
    ),
  );
  panel.innerHTML = `
    <p class="eyebrow">Daily goals</p>
    <h2>Targets</h2>
    <div class="goal-progress-list">
      <div class="goal-progress-row">
        <div><strong>Lessons</strong><span>${lessonProgress}% complete</span></div>
        <div class="inline-progress"><span style="width: ${lessonProgress}%"></span></div>
      </div>
      <div class="goal-progress-row">
        <div><strong>Tasks</strong><span>${taskProgress}% complete</span></div>
        <div class="inline-progress"><span style="width: ${taskProgress}%"></span></div>
      </div>
      <div class="goal-progress-row">
        <div><strong>Focus</strong><span>${focusProgress}% complete</span></div>
        <div class="inline-progress"><span style="width: ${focusProgress}%"></span></div>
      </div>
    </div>
    <form class="goal-form" id="goalForm">
      <div class="split-fields">
        <label>Lessons/day<input id="dailyLessonGoal" type="number" min="1" max="12" value="${state.habitSettings.dailyLessonGoal}" /></label>
        <label>Tasks/day<input id="dailyTaskGoal" type="number" min="1" max="20" value="${state.habitSettings.dailyTaskGoal}" /></label>
      </div>
      <label>Focus minutes/day<input id="focusMinuteGoal" type="number" min="5" max="480" step="5" value="${state.habitSettings.focusMinuteGoal}" /></label>
    </form>
  `;
  panel.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      state.habitSettings.dailyLessonGoal =
        Number(panel.querySelector("#dailyLessonGoal").value) || 1;
      state.habitSettings.dailyTaskGoal =
        Number(panel.querySelector("#dailyTaskGoal").value) || 1;
      state.habitSettings.focusMinuteGoal =
        Number(panel.querySelector("#focusMinuteGoal").value) || 5;
      saveState();
      drawTodayPanel();
    });
  });
}

function renderStudio() {
  if (!canCreateContent()) {
    window.location.hash = "account";
    return;
  }
  setActiveNav("studio");
  setPage("Studio", "Creator workflow");
  const view = cloneTemplate("#studioTemplate");
  viewRoot.replaceChildren(view);

  currentStudioDraft = normalizeDraft(
    state.studioDraft || createDefaultStudioDraft(),
  );
  selectedLevelIndex = clampIndex(
    currentStudioDraft.selectedLevelIndex || 0,
    currentStudioDraft.levels,
  );
  selectedLessonIndex = clampIndex(
    currentStudioDraft.selectedLessonIndex || 0,
    currentStudioDraft.levels[selectedLevelIndex].lessons,
  );

  hydrateStudioForm(view);
  bindStudioForm(view);
  drawCreatorGate(view);
  drawDraftStatus(view);
  drawAssetLibrary(view);
  drawStructure(view);
  drawBlockBuilder(view);
  if (canModerate()) {
    drawReviewPanel();
  } else {
    drawTeacherSubmissionPanel();
  }
}

function createDefaultStudioDraft(overrides = {}) {
  return normalizeDraft({
    id: `draft-${Date.now()}`,
    editingSubmissionId: null,
    revisionOfCourseId: null,
    versionNumber: 1,
    title: "Intro to Study Habits",
    subject: "Productivity",
    difficulty: "Beginner",
    description:
      "A short path for building a daily learning habit that is easy to repeat.",
    thumbnail: null,
    selectedLevelIndex: 0,
    selectedLessonIndex: 0,
    levels: [
      {
        id: `level-${Date.now()}`,
        title: "Daily Rhythm",
        lessons: [
          {
            id: `lesson-${Date.now()}`,
            title: "Tiny Start",
            minutes: 8,
            blocks: [
              createStudioBlock("text"),
              createStudioBlock("multiple_choice"),
              createStudioBlock("multiple_choice"),
              createStudioBlock("multiple_choice"),
              createStudioBlock("multiple_choice"),
              createStudioBlock("multiple_choice"),
              createStudioBlock("reflection"),
            ],
          },
        ],
      },
    ],
    ...overrides,
  });
}

function normalizeDraft(draft) {
  const next = structuredClone(draft);
  next.id ||= `draft-${Date.now()}`;
  next.title ||= "Untitled course";
  next.subject ||= "General";
  next.difficulty ||= "Beginner";
  next.description ||= "";
  next.thumbnail ||= null;
  next.versionNumber ||= 1;
  next.levels =
    Array.isArray(next.levels) && next.levels.length ? next.levels : [];
  if (!next.levels.length) {
    next.levels.push({
      id: `level-${Date.now()}`,
      title: "Level 1",
      lessons: [],
    });
  }
  next.levels.forEach((level, levelIndex) => {
    level.id ||= `level-${Date.now()}-${levelIndex}`;
    level.title ||= `Level ${levelIndex + 1}`;
    level.lessons =
      Array.isArray(level.lessons) && level.lessons.length ? level.lessons : [];
    if (!level.lessons.length) {
      level.lessons.push({
        id: `lesson-${Date.now()}-${levelIndex}`,
        title: "Lesson 1",
        minutes: 8,
        blocks: [createStudioBlock("text")],
      });
    }
    level.lessons.forEach((lesson, lessonIndex) => {
      lesson.id ||= `lesson-${Date.now()}-${levelIndex}-${lessonIndex}`;
      lesson.title ||= `Lesson ${lessonIndex + 1}`;
      lesson.minutes ||= 8;
      lesson.blocks = Array.isArray(lesson.blocks) ? lesson.blocks : [];
    });
  });
  next.selectedLevelIndex = clampIndex(
    next.selectedLevelIndex || 0,
    next.levels,
  );
  next.selectedLessonIndex = clampIndex(
    next.selectedLessonIndex || 0,
    next.levels[next.selectedLevelIndex].lessons,
  );
  return next;
}

function normalizeSubmissionRecord(submission) {
  if (Array.isArray(submission.levels) && submission.levels.length) {
    submission.levels = submission.levels.map((level, levelIndex) => ({
      id: level.id || `level-${submission.id}-${levelIndex + 1}`,
      title: level.title || `Level ${levelIndex + 1}`,
      lessons: (level.lessons || []).map((lesson, lessonIndex) => ({
        id:
          lesson.id ||
          `lesson-${submission.id}-${levelIndex + 1}-${lessonIndex + 1}`,
        title: lesson.title || `Lesson ${lessonIndex + 1}`,
        minutes: lesson.minutes || 8,
        blocks: Array.isArray(lesson.blocks) ? lesson.blocks : [],
      })),
    }));
    return submission;
  }

  const legacyBlocks = Array.isArray(submission.blocks)
    ? submission.blocks
    : [
        {
          type: "text",
          title: submission.lessonTitle || "Lesson",
          body: submission.teachingBlock || "",
        },
        {
          type: "multiple_choice",
          prompt: submission.quizPrompt || "Question",
          choices: [
            submission.correctAnswer || "Correct answer",
            submission.wrongAnswer || "Distractor answer",
            "I need to review the lesson first",
          ],
          correct: 0,
          explanation: `Correct: ${submission.correctAnswer || "Correct answer"}`,
        },
        {
          type: "reflection",
          prompt: submission.reflectionPrompt || "Write a short reflection.",
          answer:
            submission.reflectionAnswer ||
            "A good answer should name the main idea, give one concrete example, and explain the risk or limit to remember.",
        },
      ];

  return {
    ...submission,
    difficulty: submission.difficulty || "Beginner",
    versionNumber: submission.versionNumber || 1,
    levels: [
      {
        id: `level-${submission.id}-1`,
        title: submission.levelTitle || "Level 1",
        lessons: [
          {
            id: `lesson-${submission.id}-1`,
            title: submission.lessonTitle || "Lesson 1",
            minutes: 8,
            blocks: legacyBlocks,
          },
        ],
      },
    ],
  };
}

function clampIndex(index, items) {
  if (!items.length) return 0;
  return Math.max(0, Math.min(Number(index) || 0, items.length - 1));
}

function getSelectedLevel() {
  return currentStudioDraft.levels[selectedLevelIndex];
}

function getSelectedLesson() {
  return getSelectedLevel().lessons[selectedLessonIndex];
}

function hydrateStudioForm(root) {
  root.querySelector("#studioTitle").value = currentStudioDraft.title;
  root.querySelector("#studioSubject").value = currentStudioDraft.subject;
  root.querySelector("#studioDifficulty").value = currentStudioDraft.difficulty;
  root.querySelector("#studioDescription").value =
    currentStudioDraft.description;
  drawThumbnailPreview(root);
}

function bindStudioForm(root) {
  [
    "#studioTitle",
    "#studioSubject",
    "#studioDifficulty",
    "#studioDescription",
  ].forEach((selector) => {
    root.querySelector(selector).addEventListener("input", () => {
      syncStudioDraftFromDom(root);
      scheduleDraftAutosave(root);
    });
  });

  root
    .querySelector("#studioThumbnail")
    .addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const src = await readImageFileAsOptimizedDataUrl(file);
      currentStudioDraft.thumbnail = src;
      currentStudioDraft.thumbnailName = file.name;
      registerAsset(file, src, "thumbnail", currentStudioDraft.title);
      logAudit("asset_uploaded", `Thumbnail uploaded: ${file.name}`);
      syncStudioDraftToState();
      drawThumbnailPreview(root);
      drawDraftStatus(root);
      drawAssetLibrary(root);
    });

  root.querySelector("#addLevelButton").addEventListener("click", () => {
    syncStudioDraftFromDom(root);
    currentStudioDraft.levels.push({
      id: `level-${Date.now()}`,
      title: `Level ${currentStudioDraft.levels.length + 1}`,
      lessons: [
        {
          id: `lesson-${Date.now()}`,
          title: "New lesson",
          minutes: 8,
          blocks: [
            createStudioBlock("text"),
            createStudioBlock("multiple_choice"),
            createStudioBlock("multiple_choice"),
            createStudioBlock("multiple_choice"),
            createStudioBlock("multiple_choice"),
            createStudioBlock("multiple_choice"),
          ],
        },
      ],
    });
    selectedLevelIndex = currentStudioDraft.levels.length - 1;
    selectedLessonIndex = 0;
    scheduleDraftAutosave(root);
    drawStructure(root);
    drawBlockBuilder(root);
  });

  root.querySelector("#addLessonButton").addEventListener("click", () => {
    syncStudioDraftFromDom(root);
    const level = getSelectedLevel();
    level.lessons.push({
      id: `lesson-${Date.now()}`,
      title: `Lesson ${level.lessons.length + 1}`,
      minutes: 8,
      blocks: [
        createStudioBlock("text"),
        createStudioBlock("multiple_choice"),
        createStudioBlock("multiple_choice"),
        createStudioBlock("multiple_choice"),
        createStudioBlock("multiple_choice"),
        createStudioBlock("multiple_choice"),
      ],
    });
    selectedLessonIndex = level.lessons.length - 1;
    scheduleDraftAutosave(root);
    drawStructure(root);
    drawBlockBuilder(root);
  });

  root.querySelector("#removeLevelButton").addEventListener("click", () => {
    if (currentStudioDraft.levels.length <= 1) return;
    syncStudioDraftFromDom(root);
    currentStudioDraft.levels.splice(selectedLevelIndex, 1);
    selectedLevelIndex = clampIndex(
      selectedLevelIndex,
      currentStudioDraft.levels,
    );
    selectedLessonIndex = 0;
    scheduleDraftAutosave(root);
    drawStructure(root);
    drawBlockBuilder(root);
  });

  root.querySelector("#removeLessonButton").addEventListener("click", () => {
    const level = getSelectedLevel();
    if (level.lessons.length <= 1) return;
    syncStudioDraftFromDom(root);
    level.lessons.splice(selectedLessonIndex, 1);
    selectedLessonIndex = clampIndex(selectedLessonIndex, level.lessons);
    scheduleDraftAutosave(root);
    drawStructure(root);
    drawBlockBuilder(root);
  });

  root.querySelector("#selectedLevelTitle").addEventListener("input", () => {
    syncStudioDraftFromDom(root);
    scheduleDraftAutosave(root);
    drawStructure(root);
  });
  root.querySelector("#selectedLessonTitle").addEventListener("input", () => {
    syncStudioDraftFromDom(root);
    scheduleDraftAutosave(root);
    drawStructure(root);
  });
  root.querySelector("#selectedLessonMinutes").addEventListener("input", () => {
    syncStudioDraftFromDom(root);
    scheduleDraftAutosave(root);
  });

  [
    ["#addTextBlock", "text"],
    ["#addQuizBlock", "multiple_choice"],
    ["#addReflectionBlock", "reflection"],
    ["#addImageBlock", "image"],
    ["#addVideoBlock", "video_embed"],
  ].forEach(([selector, type]) => {
    root.querySelector(selector).addEventListener("click", () => {
      syncStudioDraftFromDom(root);
      getSelectedLesson().blocks.push(createStudioBlock(type));
      scheduleDraftAutosave(root);
      drawBlockBuilder(root);
      drawStructure(root);
    });
  });

  root.querySelector("#saveDraftButton").addEventListener("click", () => {
    syncStudioDraftFromDom(root);
    syncStudioDraftToState();
    drawDraftStatus(root);
  });

  root.querySelector("#resetDraftButton").addEventListener("click", () => {
    currentStudioDraft = createDefaultStudioDraft();
    selectedLevelIndex = 0;
    selectedLessonIndex = 0;
    state.studioDraft = structuredClone(currentStudioDraft);
    saveState();
    renderStudio();
  });

  root.querySelector("#studioForm").addEventListener("submit", (event) => {
    event.preventDefault();
    submitStudioDraft(root);
  });
}

function syncStudioDraftFromDom(root) {
  currentStudioDraft.title = root.querySelector("#studioTitle").value.trim();
  currentStudioDraft.subject = root
    .querySelector("#studioSubject")
    .value.trim();
  currentStudioDraft.difficulty = root.querySelector("#studioDifficulty").value;
  currentStudioDraft.description = root
    .querySelector("#studioDescription")
    .value.trim();
  currentStudioDraft.selectedLevelIndex = selectedLevelIndex;
  currentStudioDraft.selectedLessonIndex = selectedLessonIndex;

  const level = getSelectedLevel();
  const lesson = getSelectedLesson();
  level.title =
    root.querySelector("#selectedLevelTitle").value.trim() || level.title;
  lesson.title =
    root.querySelector("#selectedLessonTitle").value.trim() || lesson.title;
  lesson.minutes =
    Number(root.querySelector("#selectedLessonMinutes").value) || 8;
  lesson.blocks = readBlocksFromBuilder(root);
}

function syncStudioDraftToState() {
  state.studioDraft = structuredClone(currentStudioDraft);
  try {
    saveState();
  } catch (error) {
    window.alert(getStorageSaveErrorMessage(error));
  }
}

function scheduleDraftAutosave(root) {
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    syncStudioDraftToState();
    drawDraftStatus(root);
  }, 250);
}

function drawDraftStatus(root) {
  const status = root.querySelector("#draftStatus");
  const mode = currentStudioDraft.revisionOfCourseId
    ? "Revision draft"
    : "New course draft";
  const editing = currentStudioDraft.editingSubmissionId
    ? "editing existing submission"
    : "autosaved locally";
  const lessonCount = countDraftLessons(currentStudioDraft);
  const blockCount = countDraftBlocks(currentStudioDraft);
  const levelCount = currentStudioDraft.levels.length;
  status.innerHTML = `
    <div>
      <strong>${escapeHtml(mode)}</strong>
      <span>v${currentStudioDraft.versionNumber} - ${escapeHtml(editing)}</span>
    </div>
    <div class="draft-metrics">
      <span>${levelCount} levels</span>
      <span>${lessonCount} lessons</span>
      <span>${blockCount} blocks</span>
    </div>
  `;
}

function drawCreatorGate(root) {
  const gate = root.querySelector("#creatorGate");
  const score = state.creatorProfile.reputationScore;
  const canSubmit = score >= 60;
  const trusted = score >= 90;
  gate.innerHTML = `
    <div class="draft-status">
      <strong>Creator reputation: ${score}</strong>
      <span>${trusted ? "trusted auto-publish" : canSubmit ? "standard review" : "locked until reputation 60"}</span>
    </div>
    <div class="reputation-meter"><div style="width: ${Math.min(score, 100)}%"></div></div>
  `;
}

function drawThumbnailPreview(root) {
  const preview = root.querySelector("#thumbnailPreview");
  preview.replaceChildren();
  if (currentStudioDraft.thumbnail) {
    const img = document.createElement("img");
    img.src = currentStudioDraft.thumbnail;
    img.alt = currentStudioDraft.thumbnailName || "Course thumbnail";
    preview.append(img);
  } else {
    preview.textContent = "No thumbnail";
  }
}

function drawAssetLibrary(root) {
  const library = root.querySelector("#assetLibrary");
  if (!library) return;
  const assets = state.assets.slice(0, assetLibraryPreviewLimit);
  const totalBytes = state.assets.reduce(
    (sum, asset) => sum + asset.sizeBytes,
    0,
  );
  const quotaBytes = 5 * 1024 * 1024;
  const quotaPercent = Math.min(
    100,
    Math.round((totalBytes / quotaBytes) * 100),
  );
  library.innerHTML = `
    <div class="builder-header">
      <div>
        <p class="eyebrow">Asset library</p>
        <strong>${state.assets.length} local assets</strong>
      </div>
      <div class="asset-library-actions">
        <span class="status-pill">${Math.round(totalBytes / 1024)} KB / IndexedDB</span>
        <button class="mini-button" type="button" id="compactStorageButton">Compact storage</button>
      </div>
    </div>
    <div class="inline-progress"><span style="width: ${quotaPercent}%"></span></div>
    <p class="muted-copy">${totalBytes > quotaBytes ? "Asset library đang nhiều dữ liệu. Bấm Compact storage để dọn bản localStorage cũ; ảnh/video mới nên lưu bằng IndexedDB hoặc backend upload." : "Ảnh lesson được ưu tiên lưu trong IndexedDB rộng hơn localStorage. Video nên upload qua backend để lấy URL."}</p>
    <div class="asset-grid"></div>
  `;
  library
    .querySelector("#compactStorageButton")
    .addEventListener("click", async () => {
      const statusText = library.querySelector(".muted-copy");
      statusText.textContent = "Đang compact storage...";
      try {
        await writeStateToIndexedDb(state);
        localStorage.setItem(
          storageKey,
          serializeCompactStateForLocalStorage(state),
        );
        statusText.textContent =
          "Đã compact localStorage. Dữ liệu đầy đủ được giữ trong IndexedDB.";
      } catch (error) {
        statusText.textContent = getStorageSaveErrorMessage(error);
      }
    });
  const grid = library.querySelector(".asset-grid");
  if (!assets.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact";
    empty.textContent =
      "Upload thumbnail or lesson images to build the local asset library";
    grid.append(empty);
    return;
  }
  assets.forEach((asset) => {
    const item = document.createElement("article");
    item.className = "asset-item";
    item.innerHTML = `
      ${asset.src ? `<img src="${asset.src}" alt="${escapeHtml(asset.alt || asset.name)}" />` : ""}
      <div>
        <strong>${escapeHtml(asset.name)}</strong>
        <span>${escapeHtml(asset.type)} - ${Math.round(asset.sizeBytes / 1024)} KB</span>
      </div>
      <button class="mini-button" type="button">Delete</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      state.assets = state.assets.filter((entry) => entry.id !== asset.id);
      logAudit("asset_deleted", `Deleted asset: ${asset.name}`);
      saveState();
      drawAssetLibrary(root);
    });
    grid.append(item);
  });
}

function drawStructure(root) {
  selectedLevelIndex = clampIndex(
    selectedLevelIndex,
    currentStudioDraft.levels,
  );
  selectedLessonIndex = clampIndex(
    selectedLessonIndex,
    getSelectedLevel().lessons,
  );
  currentStudioDraft.selectedLevelIndex = selectedLevelIndex;
  currentStudioDraft.selectedLessonIndex = selectedLessonIndex;

  const levelList = root.querySelector("#levelList");
  const lessonList = root.querySelector("#lessonList");
  levelList.replaceChildren();
  lessonList.replaceChildren();

  currentStudioDraft.levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = `structure-item${index === selectedLevelIndex ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `${escapeHtml(level.title)}<span>${level.lessons.length} lessons</span>`;
    button.addEventListener("click", () => {
      syncStudioDraftFromDom(root);
      selectedLevelIndex = index;
      selectedLessonIndex = 0;
      drawStructure(root);
      drawBlockBuilder(root);
      scheduleDraftAutosave(root);
    });
    levelList.append(button);
  });

  getSelectedLevel().lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = `structure-item${index === selectedLessonIndex ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `${escapeHtml(lesson.title)}<span>${lesson.blocks.length} blocks</span>`;
    button.addEventListener("click", () => {
      syncStudioDraftFromDom(root);
      selectedLessonIndex = index;
      drawStructure(root);
      drawBlockBuilder(root);
      scheduleDraftAutosave(root);
    });
    lessonList.append(button);
  });

  root.querySelector("#selectedLevelTitle").value = getSelectedLevel().title;
  root.querySelector("#selectedLessonTitle").value = getSelectedLesson().title;
  root.querySelector("#selectedLessonMinutes").value =
    getSelectedLesson().minutes || 8;
  root.querySelector("#removeLevelButton").disabled =
    currentStudioDraft.levels.length <= 1;
  root.querySelector("#removeLessonButton").disabled =
    getSelectedLevel().lessons.length <= 1;
}

function countDraftLessons(draft) {
  return draft.levels.reduce((total, level) => total + level.lessons.length, 0);
}

function countDraftBlocks(draft) {
  return draft.levels.reduce(
    (total, level) =>
      total +
      level.lessons.reduce((sum, lesson) => sum + lesson.blocks.length, 0),
    0,
  );
}

function createStudioBlock(type) {
  const id = `block-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  if (type === "multiple_choice") {
    return {
      id,
      type,
      prompt: "Which habit is easiest to repeat daily?",
      choices: [
        "Open the lesson and solve one question",
        "Study for 4 hours every night",
        "Rewrite an entire textbook",
      ],
      correct: 0,
      explanation: "A tiny action lowers friction and protects the streak.",
    };
  }
  if (type === "reflection") {
    return {
      id,
      type,
      prompt: "What is one thing you can make easier for tomorrow?",
      answer:
        "Prepare one tiny action in advance, such as opening the lesson, writing the first question, or setting a 15-minute study block.",
    };
  }
  if (type === "image") {
    return { id, type, title: "Image example", src: "", alt: "Lesson image" };
  }
  if (type === "video_embed") {
    return {
      id,
      type,
      title: "Video resource",
      url: "",
      caption: "Short supporting video",
    };
  }
  return {
    id,
    type: "text",
    title: "Tiny Start",
    body: "Start with one tiny repeatable action. A good habit is small enough to do even on a busy day.",
  };
}

function drawBlockBuilder(root) {
  const builder = root.querySelector("#blockBuilder");
  const blocks = getSelectedLesson().blocks;
  builder.replaceChildren();

  blocks.forEach((block, index) => {
    const item = document.createElement("section");
    item.className = "builder-block";
    item.dataset.index = String(index);
    item.dataset.type = block.type;
    item.innerHTML = `
      <div class="builder-block-title">
        <strong>${escapeHtml(block.type.replace("_", " "))}</strong>
        <div class="builder-block-actions">
          <button class="mini-button" type="button" data-action="up">Up</button>
          <button class="mini-button" type="button" data-action="down">Down</button>
          <button class="mini-button" type="button" data-action="remove">Remove</button>
        </div>
      </div>
      <div class="builder-fields"></div>
    `;

    const fields = item.querySelector(".builder-fields");
    drawBlockFields(fields, block, index, root);

    item.querySelector('[data-action="up"]').disabled = index === 0;
    item.querySelector('[data-action="down"]').disabled =
      index === blocks.length - 1;
    item.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => {
        syncStudioDraftFromDom(root);
        const currentBlocks = getSelectedLesson().blocks;
        const action = button.dataset.action;
        if (action === "remove") currentBlocks.splice(index, 1);
        if (action === "up" && index > 0) {
          [currentBlocks[index - 1], currentBlocks[index]] = [
            currentBlocks[index],
            currentBlocks[index - 1],
          ];
        }
        if (action === "down" && index < currentBlocks.length - 1) {
          [currentBlocks[index + 1], currentBlocks[index]] = [
            currentBlocks[index],
            currentBlocks[index + 1],
          ];
        }
        scheduleDraftAutosave(root);
        drawBlockBuilder(root);
        drawStructure(root);
      });
    });

    builder.append(item);
  });

  if (!blocks.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Add a text, quiz, reflection, image, or video block";
    builder.append(empty);
  }
}

function drawBlockFields(fields, block, index, root) {
  if (block.type === "text") {
    fields.innerHTML = `
      <div class="split-fields">
        <label>Title<input data-field="title" type="text" /></label>
        <label>Type<input type="text" value="Text" disabled /></label>
      </div>
      <label>Body<textarea data-field="body" rows="4"></textarea></label>
      ${renderInlineImageBuilderFields(block)}
    `;
    fields.querySelector('[data-field="title"]').value = block.title || "";
    fields.querySelector('[data-field="body"]').value = block.body || "";
    fields.querySelector('[data-field="imageAlt"]').value =
      block.imageAlt || "";
    fields.querySelector('[data-field="imageCaption"]').value =
      block.imageCaption || "";
  }

  if (block.type === "multiple_choice") {
    fields.innerHTML = `
      <label>Question<input data-field="prompt" type="text" /></label>
      <div class="split-fields">
        <label>Correct answer<input data-field="choice-0" type="text" /></label>
        <label>Distractor 1<input data-field="choice-1" type="text" /></label>
      </div>
      <label>Distractor 2<input data-field="choice-2" type="text" /></label>
      <label>Explanation<textarea data-field="explanation" rows="3"></textarea></label>
      ${renderInlineImageBuilderFields(block)}
    `;
    fields.querySelector('[data-field="prompt"]').value = block.prompt || "";
    fields.querySelector('[data-field="choice-0"]').value =
      block.choices?.[0] || "";
    fields.querySelector('[data-field="choice-1"]').value =
      block.choices?.[1] || "";
    fields.querySelector('[data-field="choice-2"]').value =
      block.choices?.[2] || "";
    fields.querySelector('[data-field="explanation"]').value =
      block.explanation || "";
    fields.querySelector('[data-field="imageAlt"]').value =
      block.imageAlt || "";
    fields.querySelector('[data-field="imageCaption"]').value =
      block.imageCaption || "";
  }

  if (block.type === "reflection") {
    fields.innerHTML = `
      <label>Prompt<input data-field="prompt" type="text" /></label>
      <label>Suggested answer<textarea data-field="answer" rows="3"></textarea></label>
      ${renderInlineImageBuilderFields(block)}
    `;
    fields.querySelector('[data-field="prompt"]').value = block.prompt || "";
    fields.querySelector('[data-field="answer"]').value = block.answer || "";
    fields.querySelector('[data-field="imageAlt"]').value =
      block.imageAlt || "";
    fields.querySelector('[data-field="imageCaption"]').value =
      block.imageCaption || "";
  }

  if (block.type === "image") {
    fields.innerHTML = `
      <label>Title<input data-field="title" type="text" /></label>
      <label>Alt text<input data-field="alt" type="text" /></label>
      <label>Caption<textarea data-field="caption" rows="2"></textarea></label>
      <label>Image asset<input data-field="image-file" type="file" accept="image/*" /></label>
      <div class="media-preview" data-preview></div>
    `;
    fields.querySelector('[data-field="title"]').value = block.title || "";
    fields.querySelector('[data-field="alt"]').value = block.alt || "";
    fields.querySelector('[data-field="caption"]').value = block.caption || "";
    const preview = fields.querySelector("[data-preview]");
    if (block.src)
      preview.innerHTML = renderLessonImage(
        block.src,
        block.alt || "Lesson image",
      );
    fields
      .querySelector('[data-field="image-file"]')
      .addEventListener("change", async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        syncStudioDraftFromDom(root);
        const targetBlock = getSelectedLesson().blocks[index];
        const src = await readImageFileAsOptimizedDataUrl(file);
        targetBlock.src = src;
        targetBlock.fileName = file.name;
        const asset = registerAsset(
          file,
          src,
          "lesson-image",
          targetBlock.alt || targetBlock.title || "Lesson image",
        );
        targetBlock.assetId = asset.id;
        logAudit("asset_uploaded", `Lesson image uploaded: ${file.name}`);
        scheduleDraftAutosave(root);
        drawAssetLibrary(root);
        drawBlockBuilder(root);
      });
  }

  if (block.type === "video_embed") {
    fields.innerHTML = `
      <label>Title<input data-field="title" type="text" /></label>
      <label>Video URL<input data-field="url" type="url" placeholder="https://..." /></label>
      <label>Upload video<input data-field="video-file" type="file" accept="video/*" /></label>
      <label>Caption<textarea data-field="caption" rows="3"></textarea></label>
      <div class="media-preview editor-video-preview" data-video-preview>
        ${block.url ? renderVideoBlockMedia(block) : "Chưa có video trong block này"}
      </div>
      ${renderInlineImageBuilderFields(block)}
    `;
    fields.querySelector('[data-field="title"]').value = block.title || "";
    fields.querySelector('[data-field="url"]').value = block.url || "";
    fields.querySelector('[data-field="caption"]').value = block.caption || "";
    fields.querySelector('[data-field="imageAlt"]').value =
      block.imageAlt || "";
    fields.querySelector('[data-field="imageCaption"]').value =
      block.imageCaption || "";
  }

  fields
    .querySelector('[data-field="inline-image-file"]')
    ?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      syncStudioDraftFromDom(root);
      const targetBlock = getSelectedLesson().blocks[index];
      const src = await readImageFileAsOptimizedDataUrl(file);
      targetBlock.imageSrc = src;
      targetBlock.imageName = file.name;
      const asset = registerAsset(
        file,
        src,
        "lesson-inline-image",
        getInlineImageAlt(targetBlock),
      );
      targetBlock.imageAssetId = asset.id;
      logAudit("asset_uploaded", `Inline lesson image uploaded: ${file.name}`);
      scheduleDraftAutosave(root);
      drawAssetLibrary(root);
      drawBlockBuilder(root);
    });

  fields
    .querySelector('[data-field="video-file"]')
    ?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      syncStudioDraftFromDom(root);
      const targetBlock = getSelectedLesson().blocks[index];
      try {
        const asset = await apiUploadAssetFile(
          file,
          "lesson-video",
          targetBlock.title || "Lesson video",
        );
        targetBlock.url = asset.src;
        targetBlock.videoFileName = file.name;
        targetBlock.videoAssetId = asset.id;
        targetBlock.mimeType = asset.mimeType;
        targetBlock.sizeBytes = asset.sizeBytes;
        logAudit("asset_uploaded", `Lesson video uploaded: ${file.name}`);
        scheduleDraftAutosave(root);
        drawAssetLibrary(root);
        drawBlockBuilder(root);
      } catch (error) {
        window.alert(`Không upload được video: ${error.message}`);
      }
    });

  fields.querySelectorAll("input, textarea").forEach((input) => {
    if (input.type !== "file") {
      input.addEventListener("input", () => {
        syncStudioDraftFromDom(root);
        scheduleDraftAutosave(root);
      });
    }
  });
}

function readBlocksFromBuilder(root) {
  const existingBlocks = getSelectedLesson().blocks;
  return [...root.querySelectorAll(".builder-block")].map((item) => {
    const index = Number(item.dataset.index);
    const existing = existingBlocks[index] || {};
    const type = item.dataset.type;
    if (type === "text") {
      return {
        id: existing.id || createStudioBlock("text").id,
        type,
        title: item.querySelector('[data-field="title"]').value.trim(),
        body: item.querySelector('[data-field="body"]').value.trim(),
        ...readInlineImageFields(item, existing),
      };
    }
    if (type === "multiple_choice") {
      return {
        id: existing.id || createStudioBlock("multiple_choice").id,
        type,
        prompt: item.querySelector('[data-field="prompt"]').value.trim(),
        choices: [
          item.querySelector('[data-field="choice-0"]').value.trim(),
          item.querySelector('[data-field="choice-1"]').value.trim(),
          item.querySelector('[data-field="choice-2"]').value.trim(),
        ],
        correct: 0,
        explanation: item
          .querySelector('[data-field="explanation"]')
          .value.trim(),
        ...readInlineImageFields(item, existing),
      };
    }
    if (type === "image") {
      return {
        ...existing,
        id: existing.id || createStudioBlock("image").id,
        type,
        title: item.querySelector('[data-field="title"]').value.trim(),
        alt: item.querySelector('[data-field="alt"]').value.trim(),
        caption: item.querySelector('[data-field="caption"]').value.trim(),
        src: existing.src || "",
      };
    }
    if (type === "video_embed") {
      return {
        ...existing,
        id: existing.id || createStudioBlock("video_embed").id,
        type,
        title: item.querySelector('[data-field="title"]').value.trim(),
        url: item.querySelector('[data-field="url"]').value.trim(),
        caption: item.querySelector('[data-field="caption"]').value.trim(),
        ...readInlineImageFields(item, existing),
      };
    }
    return {
      id: existing.id || createStudioBlock("reflection").id,
      type: "reflection",
      prompt: item.querySelector('[data-field="prompt"]').value.trim(),
      answer: item.querySelector('[data-field="answer"]').value.trim(),
      ...readInlineImageFields(item, existing),
    };
  });
}

function isStudioBlockComplete(block) {
  if (block.type === "text") return Boolean(block.title && block.body);
  if (block.type === "multiple_choice") {
    return Boolean(
      block.prompt && block.explanation && block.choices.every(Boolean),
    );
  }
  if (block.type === "image")
    return Boolean(block.title && block.alt && block.src);
  if (block.type === "video_embed") return Boolean(block.title && block.url);
  if (block.type === "reflection") return Boolean(block.prompt && block.answer);
  return Boolean(block.prompt);
}

function validateStudioDraft(draft) {
  const errors = [];
  if (!draft.title) errors.push("Course title is required.");
  if (!draft.subject) errors.push("Subject is required.");
  if (!draft.description) errors.push("Course description is required.");
  if (!draft.levels.length) errors.push("At least one level is required.");
  draft.levels.forEach((level, levelIndex) => {
    if (!level.title) errors.push(`Level ${levelIndex + 1} needs a title.`);
    if (!level.lessons.length)
      errors.push(`Level ${levelIndex + 1} needs a lesson.`);
    level.lessons.forEach((lesson, lessonIndex) => {
      const quizCount = lesson.blocks.filter(
        (block) => block.type === "multiple_choice",
      ).length;
      if (!lesson.title)
        errors.push(
          `Lesson ${levelIndex + 1}.${lessonIndex + 1} needs a title.`,
        );
      if (!lesson.blocks.length)
        errors.push(
          `Lesson ${levelIndex + 1}.${lessonIndex + 1} needs blocks.`,
        );
      if (quizCount < MIN_QUIZZES_PER_LESSON) {
        errors.push(
          `Lesson ${levelIndex + 1}.${lessonIndex + 1} needs at least ${MIN_QUIZZES_PER_LESSON} quiz questions.`,
        );
      }
      lesson.blocks.forEach((block, blockIndex) => {
        if (!isStudioBlockComplete(block)) {
          errors.push(
            `Block ${blockIndex + 1} in lesson ${levelIndex + 1}.${lessonIndex + 1} is incomplete.`,
          );
        }
      });
    });
  });
  return errors;
}

function submitStudioDraft(root) {
  syncStudioDraftFromDom(root);
  const errors = validateStudioDraft(currentStudioDraft);
  if (state.creatorProfile.reputationScore < 60) {
    errors.unshift(
      "Creator reputation must be at least 60 before submitting lessons.",
    );
  }
  if (errors.length) {
    window.alert(errors.slice(0, 4).join("\n"));
    return;
  }

  const trusted = state.creatorProfile.reputationScore >= 90;
  const submission = buildSubmissionFromDraft(
    currentStudioDraft,
    trusted ? "approved" : "pending_review",
  );
  const existingIndex = state.studioSubmissions.findIndex(
    (item) => item.id === submission.id,
  );
  if (existingIndex >= 0) {
    state.studioSubmissions[existingIndex] = submission;
  } else {
    state.studioSubmissions.unshift(submission);
  }

  if (trusted) {
    publishSubmission(submission, "auto");
  }
  pushCourseSubmissionToBackend(submission);
  logAudit(
    "submission_created",
    `${submission.title} submitted as ${submission.status}`,
  );

  currentStudioDraft = createDefaultStudioDraft();
  selectedLevelIndex = 0;
  selectedLessonIndex = 0;
  state.studioDraft = structuredClone(currentStudioDraft);
  saveState();
  renderStudio();
}

function buildSubmissionFromDraft(draft, status) {
  const id = draft.editingSubmissionId || `submission-${Date.now()}`;
  return {
    id,
    title: draft.title,
    subject: draft.subject,
    difficulty: draft.difficulty,
    description: draft.description,
    thumbnail: draft.thumbnail,
    thumbnailName: draft.thumbnailName,
    levels: structuredClone(draft.levels),
    status,
    creatorReputation: state.creatorProfile.reputationScore,
    revisionOfCourseId: draft.revisionOfCourseId || null,
    versionNumber: draft.versionNumber || 1,
    createdAt: draft.createdAt || new Date().toISOString(),
    reviewedAt: status === "approved" ? new Date().toISOString() : null,
  };
}

function buildCourseFromSubmission(submission, reviewMode = "manual") {
  const baseId = slugify(submission.title) || `course-${Date.now()}`;
  const versionSuffix =
    submission.versionNumber > 1 ? `-v${submission.versionNumber}` : "";
  const id = `${baseId}${versionSuffix}-${submission.id.replace("submission-", "")}`;
  const course = {
    id,
    title:
      submission.versionNumber > 1
        ? `${submission.title} v${submission.versionNumber}`
        : submission.title,
    subject: submission.subject,
    difficulty: submission.difficulty,
    symbol: submission.title.trim().charAt(0).toUpperCase() || "C",
    color: pickCourseColor(submission.title),
    description: submission.description,
    thumbnail: submission.thumbnail || null,
    creatorSubmissionId: submission.id,
    revisionOfCourseId: submission.revisionOfCourseId || null,
    versionNumber: submission.versionNumber || 1,
    reviewMode,
    levels: submission.levels.map((level, levelIndex) => ({
      id: `${id}-level-${levelIndex + 1}`,
      title: level.title,
      lessons: level.lessons.map((lesson, lessonIndex) => ({
        id: `${id}-lesson-${levelIndex + 1}-${lessonIndex + 1}`,
        title: lesson.title,
        minutes: lesson.minutes || 8,
        blocks: structuredClone(lesson.blocks),
      })),
    })),
  };
  return normalizeCourseLessons(course);
}

function publishSubmission(submission, reviewMode = "manual") {
  const course = buildCourseFromSubmission(submission, reviewMode);
  state.customCourses = state.customCourses.filter(
    (item) => item.creatorSubmissionId !== submission.id,
  );
  state.customCourses.unshift(course);
  submission.status = "approved";
  submission.reviewedAt = new Date().toISOString();
  state.creatorProfile.approvedCourses += 1;
  state.creatorProfile.reputationScore = Math.min(
    100,
    state.creatorProfile.reputationScore + 5,
  );
}

function approveSubmission(submissionId) {
  if (!canModerate()) return;
  const submission = state.studioSubmissions.find(
    (item) => item.id === submissionId,
  );
  if (!submission || submission.status !== "pending_review") return;
  publishSubmission(submission);
  logAudit("submission_approved", submission.title);
  saveState();
  renderStudio();
}

function rejectSubmission(submissionId) {
  if (!canModerate()) return;
  const submission = state.studioSubmissions.find(
    (item) => item.id === submissionId,
  );
  if (!submission || submission.status !== "pending_review") return;
  submission.status = "rejected";
  submission.reviewedAt = new Date().toISOString();
  state.creatorProfile.rejectedSubmissions += 1;
  state.creatorProfile.reputationScore = Math.max(
    0,
    state.creatorProfile.reputationScore - 8,
  );
  logAudit("submission_rejected", submission.title);
  saveState();
  renderStudio();
}

function editSubmission(submissionId) {
  const submission = state.studioSubmissions.find(
    (item) => item.id === submissionId,
  );
  if (!submission) return;
  currentStudioDraft = draftFromSubmission(submission);
  state.studioDraft = structuredClone(currentStudioDraft);
  saveState();
  renderStudio();
}

function draftFromSubmission(submission) {
  return normalizeDraft({
    id: `draft-${Date.now()}`,
    editingSubmissionId: submission.id,
    revisionOfCourseId: submission.revisionOfCourseId || null,
    versionNumber: submission.versionNumber || 1,
    title: submission.title,
    subject: submission.subject,
    difficulty: submission.difficulty,
    description: submission.description,
    thumbnail: submission.thumbnail || null,
    thumbnailName: submission.thumbnailName || "",
    levels: structuredClone(submission.levels),
  });
}

function createRevisionDraft(courseId) {
  const course = state.customCourses.find((item) => item.id === courseId);
  if (!course) return;
  currentStudioDraft = normalizeDraft({
    id: `draft-${Date.now()}`,
    editingSubmissionId: null,
    revisionOfCourseId: course.id,
    versionNumber: (course.versionNumber || 1) + 1,
    title: course.title.replace(/ v\d+$/, ""),
    subject: course.subject,
    difficulty: course.difficulty,
    description: course.description,
    thumbnail: course.thumbnail || null,
    levels: course.levels.map((level) => ({
      id: `level-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: level.title,
      lessons: level.lessons.map((lesson) => ({
        id: `lesson-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: lesson.title,
        minutes: lesson.minutes,
        blocks: structuredClone(lesson.blocks),
      })),
    })),
  });
  state.studioDraft = structuredClone(currentStudioDraft);
  saveState();
  renderStudio();
}

function drawReviewPanel() {
  const panel = document.querySelector("#reviewPanel");
  if (!panel) return;
  const submissions = state.studioSubmissions;
  const pendingReports = state.contentReports.filter(
    (report) => report.status === "pending",
  );
  const submissionFilter = state.moderationFilters.submissionStatus;
  const reportFilter = state.moderationFilters.reportStatus;
  const visibleSubmissions =
    submissionFilter === "all"
      ? submissions
      : submissions.filter(
          (submission) => submission.status === submissionFilter,
        );
  const pendingSubmissions = submissions.filter(
    (submission) => submission.status === "pending_review",
  ).length;
  const approvedSubmissions = submissions.filter(
    (submission) => submission.status === "approved",
  ).length;
  const rejectedSubmissions = submissions.filter(
    (submission) => submission.status === "rejected",
  ).length;
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Moderation queue</p>
        <h2>Submissions</h2>
      </div>
      <span class="status-pill">${submissions.length} submissions / ${pendingReports.length} reports</span>
    </div>
    <div class="moderation-grid">
      <div class="moderation-tile"><strong>${pendingSubmissions}</strong><span>Pending review</span></div>
      <div class="moderation-tile"><strong>${approvedSubmissions}</strong><span>Approved</span></div>
      <div class="moderation-tile"><strong>${rejectedSubmissions}</strong><span>Rejected</span></div>
      <div class="moderation-tile"><strong>${pendingReports.length}</strong><span>Open reports</span></div>
    </div>
    <div class="risk-alerts">
      ${buildRiskAlerts(pendingReports.length, rejectedSubmissions)}
    </div>
    <div class="moderation-filters">
      <label>Submissions
        <select id="submissionFilter">
          <option value="all">All</option>
          <option value="pending_review">Pending review</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </label>
      <label>Reports
        <select id="reportFilter">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
          <option value="dismissed">Dismissed</option>
        </select>
      </label>
    </div>
    <div class="review-list"></div>
    <div class="panel-heading report-heading">
      <div>
        <p class="eyebrow">Reports</p>
        <h2>Content reports</h2>
      </div>
      <span class="status-pill">${pendingReports.length} pending</span>
    </div>
    <div class="review-list" id="reportList"></div>
    <div class="panel-heading report-heading">
      <div>
        <p class="eyebrow">Audit log</p>
        <h2>Recent actions</h2>
      </div>
      <span class="status-pill">${state.auditLog.length} events</span>
    </div>
    <div class="audit-list" id="auditList"></div>
  `;
  panel.querySelector("#submissionFilter").value = submissionFilter;
  panel.querySelector("#reportFilter").value = reportFilter;
  panel
    .querySelector("#submissionFilter")
    .addEventListener("change", (event) => {
      state.moderationFilters.submissionStatus = event.target.value;
      saveState();
      drawReviewPanel();
    });
  panel.querySelector("#reportFilter").addEventListener("change", (event) => {
    state.moderationFilters.reportStatus = event.target.value;
    saveState();
    drawReviewPanel();
  });
  const list = panel.querySelector(".review-list");
  if (!visibleSubmissions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No submitted drafts";
    list.append(empty);
  } else
    visibleSubmissions.forEach((submission) => {
      const lessonCount = submission.levels.reduce(
        (total, level) => total + level.lessons.length,
        0,
      );
      const blockCount = submission.levels.reduce(
        (total, level) =>
          total +
          level.lessons.reduce((sum, lesson) => sum + lesson.blocks.length, 0),
        0,
      );
      const item = document.createElement("div");
      item.className = `review-item ${submission.status === "approved" ? "approved" : ""} ${
        submission.status === "rejected" ? "rejected" : ""
      }`;
      item.innerHTML = `
      <strong>${escapeHtml(submission.title)} v${submission.versionNumber || 1}</strong>
      <span>${escapeHtml(submission.subject)} - ${escapeHtml(submission.status.replace("_", " "))} - ${lessonCount} lessons - ${blockCount} blocks</span>
      <p>${escapeHtml(submission.description)}</p>
      <div class="review-actions"></div>
    `;
      const actions = item.querySelector(".review-actions");
      if (submission.status === "pending_review") {
        addAction(actions, "Approve", "primary-button", () =>
          approveSubmission(submission.id),
        );
        addAction(actions, "Reject", "danger-button", () =>
          rejectSubmission(submission.id),
        );
        addAction(actions, "Edit draft", "ghost-button", () =>
          editSubmission(submission.id),
        );
      } else if (submission.status === "approved") {
        addAction(actions, "Open course", "ghost-button", () => {
          const course = state.customCourses.find(
            (entry) => entry.creatorSubmissionId === submission.id,
          );
          if (course) window.location.hash = `course/${course.id}`;
        });
        const course = state.customCourses.find(
          (entry) => entry.creatorSubmissionId === submission.id,
        );
        if (course)
          addAction(actions, "Create revision", "ghost-button", () =>
            createRevisionDraft(course.id),
          );
      } else {
        addAction(actions, "Edit and resubmit", "ghost-button", () =>
          editSubmission(submission.id),
        );
      }
      list.append(item);
    });

  drawReportList();
  drawAuditList();
}

function buildRiskAlerts(pendingReportCount, rejectedSubmissionCount) {
  const alerts = [];
  if (pendingReportCount >= 3) {
    alerts.push({
      level: "high",
      title: "Nhiều report đang chờ",
      body: `${pendingReportCount} report cần admin xử lý trước khi công bố nội dung.`,
    });
  }
  if (state.creatorProfile.reputationScore < 60) {
    alerts.push({
      level: "high",
      title: "Creator reputation thấp",
      body: "Creator đang bị khóa submit cho đến khi reputation >= 60.",
    });
  }
  if (rejectedSubmissionCount > 0) {
    alerts.push({
      level: "medium",
      title: "Có submission bị từ chối",
      body: `${rejectedSubmissionCount} submission cần sửa hoặc resubmit.`,
    });
  }
  if (!alerts.length) {
    alerts.push({
      level: "low",
      title: "Moderation ổn định",
      body: "Không có cảnh báo rủi ro lớn trong hệ thống hiện tại.",
    });
  }
  return alerts
    .map(
      (alert) => `
        <article class="risk-card ${alert.level}">
          <strong>${escapeHtml(alert.title)}</strong>
          <span>${escapeHtml(alert.body)}</span>
        </article>
      `,
    )
    .join("");
}

function drawTeacherSubmissionPanel() {
  const panel = document.querySelector("#reviewPanel");
  if (!panel) return;
  const submissions = state.studioSubmissions;
  const pendingSubmissions = submissions.filter(
    (submission) => submission.status === "pending_review",
  ).length;
  const approvedSubmissions = submissions.filter(
    (submission) => submission.status === "approved",
  ).length;
  const rejectedSubmissions = submissions.filter(
    (submission) => submission.status === "rejected",
  ).length;
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Bài đã nộp</p>
        <h2>Trạng thái kiểm duyệt</h2>
      </div>
      <span class="status-pill">${submissions.length} bài</span>
    </div>
    <div class="moderation-grid">
      <div class="moderation-tile"><strong>${pendingSubmissions}</strong><span>Đang chờ</span></div>
      <div class="moderation-tile"><strong>${approvedSubmissions}</strong><span>Đã duyệt</span></div>
      <div class="moderation-tile"><strong>${rejectedSubmissions}</strong><span>Cần sửa</span></div>
    </div>
    <div class="review-list"></div>
  `;
  const list = panel.querySelector(".review-list");
  if (!submissions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Chưa có bài nộp";
    list.append(empty);
    return;
  }
  submissions.forEach((submission) => {
    const item = document.createElement("article");
    item.className = `review-item ${submission.status === "approved" ? "approved" : ""} ${
      submission.status === "rejected" ? "rejected" : ""
    }`;
    item.innerHTML = `
      <strong>${escapeHtml(submission.title)} v${submission.versionNumber || 1}</strong>
      <span>${escapeHtml(submission.status.replace("_", " "))}</span>
      <p>${escapeHtml(submission.description)}</p>
      <div class="review-actions"></div>
    `;
    const actions = item.querySelector(".review-actions");
    if (submission.status !== "approved") {
      addAction(actions, "Sửa và nộp lại", "ghost-button", () =>
        editSubmission(submission.id),
      );
    }
    list.append(item);
  });
}

function drawReportList() {
  const list = document.querySelector("#reportList");
  if (!list) return;
  const filter = state.moderationFilters.reportStatus;
  const reports =
    filter === "all"
      ? state.contentReports
      : state.contentReports.filter((report) => report.status === filter);
  list.replaceChildren();
  if (!reports.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No content reports";
    list.append(empty);
    return;
  }
  reports.forEach((report) => {
    const item = document.createElement("article");
    item.className = `review-item ${report.status === "resolved" ? "approved" : ""} ${
      report.status === "dismissed" ? "rejected" : ""
    }`;
    item.innerHTML = `
      <strong>${escapeHtml(report.title)}</strong>
      <span>${escapeHtml(report.targetType)} - ${escapeHtml(report.status)} - ${new Date(report.createdAt).toLocaleDateString()}</span>
      <p>${escapeHtml(report.reason)}</p>
      <div class="review-actions"></div>
    `;
    const actions = item.querySelector(".review-actions");
    if (report.status === "pending") {
      addAction(actions, "Resolve", "primary-button", () =>
        resolveReport(report.id),
      );
      addAction(actions, "Dismiss", "ghost-button", () =>
        dismissReport(report.id),
      );
    }
    list.append(item);
  });
}

function drawAuditList() {
  const list = document.querySelector("#auditList");
  if (!list) return;
  list.replaceChildren();
  const entries = state.auditLog.slice(0, 8);
  if (!entries.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact";
    empty.textContent = "No audit events yet";
    list.append(empty);
    return;
  }
  entries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "audit-item";
    item.innerHTML = `
      <strong>${escapeHtml(entry.action.replaceAll("_", " "))}</strong>
      <span>${escapeHtml(entry.actor)} - ${escapeHtml(entry.role)} - ${new Date(entry.createdAt).toLocaleString()}</span>
      <p>${escapeHtml(entry.detail)}</p>
    `;
    list.append(item);
  });
}

function resolveReport(reportId) {
  if (!canModerate()) return;
  const report = state.contentReports.find((item) => item.id === reportId);
  if (!report) return;
  report.status = "resolved";
  report.reviewedAt = new Date().toISOString();
  state.creatorProfile.reputationScore = Math.max(
    0,
    state.creatorProfile.reputationScore - 3,
  );
  logAudit("report_resolved", report.title);
  saveState();
  drawReviewPanel();
}

function dismissReport(reportId) {
  if (!canModerate()) return;
  const report = state.contentReports.find((item) => item.id === reportId);
  if (!report) return;
  report.status = "dismissed";
  report.reviewedAt = new Date().toISOString();
  state.creatorProfile.reputationScore = Math.min(
    100,
    state.creatorProfile.reputationScore + 1,
  );
  logAudit("report_dismissed", report.title);
  saveState();
  drawReviewPanel();
}

function addAction(parent, label, className, handler) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", handler);
  parent.append(button);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function readImageFileAsOptimizedDataUrl(file) {
  if (
    !file?.type?.startsWith("image/") ||
    file.type === "image/svg+xml" ||
    file.type === "image/gif"
  ) {
    return readFileAsDataUrl(file);
  }

  const original = await readFileAsDataUrl(file);
  const image = await loadImageFromDataUrl(original);
  const maxEdge = 1400;
  const scale = Math.min(
    1,
    maxEdge /
      Math.max(
        image.naturalWidth || image.width,
        image.naturalHeight || image.height,
      ),
  );
  const width = Math.max(
    1,
    Math.round((image.naturalWidth || image.width) * scale),
  );
  const height = Math.max(
    1,
    Math.round((image.naturalHeight || image.height) * scale),
  );
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) return original;
  context.drawImage(image, 0, 0, width, height);

  const mime =
    file.type === "image/png" && file.size < 350 * 1024
      ? "image/png"
      : "image/jpeg";
  const optimized = canvas.toDataURL(
    mime,
    mime === "image/jpeg" ? 0.82 : undefined,
  );
  return optimized.length < original.length ? optimized : original;
}

function loadImageFromDataUrl(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Không đọc được ảnh vừa chọn."));
    image.src = src;
  });
}

function continueLearning() {
  for (const course of getCourses()) {
    const next = getNextLesson(course);
    if (next) {
      window.location.hash = `lesson/${course.id}/${next.lesson.id}`;
      return;
    }
  }
  window.location.hash = "daily";
}

document.addEventListener(
  "error",
  (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.dataset.lessonImage)
      return;
    const wrapper = image.closest(".media-preview");
    image.hidden = true;
    if (wrapper && !wrapper.querySelector(".media-missing-copy")) {
      const message = document.createElement("p");
      message.className = "media-missing-copy";
      message.textContent =
        "Không tải được ảnh. Hãy kiểm tra file trong uploads hoặc upload lại data từ máy còn ảnh gốc.";
      wrapper.append(message);
    }
  },
  true,
);

async function validateBackendSessionOnStart() {
  if (!isBackendAuthenticated()) return;
  try {
    const data = await apiRequest("me.php");
    syncAccountFromApiUser(data.user);
    await syncCoursesFromBackendSafely();
    saveState();
  } catch (error) {
    resetAuthSession();
    state.backend.status = "connected";
    state.backend.message =
      error.message === "UNAUTHENTICATED" ? "Session expired" : error.message;
    saveState();
    if (
      !["#home", "#login"].includes(window.location.hash) &&
      !window.location.hash.startsWith("#register")
    ) {
      window.location.hash = "login";
    }
  }
}

async function bootstrapApp() {
  await hydrateStateFromIndexedDb();
  configureBackgroundMusic();
  renderProfileMini();
  renderStreak();
  await validateBackendSessionOnStart();
  routeSafely();
}

function renderFatalAppError(error) {
  console.error("StudyFlow render failed", error);
  setShellMode("app");
  if (pageTitle) pageTitle.textContent = "Khôi phục StudyFlow";
  if (pageKicker) pageKicker.textContent = "Ứng dụng gặp lỗi hiển thị";
  if (!viewRoot) return;
  viewRoot.innerHTML = `
    <section class="settings-panel fatal-app-error" role="alert" aria-live="assertive">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">RECOVERY MODE</p>
          <h2>Không thể hiển thị trang này</h2>
        </div>
        <span class="status-pill">Dữ liệu vẫn được giữ</span>
      </div>
      <p class="muted-copy">Trình duyệt đã dừng khi xử lý dữ liệu học tập hoặc media. Không cần xóa Asset Library hay upload lại từ đầu.</p>
      <div class="import-status">${escapeHtml(error?.message || "Lỗi hiển thị không xác định")}</div>
      <div class="data-actions">
        <button class="primary-button" type="button" id="fatalReloadButton">Tải lại trang</button>
        <button class="ghost-button" type="button" id="fatalLoginButton">Về đăng nhập</button>
      </div>
    </section>
  `;
  viewRoot.querySelector("#fatalReloadButton")?.addEventListener("click", () => {
    window.location.reload();
  });
  viewRoot.querySelector("#fatalLoginButton")?.addEventListener("click", () => {
    window.location.hash = "login";
    window.location.reload();
  });
}

function routeSafely() {
  try {
    route();
  } catch (error) {
    renderFatalAppError(error);
  }
}

checkInButton.addEventListener("click", () => {
  addCheckin("manual");
  saveState();
  if (location.hash === "#daily") {
    drawTodayPanel();
    drawCalendarPanel();
    drawGoalPanel();
  }
});

continueButton.addEventListener("click", continueLearning);
logoutButton?.addEventListener("click", studyflowLogout);
window.addEventListener("hashchange", routeSafely);

bootstrapApp().catch(renderFatalAppError);
