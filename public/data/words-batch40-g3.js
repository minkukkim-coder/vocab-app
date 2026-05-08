// Batch 40 — G3 마지막 보충 (15개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "neighbor", meaning: "이웃", meaningEn: "a person living near you", example: "Our neighbor has a friendly dog.", exampleKo: "우리 이웃은 친절한 강아지가 있어요.", emoji: "🏠" },
    { word: "stranger", meaning: "낯선 사람", meaningEn: "a person you don't know", example: "Don't talk to strangers.", exampleKo: "낯선 사람과 말하지 마요.", emoji: "🚶" },
    { word: "guest", meaning: "손님", meaningEn: "a visitor", example: "We had guests for dinner.", exampleKo: "저녁에 손님이 왔어요.", emoji: "👋" },
    { word: "host", meaning: "주인, 진행자", meaningEn: "a person hosting guests", example: "She was a kind host.", exampleKo: "그녀는 친절한 주인이었어요.", emoji: "🎉" },
    { word: "guide", meaning: "가이드, 안내하다", meaningEn: "to show the way", example: "The guide showed us the museum.", exampleKo: "가이드가 박물관을 안내해 줬어요.", emoji: "🗺️" },
    { word: "tourist", meaning: "관광객", meaningEn: "a person visiting for fun", example: "Tourists visit Seoul.", exampleKo: "관광객들이 서울을 방문해요.", emoji: "📸" },
    { word: "souvenir", meaning: "기념품", meaningEn: "something to remember a trip", example: "I bought a souvenir.", exampleKo: "기념품을 샀어요.", emoji: "🎁" },
    { word: "luggage", meaning: "짐, 수하물", meaningEn: "bags for traveling", example: "Pack your luggage carefully.", exampleKo: "짐을 신중히 싸세요.", emoji: "🧳" },
    { word: "passport", meaning: "여권", meaningEn: "an ID for travel", example: "Bring your passport.", exampleKo: "여권을 가져와요.", emoji: "📕" },
    { word: "ticket", meaning: "표, 티켓", meaningEn: "a paper for entry", example: "Buy a ticket online.", exampleKo: "온라인으로 티켓을 사요.", emoji: "🎫" },
    { word: "trip", meaning: "여행", meaningEn: "a short journey", example: "We had a fun trip.", exampleKo: "재미있는 여행을 했어요.", emoji: "🚙" },
    { word: "voyage", meaning: "항해, 긴 여행", meaningEn: "a long sea or air journey", example: "The voyage took a week.", exampleKo: "그 항해는 한 주 걸렸어요.", emoji: "🚢" },
    { word: "captain", meaning: "선장, 대장", meaningEn: "the leader of a ship or team", example: "The captain steered the ship.", exampleKo: "선장이 배를 조종했어요.", emoji: "⚓" },
    { word: "crew", meaning: "선원, 팀", meaningEn: "the workers on a ship", example: "The crew worked hard.", exampleKo: "선원들이 열심히 일했어요.", emoji: "👥" },
    { word: "voyage", meaning: "항해", meaningEn: "a long trip by sea", example: "The voyage was exciting.", exampleKo: "그 항해는 흥미진진했어요.", emoji: "⛵" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
