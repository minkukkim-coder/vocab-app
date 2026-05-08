// Batch 59 — G5 진짜 마지막
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "telescope", meaning: "망원경", meaningEn: "a tool for seeing far things", example: "Use a telescope at night.", exampleKo: "밤에 망원경을 써요.", emoji: "🔭" },
    { word: "microscope", meaning: "현미경", meaningEn: "a tool for seeing tiny things", example: "Microscopes show cells.", exampleKo: "현미경이 세포를 보여줘요.", emoji: "🔬" },
    { word: "laboratory", meaning: "실험실", meaningEn: "a place for science", example: "Scientists work in laboratories.", exampleKo: "과학자들이 실험실에서 일해요.", emoji: "🥽" },
    { word: "research lab", meaning: "연구실", meaningEn: "where research happens", example: "She works in a research lab.", exampleKo: "그녀는 연구실에서 일해요.", emoji: "🔬" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
