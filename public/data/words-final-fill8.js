// Final fill 8 — 마지막 3개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const G4 = [
    { word: "newsstand", meaning: "신문가판대", meaningEn: "newspaper shop", example: "Buy at newsstand.", exampleKo: "신문가판대에서 사요.", emoji: "📰" },
    { word: "headline news", meaning: "헤드라인 뉴스", meaningEn: "main news", example: "Headline news today.", exampleKo: "오늘 헤드라인 뉴스예요.", emoji: "📺" }
  ];
  const G5 = [
    { word: "ages ago", meaning: "오래 전", meaningEn: "long ago", example: "Ages ago.", exampleKo: "오래 전이에요.", emoji: "⏳" }
  ];
  const seenG4 = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of G4) if (!seenG4.has(w.word.toLowerCase())) { VOCABULARY.G4.push(w); seenG4.add(w.word.toLowerCase()); }
  const seenG5 = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of G5) if (!seenG5.has(w.word.toLowerCase())) { VOCABULARY.G5.push(w); seenG5.add(w.word.toLowerCase()); }
})();
