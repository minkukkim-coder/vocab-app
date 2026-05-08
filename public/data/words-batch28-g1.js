// Batch 28 — G1 추가 어휘 25개 (외국인학교 1학년 advanced - 추가 보충)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "amazing", meaning: "놀라운", meaningEn: "very wonderful", example: "The view was amazing.", exampleKo: "그 풍경은 놀라웠어요.", emoji: "🤩" },
    { word: "wonderful", meaning: "멋진", meaningEn: "very good", example: "We had a wonderful trip.", exampleKo: "우리는 멋진 여행을 했어요.", emoji: "✨" },
    { word: "huge", meaning: "거대한", meaningEn: "very, very big", example: "The whale is huge.", exampleKo: "고래는 거대해요.", emoji: "🐳" },
    { word: "tiny", meaning: "아주 작은", meaningEn: "very small", example: "The ant is tiny.", exampleKo: "개미는 아주 작아요.", emoji: "🐜" },
    { word: "quick", meaning: "빠른", meaningEn: "fast", example: "The cheetah is quick.", exampleKo: "치타는 빨라요.", emoji: "💨" },
    { word: "slow", meaning: "느린", meaningEn: "not fast", example: "The turtle is slow.", exampleKo: "거북이는 느려요.", emoji: "🐢" },
    { word: "easy", meaning: "쉬운", meaningEn: "not hard", example: "This puzzle is easy.", exampleKo: "이 퍼즐은 쉬워요.", emoji: "✅" },
    { word: "tall", meaning: "키 큰, 높은", meaningEn: "high, not short", example: "The basketball player is tall.", exampleKo: "농구 선수는 키가 커요.", emoji: "📏" },
    { word: "short", meaning: "짧은, 키 작은", meaningEn: "not tall, not long", example: "The pencil is short.", exampleKo: "그 연필은 짧아요.", emoji: "✏️" },
    { word: "young", meaning: "어린", meaningEn: "not old", example: "The puppy is young.", exampleKo: "강아지는 어려요.", emoji: "🐶" },
    { word: "old", meaning: "오래된, 나이 많은", meaningEn: "having lived long", example: "My grandfather is old and wise.", exampleKo: "할아버지는 나이 많고 지혜로워요.", emoji: "👴" },
    { word: "new", meaning: "새로운", meaningEn: "just made", example: "I have a new book.", exampleKo: "새 책이 있어요.", emoji: "✨" },
    { word: "early", meaning: "이른", meaningEn: "before the usual time", example: "I wake up early.", exampleKo: "나는 일찍 일어나요.", emoji: "🌅" },
    { word: "late", meaning: "늦은", meaningEn: "after the usual time", example: "Don't be late for school.", exampleKo: "학교에 늦지 마요.", emoji: "⏰" },
    { word: "soon", meaning: "곧", meaningEn: "in a short time", example: "Mom will be home soon.", exampleKo: "엄마는 곧 집에 와요.", emoji: "⏳" },
    { word: "always", meaning: "항상", meaningEn: "every time", example: "I always brush my teeth.", exampleKo: "나는 항상 양치질해요.", emoji: "♾️" },
    { word: "never", meaning: "절대", meaningEn: "not at any time", example: "Never touch a hot stove.", exampleKo: "뜨거운 난로를 절대 만지지 마요.", emoji: "🚫" },
    { word: "sometimes", meaning: "가끔", meaningEn: "now and then", example: "Sometimes I help my mom cook.", exampleKo: "가끔 엄마 요리를 도와요.", emoji: "👌" },
    { word: "often", meaning: "자주", meaningEn: "many times", example: "We often go to the park.", exampleKo: "우리는 공원에 자주 가요.", emoji: "🌳" },
    { word: "usually", meaning: "보통", meaningEn: "most of the time", example: "I usually walk to school.", exampleKo: "나는 보통 학교까지 걸어요.", emoji: "🚶" },
    { word: "again", meaning: "다시", meaningEn: "one more time", example: "Try again, you can do it!", exampleKo: "다시 해 봐요, 할 수 있어요!", emoji: "🔁" },
    { word: "together", meaning: "함께", meaningEn: "with each other", example: "Let's play together.", exampleKo: "함께 놀아요.", emoji: "👯" },
    { word: "alone", meaning: "혼자", meaningEn: "by yourself", example: "I read alone in my room.", exampleKo: "방에서 혼자 책을 읽어요.", emoji: "🧍" },
    { word: "happy", meaning: "행복한", meaningEn: "feeling joy", example: "I'm happy today.", exampleKo: "오늘 행복해요.", emoji: "😊" },
    { word: "lucky", meaning: "운이 좋은", meaningEn: "having good luck", example: "I'm lucky to have great friends.", exampleKo: "좋은 친구가 있어 행운이에요.", emoji: "🍀" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
