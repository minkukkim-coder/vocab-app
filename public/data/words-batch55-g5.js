// Batch 55 — G5 최종 마감
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "title", meaning: "제목", meaningEn: "the name of a work", example: "What's the title of the book?", exampleKo: "그 책 제목이 뭐예요?", emoji: "📖" },
    { word: "subtitle", meaning: "부제목, 자막", meaningEn: "a smaller title underneath", example: "Read the subtitle for more info.", exampleKo: "더 많은 정보는 부제목을 읽어요.", emoji: "💬" },
    { word: "headline", meaning: "헤드라인, 표제", meaningEn: "the main news title", example: "The headline grabbed my attention.", exampleKo: "그 헤드라인이 내 주의를 끌었어요.", emoji: "📰" },
    { word: "caption", meaning: "캡션, 설명", meaningEn: "text describing a picture", example: "Read the caption under the photo.", exampleKo: "사진 아래 설명을 읽어요.", emoji: "🖼️" },
    { word: "footnote", meaning: "각주", meaningEn: "a note at the bottom of a page", example: "Check the footnote for the source.", exampleKo: "출처는 각주를 확인해요.", emoji: "📝" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
