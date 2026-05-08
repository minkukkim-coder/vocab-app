// Batch 10 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "halcyon", meaning: "평온한, 황금기의", meaningEn: "denoting a period of peace and happiness", example: "He recalled the halcyon days of his postdoctoral research years.", exampleKo: "그는 박사후 연구 시절의 평온한 나날들을 회상했어요.", emoji: "🌅" },
    { word: "elysian", meaning: "낙원의, 더없이행복한", meaningEn: "delightful; resembling paradise", example: "The retreat offered scholars an elysian environment for sustained reflection.", exampleKo: "그 휴양지는 학자들에게 지속적 사색을 위한 낙원같은 환경을 제공했어요.", emoji: "🏝️" },
    { word: "edenic", meaning: "에덴같은, 낙원의", meaningEn: "resembling the garden of Eden", example: "Pre-industrial pastoral literature often depicted edenic countryside scenes.", exampleKo: "산업화 이전 전원 문학은 종종 에덴같은 시골 풍경을 묘사했어요.", emoji: "🌳" },
    { word: "pastoral", meaning: "목가적인, 전원의", meaningEn: "depicting countryside life idyllically", example: "Renaissance pastoral works developed sophisticated allegorical conventions.", exampleKo: "르네상스 목가 작품은 정교한 알레고리적 관습을 발전시켰어요.", emoji: "🌾" },
    { word: "demotic", meaning: "민중의, 통속의", meaningEn: "of ordinary people; popular speech", example: "Demotic Greek developed alongside the formal classical language.", exampleKo: "민중 그리스어는 격식있는 고전 언어와 나란히 발전했어요.", emoji: "🗣️" },
    { word: "vernacular", meaning: "방언, 토착어", meaningEn: "the everyday speech of a region", example: "Dante's choice of vernacular rather than Latin transformed European literature.", exampleKo: "단테의 라틴어 대신 토착어 선택은 유럽 문학을 변화시켰어요.", emoji: "💬" },
    { word: "patois", meaning: "사투리, 방언", meaningEn: "regional dialect or non-standard speech", example: "The novelist faithfully reproduced the regional patois in his characters' dialogue.", exampleKo: "그 소설가는 등장인물 대사에서 지역 사투리를 충실히 재현했어요.", emoji: "🗣️" },
    { word: "lingua", meaning: "공용어 (lingua franca)", meaningEn: "a common language; bridge language", example: "English serves as the lingua franca of international scholarship.", exampleKo: "영어는 국제 학문의 공용어 역할을 해요.", emoji: "🌐" },
    { word: "creole", meaning: "크리올, 혼성어", meaningEn: "a mixed language that became native", example: "Haitian Creole emerged from colonial language contact processes.", exampleKo: "아이티 크리올어는 식민지 시대 언어 접촉 과정에서 출현했어요.", emoji: "🌴" },
    { word: "pidgin", meaning: "혼합어, 피진어", meaningEn: "simplified language for trade communication", example: "Tok Pisin began as pidgin before becoming a national language.", exampleKo: "토크 피신은 국가 언어가 되기 전 피진어로 시작되었어요.", emoji: "🤝" },
    { word: "semantics", meaning: "의미론", meaningEn: "the study of meaning in language", example: "Formal semantics applies logical tools to natural language meaning.", exampleKo: "형식 의미론은 자연 언어의 의미에 논리적 도구를 적용해요.", emoji: "💭" },
    { word: "diphthong", meaning: "이중모음", meaningEn: "a sound made by combining two vowels", example: "English contains numerous diphthongs in its vowel inventory.", exampleKo: "영어는 모음 목록에 많은 이중모음을 포함해요.", emoji: "🔊" },
    { word: "fricative", meaning: "마찰음", meaningEn: "consonant produced by airflow friction", example: "Fricative consonants involve narrow constriction of the vocal tract.", exampleKo: "마찰 자음은 성도의 좁은 협착을 포함해요.", emoji: "💨" },
    { word: "sibilant", meaning: "치찰음", meaningEn: "a hissing speech sound", example: "Sibilant sounds dominate the children's tongue-twister exercise.", exampleKo: "치찰음은 어린이 잰말 놀이를 지배해요.", emoji: "🐍" },
    { word: "glottal", meaning: "성문의", meaningEn: "produced at the vocal cords", example: "Glottal stops appear in many world languages.", exampleKo: "성문 폐쇄음은 많은 세계 언어에 나타나요.", emoji: "🗣️" },
    { word: "guttural", meaning: "후음의", meaningEn: "produced in the throat", example: "Some Semitic languages preserve distinctively guttural consonants.", exampleKo: "일부 셈어족 언어는 독특한 후음 자음을 보존해요.", emoji: "🗣️" },
    { word: "labial", meaning: "순음의", meaningEn: "produced with the lips", example: "Labial consonants form one of the basic articulatory categories.", exampleKo: "순음 자음은 기본 조음 범주 중 하나를 형성해요.", emoji: "👄" },
    { word: "dental", meaning: "치음의", meaningEn: "produced with the teeth", example: "English includes both interdental and alveolar dental sounds.", exampleKo: "영어는 치간음과 치조음을 모두 포함해요.", emoji: "🦷" },
    { word: "palatal", meaning: "구개음의", meaningEn: "produced with the palate", example: "Palatal consonants involve tongue contact with the hard palate.", exampleKo: "구개음 자음은 혀와 경구개의 접촉을 포함해요.", emoji: "👅" },
    { word: "velar", meaning: "연구개음의", meaningEn: "produced at the soft palate", example: "Velar consonants are articulated against the soft palate.", exampleKo: "연구개음 자음은 연구개에 대해 조음돼요.", emoji: "👅" },
    { word: "uvular", meaning: "구개수음의", meaningEn: "produced at the uvula", example: "French and Arabic feature distinctive uvular consonants.", exampleKo: "프랑스어와 아랍어는 독특한 구개수음을 특징으로 해요.", emoji: "🗣️" },
    { word: "isolating", meaning: "고립어의", meaningEn: "characterized by simple word forms", example: "Mandarin Chinese exemplifies an isolating language type.", exampleKo: "표준 중국어는 고립어 유형을 예시해요.", emoji: "🔤" },
    { word: "ergative", meaning: "능격의", meaningEn: "marking the agent of transitive verbs", example: "Basque maintains an ergative-absolutive case alignment.", exampleKo: "바스크어는 능격-절대격 격 정렬을 유지해요.", emoji: "📝" },
    { word: "nominative", meaning: "주격의", meaningEn: "marking the subject of a verb", example: "Indo-European languages typically distinguish nominative from accusative cases.", exampleKo: "인도유럽어는 일반적으로 주격을 대격과 구별해요.", emoji: "👤" },
    { word: "genitive", meaning: "속격의, 소유격의", meaningEn: "marking possession or relationship", example: "The genitive case indicates various relational meanings.", exampleKo: "속격은 다양한 관계적 의미를 나타내요.", emoji: "🔗" },
    { word: "dative", meaning: "여격의", meaningEn: "marking indirect objects", example: "German preserves the dative case in modern grammar.", exampleKo: "독일어는 현대 문법에서 여격을 보존해요.", emoji: "🎁" },
    { word: "vocative", meaning: "호격의", meaningEn: "used in addressing or calling", example: "Latin vocative differs morphologically from nominative.", exampleKo: "라틴어 호격은 주격과 형태론적으로 달라요.", emoji: "📣" },
    { word: "subjunctive", meaning: "가정법의, 접속법의", meaningEn: "expressing wishes or hypothetical situations", example: "English subjunctive forms have largely receded in contemporary usage.", exampleKo: "영어 가정법 형태는 현대 사용에서 크게 후퇴했어요.", emoji: "💭" },
    { word: "indicative", meaning: "직설법의", meaningEn: "stating facts", example: "Indicative mood asserts propositions about reality.", exampleKo: "직설법은 현실에 대한 명제를 단언해요.", emoji: "📌" },
    { word: "imperative", meaning: "명령법의, 명령적인", meaningEn: "expressing commands", example: "The imperative mood directly issues commands or requests.", exampleKo: "명령법은 명령이나 요청을 직접 발해요.", emoji: "❗" },
    { word: "conditional", meaning: "조건법의, 조건적인", meaningEn: "expressing conditions", example: "Conditional sentences often involve counterfactual reasoning.", exampleKo: "조건문은 종종 반사실적 추론을 포함해요.", emoji: "🔀" },
    { word: "optative", meaning: "기원법의", meaningEn: "expressing wishes", example: "Ancient Greek preserved a distinct optative mood for wishes.", exampleKo: "고대 그리스어는 소원을 위한 별개의 기원법을 보존했어요.", emoji: "🌟" },
    { word: "evidential", meaning: "증거법의, 증거의", meaningEn: "marking source of information", example: "Some languages grammatically encode evidential distinctions.", exampleKo: "일부 언어는 증거적 구별을 문법적으로 부호화해요.", emoji: "🔍" },
    { word: "modality", meaning: "양태성, 양상", meaningEn: "expressing necessity or possibility", example: "Modality systems vary substantially across world languages.", exampleKo: "양태성 체계는 세계 언어에 걸쳐 상당히 다양해요.", emoji: "💭" },
    { word: "aspect", meaning: "상, 양상", meaningEn: "grammatical category of action duration", example: "Slavic languages employ rich aspectual distinctions.", exampleKo: "슬라브어는 풍부한 상적 구별을 사용해요.", emoji: "⏳" },
    { word: "perfective", meaning: "완결상의", meaningEn: "viewing action as complete whole", example: "Perfective aspect presents events as bounded completed wholes.", exampleKo: "완결상은 사건을 경계지어진 완료된 전체로 제시해요.", emoji: "✅" },
    { word: "imperfective", meaning: "미완결상의", meaningEn: "viewing action as ongoing", example: "Imperfective aspect emphasizes the internal temporal structure of events.", exampleKo: "미완결상은 사건의 내부 시간 구조를 강조해요.", emoji: "🔄" },
    { word: "entailment", meaning: "함의, 함축관계", meaningEn: "logical consequence relationship", example: "Semantic entailment differs from pragmatic implicature in formal properties.", exampleKo: "의미론적 함의는 형식적 속성에서 화용론적 함축과 달라요.", emoji: "➡️" },
    { word: "synonymy", meaning: "동의관계", meaningEn: "relationship of similar meaning", example: "True synonymy is rare; most apparent synonyms differ subtly.", exampleKo: "진정한 동의관계는 드물고, 대부분의 표면적 동의어는 미묘하게 달라요.", emoji: "🤝" },
    { word: "collocation", meaning: "연어, 연어관계", meaningEn: "habitual word combination", example: "Native-like fluency requires mastery of typical collocations.", exampleKo: "원어민 같은 유창함은 전형적 연어의 숙달을 필요로 해요.", emoji: "🔗" },
    { word: "shibboleth", meaning: "쉬볼렛, 식별표지", meaningEn: "a custom or word distinguishing one group", example: "Pronunciation shibboleths often reveal speaker origins.", exampleKo: "발음 쉬볼렛은 종종 화자의 출신을 드러내요.", emoji: "🏷️" },
    { word: "idiomatic", meaning: "관용적인", meaningEn: "characteristic of natural speech", example: "Translation often struggles with idiomatic expressions resistant to literal rendering.", exampleKo: "번역은 종종 직역에 저항하는 관용 표현과 씨름해요.", emoji: "💬" },
    { word: "metathesis", meaning: "음위전환", meaningEn: "transposition of sounds in a word", example: "Historical metathesis explains many irregular word forms.", exampleKo: "역사적 음위전환은 많은 불규칙 단어 형태를 설명해요.", emoji: "🔄" },
    { word: "elision", meaning: "음의생략, 생략", meaningEn: "omission of a sound or syllable", example: "Poetic elision facilitates metrical regularity in classical verse.", exampleKo: "시적 생략은 고전 운문에서 운율적 규칙성을 촉진해요.", emoji: "✂️" },
    { word: "umlaut", meaning: "움라우트, 모음변이", meaningEn: "vowel change due to neighboring sound", example: "Germanic umlaut systematically modified vowels through linguistic history.", exampleKo: "게르만 움라우트는 언어 역사를 통해 모음을 체계적으로 변경했어요.", emoji: "🔤" },
    { word: "glossolalia", meaning: "방언 (종교적), 알아들을수없는말", meaningEn: "speaking in tongues", example: "Glossolalia features prominently in certain Pentecostal worship traditions.", exampleKo: "방언은 일부 오순절 예배 전통에서 두드러지게 나타나요.", emoji: "🗣️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
