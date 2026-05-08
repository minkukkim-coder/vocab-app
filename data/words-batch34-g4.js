// Batch 34 — G4 마지막 보충 (25개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "encourage", meaning: "격려하다", meaningEn: "to give support", example: "Coaches encourage athletes.", exampleKo: "코치가 선수를 격려해요.", emoji: "💪" },
    { word: "support", meaning: "지원하다", meaningEn: "to help", example: "Support your team.", exampleKo: "팀을 지원해요.", emoji: "🫂" },
    { word: "celebrate", meaning: "축하하다", meaningEn: "to do something special", example: "We celebrate birthdays.", exampleKo: "우리는 생일을 축하해요.", emoji: "🎉" },
    { word: "achieve", meaning: "달성하다", meaningEn: "to reach a goal", example: "Achieve your dreams.", exampleKo: "꿈을 달성해요.", emoji: "🏆" },
    { word: "succeed", meaning: "성공하다", meaningEn: "to do well", example: "Hard work helps you succeed.", exampleKo: "노력이 성공을 도와요.", emoji: "🌟" },
    { word: "fail", meaning: "실패하다", meaningEn: "to not succeed", example: "Don't fear failing.", exampleKo: "실패를 두려워하지 마요.", emoji: "💪" },
    { word: "challenge", meaning: "도전", meaningEn: "something hard", example: "Take on the challenge.", exampleKo: "도전을 받아들여요.", emoji: "💪" },
    { word: "opportunity", meaning: "기회", meaningEn: "a chance", example: "School gives many opportunities.", exampleKo: "학교는 많은 기회를 줘요.", emoji: "🌟" },
    { word: "responsibility", meaning: "책임", meaningEn: "what you must do", example: "Take responsibility.", exampleKo: "책임을 져요.", emoji: "📋" },
    { word: "reliable", meaning: "믿을 만한", meaningEn: "can be trusted", example: "She is a reliable friend.", exampleKo: "그녀는 믿을 만한 친구예요.", emoji: "👍" },
    { word: "dependable", meaning: "의지할 수 있는", meaningEn: "you can count on", example: "He's dependable.", exampleKo: "그는 의지할 수 있어요.", emoji: "🤝" },
    { word: "trustworthy", meaning: "신뢰할 만한", meaningEn: "deserving trust", example: "Be trustworthy.", exampleKo: "신뢰할 만한 사람이 되어요.", emoji: "🤝" },
    { word: "honesty", meaning: "정직", meaningEn: "telling the truth", example: "Honesty is important.", exampleKo: "정직은 중요해요.", emoji: "💯" },
    { word: "loyalty", meaning: "충성", meaningEn: "always supporting", example: "Show loyalty to friends.", exampleKo: "친구에게 충성을 보여요.", emoji: "🤝" },
    { word: "respect", meaning: "존중", meaningEn: "valuing others", example: "Show respect.", exampleKo: "존중을 보여요.", emoji: "🙏" },
    { word: "kindness", meaning: "친절", meaningEn: "being nice", example: "Show kindness daily.", exampleKo: "매일 친절을 보여요.", emoji: "💖" },
    { word: "courage", meaning: "용기", meaningEn: "being brave", example: "Show courage.", exampleKo: "용기를 보여요.", emoji: "🦁" },
    { word: "wisdom", meaning: "지혜", meaningEn: "good judgment", example: "Listen to wisdom.", exampleKo: "지혜를 들어요.", emoji: "🦉" },
    { word: "patience", meaning: "인내", meaningEn: "waiting calmly", example: "Practice patience.", exampleKo: "인내를 연습해요.", emoji: "⏳" },
    { word: "humility", meaning: "겸손", meaningEn: "not being proud", example: "Humility is a virtue.", exampleKo: "겸손은 미덕이에요.", emoji: "🙏" },
    { word: "gratitude", meaning: "감사", meaningEn: "being thankful", example: "Show gratitude.", exampleKo: "감사를 표현해요.", emoji: "🙏" },
    { word: "compassion", meaning: "연민", meaningEn: "feeling for others", example: "Have compassion.", exampleKo: "연민을 가져요.", emoji: "💕" },
    { word: "empathy", meaning: "공감", meaningEn: "feeling what others feel", example: "Empathy builds friendships.", exampleKo: "공감이 우정을 쌓아요.", emoji: "💞" },
    { word: "tolerance", meaning: "관용", meaningEn: "accepting differences", example: "Practice tolerance.", exampleKo: "관용을 실천해요.", emoji: "🌍" },
    { word: "generosity", meaning: "관대함", meaningEn: "willing to give", example: "Show generosity.", exampleKo: "관대함을 보여요.", emoji: "🎁" }
  ];
  const seen = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G4.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
