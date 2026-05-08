// Batch 8 — G3 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "abridge", meaning: "축약하다", meaningEn: "to shorten a text or speech without losing its meaning", example: "The editor decided to abridge the lengthy novel for younger readers.", exampleKo: "편집자는 어린 독자들을 위해 긴 소설을 축약하기로 결정했어요.", emoji: "📖" },
    { word: "accolade", meaning: "찬사", meaningEn: "an award or expression of praise", example: "The young scientist received numerous accolades for her groundbreaking research.", exampleKo: "젊은 과학자는 획기적인 연구로 수많은 찬사를 받았어요.", emoji: "🏆" },
    { word: "acquiesce", meaning: "묵인하다", meaningEn: "to accept something reluctantly but without protest", example: "The committee finally acquiesced to the demands of the dissenting members.", exampleKo: "위원회는 마침내 반대 위원들의 요구를 묵인했어요.", emoji: "🤐" },
    { word: "acumen", meaning: "통찰력", meaningEn: "the ability to make good judgments and quick decisions", example: "Her business acumen allowed the startup to thrive in a competitive market.", exampleKo: "그녀의 사업 통찰력 덕분에 스타트업은 경쟁 시장에서 번창할 수 있었어요.", emoji: "🧠" },
    { word: "anathema", meaning: "혐오 대상", meaningEn: "something or someone intensely disliked", example: "Censorship is anathema to scholars who value freedom of inquiry.", exampleKo: "검열은 탐구의 자유를 중시하는 학자들에게 혐오 대상이에요.", emoji: "🚫" },
    { word: "apocalyptic", meaning: "종말론적인", meaningEn: "describing or prophesying complete devastation", example: "The novel paints an apocalyptic vision of a world ravaged by climate change.", exampleKo: "그 소설은 기후 변화로 황폐화된 세계의 종말론적 비전을 그려요.", emoji: "☄️" },
    { word: "apostrophe", meaning: "돈호법", meaningEn: "a literary device where a speaker addresses an absent entity", example: "The poet's use of apostrophe addresses death as if it were a person.", exampleKo: "시인은 돈호법을 사용하여 죽음을 마치 사람처럼 부르고 있어요.", emoji: "💬" },
    { word: "anesthetize", meaning: "마비시키다", meaningEn: "to deprive of feeling or sensitivity", example: "Constant exposure to violence can anesthetize viewers to its real impact.", exampleKo: "폭력에 끊임없이 노출되면 시청자가 그 실제 영향에 마비될 수 있어요.", emoji: "💉" },
    { word: "authoritarian", meaning: "권위주의적인", meaningEn: "favoring strict obedience over personal freedom", example: "Authoritarian regimes typically suppress dissenting voices and free press.", exampleKo: "권위주의 정권은 일반적으로 반대 목소리와 자유 언론을 억압해요.", emoji: "👮" },
    { word: "avant-garde", meaning: "전위적인", meaningEn: "innovative and ahead of its time", example: "The avant-garde poetry of the 1920s broke conventional rules of structure.", exampleKo: "1920년대의 전위 시는 구조의 관습적 규칙을 깨뜨렸어요.", emoji: "🎨" },
    { word: "balk", meaning: "주저하다", meaningEn: "to hesitate or refuse to proceed", example: "The senator balked at supporting legislation that contradicted his principles.", exampleKo: "상원의원은 자신의 원칙에 모순되는 법안을 지지하기를 주저했어요.", emoji: "🚧" },
    { word: "banality", meaning: "진부함", meaningEn: "the condition of being commonplace or unoriginal", example: "Hannah Arendt wrote about the banality of evil in everyday institutional life.", exampleKo: "한나 아렌트는 일상적 제도 생활에서의 악의 진부함에 대해 썼어요.", emoji: "😐" },
    { word: "beguile", meaning: "현혹하다", meaningEn: "to charm or deceive in a captivating way", example: "The propaganda was designed to beguile citizens into supporting the war.", exampleKo: "그 선전은 시민들이 전쟁을 지지하도록 현혹하기 위해 고안되었어요.", emoji: "✨" },
    { word: "bemoan", meaning: "한탄하다", meaningEn: "to express discontent or sorrow over something", example: "Critics bemoan the decline of literacy in the digital age.", exampleKo: "비평가들은 디지털 시대의 문해력 쇠퇴를 한탄해요.", emoji: "😢" },
    { word: "benign", meaning: "양호한", meaningEn: "gentle, kindly, or harmless", example: "The seemingly benign policy had unintended consequences for marginalized communities.", exampleKo: "겉보기에 양호한 그 정책은 소외된 공동체에 의도하지 않은 결과를 초래했어요.", emoji: "🕊️" },
    { word: "bicameral", meaning: "양원제의", meaningEn: "having two legislative chambers", example: "The United States Congress is a bicameral legislature with the House and Senate.", exampleKo: "미국 의회는 하원과 상원으로 구성된 양원제 입법부예요.", emoji: "🏛️" },
    { word: "biopic", meaning: "전기 영화", meaningEn: "a biographical film", example: "The biopic offered an intimate portrait of the philosopher's intellectual development.", exampleKo: "그 전기 영화는 철학자의 지적 발전에 대한 친밀한 초상을 제공했어요.", emoji: "🎬" },
    { word: "broach", meaning: "꺼내다", meaningEn: "to bring up a subject for discussion", example: "The journalist hesitated to broach the controversial topic with the politician.", exampleKo: "기자는 정치인에게 그 논란이 되는 주제를 꺼내기를 망설였어요.", emoji: "💭" },
    { word: "cacophonous", meaning: "불협화음의", meaningEn: "characterized by harsh, jarring sounds", example: "The cacophonous debate reflected deep divisions within the political party.", exampleKo: "불협화음의 논쟁은 정당 내의 깊은 분열을 반영했어요.", emoji: "📣" },
    { word: "canard", meaning: "헛소문", meaningEn: "an unfounded rumor or story", example: "The persistent canard about the senator was finally debunked by investigative journalists.", exampleKo: "상원의원에 관한 끈질긴 헛소문은 마침내 탐사 기자들에 의해 반박되었어요.", emoji: "🦆" },
    { word: "canon", meaning: "정전", meaningEn: "an established collection of authoritative works", example: "Feminist scholars challenged the traditional Western literary canon in the 1970s.", exampleKo: "페미니스트 학자들은 1970년대에 전통적인 서구 문학 정전에 도전했어요.", emoji: "📚" },
    { word: "caprice", meaning: "변덕", meaningEn: "a sudden change of mood or behavior", example: "Markets sometimes seem driven more by caprice than rational calculation.", exampleKo: "시장은 때때로 합리적 계산보다 변덕에 의해 움직이는 것처럼 보여요.", emoji: "🎭" },
    { word: "castigate", meaning: "혹평하다", meaningEn: "to reprimand someone severely", example: "The newspaper editorial castigated officials for their failure to act decisively.", exampleKo: "신문 사설은 결단력 있게 행동하지 못한 관리들을 혹평했어요.", emoji: "💢" },
    { word: "catalyze", meaning: "촉진하다", meaningEn: "to cause or accelerate a reaction or event", example: "The publication of her book catalyzed a national conversation about inequality.", exampleKo: "그녀의 책 출판은 불평등에 관한 전국적 대화를 촉진했어요.", emoji: "⚡" },
    { word: "categorical", meaning: "단정적인", meaningEn: "unambiguously explicit and direct", example: "The witness offered a categorical denial of the accusations against him.", exampleKo: "증인은 그에 대한 비난을 단정적으로 부인했어요.", emoji: "❗" },
    { word: "censorious", meaning: "비판적인", meaningEn: "severely critical of others", example: "Her censorious tone alienated colleagues during academic discussions.", exampleKo: "그녀의 비판적인 어조는 학문적 토론에서 동료들을 소외시켰어요.", emoji: "🙅" },
    { word: "centripetal", meaning: "구심성의", meaningEn: "moving toward a center or axis", example: "Nationalism can act as a centripetal force unifying diverse populations.", exampleKo: "민족주의는 다양한 인구를 통합하는 구심성 힘으로 작용할 수 있어요.", emoji: "🎯" },
    { word: "cessation", meaning: "중단", meaningEn: "the act of bringing or coming to an end", example: "Diplomats negotiated a cessation of hostilities between the two warring nations.", exampleKo: "외교관들은 교전 중인 두 국가 사이의 적대 행위 중단을 협상했어요.", emoji: "✋" },
    { word: "checkered", meaning: "다양한 변화가 많은", meaningEn: "marked by ups and downs or varied fortunes", example: "His checkered career included both notable successes and significant failures.", exampleKo: "그의 다양한 변화가 많은 경력에는 주목할 만한 성공과 상당한 실패가 모두 포함되었어요.", emoji: "🔲" },
    { word: "circumscribe", meaning: "제한하다", meaningEn: "to restrict within limits", example: "Authoritarian governments often circumscribe the freedoms of academic researchers.", exampleKo: "권위주의 정부는 종종 학술 연구자들의 자유를 제한해요.", emoji: "🔒" },
    { word: "cloying", meaning: "물리는", meaningEn: "excessively sweet or sentimental", example: "The novel's cloying sentimentality undermined its more serious thematic concerns.", exampleKo: "그 소설의 물리는 감상주의는 더 진지한 주제적 관심사를 약화시켰어요.", emoji: "🍭" },
    { word: "clairvoyant", meaning: "예지력 있는", meaningEn: "having supernatural insight or foresight", example: "Her seemingly clairvoyant predictions about the economy proved remarkably accurate.", exampleKo: "경제에 대한 그녀의 예지력 있어 보이는 예측은 놀랍도록 정확한 것으로 입증되었어요.", emoji: "🔮" },
    { word: "cleric", meaning: "성직자", meaningEn: "a member of the clergy", example: "The cleric's sermons addressed both spiritual and social justice concerns.", exampleKo: "그 성직자의 설교는 영적인 문제와 사회 정의 문제를 모두 다루었어요.", emoji: "⛪" },
    { word: "cliche", meaning: "진부한 표현", meaningEn: "an overused phrase or idea", example: "The essay relied too heavily on cliches rather than fresh analysis.", exampleKo: "그 에세이는 신선한 분석보다 진부한 표현에 너무 많이 의존했어요.", emoji: "💤" },
    { word: "coalescence", meaning: "융합", meaningEn: "the process of coming together to form one mass", example: "The coalescence of various reform movements produced a powerful political coalition.", exampleKo: "다양한 개혁 운동의 융합은 강력한 정치 연합을 만들어냈어요.", emoji: "🔗" },
    { word: "coeval", meaning: "동시대의", meaningEn: "having the same age or duration", example: "The poet was coeval with the leading philosophers of the Romantic era.", exampleKo: "그 시인은 낭만주의 시대의 주요 철학자들과 동시대인이었어요.", emoji: "📅" },
    { word: "coherence", meaning: "일관성", meaningEn: "the quality of being logical and consistent", example: "Her argument's coherence made it especially persuasive to the academic audience.", exampleKo: "그녀의 주장의 일관성은 학문적 청중에게 특히 설득력 있게 만들었어요.", emoji: "🧵" },
    { word: "commune", meaning: "교감하다", meaningEn: "to share thoughts or feelings deeply", example: "The poet sought to commune with nature in her secluded retreat.", exampleKo: "시인은 외딴 은신처에서 자연과 교감하려고 했어요.", emoji: "🌿" },
    { word: "condone", meaning: "용인하다", meaningEn: "to accept or allow behavior considered wrong", example: "The international community refused to condone the regime's human rights violations.", exampleKo: "국제 사회는 그 정권의 인권 침해를 용인하기를 거부했어요.", emoji: "🤐" },
    { word: "conflate", meaning: "융합하다", meaningEn: "to combine two or more concepts into one", example: "Critics argue that the author conflates correlation with causation throughout the book.", exampleKo: "비평가들은 저자가 책 전체에서 상관관계와 인과관계를 융합한다고 주장해요.", emoji: "🔗" },
    { word: "conjure", meaning: "떠올리게 하다", meaningEn: "to evoke or call up in the mind", example: "The novelist's vivid prose conjures images of nineteenth-century industrial cities.", exampleKo: "소설가의 생생한 산문은 19세기 산업 도시의 이미지를 떠올리게 해요.", emoji: "🪄" },
    { word: "consign", meaning: "맡기다", meaningEn: "to deliver or commit to a particular fate", example: "History should not consign the contributions of marginalized voices to oblivion.", exampleKo: "역사는 소외된 목소리의 기여를 망각에 맡겨서는 안 돼요.", emoji: "📦" },
    { word: "construal", meaning: "해석", meaningEn: "the way something is interpreted or understood", example: "Different construals of the constitution lead to opposing legal conclusions.", exampleKo: "헌법에 대한 다른 해석은 상반된 법적 결론을 낳아요.", emoji: "🔍" },
    { word: "contiguity", meaning: "근접성", meaningEn: "the state of being adjacent or in contact", example: "Geographic contiguity facilitated cultural exchange between the neighboring nations.", exampleKo: "지리적 근접성은 이웃 국가 간의 문화 교류를 촉진했어요.", emoji: "🗺️" },
    { word: "contrition", meaning: "참회", meaningEn: "deep regret for wrongdoing", example: "His public expression of contrition seemed insufficient to many critics.", exampleKo: "그의 공개적인 참회 표현은 많은 비평가들에게 불충분해 보였어요.", emoji: "🙇" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
