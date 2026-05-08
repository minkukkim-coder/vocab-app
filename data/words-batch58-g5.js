// Batch 58 — G5 마지막 보충
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "interaction", meaning: "상호작용", meaningEn: "two things affecting each other", example: "Class interaction is fun.", exampleKo: "수업 상호작용이 재미있어요.", emoji: "🤝" },
    { word: "engagement", meaning: "참여, 약혼", meaningEn: "involvement", example: "Student engagement matters.", exampleKo: "학생 참여가 중요해요.", emoji: "🎯" },
    { word: "involvement", meaning: "관여", meaningEn: "taking part in", example: "Show involvement in projects.", exampleKo: "프로젝트에 관여를 보여요.", emoji: "✋" },
    { word: "contribution", meaning: "기여", meaningEn: "what you give", example: "Your contribution matters.", exampleKo: "당신의 기여가 중요해요.", emoji: "🎁" },
    { word: "donation", meaning: "기부", meaningEn: "giving freely", example: "We made a charity donation.", exampleKo: "우리는 자선 기부를 했어요.", emoji: "💝" },
    { word: "sacrifice", meaning: "희생", meaningEn: "giving up something", example: "Parents sacrifice for kids.", exampleKo: "부모는 자녀를 위해 희생해요.", emoji: "💖" },
    { word: "dedication", meaning: "헌신", meaningEn: "giving time and effort", example: "Show dedication in studies.", exampleKo: "공부에 헌신을 보여요.", emoji: "📚" },
    { word: "commitment", meaning: "약속, 헌신", meaningEn: "a strong promise", example: "Make a commitment.", exampleKo: "약속을 해요.", emoji: "🤝" },
    { word: "obligation", meaning: "의무", meaningEn: "what you must do", example: "Meet your obligations.", exampleKo: "의무를 다해요.", emoji: "📋" },
    { word: "duty", meaning: "의무", meaningEn: "what you should do", example: "Do your duty well.", exampleKo: "의무를 잘 해요.", emoji: "🎖️" },
    { word: "burden", meaning: "부담", meaningEn: "something heavy to carry", example: "Don't carry the burden alone.", exampleKo: "부담을 혼자 지지 마요.", emoji: "💼" },
    { word: "load", meaning: "짐", meaningEn: "weight to carry", example: "Carry the load carefully.", exampleKo: "짐을 신중히 옮겨요.", emoji: "📦" },
    { word: "task", meaning: "과제", meaningEn: "a job to do", example: "Complete the task.", exampleKo: "과제를 완성해요.", emoji: "📋" },
    { word: "assignment", meaning: "과제, 임무", meaningEn: "work given", example: "Finish your assignment.", exampleKo: "당신의 과제를 끝내요.", emoji: "📝" },
    { word: "project", meaning: "프로젝트", meaningEn: "a large piece of work", example: "Our class project is fun.", exampleKo: "우리 반 프로젝트는 재미있어요.", emoji: "🛠️" },
    { word: "mission", meaning: "임무", meaningEn: "an important job", example: "Accept the mission.", exampleKo: "임무를 받아들여요.", emoji: "🎯" },
    { word: "objective", meaning: "목표", meaningEn: "a specific goal", example: "Set clear objectives.", exampleKo: "명확한 목표를 세워요.", emoji: "🎯" },
    { word: "ambition", meaning: "야망", meaningEn: "strong desire", example: "Her ambition is great.", exampleKo: "그녀의 야망은 대단해요.", emoji: "🚀" },
    { word: "aspiration", meaning: "포부", meaningEn: "a hope or goal", example: "Follow your aspirations.", exampleKo: "포부를 따라요.", emoji: "✨" },
    { word: "vision", meaning: "비전, 시력", meaningEn: "a big dream or sight", example: "Have a clear vision.", exampleKo: "명확한 비전을 가져요.", emoji: "👁️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
