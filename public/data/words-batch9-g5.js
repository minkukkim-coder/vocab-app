// Batch 9 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "tautology", meaning: "동어반복, 항진명제", meaningEn: "a statement true by its logical form", example: "Tautological reasoning provides no genuine information about reality.", exampleKo: "동어반복적 추론은 현실에 대한 진정한 정보를 제공하지 않아요.", emoji: "🔁" },
    { word: "virtue", meaning: "덕, 미덕", meaningEn: "moral excellence; good character traits", example: "Aristotelian virtue ethics emphasizes character formation through habituation.", exampleKo: "아리스토텔레스의 덕윤리는 습관화를 통한 성품 형성을 강조해요.", emoji: "🌟" },
    { word: "eudaimonia", meaning: "행복, 인간번영", meaningEn: "human flourishing; the highest human good", example: "Eudaimonia involves living virtuously rather than mere pleasure-seeking.", exampleKo: "에우다이모니아는 단순한 쾌락 추구가 아닌 덕있는 삶을 포함해요.", emoji: "✨" },
    { word: "telos", meaning: "목적, 궁극목적", meaningEn: "the ultimate goal or purpose", example: "Aristotelian philosophy attributes telos to natural and human entities.", exampleKo: "아리스토텔레스 철학은 자연적, 인간적 존재에 목적을 부여해요.", emoji: "🎯" },
    { word: "praxis", meaning: "실천, 실행", meaningEn: "practical action as opposed to theory", example: "Marxist theory emphasizes the unity of theory and praxis.", exampleKo: "마르크스주의 이론은 이론과 실천의 통일을 강조해요.", emoji: "💪" },
    { word: "sophia", meaning: "이론적지혜, 지혜", meaningEn: "theoretical wisdom; philosophical understanding", example: "Greek philosophy distinguished sophia from practical phronesis.", exampleKo: "그리스 철학은 이론적 지혜를 실천적 지혜와 구별했어요.", emoji: "📚" },
    { word: "noetic", meaning: "지적, 정신의", meaningEn: "relating to mental activity or intellect", example: "Mystics describe noetic experiences that transcend ordinary cognition.", exampleKo: "신비주의자들은 일상적 인지를 초월하는 정신적 경험을 묘사해요.", emoji: "🧠" },
    { word: "phenomenon", meaning: "현상", meaningEn: "an observable event or fact", example: "Phenomenology systematically describes phenomena as they appear to consciousness.", exampleKo: "현상학은 현상을 의식에 나타나는 그대로 체계적으로 기술해요.", emoji: "👁️" },
    { word: "qualia", meaning: "감각질", meaningEn: "subjective conscious experiences", example: "Qualia present persistent challenges to physicalist theories of mind.", exampleKo: "감각질은 물리주의 마음 이론에 지속적인 도전을 제기해요.", emoji: "🌈" },
    { word: "umwelt", meaning: "환경세계, 움벨트", meaningEn: "the perceived world specific to a species", example: "Each organism inhabits a unique umwelt shaped by its sensory capacities.", exampleKo: "각 유기체는 감각 능력에 의해 형성된 고유한 환경세계에 거주해요.", emoji: "🌐" },
    { word: "verstehen", meaning: "이해 (해석학적이해)", meaningEn: "interpretive understanding in social science", example: "Weber's verstehen approach grasps subjective meanings of social action.", exampleKo: "베버의 이해 접근법은 사회 행동의 주관적 의미를 파악해요.", emoji: "🔍" },
    { word: "habitus", meaning: "아비투스, 습관체계", meaningEn: "Bourdieu's term for ingrained dispositions", example: "Bourdieu's habitus explains the reproduction of social inequalities.", exampleKo: "부르디외의 아비투스는 사회적 불평등의 재생산을 설명해요.", emoji: "🎓" },
    { word: "doxa", meaning: "통념, 독사", meaningEn: "common opinion or unexamined belief", example: "Sociology challenges doxa by questioning naturalized social arrangements.", exampleKo: "사회학은 자연화된 사회적 배치를 문제삼아 통념에 도전해요.", emoji: "💭" },
    { word: "anomie", meaning: "아노미, 무규범상태", meaningEn: "social condition of normlessness", example: "Durkheim linked anomie to elevated suicide rates in modernizing societies.", exampleKo: "뒤르켐은 아노미를 근대화 사회의 높은 자살률과 연결했어요.", emoji: "💔" },
    { word: "alienation", meaning: "소외", meaningEn: "estrangement from society or self", example: "Marx analyzed alienation as constitutive of capitalist labor relations.", exampleKo: "마르크스는 소외를 자본주의 노동관계의 구성적 특징으로 분석했어요.", emoji: "🚪" },
    { word: "reification", meaning: "물화, 사물화", meaningEn: "treating abstractions as concrete things", example: "Reification mistakenly transforms social processes into apparently natural objects.", exampleKo: "물화는 사회적 과정을 외견상 자연적 대상으로 잘못 변형해요.", emoji: "🪨" },
    { word: "subaltern", meaning: "하위주체, 종속계층", meaningEn: "groups outside hegemonic power structures", example: "Spivak's essay questioned whether the subaltern can speak.", exampleKo: "스피박의 에세이는 하위주체가 말할 수 있는지를 질문했어요.", emoji: "🔇" },
    { word: "panopticon", meaning: "원형감옥, 판옵티콘", meaningEn: "design enabling total surveillance", example: "Foucault's analysis of the panopticon illuminates modern disciplinary power.", exampleKo: "푸코의 판옵티콘 분석은 근대 규율 권력을 밝혀요.", emoji: "👁️" },
    { word: "governmentality", meaning: "통치성", meaningEn: "the rationality of governance", example: "Governmentality studies analyze how subjects are produced through governance.", exampleKo: "통치성 연구는 주체가 통치를 통해 생산되는 방식을 분석해요.", emoji: "🏛️" },
    { word: "episteme", meaning: "에피스테메, 지식체계", meaningEn: "the underlying knowledge structure of an era", example: "Foucault traced epistemic shifts across European intellectual history.", exampleKo: "푸코는 유럽 지성사 전반에 걸친 인식론적 전환을 추적했어요.", emoji: "📚" },
    { word: "falsifiability", meaning: "반증가능성", meaningEn: "the capacity to be proven false", example: "Popper proposed falsifiability as the demarcation criterion of science.", exampleKo: "포퍼는 반증가능성을 과학의 구획 기준으로 제안했어요.", emoji: "❌" },
    { word: "verifiability", meaning: "검증가능성", meaningEn: "the capacity to be confirmed", example: "Logical positivists made verifiability central to meaningful discourse.", exampleKo: "논리실증주의자들은 검증가능성을 의미있는 담론의 중심으로 삼았어요.", emoji: "✅" },
    { word: "abductive", meaning: "가추적인", meaningEn: "reasoning to the best explanation", example: "Abductive inference plays a crucial role in scientific hypothesis formation.", exampleKo: "가추적 추론은 과학적 가설 형성에 중요한 역할을 해요.", emoji: "💡" },
    { word: "inductive", meaning: "귀납적인", meaningEn: "reasoning from particulars to generalizations", example: "Inductive reasoning extrapolates patterns from observed instances.", exampleKo: "귀납적 추론은 관찰된 사례에서 패턴을 추정해요.", emoji: "📈" },
    { word: "deductive", meaning: "연역적인", meaningEn: "reasoning from premises to necessary conclusions", example: "Deductive proofs guarantee conclusions from accepted premises.", exampleKo: "연역적 증명은 수용된 전제로부터 결론을 보장해요.", emoji: "📐" },
    { word: "heuristic", meaning: "발견적인, 휴리스틱", meaningEn: "an approach to problem-solving using practical methods", example: "Cognitive heuristics enable rapid decisions but introduce systematic biases.", exampleKo: "인지적 휴리스틱은 신속한 결정을 가능하게 하지만 체계적 편향을 도입해요.", emoji: "🧩" },
    { word: "algorithm", meaning: "알고리즘, 연산법", meaningEn: "a procedure for solving problems", example: "Modern algorithms increasingly shape consequential life decisions.", exampleKo: "현대 알고리즘은 점점 더 중요한 삶의 결정을 형성해요.", emoji: "🤖" },
    { word: "stochastic", meaning: "확률적인", meaningEn: "involving random probability distribution", example: "Stochastic processes model phenomena involving inherent randomness.", exampleKo: "확률적 과정은 본질적 무작위성을 포함하는 현상을 모델링해요.", emoji: "🎲" },
    { word: "deterministic", meaning: "결정론적", meaningEn: "involving no randomness in development", example: "Classical mechanics presented a deterministic universe before quantum theory.", exampleKo: "고전 역학은 양자 이론 이전에 결정론적 우주를 제시했어요.", emoji: "⚙️" },
    { word: "emergence", meaning: "창발, 발현", meaningEn: "complex properties arising from simpler interactions", example: "Consciousness may represent emergence from neural complexity.", exampleKo: "의식은 신경 복잡성으로부터의 창발을 나타낼 수 있어요.", emoji: "✨" },
    { word: "holism", meaning: "전체론", meaningEn: "the view that wholes exceed their parts", example: "Holism in ecology emphasizes ecosystem properties beyond individual organisms.", exampleKo: "생태학의 전체론은 개별 유기체를 넘어선 생태계 속성을 강조해요.", emoji: "🌐" },
    { word: "monism", meaning: "일원론", meaningEn: "the doctrine that reality is one substance", example: "Spinoza's monism identifies God with nature as a single substance.", exampleKo: "스피노자의 일원론은 신을 단일 실체로서 자연과 동일시해요.", emoji: "1️⃣" },
    { word: "pluralism", meaning: "다원주의", meaningEn: "acceptance of multiple distinct elements", example: "Liberal pluralism accommodates diverse value commitments within shared frameworks.", exampleKo: "자유주의 다원주의는 공유된 틀 내에서 다양한 가치 헌신을 수용해요.", emoji: "🌈" },
    { word: "relativism", meaning: "상대주의", meaningEn: "the doctrine that knowledge is relative to perspective", example: "Cultural relativism complicates cross-cultural moral judgment.", exampleKo: "문화적 상대주의는 문화 간 도덕적 판단을 복잡하게 만들어요.", emoji: "🔄" },
    { word: "stoicism", meaning: "스토아철학, 금욕주의", meaningEn: "philosophy emphasizing virtue and rationality", example: "Modern stoicism revives ancient practices for contemporary psychological wellbeing.", exampleKo: "현대 스토아주의는 동시대 심리적 웰빙을 위해 고대 실천을 부활시켜요.", emoji: "🏛️" },
    { word: "essentialism", meaning: "본질주의", meaningEn: "belief in fixed underlying essences", example: "Critics challenge essentialism in identity categories like gender and race.", exampleKo: "비평가들은 젠더와 인종 같은 정체성 범주의 본질주의에 도전해요.", emoji: "🎯" },
    { word: "nominalism", meaning: "유명론", meaningEn: "view that universals are merely names", example: "Medieval nominalism denied the real existence of universal categories.", exampleKo: "중세 유명론은 보편 범주의 실재를 부정했어요.", emoji: "🏷️" },
    { word: "realism", meaning: "실재론", meaningEn: "the view that reality exists independently", example: "Scientific realism affirms that successful theories accurately describe unobservables.", exampleKo: "과학적 실재론은 성공적 이론이 관찰불가능한 것을 정확히 묘사한다고 확언해요.", emoji: "🎯" },
    { word: "naturalism", meaning: "자연주의", meaningEn: "view that everything arises from natural causes", example: "Methodological naturalism guides empirical scientific investigation.", exampleKo: "방법론적 자연주의는 경험적 과학 연구를 지도해요.", emoji: "🌿" },
    { word: "transcendence", meaning: "초월, 초월성", meaningEn: "going beyond ordinary limits", example: "Religious transcendence promises connection to ultimate reality.", exampleKo: "종교적 초월은 궁극적 실재와의 연결을 약속해요.", emoji: "✨" },
    { word: "christology", meaning: "기독론", meaningEn: "the theological study of Christ", example: "Early christological controversies shaped Christian doctrinal development.", exampleKo: "초기 기독론 논쟁은 기독교 교리 발전을 형성했어요.", emoji: "✝️" },
    { word: "demonology", meaning: "악마학", meaningEn: "study of demons in religious traditions", example: "Comparative demonology reveals cross-cultural patterns in evil beings.", exampleKo: "비교 악마학은 악한 존재에서 문화 간 패턴을 드러내요.", emoji: "👹" },
    { word: "mysticism", meaning: "신비주의", meaningEn: "pursuit of direct spiritual experience", example: "Comparative mysticism examines unitive experiences across religious traditions.", exampleKo: "비교 신비주의는 종교 전통에 걸친 합일 경험을 검토해요.", emoji: "🔮" },
    { word: "pantheism", meaning: "범신론", meaningEn: "the doctrine that God is identical with the universe", example: "Spinoza's pantheism identified God with the whole of nature.", exampleKo: "스피노자의 범신론은 신을 자연 전체와 동일시했어요.", emoji: "🌌" },
    { word: "deism", meaning: "이신론", meaningEn: "belief in a non-interventionist creator", example: "Enlightenment deism influenced many American founding fathers.", exampleKo: "계몽주의 이신론은 많은 미국 건국 시조들에게 영향을 미쳤어요.", emoji: "🕰️" },
    { word: "theism", meaning: "유신론", meaningEn: "belief in the existence of God or gods", example: "Classical theism affirms divine omnipotence, omniscience, and omnibenevolence.", exampleKo: "고전적 유신론은 신적 전능, 전지, 전선을 확언해요.", emoji: "🙏" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
