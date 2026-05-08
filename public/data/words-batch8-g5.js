// Batch 8 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "heterozygous", meaning: "이형접합의", meaningEn: "having two different alleles for a gene", example: "Heterozygous carriers may transmit recessive disorders to offspring.", exampleKo: "이형접합 보인자는 열성 질환을 자손에게 전달할 수 있어요.", emoji: "🧬" },
    { word: "homozygous", meaning: "동형접합의", meaningEn: "having identical alleles for a gene", example: "Homozygous mutations typically produce more severe phenotypes.", exampleKo: "동형접합 돌연변이는 일반적으로 더 심각한 표현형을 나타내요.", emoji: "🧬" },
    { word: "microbiome", meaning: "미생물군집", meaningEn: "the microorganisms in a particular environment", example: "Gut microbiome composition influences immune system development.", exampleKo: "장내 미생물군집 구성은 면역 체계 발달에 영향을 미쳐요.", emoji: "🦠" },
    { word: "telomere", meaning: "텔로미어 (염색체끝부분)", meaningEn: "protective caps at chromosome ends", example: "Telomere shortening correlates with cellular aging and senescence.", exampleKo: "텔로미어 단축은 세포 노화 및 노쇠와 상관관계가 있어요.", emoji: "🧬" },
    { word: "ontogeny", meaning: "개체발생", meaningEn: "the development of an individual organism", example: "Ontogeny recapitulates phylogeny is a now-discredited biological maxim.", exampleKo: "개체발생은 계통발생을 반복한다는 것은 이제 신뢰받지 못하는 생물학적 격언이에요.", emoji: "🐣" },
    { word: "phylogeny", meaning: "계통발생, 계통수", meaningEn: "the evolutionary history of a species", example: "Modern phylogeny employs molecular sequence data extensively.", exampleKo: "현대 계통발생은 분자 서열 데이터를 광범위하게 사용해요.", emoji: "🌳" },
    { word: "speciation", meaning: "종분화", meaningEn: "the formation of new species", example: "Geographic isolation often drives speciation in island ecosystems.", exampleKo: "지리적 격리는 섬 생태계에서 종종 종분화를 추진해요.", emoji: "🏝️" },
    { word: "analogy", meaning: "유사성, 유추", meaningEn: "similarity in function but not origin", example: "Wings represent evolutionary analogy between birds and insects.", exampleKo: "날개는 새와 곤충 사이의 진화적 유사성을 나타내요.", emoji: "🦋" },
    { word: "vestige", meaning: "흔적, 자취", meaningEn: "a trace of something no longer present", example: "Whale pelvic bones are vestiges of their terrestrial ancestors.", exampleKo: "고래의 골반 뼈는 그들의 육상 조상의 흔적이에요.", emoji: "🦴" },
    { word: "geomorphology", meaning: "지형학", meaningEn: "the study of land form processes", example: "Geomorphology informs predictions of erosion and landscape evolution.", exampleKo: "지형학은 침식 및 경관 진화의 예측에 정보를 제공해요.", emoji: "🏔️" },
    { word: "tectonics", meaning: "지각구조론, 판구조론", meaningEn: "the structure and movement of Earth's crust", example: "Plate tectonics revolutionized geological understanding in the twentieth century.", exampleKo: "판구조론은 20세기 지질학적 이해에 혁명을 일으켰어요.", emoji: "🌋" },
    { word: "lithosphere", meaning: "암석권", meaningEn: "the rigid outer layer of Earth", example: "The lithosphere comprises the crust and uppermost mantle.", exampleKo: "암석권은 지각과 최상부 맨틀로 구성돼요.", emoji: "🌍" },
    { word: "biosphere", meaning: "생물권", meaningEn: "the regions of Earth occupied by living things", example: "Climate change threatens biosphere stability across multiple ecosystems.", exampleKo: "기후 변화는 여러 생태계에 걸쳐 생물권 안정성을 위협해요.", emoji: "🌿" },
    { word: "anthropocene", meaning: "인류세", meaningEn: "the current geological age dominated by humans", example: "Scientists debate the precise starting point of the Anthropocene epoch.", exampleKo: "과학자들은 인류세 시대의 정확한 시작점에 대해 논쟁해요.", emoji: "🌍" },
    { word: "holocene", meaning: "홀로세 (현재지질시대)", meaningEn: "the current geological epoch", example: "The Holocene began approximately 11,700 years ago.", exampleKo: "홀로세는 약 11,700년 전에 시작되었어요.", emoji: "⏳" },
    { word: "pleistocene", meaning: "플라이스토세 (빙하기)", meaningEn: "the geological epoch of recent ice ages", example: "Pleistocene megafauna shaped landscapes long before human dominance.", exampleKo: "플라이스토세 거대동물군은 인간 지배 훨씬 이전에 경관을 형성했어요.", emoji: "🦣" },
    { word: "pandemic", meaning: "전세계적유행병", meaningEn: "a disease prevalent over a whole country or world", example: "Pandemic preparedness requires sustained international cooperation.", exampleKo: "팬데믹 대비는 지속적인 국제 협력을 필요로 해요.", emoji: "🌍" },
    { word: "zoonotic", meaning: "인수공통의", meaningEn: "transmissible between animals and humans", example: "Many zoonotic diseases emerge from disrupted wildlife habitats.", exampleKo: "많은 인수공통 질병은 교란된 야생동물 서식지에서 출현해요.", emoji: "🦠" },
    { word: "vector", meaning: "매개체, 벡터", meaningEn: "an organism transmitting disease; quantity with direction", example: "Mosquitoes serve as primary vectors for several tropical diseases.", exampleKo: "모기는 여러 열대 질병의 주요 매개체 역할을 해요.", emoji: "🦟" },
    { word: "antibody", meaning: "항체", meaningEn: "blood protein produced to fight antigens", example: "Antibody titers indicate immune response strength following vaccination.", exampleKo: "항체 역가는 백신 접종 후 면역 반응의 강도를 나타내요.", emoji: "🛡️" },
    { word: "cytokine", meaning: "사이토카인", meaningEn: "small proteins regulating immune response", example: "Cytokine storms can produce devastating systemic inflammation.", exampleKo: "사이토카인 폭풍은 파괴적인 전신 염증을 일으킬 수 있어요.", emoji: "🌪️" },
    { word: "chemokine", meaning: "케모카인", meaningEn: "cytokines that direct cell movement", example: "Chemokines orchestrate immune cell trafficking to inflammation sites.", exampleKo: "케모카인은 염증 부위로의 면역 세포 이동을 지휘해요.", emoji: "🧬" },
    { word: "macrophage", meaning: "대식세포", meaningEn: "white blood cells that engulf pathogens", example: "Macrophages serve as both immune defenders and tissue regulators.", exampleKo: "대식세포는 면역 방어자이자 조직 조절자 역할을 해요.", emoji: "🛡️" },
    { word: "allograft", meaning: "동종이식", meaningEn: "tissue transplant between same species individuals", example: "Allograft rejection requires lifelong immunosuppressive therapy.", exampleKo: "동종이식 거부 반응은 평생 면역억제 치료가 필요해요.", emoji: "🏥" },
    { word: "xenograft", meaning: "이종이식", meaningEn: "tissue transplant between different species", example: "Xenograft research aims to address chronic organ shortages.", exampleKo: "이종이식 연구는 만성 장기 부족 문제를 해결하는 것을 목표로 해요.", emoji: "🐷" },
    { word: "biopsy", meaning: "생검, 조직검사", meaningEn: "examination of tissue removed from the body", example: "The biopsy revealed early-stage malignancy amenable to treatment.", exampleKo: "생검은 치료 가능한 초기 악성종양을 드러냈어요.", emoji: "🔬" },
    { word: "cytology", meaning: "세포학", meaningEn: "the study of cells", example: "Modern cytology enables single-cell analysis at unprecedented resolution.", exampleKo: "현대 세포학은 전례없는 해상도로 단일 세포 분석을 가능하게 해요.", emoji: "🔬" },
    { word: "embryology", meaning: "발생학, 태생학", meaningEn: "the study of embryonic development", example: "Comparative embryology reveals evolutionary relationships across species.", exampleKo: "비교 발생학은 종 간 진화적 관계를 드러내요.", emoji: "🥚" },
    { word: "organogenesis", meaning: "기관형성", meaningEn: "the formation of organs during development", example: "Organogenesis errors can produce congenital malformations.", exampleKo: "기관형성 오류는 선천성 기형을 일으킬 수 있어요.", emoji: "🫀" },
    { word: "pluripotent", meaning: "다능성의", meaningEn: "able to develop into many cell types", example: "Induced pluripotent stem cells revolutionized regenerative medicine research.", exampleKo: "유도 다능성 줄기세포는 재생 의학 연구에 혁명을 일으켰어요.", emoji: "🧬" },
    { word: "differentiation", meaning: "분화", meaningEn: "the process of becoming specialized", example: "Cellular differentiation involves cascading genetic regulatory changes.", exampleKo: "세포 분화는 연쇄적인 유전자 조절 변화를 포함해요.", emoji: "🔬" },
    { word: "regeneration", meaning: "재생", meaningEn: "regrowth of lost or damaged tissue", example: "Salamander regeneration capabilities inspire human medical research.", exampleKo: "도롱뇽의 재생 능력은 인간 의학 연구에 영감을 줘요.", emoji: "🦎" },
    { word: "homeostasis", meaning: "항상성", meaningEn: "maintenance of stable internal conditions", example: "Homeostasis requires constant physiological adjustment to environmental changes.", exampleKo: "항상성은 환경 변화에 대한 지속적인 생리적 조정을 요구해요.", emoji: "⚖️" },
    { word: "feedback", meaning: "피드백, 환류", meaningEn: "the return of system output as input", example: "Negative feedback loops stabilize biological and social systems.", exampleKo: "음성 피드백 루프는 생물학적 및 사회적 시스템을 안정화해요.", emoji: "🔄" },
    { word: "endocrine", meaning: "내분비의", meaningEn: "relating to hormone-secreting glands", example: "Endocrine disruption from environmental chemicals raises serious health concerns.", exampleKo: "환경 화학물질로 인한 내분비 교란은 심각한 건강 우려를 제기해요.", emoji: "💊" },
    { word: "exocrine", meaning: "외분비의", meaningEn: "relating to glands secreting through ducts", example: "Pancreatic exocrine function produces digestive enzymes.", exampleKo: "췌장 외분비 기능은 소화 효소를 생산해요.", emoji: "💧" },
    { word: "paracrine", meaning: "측분비의", meaningEn: "signaling between nearby cells", example: "Paracrine signaling coordinates local tissue responses.", exampleKo: "측분비 신호는 국소 조직 반응을 조정해요.", emoji: "📡" },
    { word: "metabolism", meaning: "신진대사", meaningEn: "chemical processes that maintain life", example: "Metabolism research illuminates connections between nutrition and disease.", exampleKo: "대사 연구는 영양과 질병 사이의 연결을 밝혀요.", emoji: "⚗️" },
    { word: "glycolysis", meaning: "해당작용", meaningEn: "the breakdown of glucose for energy", example: "Glycolysis represents an evolutionarily ancient metabolic pathway.", exampleKo: "해당작용은 진화적으로 고대의 대사 경로를 나타내요.", emoji: "⚗️" },
    { word: "mitochondria", meaning: "미토콘드리아", meaningEn: "cellular organelles producing energy", example: "Mitochondrial dysfunction underlies many neurodegenerative diseases.", exampleKo: "미토콘드리아 기능 장애는 많은 신경퇴행성 질환의 기저에 있어요.", emoji: "🔋" },
    { word: "endoplasmic", meaning: "소포체의", meaningEn: "relating to the cellular membrane network", example: "Endoplasmic reticulum stress contributes to multiple disease processes.", exampleKo: "소포체 스트레스는 다양한 질병 과정에 기여해요.", emoji: "🔬" },
    { word: "lysosome", meaning: "리소좀", meaningEn: "cellular organelles containing digestive enzymes", example: "Lysosomes break down cellular waste and pathogens.", exampleKo: "리소좀은 세포 폐기물과 병원체를 분해해요.", emoji: "🦠" },
    { word: "peroxisome", meaning: "퍼옥시좀", meaningEn: "organelles involved in lipid metabolism", example: "Peroxisome disorders produce severe neurological symptoms.", exampleKo: "퍼옥시좀 장애는 심각한 신경학적 증상을 일으켜요.", emoji: "🧬" },
    { word: "cytoskeleton", meaning: "세포골격", meaningEn: "protein framework within cells", example: "The cytoskeleton enables cell shape changes and movement.", exampleKo: "세포골격은 세포 모양 변화와 이동을 가능하게 해요.", emoji: "🦴" },
    { word: "membrane", meaning: "막, 세포막", meaningEn: "thin layer enclosing cells or structures", example: "Membrane proteins regulate the flow of molecules into and out of cells.", exampleKo: "막 단백질은 세포 안팎으로 분자의 흐름을 조절해요.", emoji: "🛡️" },
    { word: "osmosis", meaning: "삼투, 삼투작용", meaningEn: "water movement across membranes", example: "Osmosis maintains proper cellular hydration and ion balance.", exampleKo: "삼투는 적절한 세포 수분과 이온 균형을 유지해요.", emoji: "💧" },
    { word: "diffusion", meaning: "확산", meaningEn: "movement from high to low concentration", example: "Passive diffusion drives many essential physiological processes.", exampleKo: "수동 확산은 많은 필수 생리 과정을 추진해요.", emoji: "🌊" },
    { word: "kinetics", meaning: "운동학, 반응속도론", meaningEn: "the study of motion or reaction rates", example: "Enzyme kinetics quantifies the speed of biochemical reactions.", exampleKo: "효소 반응속도론은 생화학 반응의 속도를 정량화해요.", emoji: "⏱️" },
    { word: "entropy", meaning: "엔트로피", meaningEn: "measure of disorder in a system", example: "The second law dictates that entropy increases in closed systems.", exampleKo: "제2법칙은 폐쇄계에서 엔트로피가 증가한다고 규정해요.", emoji: "🌀" },
    { word: "enthalpy", meaning: "엔탈피", meaningEn: "total heat content of a system", example: "Enthalpy changes accompany chemical reactions and phase transitions.", exampleKo: "엔탈피 변화는 화학 반응과 상 전이를 동반해요.", emoji: "🔥" },
    { word: "photosynthesis", meaning: "광합성", meaningEn: "energy production from light", example: "Photosynthesis fundamentally shaped Earth's atmospheric composition.", exampleKo: "광합성은 지구 대기 구성을 근본적으로 형성했어요.", emoji: "☀️" },
    { word: "chemotaxis", meaning: "화학주성", meaningEn: "movement toward chemical stimuli", example: "Bacterial chemotaxis enables navigation toward nutrients.", exampleKo: "박테리아 화학주성은 영양분을 향한 항법을 가능하게 해요.", emoji: "🧭" },
    { word: "ethology", meaning: "동물행동학", meaningEn: "the study of animal behavior", example: "Modern ethology integrates evolutionary and neurobiological perspectives.", exampleKo: "현대 동물행동학은 진화적 및 신경생물학적 관점을 통합해요.", emoji: "🦁" },
    { word: "sociobiology", meaning: "사회생물학", meaningEn: "the study of biological basis of social behavior", example: "Sociobiology generated significant controversy upon its emergence.", exampleKo: "사회생물학은 등장 시 상당한 논란을 일으켰어요.", emoji: "👥" },
    { word: "ecotone", meaning: "추이대 (생태경계)", meaningEn: "a transitional zone between ecosystems", example: "Ecotones often harbor exceptional biodiversity at habitat boundaries.", exampleKo: "추이대는 종종 서식지 경계에서 뛰어난 생물다양성을 품어요.", emoji: "🌿" },
    { word: "biome", meaning: "생물군계", meaningEn: "a major ecological community type", example: "Tropical rainforest biomes contain extraordinary species diversity.", exampleKo: "열대 우림 생물군계는 비범한 종 다양성을 포함해요.", emoji: "🌴" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
