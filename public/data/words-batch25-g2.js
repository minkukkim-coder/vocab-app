// Batch 25 — G2 마지막 보충 (10개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "library", meaning: "도서관", meaningEn: "a place with many books", example: "We borrow books from the library.", exampleKo: "우리는 도서관에서 책을 빌려요.", emoji: "📚" },
    { word: "magazine", meaning: "잡지", meaningEn: "a paper book with stories", example: "The magazine has many photos.", exampleKo: "그 잡지에는 사진이 많아요.", emoji: "📰" },
    { word: "concert", meaning: "음악회", meaningEn: "a music event", example: "We went to a piano concert.", exampleKo: "우리는 피아노 음악회에 갔어요.", emoji: "🎤" },
    { word: "athlete", meaning: "운동선수", meaningEn: "a person who plays sports", example: "Athletes train every day.", exampleKo: "운동선수는 매일 훈련해요.", emoji: "🏃" },
    { word: "musician", meaning: "음악가", meaningEn: "a person who plays music", example: "The musician played beautifully.", exampleKo: "음악가가 아름답게 연주했어요.", emoji: "🎼" },
    { word: "gardener", meaning: "정원사", meaningEn: "a person who takes care of plants", example: "The gardener planted flowers.", exampleKo: "정원사가 꽃을 심었어요.", emoji: "👨‍🌾" },
    { word: "festival", meaning: "축제", meaningEn: "a special celebration", example: "The festival was colorful.", exampleKo: "그 축제는 화려했어요.", emoji: "🎊" },
    { word: "vacation", meaning: "휴가", meaningEn: "time away from school or work", example: "Summer vacation is fun.", exampleKo: "여름 방학은 재미있어요.", emoji: "🏖️" },
    { word: "weekend", meaning: "주말", meaningEn: "Saturday and Sunday", example: "Weekends are for family time.", exampleKo: "주말은 가족 시간이에요.", emoji: "📅" }
  ];
  const seen = new Set(VOCABULARY.G2.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G2.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
