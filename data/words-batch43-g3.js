// Batch 43 — G3 보충 (25개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "tradition", meaning: "전통", meaningEn: "old customs", example: "Family traditions are special.", exampleKo: "가족 전통은 특별해요.", emoji: "🎎" },
    { word: "festival", meaning: "축제", meaningEn: "a special celebration", example: "We attended the music festival.", exampleKo: "음악 축제에 참여했어요.", emoji: "🎊" },
    { word: "carnival", meaning: "카니발", meaningEn: "a fun outdoor event", example: "The carnival has rides.", exampleKo: "카니발에 놀이기구가 있어요.", emoji: "🎡" },
    { word: "parade", meaning: "퍼레이드", meaningEn: "people walking in a show", example: "We watched the parade.", exampleKo: "우리는 퍼레이드를 봤어요.", emoji: "🎉" },
    { word: "fireworks", meaning: "불꽃놀이", meaningEn: "colorful sparks in the sky", example: "Fireworks lit up the night.", exampleKo: "불꽃놀이가 밤을 밝혔어요.", emoji: "🎆" },
    { word: "celebrate", meaning: "축하하다", meaningEn: "to do something special", example: "We celebrate New Year.", exampleKo: "우리는 새해를 축하해요.", emoji: "🎉" },
    { word: "anniversary", meaning: "기념일", meaningEn: "the date of an event", example: "Happy anniversary!", exampleKo: "기념일 축하해요!", emoji: "💐" },
    { word: "birthday", meaning: "생일", meaningEn: "the day you were born", example: "My birthday is in June.", exampleKo: "내 생일은 6월이에요.", emoji: "🎂" },
    { word: "holiday", meaning: "휴일", meaningEn: "a special day off", example: "Christmas is a holiday.", exampleKo: "크리스마스는 휴일이에요.", emoji: "🎄" },
    { word: "vacation", meaning: "휴가", meaningEn: "time away from work", example: "Summer vacation is fun.", exampleKo: "여름 방학은 재미있어요.", emoji: "🏖️" },
    { word: "trip", meaning: "여행", meaningEn: "a journey", example: "We took a family trip.", exampleKo: "우리는 가족 여행을 갔어요.", emoji: "✈️" },
    { word: "tourist", meaning: "관광객", meaningEn: "a person traveling", example: "Tourists love Seoul.", exampleKo: "관광객들이 서울을 좋아해요.", emoji: "📸" },
    { word: "passport", meaning: "여권", meaningEn: "an ID for travel", example: "Bring your passport.", exampleKo: "여권을 가져와요.", emoji: "📕" },
    { word: "luggage", meaning: "짐", meaningEn: "bags for traveling", example: "Pack your luggage.", exampleKo: "짐을 싸요.", emoji: "🧳" },
    { word: "souvenir", meaning: "기념품", meaningEn: "a thing to remember a trip", example: "I bought a souvenir.", exampleKo: "기념품을 샀어요.", emoji: "🎁" },
    { word: "campsite", meaning: "캠핑장", meaningEn: "a place to camp", example: "The campsite is in the forest.", exampleKo: "캠핑장은 숲 속에 있어요.", emoji: "⛺" },
    { word: "tent", meaning: "텐트", meaningEn: "a portable shelter", example: "We slept in a tent.", exampleKo: "우리는 텐트에서 잤어요.", emoji: "⛺" },
    { word: "campfire", meaning: "캠프파이어", meaningEn: "a fire while camping", example: "We sang by the campfire.", exampleKo: "캠프파이어 옆에서 노래했어요.", emoji: "🔥" },
    { word: "marshmallow", meaning: "마시멜로", meaningEn: "a soft sweet candy", example: "Roast marshmallows on the fire.", exampleKo: "불에 마시멜로를 구워요.", emoji: "🍡" },
    { word: "sleepover", meaning: "친구 집에서 자기", meaningEn: "staying at friend's house", example: "I had a fun sleepover.", exampleKo: "재미있게 친구 집에서 잤어요.", emoji: "🛌" },
    { word: "playdate", meaning: "놀기 약속", meaningEn: "a time to play with friends", example: "We had a playdate.", exampleKo: "친구와 놀기 약속을 했어요.", emoji: "🤝" },
    { word: "picnic", meaning: "소풍", meaningEn: "a meal outdoors", example: "Let's have a picnic.", exampleKo: "소풍 가요.", emoji: "🧺" },
    { word: "barbecue", meaning: "바비큐", meaningEn: "outdoor cooking", example: "Dad makes great barbecue.", exampleKo: "아빠는 바비큐를 잘 만들어요.", emoji: "🍖" },
    { word: "sandcastle", meaning: "모래성", meaningEn: "a castle made of sand", example: "We built a sandcastle.", exampleKo: "우리는 모래성을 쌓았어요.", emoji: "🏖️" },
    { word: "treasure hunt", meaning: "보물찾기", meaningEn: "a game to find hidden things", example: "The treasure hunt was fun.", exampleKo: "보물찾기가 재미있었어요.", emoji: "🗺️" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
