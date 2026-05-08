// Batch 42 — G3 마지막 보충 (10개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "kingdom", meaning: "왕국", meaningEn: "a country ruled by a king", example: "The kingdom was peaceful.", exampleKo: "그 왕국은 평화로웠어요.", emoji: "🏰" },
    { word: "queen", meaning: "여왕", meaningEn: "a female ruler", example: "The queen was kind.", exampleKo: "여왕은 친절했어요.", emoji: "👑" },
    { word: "king", meaning: "왕", meaningEn: "a male ruler", example: "The king made laws.", exampleKo: "왕이 법을 만들었어요.", emoji: "👑" },
    { word: "prince", meaning: "왕자", meaningEn: "a king's son", example: "The prince was brave.", exampleKo: "왕자는 용감했어요.", emoji: "🤴" },
    { word: "princess", meaning: "공주", meaningEn: "a king's daughter", example: "The princess was wise.", exampleKo: "공주는 현명했어요.", emoji: "👸" },
    { word: "knight", meaning: "기사", meaningEn: "a brave warrior", example: "The knight rode a horse.", exampleKo: "기사가 말을 탔어요.", emoji: "🏇" },
    { word: "dragon", meaning: "용", meaningEn: "a fire-breathing creature", example: "The dragon was huge.", exampleKo: "용은 거대했어요.", emoji: "🐉" },
    { word: "wizard", meaning: "마법사", meaningEn: "a person who does magic", example: "The wizard cast a spell.", exampleKo: "마법사가 주문을 걸었어요.", emoji: "🧙" },
    { word: "fairy", meaning: "요정", meaningEn: "a magical small creature", example: "Fairies have wings.", exampleKo: "요정은 날개가 있어요.", emoji: "🧚" },
    { word: "spell", meaning: "주문, 철자를 말하다", meaningEn: "magic words or to say letters", example: "Spell the word slowly.", exampleKo: "그 단어 철자를 천천히 말해요.", emoji: "✨" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
