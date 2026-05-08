// Batch 31 — G4 마지막 보충 (30개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "innovation", meaning: "혁신", meaningEn: "new ways of doing things", example: "Innovation changes how we live.", exampleKo: "혁신이 우리 삶을 바꿔요.", emoji: "💡" },
    { word: "invention", meaning: "발명", meaningEn: "something newly created", example: "The lightbulb was a great invention.", exampleKo: "전구는 위대한 발명이에요.", emoji: "💡" },
    { word: "technology", meaning: "기술", meaningEn: "tools and machines", example: "Technology helps us learn.", exampleKo: "기술이 우리 학습을 도와요.", emoji: "💻" },
    { word: "engineering", meaning: "공학", meaningEn: "designing and building", example: "Engineering creates bridges.", exampleKo: "공학이 다리를 만들어요.", emoji: "🌉" },
    { word: "robot", meaning: "로봇", meaningEn: "a machine doing tasks", example: "Robots help in factories.", exampleKo: "로봇이 공장에서 도와요.", emoji: "🤖" },
    { word: "computer", meaning: "컴퓨터", meaningEn: "a machine for information", example: "I use a computer for school.", exampleKo: "학교에 컴퓨터를 써요.", emoji: "💻" },
    { word: "internet", meaning: "인터넷", meaningEn: "global computer network", example: "The internet connects the world.", exampleKo: "인터넷이 세계를 연결해요.", emoji: "🌐" },
    { word: "network", meaning: "네트워크, 연결망", meaningEn: "a system of connections", example: "The network is fast.", exampleKo: "그 네트워크는 빨라요.", emoji: "🌐" },
    { word: "digital", meaning: "디지털의", meaningEn: "using numbers in technology", example: "Digital cameras are popular.", exampleKo: "디지털 카메라가 인기예요.", emoji: "📷" },
    { word: "electronic", meaning: "전자의", meaningEn: "using electricity in technology", example: "Phones are electronic devices.", exampleKo: "휴대폰은 전자 기기예요.", emoji: "📱" },
    { word: "communicate", meaning: "의사소통하다", meaningEn: "to share information", example: "We communicate by email.", exampleKo: "우리는 이메일로 의사소통해요.", emoji: "📧" },
    { word: "collaborate", meaning: "협력하다", meaningEn: "to work together", example: "Scientists collaborate worldwide.", exampleKo: "과학자들이 전 세계에서 협력해요.", emoji: "🤝" },
    { word: "cooperate", meaning: "협력하다", meaningEn: "to help each other", example: "Cooperate with your team.", exampleKo: "팀과 협력해요.", emoji: "👥" },
    { word: "contribute", meaning: "기여하다", meaningEn: "to give or help", example: "Each person contributes ideas.", exampleKo: "각 사람이 아이디어에 기여해요.", emoji: "✋" },
    { word: "participate", meaning: "참여하다", meaningEn: "to take part", example: "Participate in class discussions.", exampleKo: "수업 토론에 참여해요.", emoji: "🙋" },
    { word: "compete", meaning: "경쟁하다", meaningEn: "to try to win", example: "Athletes compete for medals.", exampleKo: "선수들이 메달을 위해 경쟁해요.", emoji: "🏆" },
    { word: "competition", meaning: "경쟁, 대회", meaningEn: "a contest", example: "We won the competition.", exampleKo: "우리는 대회에서 우승했어요.", emoji: "🥇" },
    { word: "achievement", meaning: "성취", meaningEn: "what you accomplish", example: "Be proud of your achievements.", exampleKo: "당신의 성취를 자랑스러워해요.", emoji: "🏆" },
    { word: "improvement", meaning: "개선", meaningEn: "becoming better", example: "I see big improvement.", exampleKo: "큰 개선이 보여요.", emoji: "📈" },
    { word: "progress", meaning: "진척", meaningEn: "moving forward", example: "We made progress today.", exampleKo: "오늘 진척이 있었어요.", emoji: "📈" },
    { word: "develop", meaning: "발달하다, 개발하다", meaningEn: "to grow", example: "Skills develop with practice.", exampleKo: "기술은 연습으로 발달해요.", emoji: "🌱" },
    { word: "growth", meaning: "성장", meaningEn: "becoming larger", example: "Plants need water for growth.", exampleKo: "식물은 성장에 물이 필요해요.", emoji: "🌱" },
    { word: "expand", meaning: "확장하다", meaningEn: "to make larger", example: "Read to expand vocabulary.", exampleKo: "어휘를 확장하려고 읽어요.", emoji: "📚" },
    { word: "enhance", meaning: "향상시키다", meaningEn: "to improve", example: "Practice enhances skills.", exampleKo: "연습이 기술을 향상시켜요.", emoji: "⬆️" },
    { word: "upgrade", meaning: "업그레이드하다", meaningEn: "to make better", example: "Upgrade your computer.", exampleKo: "컴퓨터를 업그레이드해요.", emoji: "⬆️" },
    { word: "modernize", meaning: "현대화하다", meaningEn: "to make modern", example: "We modernized the kitchen.", exampleKo: "주방을 현대화했어요.", emoji: "🏗️" },
    { word: "establish", meaning: "설립하다", meaningEn: "to create or set up", example: "They established a charity.", exampleKo: "그들은 자선단체를 설립했어요.", emoji: "🏛️" },
    { word: "found", meaning: "설립하다, 발견했다", meaningEn: "to start an organization", example: "He founded the company.", exampleKo: "그는 회사를 창립했어요.", emoji: "🏢" },
    { word: "organize", meaning: "조직하다, 정리하다", meaningEn: "to arrange", example: "Organize your study materials.", exampleKo: "학습 자료를 정리해요.", emoji: "🗂️" },
    { word: "manage", meaning: "관리하다", meaningEn: "to control or run", example: "She manages the team.", exampleKo: "그녀는 팀을 관리해요.", emoji: "👔" }
  ];
  const seen = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G4.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
