// Batch 49 — G5 최종 보충 (40개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "globalization", meaning: "세계화", meaningEn: "the world becoming more connected", example: "Globalization changes how we trade.", exampleKo: "세계화가 무역 방식을 바꿔요.", emoji: "🌐" },
    { word: "industrialize", meaning: "산업화하다", meaningEn: "to develop industry", example: "The country industrialized quickly.", exampleKo: "그 나라는 빨리 산업화됐어요.", emoji: "🏭" },
    { word: "centralize", meaning: "중앙집중화하다", meaningEn: "to bring under one control", example: "They centralized the offices.", exampleKo: "그들은 사무소를 중앙집중화했어요.", emoji: "🎯" },
    { word: "decentralize", meaning: "분산하다", meaningEn: "to spread out", example: "Decentralize for efficiency.", exampleKo: "효율을 위해 분산해요.", emoji: "🌐" },
    { word: "modernize", meaning: "현대화하다", meaningEn: "to make modern", example: "We modernized the school.", exampleKo: "우리는 학교를 현대화했어요.", emoji: "🏫" },
    { word: "specialize", meaning: "전문화하다", meaningEn: "to focus on one area", example: "Doctors specialize in fields.", exampleKo: "의사들은 분야에 전문화돼요.", emoji: "👨‍⚕️" },
    { word: "generalize", meaning: "일반화하다", meaningEn: "to apply broadly", example: "Don't generalize about people.", exampleKo: "사람들에 대해 일반화하지 마요.", emoji: "🌐" },
    { word: "categorize", meaning: "분류하다", meaningEn: "to put into groups", example: "Categorize the data first.", exampleKo: "먼저 데이터를 분류해요.", emoji: "🗂️" },
    { word: "prioritize", meaning: "우선순위를 두다", meaningEn: "to put first", example: "Prioritize your work.", exampleKo: "일에 우선순위를 둬요.", emoji: "1️⃣" },
    { word: "summarize", meaning: "요약하다", meaningEn: "to give the main points", example: "Summarize the article.", exampleKo: "그 글을 요약해요.", emoji: "📝" },
    { word: "analyze", meaning: "분석하다", meaningEn: "to study carefully", example: "Analyze the test results.", exampleKo: "시험 결과를 분석해요.", emoji: "🔬" },
    { word: "criticize", meaning: "비판하다", meaningEn: "to find faults", example: "Don't just criticize, suggest.", exampleKo: "그냥 비판만 하지 말고 제안해요.", emoji: "💬" },
    { word: "emphasize", meaning: "강조하다", meaningEn: "to give special importance", example: "Emphasize the main point.", exampleKo: "핵심을 강조해요.", emoji: "‼️" },
    { word: "memorize", meaning: "암기하다", meaningEn: "to remember by heart", example: "Memorize the poem.", exampleKo: "그 시를 암기해요.", emoji: "🧠" },
    { word: "minimize", meaning: "최소화하다", meaningEn: "to make as small as possible", example: "Minimize waste.", exampleKo: "낭비를 최소화해요.", emoji: "📉" },
    { word: "maximize", meaning: "최대화하다", meaningEn: "to make as large as possible", example: "Maximize your effort.", exampleKo: "노력을 최대화해요.", emoji: "📈" },
    { word: "optimize", meaning: "최적화하다", meaningEn: "to make as good as possible", example: "Optimize your study time.", exampleKo: "공부 시간을 최적화해요.", emoji: "⚙️" },
    { word: "harmonize", meaning: "조화시키다", meaningEn: "to make work well together", example: "Harmonize different opinions.", exampleKo: "다른 의견을 조화시켜요.", emoji: "🎵" },
    { word: "standardize", meaning: "표준화하다", meaningEn: "to make uniform", example: "We standardize the test format.", exampleKo: "우리는 시험 형식을 표준화해요.", emoji: "📏" },
    { word: "personalize", meaning: "개인화하다", meaningEn: "to make individual", example: "Personalize your learning style.", exampleKo: "당신의 학습 스타일을 개인화해요.", emoji: "👤" },
    { word: "memorable", meaning: "기억할 만한", meaningEn: "worth remembering", example: "It was a memorable trip.", exampleKo: "기억할 만한 여행이었어요.", emoji: "📸" },
    { word: "remarkable", meaning: "주목할 만한", meaningEn: "very impressive", example: "She made remarkable progress.", exampleKo: "그녀는 주목할 만한 진척을 보였어요.", emoji: "⭐" },
    { word: "exceptional", meaning: "예외적인, 뛰어난", meaningEn: "much better than usual", example: "Her work is exceptional.", exampleKo: "그녀의 작품은 뛰어나요.", emoji: "🌟" },
    { word: "outstanding", meaning: "뛰어난", meaningEn: "very excellent", example: "Outstanding students earn awards.", exampleKo: "뛰어난 학생들이 상을 받아요.", emoji: "🏆" },
    { word: "exquisite", meaning: "정교한, 매우 아름다운", meaningEn: "very beautiful and delicate", example: "The painting is exquisite.", exampleKo: "그 그림은 정교해요.", emoji: "💎" },
    { word: "elegant", meaning: "우아한", meaningEn: "graceful and stylish", example: "Her dress was elegant.", exampleKo: "그녀의 드레스는 우아했어요.", emoji: "👗" },
    { word: "graceful", meaning: "우아한", meaningEn: "moving smoothly", example: "Ballet is graceful.", exampleKo: "발레는 우아해요.", emoji: "🩰" },
    { word: "splendid", meaning: "훌륭한, 멋진", meaningEn: "magnificent", example: "The view was splendid.", exampleKo: "전망이 훌륭했어요.", emoji: "🌅" },
    { word: "marvelous", meaning: "놀라운", meaningEn: "wonderful", example: "The show was marvelous.", exampleKo: "공연이 놀라웠어요.", emoji: "✨" },
    { word: "fascinating", meaning: "흥미로운, 매혹적인", meaningEn: "extremely interesting", example: "Space is fascinating.", exampleKo: "우주는 매혹적이에요.", emoji: "🌌" },
    { word: "captivating", meaning: "매혹적인", meaningEn: "holding attention strongly", example: "The story was captivating.", exampleKo: "그 이야기는 매혹적이었어요.", emoji: "📚" },
    { word: "intriguing", meaning: "흥미로운", meaningEn: "making you curious", example: "An intriguing puzzle.", exampleKo: "흥미로운 퍼즐이에요.", emoji: "🧩" },
    { word: "compelling", meaning: "강력한, 흥미를 끄는", meaningEn: "very convincing or interesting", example: "She gave a compelling speech.", exampleKo: "그녀는 강력한 연설을 했어요.", emoji: "🎤" },
    { word: "persuasive", meaning: "설득력 있는", meaningEn: "able to convince", example: "Her essay was persuasive.", exampleKo: "그녀의 에세이는 설득력 있었어요.", emoji: "💬" },
    { word: "convincing", meaning: "설득력 있는", meaningEn: "making one believe", example: "The evidence is convincing.", exampleKo: "그 증거는 설득력 있어요.", emoji: "✅" },
    { word: "logical", meaning: "논리적인", meaningEn: "based on reason", example: "Make a logical argument.", exampleKo: "논리적인 주장을 해요.", emoji: "🧠" },
    { word: "rational", meaning: "이성적인", meaningEn: "based on reason", example: "Be rational, not emotional.", exampleKo: "감정적이 아니라 이성적이 되세요.", emoji: "💡" },
    { word: "reasonable", meaning: "합리적인", meaningEn: "fair and sensible", example: "It's a reasonable price.", exampleKo: "합리적인 가격이에요.", emoji: "💰" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
