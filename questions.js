const QUESTIONS = [
  {
    id: "kh-01",
    category: "한국사",
    question: "1443년 훈민정음을 창제한 조선의 왕은?",
    choices: ["세종", "태종", "세조", "성종"],
    answer: 0,
    explanation: "세종은 1443년 훈민정음을 만들고 1446년에 이를 반포했다.",
    source: "한국민족문화대백과사전 '한글'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0061508"
  },
  {
    id: "kh-02",
    category: "한국사",
    question: "918년 고려를 세우고 936년 후삼국을 통일한 인물은?",
    choices: ["왕건", "궁예", "견훤", "경순왕"],
    answer: 0,
    explanation: "왕건은 918년 궁예를 몰아내고 고려를 세운 뒤 936년 후삼국을 통일했다.",
    source: "우리역사넷(국사편찬위원회) '태조 왕건'",
    sourceUrl: "https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_n206200&code=kc_age_20"
  },
  {
    id: "kh-03",
    category: "한국사",
    question: "신라 선덕여왕 때 쌓은 것으로 전하는, 경주에 있는 천문 관측 시설은?",
    choices: ["첨성대", "관천대", "간의대", "흠경각"],
    answer: 0,
    explanation: "『삼국유사』에 선덕여왕 때 돌을 다듬어 첨성대를 쌓았다는 기록이 있다.",
    source: "한국민족문화대백과사전 '경주 첨성대'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0002925"
  },
  {
    id: "kh-04",
    category: "한국사",
    question: "고려 때 몽골의 침입을 물리치길 바라며 새긴 팔만대장경판이 보관된 절은?",
    choices: ["해인사", "불국사", "송광사", "통도사"],
    answer: 0,
    explanation: "팔만대장경판은 지금 합천 해인사의 장경판전에 보관되어 있다.",
    source: "우리역사넷(국사편찬위원회) '팔만대장경'",
    sourceUrl: "https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_r200500"
  },
  {
    id: "kh-05",
    category: "한국사",
    question: "1377년 청주 흥덕사에서 금속활자로 찍었고, 지금 프랑스 국립도서관에 있는 책은?",
    choices: ["직지심체요절", "상정고금예문", "삼국사기", "동국통감"],
    answer: 0,
    explanation: "『직지심체요절』 금속활자본 1건이 프랑스 국립도서관에 소장되어 있다.",
    source: "한국민족문화대백과사전 '불조직지심체요절'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0025035"
  },
  {
    id: "kh-06",
    category: "한국사",
    question: "세조 때 편찬을 시작해 성종 때 완성한 조선의 기본 법전은?",
    choices: ["경국대전", "속대전", "대전통편", "대전회통"],
    answer: 0,
    explanation: "『경국대전』은 세조 때 편찬을 시작해 성종 때 완성된 조선의 기본 법전이다.",
    source: "우리역사넷(국사편찬위원회) '경국대전'",
    sourceUrl: "https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_r300100&code=kc_age_30"
  },
  {
    id: "kh-07",
    category: "한국사",
    question: "임진왜란 동안 이순신이 직접 쓴 일기는?",
    choices: ["난중일기", "징비록", "열하일기", "한중록"],
    answer: 0,
    explanation: "이순신이 쓴 일기로, 정조 때 『이충무공전서』를 펴내며 '난중일기'라 이름 붙였다.",
    source: "한국민족문화대백과사전 '난중일기'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0011715"
  },
  {
    id: "kh-08",
    category: "한국사",
    question: "정약용이 지방 수령이 지켜야 할 지침을 담아 쓴 책은?",
    choices: ["목민심서", "경세유표", "흠흠신서", "반계수록"],
    answer: 0,
    explanation: "정약용이 1818년에 완성한 책으로, 수령이 지켜야 할 지침을 담았다.",
    source: "우리역사넷(국사편찬위원회) 교과서 용어해설 '목민심서'",
    sourceUrl: "https://contents.history.go.kr/front/tg/view.do?treeId=0100&levelId=tg_003_2490"
  },
  {
    id: "kh-09",
    category: "한국사",
    question: "몸집이 작아 '녹두장군'이라 불린 동학 농민 운동의 지도자는?",
    choices: ["전봉준", "손화중", "김개남", "최시형"],
    answer: 0,
    explanation: "전봉준은 1894년 동학 농민 운동에서 농민군을 이끈 최고 지도자였다.",
    source: "한국민족문화대백과사전 '전봉준'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0049437"
  },
  {
    id: "kh-10",
    category: "한국사",
    question: "1919년 대한민국 임시정부가 처음 수립된 도시는?",
    choices: ["상하이", "충칭", "베이징", "난징"],
    answer: 0,
    explanation: "임시정부는 1919년 상하이에서 수립되었고, 1940년 충칭으로 옮겼다.",
    source: "한국민족문화대백과사전 '대한민국 임시정부'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0015017"
  }
];
