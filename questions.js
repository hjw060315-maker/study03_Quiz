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
    question: "이집트의 수에즈 운하가 연결하는 두 바다는?",
    choices: ["지중해와 홍해", "지중해와 흑해", "홍해와 아라비아해", "흑해와 카스피해"],
    answer: 0,
    explanation: "수에즈 운하는 지중해와 홍해를 이어, 배가 아프리카를 돌아가지 않게 해 준다.",
    source: "Encyclopaedia Britannica 'Suez Canal'",
    sourceUrl: "https://www.britannica.com/topic/Suez-Canal"
  },
  {
    id: "wg-03",
    category: "세계지리",
    question: "경도 0°인 본초 자오선이 지나는 영국 런던의 지역은?",
    choices: ["그리니치", "웨스트민스터", "캠던", "첼시"],
    answer: 0,
    explanation: "1884년 국제 회의에서 그리니치 천문대를 지나는 경선을 본초 자오선으로 정했다.",
    source: "National Geographic Education 'Prime Meridian'",
    sourceUrl: "https://education.nationalgeographic.org/resource/prime-meridian/"
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
    question: "해발 고도 기준으로 아프리카에서 가장 높은 산인 킬리만자로산이 있는 나라는?",
    choices: ["탄자니아", "케냐", "에티오피아", "우간다"],
    answer: 0,
    explanation: "킬리만자로산은 탄자니아 북동부, 케냐 국경 가까이에 있는 화산이다.",
    source: "Encyclopaedia Britannica 'Kilimanjaro'",
    sourceUrl: "https://www.britannica.com/place/Kilimanjaro"
  },
  {
    id: "wg-10",
    category: "세계지리",
    question: "안데스산맥에 남아 있는 잉카 제국의 유적 마추픽추가 있는 나라는?",
    choices: ["페루", "볼리비아", "칠레", "에콰도르"],
    answer: 0,
    explanation: "마추픽추는 페루의 안데스산맥에 남아 있는 잉카 제국의 대표 유적이다.",
    source: "UNESCO World Heritage Centre 'Historic Sanctuary of Machu Picchu'",
    sourceUrl: "https://whc.unesco.org/en/list/274/"
  },
  {
    id: "sc-01",
    category: "과학",
    question: "식물 세포에서 광합성이 일어나는 세포 소기관은?",
    choices: ["엽록체", "미토콘드리아", "리보솜", "골지체"],
    answer: 0,
    explanation: "엽록체는 빛에너지를 화학 에너지로 바꾸는 광합성이 일어나는 곳이다.",
    source: "Encyclopaedia Britannica 'chloroplast'",
    sourceUrl: "https://www.britannica.com/science/chloroplast"
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
    question: "1928년 세균 배양 접시에 핀 곰팡이에서 페니실린을 발견한 과학자는?",
    choices: ["플레밍", "파스퇴르", "코흐", "제너"],
    answer: 0,
    explanation: "플레밍은 1928년 페니실린을 발견해 1945년 노벨 생리의학상을 받았다.",
    source: "노벨상 공식 사이트 'Sir Alexander Fleming – Facts'",
    sourceUrl: "https://www.nobelprize.org/prizes/medicine/1945/fleming/facts/"
  },
  {
    id: "sc-07",
    category: "과학",
    question: "DNA의 이중 나선 구조 모형을 제안한 두 과학자는?",
    choices: ["왓슨과 크릭", "멘델과 모건", "퀴리와 보어", "파스퇴르와 코흐"],
    answer: 0,
    explanation: "왓슨과 크릭은 핵산의 분자 구조를 밝힌 공로로 노벨 생리의학상을 받았다.",
    source: "노벨상 공식 사이트 'The Nobel Prize in Physiology or Medicine 1962'",
    sourceUrl: "https://www.nobelprize.org/prizes/medicine/1962/summary/"
  },
  {
    id: "sc-08",
    category: "과학",
    question: "적혈구 속에서 산소를 운반하는, 철을 포함한 단백질은?",
    choices: ["헤모글로빈", "인슐린", "케라틴", "콜라겐"],
    answer: 0,
    explanation: "헤모글로빈은 적혈구 속 단백질로, 산소를 몸 곳곳의 조직으로 운반한다.",
    source: "MedlinePlus(미국 국립의학도서관) 'Hemoglobin'",
    sourceUrl: "https://medlineplus.gov/ency/article/003645.htm"
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
    question: "파리 루브르 박물관에 있는 「모나리자」를 그린 화가는?",
    choices: ["레오나르도 다빈치", "미켈란젤로 부오나로티", "라파엘로 산치오", "산드로 보티첼리"],
    answer: 0,
    explanation: "레오나르도 다빈치가 그린 「모나리자」는 루브르 박물관 '국가의 방'에 걸려 있다.",
    source: "루브르 박물관 'From the Mona Lisa to The Wedding Feast at Cana'",
    sourceUrl: "https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana"
  },
  {
    id: "ac-02",
    category: "예술과 문화",
    question: "소용돌이치는 밤하늘을 그린 「별이 빛나는 밤」(1889)의 화가는?",
    choices: ["반 고흐", "고갱", "세잔", "모네"],
    answer: 0,
    explanation: "네덜란드 화가 반 고흐가 1889년에 그린 그림으로, 지금 뉴욕 현대미술관(MoMA)에 있다.",
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
    question: "덴마크 왕자가 아버지를 죽인 숙부에게 복수하려는 비극 「햄릿」의 작가는?",
    choices: ["셰익스피어", "크리스토퍼 말로", "존 밀턴", "벤 존슨"],
    answer: 0,
    explanation: "셰익스피어의 비극으로, 햄릿이 아버지를 죽인 숙부 클로디어스에게 복수하려 한다.",
    source: "폴저 셰익스피어 도서관 'Hamlet'",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/hamlet/"
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
    question: "조선 왕실 사당인 종묘의 제사 때 악기·노래·춤으로 행하며, 2001년 유네스코 무형유산이 된 것은?",
    choices: ["종묘제례악", "문묘제례악", "궁중연례악", "대취타"],
    answer: 0,
    explanation: "종묘제례악은 종묘제례와 함께 2001년 유네스코 인류무형유산으로 등재되었다.",
    source: "국가유산청 궁능유적본부 '무형문화유산 종묘'",
    sourceUrl: "https://royal.khs.go.kr/ROYAL/contents/R105040000.do"
  }
];
