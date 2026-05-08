// Batch 27 — G3 추가 어휘 100개 (심리학/인지과학)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "cognition", meaning: "인지", meaningEn: "mental processes of knowing and understanding", example: "Cognition includes memory, attention, and reasoning.", exampleKo: "인지에는 기억, 주의, 추론이 포함됩니다.", emoji: "🧠" },
    { word: "perception", meaning: "지각", meaningEn: "interpreting sensory information", example: "Perception shapes how we see the world.", exampleKo: "지각은 우리가 세상을 보는 방식을 형성합니다.", emoji: "👁️" },
    { word: "consciousness", meaning: "의식", meaningEn: "awareness of self and surroundings", example: "The study of consciousness is complex.", exampleKo: "의식 연구는 복잡합니다.", emoji: "💡" },
    { word: "subconscious", meaning: "잠재의식", meaningEn: "mental processes below conscious awareness", example: "Fears can live in the subconscious.", exampleKo: "두려움은 잠재의식에 살 수 있습니다.", emoji: "🌊" },
    { word: "heuristic", meaning: "휴리스틱, 발견법", meaningEn: "mental shortcut for quick decisions", example: "Heuristics save cognitive effort.", exampleKo: "휴리스틱은 인지적 노력을 절약합니다.", emoji: "⚡" },
    { word: "prototype", meaning: "원형", meaningEn: "best example of a category", example: "A robin is a prototype of a bird.", exampleKo: "울새는 새의 원형입니다.", emoji: "🐦" },
    { word: "anchoring", meaning: "앵커링 편향", meaningEn: "relying too much on first information", example: "Anchoring affects price negotiations.", exampleKo: "앵커링은 가격 협상에 영향을 미칩니다.", emoji: "⚓" },
    { word: "rationalization", meaning: "합리화", meaningEn: "justifying actions with logical-sounding reasons", example: "She used rationalization to excuse the mistake.", exampleKo: "그녀는 실수를 변명하기 위해 합리화를 사용했습니다.", emoji: "🧩" },
    { word: "repression", meaning: "억압", meaningEn: "unconsciously blocking painful memories", example: "Repression can cause anxiety later.", exampleKo: "억압은 나중에 불안을 유발할 수 있습니다.", emoji: "🔒" },
    { word: "projection", meaning: "투사", meaningEn: "attributing own feelings to others", example: "He used projection to avoid guilt.", exampleKo: "그는 죄책감을 피하기 위해 투사를 사용했습니다.", emoji: "📽️" },
    { word: "displacement", meaning: "전위", meaningEn: "redirecting emotions to safer targets", example: "Displacement redirects anger from boss to family.", exampleKo: "전위는 분노를 상사에서 가족으로 돌립니다.", emoji: "↔️" },
    { word: "sublimation", meaning: "승화", meaningEn: "channeling impulses into socially acceptable acts", example: "Art can be sublimation of inner conflict.", exampleKo: "예술은 내면 갈등의 승화가 될 수 있습니다.", emoji: "🎨" },
    { word: "regression", meaning: "퇴행", meaningEn: "reverting to earlier behavior under stress", example: "Regression under stress is common.", exampleKo: "스트레스 하의 퇴행은 흔합니다.", emoji: "👶" },
    { word: "transference", meaning: "전이", meaningEn: "redirecting feelings from past to present person", example: "Transference occurs in therapy.", exampleKo: "전이는 치료에서 발생합니다.", emoji: "🔄" },
    { word: "countertransference", meaning: "역전이", meaningEn: "therapist's emotional reaction to client", example: "Countertransference must be managed carefully.", exampleKo: "역전이는 신중하게 관리되어야 합니다.", emoji: "🔃" },
    { word: "habituation", meaning: "습관화", meaningEn: "decreased response to repeated stimulus", example: "Habituation explains why we tune out noise.", exampleKo: "습관화는 우리가 소음을 무시하는 이유를 설명합니다.", emoji: "🔕" },
    { word: "desensitization", meaning: "둔감화", meaningEn: "reducing emotional response through exposure", example: "Desensitization is used in phobia treatment.", exampleKo: "둔감화는 공포증 치료에 사용됩니다.", emoji: "🛡️" },
    { word: "metacognition", meaning: "메타인지", meaningEn: "thinking about one's own thinking", example: "Metacognition improves learning strategies.", exampleKo: "메타인지는 학습 전략을 향상시킵니다.", emoji: "🧠" },
    { word: "chunking", meaning: "청킹", meaningEn: "grouping information for easier recall", example: "Chunking improves short-term memory capacity.", exampleKo: "청킹은 단기 기억 용량을 향상시킵니다.", emoji: "📦" },
    { word: "encoding", meaning: "부호화", meaningEn: "converting information into memory", example: "Good encoding leads to better recall.", exampleKo: "좋은 부호화는 더 나은 회상으로 이어집니다.", emoji: "💻" },
    { word: "retrieval", meaning: "인출", meaningEn: "accessing stored information from memory", example: "Retrieval cues improve memory accuracy.", exampleKo: "인출 단서는 기억 정확도를 향상시킵니다.", emoji: "🗃️" },
    { word: "priming", meaning: "점화 효과", meaningEn: "earlier stimulus influences later response", example: "Priming affects word recognition speed.", exampleKo: "점화 효과는 단어 인식 속도에 영향을 미칩니다.", emoji: "🔦" },
    { word: "self-efficacy", meaning: "자기효능감", meaningEn: "belief in one's ability to succeed", example: "High self-efficacy improves performance.", exampleKo: "높은 자기효능감은 수행을 향상시킵니다.", emoji: "💪" },
    { word: "reinforcement", meaning: "강화", meaningEn: "increasing behavior through consequences", example: "Positive reinforcement rewards desired behavior.", exampleKo: "긍정적 강화는 원하는 행동에 보상합니다.", emoji: "⭐" },
    { word: "extinction", meaning: "소거", meaningEn: "weakening behavior by removing reinforcement", example: "Extinction reduces unwanted responses.", exampleKo: "소거는 원치 않는 반응을 줄입니다.", emoji: "🔇" },
    { word: "generalization", meaning: "일반화", meaningEn: "applying learned response to similar stimuli", example: "Generalization spreads fear to similar objects.", exampleKo: "일반화는 두려움을 유사한 대상으로 확장합니다.", emoji: "🌐" },
    { word: "scaffolding", meaning: "발판, 스캐폴딩", meaningEn: "support provided to help learning", example: "Scaffolding is gradually removed as students learn.", exampleKo: "발판은 학생이 배울수록 점차 제거됩니다.", emoji: "🏗️" },
    { word: "empathy", meaning: "공감", meaningEn: "understanding and sharing others' feelings", example: "Empathy is essential for relationships.", exampleKo: "공감은 관계에 필수적입니다.", emoji: "❤️" },
    { word: "emotional regulation", meaning: "감정 조절", meaningEn: "managing one's emotional responses", example: "Emotional regulation reduces impulsivity.", exampleKo: "감정 조절은 충동성을 줄입니다.", emoji: "🎛️" },
    { word: "loss aversion", meaning: "손실 회피", meaningEn: "losses hurt more than equivalent gains", example: "Loss aversion drives risk-averse behavior.", exampleKo: "손실 회피는 위험 회피 행동을 이끕니다.", emoji: "📉" },
    { word: "behaviorism", meaning: "행동주의", meaningEn: "psychology focused on observable behavior", example: "Watson founded behaviorism.", exampleKo: "왓슨은 행동주의를 창시했습니다.", emoji: "🔬" },
    { word: "psychoanalysis", meaning: "정신분석", meaningEn: "therapy exploring unconscious processes", example: "Freud founded psychoanalysis.", exampleKo: "프로이트는 정신분석을 창시했습니다.", emoji: "🛋️" },
    { word: "neuroscience", meaning: "신경과학", meaningEn: "scientific study of the nervous system", example: "Neuroscience informs mental health treatment.", exampleKo: "신경과학은 정신건강 치료에 기여합니다.", emoji: "🧬" },
    { word: "neuroimaging", meaning: "신경영상", meaningEn: "visualizing brain structure and function", example: "Neuroimaging reveals active brain regions.", exampleKo: "신경영상은 활성 뇌 영역을 보여줍니다.", emoji: "🧠" },
    { word: "biofeedback", meaning: "바이오피드백", meaningEn: "using bodily data to train self-regulation", example: "Biofeedback helps manage stress.", exampleKo: "바이오피드백은 스트레스 관리를 돕습니다.", emoji: "📡" },
    { word: "neurosis", meaning: "신경증", meaningEn: "mental distress without psychosis", example: "Anxiety can be a form of neurosis.", exampleKo: "불안은 신경증의 한 형태일 수 있습니다.", emoji: "😰" },
    { word: "psychosis", meaning: "정신병", meaningEn: "loss of contact with reality", example: "Psychosis may include hallucinations.", exampleKo: "정신병은 환각을 포함할 수 있습니다.", emoji: "🌀" },
    { word: "dissociation", meaning: "해리", meaningEn: "disconnection from thoughts or identity", example: "Dissociation occurs in trauma responses.", exampleKo: "해리는 트라우마 반응에서 발생합니다.", emoji: "🫧" },
    { word: "self-concept", meaning: "자아 개념", meaningEn: "one's understanding of oneself", example: "A strong self-concept aids confidence.", exampleKo: "강한 자아 개념은 자신감을 높입니다.", emoji: "🪞" },
    { word: "identity formation", meaning: "정체성 형성", meaningEn: "developing a stable sense of self", example: "Identity formation peaks in adolescence.", exampleKo: "정체성 형성은 청소년기에 정점에 달합니다.", emoji: "🌱" },
    { word: "introspection", meaning: "내성, 자기 성찰", meaningEn: "examining one's own mental states", example: "Introspection is a tool for self-understanding.", exampleKo: "내성은 자기 이해의 도구입니다.", emoji: "🔍" },
    { word: "catharsis", meaning: "카타르시스", meaningEn: "emotional release through art or expression", example: "Writing provided catharsis for her grief.", exampleKo: "글쓰기는 슬픔의 카타르시스를 제공했습니다.", emoji: "🎭" },
    { word: "flow state", meaning: "몰입 상태", meaningEn: "optimal experience of full engagement", example: "Athletes often describe a flow state.", exampleKo: "운동선수들은 몰입 상태를 자주 묘사합니다.", emoji: "🌊" },
    { word: "mindfulness", meaning: "마음챙김", meaningEn: "awareness of present moment experience", example: "Mindfulness reduces stress and anxiety.", exampleKo: "마음챙김은 스트레스와 불안을 줄입니다.", emoji: "🧘" },
    { word: "resilience", meaning: "회복력", meaningEn: "ability to recover from adversity", example: "Resilience is a key trait in well-being.", exampleKo: "회복력은 웰빙의 핵심 특성입니다.", emoji: "🌿" },
    { word: "emotional intelligence", meaning: "감성 지능", meaningEn: "ability to understand and manage emotions", example: "Emotional intelligence predicts success.", exampleKo: "감성 지능은 성공을 예측합니다.", emoji: "❤️" },
    { word: "implicit bias", meaning: "암묵적 편견", meaningEn: "unconscious attitudes toward groups", example: "Implicit bias affects hiring decisions.", exampleKo: "암묵적 편견은 채용 결정에 영향을 미칩니다.", emoji: "🧠" },
    { word: "neurodiversity", meaning: "신경 다양성", meaningEn: "variation in brain function as natural", example: "Neurodiversity includes autism and ADHD.", exampleKo: "신경 다양성은 자폐증과 ADHD를 포함합니다.", emoji: "🌈" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
