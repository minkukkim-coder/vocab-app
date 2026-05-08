// Batch 17 — G3 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "meiosis", meaning: "축소법", meaningEn: "rhetorical understatement that minimizes importance", example: "Calling a hurricane 'a bit windy' is humorous meiosis.", exampleKo: "허리케인을 '조금 바람 분다'고 하는 것은 유머러스한 축소법입니다.", emoji: "🌬️" },
    { word: "oxymoronic", meaning: "모순 어법의", meaningEn: "containing seemingly contradictory terms", example: "'Deafening silence' is a quintessentially oxymoronic phrase.", exampleKo: "'귀먹먹한 침묵'은 전형적인 모순 어법의 표현입니다.", emoji: "🤐" },
    { word: "tautological", meaning: "동어 반복적인", meaningEn: "saying the same thing twice using different words", example: "His tautological argument added redundancy without substance.", exampleKo: "그의 동어 반복적 논증은 실질 없이 중복만 더했습니다.", emoji: "🔂" },
    { word: "periphrastic", meaning: "우회적인", meaningEn: "expressing meaning indirectly using extra words", example: "Diplomatic statements often adopt periphrastic phrasing.", exampleKo: "외교 성명은 종종 우회적인 표현을 채택합니다.", emoji: "🌀" },
    { word: "verbosity", meaning: "장황함", meaningEn: "the quality of using too many words", example: "Academic verbosity often obscures rather than clarifies ideas.", exampleKo: "학문적 장황함은 종종 생각을 명료히 하기보다 흐립니다.", emoji: "📚" },
    { word: "concision", meaning: "간결성", meaningEn: "the quality of expressing much in few words", example: "Editors prize concision above ornamental eloquence.", exampleKo: "편집자들은 화려한 웅변보다 간결성을 높이 평가합니다.", emoji: "📏" },
    { word: "lucidity", meaning: "명석함", meaningEn: "clearness of thought or expression", example: "Her lucidity transformed complex theories into accessible ideas.", exampleKo: "그녀의 명석함은 복잡한 이론을 접근 가능한 아이디어로 바꿨습니다.", emoji: "💡" },
    { word: "bombast", meaning: "과장된 언사", meaningEn: "high-sounding but empty language", example: "Politicians' bombast often masks a lack of substance.", exampleKo: "정치인들의 과장된 언사는 종종 실속의 부재를 가립니다.", emoji: "📢" },
    { word: "fustian", meaning: "과장된 문체", meaningEn: "pretentious or pompous speech", example: "The Victorian critic dismissed the speech as mere fustian.", exampleKo: "빅토리아 시대 비평가는 그 연설을 단순한 과장된 문체로 일축했습니다.", emoji: "🎩" },
    { word: "braggadocio", meaning: "허풍떠는 말", meaningEn: "empty boasting or arrogant pretension", example: "His braggadocio about wealth couldn't hide modest origins.", exampleKo: "부에 대한 그의 허풍떠는 말은 평범한 출신을 가리지 못했습니다.", emoji: "💪" },
    { word: "vainglorious", meaning: "허영심에 찬", meaningEn: "excessively proud of one's achievements", example: "The vainglorious king commissioned countless monuments to himself.", exampleKo: "허영심에 찬 왕은 자신을 위한 수많은 기념비를 의뢰했습니다.", emoji: "👑" },
    { word: "grandiloquent", meaning: "거창한", meaningEn: "using lofty or extravagant language", example: "The senator's grandiloquent rhetoric impressed few constituents.", exampleKo: "상원의원의 거창한 수사는 유권자들을 거의 감동시키지 못했습니다.", emoji: "🎤" },
    { word: "reticence", meaning: "과묵함", meaningEn: "the quality of being reserved in speech", example: "Her reticence in interviews fueled public curiosity.", exampleKo: "인터뷰에서의 그녀의 과묵함은 대중의 호기심을 부추겼습니다.", emoji: "🤐" },
    { word: "perspicacity", meaning: "통찰력", meaningEn: "keenness of mental perception", example: "Her perspicacity allowed her to predict market shifts months ahead.", exampleKo: "그녀의 통찰력은 몇 달 앞서 시장 변화를 예측하게 했습니다.", emoji: "👁️" },
    { word: "discernment", meaning: "분별력", meaningEn: "the ability to judge well", example: "Cultivating discernment requires years of experience and reflection.", exampleKo: "분별력을 기르려면 수년간의 경험과 성찰이 필요합니다.", emoji: "⚖️" },
    { word: "decorum", meaning: "품위", meaningEn: "behavior in keeping with good taste", example: "The senator's decorum during heated debates earned bipartisan respect.", exampleKo: "격렬한 논쟁 중 상원의원의 품위는 초당적 존경을 얻었습니다.", emoji: "🤵" },
    { word: "comportment", meaning: "행동거지", meaningEn: "the manner in which one behaves in public", example: "The diplomat's comportment reflected decades of formal training.", exampleKo: "외교관의 행동거지는 수십 년간의 격식 있는 훈련을 반영했습니다.", emoji: "🚶" },
    { word: "deportment", meaning: "처신", meaningEn: "a person's manner of conducting themselves", example: "Her dignified deportment commanded the respect of every visitor.", exampleKo: "그녀의 위엄 있는 처신은 모든 방문객의 존경을 받았습니다.", emoji: "🏛️" },
    { word: "mien", meaning: "풍채", meaningEn: "a person's appearance or expressive manner", example: "His austere mien suggested years of monastic discipline.", exampleKo: "그의 엄격한 풍채는 수년간의 수도 생활을 시사했습니다.", emoji: "🧘" },
    { word: "demeanour", meaning: "태도", meaningEn: "outward behavior or bearing", example: "Her calm demeanour reassured the panicked passengers.", exampleKo: "그녀의 차분한 태도는 당황한 승객들을 안심시켰습니다.", emoji: "😌" },
    { word: "bearing", meaning: "태도", meaningEn: "a person's way of standing or moving", example: "His military bearing remained even decades after retirement.", exampleKo: "그의 군인다운 태도는 은퇴 후 수십 년이 지나도 남아 있었습니다.", emoji: "🪖" },
    { word: "panache", meaning: "당당함", meaningEn: "flamboyant confidence of style or manner", example: "He delivered his closing argument with remarkable panache.", exampleKo: "그는 놀라운 당당함으로 최종 변론을 펼쳤습니다.", emoji: "🪶" },
    { word: "élan", meaning: "활력", meaningEn: "vigorous spirit or enthusiasm", example: "The young troupe performed with infectious élan.", exampleKo: "젊은 극단은 전염성 있는 활력으로 공연했습니다.", emoji: "✨" },
    { word: "verve", meaning: "기백", meaningEn: "vigor and spirit in artistic performance", example: "Her violin solo was performed with breathtaking verve.", exampleKo: "그녀의 바이올린 독주는 숨막히는 기백으로 연주되었습니다.", emoji: "🎻" },
    { word: "brio", meaning: "활기", meaningEn: "vigor or vivacity of style or performance", example: "The conductor led the symphony with characteristic brio.", exampleKo: "지휘자는 특유의 활기로 교향곡을 이끌었습니다.", emoji: "🎼" },
    { word: "gusto", meaning: "취미", meaningEn: "enjoyment or vigor in doing something", example: "She tackled every challenge with infectious gusto.", exampleKo: "그녀는 전염성 있는 취미로 모든 도전에 임했습니다.", emoji: "💪" },
    { word: "zest", meaning: "열의", meaningEn: "great enthusiasm and energy", example: "His zest for learning never diminished, even in retirement.", exampleKo: "은퇴 후에도 학문에 대한 그의 열의는 줄어들지 않았습니다.", emoji: "🍋" },
    { word: "intensity", meaning: "강렬함", meaningEn: "the quality of being intense", example: "The intensity of her gaze unnerved every interviewer.", exampleKo: "그녀 시선의 강렬함은 모든 면접관을 동요시켰습니다.", emoji: "👀" },
    { word: "fervor", meaning: "열정", meaningEn: "intense and passionate feeling", example: "Religious fervor swept through the village during the festival.", exampleKo: "축제 동안 종교적 열정이 마을을 휩쓸었습니다.", emoji: "🕯️" },
    { word: "zealotry", meaning: "광신", meaningEn: "fanatical and uncompromising pursuit", example: "Political zealotry threatens the foundations of democratic dialogue.", exampleKo: "정치적 광신은 민주적 대화의 토대를 위협합니다.", emoji: "⚔️" },
    { word: "fanaticism", meaning: "광적인 행위", meaningEn: "extreme uncritical enthusiasm or beliefs", example: "Religious fanaticism has fueled conflicts throughout human history.", exampleKo: "종교적 광적인 행위는 인류 역사 내내 갈등을 부추겼습니다.", emoji: "😤" },
    { word: "jingoism", meaning: "극단적 애국주의", meaningEn: "extreme patriotism with aggressive foreign policy", example: "Wartime jingoism often drowns out reasoned diplomatic voices.", exampleKo: "전시 극단적 애국주의는 종종 합리적인 외교의 목소리를 묻습니다.", emoji: "📯" },
    { word: "demagogy", meaning: "선동 정치", meaningEn: "political activity that appeals to popular prejudices", example: "Historians warn against demagogy disguised as populist reform.", exampleKo: "역사가들은 대중주의 개혁으로 위장한 선동 정치를 경계합니다.", emoji: "🎭" },
    { word: "chicanery", meaning: "속임수", meaningEn: "the use of deception or trickery", example: "Investigators uncovered years of corporate chicanery and fraud.", exampleKo: "조사관들은 수년간의 기업 속임수와 사기를 밝혀냈습니다.", emoji: "🃏" },
    { word: "subterfuge", meaning: "속임수", meaningEn: "deceit used to achieve one's goal", example: "The spy avoided capture through ingenious subterfuge.", exampleKo: "그 첩보원은 기발한 속임수로 체포를 피했습니다.", emoji: "🕵️" },
    { word: "treachery", meaning: "반역", meaningEn: "betrayal of trust or loyalty", example: "The treachery of the trusted advisor stunned the entire court.", exampleKo: "신뢰받던 고문의 반역은 궁정 전체를 충격에 빠뜨렸습니다.", emoji: "⚔️" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
