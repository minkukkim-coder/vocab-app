// Batch 23 — G2 추가 어휘 25개 (외국인학교 2학년 advanced - 보충)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "imagine", meaning: "상상하다", meaningEn: "to picture in your mind", example: "Imagine a world without TV.", exampleKo: "TV가 없는 세상을 상상해 봐요.", emoji: "💭" },
    { word: "wonder", meaning: "궁금해하다", meaningEn: "to think with curiosity", example: "I wonder what's in the box.", exampleKo: "상자 안에 뭐가 있는지 궁금해요.", emoji: "🤔" },
    { word: "decide", meaning: "결정하다", meaningEn: "to make a choice", example: "Decide which game to play.", exampleKo: "어떤 게임을 할지 결정해요.", emoji: "✅" },
    { word: "remember", meaning: "기억하다", meaningEn: "to keep in mind", example: "Remember to lock the door.", exampleKo: "문 잠그는 걸 기억해요.", emoji: "🧠" },
    { word: "discover", meaning: "발견하다", meaningEn: "to find something new", example: "We discover new things every day.", exampleKo: "우리는 매일 새 걸 발견해요.", emoji: "🔍" },
    { word: "explore", meaning: "탐험하다", meaningEn: "to look around new places", example: "Let's explore the museum.", exampleKo: "박물관을 탐험해 봐요.", emoji: "🧭" },
    { word: "examine", meaning: "조사하다, 살피다", meaningEn: "to look at carefully", example: "The doctor examined my throat.", exampleKo: "의사가 내 목을 살폈어요.", emoji: "🔬" },
    { word: "search", meaning: "찾다, 검색하다", meaningEn: "to look for something", example: "Search for the lost key.", exampleKo: "잃어버린 열쇠를 찾아요.", emoji: "🔎" },
    { word: "achieve", meaning: "달성하다, 이루다", meaningEn: "to do successfully", example: "She achieved her goal.", exampleKo: "그녀는 목표를 달성했어요.", emoji: "🏆" },
    { word: "succeed", meaning: "성공하다", meaningEn: "to do well", example: "Hard work helps you succeed.", exampleKo: "노력하면 성공해요.", emoji: "🌟" },
    { word: "encourage", meaning: "격려하다", meaningEn: "to give hope and support", example: "Parents encourage their children.", exampleKo: "부모님이 아이를 격려해요.", emoji: "💪" },
    { word: "celebrate", meaning: "축하하다", meaningEn: "to do something special for an event", example: "We celebrate Korean Thanksgiving.", exampleKo: "우리는 추석을 축하해요.", emoji: "🎉" },
    { word: "respect", meaning: "존경하다, 존중하다", meaningEn: "to value others", example: "Respect different opinions.", exampleKo: "다른 의견을 존중해요.", emoji: "🙏" },
    { word: "protect", meaning: "보호하다", meaningEn: "to keep safe", example: "We protect our pets.", exampleKo: "우리는 반려동물을 보호해요.", emoji: "🛡️" },
    { word: "rescue", meaning: "구조하다", meaningEn: "to save from danger", example: "Firefighters rescue people.", exampleKo: "소방관이 사람을 구조해요.", emoji: "🚒" },
    { word: "wisdom", meaning: "지혜", meaningEn: "good judgment", example: "Grandparents have wisdom.", exampleKo: "조부모님은 지혜가 있어요.", emoji: "🦉" },
    { word: "courage", meaning: "용기", meaningEn: "being brave", example: "It takes courage to try new things.", exampleKo: "새 것을 시도하려면 용기가 필요해요.", emoji: "🦁" },
    { word: "adventure", meaning: "모험", meaningEn: "an exciting trip", example: "Camping is a fun adventure.", exampleKo: "캠핑은 재미있는 모험이에요.", emoji: "🗺️" },
    { word: "magnificent", meaning: "웅장한", meaningEn: "very impressive and beautiful", example: "The castle was magnificent.", exampleKo: "그 성은 웅장했어요.", emoji: "🏰" },
    { word: "peaceful", meaning: "평화로운", meaningEn: "calm and quiet", example: "The forest is peaceful.", exampleKo: "숲은 평화로워요.", emoji: "☮️" },
    { word: "valuable", meaning: "가치 있는", meaningEn: "worth a lot", example: "Time is very valuable.", exampleKo: "시간은 매우 가치 있어요.", emoji: "💎" },
    { word: "education", meaning: "교육", meaningEn: "the process of learning", example: "Education opens many doors.", exampleKo: "교육은 많은 문을 열어 줘요.", emoji: "🎓" },
    { word: "knowledge", meaning: "지식", meaningEn: "what you know and understand", example: "Books give us knowledge.", exampleKo: "책은 우리에게 지식을 줘요.", emoji: "📚" },
    { word: "imagination", meaning: "상상력", meaningEn: "the ability to create ideas", example: "Children have great imagination.", exampleKo: "아이들은 훌륭한 상상력이 있어요.", emoji: "💭" },
    { word: "passion", meaning: "열정", meaningEn: "very strong feeling", example: "She has a passion for music.", exampleKo: "그녀는 음악에 대한 열정이 있어요.", emoji: "❤️‍🔥" }
  ];
  const seen = new Set(VOCABULARY.G2.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G2.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
