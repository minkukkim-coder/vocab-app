// Batch 37 — G3 최종 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "describe", meaning: "묘사하다", meaningEn: "to tell what something is like", example: "Describe your favorite place.", exampleKo: "가장 좋아하는 장소를 묘사해요.", emoji: "🖼️" },
    { word: "explain", meaning: "설명하다", meaningEn: "to make clear", example: "Explain the reason clearly.", exampleKo: "이유를 명확히 설명해요.", emoji: "💡" },
    { word: "discuss", meaning: "토론하다", meaningEn: "to talk about", example: "Discuss the book in groups.", exampleKo: "그룹별로 책을 토론해요.", emoji: "🗣️" },
    { word: "explore", meaning: "탐험하다, 탐구하다", meaningEn: "to investigate", example: "Explore new ideas.", exampleKo: "새 아이디어를 탐구해요.", emoji: "🔭" },
    { word: "imagine", meaning: "상상하다", meaningEn: "to picture in your mind", example: "Imagine the future.", exampleKo: "미래를 상상해요.", emoji: "💭" },
    { word: "create", meaning: "만들다, 창조하다", meaningEn: "to make something new", example: "Create a story together.", exampleKo: "함께 이야기를 만들어요.", emoji: "🎨" },
    { word: "discover", meaning: "발견하다", meaningEn: "to find out", example: "Discover new ideas in books.", exampleKo: "책에서 새 아이디어를 발견해요.", emoji: "📚" },
    { word: "celebrate", meaning: "축하하다", meaningEn: "to do something special", example: "Celebrate your achievements.", exampleKo: "당신의 성취를 축하해요.", emoji: "🎉" },
    { word: "encourage", meaning: "격려하다", meaningEn: "to give support", example: "Friends encourage each other.", exampleKo: "친구는 서로 격려해요.", emoji: "💪" },
    { word: "inspire", meaning: "영감을 주다", meaningEn: "to give good ideas", example: "Books can inspire us.", exampleKo: "책이 우리에게 영감을 줄 수 있어요.", emoji: "✨" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
