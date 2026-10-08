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
    question: "세종 때 만들어 빗물의 양(강우량)을 재는 데 쓴 기구는?",
    choices: ["측우기", "자격루", "혼천의", "해시계"],
    answer: 0,
    explanation: "측우기는 세종 때 만든, 조선의 공식 강우량 측정 기구다.",
    source: "한국민족문화대백과사전 '측우기'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0058337"
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
  },
  {
    id: "wg-01",
    category: "세계지리",
    question: "오스트레일리아의 수도는?",
    choices: ["캔버라", "시드니", "멜버른", "퍼스"],
    answer: 0,
    explanation: "시드니와 멜버른이 서로 경쟁해, 두 도시가 아닌 캔버라가 수도로 정해졌다.",
    source: "National Capital Authority(호주 국가수도청)",
    sourceUrl: "https://www.nca.gov.au/education/canberras-history/canberra-seat-government"
  },
  {
    id: "wg-02",
    category: "세계지리",
    question: "적도(Equator)에서 나라 이름을 따온 남아메리카의 나라는?",
    choices: ["에콰도르", "콜롬비아", "베네수엘라", "볼리비아"],
    answer: 0,
    explanation: "에콰도르는 나라를 가로지르는 적도에서 이름을 따왔다.",
    source: "Encyclopaedia Britannica 'Ecuador'",
    sourceUrl: "https://www.britannica.com/place/Ecuador"
  },
  {
    id: "wg-03",
    category: "세계지리",
    question: "요르단과 이스라엘 사이에 있는, 바다처럼 짠 소금 호수는?",
    choices: ["사해", "홍해", "흑해", "황해"],
    answer: 0,
    explanation: "사해는 이스라엘과 요르단 사이의 움푹 꺼진 낮은 땅에 있는 소금 호수다.",
    source: "NASA Earth Observatory 'The Dead Sea'",
    sourceUrl: "https://science.nasa.gov/earth/earth-observatory/the-dead-sea-77592/"
  },
  {
    id: "wg-04",
    category: "세계지리",
    question: "대체로 경도 180°선을 따라 그어, 넘어가면 날짜가 바뀌는 선은?",
    choices: ["날짜 변경선", "본초 자오선", "북회귀선", "남회귀선"],
    answer: 0,
    explanation: "날짜 변경선의 서쪽 지역은 동쪽 지역보다 날짜가 하루 앞선다.",
    source: "National Geographic Education 'Date Line'",
    sourceUrl: "https://education.nationalgeographic.org/resource/date-line/"
  },
  {
    id: "wg-05",
    category: "세계지리",
    question: "남아메리카의 아마존강이 흘러드는 바다는?",
    choices: ["대서양", "태평양", "카리브해", "인도양"],
    answer: 0,
    explanation: "아마존강은 안데스산맥에서 시작해 브라질 북동부 해안에서 대서양으로 흘러든다.",
    source: "Encyclopaedia Britannica 'Amazon River'",
    sourceUrl: "https://www.britannica.com/place/Amazon-River"
  },
  {
    id: "wg-06",
    category: "세계지리",
    question: "남아메리카 서쪽을 따라 남북으로 길게 뻗은 산맥은?",
    choices: ["안데스산맥", "로키산맥", "알프스산맥", "우랄산맥"],
    answer: 0,
    explanation: "안데스산맥은 남아메리카 남쪽 끝에서 북쪽 해안까지 이어진다.",
    source: "National Geographic Education 'South America: Physical Geography'",
    sourceUrl: "https://education.nationalgeographic.org/resource/south-america-physical-geography/"
  },
  {
    id: "wg-07",
    category: "세계지리",
    question: "해발 고도 기준으로 세계에서 가장 높은 산인 에베레스트산이 국경에 걸쳐 있는 두 나라는?",
    choices: ["네팔과 중국", "네팔과 인도", "인도와 중국", "부탄과 중국"],
    answer: 0,
    explanation: "에베레스트산은 히말라야산맥에 있으며 네팔과 중국(티베트) 국경에 걸쳐 있다.",
    source: "Encyclopaedia Britannica 'Mount Everest'",
    sourceUrl: "https://www.britannica.com/place/Mount-Everest"
  },
  {
    id: "wg-08",
    category: "세계지리",
    question: "빙하가 깎아 만든 골짜기에 바닷물이 들어와 생긴 좁고 긴 만은?",
    choices: ["피오르", "리아스", "석호", "사주"],
    answer: 0,
    explanation: "피오르는 빙하가 깎은 골짜기에 바다가 들어온 지형으로, 노르웨이에 많다.",
    source: "Encyclopaedia Britannica 'fjord'",
    sourceUrl: "https://www.britannica.com/science/fjord"
  },
  {
    id: "wg-09",
    category: "세계지리",
    question: "아프리카 북동부를 지나 북쪽으로 흐르는 나일강이 흘러드는 바다는?",
    choices: ["지중해", "홍해", "흑해", "북해"],
    answer: 0,
    explanation: "나일강은 북쪽으로 흘러 이집트 해안에서 지중해로 들어간다.",
    source: "National Geographic Education 'Nile River'",
    sourceUrl: "https://education.nationalgeographic.org/resource/nile-river/"
  },
  {
    id: "wg-10",
    category: "세계지리",
    question: "면적 기준으로 세계에서 가장 넓은 대양은?",
    choices: ["태평양", "대서양", "인도양", "북극해"],
    answer: 0,
    explanation: "태평양은 아시아·오스트레일리아와 아메리카 대륙 사이에 있는 가장 넓은 대양이다.",
    source: "NOAA(미국 해양대기청) 'What is the biggest ocean?'",
    sourceUrl: "https://oceanservice.noaa.gov/facts/biggestocean.html"
  },
  {
    id: "sc-01",
    category: "과학",
    question: "소리의 세기(크기)를 나타낼 때 쓰는 단위는?",
    choices: ["데시벨", "헤르츠", "칸델라", "파스칼"],
    answer: 0,
    explanation: "데시벨(dB)은 소리의 세기를 비교해 나타내는 단위로, 소음 기준에도 쓰인다.",
    source: "Encyclopaedia Britannica 'decibel'",
    sourceUrl: "https://www.britannica.com/science/decibel"
  },
  {
    id: "sc-02",
    category: "과학",
    question: "건조한 공기의 부피 기준으로 지구 대기에서 가장 많은 기체는?",
    choices: ["질소", "산소", "아르곤", "헬륨"],
    answer: 0,
    explanation: "지구 대기는 부피로 질소가 약 78%, 산소가 약 21%를 차지한다.",
    source: "NASA Earth Fact Sheet",
    sourceUrl: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html"
  },
  {
    id: "sc-03",
    category: "과학",
    question: "'붉은 행성'이라고도 불리는, 태양에서 네 번째로 가까운 행성은?",
    choices: ["화성", "금성", "목성", "수성"],
    answer: 0,
    explanation: "화성은 태양에서 네 번째 행성으로, 밤하늘에서 붉게 보여 '붉은 행성'이라 불린다.",
    source: "Encyclopaedia Britannica 'Mars'",
    sourceUrl: "https://www.britannica.com/place/Mars-planet"
  },
  {
    id: "sc-04",
    category: "과학",
    question: "태양계 행성 가운데 태양에 가장 가까운 궤도를 도는 행성은?",
    choices: ["수성", "금성", "화성", "지구"],
    answer: 0,
    explanation: "수성은 태양계에서 가장 안쪽을 도는 행성이며, 크기도 가장 작다.",
    source: "NASA Science 'Mercury Facts'",
    sourceUrl: "https://science.nasa.gov/mercury/facts/"
  },
  {
    id: "sc-05",
    category: "과학",
    question: "원소를 원자량 순으로 늘어놓아 주기율표를 만들고, 발견되지 않은 원소를 예측한 러시아 화학자는?",
    choices: ["멘델레예프", "아보가드로", "베르셀리우스", "라부아지에"],
    answer: 0,
    explanation: "멘델레예프는 주기율표에 빈칸을 남기고 그 자리에 들어갈 원소의 성질을 예측했다.",
    source: "Encyclopaedia Britannica 'Dmitri Mendeleev'",
    sourceUrl: "https://www.britannica.com/biography/Dmitri-Mendeleev"
  },
  {
    id: "sc-06",
    category: "과학",
    question: "멘델이 유전 법칙을 밝히려고 교배 실험에 쓴 식물은?",
    choices: ["완두", "옥수수", "강낭콩", "보리"],
    answer: 0,
    explanation: "멘델은 완두를 수천 번 교배해 형질이 유전되는 규칙을 찾아냈다.",
    source: "미국 국립인간게놈연구소(NHGRI) 'Mendelian Inheritance'",
    sourceUrl: "https://www.genome.gov/genetics-glossary/Mendelian-Inheritance"
  },
  {
    id: "sc-07",
    category: "과학",
    question: "태양계 행성 가운데 질량이 가장 큰 행성은?",
    choices: ["목성", "토성", "천왕성", "해왕성"],
    answer: 0,
    explanation: "목성은 태양계 행성 가운데 질량과 크기가 모두 가장 큰 행성이다.",
    source: "Encyclopaedia Britannica 'Jupiter'",
    sourceUrl: "https://www.britannica.com/place/Jupiter-planet"
  },
  {
    id: "sc-08",
    category: "과학",
    question: "원자 번호가 1번인 원소는?",
    choices: ["수소", "헬륨", "리튬", "탄소"],
    answer: 0,
    explanation: "수소는 원자핵에 양성자가 하나뿐인, 가장 단순한 원소다.",
    source: "영국 왕립화학회(RSC) 주기율표 'Hydrogen'",
    sourceUrl: "https://periodic-table.rsc.org/element/1/hydrogen"
  },
  {
    id: "sc-09",
    category: "과학",
    question: "뉴턴의 운동 제2법칙에서 힘은 질량과 무엇의 곱인가?",
    choices: ["가속도", "속도", "운동량", "변위"],
    answer: 0,
    explanation: "질량이 일정할 때 물체에 작용하는 힘은 질량과 가속도의 곱(F = ma)이다.",
    source: "NASA Glenn Research Center 'Newton's Laws of Motion'",
    sourceUrl: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/"
  },
  {
    id: "sc-10",
    category: "과학",
    question: "지구의 대륙들이 오랜 시간에 걸쳐 움직였다는 대륙 이동설을 처음 체계적으로 내놓은 과학자는?",
    choices: ["베게너", "허턴", "라이엘", "다윈"],
    answer: 0,
    explanation: "독일의 기상학자 베게너가 대륙 이동설을 처음으로 완전한 형태로 제시했다.",
    source: "Encyclopaedia Britannica 'Alfred Wegener'",
    sourceUrl: "https://www.britannica.com/biography/Alfred-Wegener"
  },
  {
    id: "ac-01",
    category: "예술과 문화",
    question: "파리의 여인 비올레타가 주인공인 오페라 「라 트라비아타」의 작곡가는?",
    choices: ["베르디", "푸치니", "로시니", "바그너"],
    answer: 0,
    explanation: "「라 트라비아타」는 베르디가 작곡한 오페라로, 비올레타와 알프레도의 사랑을 그린다.",
    source: "Encyclopaedia Britannica 'La traviata'",
    sourceUrl: "https://www.britannica.com/topic/La-traviata"
  },
  {
    id: "ac-02",
    category: "예술과 문화",
    question: "소용돌이치는 밤하늘을 그린 「별이 빛나는 밤」(1889)의 화가는?",
    choices: ["반 고흐", "고갱", "세잔", "모네"],
    answer: 0,
    explanation: "네덜란드 화가 반 고흐가 1889년에 그렸으며, 마을 위로 달과 별이 빛나는 밤하늘을 담았다.",
    source: "뉴욕 현대미술관(MoMA) 'The Starry Night'",
    sourceUrl: "https://www.moma.org/collection/works/79802"
  },
  {
    id: "ac-03",
    category: "예술과 문화",
    question: "1937년 스페인 내전 중 폭격당한 도시를 주제로 그린 대형 벽화 「게르니카」의 화가는?",
    choices: ["피카소", "달리", "미로", "고야"],
    answer: 0,
    explanation: "피카소는 1937년 파리 만국 박람회 스페인관에 걸 벽화로 「게르니카」를 그렸다.",
    source: "레이나 소피아 국립미술관 'Guernica'",
    sourceUrl: "https://www.museoreinasofia.es/en/collections/artwork/guernica-0/"
  },
  {
    id: "ac-04",
    category: "예술과 문화",
    question: "「지옥의 문」 꼭대기에 놓을 인물로 처음 구상된 조각 「생각하는 사람」의 작가는?",
    choices: ["로댕", "마욜", "부르델", "클로델"],
    answer: 0,
    explanation: "로댕이 1880년 주문받은 「지옥의 문」 작업에서 나온 대표 조각이다.",
    source: "로댕 미술관 'The Thinker'",
    sourceUrl: "https://www.musee-rodin.fr/en/musee/collections/oeuvres/thinker"
  },
  {
    id: "ac-05",
    category: "예술과 문화",
    question: "마지막 악장에 실러의 시 「환희의 송가」를 합창으로 넣은 교향곡 9번의 작곡가는?",
    choices: ["베토벤", "모차르트", "하이든", "브람스"],
    answer: 0,
    explanation: "베토벤 교향곡 9번의 마지막 악장은 실러의 시 「환희에 부쳐」에 곡을 붙인 합창이다.",
    source: "베토벤하우스 본(Beethoven-Haus Bonn) 'Symphony no. 9 op. 125'",
    sourceUrl: "https://www.beethoven.de/en/work/view/5556714292117504/symphony+no.+9+(d+minor)+op.+125"
  },
  {
    id: "ac-06",
    category: "예술과 문화",
    question: "아버지의 눈을 뜨게 하려고 공양미 삼백 석에 몸을 판 딸의 이야기를 담은 판소리는?",
    choices: ["심청가", "춘향가", "흥보가", "수궁가"],
    answer: 0,
    explanation: "「심청가」는 판소리 다섯 마당 중 하나로, 인당수에 빠진 심청이 살아나는 이야기다.",
    source: "한국민족문화대백과사전 '심청가'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0033942"
  },
  {
    id: "ac-07",
    category: "예술과 문화",
    question: "「씨름」과 「서당」이 실린 풍속화첩을 그린 조선 후기 화가는?",
    choices: ["김홍도", "신윤복", "정선", "김득신"],
    answer: 0,
    explanation: "김홍도의 풍속화 25점을 엮은 화첩으로, 국립중앙박물관에 소장되어 있다.",
    source: "한국민족문화대백과사전 '김홍도 필 풍속도 화첩'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0013639"
  },
  {
    id: "ac-08",
    category: "예술과 문화",
    question: "비가 갠 뒤의 인왕산을 그린 「인왕제색도」의 화가는?",
    choices: ["정선", "김홍도", "신윤복", "강세황"],
    answer: 0,
    explanation: "정선이 76세이던 1751년, 비 온 뒤의 인왕산을 보고 그린 산수화다.",
    source: "우리역사넷(국사편찬위원회) '정선 필 인왕제색도'",
    sourceUrl: "https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_r300776&code=kc_age_30"
  },
  {
    id: "ac-09",
    category: "예술과 문화",
    question: "가야의 가실왕 때 만들어졌다고 전하는 열두 줄 현악기는?",
    choices: ["가야금", "거문고", "해금", "아쟁"],
    answer: 0,
    explanation: "『삼국사기』에 가실왕이 가야금을 만들고 우륵이 이 악기를 위한 12곡을 지었다고 전한다.",
    source: "국립국악원 국악사전 '가야금'",
    sourceUrl: "https://www.gugak.go.kr/ency/topic/view/364"
  },
  {
    id: "ac-10",
    category: "예술과 문화",
    question: "춘향과 이 도령이 광한루에서 처음 만나는 「춘향전」의 배경 고을은?",
    choices: ["남원", "전주", "진주", "나주"],
    answer: 0,
    explanation: "「춘향전」은 남원을 배경으로 춘향과 남원 부사의 아들 이 도령의 사랑을 그린다.",
    source: "한국민족문화대백과사전 '춘향전'",
    sourceUrl: "https://encykorea.aks.ac.kr/Article/E0058064"
  }
];
