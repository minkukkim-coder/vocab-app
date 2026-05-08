// Batch 31 — G1 마지막 1개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "smile back", meaning: "마주 미소짓다", meaningEn: "to smile in return", example: "Smile back at your friend.", exampleKo: "친구에게 마주 미소 지어요.", emoji: "😊" },
    { word: "wave hello", meaning: "인사하며 손 흔들기", meaningEn: "to greet with hand", example: "Wave hello when you see them.", exampleKo: "그들을 보면 손 흔들어 인사해요.", emoji: "👋" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
