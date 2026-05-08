// Batch 24 — G2 추가 어휘 15개 (외국인학교 2학년 advanced - 마지막 보충)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "balance", meaning: "균형", meaningEn: "an even position", example: "Find a balance between work and play.", exampleKo: "일과 놀이 사이의 균형을 찾아요.", emoji: "⚖️" },
    { word: "rhythm", meaning: "리듬", meaningEn: "a regular pattern of sounds", example: "Clap to the rhythm of the song.", exampleKo: "노래 리듬에 맞춰 박수쳐요.", emoji: "🥁" },
    { word: "harmony", meaning: "조화, 화음", meaningEn: "things working well together", example: "The choir sings in harmony.", exampleKo: "합창단이 화음으로 노래해요.", emoji: "🎵" },
    { word: "melody", meaning: "선율, 멜로디", meaningEn: "the tune of a song", example: "I love the melody of this song.", exampleKo: "나는 이 노래의 멜로디가 좋아요.", emoji: "🎶" },
    { word: "instrument", meaning: "악기", meaningEn: "a tool to make music", example: "The violin is my favorite instrument.", exampleKo: "바이올린은 내가 좋아하는 악기예요.", emoji: "🎻" },
    { word: "performance", meaning: "공연, 수행", meaningEn: "doing something in front of people", example: "The performance was wonderful.", exampleKo: "그 공연은 훌륭했어요.", emoji: "🎭" },
    { word: "stage", meaning: "무대", meaningEn: "where performers act or sing", example: "She walked onto the stage.", exampleKo: "그녀는 무대로 걸어 나왔어요.", emoji: "🎪" },
    { word: "audience", meaning: "청중, 관객", meaningEn: "people watching a show", example: "The audience clapped loudly.", exampleKo: "관객들이 큰 박수를 쳤어요.", emoji: "👏" },
    { word: "applause", meaning: "박수", meaningEn: "clapping hands", example: "The play got loud applause.", exampleKo: "그 연극은 큰 박수를 받았어요.", emoji: "👏" },
    { word: "encore", meaning: "앙코르", meaningEn: "another performance after the end", example: "The audience asked for an encore.", exampleKo: "관객이 앙코르를 요청했어요.", emoji: "🎤" },
    { word: "festival", meaning: "축제", meaningEn: "a special celebration", example: "We attend the cherry blossom festival.", exampleKo: "우리는 벚꽃 축제에 가요.", emoji: "🎊" },
    { word: "parade", meaning: "퍼레이드, 행진", meaningEn: "people walking together in a show", example: "The parade had colorful floats.", exampleKo: "퍼레이드에 화려한 차량이 있었어요.", emoji: "🎉" },
    { word: "exhibit", meaning: "전시하다, 전시", meaningEn: "to show in public", example: "The museum exhibits dinosaurs.", exampleKo: "박물관에서 공룡을 전시해요.", emoji: "🦖" },
    { word: "gallery", meaning: "미술관, 화랑", meaningEn: "a place to show art", example: "We visited the art gallery.", exampleKo: "우리는 미술관을 방문했어요.", emoji: "🖼️" },
    { word: "masterpiece", meaning: "걸작", meaningEn: "a great work of art", example: "The painting is a masterpiece.", exampleKo: "그 그림은 걸작이에요.", emoji: "🎨" }
  ];
  const seen = new Set(VOCABULARY.G2.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G2.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
