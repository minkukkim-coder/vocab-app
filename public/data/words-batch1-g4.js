// Batch 1 — G4 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "abdicate", meaning: "양위하다, 포기하다", meaningEn: "to give up power", example: "The king abdicated the throne.", exampleKo: "왕이 왕좌를 양위했어요.", emoji: "👑" },
    { word: "abide", meaning: "따르다, 견디다", meaningEn: "to follow rules; or endure", example: "Abide by the law.", exampleKo: "법을 따르세요.", emoji: "⚖️" },
    { word: "abolish", meaning: "폐지하다", meaningEn: "to end officially", example: "The law was abolished.", exampleKo: "그 법은 폐지됐어요.", emoji: "🚫" },
    { word: "abrupt", meaning: "갑작스러운", meaningEn: "sudden", example: "An abrupt change.", exampleKo: "갑작스러운 변화.", emoji: "⚡" },
    { word: "absolute", meaning: "절대적인", meaningEn: "complete, total", example: "Absolute silence.", exampleKo: "절대적인 침묵.", emoji: "💯" },
    { word: "abstain", meaning: "자제하다", meaningEn: "to hold back from", example: "Abstain from voting.", exampleKo: "투표를 자제하세요.", emoji: "🚫" },
    { word: "abstract", meaning: "추상적인", meaningEn: "not concrete", example: "Abstract ideas.", exampleKo: "추상적인 생각들.", emoji: "🎨" },
    { word: "abundance", meaning: "풍부", meaningEn: "a large amount", example: "An abundance of food.", exampleKo: "풍부한 음식.", emoji: "🌾" },
    { word: "acclaim", meaning: "갈채", meaningEn: "loud praise", example: "The book got acclaim.", exampleKo: "그 책은 갈채를 받았어요.", emoji: "👏" },
    { word: "accord", meaning: "일치, 합의", meaningEn: "agreement", example: "We are in accord.", exampleKo: "우리는 일치해요.", emoji: "🤝" },
    { word: "acquaint", meaning: "알리다, 익히게 하다", meaningEn: "to make known", example: "Acquaint yourself with the rules.", exampleKo: "규칙을 익히세요.", emoji: "📋" },
    { word: "adept", meaning: "능숙한", meaningEn: "very skilled", example: "She is adept at math.", exampleKo: "그녀는 수학에 능숙해요.", emoji: "💪" },
    { word: "adore", meaning: "흠모하다", meaningEn: "to love deeply", example: "I adore my pet.", exampleKo: "나는 내 반려동물을 흠모해요.", emoji: "💗" },
    { word: "aesthetic", meaning: "미학적인", meaningEn: "related to beauty", example: "Aesthetic design.", exampleKo: "미학적인 디자인.", emoji: "🎨" },
    { word: "affable", meaning: "사근사근한", meaningEn: "friendly", example: "An affable host.", exampleKo: "사근사근한 주인.", emoji: "😊" },
    { word: "alleviate", meaning: "완화하다", meaningEn: "to ease pain", example: "Medicine alleviates pain.", exampleKo: "약은 통증을 완화해요.", emoji: "💊" },
    { word: "allure", meaning: "매력", meaningEn: "attraction", example: "The allure of the city.", exampleKo: "도시의 매력.", emoji: "✨" },
    { word: "amend", meaning: "수정하다", meaningEn: "to fix or improve", example: "Amend the document.", exampleKo: "문서를 수정하세요.", emoji: "✏️" },
    { word: "amiable", meaning: "상냥한", meaningEn: "pleasant and friendly", example: "An amiable person.", exampleKo: "상냥한 사람.", emoji: "😊" },
    { word: "amplify", meaning: "증폭하다", meaningEn: "to make louder or stronger", example: "Amplify the sound.", exampleKo: "소리를 키우세요.", emoji: "📢" },
    { word: "anarchy", meaning: "무정부, 혼란", meaningEn: "no rules or order", example: "Anarchy in the streets.", exampleKo: "거리의 무정부 상태.", emoji: "💥" },
    { word: "anecdote", meaning: "일화", meaningEn: "a short story", example: "She told an anecdote.", exampleKo: "그녀가 일화를 들려줬어요.", emoji: "📖" },
    { word: "apex", meaning: "정점", meaningEn: "the highest point", example: "The apex of the mountain.", exampleKo: "산의 정점.", emoji: "🔺" },
    { word: "apprehensive", meaning: "우려하는", meaningEn: "worried about something", example: "She felt apprehensive.", exampleKo: "그녀는 우려했어요.", emoji: "😟" },
    { word: "backlash", meaning: "반발", meaningEn: "a strong negative reaction", example: "The decision caused backlash.", exampleKo: "결정이 반발을 일으켰어요.", emoji: "💥" },
    { word: "baffle", meaning: "당황시키다", meaningEn: "to confuse completely", example: "The puzzle baffled me.", exampleKo: "그 퍼즐이 나를 당황시켰어요.", emoji: "😕" },
    { word: "banal", meaning: "평범한, 진부한", meaningEn: "boring and ordinary", example: "A banal comment.", exampleKo: "평범한 발언.", emoji: "😑" },
    { word: "barricade", meaning: "바리케이드", meaningEn: "a barrier", example: "The barricade blocked access.", exampleKo: "바리케이드가 접근을 막았어요.", emoji: "🚧" },
    { word: "brink", meaning: "가장자리, 직전", meaningEn: "the edge", example: "On the brink of victory.", exampleKo: "승리의 가장자리에.", emoji: "🎯" },
    { word: "brusque", meaning: "무뚝뚝한", meaningEn: "blunt and short", example: "A brusque manner.", exampleKo: "무뚝뚝한 태도.", emoji: "😐" },
    { word: "catharsis", meaning: "정화, 카타르시스", meaningEn: "an emotional release", example: "Crying brought catharsis.", exampleKo: "우는 것이 정화를 가져왔어요.", emoji: "💧" },
    { word: "chagrin", meaning: "분함", meaningEn: "annoyance", example: "To my chagrin, I lost.", exampleKo: "분하게도 나는 졌어요.", emoji: "😤" },
    { word: "charlatan", meaning: "사기꾼", meaningEn: "a fake expert", example: "The charlatan was caught.", exampleKo: "사기꾼이 잡혔어요.", emoji: "🎩" },
    { word: "chimera", meaning: "망상, 환상", meaningEn: "a false hope or idea", example: "A chimera of perfection.", exampleKo: "완벽함의 망상.", emoji: "💭" },
    { word: "cite", meaning: "인용하다", meaningEn: "to quote", example: "Cite your sources.", exampleKo: "출처를 인용하세요.", emoji: "📚" },
    { word: "cleave", meaning: "쪼개다", meaningEn: "to split apart", example: "Cleave the wood.", exampleKo: "나무를 쪼개세요.", emoji: "🪓" },
    { word: "clemency", meaning: "관대", meaningEn: "mercy", example: "The judge showed clemency.", exampleKo: "판사가 관대를 베풀었어요.", emoji: "🕊️" },
    { word: "coddle", meaning: "응석을 받다", meaningEn: "to pamper", example: "Don't coddle the kids.", exampleKo: "아이들 응석을 받지 마세요.", emoji: "🍼" },
    { word: "coerce", meaning: "강요하다", meaningEn: "to force someone", example: "Don't coerce me.", exampleKo: "나를 강요하지 마세요.", emoji: "💪" },
    { word: "cognizant", meaning: "알고있는", meaningEn: "aware", example: "Be cognizant of risks.", exampleKo: "위험을 알고 있으세요.", emoji: "👁️" },
    { word: "collude", meaning: "결탁하다", meaningEn: "to plot together", example: "They colluded secretly.", exampleKo: "그들은 몰래 결탁했어요.", emoji: "🤝" },
    { word: "combative", meaning: "호전적인", meaningEn: "eager to fight", example: "A combative attitude.", exampleKo: "호전적 태도.", emoji: "⚔️" },
    { word: "compliance", meaning: "준수", meaningEn: "following rules", example: "Compliance is required.", exampleKo: "준수가 필수예요.", emoji: "📋" }
  ];
  const seen = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G4.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
