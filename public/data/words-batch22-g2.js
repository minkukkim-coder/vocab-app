// Batch 22 — G2 추가 어휘 50개 (외국인학교 advanced 2학년 수준)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "investigate", meaning: "조사하다", meaningEn: "to look into something carefully", example: "Scientists investigate how plants grow.", exampleKo: "과학자들은 식물이 어떻게 자라는지 조사해요.", emoji: "🔍" },
    { word: "experiment", meaning: "실험", meaningEn: "a test to learn something new", example: "We did an experiment with magnets.", exampleKo: "우리는 자석으로 실험을 했어요.", emoji: "🧪" },
    { word: "observe", meaning: "관찰하다", meaningEn: "to watch carefully", example: "Observe the butterfly's wings closely.", exampleKo: "나비의 날개를 자세히 관찰해요.", emoji: "👁️" },
    { word: "result", meaning: "결과", meaningEn: "what happens at the end", example: "The result of the test was good.", exampleKo: "시험 결과가 좋았어요.", emoji: "📊" },
    { word: "conclude", meaning: "결론을 내다", meaningEn: "to decide after thinking", example: "We conclude that water flows downhill.", exampleKo: "물은 아래로 흐른다고 결론 내려요.", emoji: "✅" },
    { word: "process", meaning: "과정", meaningEn: "a series of steps to do something", example: "Baking bread is a slow process.", exampleKo: "빵 굽기는 느린 과정이에요.", emoji: "⚙️" },
    { word: "system", meaning: "체계, 시스템", meaningEn: "a group of parts that work together", example: "The body has a digestive system.", exampleKo: "몸에는 소화 시스템이 있어요.", emoji: "🔄" },
    { word: "structure", meaning: "구조", meaningEn: "the way parts are put together", example: "The structure of a flower is amazing.", exampleKo: "꽃의 구조는 놀라워요.", emoji: "🏛️" },
    { word: "function", meaning: "기능", meaningEn: "what something does", example: "The function of the heart is to pump blood.", exampleKo: "심장의 기능은 피를 보내는 거예요.", emoji: "🫀" },
    { word: "purpose", meaning: "목적", meaningEn: "the reason for doing something", example: "The purpose of school is to learn.", exampleKo: "학교의 목적은 배우는 거예요.", emoji: "🎯" },
    { word: "method", meaning: "방법", meaningEn: "a way of doing something", example: "Show me your method for solving this.", exampleKo: "이걸 푸는 방법을 보여 줘요.", emoji: "🧠" },
    { word: "develop", meaning: "발달시키다, 개발하다", meaningEn: "to grow or build up over time", example: "Plants develop from tiny seeds.", exampleKo: "식물은 작은 씨앗에서 발달해요.", emoji: "🌱" },
    { word: "produce", meaning: "생산하다, 만들다", meaningEn: "to make something", example: "Cows produce milk.", exampleKo: "소가 우유를 생산해요.", emoji: "🐄" },
    { word: "provide", meaning: "제공하다", meaningEn: "to give what is needed", example: "Trees provide shade in summer.", exampleKo: "나무는 여름에 그늘을 제공해요.", emoji: "🌳" },
    { word: "supply", meaning: "공급하다, 보급품", meaningEn: "to give or the things given", example: "Bees supply us with honey.", exampleKo: "벌은 우리에게 꿀을 공급해요.", emoji: "🐝" },
    { word: "consume", meaning: "소비하다, 먹다", meaningEn: "to use up or eat", example: "Animals consume plants for energy.", exampleKo: "동물은 에너지를 위해 식물을 먹어요.", emoji: "🍽️" },
    { word: "energy", meaning: "에너지, 힘", meaningEn: "the power to move or work", example: "We get energy from food.", exampleKo: "우리는 음식에서 에너지를 얻어요.", emoji: "⚡" },
    { word: "oxygen", meaning: "산소", meaningEn: "the air we breathe to live", example: "Plants make oxygen for us.", exampleKo: "식물은 우리를 위해 산소를 만들어요.", emoji: "💨" },
    { word: "carbon dioxide", meaning: "이산화탄소", meaningEn: "the gas we breathe out", example: "Trees take in carbon dioxide.", exampleKo: "나무는 이산화탄소를 흡수해요.", emoji: "🌫️" },
    { word: "natural", meaning: "자연의", meaningEn: "made by nature, not by people", example: "Wood is a natural material.", exampleKo: "나무는 자연 재료예요.", emoji: "🌿" },
    { word: "human", meaning: "인간의, 사람", meaningEn: "a person", example: "Humans need food and water.", exampleKo: "사람은 음식과 물이 필요해요.", emoji: "👤" },
    { word: "community", meaning: "공동체, 지역사회", meaningEn: "a group of people living together", example: "Our community has many helpers.", exampleKo: "우리 공동체에는 많은 도우미가 있어요.", emoji: "🏘️" },
    { word: "neighbor", meaning: "이웃", meaningEn: "someone who lives near you", example: "Our neighbor is very kind.", exampleKo: "우리 이웃은 매우 친절해요.", emoji: "🏠" },
    { word: "country", meaning: "나라", meaningEn: "a land with one government", example: "Korea is my country.", exampleKo: "한국은 우리 나라예요.", emoji: "🇰🇷" },
    { word: "culture", meaning: "문화", meaningEn: "the way of life of a group", example: "Each country has its own culture.", exampleKo: "각 나라마다 고유한 문화가 있어요.", emoji: "🎎" },
    { word: "language", meaning: "언어", meaningEn: "the words people use to talk", example: "Spanish is a beautiful language.", exampleKo: "스페인어는 아름다운 언어예요.", emoji: "🗣️" },
    { word: "tradition", meaning: "전통", meaningEn: "something done the same way for a long time", example: "We have a New Year tradition.", exampleKo: "우리는 새해 전통이 있어요.", emoji: "🎊" },
    { word: "history", meaning: "역사", meaningEn: "what happened in the past", example: "I love studying history.", exampleKo: "나는 역사 공부를 좋아해요.", emoji: "📜" },
    { word: "ancient", meaning: "고대의", meaningEn: "from very long ago", example: "Ancient people built the pyramids.", exampleKo: "고대 사람들이 피라미드를 지었어요.", emoji: "🏛️" },
    { word: "modern", meaning: "현대의", meaningEn: "of today, new", example: "We live in modern times.", exampleKo: "우리는 현대에 살고 있어요.", emoji: "🏙️" },
    { word: "century", meaning: "세기 (100년)", meaningEn: "100 years", example: "The 21st century began in 2001.", exampleKo: "21세기는 2001년에 시작했어요.", emoji: "📅" },
    { word: "decade", meaning: "10년", meaningEn: "10 years", example: "Ten years make one decade.", exampleKo: "10년이 한 세기를 이뤄요.", emoji: "🗓️" },
    { word: "generation", meaning: "세대", meaningEn: "people born around the same time", example: "Each generation learns new things.", exampleKo: "각 세대는 새로운 것을 배워요.", emoji: "👨‍👩‍👧‍👦" },
    { word: "discover", meaning: "발견하다", meaningEn: "to find for the first time", example: "Scientists discover new species.", exampleKo: "과학자들은 새로운 종을 발견해요.", emoji: "🔬" },
    { word: "invention", meaning: "발명", meaningEn: "something new that someone made", example: "The wheel was a great invention.", exampleKo: "바퀴는 위대한 발명이었어요.", emoji: "💡" },
    { word: "explore", meaning: "탐험하다", meaningEn: "to travel and learn about places", example: "Let's explore the forest!", exampleKo: "숲을 탐험해 봐요!", emoji: "🧭" },
    { word: "describe", meaning: "묘사하다, 설명하다", meaningEn: "to tell what something is like", example: "Describe your favorite animal.", exampleKo: "좋아하는 동물을 묘사해 보세요.", emoji: "🖼️" },
    { word: "imagine", meaning: "상상하다", meaningEn: "to picture in your mind", example: "Imagine living on the moon.", exampleKo: "달에 사는 걸 상상해 봐요.", emoji: "💭" },
    { word: "create", meaning: "만들다, 창조하다", meaningEn: "to make something new", example: "Artists create beautiful paintings.", exampleKo: "예술가들은 아름다운 그림을 만들어요.", emoji: "🎨" },
    { word: "design", meaning: "디자인하다, 설계하다", meaningEn: "to plan how something will look", example: "Engineers design bridges.", exampleKo: "엔지니어들이 다리를 설계해요.", emoji: "📐" },
    { word: "improve", meaning: "개선하다, 나아지다", meaningEn: "to make or become better", example: "Practice helps you improve.", exampleKo: "연습하면 더 나아져요.", emoji: "📈" },
    { word: "succeed", meaning: "성공하다", meaningEn: "to do well at something", example: "Hard work helps us succeed.", exampleKo: "노력하면 성공해요.", emoji: "🏆" },
    { word: "fail", meaning: "실패하다", meaningEn: "to not succeed", example: "Don't worry if you fail; try again.", exampleKo: "실패해도 걱정 말고 다시 해 봐요.", emoji: "💪" },
    { word: "effort", meaning: "노력", meaningEn: "the energy you put into something", example: "Your effort really showed.", exampleKo: "당신의 노력이 정말 보였어요.", emoji: "💪" },
    { word: "achieve", meaning: "이루다, 성취하다", meaningEn: "to reach a goal", example: "She achieved her dream.", exampleKo: "그녀는 꿈을 이뤘어요.", emoji: "🎯" },
    { word: "goal", meaning: "목표", meaningEn: "what you want to do", example: "My goal is to read 50 books.", exampleKo: "내 목표는 책 50권을 읽는 거예요.", emoji: "🥅" },
    { word: "plan", meaning: "계획", meaningEn: "what you decide to do", example: "We made a plan for the weekend.", exampleKo: "주말 계획을 세웠어요.", emoji: "📝" },
    { word: "choice", meaning: "선택", meaningEn: "what you pick", example: "Make a smart choice.", exampleKo: "현명한 선택을 하세요.", emoji: "🤔" },
    { word: "opportunity", meaning: "기회", meaningEn: "a good chance to do something", example: "School gives us many opportunities.", exampleKo: "학교는 우리에게 많은 기회를 줘요.", emoji: "🚪" },
    { word: "challenge", meaning: "도전", meaningEn: "something difficult to do", example: "Climbing the mountain was a challenge.", exampleKo: "산을 오르는 건 도전이었어요.", emoji: "⛰️" }
  ];
  const seen = new Set(VOCABULARY.G2.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G2.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
