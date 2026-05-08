// Batch 26 — G3 추가 어휘 100개 (철학/인식론)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "premise", meaning: "전제", meaningEn: "a statement assumed to be true", example: "The argument rests on a shaky premise.", exampleKo: "그 주장은 불안정한 전제에 기반합니다.", emoji: "📋" },
    { word: "inference", meaning: "추론", meaningEn: "drawing a conclusion from evidence", example: "Inference leads us from evidence to truth.", exampleKo: "추론은 증거에서 진실로 이끕니다.", emoji: "🔍" },
    { word: "fallacy", meaning: "오류, 허위 논리", meaningEn: "error in reasoning or logic", example: "Ad hominem is a common fallacy.", exampleKo: "인신공격은 흔한 논리적 오류입니다.", emoji: "❌" },
    { word: "tautology", meaning: "동어반복", meaningEn: "statement true by logical necessity", example: "A tautology says nothing new.", exampleKo: "동어반복은 새로운 것을 말하지 않습니다.", emoji: "🔁" },
    { word: "paradox", meaning: "역설", meaningEn: "a self-contradictory statement with truth", example: "This statement is false—a classic paradox.", exampleKo: "이 문장은 거짓이다—고전적인 역설입니다.", emoji: "♾️" },
    { word: "solipsism", meaning: "유아론", meaningEn: "only one's own mind is certain to exist", example: "Solipsism is difficult to disprove.", exampleKo: "유아론은 반증하기 어렵습니다.", emoji: "🪞" },
    { word: "relativism", meaning: "상대주의", meaningEn: "truth depends on context or culture", example: "Relativism challenges universal ethics.", exampleKo: "상대주의는 보편 윤리에 도전합니다.", emoji: "🌐" },
    { word: "objectivism", meaning: "객관주의", meaningEn: "reality exists independently of mind", example: "Objectivism underpins scientific method.", exampleKo: "객관주의는 과학적 방법론의 근거가 됩니다.", emoji: "🔬" },
    { word: "cosmology", meaning: "우주론", meaningEn: "study of origin and structure of universe", example: "Cosmology and philosophy intersect often.", exampleKo: "우주론과 철학은 자주 교차합니다.", emoji: "🪐" },
    { word: "monism", meaning: "일원론", meaningEn: "reality is one fundamental substance", example: "Monism contrasts with dualism.", exampleKo: "일원론은 이원론과 대조됩니다.", emoji: "1️⃣" },
    { word: "pluralism", meaning: "다원론", meaningEn: "multiple substances or truths exist", example: "Pluralism embraces diverse perspectives.", exampleKo: "다원론은 다양한 관점을 포용합니다.", emoji: "🌈" },
    { word: "idealism", meaning: "관념론", meaningEn: "reality is mentally constructed", example: "Berkeley defended idealism in philosophy.", exampleKo: "버클리는 철학에서 관념론을 옹호했습니다.", emoji: "💭" },
    { word: "materialism", meaning: "유물론", meaningEn: "matter is the only reality", example: "Materialism denies non-physical entities.", exampleKo: "유물론은 비물질적 존재를 부정합니다.", emoji: "⚛️" },
    { word: "skepticism", meaning: "회의주의", meaningEn: "questioning the possibility of certain knowledge", example: "Skepticism leads to rigorous inquiry.", exampleKo: "회의주의는 엄격한 탐구로 이어집니다.", emoji: "🤔" },
    { word: "stoicism", meaning: "금욕주의, 스토아 철학", meaningEn: "virtue and reason over passion", example: "Stoicism teaches emotional resilience.", exampleKo: "스토아 철학은 감정적 회복력을 가르칩니다.", emoji: "🗿" },
    { word: "eudaimonia", meaning: "행복, 번영", meaningEn: "human flourishing and well-being", example: "Aristotle aimed at eudaimonia in ethics.", exampleKo: "아리스토텔레스는 윤리에서 번영을 추구했습니다.", emoji: "🌟" },
    { word: "phenomenal", meaning: "현상적", meaningEn: "relating to phenomena as experienced", example: "Phenomenal consciousness baffles scientists.", exampleKo: "현상적 의식은 과학자들을 당혹스럽게 합니다.", emoji: "✨" },
    { word: "holism", meaning: "전체론", meaningEn: "whole is more than sum of parts", example: "Holism sees systems as unified wholes.", exampleKo: "전체론은 시스템을 통합된 전체로 봅니다.", emoji: "🌐" },
    { word: "nominalism", meaning: "유명론", meaningEn: "universals exist only as names", example: "Nominalism denies abstract entities.", exampleKo: "유명론은 추상적 존재를 부정합니다.", emoji: "🏷️" },
    { word: "realism", meaning: "실재론", meaningEn: "the world exists independently of mind", example: "Realism holds that facts are objective.", exampleKo: "실재론은 사실이 객관적임을 주장합니다.", emoji: "🌍" },
    { word: "essentialism", meaning: "본질주의", meaningEn: "things have inherent essential properties", example: "Essentialism defines categories by core traits.", exampleKo: "본질주의는 핵심 특성으로 범주를 정의합니다.", emoji: "💠" },
    { word: "normative", meaning: "규범적", meaningEn: "establishing or conforming to a standard", example: "Normative ethics prescribes how to act.", exampleKo: "규범 윤리학은 행동 방법을 규정합니다.", emoji: "📏" },
    { word: "descriptive", meaning: "기술적", meaningEn: "describing what is, not what ought to be", example: "Descriptive ethics studies moral behavior.", exampleKo: "기술 윤리학은 도덕적 행동을 연구합니다.", emoji: "📝" },
    { word: "free will", meaning: "자유의지", meaningEn: "ability to choose independently", example: "Free will is central to moral responsibility.", exampleKo: "자유의지는 도덕적 책임의 핵심입니다.", emoji: "🕊️" },
    { word: "cogito", meaning: "코기토 (나는 생각한다)", meaningEn: "Descartes' proof of existence through thinking", example: "Cogito ergo sum: I think, therefore I am.", exampleKo: "나는 생각한다, 고로 나는 존재한다.", emoji: "💭" },
    { word: "tabula rasa", meaning: "백지 상태", meaningEn: "mind as blank slate before experience", example: "Locke proposed the tabula rasa theory.", exampleKo: "로크는 백지 상태 이론을 제안했습니다.", emoji: "📄" },
    { word: "innate", meaning: "타고난, 선천적", meaningEn: "present from birth, not learned", example: "Some argue language is innate.", exampleKo: "일부는 언어가 선천적이라고 주장합니다.", emoji: "👶" },
    { word: "propositional", meaning: "명제적", meaningEn: "relating to statements with truth value", example: "Propositional logic analyzes statements.", exampleKo: "명제 논리는 진술을 분석합니다.", emoji: "📐" },
    { word: "modal logic", meaning: "양상 논리", meaningEn: "logic dealing with possibility and necessity", example: "Modal logic uses possible worlds.", exampleKo: "양상 논리는 가능 세계를 사용합니다.", emoji: "🌐" },
    { word: "counterfactual", meaning: "반사실적", meaningEn: "contrary to what actually happened", example: "Counterfactual reasoning explores what-ifs.", exampleKo: "반사실적 추론은 가정을 탐구합니다.", emoji: "🔀" },
    { word: "orthodoxy", meaning: "정통파, 정설", meaningEn: "conventional or established belief", example: "Orthodoxy resists philosophical challenge.", exampleKo: "정통파는 철학적 도전에 저항합니다.", emoji: "📜" },
    { word: "ethos", meaning: "기풍, 에토스", meaningEn: "character or spirit of a culture", example: "The ethos of science values evidence.", exampleKo: "과학의 기풍은 증거를 중시합니다.", emoji: "🏛️" },
    { word: "pathos", meaning: "감성적 호소, 파토스", meaningEn: "appeal to emotion in argument", example: "Pathos moves audiences emotionally.", exampleKo: "파토스는 청중을 감정적으로 움직입니다.", emoji: "❤️" },
    { word: "falsifiability", meaning: "반증 가능성", meaningEn: "ability to be proven false", example: "Popper demanded falsifiability in science.", exampleKo: "포퍼는 과학에서 반증 가능성을 요구했습니다.", emoji: "🧪" },
    { word: "positivism", meaning: "실증주의", meaningEn: "knowledge comes only from empirical data", example: "Positivism rejects metaphysical speculation.", exampleKo: "실증주의는 형이상학적 추측을 거부합니다.", emoji: "📊" },
    { word: "praxis", meaning: "실천", meaningEn: "practice as opposed to theory", example: "Praxis bridges philosophy and action.", exampleKo: "실천은 철학과 행동을 연결합니다.", emoji: "🖐️" },
    { word: "teleological", meaning: "목적론적", meaningEn: "directed toward a final purpose", example: "Teleological ethics judges acts by purpose.", exampleKo: "목적론적 윤리학은 목적으로 행위를 판단합니다.", emoji: "🎯" },
    { word: "emanation", meaning: "유출, 발산", meaningEn: "flowing out from a divine source", example: "Plotinus described creation as emanation.", exampleKo: "플로티노스는 창조를 유출로 묘사했습니다.", emoji: "💫" },
    { word: "transcendence", meaning: "초월", meaningEn: "going beyond ordinary limits", example: "Philosophy seeks transcendence of mundane thought.", exampleKo: "철학은 일상적 사고의 초월을 추구합니다.", emoji: "🕊️" },
    { word: "qualia", meaning: "감각질", meaningEn: "subjective quality of conscious experience", example: "The redness of red is a quale.", exampleKo: "빨간색의 붉음은 감각질입니다.", emoji: "🔴" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
