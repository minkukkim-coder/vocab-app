// Batch 20 — G3 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "cerebellar", meaning: "소뇌의", meaningEn: "relating to the cerebellum", example: "Cerebellar damage disrupts coordination of fine motor movements.", exampleKo: "소뇌 손상은 정교한 운동 조정을 방해합니다.", emoji: "🧠" },
    { word: "thalamic", meaning: "시상의", meaningEn: "relating to the thalamus", example: "Thalamic relay neurons gatekeep sensory information to the cortex.", exampleKo: "시상의 중계 뉴런은 피질로 가는 감각 정보를 통제합니다.", emoji: "🧠" },
    { word: "hypothalamic", meaning: "시상하부의", meaningEn: "relating to the hypothalamus", example: "Hypothalamic dysfunction can disrupt sleep, appetite, and temperature regulation.", exampleKo: "시상하부의 기능장애는 수면, 식욕, 체온 조절을 방해할 수 있습니다.", emoji: "🌡️" },
    { word: "hippocampal", meaning: "해마의", meaningEn: "relating to the hippocampus", example: "Hippocampal atrophy is among the earliest signs of Alzheimer's disease.", exampleKo: "해마의 위축은 알츠하이머병의 가장 초기 징후 중 하나입니다.", emoji: "🧠" },
    { word: "limbic", meaning: "변연계의", meaningEn: "relating to brain structures controlling emotion", example: "Limbic activation underlies the visceral experience of fear.", exampleKo: "변연계의 활성화는 공포의 본능적 경험을 뒷받침합니다.", emoji: "❤️" },
    { word: "neocortical", meaning: "신피질의", meaningEn: "relating to the most recently evolved cortex", example: "Neocortical expansion distinguishes primate cognitive evolution.", exampleKo: "신피질의 확장은 영장류 인지 진화를 구별합니다.", emoji: "🧠" },
    { word: "synaptic", meaning: "시냅스의", meaningEn: "relating to nerve cell junctions", example: "Synaptic plasticity underlies learning throughout the lifespan.", exampleKo: "시냅스의 가소성은 평생에 걸친 학습을 뒷받침합니다.", emoji: "⚡" },
    { word: "dendritic", meaning: "수상돌기의", meaningEn: "relating to branched neuron extensions", example: "Dendritic complexity correlates with cognitive sophistication.", exampleKo: "수상돌기의 복잡성은 인지 정교함과 상관됩니다.", emoji: "🌳" },
    { word: "myelinated", meaning: "수초화된", meaningEn: "covered with insulating sheaths", example: "Myelinated nerve fibers conduct signals far faster than unmyelinated ones.", exampleKo: "수초화된 신경 섬유는 비수초 섬유보다 신호를 훨씬 빠르게 전도합니다.", emoji: "⚡" },
    { word: "demyelinating", meaning: "탈수초성의", meaningEn: "causing loss of nerve insulation", example: "Demyelinating diseases progressively impair neural communication.", exampleKo: "탈수초성 질환은 신경 소통을 점진적으로 손상시킵니다.", emoji: "🧬" },
    { word: "gabaergic", meaning: "가바성의", meaningEn: "relating to GABA inhibitory signaling", example: "Gabaergic neurons restrain runaway cortical excitation.", exampleKo: "가바성 뉴런은 폭주하는 피질 흥분을 억제합니다.", emoji: "🛑" },
    { word: "noradrenergic", meaning: "노르아드레날린성의", meaningEn: "relating to norepinephrine signaling", example: "Noradrenergic activation heightens vigilance during threat.", exampleKo: "노르아드레날린성 활성화는 위협 중 경계심을 높입니다.", emoji: "⚡" },
    { word: "nociception", meaning: "통각", meaningEn: "the sensory detection of pain", example: "Nociception alerts the body to potentially damaging stimuli.", exampleKo: "통각은 잠재적으로 손상시키는 자극을 신체에 알립니다.", emoji: "🩹" },
    { word: "echolocation", meaning: "반향 정위", meaningEn: "locating objects via reflected sound", example: "Bats and dolphins independently evolved sophisticated echolocation systems.", exampleKo: "박쥐와 돌고래는 정교한 반향 정위 시스템을 독립적으로 진화시켰습니다.", emoji: "🦇" },
    { word: "metacognition", meaning: "초인지", meaningEn: "thinking about one's own thinking", example: "Effective learners deploy metacognition to monitor comprehension actively.", exampleKo: "효과적인 학습자는 이해를 적극 모니터링하기 위해 초인지를 사용합니다.", emoji: "🤔" },
    { word: "chunking", meaning: "청킹", meaningEn: "grouping information into manageable units", example: "Chunking dramatically expands effective working memory capacity.", exampleKo: "청킹은 효과적인 작업 기억 용량을 극적으로 확장합니다.", emoji: "📦" },
    { word: "encoding", meaning: "부호화", meaningEn: "transforming information for storage", example: "Deeper encoding produces more durable and retrievable memories.", exampleKo: "더 깊은 부호화는 더 지속적이고 인출 가능한 기억을 만듭니다.", emoji: "💾" },
    { word: "consolidation", meaning: "응고화", meaningEn: "stabilizing memories after initial learning", example: "Sleep plays a crucial role in memory consolidation.", exampleKo: "수면은 기억 응고화에 결정적인 역할을 합니다.", emoji: "💤" },
    { word: "retrieval", meaning: "인출", meaningEn: "accessing stored memories", example: "Retrieval practice strengthens memory more than passive review.", exampleKo: "인출 연습은 수동적 복습보다 기억을 더 강화합니다.", emoji: "🔑" },
    { word: "interference", meaning: "간섭", meaningEn: "disruption of memory by competing information", example: "Proactive interference makes new learning harder to retain.", exampleKo: "순행 간섭은 새로운 학습을 유지하기 더 어렵게 만듭니다.", emoji: "📡" },
    { word: "engram", meaning: "기억 흔적", meaningEn: "physical trace of a memory in the brain", example: "Researchers have begun identifying specific neural engrams.", exampleKo: "연구자들은 특정 신경 기억 흔적을 확인하기 시작했습니다.", emoji: "🔬" },
    { word: "priming", meaning: "프라이밍", meaningEn: "implicit influence of prior exposure on response", example: "Priming research demonstrates the unconscious shaping of judgments.", exampleKo: "프라이밍 연구는 판단의 무의식적 형성을 보여줍니다.", emoji: "🎯" },
    { word: "habituation", meaning: "습관화", meaningEn: "decreased response to repeated stimuli", example: "Habituation explains why constant noise eventually fades from awareness.", exampleKo: "습관화는 지속적인 소음이 결국 의식에서 사라지는 이유를 설명합니다.", emoji: "🔁" },
    { word: "sensitization", meaning: "민감화", meaningEn: "increased response after repeated stimulation", example: "Sensitization can amplify pain perception in chronic conditions.", exampleKo: "민감화는 만성 질환에서 통증 지각을 증폭시킬 수 있습니다.", emoji: "📈" },
    { word: "extinction", meaning: "소거", meaningEn: "weakening of conditioned responses without reinforcement", example: "Extinction therapy reduces phobic reactions through controlled exposure.", exampleKo: "소거 치료는 통제된 노출을 통해 공포 반응을 감소시킵니다.", emoji: "📉" },
    { word: "shaping", meaning: "조형", meaningEn: "reinforcement of successive approximations toward a target behavior", example: "Trainers use shaping to teach complex animal behaviors gradually.", exampleKo: "조련사는 복잡한 동물 행동을 점진적으로 가르치기 위해 조형을 사용합니다.", emoji: "🎯" },
    { word: "scaffolding", meaning: "비계 설정", meaningEn: "supportive structure aiding learning", example: "Effective scaffolding gradually transfers responsibility to the learner.", exampleKo: "효과적인 비계 설정은 학습자에게 점진적으로 책임을 이전합니다.", emoji: "🪜" },
    { word: "behaviorism", meaning: "행동주의", meaningEn: "psychology focused on observable behavior", example: "Classical behaviorism dominated mid-twentieth-century psychology.", exampleKo: "고전적 행동주의는 20세기 중반 심리학을 지배했습니다.", emoji: "🔬" },
    { word: "qualia", meaning: "감각질", meaningEn: "subjective qualities of experience", example: "Philosophers fiercely debate whether science can explain qualia.", exampleKo: "철학자들은 과학이 감각질을 설명할 수 있는지 격렬히 논쟁합니다.", emoji: "🌈" },
    { word: "metacognitive", meaning: "메타인지의", meaningEn: "concerning awareness of one's own thinking", example: "Metacognitive skills predict long-term academic success.", exampleKo: "메타인지 기술은 장기적 학업 성공을 예측합니다.", emoji: "🪞" },
    { word: "subliminal", meaning: "잠재의식의", meaningEn: "below conscious perception", example: "Subliminal stimuli can subtly influence behavior under specific conditions.", exampleKo: "잠재의식의 자극은 특정 조건에서 행동에 미묘하게 영향을 줄 수 있습니다.", emoji: "👁️‍🗨️" },
    { word: "synesthesia", meaning: "공감각", meaningEn: "blending of senses where one triggers another", example: "Some artists with synesthesia perceive colors when hearing musical notes.", exampleKo: "공감각을 가진 일부 예술가는 음표를 들을 때 색을 지각합니다.", emoji: "🌈" },
    { word: "dyscalculia", meaning: "계산 장애", meaningEn: "specific difficulty with arithmetic", example: "Dyscalculia represents a learning difference distinct from dyslexia.", exampleKo: "계산 장애는 난독증과 구별되는 학습 차이를 나타냅니다.", emoji: "🔢" },
    { word: "dyspraxia", meaning: "발달 협응 장애", meaningEn: "developmental coordination difficulties", example: "Dyspraxia challenges fine motor coordination across daily tasks.", exampleKo: "발달 협응 장애는 일상 과제에서 정교한 운동 협응을 어렵게 합니다.", emoji: "🤹" },
    { word: "dysphonia", meaning: "발성 장애", meaningEn: "disorder of voice production", example: "Spasmodic dysphonia disrupts speech through involuntary muscle contractions.", exampleKo: "경련성 발성 장애는 불수의적 근육 수축을 통해 말을 방해합니다.", emoji: "🗣️" },
    { word: "catatonia", meaning: "긴장증", meaningEn: "syndrome of immobility or peculiar movements", example: "Catatonia can present in mood disorders as well as psychosis.", exampleKo: "긴장증은 정신증뿐만 아니라 기분 장애에서도 나타날 수 있습니다.", emoji: "🗿" },
    { word: "derealization", meaning: "현실감 상실", meaningEn: "feeling that the external world is unreal", example: "Derealization episodes often emerge during severe anxiety.", exampleKo: "현실감 상실 삽화는 종종 심각한 불안 중에 나타납니다.", emoji: "🌫️" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
