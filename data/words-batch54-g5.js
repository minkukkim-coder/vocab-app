// Batch 54 — G5 마지막 미세 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "biography", meaning: "전기", meaningEn: "story of someone's life", example: "I read a biography of Helen Keller.", exampleKo: "헬렌 켈러 전기를 읽었어요.", emoji: "📖" },
    { word: "essay", meaning: "에세이, 논문", meaningEn: "a piece of writing on a topic", example: "Write an essay about your hero.", exampleKo: "당신의 영웅에 관한 에세이를 써요.", emoji: "📝" },
    { word: "introduction", meaning: "도입부", meaningEn: "the start of writing", example: "Make an interesting introduction.", exampleKo: "흥미로운 도입부를 만들어요.", emoji: "🚪" },
    { word: "transition", meaning: "전환", meaningEn: "a change between things", example: "Smooth transitions help writing.", exampleKo: "부드러운 전환이 글쓰기를 도와요.", emoji: "🔄" },
    { word: "main idea", meaning: "주된 생각", meaningEn: "the most important point", example: "Find the main idea of the story.", exampleKo: "이야기의 주된 생각을 찾아요.", emoji: "💡" },
    { word: "key point", meaning: "핵심 요점", meaningEn: "an important idea", example: "Mark the key points.", exampleKo: "핵심 요점을 표시해요.", emoji: "🎯" },
    { word: "evidence", meaning: "증거", meaningEn: "facts that prove something", example: "Provide strong evidence.", exampleKo: "강력한 증거를 제공해요.", emoji: "🔍" },
    { word: "fact", meaning: "사실", meaningEn: "something known to be true", example: "Use facts in your essay.", exampleKo: "에세이에 사실을 사용해요.", emoji: "📌" },
    { word: "opinion", meaning: "의견", meaningEn: "what someone thinks", example: "Everyone has an opinion.", exampleKo: "모두 의견을 가져요.", emoji: "💭" },
    { word: "audience", meaning: "독자, 청중", meaningEn: "the readers or watchers", example: "Know your audience.", exampleKo: "당신의 독자를 알아요.", emoji: "👥" },
    { word: "tone", meaning: "어조", meaningEn: "the feeling of writing", example: "Match the tone to your topic.", exampleKo: "주제에 어조를 맞춰요.", emoji: "🎵" },
    { word: "style", meaning: "스타일", meaningEn: "a way of doing things", example: "Develop your writing style.", exampleKo: "당신의 글쓰기 스타일을 발달시켜요.", emoji: "✨" },
    { word: "voice", meaning: "목소리, 문체", meaningEn: "your unique writing way", example: "Find your own voice.", exampleKo: "당신만의 문체를 찾아요.", emoji: "🗣️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
