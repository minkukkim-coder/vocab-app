// Final fill 9 — 마지막 1개 G5
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "lifelong", meaning: "평생의", meaningEn: "for whole life", example: "Lifelong friend.", exampleKo: "평생 친구예요.", emoji: "💕" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) if (!seen.has(w.word.toLowerCase())) { VOCABULARY.G5.push(w); seen.add(w.word.toLowerCase()); }
})();
