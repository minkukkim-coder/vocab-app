// Batch 16 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "censorious", meaning: "혹평하는, 비난적인", meaningEn: "severely critical of others", example: "The censorious editorial alienated even sympathetic readers.", exampleKo: "혹평적 사설은 동조적인 독자들조차 멀어지게 했어요.", emoji: "👎" },
    { word: "chary", meaning: "조심스러운, 신중한", meaningEn: "cautiously reluctant", example: "Investors were chary of investments during regulatory uncertainty.", exampleKo: "투자자들은 규제 불확실성 동안 투자에 대해 조심스러웠어요.", emoji: "⚠️" },
    { word: "chauvinist", meaning: "맹목적애국자, 남성우월주의자", meaningEn: "person showing extreme partisan bias", example: "Cultural chauvinists dismiss legitimate critiques of national history.", exampleKo: "문화적 맹목적 애국주의자들은 국가 역사에 대한 정당한 비판을 무시해요.", emoji: "🚩" },
    { word: "chimera", meaning: "키메라, 망상", meaningEn: "fanciful concept; mythical creature", example: "Pursuing perfect efficiency often proves a managerial chimera.", exampleKo: "완벽한 효율성 추구는 종종 경영적 망상으로 입증돼요.", emoji: "🐉" },
    { word: "cipher", meaning: "암호, 0", meaningEn: "code; zero; nonentity", example: "The diplomatic cipher protected sensitive communications.", exampleKo: "외교 암호는 민감한 통신을 보호했어요.", emoji: "🔐" },
    { word: "circumscribe", meaning: "제한하다, 한계를두다", meaningEn: "restrict within limits", example: "Constitutional provisions circumscribe executive emergency powers.", exampleKo: "헌법 조항은 행정부의 비상 권한을 제한해요.", emoji: "🚫" },
    { word: "clamorous", meaning: "시끄러운, 떠들썩한", meaningEn: "noisy and demanding", example: "Clamorous demands for reform finally produced legislative response.", exampleKo: "개혁에 대한 떠들썩한 요구는 마침내 입법적 응답을 만들어냈어요.", emoji: "📢" },
    { word: "clarion", meaning: "맑고우렁찬, 트럼펫의", meaningEn: "loud and clear", example: "Her speech served as a clarion call for institutional reform.", exampleKo: "그녀의 연설은 제도적 개혁을 위한 우렁찬 외침의 역할을 했어요.", emoji: "📯" },
    { word: "cleave", meaning: "쪼개다, 고수하다", meaningEn: "split; cling to", example: "Conservative scholars cleave to traditional interpretive methods.", exampleKo: "보수적 학자들은 전통적 해석 방법을 고수해요.", emoji: "✂️" },
    { word: "clemency", meaning: "관용, 자비", meaningEn: "mercy; lenience", example: "Executive clemency requires careful evaluation of individual circumstances.", exampleKo: "행정부의 관용은 개별 상황에 대한 신중한 평가를 필요로 해요.", emoji: "🤲" },
    { word: "cliché", meaning: "진부한문구", meaningEn: "overused phrase or idea", example: "The author's reliance on cliché diminished narrative impact.", exampleKo: "그 저자의 진부한 문구 의존은 서사적 영향을 감소시켰어요.", emoji: "💬" },
    { word: "coadjutor", meaning: "조수, 보좌신부", meaningEn: "assistant; helper", example: "The coadjutor bishop assumed responsibilities during the diocese transition.", exampleKo: "보좌 주교는 교구 전환 동안 책임을 맡았어요.", emoji: "🤝" },
    { word: "collateral", meaning: "부수적인, 담보", meaningEn: "additional; secondary; security for loan", example: "Collateral damage concerns shaped operational planning decisions.", exampleKo: "부수적 피해 우려가 작전 계획 결정을 형성했어요.", emoji: "🔗" },
    { word: "colloquy", meaning: "대담, 회담", meaningEn: "formal conversation", example: "The colloquy produced unprecedented academic-policy dialogue.", exampleKo: "그 대담은 전례없는 학문-정책 대화를 만들어냈어요.", emoji: "💬" },
    { word: "comity", meaning: "예양, 공손함", meaningEn: "courteous behavior", example: "Diplomatic comity facilitates resolution of cross-border disputes.", exampleKo: "외교적 예양은 국경 간 분쟁 해결을 촉진해요.", emoji: "🤝" },
    { word: "commensurate", meaning: "균형잡힌, 상응하는", meaningEn: "corresponding in size or extent", example: "Compensation should be commensurate with professional responsibilities.", exampleKo: "보상은 전문직 책임과 상응해야 해요.", emoji: "⚖️" },
    { word: "complicity", meaning: "공모, 연루", meaningEn: "involvement in wrongdoing", example: "Investigations expanded to address potential institutional complicity.", exampleKo: "수사는 잠재적인 제도적 공모를 다루기 위해 확대됐어요.", emoji: "🤝" },
    { word: "concatenate", meaning: "연결하다, 사슬같이잇다", meaningEn: "link together in a chain", example: "Programmers concatenate strings to construct dynamic output.", exampleKo: "프로그래머들은 동적 출력을 구성하기 위해 문자열을 연결해요.", emoji: "🔗" },
    { word: "conciliate", meaning: "화해시키다, 달래다", meaningEn: "make peace; appease", example: "Skilled mediators conciliate parties with deeply opposed positions.", exampleKo: "숙련된 중재자들은 깊이 반대되는 입장의 당사자들을 화해시켜요.", emoji: "🕊️" },
    { word: "congeal", meaning: "응결하다, 굳다", meaningEn: "become semi-solid; coalesce", example: "Public opinion gradually congealed around the proposed reform.", exampleKo: "여론은 제안된 개혁을 중심으로 점차 굳어졌어요.", emoji: "🧊" },
    { word: "congenital", meaning: "선천적인, 타고난", meaningEn: "existing from birth", example: "Congenital conditions sometimes require lifelong specialized care.", exampleKo: "선천적 상태는 때때로 평생 전문화된 치료를 필요로 해요.", emoji: "👶" },
    { word: "conglomerate", meaning: "복합기업, 복합체", meaningEn: "large diversified company", example: "Modern conglomerates span multiple unrelated industrial sectors.", exampleKo: "현대 복합기업은 여러 관련없는 산업 부문에 걸쳐있어요.", emoji: "🏢" },
    { word: "congregate", meaning: "모이다, 집합하다", meaningEn: "gather together", example: "Scholars congregate at international conferences for intellectual exchange.", exampleKo: "학자들은 지적 교류를 위해 국제 회의에 모여요.", emoji: "👥" },
    { word: "consign", meaning: "넘겨주다, 위탁하다", meaningEn: "deliver to someone's care", example: "Historical errors should not be consigned to oblivion.", exampleKo: "역사적 오류는 망각으로 보내져서는 안 돼요.", emoji: "📦" },
    { word: "construe", meaning: "해석하다, 추론하다", meaningEn: "interpret; understand", example: "Courts construe statutory language according to established principles.", exampleKo: "법원은 확립된 원칙에 따라 법문 언어를 해석해요.", emoji: "🔍" },
    { word: "contraband", meaning: "밀수품, 금지품", meaningEn: "illegally imported or exported goods", example: "Customs officials confiscated substantial contraband at the border.", exampleKo: "세관 공무원들은 국경에서 상당한 밀수품을 압수했어요.", emoji: "📦" },
    { word: "contrite", meaning: "뉘우치는, 회개하는", meaningEn: "feeling remorse for wrongdoing", example: "His contrite apology acknowledged specific harms caused.", exampleKo: "그의 뉘우치는 사과는 야기된 구체적 해를 인정했어요.", emoji: "😔" },
    { word: "conversant", meaning: "정통한, 친숙한", meaningEn: "familiar with subject", example: "Effective policy advisors must be conversant with multiple disciplines.", exampleKo: "효과적인 정책 자문은 여러 학문에 정통해야 해요.", emoji: "📚" },
    { word: "coquette", meaning: "교태부리는여자", meaningEn: "woman who flirts", example: "Period dramas often feature characters cast as social coquettes.", exampleKo: "시대 드라마는 종종 사회적 교태부리는 여자로 캐스팅된 인물을 특징으로 해요.", emoji: "💃" },
    { word: "cornucopia", meaning: "풍요의뿔, 풍부", meaningEn: "abundant supply of good things", example: "The library offers a cornucopia of scholarly resources.", exampleKo: "그 도서관은 학술 자원의 풍요로움을 제공해요.", emoji: "🌽" },
    { word: "corporeal", meaning: "신체의, 물질적인", meaningEn: "relating to the physical body", example: "Religious traditions distinguish corporeal from spiritual aspects of existence.", exampleKo: "종교 전통은 존재의 신체적 측면과 영적 측면을 구별해요.", emoji: "💪" },
    { word: "corrosive", meaning: "부식성의, 좀먹는", meaningEn: "tending to corrode; cynical", example: "Persistent inequality has corrosive effects on social cohesion.", exampleKo: "지속적 불평등은 사회적 응집력에 좀먹는 영향을 미쳐요.", emoji: "🧪" },
    { word: "cotillion", meaning: "코티용, 사교무도회", meaningEn: "formal ball", example: "Period novels frequently feature elaborate cotillion scenes.", exampleKo: "시대 소설은 자주 정교한 사교무도회 장면을 특징으로 해요.", emoji: "💃" },
    { word: "countenance", meaning: "용모, 지지하다", meaningEn: "facial expression; support", example: "The dean refused to countenance plagiarism in scholarly work.", exampleKo: "학장은 학술 작품에서의 표절을 지지하기를 거부했어요.", emoji: "👤" },
    { word: "cozen", meaning: "속이다, 사기치다", meaningEn: "deceive by trickery", example: "Con artists cozen victims through elaborate confidence schemes.", exampleKo: "사기꾼들은 정교한 신뢰 사기를 통해 피해자들을 속여요.", emoji: "🎭" },
    { word: "crestfallen", meaning: "낙담한, 실의에빠진", meaningEn: "sad and disappointed", example: "Crestfallen candidates absorbed unexpected election results.", exampleKo: "낙담한 후보들은 예상치 못한 선거 결과를 받아들였어요.", emoji: "😔" },
    { word: "crone", meaning: "노파, 마귀할멈", meaningEn: "old woman", example: "Folklore traditions often cast wise crones as repositories of knowledge.", exampleKo: "민속 전통은 종종 지혜로운 노파들을 지식의 저장소로 묘사해요.", emoji: "👵" },
    { word: "crotchety", meaning: "괴팍한, 까다로운", meaningEn: "irritable; eccentric", example: "His crotchety demeanor concealed genuine intellectual generosity.", exampleKo: "그의 괴팍한 태도는 진정한 지적 관대함을 감췄어요.", emoji: "😠" },
    { word: "cruciate", meaning: "십자형의, 십자형으로교차하는", meaningEn: "cross-shaped", example: "Cruciate ligament injuries commonly affect athletes.", exampleKo: "십자인대 부상은 흔히 운동선수에게 영향을 줘요.", emoji: "✝️" },
    { word: "cudgel", meaning: "곤봉, 몽둥이", meaningEn: "short thick stick used as weapon", example: "He took up the cudgel for academic freedom against censorship.", exampleKo: "그는 검열에 대항하여 학문의 자유를 위해 옹호에 나섰어요.", emoji: "🏑" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
