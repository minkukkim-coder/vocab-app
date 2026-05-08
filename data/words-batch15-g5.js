// Batch 15 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "acerbic", meaning: "신랄한, 통렬한", meaningEn: "sharp and forthright in tone", example: "Her acerbic critique of contemporary politics gained widespread readership.", exampleKo: "현대 정치에 대한 그녀의 신랄한 비평은 광범위한 독자층을 얻었어요.", emoji: "🌶️" },
    { word: "acrid", meaning: "매캐한, 신랄한", meaningEn: "having an unpleasantly sharp taste or smell", example: "The acrid smoke from the fire spread throughout the neighborhood.", exampleKo: "화재의 매캐한 연기가 동네 전체로 퍼졌어요.", emoji: "💨" },
    { word: "acumen", meaning: "예리함, 통찰력", meaningEn: "keen insight in practical matters", example: "Her business acumen propelled rapid expansion into international markets.", exampleKo: "그녀의 비즈니스 통찰력은 국제 시장으로의 빠른 확장을 추진했어요.", emoji: "🎯" },
    { word: "aegis", meaning: "보호, 후원", meaningEn: "protection, backing, or support", example: "Research proceeds under the aegis of multiple international foundations.", exampleKo: "연구는 여러 국제 재단의 후원 하에 진행돼요.", emoji: "🛡️" },
    { word: "anodyne", meaning: "무난한, 진통제같은", meaningEn: "not likely to cause offense; bland", example: "The corporate statement offered only anodyne reassurances.", exampleKo: "기업 성명은 무난한 안심만 제공했어요.", emoji: "😶" },
    { word: "apprise", meaning: "통지하다, 알리다", meaningEn: "inform or notify", example: "The committee apprised members of recent regulatory developments.", exampleKo: "위원회는 최근 규제 동향을 회원들에게 통지했어요.", emoji: "📧" },
    { word: "avatar", meaning: "화신, 아바타", meaningEn: "manifestation; digital persona", example: "Hindu mythology describes various avatars of divine principles.", exampleKo: "힌두 신화는 신성한 원리의 다양한 화신을 묘사해요.", emoji: "👤" },
    { word: "aver", meaning: "단언하다, 주장하다", meaningEn: "assert or affirm strongly", example: "Counsel averred that the documentary evidence supported their position.", exampleKo: "변호인은 문서 증거가 자신들의 입장을 뒷받침한다고 주장했어요.", emoji: "📋" },
    { word: "baleful", meaning: "위협적인, 사악한", meaningEn: "threatening harm; menacing", example: "The dictator's baleful regime persecuted political opposition systematically.", exampleKo: "그 독재자의 사악한 정권은 정치적 반대를 체계적으로 박해했어요.", emoji: "👹" },
    { word: "banal", meaning: "진부한, 평범한", meaningEn: "lacking originality; commonplace", example: "The film offered only banal observations on contemporary social issues.", exampleKo: "그 영화는 현대 사회 문제에 대한 진부한 관찰만 제공했어요.", emoji: "😴" },
    { word: "bandy", meaning: "주고받다, 논의하다", meaningEn: "pass or exchange remarks", example: "Politicians bandied accusations during the heated debate.", exampleKo: "정치인들은 격렬한 토론 중 비난을 주고받았어요.", emoji: "🔄" },
    { word: "bantam", meaning: "왜소한, 작지만공격적인", meaningEn: "small but aggressive", example: "The bantam boxer compensated for size with extraordinary technique.", exampleKo: "그 작은 권투선수는 비범한 기술로 체격을 보완했어요.", emoji: "🐓" },
    { word: "bastion", meaning: "요새, 보루", meaningEn: "stronghold; defended position", example: "Universities have functioned as bastions of free intellectual inquiry.", exampleKo: "대학은 자유로운 지적 탐구의 보루로 기능해왔어요.", emoji: "🏰" },
    { word: "beguile", meaning: "현혹하다, 매혹하다", meaningEn: "charm in a deceptive way", example: "The con artist beguiled investors with sophisticated promises.", exampleKo: "그 사기꾼은 정교한 약속으로 투자자들을 현혹했어요.", emoji: "🎭" },
    { word: "behoove", meaning: "마땅히해야하다", meaningEn: "be a duty or responsibility", example: "It behooves leaders to consider long-term consequences of decisions.", exampleKo: "지도자들은 결정의 장기적 결과를 고려하는 것이 마땅해요.", emoji: "📋" },
    { word: "belabor", meaning: "장황하게설명하다", meaningEn: "argue or discuss at excessive length", example: "He belabored the obvious point until the audience grew restless.", exampleKo: "그는 청중이 안절부절못할 때까지 명백한 점을 장황하게 설명했어요.", emoji: "🗣️" },
    { word: "bellicose", meaning: "호전적인, 싸우기좋아하는", meaningEn: "demonstrating aggression and willingness to fight", example: "Bellicose rhetoric strained diplomatic relations during the crisis.", exampleKo: "호전적 수사는 위기 동안 외교 관계를 긴장시켰어요.", emoji: "⚔️" },
    { word: "benighted", meaning: "무지한, 미개한", meaningEn: "in a state of moral or intellectual ignorance", example: "Educational reforms targeted benighted areas with limited prior access.", exampleKo: "교육 개혁은 이전 접근이 제한적이었던 미개한 지역을 표적으로 했어요.", emoji: "🌑" },
    { word: "blazon", meaning: "공표하다, 화려하게장식하다", meaningEn: "display prominently; describe heraldically", example: "The corporation blazoned its sustainability commitments across promotional materials.", exampleKo: "그 기업은 홍보 자료 전반에 지속가능성 약속을 화려하게 공표했어요.", emoji: "🏆" },
    { word: "bombast", meaning: "허풍, 호언장담", meaningEn: "high-sounding language with little meaning", example: "Political bombast often substitutes for substantive policy discussion.", exampleKo: "정치적 허풍은 종종 실질적 정책 논의를 대체해요.", emoji: "📢" },
    { word: "brigand", meaning: "산적, 도적", meaningEn: "member of a gang of robbers", example: "Mountain regions historically harbored organized brigand activities.", exampleKo: "산악 지역은 역사적으로 조직된 산적 활동을 품었어요.", emoji: "🏔️" },
    { word: "broach", meaning: "꺼내다, 시작하다", meaningEn: "raise a sensitive subject", example: "She finally broached the topic of organizational restructuring.", exampleKo: "그녀는 마침내 조직 구조조정의 주제를 꺼냈어요.", emoji: "💬" },
    { word: "bromide", meaning: "진부한말, 평범한사람", meaningEn: "trite saying; commonplace remark", example: "The speech offered familiar bromides rather than fresh insights.", exampleKo: "그 연설은 신선한 통찰력보다 익숙한 진부한 말을 제공했어요.", emoji: "💬" },
    { word: "canard", meaning: "허위보도, 풍문", meaningEn: "an unfounded rumor or story", example: "Persistent canards continue circulating despite scholarly refutation.", exampleKo: "지속적인 허위 보도는 학자적 반박에도 불구하고 계속 유포돼요.", emoji: "📰" },
    { word: "carouse", meaning: "흥청거리며마시다", meaningEn: "drink and engage in noisy revelry", example: "Postwar veterans caroused at memorial gatherings honoring fallen comrades.", exampleKo: "전후 베테랑들은 전사한 동지들을 기리는 추모 모임에서 흥청거리며 마셨어요.", emoji: "🍻" },
    { word: "carping", meaning: "흠잡는, 잔소리하는", meaningEn: "complaining persistently about trivial matters", example: "Carping critics rarely offered constructive alternatives.", exampleKo: "흠잡는 비평가들은 건설적 대안을 거의 제공하지 않았어요.", emoji: "💢" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
