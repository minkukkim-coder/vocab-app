// Final fill 6 — last 2 for G5
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "explorer", meaning: "탐험가", meaningEn: "person exploring", example: "Brave explorer.", exampleKo: "용감한 탐험가예요.", emoji: "🧭" },
    { word: "adventurer", meaning: "모험가", meaningEn: "person on adventures", example: "Daring adventurer.", exampleKo: "대담한 모험가예요.", emoji: "🗺️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) if (!seen.has(w.word.toLowerCase())) { VOCABULARY.G5.push(w); seen.add(w.word.toLowerCase()); }
})();
