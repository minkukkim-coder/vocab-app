// Final fill 2 — G5 마무리 (15개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "memorize", meaning: "암기하다", meaningEn: "to learn by heart", example: "Memorize the spelling.", exampleKo: "철자를 암기해요.", emoji: "🧠" },
    { word: "recall", meaning: "기억해내다", meaningEn: "to remember", example: "Try to recall the answer.", exampleKo: "답을 기억해내려 해요.", emoji: "💭" },
    { word: "recollect", meaning: "회상하다", meaningEn: "to remember", example: "I recollect that day clearly.", exampleKo: "그 날을 분명히 회상해요.", emoji: "💭" },
    { word: "reminisce", meaning: "추억하다", meaningEn: "to remember happily", example: "We reminisce about good times.", exampleKo: "좋은 시절을 추억해요.", emoji: "💕" },
    { word: "nostalgia", meaning: "향수", meaningEn: "longing for the past", example: "Old songs bring nostalgia.", exampleKo: "옛날 노래가 향수를 가져와요.", emoji: "💔" },
    { word: "homesick", meaning: "향수병의", meaningEn: "missing home", example: "She felt homesick at camp.", exampleKo: "그녀는 캠프에서 향수병을 느꼈어요.", emoji: "🏠" },
    { word: "lonely", meaning: "외로운", meaningEn: "feeling alone", example: "Don't feel lonely.", exampleKo: "외로워 마요.", emoji: "😔" },
    { word: "lonesome", meaning: "외로운", meaningEn: "alone", example: "Lonesome nights are hard.", exampleKo: "외로운 밤은 힘들어요.", emoji: "🌙" },
    { word: "solitary", meaning: "혼자의", meaningEn: "alone", example: "She likes solitary walks.", exampleKo: "그녀는 혼자 걷는 걸 좋아해요.", emoji: "🚶" },
    { word: "isolated", meaning: "고립된", meaningEn: "alone or apart", example: "The island is isolated.", exampleKo: "그 섬은 고립돼 있어요.", emoji: "🏝️" },
    { word: "remote", meaning: "외딴, 원격의", meaningEn: "far away", example: "We live in a remote area.", exampleKo: "우리는 외딴 지역에 살아요.", emoji: "🏔️" },
    { word: "distant", meaning: "먼", meaningEn: "far apart", example: "Hear distant thunder.", exampleKo: "멀리서 천둥 소리가 들려요.", emoji: "⛈️" },
    { word: "nearby", meaning: "근처의", meaningEn: "close", example: "There's a park nearby.", exampleKo: "근처에 공원이 있어요.", emoji: "🏞️" },
    { word: "adjacent", meaning: "인접한", meaningEn: "next to", example: "Our rooms are adjacent.", exampleKo: "우리 방은 인접해 있어요.", emoji: "🏘️" },
    { word: "surrounding", meaning: "둘러싸인", meaningEn: "around", example: "Look at the surrounding hills.", exampleKo: "둘러싼 언덕들을 봐요.", emoji: "⛰️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
