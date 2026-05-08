// Final fill — G3 (5), G4 (15), G5 (35)
(function () {
  if (typeof VOCABULARY === "undefined") return;

  const G3_ADD = [
    { word: "playground", meaning: "놀이터", meaningEn: "where kids play", example: "I love the playground.", exampleKo: "나는 놀이터를 좋아해요.", emoji: "🛝" },
    { word: "swing", meaning: "그네", meaningEn: "a hanging seat to ride", example: "I swing high in the park.", exampleKo: "공원에서 그네를 높이 타요.", emoji: "🪂" },
    { word: "slide", meaning: "미끄럼틀", meaningEn: "a downward play structure", example: "Slide down quickly.", exampleKo: "빠르게 미끄럼을 타요.", emoji: "🛝" },
    { word: "seesaw", meaning: "시소", meaningEn: "an up-and-down play tool", example: "Play on the seesaw.", exampleKo: "시소를 타요.", emoji: "🎢" },
    { word: "monkey bars", meaning: "원숭이 막대", meaningEn: "bars to swing across", example: "Cross the monkey bars.", exampleKo: "원숭이 막대를 건너요.", emoji: "🐵" }
  ];
  const G4_ADD = [
    { word: "marathon", meaning: "마라톤", meaningEn: "a long race", example: "She ran a marathon.", exampleKo: "그녀는 마라톤을 뛰었어요.", emoji: "🏃" },
    { word: "championship", meaning: "선수권 대회", meaningEn: "a top competition", example: "We won the championship.", exampleKo: "우리는 선수권 대회에서 우승했어요.", emoji: "🏆" },
    { word: "tournament", meaning: "토너먼트", meaningEn: "a series of contests", example: "The chess tournament starts soon.", exampleKo: "체스 토너먼트가 곧 시작해요.", emoji: "🏆" },
    { word: "scoreboard", meaning: "전광판, 점수판", meaningEn: "where scores show", example: "Check the scoreboard.", exampleKo: "점수판을 확인해요.", emoji: "📊" },
    { word: "referee", meaning: "심판", meaningEn: "the rule-keeper in sports", example: "The referee blew the whistle.", exampleKo: "심판이 호루라기를 불었어요.", emoji: "🦓" },
    { word: "umpire", meaning: "심판", meaningEn: "official judge in games", example: "The umpire made a call.", exampleKo: "심판이 판정했어요.", emoji: "⚖️" },
    { word: "coach", meaning: "코치", meaningEn: "a sports trainer", example: "Listen to your coach.", exampleKo: "코치 말을 들어요.", emoji: "👨‍🏫" },
    { word: "captain", meaning: "주장", meaningEn: "the team leader", example: "She was elected captain.", exampleKo: "그녀가 주장으로 선출됐어요.", emoji: "🎖️" },
    { word: "rival", meaning: "라이벌", meaningEn: "a competitor", example: "They are friendly rivals.", exampleKo: "그들은 우호적인 라이벌이에요.", emoji: "⚔️" },
    { word: "victory", meaning: "승리", meaningEn: "winning", example: "Celebrate the victory.", exampleKo: "승리를 축하해요.", emoji: "🏆" },
    { word: "defeat", meaning: "패배", meaningEn: "losing", example: "Learn from defeat.", exampleKo: "패배에서 배워요.", emoji: "💪" },
    { word: "tie", meaning: "동점, 매다", meaningEn: "equal score or to fasten", example: "The game ended in a tie.", exampleKo: "경기는 동점으로 끝났어요.", emoji: "🤝" },
    { word: "draw", meaning: "비기다, 그리다", meaningEn: "tie or sketch", example: "It was a draw.", exampleKo: "비겼어요.", emoji: "🎨" },
    { word: "spectator", meaning: "관중", meaningEn: "a person watching", example: "Spectators cheered loudly.", exampleKo: "관중이 크게 환호했어요.", emoji: "👀" },
    { word: "stadium", meaning: "경기장", meaningEn: "a sports arena", example: "The stadium was full.", exampleKo: "경기장이 꽉 찼어요.", emoji: "🏟️" }
  ];
  const G5_ADD = [
    { word: "ambition", meaning: "야망", meaningEn: "strong desire", example: "Her ambition is admirable.", exampleKo: "그녀의 야망은 존경스러워요.", emoji: "🚀" },
    { word: "aspiration", meaning: "포부", meaningEn: "a hope", example: "Follow your aspirations.", exampleKo: "포부를 따라요.", emoji: "✨" },
    { word: "vision", meaning: "비전", meaningEn: "a dream of the future", example: "Have a clear vision.", exampleKo: "명확한 비전을 가져요.", emoji: "👁️" },
    { word: "leadership", meaning: "리더십", meaningEn: "the ability to lead", example: "Show good leadership.", exampleKo: "좋은 리더십을 보여요.", emoji: "👑" },
    { word: "teamwork", meaning: "팀워크", meaningEn: "working as a team", example: "Teamwork wins games.", exampleKo: "팀워크가 경기를 이겨요.", emoji: "🤝" },
    { word: "mentorship", meaning: "멘토 관계", meaningEn: "guidance from older one", example: "Find a good mentorship.", exampleKo: "좋은 멘토 관계를 찾아요.", emoji: "👨‍🏫" },
    { word: "friendship", meaning: "우정", meaningEn: "being friends", example: "Friendship is precious.", exampleKo: "우정은 소중해요.", emoji: "👫" },
    { word: "relationship", meaning: "관계", meaningEn: "how people connect", example: "Build healthy relationships.", exampleKo: "건강한 관계를 쌓아요.", emoji: "💕" },
    { word: "kinship", meaning: "친족, 유대", meaningEn: "family bond", example: "Strong kinship matters.", exampleKo: "강한 유대가 중요해요.", emoji: "👨‍👩‍👧" },
    { word: "membership", meaning: "회원 자격", meaningEn: "being part of a group", example: "Renew your membership.", exampleKo: "회원 자격을 갱신해요.", emoji: "🎫" },
    { word: "ownership", meaning: "소유", meaningEn: "having something", example: "Take ownership of your work.", exampleKo: "당신의 일에 소유를 가져요.", emoji: "🔑" },
    { word: "citizenship", meaning: "시민권", meaningEn: "being a citizen", example: "Earn American citizenship.", exampleKo: "미국 시민권을 얻어요.", emoji: "🛂" },
    { word: "scholarship", meaning: "장학금", meaningEn: "money for school", example: "She won a scholarship.", exampleKo: "그녀는 장학금을 받았어요.", emoji: "🎓" },
    { word: "internship", meaning: "인턴십", meaningEn: "training job", example: "Apply for an internship.", exampleKo: "인턴십에 지원해요.", emoji: "💼" },
    { word: "apprenticeship", meaning: "도제 수업", meaningEn: "learning a trade", example: "He did a carpentry apprenticeship.", exampleKo: "그는 목공 도제 수업을 했어요.", emoji: "🔨" },
    { word: "fellowship", meaning: "특별 연구원직", meaningEn: "an academic position", example: "She got a research fellowship.", exampleKo: "그녀는 연구 펠로우십을 받았어요.", emoji: "🎓" },
    { word: "presidency", meaning: "대통령직", meaningEn: "being president", example: "The presidency is challenging.", exampleKo: "대통령직은 도전적이에요.", emoji: "🏛️" },
    { word: "democracy", meaning: "민주주의", meaningEn: "rule by the people", example: "Democracy needs participation.", exampleKo: "민주주의는 참여가 필요해요.", emoji: "🗳️" },
    { word: "monarchy", meaning: "군주제", meaningEn: "rule by king or queen", example: "Britain has a monarchy.", exampleKo: "영국에는 군주제가 있어요.", emoji: "👑" },
    { word: "republic", meaning: "공화국", meaningEn: "a country with elected leaders", example: "America is a republic.", exampleKo: "미국은 공화국이에요.", emoji: "🏛️" },
    { word: "election", meaning: "선거", meaningEn: "voting for leaders", example: "The election is in November.", exampleKo: "선거는 11월에 있어요.", emoji: "🗳️" },
    { word: "campaign", meaning: "선거 운동", meaningEn: "trying to be elected", example: "The campaign is heated.", exampleKo: "선거 운동이 치열해요.", emoji: "📣" },
    { word: "candidate", meaning: "후보자", meaningEn: "a person running for office", example: "Three candidates are running.", exampleKo: "세 명의 후보자가 출마했어요.", emoji: "👤" },
    { word: "majority", meaning: "다수", meaningEn: "more than half", example: "The majority agreed.", exampleKo: "다수가 동의했어요.", emoji: "📊" },
    { word: "minority", meaning: "소수", meaningEn: "less than half", example: "Protect minority rights.", exampleKo: "소수자 권리를 보호해요.", emoji: "🛡️" },
    { word: "vote", meaning: "투표하다", meaningEn: "to choose by ballot", example: "Adults vote in elections.", exampleKo: "어른들은 선거에서 투표해요.", emoji: "🗳️" },
    { word: "ballot", meaning: "투표용지", meaningEn: "voting paper", example: "Mark your ballot.", exampleKo: "투표용지에 표시해요.", emoji: "📝" },
    { word: "poll", meaning: "여론 조사, 투표소", meaningEn: "vote count or place", example: "Polls show close results.", exampleKo: "여론 조사가 박빙 결과를 보여요.", emoji: "📊" },
    { word: "survey", meaning: "설문조사", meaningEn: "asking many people", example: "Take the customer survey.", exampleKo: "고객 설문조사를 해요.", emoji: "📋" },
    { word: "questionnaire", meaning: "설문지", meaningEn: "a list of questions", example: "Fill out the questionnaire.", exampleKo: "설문지를 작성해요.", emoji: "📝" },
    { word: "interview", meaning: "면접", meaningEn: "a meeting with questions", example: "She did well in the interview.", exampleKo: "그녀는 면접을 잘했어요.", emoji: "💼" },
    { word: "conference", meaning: "회의", meaningEn: "a large meeting", example: "We attended a science conference.", exampleKo: "과학 회의에 참석했어요.", emoji: "🏢" },
    { word: "seminar", meaning: "세미나", meaningEn: "a discussion class", example: "The writing seminar was great.", exampleKo: "글쓰기 세미나가 훌륭했어요.", emoji: "📚" },
    { word: "workshop", meaning: "워크숍", meaningEn: "a hands-on session", example: "Take the art workshop.", exampleKo: "미술 워크숍을 들어요.", emoji: "🎨" },
    { word: "lecture", meaning: "강의", meaningEn: "a talk to teach", example: "The lecture was clear.", exampleKo: "강의가 명확했어요.", emoji: "👨‍🏫" }
  ];

  const seenG3 = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of G3_ADD) if (!seenG3.has(w.word.toLowerCase())) { VOCABULARY.G3.push(w); seenG3.add(w.word.toLowerCase()); }
  const seenG4 = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of G4_ADD) if (!seenG4.has(w.word.toLowerCase())) { VOCABULARY.G4.push(w); seenG4.add(w.word.toLowerCase()); }
  const seenG5 = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of G5_ADD) if (!seenG5.has(w.word.toLowerCase())) { VOCABULARY.G5.push(w); seenG5.add(w.word.toLowerCase()); }
})();
