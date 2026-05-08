// Batch 27 — G1 추가 어휘 30개 (외국인학교 1학년 advanced - 소소한 일상 어휘)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "favorite", meaning: "가장 좋아하는", meaningEn: "the one you like best", example: "Pizza is my favorite food.", exampleKo: "피자가 내가 가장 좋아하는 음식이에요.", emoji: "⭐" },
    { word: "interesting", meaning: "흥미로운", meaningEn: "making you want to learn more", example: "The book was very interesting.", exampleKo: "그 책은 정말 흥미로웠어요.", emoji: "🤩" },
    { word: "different", meaning: "다른", meaningEn: "not the same", example: "We have different ideas.", exampleKo: "우리는 다른 생각을 가지고 있어요.", emoji: "🔄" },
    { word: "difficult", meaning: "어려운", meaningEn: "not easy to do", example: "Math can be difficult.", exampleKo: "수학은 어려울 수 있어요.", emoji: "😖" },
    { word: "simple", meaning: "간단한", meaningEn: "easy to understand", example: "The recipe is simple.", exampleKo: "그 요리법은 간단해요.", emoji: "✅" },
    { word: "useful", meaning: "유용한", meaningEn: "helpful, having a use", example: "A pencil is useful in class.", exampleKo: "연필은 수업에 유용해요.", emoji: "🛠️" },
    { word: "useless", meaning: "쓸모없는", meaningEn: "having no use", example: "A broken pen is useless.", exampleKo: "부러진 펜은 쓸모없어요.", emoji: "🚫" },
    { word: "dangerous", meaning: "위험한", meaningEn: "can cause harm", example: "Crossing without looking is dangerous.", exampleKo: "보지 않고 건너는 건 위험해요.", emoji: "⚠️" },
    { word: "safe", meaning: "안전한", meaningEn: "free from harm", example: "Stay safe near the road.", exampleKo: "도로 근처에서는 안전하게 있어요.", emoji: "🛡️" },
    { word: "delicious", meaning: "맛있는", meaningEn: "very tasty", example: "Mom's soup is delicious.", exampleKo: "엄마의 수프는 맛있어요.", emoji: "😋" },
    { word: "favorite", meaning: "가장 좋아하는", meaningEn: "best-liked", example: "What's your favorite color?", exampleKo: "가장 좋아하는 색이 뭐예요?", emoji: "🌈" },
    { word: "popular", meaning: "인기 있는", meaningEn: "liked by many people", example: "That song is very popular.", exampleKo: "그 노래는 매우 인기 있어요.", emoji: "🎵" },
    { word: "ordinary", meaning: "평범한", meaningEn: "usual, not special", example: "It was an ordinary day.", exampleKo: "평범한 하루였어요.", emoji: "🌤️" },
    { word: "special", meaning: "특별한", meaningEn: "more important than usual", example: "Today is a special day.", exampleKo: "오늘은 특별한 날이에요.", emoji: "✨" },
    { word: "cozy", meaning: "아늑한", meaningEn: "warm and comfortable", example: "My bed is cozy in winter.", exampleKo: "내 침대는 겨울에 아늑해요.", emoji: "🛏️" },
    { word: "messy", meaning: "지저분한", meaningEn: "not clean or tidy", example: "My room is messy today.", exampleKo: "내 방은 오늘 지저분해요.", emoji: "🌀" },
    { word: "tidy", meaning: "정돈된", meaningEn: "clean and in order", example: "Keep your desk tidy.", exampleKo: "책상을 정돈된 상태로 둬요.", emoji: "🧹" },
    { word: "neat", meaning: "깔끔한", meaningEn: "well organized", example: "Her writing is neat.", exampleKo: "그녀의 글씨는 깔끔해요.", emoji: "📝" },
    { word: "loud", meaning: "시끄러운", meaningEn: "making lots of sound", example: "The music is too loud.", exampleKo: "음악이 너무 시끄러워요.", emoji: "🔊" },
    { word: "quiet", meaning: "조용한", meaningEn: "making little sound", example: "Be quiet in the library.", exampleKo: "도서관에서는 조용히 해요.", emoji: "🤫" },
    { word: "soft", meaning: "부드러운", meaningEn: "easy to touch, not hard", example: "The pillow is soft.", exampleKo: "베개가 부드러워요.", emoji: "☁️" },
    { word: "hard", meaning: "딱딱한, 어려운", meaningEn: "firm or difficult", example: "The rock is very hard.", exampleKo: "그 돌은 매우 딱딱해요.", emoji: "🪨" },
    { word: "smooth", meaning: "매끄러운", meaningEn: "even, no bumps", example: "The table is smooth.", exampleKo: "그 테이블은 매끄러워요.", emoji: "✨" },
    { word: "rough", meaning: "거친", meaningEn: "not smooth", example: "Sandpaper feels rough.", exampleKo: "사포는 거칠어요.", emoji: "🪨" },
    { word: "sharp", meaning: "날카로운", meaningEn: "with a fine point or edge", example: "Be careful with the sharp knife.", exampleKo: "날카로운 칼을 조심해요.", emoji: "🔪" },
    { word: "lonely", meaning: "외로운", meaningEn: "feeling alone", example: "The dog felt lonely without us.", exampleKo: "강아지가 우리 없이 외로워했어요.", emoji: "😔" },
    { word: "calm", meaning: "차분한", meaningEn: "not excited", example: "Stay calm during the test.", exampleKo: "시험 중에 차분히 있어요.", emoji: "🧘" },
    { word: "scared", meaning: "무서운, 겁먹은", meaningEn: "feeling fear", example: "I was scared during the storm.", exampleKo: "폭풍 동안 무서웠어요.", emoji: "😨" },
    { word: "angry", meaning: "화난", meaningEn: "feeling mad", example: "Don't be angry at your friend.", exampleKo: "친구에게 화내지 마요.", emoji: "😡" },
    { word: "thankful", meaning: "고마운", meaningEn: "grateful", example: "I'm thankful for my family.", exampleKo: "가족에게 고마워해요.", emoji: "🙏" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
