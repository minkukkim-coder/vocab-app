// Batch 52 — G5 마지막 보충 (50개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "technology", meaning: "기술", meaningEn: "tools and machines", example: "Technology is everywhere now.", exampleKo: "기술은 이제 어디에나 있어요.", emoji: "💻" },
    { word: "engineering", meaning: "공학", meaningEn: "designing and building", example: "Engineering builds bridges.", exampleKo: "공학이 다리를 지어요.", emoji: "🌉" },
    { word: "communication", meaning: "의사소통", meaningEn: "sharing information", example: "Good communication is key.", exampleKo: "좋은 의사소통이 핵심이에요.", emoji: "💬" },
    { word: "presentation", meaning: "발표", meaningEn: "showing to others", example: "Make a clear presentation.", exampleKo: "명확한 발표를 해요.", emoji: "📊" },
    { word: "discussion", meaning: "토론", meaningEn: "talking about a topic", example: "We had a great discussion.", exampleKo: "훌륭한 토론을 했어요.", emoji: "💬" },
    { word: "negotiation", meaning: "협상", meaningEn: "talks to reach agreement", example: "Trade negotiations took weeks.", exampleKo: "무역 협상이 몇 주 걸렸어요.", emoji: "🤝" },
    { word: "agreement", meaning: "동의, 합의", meaningEn: "common understanding", example: "We came to an agreement.", exampleKo: "우리는 합의에 이르렀어요.", emoji: "✅" },
    { word: "disagreement", meaning: "불일치", meaningEn: "different opinions", example: "There was disagreement on the issue.", exampleKo: "그 문제에 불일치가 있었어요.", emoji: "❌" },
    { word: "consensus", meaning: "합의, 일치", meaningEn: "general agreement", example: "We reached a consensus.", exampleKo: "우리는 합의에 도달했어요.", emoji: "🤝" },
    { word: "compromise", meaning: "타협", meaningEn: "agreement with give-and-take", example: "Compromise is important.", exampleKo: "타협은 중요해요.", emoji: "⚖️" },
    { word: "conflict", meaning: "갈등", meaningEn: "a serious disagreement", example: "Resolve conflicts peacefully.", exampleKo: "갈등을 평화롭게 해결해요.", emoji: "⚔️" },
    { word: "resolution", meaning: "해결", meaningEn: "a solution to a problem", example: "We found a resolution.", exampleKo: "우리는 해결책을 찾았어요.", emoji: "✅" },
    { word: "tolerance", meaning: "관용", meaningEn: "accepting differences", example: "Tolerance creates harmony.", exampleKo: "관용이 조화를 만들어요.", emoji: "🤝" },
    { word: "intolerance", meaning: "편협함", meaningEn: "not accepting differences", example: "Intolerance causes problems.", exampleKo: "편협함이 문제를 일으켜요.", emoji: "🚫" },
    { word: "acceptance", meaning: "수용", meaningEn: "agreeing to take", example: "Acceptance brings peace.", exampleKo: "수용이 평화를 가져와요.", emoji: "✅" },
    { word: "rejection", meaning: "거절", meaningEn: "refusing to accept", example: "Rejection can hurt.", exampleKo: "거절은 상처를 줄 수 있어요.", emoji: "❌" },
    { word: "approval", meaning: "승인", meaningEn: "saying yes", example: "She got approval for the trip.", exampleKo: "그녀는 여행 승인을 받았어요.", emoji: "👍" },
    { word: "disapproval", meaning: "불승인", meaningEn: "saying no", example: "He showed disapproval clearly.", exampleKo: "그는 불승인을 명확히 보였어요.", emoji: "👎" },
    { word: "encourage", meaning: "격려하다", meaningEn: "to give support", example: "Coaches encourage athletes.", exampleKo: "코치가 선수를 격려해요.", emoji: "💪" },
    { word: "discourage", meaning: "낙담시키다", meaningEn: "to take away courage", example: "Don't discourage your friends.", exampleKo: "친구를 낙담시키지 마요.", emoji: "😔" },
    { word: "support", meaning: "지지, 지원하다", meaningEn: "to help or back", example: "I support your decision.", exampleKo: "당신의 결정을 지지해요.", emoji: "🫂" },
    { word: "oppose", meaning: "반대하다", meaningEn: "to be against", example: "Some people oppose the law.", exampleKo: "일부 사람들은 그 법에 반대해요.", emoji: "🚫" },
    { word: "advocate", meaning: "옹호하다, 옹호자", meaningEn: "to support a cause", example: "She advocates for animal rights.", exampleKo: "그녀는 동물 권리를 옹호해요.", emoji: "📣" },
    { word: "defend", meaning: "방어하다, 옹호하다", meaningEn: "to protect", example: "Defend your beliefs.", exampleKo: "당신의 신념을 옹호해요.", emoji: "🛡️" },
    { word: "criticize", meaning: "비판하다", meaningEn: "to find faults", example: "Don't just criticize, suggest.", exampleKo: "비판만 하지 말고 제안해요.", emoji: "💬" },
    { word: "praise", meaning: "칭찬하다", meaningEn: "to say good things", example: "Praise effort, not just success.", exampleKo: "성공만 아니라 노력을 칭찬해요.", emoji: "👏" },
    { word: "compliment", meaning: "칭찬, 칭찬하다", meaningEn: "to say something nice", example: "Give sincere compliments.", exampleKo: "진심 어린 칭찬을 해요.", emoji: "🌹" },
    { word: "insult", meaning: "모욕", meaningEn: "rude words to hurt", example: "Don't insult others.", exampleKo: "남을 모욕하지 마요.", emoji: "🚫" },
    { word: "argue", meaning: "논쟁하다", meaningEn: "to disagree strongly", example: "They argue about money.", exampleKo: "그들은 돈에 대해 논쟁해요.", emoji: "💬" },
    { word: "debate", meaning: "토론, 논쟁", meaningEn: "a formal discussion", example: "The debate was interesting.", exampleKo: "그 토론은 흥미로웠어요.", emoji: "🎤" },
    { word: "discuss", meaning: "토론하다", meaningEn: "to talk about", example: "Let's discuss the project.", exampleKo: "프로젝트를 토론해요.", emoji: "🗣️" },
    { word: "dialogue", meaning: "대화", meaningEn: "a conversation", example: "Open dialogue solves problems.", exampleKo: "열린 대화가 문제를 풀어요.", emoji: "💬" },
    { word: "conversation", meaning: "대화", meaningEn: "talking with someone", example: "We had a long conversation.", exampleKo: "우리는 긴 대화를 나눴어요.", emoji: "🗣️" },
    { word: "interview", meaning: "면접, 인터뷰", meaningEn: "a meeting with questions", example: "She did well in the interview.", exampleKo: "그녀는 면접을 잘했어요.", emoji: "💼" },
    { word: "speech", meaning: "연설", meaningEn: "talking to a group", example: "She gave a great speech.", exampleKo: "그녀는 훌륭한 연설을 했어요.", emoji: "🎤" },
    { word: "lecture", meaning: "강의", meaningEn: "a long talk to teach", example: "The lecture was on history.", exampleKo: "그 강의는 역사에 관한 거였어요.", emoji: "👨‍🏫" },
    { word: "seminar", meaning: "세미나", meaningEn: "a small class for discussion", example: "We attended a writing seminar.", exampleKo: "글쓰기 세미나에 참석했어요.", emoji: "📚" },
    { word: "workshop", meaning: "워크숍", meaningEn: "a hands-on learning event", example: "I took a cooking workshop.", exampleKo: "요리 워크숍을 들었어요.", emoji: "🍳" },
    { word: "conference", meaning: "회의, 콘퍼런스", meaningEn: "a large meeting", example: "Many scientists attend the conference.", exampleKo: "많은 과학자가 콘퍼런스에 참석해요.", emoji: "🏢" },
    { word: "meeting", meaning: "회의", meaningEn: "people gathering to talk", example: "We had a team meeting.", exampleKo: "팀 회의를 했어요.", emoji: "👥" },
    { word: "appointment", meaning: "약속", meaningEn: "a planned meeting", example: "I have a doctor's appointment.", exampleKo: "병원 약속이 있어요.", emoji: "📅" },
    { word: "reservation", meaning: "예약", meaningEn: "booking ahead", example: "Make a restaurant reservation.", exampleKo: "식당을 예약해요.", emoji: "📞" },
    { word: "schedule", meaning: "일정", meaningEn: "planned activities", example: "Check the schedule for events.", exampleKo: "행사 일정을 확인해요.", emoji: "📅" },
    { word: "agenda", meaning: "안건, 일정", meaningEn: "list of topics to discuss", example: "What's on the meeting agenda?", exampleKo: "회의 안건은 뭐예요?", emoji: "📋" },
    { word: "deadline", meaning: "마감일", meaningEn: "the due date", example: "Meet the project deadline.", exampleKo: "프로젝트 마감일을 지켜요.", emoji: "⏰" },
    { word: "punctual", meaning: "시간을 잘 지키는", meaningEn: "on time", example: "Be punctual for class.", exampleKo: "수업에 시간을 잘 지켜요.", emoji: "⏰" },
    { word: "tardy", meaning: "늦은", meaningEn: "late", example: "Tardy students miss the start.", exampleKo: "늦은 학생은 시작을 놓쳐요.", emoji: "⏰" },
    { word: "punctuality", meaning: "시간 엄수", meaningEn: "being on time", example: "Punctuality is important.", exampleKo: "시간 엄수는 중요해요.", emoji: "⏱️" },
    { word: "occasion", meaning: "특별한 일", meaningEn: "a special event", example: "Her birthday is a happy occasion.", exampleKo: "그녀의 생일은 행복한 일이에요.", emoji: "🎉" },
    { word: "event", meaning: "행사, 사건", meaningEn: "something that happens", example: "The school event was fun.", exampleKo: "학교 행사가 재미있었어요.", emoji: "🎊" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
