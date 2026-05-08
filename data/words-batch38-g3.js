// Batch 38 — G3 보충 (50개, 외국인학교 3학년 advanced 적정 수준)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "tradition", meaning: "전통", meaningEn: "old customs passed down", example: "Korean New Year is a tradition.", exampleKo: "설날은 전통이에요.", emoji: "🎎" },
    { word: "festival", meaning: "축제", meaningEn: "a special celebration", example: "We attended the food festival.", exampleKo: "음식 축제에 참가했어요.", emoji: "🎊" },
    { word: "celebrate", meaning: "축하하다", meaningEn: "to do something special", example: "We celebrate birthdays with cake.", exampleKo: "케이크로 생일을 축하해요.", emoji: "🎂" },
    { word: "ceremony", meaning: "의식, 식", meaningEn: "a formal event", example: "The graduation ceremony was lovely.", exampleKo: "졸업식이 사랑스러웠어요.", emoji: "🎓" },
    { word: "performance", meaning: "공연, 수행", meaningEn: "an act in front of others", example: "The dance performance was great.", exampleKo: "춤 공연이 훌륭했어요.", emoji: "🎭" },
    { word: "audience", meaning: "관객", meaningEn: "people watching a show", example: "The audience clapped loudly.", exampleKo: "관객이 크게 박수쳤어요.", emoji: "👏" },
    { word: "rehearsal", meaning: "리허설, 예행연습", meaningEn: "practice for a show", example: "We had a final rehearsal.", exampleKo: "마지막 리허설을 했어요.", emoji: "🎬" },
    { word: "schedule", meaning: "일정, 시간표", meaningEn: "a plan for time", example: "Check your schedule for today.", exampleKo: "오늘 일정을 확인해요.", emoji: "📅" },
    { word: "calendar", meaning: "달력", meaningEn: "a chart of days and months", example: "Mark the date on the calendar.", exampleKo: "달력에 날짜를 표시해요.", emoji: "📆" },
    { word: "weekday", meaning: "평일", meaningEn: "Monday to Friday", example: "School is on weekdays.", exampleKo: "학교는 평일에 있어요.", emoji: "📅" },
    { word: "instruction", meaning: "지시, 설명", meaningEn: "directions on what to do", example: "Read the instructions carefully.", exampleKo: "설명을 신중히 읽어요.", emoji: "📋" },
    { word: "direction", meaning: "방향, 지시", meaningEn: "a way to go or guide", example: "Follow the direction on the map.", exampleKo: "지도의 방향을 따라요.", emoji: "🧭" },
    { word: "location", meaning: "위치", meaningEn: "a place", example: "Check the location on the map.", exampleKo: "지도에서 위치를 확인해요.", emoji: "📍" },
    { word: "destination", meaning: "목적지", meaningEn: "the place you go to", example: "Our destination is the museum.", exampleKo: "우리 목적지는 박물관이에요.", emoji: "🎯" },
    { word: "journey", meaning: "여행, 여정", meaningEn: "a long trip", example: "Our journey took two days.", exampleKo: "우리 여정은 이틀 걸렸어요.", emoji: "🗺️" },
    { word: "passenger", meaning: "승객", meaningEn: "someone riding in a vehicle", example: "All passengers are seated.", exampleKo: "모든 승객이 앉았어요.", emoji: "🚗" },
    { word: "transportation", meaning: "교통수단", meaningEn: "ways to travel", example: "Buses are public transportation.", exampleKo: "버스는 대중교통이에요.", emoji: "🚌" },
    { word: "vehicle", meaning: "차량", meaningEn: "anything that moves people", example: "Cars and bikes are vehicles.", exampleKo: "자동차와 자전거는 차량이에요.", emoji: "🚙" },
    { word: "engine", meaning: "엔진", meaningEn: "a machine that gives power", example: "The car engine is loud.", exampleKo: "자동차 엔진이 시끄러워요.", emoji: "🔧" },
    { word: "fuel", meaning: "연료", meaningEn: "what makes engines run", example: "Cars need gasoline as fuel.", exampleKo: "자동차는 연료로 휘발유가 필요해요.", emoji: "⛽" },
    { word: "manufacture", meaning: "제조하다", meaningEn: "to make in a factory", example: "Toys are manufactured in factories.", exampleKo: "장난감은 공장에서 제조돼요.", emoji: "🏭" },
    { word: "factory", meaning: "공장", meaningEn: "a place where things are made", example: "The factory makes cars.", exampleKo: "그 공장은 자동차를 만들어요.", emoji: "🏭" },
    { word: "product", meaning: "상품, 제품", meaningEn: "something made to sell", example: "The store sells many products.", exampleKo: "그 가게는 많은 상품을 팔아요.", emoji: "📦" },
    { word: "service", meaning: "서비스, 봉사", meaningEn: "help given to others", example: "Good service makes customers happy.", exampleKo: "좋은 서비스가 고객을 기쁘게 해요.", emoji: "🤝" },
    { word: "customer", meaning: "고객, 손님", meaningEn: "a person who buys", example: "The customer paid for the toy.", exampleKo: "고객이 장난감 값을 냈어요.", emoji: "🛒" },
    { word: "salesperson", meaning: "판매원", meaningEn: "a person who sells", example: "The salesperson helped me.", exampleKo: "판매원이 나를 도왔어요.", emoji: "👤" },
    { word: "manager", meaning: "관리자, 매니저", meaningEn: "the person in charge", example: "Talk to the manager for help.", exampleKo: "도움이 필요하면 매니저에게 말해요.", emoji: "👔" },
    { word: "owner", meaning: "주인, 소유자", meaningEn: "the person who owns", example: "The store owner is friendly.", exampleKo: "가게 주인이 친절해요.", emoji: "🤝" },
    { word: "rule", meaning: "규칙", meaningEn: "what you should do", example: "Follow the classroom rules.", exampleKo: "교실 규칙을 따라요.", emoji: "📋" },
    { word: "permission", meaning: "허락, 허가", meaningEn: "agreement to do something", example: "Ask permission before going out.", exampleKo: "외출 전에 허락을 구해요.", emoji: "✅" },
    { word: "application", meaning: "지원서, 응용", meaningEn: "a form or program", example: "Fill out the school application.", exampleKo: "학교 지원서를 작성해요.", emoji: "📝" },
    { word: "interview", meaning: "면접, 인터뷰", meaningEn: "a meeting with questions", example: "She did well in the interview.", exampleKo: "그녀는 면접에서 잘했어요.", emoji: "💼" },
    { word: "experience", meaning: "경험", meaningEn: "what you have done or seen", example: "Travel gives great experiences.", exampleKo: "여행은 훌륭한 경험을 줘요.", emoji: "🌍" },
    { word: "memory", meaning: "기억", meaningEn: "what you remember", example: "Childhood memories are precious.", exampleKo: "어린 시절 기억은 소중해요.", emoji: "💭" },
    { word: "story", meaning: "이야기", meaningEn: "an account of events", example: "Grandma told us a story.", exampleKo: "할머니가 우리에게 이야기를 해줬어요.", emoji: "📖" },
    { word: "imagine", meaning: "상상하다", meaningEn: "to picture in your mind", example: "Imagine being a hero.", exampleKo: "영웅이 되는 걸 상상해요.", emoji: "💭" },
    { word: "imagination", meaning: "상상력", meaningEn: "the ability to picture things", example: "Children have great imagination.", exampleKo: "아이들은 풍부한 상상력이 있어요.", emoji: "✨" },
    { word: "creative", meaning: "창의적인", meaningEn: "having new ideas", example: "Artists are creative people.", exampleKo: "예술가는 창의적인 사람이에요.", emoji: "🎨" },
    { word: "talented", meaning: "재능 있는", meaningEn: "naturally good at something", example: "She is a talented singer.", exampleKo: "그녀는 재능 있는 가수예요.", emoji: "🎤" },
    { word: "skilled", meaning: "숙련된, 능숙한", meaningEn: "good at doing something", example: "He is a skilled cook.", exampleKo: "그는 숙련된 요리사예요.", emoji: "👨‍🍳" },
    { word: "famous", meaning: "유명한", meaningEn: "known by many people", example: "The Eiffel Tower is famous.", exampleKo: "에펠탑은 유명해요.", emoji: "🌟" },
    { word: "ordinary", meaning: "평범한", meaningEn: "usual; not special", example: "It was an ordinary day.", exampleKo: "평범한 하루였어요.", emoji: "🌤️" },
    { word: "extraordinary", meaning: "비범한", meaningEn: "very unusual or amazing", example: "The view was extraordinary.", exampleKo: "그 풍경은 비범했어요.", emoji: "🌟" },
    { word: "remember", meaning: "기억하다", meaningEn: "to keep in mind", example: "Remember your homework.", exampleKo: "숙제를 기억해요.", emoji: "🧠" },
    { word: "forget", meaning: "잊다", meaningEn: "to not remember", example: "Don't forget your bag.", exampleKo: "가방을 잊지 마요.", emoji: "🙈" },
    { word: "understand", meaning: "이해하다", meaningEn: "to know what something means", example: "I understand the lesson now.", exampleKo: "이제 수업을 이해해요.", emoji: "💡" },
    { word: "explain", meaning: "설명하다", meaningEn: "to make something clear", example: "Please explain the rules.", exampleKo: "규칙을 설명해 주세요.", emoji: "🗣️" },
    { word: "describe", meaning: "묘사하다", meaningEn: "to tell what something is like", example: "Describe your dream house.", exampleKo: "꿈의 집을 묘사해요.", emoji: "🏠" },
    { word: "compare", meaning: "비교하다", meaningEn: "to see how things differ", example: "Compare these two pictures.", exampleKo: "이 두 그림을 비교해요.", emoji: "⚖️" },
    { word: "contrast", meaning: "대조하다", meaningEn: "to show differences", example: "Contrast spring and fall.", exampleKo: "봄과 가을을 대조해요.", emoji: "🔄" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
