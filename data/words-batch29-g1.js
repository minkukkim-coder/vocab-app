// Batch 29 — G1 마지막 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "smile", meaning: "미소짓다, 미소", meaningEn: "to make a happy face", example: "Smile when you greet friends.", exampleKo: "친구를 만날 때 미소 지어요.", emoji: "😊" },
    { word: "laugh", meaning: "웃다", meaningEn: "to make a happy sound", example: "We laugh at funny jokes.", exampleKo: "우리는 재미있는 농담에 웃어요.", emoji: "😂" },
    { word: "smile back", meaning: "마주 미소짓다", meaningEn: "to smile in return", example: "She smiled back at me.", exampleKo: "그녀가 나에게 마주 미소 지었어요.", emoji: "😄" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
