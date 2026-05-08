// Batch 11 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "geopolitics", meaning: "지정학", meaningEn: "the influence of geography on politics", example: "Contemporary geopolitics increasingly addresses cyberspace and outer space.", exampleKo: "현대 지정학은 사이버 공간과 우주 공간을 점점 더 다뤄요.", emoji: "🌍" },
    { word: "realpolitik", meaning: "현실정치", meaningEn: "politics based on practical considerations", example: "Cold War realpolitik often subordinated humanitarian concerns to strategic interests.", exampleKo: "냉전 현실정치는 종종 인도주의적 관심사를 전략적 이익에 종속시켰어요.", emoji: "♟️" },
    { word: "ostpolitik", meaning: "동방정책", meaningEn: "policy of normalizing relations with Eastern Bloc", example: "Brandt's ostpolitik transformed West German foreign policy.", exampleKo: "브란트의 동방정책은 서독 외교 정책을 변화시켰어요.", emoji: "🤝" },
    { word: "détente", meaning: "긴장완화", meaningEn: "easing of strained relations", example: "Cold War détente produced significant arms control agreements.", exampleKo: "냉전 긴장완화는 중요한 군비 통제 협정을 만들어냈어요.", emoji: "🕊️" },
    { word: "rapprochement", meaning: "관계회복, 화해", meaningEn: "establishment of harmonious relations", example: "Sino-American rapprochement reshaped global geopolitical alignments.", exampleKo: "중미 관계회복은 세계 지정학적 정렬을 재편했어요.", emoji: "🤝" },
    { word: "irredentism", meaning: "민족통일주의", meaningEn: "advocacy of restoring lost territory", example: "Irredentist movements destabilized interwar European borders.", exampleKo: "민족통일주의 운동은 양차 대전 사이 유럽 국경을 불안정하게 만들었어요.", emoji: "🗺️" },
    { word: "revanchism", meaning: "복수주의", meaningEn: "policy of revenge for territorial losses", example: "French revanchism shaped European tensions before the First World War.", exampleKo: "프랑스 복수주의는 1차 대전 전 유럽 긴장을 형성했어요.", emoji: "⚔️" },
    { word: "balkanization", meaning: "발칸화 (분열)", meaningEn: "fragmentation into hostile units", example: "Critics warned that the policy might cause regional balkanization.", exampleKo: "비평가들은 그 정책이 지역적 분열을 일으킬 수 있다고 경고했어요.", emoji: "🧩" },
    { word: "annexation", meaning: "병합", meaningEn: "the addition of territory to a state", example: "International law generally prohibits annexation through armed force.", exampleKo: "국제법은 일반적으로 무력에 의한 병합을 금지해요.", emoji: "🏴" },
    { word: "secession", meaning: "분리독립", meaningEn: "the formal withdrawal from a federation", example: "Constitutional disputes about secession remain politically charged.", exampleKo: "분리독립에 대한 헌법적 분쟁은 정치적으로 민감해요.", emoji: "✂️" },
    { word: "autarky", meaning: "경제자급자족, 자급자족", meaningEn: "economic self-sufficiency", example: "Pursuing absolute autarky proved economically devastating for the regime.", exampleKo: "절대적 자급자족 추구는 그 정권에게 경제적으로 파괴적임이 입증됐어요.", emoji: "🔒" },
    { word: "keynesianism", meaning: "케인스주의", meaningEn: "economic theory advocating government intervention", example: "Post-war keynesianism shaped Western economic policy for decades.", exampleKo: "전후 케인스주의는 수십 년간 서구 경제 정책을 형성했어요.", emoji: "📊" },
    { word: "corporatism", meaning: "조합주의, 통합주의", meaningEn: "system of organized interest representation", example: "Scandinavian corporatism integrates labor and capital in policymaking.", exampleKo: "스칸디나비아 조합주의는 정책 결정에서 노동과 자본을 통합해요.", emoji: "🏢" },
    { word: "syndicalism", meaning: "노동조합주의, 생디칼리슴", meaningEn: "movement for worker control of industries", example: "Syndicalism advocated transferring economic control to trade unions.", exampleKo: "생디칼리슴은 경제 통제를 노동조합에 이전할 것을 주장했어요.", emoji: "👷" },
    { word: "republicanism", meaning: "공화주의", meaningEn: "political ideology of representative government", example: "Civic republicanism emphasizes active participation in self-government.", exampleKo: "시민 공화주의는 자치에 대한 적극적 참여를 강조해요.", emoji: "🏛️" },
    { word: "monarchism", meaning: "군주제, 왕정주의", meaningEn: "support for monarchical government", example: "Constitutional monarchism survives in numerous European democracies.", exampleKo: "입헌 군주제는 많은 유럽 민주주의 국가에 존속해요.", emoji: "👑" },
    { word: "theocracy", meaning: "신정정치", meaningEn: "government by religious authority", example: "Modern theocracy faces persistent challenges in pluralistic societies.", exampleKo: "현대 신정정치는 다원주의 사회에서 지속적인 도전에 직면해요.", emoji: "⛪" },
    { word: "kleptocracy", meaning: "도둑정치", meaningEn: "government by corrupt leaders for personal gain", example: "Kleptocratic regimes systematically extract wealth from state institutions.", exampleKo: "도둑정치 정권은 국가 기관에서 체계적으로 부를 추출해요.", emoji: "💼" },
    { word: "meritocracy", meaning: "능력주의", meaningEn: "system based on demonstrated ability", example: "Meritocracy claims face critique regarding underlying social conditions.", exampleKo: "능력주의 주장은 기저의 사회 조건에 관한 비판에 직면해요.", emoji: "🏆" },
    { word: "technocracy", meaning: "기술관료정치", meaningEn: "government by technical experts", example: "European technocracy generates ongoing democratic legitimacy concerns.", exampleKo: "유럽 기술관료정치는 지속적인 민주적 정당성 우려를 발생시켜요.", emoji: "🔧" },
    { word: "demagoguery", meaning: "선동정치", meaningEn: "political agitation through emotional appeals", example: "Demagoguery exploits popular fears rather than promoting reasoned discourse.", exampleKo: "선동정치는 합리적 담론 촉진보다 대중의 두려움을 이용해요.", emoji: "📢" },
    { word: "feudalism", meaning: "봉건제도", meaningEn: "medieval system of land-based hierarchy", example: "Feudalism organized medieval European political and economic life.", exampleKo: "봉건제도는 중세 유럽의 정치, 경제 생활을 조직했어요.", emoji: "🏰" },
    { word: "clientelism", meaning: "후견주의", meaningEn: "exchange of services for political support", example: "Clientelism undermines democratic accountability through targeted benefits.", exampleKo: "후견주의는 표적 혜택을 통해 민주적 책임성을 약화시켜요.", emoji: "🤝" },
    { word: "nepotism", meaning: "친족등용, 정실인사", meaningEn: "favoritism toward relatives", example: "Nepotism corrodes meritocratic institutions and public trust.", exampleKo: "친족등용은 능력주의적 기관과 공공 신뢰를 부식시켜요.", emoji: "👨‍👩‍👧" },
    { word: "oligarchic", meaning: "과두정치의", meaningEn: "ruled by few", example: "Oligarchic structures persist beneath nominally democratic institutions.", exampleKo: "과두정치 구조는 명목상 민주적 기관 아래에 지속돼요.", emoji: "🏛️" },
    { word: "polity", meaning: "정치체, 국가", meaningEn: "an organized political community", example: "Comparative analysis of polities reveals diverse institutional configurations.", exampleKo: "정치체의 비교 분석은 다양한 제도적 구성을 드러내요.", emoji: "🏛️" },
    { word: "leviathan", meaning: "리바이어던, 거대국가", meaningEn: "powerful entity, especially the state", example: "Hobbes's leviathan justifies absolute sovereignty for civil peace.", exampleKo: "홉스의 리바이어던은 시민 평화를 위한 절대 주권을 정당화해요.", emoji: "🐉" },
    { word: "sovereignty", meaning: "주권", meaningEn: "supreme authority within a territory", example: "Globalization complicates traditional conceptions of state sovereignty.", exampleKo: "세계화는 국가 주권의 전통적 개념을 복잡하게 만들어요.", emoji: "👑" },
    { word: "suzerainty", meaning: "종주권", meaningEn: "dominion of one state over another", example: "Imperial suzerainty preserved nominal independence while extracting tribute.", exampleKo: "제국적 종주권은 공물을 추출하면서 명목상 독립을 보존했어요.", emoji: "🏛️" },
    { word: "vassalage", meaning: "신하의지위, 가신제", meaningEn: "the position of being a vassal", example: "Medieval vassalage created complex hierarchies of mutual obligation.", exampleKo: "중세 가신제는 상호 의무의 복잡한 위계를 만들어냈어요.", emoji: "⚔️" },
    { word: "fiefdom", meaning: "영지, 관할영역", meaningEn: "personal domain or sphere of control", example: "Bureaucratic fiefdoms hindered organizational reform efforts.", exampleKo: "관료적 영지는 조직 개혁 노력을 방해했어요.", emoji: "🏰" },
    { word: "satrap", meaning: "지방총독, 권력자", meaningEn: "subordinate ruler with significant autonomy", example: "Provincial satraps wielded considerable de facto authority.", exampleKo: "지방 총독들은 상당한 사실상의 권위를 행사했어요.", emoji: "👤" },
    { word: "mandarin", meaning: "고급관료, 만다린", meaningEn: "powerful government official", example: "Treasury mandarins effectively shape economic policy across administrations.", exampleKo: "재무부 고급관료들은 행정부에 걸쳐 경제 정책을 효과적으로 형성해요.", emoji: "👔" },
    { word: "nomenklatura", meaning: "노멘클라투라, 특권관료층", meaningEn: "elite class in communist systems", example: "The nomenklatura system reserved privileged positions for party loyalists.", exampleKo: "노멘클라투라 체계는 당 충성파에게 특권적 직위를 유보했어요.", emoji: "📜" },
    { word: "proletariat", meaning: "프롤레타리아, 무산계급", meaningEn: "the working class", example: "Industrial proletariat conditions inspired nineteenth-century socialist movements.", exampleKo: "산업 프롤레타리아 조건은 19세기 사회주의 운동에 영감을 주었어요.", emoji: "👷" },
    { word: "diaspora", meaning: "디아스포라, 이산", meaningEn: "people dispersed from homeland", example: "Diaspora studies examine transnational cultural and political identities.", exampleKo: "디아스포라 연구는 초국가적 문화 및 정치 정체성을 검토해요.", emoji: "🌍" },
    { word: "migration", meaning: "이주, 이민", meaningEn: "movement from one region to another", example: "Climate-induced migration will increasingly challenge international cooperation.", exampleKo: "기후로 인한 이주는 점점 더 국제 협력에 도전할 거예요.", emoji: "✈️" },
    { word: "ethnocentrism", meaning: "자민족중심주의", meaningEn: "evaluating other cultures by one's own standards", example: "Ethnocentrism systematically distorts cross-cultural understanding.", exampleKo: "자민족중심주의는 문화간 이해를 체계적으로 왜곡해요.", emoji: "🌍" },
    { word: "irredentist", meaning: "민족통일주의자", meaningEn: "advocate of recovering lost territory", example: "Irredentist rhetoric can dangerously inflame ethnic tensions.", exampleKo: "민족통일주의 수사는 위험하게 민족적 긴장을 격화시킬 수 있어요.", emoji: "🚩" },
    { word: "jingoism", meaning: "국수주의, 호전적애국주의", meaningEn: "extreme patriotism with aggressive foreign policy", example: "Wartime jingoism overrode rational policy debate.", exampleKo: "전시 국수주의는 합리적 정책 논쟁을 압도했어요.", emoji: "⚔️" },
    { word: "irreverent", meaning: "불경한, 무례한", meaningEn: "showing lack of respect", example: "His irreverent commentary on sacred topics offended traditionalists.", exampleKo: "신성한 주제에 대한 그의 불경한 논평은 전통주의자들을 불쾌하게 했어요.", emoji: "😏" },
    { word: "schism", meaning: "분열, 분파", meaningEn: "a split or division", example: "The Great Schism permanently divided Eastern and Western Christianity.", exampleKo: "대분열은 동방과 서방 기독교를 영구히 분리했어요.", emoji: "✂️" },
    { word: "anathema", meaning: "저주, 파문", meaningEn: "something or someone detested; formal curse", example: "Censorship of academic inquiry is anathema to scholarly values.", exampleKo: "학문적 탐구의 검열은 학자적 가치에 저주스러운 것이에요.", emoji: "🚫" },
    { word: "excommunication", meaning: "파문", meaningEn: "exclusion from religious community", example: "Medieval excommunication carried severe political and social consequences.", exampleKo: "중세 파문은 심각한 정치적, 사회적 결과를 가져왔어요.", emoji: "⛪" },
    { word: "interdict", meaning: "성무금지령", meaningEn: "papal prohibition of religious services", example: "Papal interdict pressured medieval rulers through religious sanctions.", exampleKo: "교황 성무금지령은 종교적 제재를 통해 중세 통치자들을 압박했어요.", emoji: "🚫" },
    { word: "investiture", meaning: "서임, 임명", meaningEn: "the formal granting of office or rank", example: "The Investiture Controversy reshaped medieval church-state relations.", exampleKo: "서임권 분쟁은 중세 교회-국가 관계를 재편했어요.", emoji: "👑" },
    { word: "papacy", meaning: "교황권, 교황직", meaningEn: "the office of pope", example: "Renaissance papacy combined spiritual authority with temporal power.", exampleKo: "르네상스 교황권은 영적 권위와 세속 권력을 결합했어요.", emoji: "⛪" },
    { word: "patriarchate", meaning: "총대주교구, 총대주교직", meaningEn: "the office of patriarch", example: "The Ecumenical Patriarchate maintains primacy among Orthodox churches.", exampleKo: "에큐메니컬 총대주교구는 정교회 교회들 사이에서 수위를 유지해요.", emoji: "⛪" },
    { word: "episcopacy", meaning: "주교제", meaningEn: "church government by bishops", example: "Anglican episcopacy traces apostolic succession from early Christianity.", exampleKo: "성공회 주교제는 초기 기독교에서 사도적 계승을 추적해요.", emoji: "⛪" },
    { word: "ecumenism", meaning: "교회일치운동", meaningEn: "movement for Christian unity", example: "Twentieth-century ecumenism produced significant interdenominational dialogue.", exampleKo: "20세기 교회일치운동은 중요한 교파간 대화를 만들어냈어요.", emoji: "🤝" },
    { word: "counter-reformation", meaning: "반종교개혁", meaningEn: "Catholic response to Protestant Reformation", example: "The Counter-Reformation revitalized Catholic theology and institutions.", exampleKo: "반종교개혁은 가톨릭 신학과 제도를 활성화시켰어요.", emoji: "✝️" },
    { word: "iconoclasm", meaning: "성상파괴주의", meaningEn: "destruction of religious images", example: "Byzantine iconoclasm controversies divided eastern Christianity.", exampleKo: "비잔틴 성상파괴주의 논쟁은 동방 기독교를 분열시켰어요.", emoji: "🔨" },
    { word: "icon", meaning: "성상, 우상", meaningEn: "religious painted image", example: "Orthodox icons function theologically as windows to the divine.", exampleKo: "정교회 성상은 신학적으로 신성으로의 창문 역할을 해요.", emoji: "🖼️" },
    { word: "chiaroscuro", meaning: "명암법", meaningEn: "the contrast of light and shadow", example: "Caravaggio mastered chiaroscuro to achieve dramatic visual effects.", exampleKo: "카라바조는 극적인 시각적 효과를 달성하기 위해 명암법을 숙달했어요.", emoji: "🎨" },
    { word: "trompe-l'oeil", meaning: "트롱프뢰유 (눈속임그림)", meaningEn: "art creating optical illusion", example: "Baroque trompe-l'oeil ceiling paintings simulated infinite architectural space.", exampleKo: "바로크 트롱프뢰유 천장화는 무한한 건축 공간을 시뮬레이션했어요.", emoji: "👁️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
