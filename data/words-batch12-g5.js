// Batch 12 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "quantum", meaning: "양자", meaningEn: "discrete quantity of energy or matter", example: "Quantum mechanics fundamentally challenged classical physical assumptions.", exampleKo: "양자 역학은 고전 물리학적 전제에 근본적으로 도전했어요.", emoji: "⚛️" },
    { word: "superposition", meaning: "중첩, 양자중첩", meaningEn: "existence in multiple states simultaneously", example: "Quantum superposition enables novel computational paradigms.", exampleKo: "양자 중첩은 새로운 계산 패러다임을 가능하게 해요.", emoji: "🔄" },
    { word: "entanglement", meaning: "양자얽힘", meaningEn: "correlation between distant quantum particles", example: "Quantum entanglement demonstrates nonlocal correlations puzzling Einstein.", exampleKo: "양자 얽힘은 아인슈타인을 당혹스럽게 했던 비국소적 상관관계를 보여줘요.", emoji: "🔗" },
    { word: "qubit", meaning: "큐비트", meaningEn: "the basic unit of quantum information", example: "Modern quantum computers manipulate hundreds of qubits.", exampleKo: "현대 양자 컴퓨터는 수백 개의 큐비트를 조작해요.", emoji: "💻" },
    { word: "fermion", meaning: "페르미온", meaningEn: "particle obeying Fermi-Dirac statistics", example: "Electrons exemplify fermions in subatomic physics.", exampleKo: "전자는 아원자 물리학에서 페르미온을 예시해요.", emoji: "⚛️" },
    { word: "lepton", meaning: "렙톤", meaningEn: "elementary particle of one of three families", example: "Leptons participate in weak nuclear interactions.", exampleKo: "렙톤은 약한 핵 상호작용에 참여해요.", emoji: "⚛️" },
    { word: "quark", meaning: "쿼크", meaningEn: "fundamental constituent of hadrons", example: "Six quark flavors compose the matter we observe.", exampleKo: "여섯 가지 쿼크 향은 우리가 관찰하는 물질을 구성해요.", emoji: "⚛️" },
    { word: "gluon", meaning: "글루온", meaningEn: "particle mediating the strong force", example: "Gluons bind quarks within protons and neutrons.", exampleKo: "글루온은 양성자와 중성자 내의 쿼크를 결합해요.", emoji: "⚛️" },
    { word: "neutrino", meaning: "중성미자", meaningEn: "nearly massless neutral particle", example: "Neutrino oscillations revealed nonzero particle masses.", exampleKo: "중성미자 진동은 0이 아닌 입자 질량을 드러냈어요.", emoji: "👻" },
    { word: "muon", meaning: "뮤온", meaningEn: "heavier cousin of the electron", example: "Cosmic ray muons constantly traverse Earth's surface.", exampleKo: "우주선 뮤온은 지구 표면을 지속적으로 통과해요.", emoji: "⚛️" },
    { word: "antimatter", meaning: "반물질", meaningEn: "matter composed of antiparticles", example: "Antimatter production remains energetically expensive in laboratories.", exampleKo: "반물질 생성은 실험실에서 에너지적으로 비용이 많이 들어요.", emoji: "🌌" },
    { word: "spacetime", meaning: "시공간", meaningEn: "the four-dimensional fabric of the universe", example: "General relativity describes spacetime curvature by mass-energy.", exampleKo: "일반 상대성 이론은 질량-에너지에 의한 시공간 곡률을 설명해요.", emoji: "🌌" },
    { word: "geodesic", meaning: "측지선의, 최단선의", meaningEn: "the shortest path on a curved surface", example: "Light follows geodesic paths through curved spacetime.", exampleKo: "빛은 곡선 시공간을 통과하는 측지선 경로를 따라요.", emoji: "📐" },
    { word: "wormhole", meaning: "웜홀", meaningEn: "hypothetical spacetime tunnel", example: "Theoretical wormhole physics requires exotic matter for stability.", exampleKo: "이론적 웜홀 물리학은 안정성을 위해 이국적 물질을 필요로 해요.", emoji: "🌀" },
    { word: "singularity", meaning: "특이점", meaningEn: "point of infinite density in spacetime", example: "Black hole singularities represent breakdown of general relativity.", exampleKo: "블랙홀 특이점은 일반 상대성 이론의 붕괴를 나타내요.", emoji: "⚫" },
    { word: "cosmology", meaning: "우주론", meaningEn: "the study of the universe's origin and structure", example: "Modern cosmology integrates particle physics with astronomical observation.", exampleKo: "현대 우주론은 입자 물리학을 천문학적 관찰과 통합해요.", emoji: "🌌" },
    { word: "inflation", meaning: "급팽창, 인플레이션", meaningEn: "rapid early expansion of the universe", example: "Cosmic inflation theory addresses several puzzles in standard cosmology.", exampleKo: "우주 급팽창 이론은 표준 우주론의 여러 난제를 다뤄요.", emoji: "🎈" },
    { word: "exoplanet", meaning: "외계행성", meaningEn: "planet outside our solar system", example: "Exoplanet research has identified thousands of distant worlds.", exampleKo: "외계행성 연구는 수천 개의 먼 세계를 식별했어요.", emoji: "🪐" },
    { word: "panspermia", meaning: "범종설", meaningEn: "the theory that life spreads through the universe", example: "Panspermia hypotheses gain support from extremophile research.", exampleKo: "범종설 가설은 극한미생물 연구로부터 지지를 얻어요.", emoji: "🌠" },
    { word: "biogenesis", meaning: "생물기원, 생물발생", meaningEn: "the principle that life arises from existing life", example: "Pasteur's experiments established biogenesis against spontaneous generation.", exampleKo: "파스퇴르의 실험은 자연발생설에 반대하여 생물기원을 확립했어요.", emoji: "🧬" },
    { word: "isotope", meaning: "동위원소", meaningEn: "atom variants with different neutron counts", example: "Carbon-14 isotope analysis enables radiometric dating.", exampleKo: "탄소-14 동위원소 분석은 방사성 측정 연대 측정을 가능하게 해요.", emoji: "⚛️" },
    { word: "radiocarbon", meaning: "방사성탄소", meaningEn: "radioactive carbon isotope used for dating", example: "Radiocarbon dating revolutionized archaeological chronology.", exampleKo: "방사성탄소 연대 측정은 고고학적 연대학에 혁명을 일으켰어요.", emoji: "🔬" },
    { word: "radiometric", meaning: "방사성측정의", meaningEn: "based on radioactive decay measurement", example: "Radiometric dating provides absolute ages for geological samples.", exampleKo: "방사성측정 연대 측정은 지질학적 샘플의 절대 연령을 제공해요.", emoji: "⏳" },
    { word: "tectonic", meaning: "지각구조의, 격변하는", meaningEn: "relating to crustal movement; transformative", example: "The technological revolution produced tectonic shifts in employment patterns.", exampleKo: "기술 혁명은 고용 패턴에 격변적 변화를 만들어냈어요.", emoji: "🌋" },
    { word: "subduction", meaning: "섭입", meaningEn: "tectonic plate sliding under another", example: "Subduction zones generate the most powerful earthquakes.", exampleKo: "섭입대는 가장 강력한 지진을 발생시켜요.", emoji: "🌊" },
    { word: "magmatic", meaning: "마그마의", meaningEn: "relating to or formed from magma", example: "Magmatic processes produce diverse igneous rock types.", exampleKo: "마그마 작용은 다양한 화성암 유형을 만들어요.", emoji: "🌋" },
    { word: "metamorphic", meaning: "변성의", meaningEn: "transformed by heat and pressure", example: "Metamorphic rocks reveal Earth's deep tectonic history.", exampleKo: "변성암은 지구의 깊은 지각 구조 역사를 드러내요.", emoji: "🪨" },
    { word: "sedimentary", meaning: "퇴적의", meaningEn: "formed from settled particles", example: "Sedimentary rocks preserve invaluable paleontological records.", exampleKo: "퇴적암은 귀중한 고생물학적 기록을 보존해요.", emoji: "🪨" },
    { word: "igneous", meaning: "화성의", meaningEn: "formed from solidified magma", example: "Igneous rocks crystallize from cooling molten material.", exampleKo: "화성암은 냉각되는 용융 물질로부터 결정화돼요.", emoji: "🌋" },
    { word: "diagenesis", meaning: "속성작용", meaningEn: "physical and chemical changes in sediments", example: "Diagenesis produces sedimentary rock from accumulated particles.", exampleKo: "속성작용은 축적된 입자로부터 퇴적암을 만들어내요.", emoji: "🪨" },
    { word: "weathering", meaning: "풍화작용", meaningEn: "breakdown of rocks at Earth's surface", example: "Chemical weathering progressively dissolves exposed mineral surfaces.", exampleKo: "화학적 풍화는 노출된 광물 표면을 점진적으로 용해해요.", emoji: "💧" },
    { word: "alluvial", meaning: "충적의, 퇴적의", meaningEn: "deposited by flowing water", example: "Alluvial soils support some of Earth's most productive agriculture.", exampleKo: "충적 토양은 지구에서 가장 생산적인 농업의 일부를 지원해요.", emoji: "🌾" },
    { word: "fluvial", meaning: "강의, 하천의", meaningEn: "produced by river action", example: "Fluvial geomorphology examines river-shaped landscape features.", exampleKo: "하천 지형학은 강이 형성한 경관 특징을 검토해요.", emoji: "🌊" },
    { word: "lacustrine", meaning: "호수의, 호수성의", meaningEn: "relating to lakes", example: "Lacustrine sediments preserve continuous climate records.", exampleKo: "호수 퇴적물은 연속적인 기후 기록을 보존해요.", emoji: "🏞️" },
    { word: "marine", meaning: "해양의", meaningEn: "relating to the sea", example: "Marine biodiversity faces unprecedented threats from human activities.", exampleKo: "해양 생물다양성은 인간 활동으로부터 전례없는 위협에 직면해요.", emoji: "🌊" },
    { word: "estuarine", meaning: "강어귀의", meaningEn: "relating to estuaries", example: "Estuarine ecosystems harbor extraordinary biological productivity.", exampleKo: "강어귀 생태계는 비범한 생물학적 생산성을 품어요.", emoji: "🌊" },
    { word: "littoral", meaning: "연안의, 해변의", meaningEn: "relating to the shore", example: "Littoral zones experience periodic submersion by tides.", exampleKo: "연안 지대는 조수에 의한 주기적 침수를 경험해요.", emoji: "🏖️" },
    { word: "pelagic", meaning: "원양의, 표영의", meaningEn: "relating to open ocean", example: "Pelagic species traverse vast distances during migration.", exampleKo: "원양 종은 이동 중 광대한 거리를 횡단해요.", emoji: "🐟" },
    { word: "benthic", meaning: "저서의, 해저의", meaningEn: "relating to the sea floor", example: "Benthic communities depend on detritus falling from above.", exampleKo: "저서 군집은 위에서 떨어지는 잔해물에 의존해요.", emoji: "🐚" },
    { word: "planktonic", meaning: "플랑크톤의", meaningEn: "relating to small drifting organisms", example: "Planktonic algae produce much of Earth's atmospheric oxygen.", exampleKo: "플랑크톤 조류는 지구 대기 산소의 상당 부분을 생산해요.", emoji: "🦠" },
    { word: "phytoplankton", meaning: "식물성플랑크톤", meaningEn: "microscopic ocean plants", example: "Phytoplankton support oceanic food webs through photosynthesis.", exampleKo: "식물성 플랑크톤은 광합성을 통해 해양 먹이망을 지원해요.", emoji: "🌱" },
    { word: "zooplankton", meaning: "동물성플랑크톤", meaningEn: "small drifting marine animals", example: "Zooplankton populations crucially mediate marine food webs.", exampleKo: "동물성 플랑크톤 개체군은 해양 먹이망을 결정적으로 매개해요.", emoji: "🦐" },
    { word: "opalescent", meaning: "유백광의, 오팔처럼빛나는", meaningEn: "showing changing colors like an opal", example: "The opalescent surface caught light in shifting hues.", exampleKo: "유백광의 표면은 변화하는 색조로 빛을 포착했어요.", emoji: "💎" },
    { word: "nocturnal", meaning: "야행성의", meaningEn: "active during the night", example: "Nocturnal animals possess specialized sensory adaptations.", exampleKo: "야행성 동물은 전문화된 감각 적응을 가지고 있어요.", emoji: "🦉" },
    { word: "diurnal", meaning: "주행성의", meaningEn: "active during the daytime", example: "Diurnal patterns reflect billions of years of solar adaptation.", exampleKo: "주행성 패턴은 수십억 년의 태양 적응을 반영해요.", emoji: "☀️" },
    { word: "circadian", meaning: "일주기의", meaningEn: "occurring in 24-hour cycles", example: "Circadian rhythm disruption produces measurable health consequences.", exampleKo: "일주기 리듬 교란은 측정 가능한 건강 결과를 만들어요.", emoji: "🕐" },
    { word: "hibernation", meaning: "동면, 겨울잠", meaningEn: "extended torpor during winter", example: "Bear hibernation involves dramatic physiological changes.", exampleKo: "곰의 동면은 극적인 생리적 변화를 포함해요.", emoji: "🐻" },
    { word: "torpor", meaning: "휴면, 무기력", meaningEn: "state of reduced physiological activity", example: "Hummingbird torpor conserves energy during cold nights.", exampleKo: "벌새의 휴면은 추운 밤 동안 에너지를 보존해요.", emoji: "😴" },
    { word: "metamorphosis", meaning: "변태, 변형", meaningEn: "dramatic developmental transformation", example: "Insect metamorphosis remains a remarkable biological phenomenon.", exampleKo: "곤충의 변태는 놀라운 생물학적 현상으로 남아있어요.", emoji: "🦋" },
    { word: "isometry", meaning: "등측성", meaningEn: "growth maintaining body proportions", example: "Pure isometry rarely characterizes biological growth patterns.", exampleKo: "순수한 등측성은 생물학적 성장 패턴을 드물게 특징지어요.", emoji: "📐" },
    { word: "kin", meaning: "친족, 혈족", meaningEn: "biological relatives", example: "Kin selection theory explains apparent altruism among relatives.", exampleKo: "친족 선택 이론은 친족 간의 표면적 이타주의를 설명해요.", emoji: "👨‍👩‍👧" },
    { word: "symbiosis", meaning: "공생", meaningEn: "close ecological relationship between species", example: "Mitochondrial origins illustrate ancient endosymbiosis.", exampleKo: "미토콘드리아의 기원은 고대의 내공생을 설명해요.", emoji: "🤝" },
    { word: "mutualism", meaning: "상리공생", meaningEn: "interaction beneficial to both species", example: "Mycorrhizal mutualism enriches plant nutrition substantially.", exampleKo: "균근 상리공생은 식물 영양을 상당히 풍부하게 해요.", emoji: "🌳" },
    { word: "parasitism", meaning: "기생", meaningEn: "interaction harming one species while benefiting another", example: "Parasitism can drive coevolutionary arms races.", exampleKo: "기생은 공진화적 군비 경쟁을 추진할 수 있어요.", emoji: "🦠" },
    { word: "predation", meaning: "포식, 약탈", meaningEn: "the act of preying upon another organism", example: "Predation pressure shapes prey morphology and behavior.", exampleKo: "포식 압력은 먹이의 형태와 행동을 형성해요.", emoji: "🦁" },
    { word: "trophic", meaning: "영양단계의", meaningEn: "relating to feeding relationships", example: "Trophic cascades demonstrate top-down ecosystem regulation.", exampleKo: "영양 단계 연쇄는 하향식 생태계 조절을 보여줘요.", emoji: "🍽️" },
    { word: "carnivore", meaning: "육식동물", meaningEn: "animal that feeds on flesh", example: "Apex carnivores regulate prey populations and ecosystem structure.", exampleKo: "최상위 육식동물은 먹이 개체군과 생태계 구조를 조절해요.", emoji: "🐺" },
    { word: "omnivore", meaning: "잡식동물", meaningEn: "animal eating both plants and meat", example: "Human dietary flexibility reflects omnivorous evolutionary heritage.", exampleKo: "인간의 식이 유연성은 잡식성 진화 유산을 반영해요.", emoji: "🍽️" },
    { word: "herbivore", meaning: "초식동물", meaningEn: "animal that feeds on plants", example: "Large herbivore extinctions transformed terrestrial ecosystems.", exampleKo: "대형 초식동물 멸종은 육상 생태계를 변화시켰어요.", emoji: "🦓" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
