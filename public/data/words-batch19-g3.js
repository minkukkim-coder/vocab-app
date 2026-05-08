// Batch 19 — G3 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "pelagic", meaning: "원양의", meaningEn: "relating to the open sea", example: "Pelagic species range across vast oceanic distances.", exampleKo: "원양의 종들은 광대한 해양 거리를 넘나듭니다.", emoji: "🐟" },
    { word: "estuarine", meaning: "강어귀의", meaningEn: "relating to where rivers meet the sea", example: "Estuarine ecosystems serve as crucial nurseries for marine fisheries.", exampleKo: "강어귀 생태계는 해양 어업의 중요한 양육장 역할을 합니다.", emoji: "🌊" },
    { word: "fluvial", meaning: "하천의", meaningEn: "relating to rivers and streams", example: "Fluvial geomorphology studies how rivers shape landscapes over time.", exampleKo: "하천 지형학은 강이 시간에 따라 풍경을 만드는 방식을 연구합니다.", emoji: "🏞️" },
    { word: "lacustrine", meaning: "호수의", meaningEn: "relating to lakes", example: "Lacustrine sediments preserve detailed climate records spanning millennia.", exampleKo: "호수 퇴적물은 수천 년에 걸친 상세한 기후 기록을 보존합니다.", emoji: "🏔️" },
    { word: "riparian", meaning: "강변의", meaningEn: "relating to the banks of rivers", example: "Riparian buffer zones protect waterways from agricultural runoff.", exampleKo: "강변의 완충 지대는 수로를 농업 유출수로부터 보호합니다.", emoji: "🌳" },
    { word: "littoral", meaning: "해안의", meaningEn: "relating to the shore of a sea or lake", example: "Littoral communities adapt to dramatic daily tidal fluctuations.", exampleKo: "해안의 군집들은 극적인 일일 조수 변동에 적응합니다.", emoji: "🏖️" },
    { word: "intertidal", meaning: "조간대의", meaningEn: "between high and low tide marks", example: "Intertidal organisms endure alternating exposure to air and water.", exampleKo: "조간대 생물은 공기와 물에 번갈아 노출되는 것을 견딥니다.", emoji: "🦀" },
    { word: "epiphytic", meaning: "착생식물의", meaningEn: "growing on another plant without parasitism", example: "Epiphytic orchids drape the canopies of tropical forests.", exampleKo: "착생식물 난초는 열대림의 임관을 휘감습니다.", emoji: "🌸" },
    { word: "heterotrophic", meaning: "종속영양의", meaningEn: "consuming organic compounds for energy", example: "Heterotrophic organisms depend on autotrophs for survival.", exampleKo: "종속영양 생물은 생존을 위해 독립영양 생물에 의존합니다.", emoji: "🍖" },
    { word: "oligotrophic", meaning: "빈영양의", meaningEn: "containing few nutrients", example: "Oligotrophic lakes maintain remarkable clarity due to low productivity.", exampleKo: "빈영양 호수는 낮은 생산성 덕분에 놀라운 투명도를 유지합니다.", emoji: "💧" },
    { word: "dystrophic", meaning: "이영양의", meaningEn: "rich in humic acids and acidic", example: "Dystrophic peat bogs preserve organic remains for millennia.", exampleKo: "이영양 토탄 늪은 유기체 잔해를 수천 년간 보존합니다.", emoji: "🪵" },
    { word: "hypoxic", meaning: "저산소의", meaningEn: "deficient in oxygen", example: "Hypoxic dead zones expand each summer in coastal waters.", exampleKo: "저산소 데드존은 매년 여름 연안 수역에서 확장됩니다.", emoji: "💀" },
    { word: "anthropogenic", meaning: "인위적인", meaningEn: "originating from human activity", example: "Anthropogenic emissions drive contemporary climate change.", exampleKo: "인위적인 배출은 현대 기후 변화를 추동합니다.", emoji: "🏭" },
    { word: "biogenic", meaning: "생물 기원의", meaningEn: "produced by living organisms", example: "Biogenic methane contributes significantly to atmospheric warming.", exampleKo: "생물 기원의 메탄은 대기 온난화에 상당히 기여합니다.", emoji: "🦠" },
    { word: "diagenetic", meaning: "속성 작용의", meaningEn: "concerning physical changes after sediment deposition", example: "Diagenetic processes transform loose sediments into solid rock.", exampleKo: "속성 작용 과정은 느슨한 퇴적물을 단단한 암석으로 변형시킵니다.", emoji: "🪨" },
    { word: "metamorphic", meaning: "변성의", meaningEn: "formed by alteration of pre-existing rock", example: "Metamorphic gneiss reveals tectonic histories spanning hundreds of millions of years.", exampleKo: "변성 편마암은 수억 년에 걸친 지각 변동 역사를 드러냅니다.", emoji: "💎" },
    { word: "igneous", meaning: "화성의", meaningEn: "formed from cooling magma or lava", example: "Igneous intrusions create unique mineral deposits in the crust.", exampleKo: "화성 관입은 지각에 독특한 광물 퇴적을 만듭니다.", emoji: "🌋" },
    { word: "sedimentary", meaning: "퇴적의", meaningEn: "formed from accumulated mineral or organic particles", example: "Sedimentary layers preserve a chronological archive of past life.", exampleKo: "퇴적층은 과거 생명의 연대기적 기록을 보존합니다.", emoji: "🗿" },
    { word: "tectonic", meaning: "지각 변동의", meaningEn: "relating to large-scale crustal movement", example: "Tectonic plate boundaries concentrate seismic and volcanic activity.", exampleKo: "지각 변동의 판 경계는 지진과 화산 활동을 집중시킵니다.", emoji: "🌍" },
    { word: "orogenic", meaning: "조산의", meaningEn: "relating to mountain building", example: "Orogenic events shape the geography of entire continents.", exampleKo: "조산 사건은 대륙 전체의 지리를 형성합니다.", emoji: "⛰️" },
    { word: "isostatic", meaning: "지각 평형의", meaningEn: "relating to crustal balance with the mantle", example: "Isostatic rebound continues centuries after glacial retreat.", exampleKo: "지각 평형 반등은 빙하 후퇴 후 수 세기 동안 계속됩니다.", emoji: "⚖️" },
    { word: "biogeographic", meaning: "생물지리학의", meaningEn: "relating to species distribution patterns", example: "Biogeographic regions reflect both ecological and evolutionary histories.", exampleKo: "생물지리학적 지역은 생태학적이고 진화적인 역사를 모두 반영합니다.", emoji: "🗺️" },
    { word: "phylogenetic", meaning: "계통 발생의", meaningEn: "concerning evolutionary relationships among organisms", example: "Phylogenetic analysis reveals unexpected evolutionary connections.", exampleKo: "계통 발생 분석은 예상치 못한 진화적 연결을 드러냅니다.", emoji: "🌳" },
    { word: "cladistic", meaning: "분기학의", meaningEn: "based on shared evolutionary characteristics", example: "Cladistic methods classify organisms by ancestry rather than appearance.", exampleKo: "분기학적 방법은 외관이 아닌 조상에 의해 생물을 분류합니다.", emoji: "🌲" },
    { word: "speciation", meaning: "종 분화", meaningEn: "the formation of new species", example: "Allopatric speciation requires geographic isolation between populations.", exampleKo: "이소적 종 분화는 개체군 간 지리적 격리를 요구합니다.", emoji: "🦋" },
    { word: "sympatric", meaning: "동소적인", meaningEn: "occurring in the same geographic area", example: "Sympatric speciation challenges traditional models of species formation.", exampleKo: "동소적인 종 분화는 전통적인 종 형성 모델에 도전합니다.", emoji: "🤝" },
    { word: "gradualism", meaning: "점진주의", meaningEn: "evolution by slow continuous change", example: "Darwinian gradualism faces challenges from punctuated equilibrium models.", exampleKo: "다윈의 점진주의는 단속 평형 모델로부터 도전을 받습니다.", emoji: "🐢" },
    { word: "spandrel", meaning: "부수적 산물", meaningEn: "evolutionary byproduct without adaptive purpose", example: "Gould proposed that some traits are evolutionary spandrels.", exampleKo: "굴드는 일부 형질이 진화적 부수적 산물이라고 제안했습니다.", emoji: "🏛️" },
    { word: "heterozygosity", meaning: "이형접합성", meaningEn: "having different alleles at a gene locus", example: "Heterozygosity often confers fitness advantages in variable environments.", exampleKo: "이형접합성은 변동하는 환경에서 종종 적합성 이점을 부여합니다.", emoji: "🧬" },
    { word: "genotype", meaning: "유전자형", meaningEn: "an individual's genetic constitution", example: "Identical genotypes can produce strikingly different phenotypes.", exampleKo: "동일한 유전자형이 놀라울 정도로 다른 표현형을 만들어 낼 수 있습니다.", emoji: "🧬" },
    { word: "phenotype", meaning: "표현형", meaningEn: "the observable traits of an organism", example: "Phenotype results from complex interactions between genes and environment.", exampleKo: "표현형은 유전자와 환경의 복잡한 상호작용에서 비롯됩니다.", emoji: "👁️" },
    { word: "microbiome", meaning: "미생물 군집", meaningEn: "community of microorganisms in an environment", example: "The human microbiome influences immunity, metabolism, and even mood.", exampleKo: "인간 미생물 군집은 면역, 대사, 심지어 기분에도 영향을 미칩니다.", emoji: "🦠" },
    { word: "mutualism", meaning: "상리공생", meaningEn: "interaction benefiting both species", example: "Mutualism between fungi and tree roots sustains entire forest ecosystems.", exampleKo: "균류와 나무 뿌리 간의 상리공생은 숲 생태계 전체를 지탱합니다.", emoji: "🤝" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
