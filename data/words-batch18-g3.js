// Batch 18 — G3 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "eudaimonia", meaning: "행복한 삶", meaningEn: "human flourishing in Aristotelian ethics", example: "Aristotle argued that eudaimonia requires virtuous action throughout life.", exampleKo: "아리스토텔레스는 행복한 삶에는 평생의 덕있는 행동이 필요하다고 주장했습니다.", emoji: "🌟" },
    { word: "pathos", meaning: "감정 호소", meaningEn: "emotional appeal in rhetoric", example: "Effective speeches balance logos, ethos, and pathos in measured proportions.", exampleKo: "효과적인 연설은 이성·말씀, 신뢰, 감정 호소를 적절히 균형 잡습니다.", emoji: "💔" },
    { word: "ethos", meaning: "신뢰성 호소", meaningEn: "credibility-based appeal in persuasion", example: "A speaker's ethos depends on perceived honesty and expertise.", exampleKo: "연사의 신뢰성 호소는 인지된 정직성과 전문성에 달려 있습니다.", emoji: "🎓" },
    { word: "telos", meaning: "목적", meaningEn: "ultimate aim or purpose", example: "Every action, Aristotle claimed, is directed toward some telos.", exampleKo: "아리스토텔레스는 모든 행동이 어떤 목적을 향한다고 주장했습니다.", emoji: "🎯" },
    { word: "catharsis", meaning: "정화", meaningEn: "purification of emotions through art", example: "Greek tragedy was designed to provoke catharsis in audiences.", exampleKo: "그리스 비극은 관객에게 정화를 일으키도록 설계되었습니다.", emoji: "🧘‍♀️" },
    { word: "bricolage", meaning: "재활용 창작", meaningEn: "creation from a diverse range of available things", example: "Postmodern art often celebrates bricolage and cultural sampling.", exampleKo: "포스트모던 예술은 종종 재활용 창작과 문화적 샘플링을 기립니다.", emoji: "🧩" },
    { word: "pastiche", meaning: "혼성 모방", meaningEn: "artistic work imitating other styles", example: "The film is a clever pastiche of 1940s noir conventions.", exampleKo: "그 영화는 1940년대 누아르 관습의 영리한 혼성 모방입니다.", emoji: "🎬" },
    { word: "hermeneutic", meaning: "해석학적인", meaningEn: "concerning interpretation, especially of texts", example: "The hermeneutic tradition focuses on the act of textual interpretation.", exampleKo: "해석학적 전통은 텍스트 해석 행위에 초점을 맞춥니다.", emoji: "📚" },
    { word: "midrashic", meaning: "미드라시적인", meaningEn: "pertaining to rabbinic interpretive method", example: "Her midrashic reading uncovered hidden ethical dimensions.", exampleKo: "그녀의 미드라시적 독해는 숨겨진 윤리적 차원을 드러냈습니다.", emoji: "✡️" },
    { word: "trace", meaning: "흔적", meaningEn: "Derridean concept of meaning as residue", example: "The trace persists even when the original meaning vanishes.", exampleKo: "원래의 의미가 사라져도 흔적은 지속됩니다.", emoji: "👣" },
    { word: "governmentality", meaning: "통치성", meaningEn: "Foucauldian concept of art and rationality of governing", example: "Modern governmentality extends beyond formal political institutions.", exampleKo: "현대 통치성은 공식 정치 제도를 넘어 확장됩니다.", emoji: "🏛️" },
    { word: "heterotopia", meaning: "헤테로토피아", meaningEn: "Foucault's term for spaces of otherness", example: "Cemeteries function as classic heterotopias in Foucault's analysis.", exampleKo: "묘지는 푸코의 분석에서 전형적인 헤테로토피아로 기능합니다.", emoji: "⚰️" },
    { word: "epistemic", meaning: "인식론적인", meaningEn: "relating to knowledge or knowing", example: "Foucault traced epistemic shifts across different historical periods.", exampleKo: "푸코는 다양한 역사적 시대에 걸친 인식론적 변화를 추적했습니다.", emoji: "🧠" },
    { word: "doxa", meaning: "통념", meaningEn: "common belief or popular opinion", example: "Bourdieu analyzed how doxa naturalizes social hierarchies.", exampleKo: "부르디외는 통념이 사회적 위계를 자연화하는 방식을 분석했습니다.", emoji: "💭" },
    { word: "habitus", meaning: "아비투스", meaningEn: "ingrained habits and dispositions shaping perception", example: "Class habitus shapes everything from speech to taste in art.", exampleKo: "계급 아비투스는 말투에서 예술 취향까지 모든 것을 형성합니다.", emoji: "🎩" },
    { word: "subaltern", meaning: "하위 주체", meaningEn: "of low rank or marginalized in society", example: "Postcolonial scholars amplify subaltern voices long suppressed by empire.", exampleKo: "탈식민주의 학자들은 제국에 오래 억압된 하위 주체의 목소리를 증폭합니다.", emoji: "🗣️" },
    { word: "decolonial", meaning: "탈식민의", meaningEn: "seeking to dismantle colonial legacies", example: "Decolonial scholarship reframes global knowledge production.", exampleKo: "탈식민 학문은 세계 지식 생산의 틀을 다시 짭니다.", emoji: "🌐" },
    { word: "orientalism", meaning: "오리엔탈리즘", meaningEn: "Said's critique of Western depictions of the East", example: "Said's orientalism transformed how scholars approach cross-cultural representation.", exampleKo: "사이드의 오리엔탈리즘은 학자들이 문화 간 재현에 접근하는 방식을 변화시켰습니다.", emoji: "🏯" },
    { word: "syncretic", meaning: "혼합주의적인", meaningEn: "combining different beliefs or practices", example: "Latin American religion is famously syncretic, blending diverse traditions.", exampleKo: "라틴 아메리카 종교는 다양한 전통을 섞은 혼합주의적인 것으로 유명합니다.", emoji: "✨" },
    { word: "ecumenism", meaning: "에큐메니즘", meaningEn: "principle of promoting unity among Christian churches", example: "Twentieth-century ecumenism reduced longstanding theological divisions.", exampleKo: "20세기 에큐메니즘은 오랜 신학적 분열을 줄였습니다.", emoji: "⛪" },
    { word: "millenarian", meaning: "천년왕국설의", meaningEn: "believing in a coming thousand-year golden age", example: "Millenarian movements often emerged during periods of social upheaval.", exampleKo: "천년왕국설 운동은 종종 사회적 격변기에 등장했습니다.", emoji: "🌅" },
    { word: "apocalyptic", meaning: "묵시록적인", meaningEn: "describing prophesied destruction or catastrophe", example: "Apocalyptic literature flourished during late antiquity's crises.", exampleKo: "묵시록적 문학은 고대 후기의 위기 동안 번성했습니다.", emoji: "☄️" },
    { word: "pantheism", meaning: "범신론", meaningEn: "belief that God and the universe are identical", example: "Spinoza developed a sophisticated pantheism in the seventeenth century.", exampleKo: "스피노자는 17세기에 정교한 범신론을 발전시켰습니다.", emoji: "🌌" },
    { word: "deism", meaning: "이신론", meaningEn: "belief in a creator god who does not intervene", example: "Many Enlightenment thinkers embraced deism over orthodox Christianity.", exampleKo: "많은 계몽주의 사상가들은 정통 기독교보다 이신론을 받아들였습니다.", emoji: "⚙️" },
    { word: "quietism", meaning: "정적주의", meaningEn: "passive contemplative spiritual movement", example: "Seventeenth-century quietism emphasized passive devotion to the divine.", exampleKo: "17세기 정적주의는 신성에 대한 수동적 헌신을 강조했습니다.", emoji: "🤲" },
    { word: "pietism", meaning: "경건주의", meaningEn: "movement emphasizing personal piety", example: "German pietism deeply influenced later evangelical movements.", exampleKo: "독일 경건주의는 후기 복음주의 운동에 깊은 영향을 미쳤습니다.", emoji: "🙏" },
    { word: "scholasticism", meaning: "스콜라 철학", meaningEn: "medieval system combining theology and philosophy", example: "Aquinas's scholasticism synthesized Aristotelian and Christian thought.", exampleKo: "아퀴나스의 스콜라 철학은 아리스토텔레스 사상과 기독교를 종합했습니다.", emoji: "🏛️" },
    { word: "patristic", meaning: "교부의", meaningEn: "concerning early Christian fathers", example: "Patristic literature shaped Christian doctrine for centuries.", exampleKo: "교부 문헌은 수 세기 동안 기독교 교리를 형성했습니다.", emoji: "📜" },
    { word: "talmudic", meaning: "탈무드의", meaningEn: "relating to the Talmud or rabbinic learning", example: "Talmudic argumentation showcases sophisticated dialectical reasoning.", exampleKo: "탈무드의 논증은 정교한 변증법적 추론을 보여줍니다.", emoji: "📚" },
    { word: "kabbalistic", meaning: "카발라의", meaningEn: "relating to Jewish mystical tradition", example: "Kabbalistic interpretation reveals hidden layers within sacred texts.", exampleKo: "카발라의 해석은 성스러운 텍스트 속 숨겨진 층들을 드러냅니다.", emoji: "🕯️" },
    { word: "gnostic", meaning: "영지주의의", meaningEn: "relating to early religious dualism emphasizing knowledge", example: "Gnostic texts discovered at Nag Hammadi revolutionized early Christian studies.", exampleKo: "나그함마디에서 발견된 영지주의 문헌은 초기 기독교 연구에 혁명을 일으켰습니다.", emoji: "📜" },
    { word: "neoplatonic", meaning: "신플라톤주의의", meaningEn: "relating to Plotinus's mystical philosophy", example: "Neoplatonic ideas flowed into both Christian and Islamic mysticism.", exampleKo: "신플라톤주의 사상은 기독교와 이슬람 신비주의 모두에 흘러들어 갔습니다.", emoji: "🌀" },
    { word: "manichaean", meaning: "선악 이원론의", meaningEn: "relating to dualistic religious philosophy", example: "Manichaean dualism divides reality between absolute good and evil.", exampleKo: "선악 이원론은 현실을 절대적 선과 악으로 나눕니다.", emoji: "☯️" },
    { word: "zoroastrian", meaning: "조로아스터교의", meaningEn: "relating to ancient Persian dualistic religion", example: "Zoroastrian eschatology influenced later Abrahamic traditions.", exampleKo: "조로아스터교 종말론은 후기 아브라함 전통에 영향을 주었습니다.", emoji: "🔥" },
    { word: "vedic", meaning: "베다의", meaningEn: "relating to ancient Hindu sacred texts", example: "Vedic philosophy continues to inspire global spiritual seekers.", exampleKo: "베다 철학은 전 세계 영적 구도자들에게 계속 영감을 줍니다.", emoji: "🕉️" },
    { word: "samsara", meaning: "윤회", meaningEn: "cycle of birth, death, and rebirth", example: "Samsara underlies much of Indian philosophical reflection on liberation.", exampleKo: "윤회는 해탈에 관한 인도 철학적 성찰의 많은 부분을 떠받칩니다.", emoji: "🔄" },
    { word: "moksha", meaning: "해탈", meaningEn: "Hindu concept of spiritual liberation", example: "Moksha represents release from the endless cycle of samsara.", exampleKo: "해탈은 끝없는 윤회 순환으로부터의 해방을 나타냅니다.", emoji: "🪷" },
    { word: "satori", meaning: "깨달음", meaningEn: "Zen Buddhist sudden enlightenment", example: "Zen masters describe satori as a sudden flash of awakening.", exampleKo: "선사들은 깨달음을 갑작스러운 각성의 섬광이라 묘사합니다.", emoji: "💫" },
    { word: "dukkha", meaning: "고통", meaningEn: "Buddhist concept of suffering or unsatisfactoriness", example: "Recognizing dukkha forms the first noble truth of Buddhism.", exampleKo: "고통을 인식하는 것은 불교의 첫 번째 거룩한 진리를 형성합니다.", emoji: "😔" },
    { word: "wabi-sabi", meaning: "와비사비", meaningEn: "Japanese aesthetic of imperfect beauty", example: "Wabi-sabi finds elegance in weathered materials and asymmetry.", exampleKo: "와비사비는 풍화된 재료와 비대칭에서 우아함을 발견합니다.", emoji: "🍃" },
    { word: "mono-no-aware", meaning: "사물의 비애", meaningEn: "Japanese sensitivity to ephemeral beauty", example: "Mono-no-aware permeates classical Japanese poetry about cherry blossoms.", exampleKo: "사물의 비애는 벚꽃에 관한 고전 일본 시에 스며 있습니다.", emoji: "🌸" },
    { word: "miyabi", meaning: "미야비", meaningEn: "Japanese aesthetic of refined elegance", example: "Heian court culture cultivated miyabi as the highest aesthetic ideal.", exampleKo: "헤이안 궁정 문화는 미야비를 최고의 미적 이상으로 길렀습니다.", emoji: "🎎" },
    { word: "ma", meaning: "마(間)", meaningEn: "Japanese aesthetic concept of negative space", example: "Japanese architecture uses ma to create contemplative atmosphere.", exampleKo: "일본 건축은 마(間)를 사용해 명상적 분위기를 만듭니다.", emoji: "⛩️" },
    { word: "kintsugi", meaning: "킨츠기", meaningEn: "Japanese art of repairing pottery with gold", example: "Kintsugi philosophy embraces breakage as part of an object's history.", exampleKo: "킨츠기 철학은 깨짐을 사물 역사의 일부로 받아들입니다.", emoji: "🏺" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
