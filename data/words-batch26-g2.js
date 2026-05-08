// Batch 26 — G2 마지막 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "rainbow", meaning: "무지개", meaningEn: "colors in the sky after rain", example: "I saw a beautiful rainbow.", exampleKo: "아름다운 무지개를 봤어요.", emoji: "🌈" },
    { word: "thunder", meaning: "천둥", meaningEn: "loud sound in storms", example: "Thunder is loud.", exampleKo: "천둥은 시끄러워요.", emoji: "⛈️" },
    { word: "lightning", meaning: "번개", meaningEn: "flash in stormy sky", example: "Lightning lit up the sky.", exampleKo: "번개가 하늘을 밝혔어요.", emoji: "⚡" },
    { word: "rainstorm", meaning: "폭풍우", meaningEn: "a strong rain", example: "We stayed inside during the rainstorm.", exampleKo: "폭풍우 동안 안에 있었어요.", emoji: "🌧️" },
    { word: "snowstorm", meaning: "눈보라", meaningEn: "heavy snow with wind", example: "School closed for the snowstorm.", exampleKo: "눈보라로 학교가 휴교했어요.", emoji: "❄️" }
  ];
  const seen = new Set(VOCABULARY.G2.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G2.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
