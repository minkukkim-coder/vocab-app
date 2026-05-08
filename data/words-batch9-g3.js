// Batch 9 — G3 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "aboriginal", meaning: "원주민의", meaningEn: "indigenous to a region", example: "The museum displays aboriginal artifacts from prehistoric times.", exampleKo: "박물관은 선사 시대의 원주민 유물을 전시해요.", emoji: "🪶" },
    { word: "accentual", meaning: "강세의", meaningEn: "relating to stress", example: "English poetry often uses accentual rhythms to create emphasis.", exampleKo: "영시는 강조를 만들기 위해 강세 리듬을 자주 사용해요.", emoji: "🎵" },
    { word: "accost", meaning: "다가가 말 걸다", meaningEn: "to approach and address", example: "A stranger tried to accost him on the street last night.", exampleKo: "어젯밤 거리에서 낯선 사람이 그에게 말을 걸려고 했어요.", emoji: "🗣️" },
    { word: "acolyte", meaning: "추종자", meaningEn: "a devoted follower", example: "The professor was surrounded by acolytes eager to learn his methods.", exampleKo: "교수는 그의 방법을 배우려는 추종자들에 둘러싸여 있었어요.", emoji: "👥" },
    { word: "acquittal", meaning: "무죄 판결", meaningEn: "judgment of not guilty", example: "His acquittal came after months of intense legal proceedings.", exampleKo: "수개월간의 치열한 법적 절차 끝에 그의 무죄가 선고되었어요.", emoji: "⚖️" },
    { word: "acuity", meaning: "예리함", meaningEn: "sharpness of perception", example: "Her mental acuity remained remarkable throughout her long career.", exampleKo: "그녀의 정신적 예리함은 긴 경력 내내 놀라울 정도였어요.", emoji: "🎯" },
    { word: "adoptive", meaning: "양자의", meaningEn: "related by adoption", example: "His adoptive parents raised him with great love and care.", exampleKo: "그의 양부모는 큰 사랑과 보살핌으로 그를 키웠어요.", emoji: "👨‍👩‍👦" },
    { word: "aggressor", meaning: "공격자", meaningEn: "one who attacks", example: "International law defines clear consequences for any military aggressor.", exampleKo: "국제법은 군사적 공격자에 대한 명확한 결과를 규정해요.", emoji: "⚔️" },
    { word: "agility", meaning: "민첩성", meaningEn: "ability to move quickly", example: "Mental agility is essential for solving complex analytical problems.", exampleKo: "정신적 민첩성은 복잡한 분석 문제를 해결하는 데 필수적이에요.", emoji: "🤸" },
    { word: "ahistorical", meaning: "비역사적인", meaningEn: "lacking historical context", example: "The author's ahistorical approach ignores important social conditions.", exampleKo: "저자의 비역사적 접근법은 중요한 사회적 조건을 무시해요.", emoji: "📚" },
    { word: "alabaster", meaning: "설화석고", meaningEn: "white translucent stone", example: "The sculpture was carved from a single block of alabaster.", exampleKo: "그 조각상은 설화석고 단일 블록에서 조각되었어요.", emoji: "🏛️" },
    { word: "allegorical", meaning: "우화적인", meaningEn: "expressing symbolic meaning", example: "The novel uses allegorical figures to critique modern political systems.", exampleKo: "그 소설은 현대 정치 체제를 비판하기 위해 우화적 인물을 사용해요.", emoji: "🎭" },
    { word: "alpine", meaning: "고산의", meaningEn: "of high mountains", example: "Alpine plants have adapted to survive in extreme weather conditions.", exampleKo: "고산 식물은 극한의 기상 조건에서 살아남도록 적응했어요.", emoji: "🏔️" },
    { word: "ample", meaning: "충분한", meaningEn: "more than enough", example: "Researchers had ample evidence to support their main hypothesis.", exampleKo: "연구자들은 주요 가설을 뒷받침할 충분한 증거를 가지고 있었어요.", emoji: "📦" },
    { word: "anglophile", meaning: "영국 애호가", meaningEn: "lover of English culture", example: "As a true anglophile, she visits London at least annually.", exampleKo: "진정한 영국 애호가로서 그녀는 적어도 매년 런던을 방문해요.", emoji: "🇬🇧" },
    { word: "antelope", meaning: "영양", meaningEn: "deerlike mammal", example: "The antelope's speed allows it to escape from most natural predators.", exampleKo: "영양의 속도는 대부분의 천적으로부터 탈출할 수 있게 해요.", emoji: "🦌" },
    { word: "apex predator", meaning: "최상위 포식자", meaningEn: "top of food chain", example: "Wolves serve as an apex predator that regulates ecosystem populations.", exampleKo: "늑대는 생태계 개체수를 조절하는 최상위 포식자 역할을 해요.", emoji: "🐺" },
    { word: "appendix", meaning: "부록", meaningEn: "supplementary material", example: "The book's appendix contains detailed statistics supporting the main argument.", exampleKo: "그 책의 부록에는 주요 주장을 뒷받침하는 자세한 통계가 포함되어 있어요.", emoji: "📑" },
    { word: "aptitude", meaning: "적성", meaningEn: "natural ability", example: "Her aptitude for mathematics was evident from a very young age.", exampleKo: "그녀의 수학에 대한 적성은 아주 어린 나이부터 분명했어요.", emoji: "🧠" },
    { word: "archipelagic", meaning: "군도의", meaningEn: "relating to island groups", example: "The archipelagic nation faces unique challenges in managing maritime borders.", exampleKo: "군도 국가는 해양 경계 관리에서 독특한 어려움에 직면해요.", emoji: "🏝️" },
    { word: "aristocrat", meaning: "귀족", meaningEn: "member of nobility", example: "The aristocrat lost his estates during the revolutionary upheaval.", exampleKo: "그 귀족은 혁명적 격변 동안 영지를 잃었어요.", emoji: "👑" },
    { word: "artisanal", meaning: "장인의", meaningEn: "made by skilled craft", example: "The town is famous for its artisanal cheeses and traditional bread.", exampleKo: "그 마을은 장인이 만든 치즈와 전통 빵으로 유명해요.", emoji: "🧀" },
    { word: "assessor", meaning: "평가자", meaningEn: "one who evaluates", example: "An independent assessor reviewed the property's market value last month.", exampleKo: "독립 평가자가 지난달 부동산의 시장 가치를 검토했어요.", emoji: "📋" },
    { word: "automate", meaning: "자동화하다", meaningEn: "to operate automatically", example: "Companies increasingly automate routine tasks to improve overall efficiency.", exampleKo: "기업들은 전반적인 효율성을 향상시키기 위해 일상적인 업무를 점점 더 자동화해요.", emoji: "🤖" },
    { word: "avalanche", meaning: "눈사태", meaningEn: "mass of snow falling", example: "An avalanche destroyed the mountain village in just a few minutes.", exampleKo: "눈사태가 단 몇 분 만에 산악 마을을 파괴했어요.", emoji: "🏔️" },
    { word: "babbling", meaning: "재잘거림", meaningEn: "rapid unclear speech", example: "The babbling of the brook created a peaceful background atmosphere.", exampleKo: "시냇물이 졸졸 흐르는 소리가 평화로운 배경 분위기를 만들어냈어요.", emoji: "🗣️" },
    { word: "backdrop", meaning: "배경", meaningEn: "scenic background", example: "The mountains formed a stunning backdrop for the wedding photographs.", exampleKo: "산들이 결혼식 사진의 멋진 배경이 되었어요.", emoji: "🏞️" },
    { word: "bailiwick", meaning: "관할 영역", meaningEn: "area of expertise", example: "Constitutional law is firmly within her professional bailiwick at university.", exampleKo: "헌법은 대학에서 그녀의 전문 분야에 확고하게 속해요.", emoji: "🎓" },
    { word: "ballast", meaning: "안정 장치", meaningEn: "stabilizing weight", example: "The ship needed additional ballast to remain stable in rough seas.", exampleKo: "그 배는 거친 바다에서 안정을 유지하기 위해 추가 평형수가 필요했어요.", emoji: "⚓" },
    { word: "bandolier", meaning: "탄띠", meaningEn: "ammunition belt", example: "The historical figure was depicted wearing a bandolier across his chest.", exampleKo: "그 역사적 인물은 가슴에 탄띠를 메고 있는 것으로 묘사되었어요.", emoji: "🎖️" },
    { word: "barbarian", meaning: "야만인", meaningEn: "uncivilized person", example: "Roman writers often described foreign tribes as dangerous barbarian invaders.", exampleKo: "로마 작가들은 종종 외국 부족들을 위험한 야만인 침략자로 묘사했어요.", emoji: "⚔️" },
    { word: "baroque", meaning: "바로크의", meaningEn: "ornate artistic style", example: "The baroque cathedral features elaborate decorations and dramatic visual effects.", exampleKo: "바로크 양식의 대성당은 정교한 장식과 극적인 시각 효과를 특징으로 해요.", emoji: "⛪" },
    { word: "bartering", meaning: "물물교환", meaningEn: "trading without money", example: "Before currency, bartering was the primary method of economic exchange.", exampleKo: "화폐 이전에는 물물교환이 주요 경제 교환 방법이었어요.", emoji: "🔄" },
    { word: "battalion", meaning: "대대", meaningEn: "large military unit", example: "An entire battalion was deployed to secure the strategic location.", exampleKo: "전체 대대가 전략적 위치를 확보하기 위해 배치되었어요.", emoji: "🪖" },
    { word: "beatitude", meaning: "지복", meaningEn: "supreme blessedness", example: "The poet described mystical experiences of profound spiritual beatitude.", exampleKo: "시인은 깊은 영적 지복의 신비로운 경험을 묘사했어요.", emoji: "✨" },
    { word: "befell", meaning: "닥쳤다", meaningEn: "happened to", example: "Misfortune befell the family during the harsh winter season.", exampleKo: "혹독한 겨울 동안 그 가족에게 불행이 닥쳤어요.", emoji: "💧" },
    { word: "beggar", meaning: "거지", meaningEn: "person who begs", example: "The novel's beggar character symbolizes the social inequalities of that era.", exampleKo: "소설의 거지 캐릭터는 그 시대의 사회적 불평등을 상징해요.", emoji: "🪙" },
    { word: "behaviorism", meaning: "행동주의", meaningEn: "psychology of behavior", example: "Behaviorism dominated psychology research throughout much of the twentieth century.", exampleKo: "행동주의는 20세기의 많은 기간 동안 심리학 연구를 지배했어요.", emoji: "🧠" },
    { word: "benchmark", meaning: "기준", meaningEn: "standard for comparison", example: "The study established a new benchmark for measuring economic productivity globally.", exampleKo: "그 연구는 세계적으로 경제 생산성을 측정하는 새로운 기준을 확립했어요.", emoji: "📏" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
