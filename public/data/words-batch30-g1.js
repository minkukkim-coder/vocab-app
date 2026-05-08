// Batch 30 — G1 마지막 1개 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "kindness", meaning: "친절", meaningEn: "being nice to others", example: "Show kindness every day.", exampleKo: "매일 친절을 보여요.", emoji: "💖" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
