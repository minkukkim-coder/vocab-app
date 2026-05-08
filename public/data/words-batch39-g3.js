// Batch 39 — G3 최종 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "discussion", meaning: "토론", meaningEn: "talking about a topic", example: "We had a fun discussion.", exampleKo: "재미있는 토론을 했어요.", emoji: "💬" },
    { word: "presentation", meaning: "발표", meaningEn: "showing or telling to others", example: "She gave a great presentation.", exampleKo: "그녀는 훌륭한 발표를 했어요.", emoji: "📊" },
    { word: "meaning", meaning: "의미", meaningEn: "what something means", example: "What's the meaning of this word?", exampleKo: "이 단어의 의미는 뭐예요?", emoji: "💭" },
    { word: "language", meaning: "언어", meaningEn: "the words people use", example: "I'm learning a new language.", exampleKo: "새 언어를 배우고 있어요.", emoji: "🗣️" },
    { word: "translate", meaning: "번역하다", meaningEn: "to change languages", example: "Translate from English to Korean.", exampleKo: "영어를 한국어로 번역해요.", emoji: "🌐" },
    { word: "expression", meaning: "표현", meaningEn: "showing thoughts or feelings", example: "Her face had a happy expression.", exampleKo: "그녀의 얼굴은 행복한 표현이 있었어요.", emoji: "😊" },
    { word: "gesture", meaning: "몸짓", meaningEn: "movement to show meaning", example: "She made a friendly gesture.", exampleKo: "그녀는 친절한 몸짓을 했어요.", emoji: "👋" },
    { word: "message", meaning: "메시지", meaningEn: "information sent", example: "Send me a message later.", exampleKo: "나중에 메시지 보내요.", emoji: "✉️" },
    { word: "signal", meaning: "신호", meaningEn: "a sign giving information", example: "The signal turned green.", exampleKo: "신호가 초록색으로 바뀌었어요.", emoji: "🚦" },
    { word: "symbol", meaning: "상징", meaningEn: "something that means more", example: "The dove is a symbol of peace.", exampleKo: "비둘기는 평화의 상징이에요.", emoji: "🕊️" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
