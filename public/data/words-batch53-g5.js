// Batch 53 — G5 마지막 미세 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "summarize", meaning: "요약하다", meaningEn: "to give main points briefly", example: "Summarize the article in one paragraph.", exampleKo: "글을 한 단락으로 요약해요.", emoji: "📝" },
    { word: "paraphrase", meaning: "다른 말로 바꾸다", meaningEn: "to express in different words", example: "Paraphrase to show understanding.", exampleKo: "이해를 보이려 다른 말로 바꿔요.", emoji: "🔄" },
    { word: "elaborate", meaning: "자세히 설명하다", meaningEn: "to give more details", example: "Please elaborate on that idea.", exampleKo: "그 아이디어를 자세히 설명해 주세요.", emoji: "💬" },
    { word: "clarify", meaning: "명확히 하다", meaningEn: "to make clear", example: "Clarify your point with examples.", exampleKo: "예시로 당신의 요점을 명확히 해요.", emoji: "💡" },
    { word: "specify", meaning: "구체적으로 명시하다", meaningEn: "to state exactly", example: "Specify the time you'll arrive.", exampleKo: "도착 시간을 구체적으로 말해요.", emoji: "🎯" },
    { word: "generalize", meaning: "일반화하다", meaningEn: "to apply broadly", example: "Don't generalize from one example.", exampleKo: "한 예시로 일반화하지 마요.", emoji: "🌐" },
    { word: "categorize", meaning: "분류하다", meaningEn: "to put into groups", example: "Categorize the information first.", exampleKo: "먼저 정보를 분류해요.", emoji: "🗂️" },
    { word: "classify", meaning: "분류하다", meaningEn: "to organize by type", example: "Classify these animals by species.", exampleKo: "이 동물을 종별로 분류해요.", emoji: "📚" },
    { word: "rank", meaning: "순위, 등급을 매기다", meaningEn: "to put in order of importance", example: "Rank your favorite books.", exampleKo: "좋아하는 책의 순위를 매겨요.", emoji: "🏅" },
    { word: "prioritize", meaning: "우선순위를 두다", meaningEn: "to put first", example: "Prioritize urgent tasks.", exampleKo: "급한 일을 우선시해요.", emoji: "1️⃣" },
    { word: "organize", meaning: "조직하다, 정리하다", meaningEn: "to arrange neatly", example: "Organize your notes.", exampleKo: "당신의 노트를 정리해요.", emoji: "📋" },
    { word: "structure", meaning: "구조, 체계화하다", meaningEn: "to give shape to", example: "Structure your essay clearly.", exampleKo: "에세이를 명확히 구조화해요.", emoji: "🏗️" },
    { word: "outline", meaning: "개요", meaningEn: "main points listed", example: "Make an outline first.", exampleKo: "먼저 개요를 만들어요.", emoji: "📋" },
    { word: "review", meaning: "검토, 후기", meaningEn: "to look over again", example: "Review before the test.", exampleKo: "시험 전에 검토해요.", emoji: "👁️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
