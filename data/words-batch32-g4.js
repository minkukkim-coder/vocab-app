// Batch 32 — G4 마지막 미세 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "review", meaning: "검토하다, 후기", meaningEn: "to look over again", example: "Review your homework before turning in.", exampleKo: "제출 전에 숙제를 검토해요.", emoji: "👁️" },
    { word: "summarize", meaning: "요약하다", meaningEn: "to give main points", example: "Summarize the chapter.", exampleKo: "그 장을 요약해요.", emoji: "📝" },
    { word: "paraphrase", meaning: "다른 말로 바꾸다", meaningEn: "to say in your own words", example: "Paraphrase the quote.", exampleKo: "그 인용문을 다른 말로 바꿔요.", emoji: "🔄" },
    { word: "memorize", meaning: "암기하다", meaningEn: "to remember by heart", example: "Memorize the poem.", exampleKo: "시를 암기해요.", emoji: "🧠" },
    { word: "recite", meaning: "암송하다", meaningEn: "to say from memory", example: "Recite the poem to the class.", exampleKo: "수업에 시를 암송해요.", emoji: "🎤" },
    { word: "comprehend", meaning: "이해하다", meaningEn: "to understand fully", example: "Comprehend the question first.", exampleKo: "먼저 질문을 이해해요.", emoji: "💡" },
    { word: "interpret", meaning: "해석하다", meaningEn: "to explain meaning", example: "Interpret the data carefully.", exampleKo: "데이터를 신중히 해석해요.", emoji: "📊" }
  ];
  const seen = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G4.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
