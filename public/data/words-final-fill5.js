// Final fill 5
(function () {
  if (typeof VOCABULARY === "undefined") return;

  const G4_ADD = [
    { word: "fairy tale", meaning: "동화", meaningEn: "magical story for kids", example: "Read fairy tales.", exampleKo: "동화를 읽어요.", emoji: "🏰" },
    { word: "bedtime story", meaning: "잠자리 이야기", meaningEn: "story before sleep", example: "Tell bedtime story.", exampleKo: "잠자리 이야기를 해줘요.", emoji: "🛌" }
  ];

  const G5_ADD = [
    { word: "kingdom", meaning: "왕국", meaningEn: "country with king", example: "Ancient kingdom.", exampleKo: "고대 왕국이에요.", emoji: "🏰" },
    { word: "queendom", meaning: "여왕국", meaningEn: "kingdom of queen", example: "A small queendom.", exampleKo: "작은 여왕국이에요.", emoji: "👑" },
    { word: "empire", meaning: "제국", meaningEn: "many countries ruled", example: "Roman empire.", exampleKo: "로마 제국이에요.", emoji: "🏛️" },
    { word: "dynasty", meaning: "왕조", meaningEn: "ruling family", example: "Long dynasty.", exampleKo: "긴 왕조예요.", emoji: "👑" },
    { word: "throne", meaning: "왕좌", meaningEn: "king's seat", example: "Sit on throne.", exampleKo: "왕좌에 앉아요.", emoji: "🪑" },
    { word: "crown", meaning: "왕관", meaningEn: "royal hat", example: "Golden crown.", exampleKo: "황금 왕관이에요.", emoji: "👑" },
    { word: "scepter", meaning: "왕홀", meaningEn: "king's stick", example: "Royal scepter.", exampleKo: "왕의 홀이에요.", emoji: "🪄" },
    { word: "ruler", meaning: "통치자", meaningEn: "leader", example: "Wise ruler.", exampleKo: "현명한 통치자예요.", emoji: "👑" },
    { word: "leader", meaning: "지도자", meaningEn: "head", example: "Strong leader.", exampleKo: "강한 지도자예요.", emoji: "👑" },
    { word: "follower", meaning: "추종자", meaningEn: "person following", example: "Loyal follower.", exampleKo: "충실한 추종자예요.", emoji: "👥" },
    { word: "subject", meaning: "백성", meaningEn: "person under king", example: "Loyal subjects.", exampleKo: "충성스런 백성이에요.", emoji: "👥" },
    { word: "citizen", meaning: "시민", meaningEn: "country member", example: "Good citizen.", exampleKo: "좋은 시민이에요.", emoji: "🏛️" },
    { word: "resident", meaning: "거주자", meaningEn: "person living there", example: "Local resident.", exampleKo: "지역 거주자예요.", emoji: "🏠" },
    { word: "inhabitant", meaning: "거주자", meaningEn: "person living there", example: "Town inhabitants.", exampleKo: "마을 거주자예요.", emoji: "🏘️" },
    { word: "occupant", meaning: "거주자", meaningEn: "person in place", example: "Building occupants.", exampleKo: "건물 거주자예요.", emoji: "🏢" },
    { word: "tenant", meaning: "세입자", meaningEn: "person renting", example: "Good tenant.", exampleKo: "좋은 세입자예요.", emoji: "🏠" },
    { word: "landlord", meaning: "집주인", meaningEn: "rent owner", example: "Kind landlord.", exampleKo: "친절한 집주인이에요.", emoji: "🏘️" },
    { word: "homeowner", meaning: "집주인", meaningEn: "house owner", example: "Proud homeowner.", exampleKo: "자랑스런 집주인이에요.", emoji: "🏠" },
    { word: "neighbor", meaning: "이웃", meaningEn: "person living nearby", example: "Good neighbor.", exampleKo: "좋은 이웃이에요.", emoji: "🏡" },
    { word: "stranger", meaning: "낯선 사람", meaningEn: "unknown person", example: "Avoid strangers.", exampleKo: "낯선 사람을 피해요.", emoji: "👤" },
    { word: "guest", meaning: "손님", meaningEn: "visitor", example: "Welcome guests.", exampleKo: "손님을 환영해요.", emoji: "🤝" },
    { word: "host", meaning: "주인", meaningEn: "person hosting", example: "Great host.", exampleKo: "훌륭한 주인이에요.", emoji: "🍽️" },
    { word: "visitor", meaning: "방문자", meaningEn: "person visiting", example: "Many visitors.", exampleKo: "많은 방문자예요.", emoji: "🚪" },
    { word: "tourist", meaning: "관광객", meaningEn: "person on vacation", example: "Lots of tourists.", exampleKo: "많은 관광객이에요.", emoji: "📸" },
    { word: "traveler", meaning: "여행자", meaningEn: "person traveling", example: "Wise traveler.", exampleKo: "현명한 여행자예요.", emoji: "🧳" }
  ];

  const seenG4 = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of G4_ADD) if (!seenG4.has(w.word.toLowerCase())) { VOCABULARY.G4.push(w); seenG4.add(w.word.toLowerCase()); }
  const seenG5 = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of G5_ADD) if (!seenG5.has(w.word.toLowerCase())) { VOCABULARY.G5.push(w); seenG5.add(w.word.toLowerCase()); }
})();
