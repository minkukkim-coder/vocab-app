// Batch 36 — G3 마지막 보충 (10개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "appreciate", meaning: "감사하다, 진가를 알다", meaningEn: "to value or be thankful for", example: "I appreciate your kindness.", exampleKo: "당신의 친절에 감사해요.", emoji: "🙏" },
    { word: "communicate", meaning: "의사소통하다", meaningEn: "to share information", example: "We communicate every day.", exampleKo: "우리는 매일 의사소통해요.", emoji: "💬" },
    { word: "cooperate", meaning: "협력하다", meaningEn: "to work together", example: "Let's cooperate to solve this.", exampleKo: "이걸 풀기 위해 협력해요.", emoji: "🤝" },
    { word: "contribute", meaning: "기여하다", meaningEn: "to give or help", example: "Contribute to the team.", exampleKo: "팀에 기여해요.", emoji: "✋" },
    { word: "participate", meaning: "참여하다", meaningEn: "to take part in", example: "Participate in class discussions.", exampleKo: "수업 토론에 참여해요.", emoji: "🙋" },
    { word: "investigate", meaning: "조사하다", meaningEn: "to look into carefully", example: "Investigate the problem first.", exampleKo: "문제를 먼저 조사해요.", emoji: "🔍" },
    { word: "examine", meaning: "검토하다", meaningEn: "to look at closely", example: "Examine the evidence.", exampleKo: "증거를 검토해요.", emoji: "🔬" },
    { word: "represent", meaning: "대표하다, 나타내다", meaningEn: "to stand for", example: "The flag represents our country.", exampleKo: "깃발이 우리 나라를 대표해요.", emoji: "🇺🇸" },
    { word: "demonstrate", meaning: "보여주다, 시연하다", meaningEn: "to show clearly", example: "Demonstrate how it works.", exampleKo: "어떻게 작동하는지 시연해요.", emoji: "👨‍🏫" },
    { word: "establish", meaning: "설립하다, 확립하다", meaningEn: "to set up firmly", example: "They established a new school.", exampleKo: "그들은 새 학교를 설립했어요.", emoji: "🏛️" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
