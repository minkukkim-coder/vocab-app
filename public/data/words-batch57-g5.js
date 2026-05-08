// Batch 57 — G5 마지막 보충 (40개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "communicate", meaning: "의사소통하다", meaningEn: "to share information", example: "Good leaders communicate well.", exampleKo: "좋은 지도자는 의사소통을 잘해요.", emoji: "💬" },
    { word: "collaborate", meaning: "협력하다", meaningEn: "to work together", example: "Scientists collaborate worldwide.", exampleKo: "과학자들이 전 세계에서 협력해요.", emoji: "🤝" },
    { word: "cooperate", meaning: "협력하다", meaningEn: "to help each other", example: "Cooperate as a team.", exampleKo: "팀으로 협력해요.", emoji: "👥" },
    { word: "negotiate", meaning: "협상하다", meaningEn: "to talk to agree", example: "Negotiate fair terms.", exampleKo: "공정한 조건을 협상해요.", emoji: "💬" },
    { word: "compromise", meaning: "타협", meaningEn: "agreement with give-take", example: "Compromise is needed.", exampleKo: "타협이 필요해요.", emoji: "⚖️" },
    { word: "consensus", meaning: "합의", meaningEn: "general agreement", example: "Reach a consensus.", exampleKo: "합의에 도달해요.", emoji: "🤝" },
    { word: "agreement", meaning: "동의", meaningEn: "common understanding", example: "We have an agreement.", exampleKo: "우리는 동의했어요.", emoji: "✅" },
    { word: "disagreement", meaning: "불일치", meaningEn: "different opinions", example: "There was disagreement.", exampleKo: "불일치가 있었어요.", emoji: "❌" },
    { word: "decision", meaning: "결정", meaningEn: "a choice", example: "Make a wise decision.", exampleKo: "현명한 결정을 해요.", emoji: "💡" },
    { word: "choice", meaning: "선택", meaningEn: "what you pick", example: "Make a good choice.", exampleKo: "좋은 선택을 해요.", emoji: "🤔" },
    { word: "option", meaning: "선택지", meaningEn: "a choice you can make", example: "Consider all options.", exampleKo: "모든 선택지를 고려해요.", emoji: "🎯" },
    { word: "alternative", meaning: "대안", meaningEn: "a different choice", example: "Find an alternative.", exampleKo: "대안을 찾아요.", emoji: "🔄" },
    { word: "solution", meaning: "해결책", meaningEn: "an answer", example: "Find a solution.", exampleKo: "해결책을 찾아요.", emoji: "💡" },
    { word: "problem", meaning: "문제", meaningEn: "something to solve", example: "Solve the problem.", exampleKo: "문제를 해결해요.", emoji: "🧩" },
    { word: "challenge", meaning: "도전", meaningEn: "something difficult", example: "Face the challenge.", exampleKo: "도전에 맞서요.", emoji: "💪" },
    { word: "obstacle", meaning: "장애물", meaningEn: "something blocking you", example: "Overcome obstacles.", exampleKo: "장애물을 극복해요.", emoji: "🪨" },
    { word: "barrier", meaning: "장벽", meaningEn: "what blocks", example: "Break down barriers.", exampleKo: "장벽을 무너뜨려요.", emoji: "🚧" },
    { word: "advantage", meaning: "이점", meaningEn: "a good thing", example: "Use your advantage.", exampleKo: "당신의 이점을 활용해요.", emoji: "👍" },
    { word: "disadvantage", meaning: "단점", meaningEn: "a bad thing", example: "Consider disadvantages.", exampleKo: "단점도 고려해요.", emoji: "👎" },
    { word: "benefit", meaning: "이익, 혜택", meaningEn: "something good", example: "Exercise has many benefits.", exampleKo: "운동은 많은 혜택이 있어요.", emoji: "✨" },
    { word: "drawback", meaning: "단점", meaningEn: "a negative side", example: "Every plan has drawbacks.", exampleKo: "모든 계획에 단점이 있어요.", emoji: "⚠️" },
    { word: "consequence", meaning: "결과", meaningEn: "what follows", example: "Think of consequences.", exampleKo: "결과를 생각해요.", emoji: "↪️" },
    { word: "result", meaning: "결과", meaningEn: "what happens", example: "Check the result.", exampleKo: "결과를 확인해요.", emoji: "📊" },
    { word: "outcome", meaning: "결과", meaningEn: "the final result", example: "Predict the outcome.", exampleKo: "결과를 예측해요.", emoji: "🎯" },
    { word: "impact", meaning: "영향", meaningEn: "an effect", example: "Climate change has big impact.", exampleKo: "기후 변화는 큰 영향이 있어요.", emoji: "💥" },
    { word: "influence", meaning: "영향", meaningEn: "the power to affect", example: "Parents influence children.", exampleKo: "부모는 아이에게 영향을 줘요.", emoji: "🌟" },
    { word: "effect", meaning: "효과", meaningEn: "what is caused", example: "Medicine has good effects.", exampleKo: "약은 좋은 효과가 있어요.", emoji: "💊" },
    { word: "cause", meaning: "원인", meaningEn: "the reason", example: "Find the cause.", exampleKo: "원인을 찾아요.", emoji: "🔍" },
    { word: "reason", meaning: "이유", meaningEn: "why something happens", example: "Give a good reason.", exampleKo: "좋은 이유를 줘요.", emoji: "💡" },
    { word: "factor", meaning: "요인", meaningEn: "something that affects", example: "Time is a factor.", exampleKo: "시간은 한 요인이에요.", emoji: "⚙️" },
    { word: "element", meaning: "요소", meaningEn: "a part", example: "Each element matters.", exampleKo: "각 요소가 중요해요.", emoji: "🧩" },
    { word: "component", meaning: "구성 요소", meaningEn: "a part of a whole", example: "List the components.", exampleKo: "구성 요소를 나열해요.", emoji: "🔧" },
    { word: "aspect", meaning: "측면", meaningEn: "one side or part", example: "Consider every aspect.", exampleKo: "모든 측면을 고려해요.", emoji: "🔄" },
    { word: "perspective", meaning: "관점", meaningEn: "way of looking", example: "Try a new perspective.", exampleKo: "새 관점을 시도해요.", emoji: "👁️" },
    { word: "viewpoint", meaning: "견해", meaningEn: "your way of thinking", example: "Share your viewpoint.", exampleKo: "당신의 견해를 나눠요.", emoji: "💭" },
    { word: "stance", meaning: "입장", meaningEn: "your position", example: "What's your stance?", exampleKo: "당신의 입장은 뭐예요?", emoji: "🎯" },
    { word: "position", meaning: "위치, 입장", meaningEn: "where you stand", example: "Take a clear position.", exampleKo: "명확한 입장을 취해요.", emoji: "📍" },
    { word: "attitude", meaning: "태도", meaningEn: "how you think and feel", example: "Have a good attitude.", exampleKo: "좋은 태도를 가져요.", emoji: "😊" },
    { word: "behavior", meaning: "행동", meaningEn: "how you act", example: "Show good behavior.", exampleKo: "좋은 행동을 보여요.", emoji: "👍" },
    { word: "manner", meaning: "방식, 태도", meaningEn: "the way of doing", example: "He spoke in a calm manner.", exampleKo: "그는 차분한 태도로 말했어요.", emoji: "🗣️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
