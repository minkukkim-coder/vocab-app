// Batch 21 — G2 추가 어휘 55개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "recycle", meaning: "재활용하다", meaningEn: "to use something again in a new way", example: "We recycle bottles and paper at school.", exampleKo: "우리는 학교에서 병과 종이를 재활용해요.", emoji: "♻️" },
    { word: "pollution", meaning: "오염", meaningEn: "harmful substances in the environment", example: "Air pollution makes it hard to breathe.", exampleKo: "공기 오염은 숨쉬기 어렵게 만들어요.", emoji: "🏭" },
    { word: "thermometer", meaning: "온도계", meaningEn: "a tool used to measure temperature", example: "The thermometer shows it is 36 degrees.", exampleKo: "온도계가 36도를 가리키고 있어요.", emoji: "🌡️" },
    { word: "evaporation", meaning: "증발", meaningEn: "when liquid turns into vapor or gas", example: "Evaporation happens when water is heated.", exampleKo: "물이 가열되면 증발이 일어나요.", emoji: "💨" },
    { word: "volunteer", meaning: "자원봉사하다", meaningEn: "to offer help without being paid", example: "She volunteers at the local library on weekends.", exampleKo: "그녀는 주말마다 지역 도서관에서 자원봉사를 해요.", emoji: "🤝" },
    { word: "nonprofit", meaning: "비영리의", meaningEn: "not aiming to make a profit", example: "The nonprofit organization helps homeless people.", exampleKo: "그 비영리 단체는 노숙자를 돕고 있어요.", emoji: "🏛️" },
    { word: "community", meaning: "지역사회", meaningEn: "a group of people living in one area", example: "Our community built a new playground together.", exampleKo: "우리 지역사회가 함께 새 놀이터를 만들었어요.", emoji: "🏘️" },
    { word: "estimate", meaning: "추정하다", meaningEn: "to make an approximate calculation", example: "Can you estimate how many apples are in the box?", exampleKo: "상자에 사과가 몇 개 있는지 추정할 수 있어요?", emoji: "🔢" },
    { word: "fraction", meaning: "분수", meaningEn: "a number that represents part of a whole", example: "One half is written as the fraction 1/2.", exampleKo: "2분의 1은 분수 1/2로 씁니다.", emoji: "½" },
    { word: "geometry", meaning: "기하학", meaningEn: "the study of shapes and measurements", example: "We learned about triangles in geometry class.", exampleKo: "우리는 기하학 시간에 삼각형에 대해 배웠어요.", emoji: "📐" },
    { word: "nutrition", meaning: "영양", meaningEn: "the process of getting food and nutrients", example: "Good nutrition helps children grow strong and healthy.", exampleKo: "좋은 영양은 아이들이 건강하게 자라도록 도와요.", emoji: "🥗" },
    { word: "hygiene", meaning: "위생", meaningEn: "practices that keep you clean and healthy", example: "Washing your hands is an important part of hygiene.", exampleKo: "손 씻기는 위생의 중요한 부분이에요.", emoji: "🧼" },
    { word: "immune", meaning: "면역의", meaningEn: "protected against a disease or infection", example: "Vaccines help make your body immune to diseases.", exampleKo: "백신은 몸이 질병에 면역이 되도록 도와줘요.", emoji: "🛡️" },
    { word: "software", meaning: "소프트웨어", meaningEn: "programs that run on a computer", example: "We need to update the software on this laptop.", exampleKo: "이 노트북의 소프트웨어를 업데이트해야 해요.", emoji: "💻" },
    { word: "hardware", meaning: "하드웨어", meaningEn: "the physical parts of a computer", example: "The keyboard and mouse are hardware devices.", exampleKo: "키보드와 마우스는 하드웨어 장치예요.", emoji: "🖥️" },
    { word: "upload", meaning: "업로드하다", meaningEn: "to send data from a device to the internet", example: "She uploaded her project to the school website.", exampleKo: "그녀는 학교 웹사이트에 프로젝트를 업로드했어요.", emoji: "⬆️" },
    { word: "hemisphere", meaning: "반구", meaningEn: "one half of the Earth or a sphere", example: "Australia is located in the southern hemisphere.", exampleKo: "호주는 남반구에 위치해 있어요.", emoji: "🌍" },
    { word: "latitude", meaning: "위도", meaningEn: "distance north or south of the equator", example: "The equator is at zero degrees latitude.", exampleKo: "적도는 위도 0도에 있어요.", emoji: "🗺️" },
    { word: "longitude", meaning: "경도", meaningEn: "distance east or west of the prime meridian", example: "We use longitude to find locations on a map.", exampleKo: "우리는 지도에서 위치를 찾을 때 경도를 사용해요.", emoji: "🌐" },
    { word: "erosion", meaning: "침식", meaningEn: "gradual wearing away of rock or soil", example: "Erosion from rain has damaged the hillside.", exampleKo: "비로 인한 침식이 언덕을 손상시켰어요.", emoji: "⛰️" },
    { word: "fossil", meaning: "화석", meaningEn: "preserved remains of an ancient living thing", example: "The museum displayed a dinosaur fossil.", exampleKo: "박물관에 공룡 화석이 전시되어 있었어요.", emoji: "🦕" },
    { word: "migrate", meaning: "이동하다", meaningEn: "to move from one place to another seasonally", example: "Many birds migrate south during winter.", exampleKo: "많은 새들이 겨울 동안 남쪽으로 이동해요.", emoji: "🐦" },
    { word: "habitat", meaning: "서식지", meaningEn: "the natural home of an animal or plant", example: "The rainforest is the habitat of many rare animals.", exampleKo: "열대우림은 많은 희귀 동물들의 서식지예요.", emoji: "🌿" },
    { word: "organism", meaning: "생물체", meaningEn: "a living thing such as a plant or animal", example: "Bacteria are tiny organisms that live everywhere.", exampleKo: "박테리아는 어디에나 사는 작은 생물체예요.", emoji: "🔬" },
    { word: "photosynthesis", meaning: "광합성", meaningEn: "how plants make food using sunlight", example: "Plants use photosynthesis to produce their own food.", exampleKo: "식물은 광합성을 이용해 스스로 먹이를 만들어요.", emoji: "🌱" },
    { word: "gravity", meaning: "중력", meaningEn: "the force that pulls objects toward the Earth", example: "Gravity keeps us from floating off the ground.", exampleKo: "중력이 우리를 땅에서 떠오르지 않게 해줘요.", emoji: "🍎" },
    { word: "mineral", meaning: "광물", meaningEn: "a natural solid substance found in the earth", example: "Salt is a mineral that we use every day.", exampleKo: "소금은 우리가 매일 사용하는 광물이에요.", emoji: "💎" },
    { word: "precipitation", meaning: "강수", meaningEn: "water that falls from clouds as rain or snow", example: "The weather forecast predicted heavy precipitation.", exampleKo: "일기 예보에서 강한 강수를 예보했어요.", emoji: "🌧️" },
    { word: "equation", meaning: "방정식", meaningEn: "a mathematical statement showing two equal values", example: "Can you solve this equation: 2x + 3 = 11?", exampleKo: "이 방정식을 풀 수 있나요: 2x + 3 = 11?", emoji: "➕" },
    { word: "proportion", meaning: "비율", meaningEn: "a part considered in relation to the whole", example: "A large proportion of students passed the exam.", exampleKo: "많은 비율의 학생들이 시험에 합격했어요.", emoji: "📊" },
    { word: "variable", meaning: "변수", meaningEn: "a quantity that can change or vary", example: "In the experiment, temperature was the variable.", exampleKo: "실험에서 온도가 변수였어요.", emoji: "🔣" },
    { word: "average", meaning: "평균", meaningEn: "the sum of numbers divided by their count", example: "The average score in our class was 85.", exampleKo: "우리 반의 평균 점수는 85점이었어요.", emoji: "📈" },
    { word: "medicine", meaning: "의약품", meaningEn: "a substance used to treat illness", example: "The doctor prescribed medicine for the infection.", exampleKo: "의사가 감염을 치료하기 위해 의약품을 처방했어요.", emoji: "💊" },
    { word: "symptom", meaning: "증상", meaningEn: "a sign that shows you are sick", example: "A fever is a common symptom of the flu.", exampleKo: "발열은 독감의 흔한 증상이에요.", emoji: "🤒" },
    { word: "prevention", meaning: "예방", meaningEn: "stopping something bad from happening", example: "Prevention of disease is better than treatment.", exampleKo: "질병의 예방이 치료보다 더 중요해요.", emoji: "🚫" },
    { word: "vaccine", meaning: "백신", meaningEn: "a substance that protects against disease", example: "Children receive a vaccine to prevent measles.", exampleKo: "어린이들은 홍역을 예방하기 위해 백신을 맞아요.", emoji: "💉" },
    { word: "network", meaning: "네트워크", meaningEn: "a system of connected computers or devices", example: "Our school has a fast internet network.", exampleKo: "우리 학교에는 빠른 인터넷 네트워크가 있어요.", emoji: "🔗" },
    { word: "application", meaning: "애플리케이션", meaningEn: "a computer program designed for a specific use", example: "She downloaded a math application on her tablet.", exampleKo: "그녀는 태블릿에 수학 애플리케이션을 다운로드했어요.", emoji: "📱" },
    { word: "server", meaning: "서버", meaningEn: "a computer that provides services to other computers", example: "The school website is stored on a server.", exampleKo: "학교 웹사이트는 서버에 저장되어 있어요.", emoji: "🖧" },
    { word: "equator", meaning: "적도", meaningEn: "an imaginary line around the middle of the Earth", example: "Countries near the equator have very hot weather.", exampleKo: "적도 근처의 나라들은 날씨가 매우 더워요.", emoji: "🌍" },
    { word: "glacier", meaning: "빙하", meaningEn: "a large slow-moving mass of ice", example: "The glacier is melting due to climate change.", exampleKo: "기후 변화로 인해 빙하가 녹고 있어요.", emoji: "🧊" },
    { word: "tundra", meaning: "툰드라", meaningEn: "a cold flat area with no trees", example: "Few animals can survive in the cold tundra.", exampleKo: "차가운 툰드라에서 살아남을 수 있는 동물은 거의 없어요.", emoji: "❄️" },
    { word: "desert", meaning: "사막", meaningEn: "a dry area with very little rain or plants", example: "The Sahara is the largest hot desert in the world.", exampleKo: "사하라는 세계에서 가장 큰 뜨거운 사막이에요.", emoji: "🏜️" },
    { word: "renewable", meaning: "재생 가능한", meaningEn: "able to be replaced naturally over time", example: "Solar energy is a renewable source of power.", exampleKo: "태양 에너지는 재생 가능한 에너지원이에요.", emoji: "☀️" },
    { word: "exhaust", meaning: "배기가스", meaningEn: "waste gases produced by engines", example: "Car exhaust contributes to air pollution in cities.", exampleKo: "자동차 배기가스는 도시의 대기 오염을 일으켜요.", emoji: "🚗" },
    { word: "sanitation", meaning: "위생 시설", meaningEn: "systems for keeping places clean and healthy", example: "Good sanitation prevents the spread of disease.", exampleKo: "좋은 위생 시설은 질병 확산을 막아줘요.", emoji: "🚿" },
    { word: "representative", meaning: "대표자", meaningEn: "a person who speaks or acts for others", example: "She was chosen as the class representative.", exampleKo: "그녀는 학급 대표자로 선출되었어요.", emoji: "🗣️" },
    { word: "parliament", meaning: "의회", meaningEn: "a group of people who make laws for a country", example: "Members of parliament vote on new laws.", exampleKo: "의회 의원들은 새로운 법안에 투표해요.", emoji: "🏛️" },
    { word: "regulation", meaning: "규정", meaningEn: "an official rule made by an authority", example: "There are strict regulations about food safety.", exampleKo: "식품 안전에 관한 엄격한 규정이 있어요.", emoji: "📜" },
    { word: "statistic", meaning: "통계", meaningEn: "a fact expressed as a number or percentage", example: "The statistic shows that reading improves with practice.", exampleKo: "통계에 따르면 독서 능력은 연습으로 향상돼요.", emoji: "📉" },
    { word: "surplus", meaning: "잉여", meaningEn: "an amount left over after needs are met", example: "The school had a surplus of art supplies.", exampleKo: "학교에 미술 재료가 남아돌았어요.", emoji: "➕" },
    { word: "scarcity", meaning: "부족", meaningEn: "a shortage of something that is needed", example: "Water scarcity is a problem in dry regions.", exampleKo: "물 부족은 건조한 지역의 문제예요.", emoji: "💧" },
    { word: "export", meaning: "수출하다", meaningEn: "to send goods to another country for sale", example: "Korea exports cars and electronics worldwide.", exampleKo: "한국은 자동차와 전자제품을 전 세계에 수출해요.", emoji: "📦" },
    { word: "import", meaning: "수입하다", meaningEn: "to bring goods into a country from abroad", example: "We import many tropical fruits from other countries.", exampleKo: "우리는 다른 나라에서 많은 열대 과일을 수입해요.", emoji: "🚢" },
    { word: "currency", meaning: "통화", meaningEn: "the money used in a particular country", example: "The currency used in Japan is the yen.", exampleKo: "일본에서 사용하는 통화는 엔화예요.", emoji: "💴" }
  ];
  const seen = new Set(VOCABULARY.G2.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G2.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
