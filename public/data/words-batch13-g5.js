// Batch 13 — G5 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "stare", meaning: "선례구속 (stare decisis)", meaningEn: "the principle of following legal precedent", example: "Common law stare decisis ensures legal continuity over generations.", exampleKo: "보통법 선례구속은 세대에 걸친 법적 연속성을 보장해요.", emoji: "📜" },
    { word: "tort", meaning: "불법행위", meaningEn: "civil wrong causing harm to others", example: "Tort law provides compensation for negligently caused injuries.", exampleKo: "불법행위법은 과실로 발생한 상해에 대한 보상을 제공해요.", emoji: "⚖️" },
    { word: "delict", meaning: "불법행위, 위법행위", meaningEn: "wrongful act giving rise to civil liability", example: "Roman law concepts of delict influenced civilian legal systems.", exampleKo: "로마법의 위법행위 개념은 대륙법 체계에 영향을 미쳤어요.", emoji: "📜" },
    { word: "mens", meaning: "범의 (mens rea)", meaningEn: "the criminal mental state", example: "Mens rea requirements distinguish accidents from criminal acts.", exampleKo: "범의 요건은 사고를 범죄 행위와 구별해요.", emoji: "🧠" },
    { word: "actus", meaning: "범죄행위 (actus reus)", meaningEn: "the criminal physical act", example: "Both actus reus and mens rea typically constitute criminal offenses.", exampleKo: "범죄행위와 범의 모두 일반적으로 형사 범죄를 구성해요.", emoji: "📝" },
    { word: "laches", meaning: "권리불행사, 해태", meaningEn: "unreasonable delay defeating a legal claim", example: "Laches doctrine requires timely assertion of legal rights.", exampleKo: "해태 법리는 법적 권리의 적시 행사를 요구해요.", emoji: "⏰" },
    { word: "strict", meaning: "엄격책임 (strict liability)", meaningEn: "liability without fault requirement", example: "Strict liability applies to inherently dangerous activities.", exampleKo: "엄격책임은 본질적으로 위험한 활동에 적용돼요.", emoji: "📋" },
    { word: "subrogation", meaning: "대위, 대위변제", meaningEn: "substitution of one party for another in rights", example: "Insurance subrogation enables insurers to pursue third-party recovery.", exampleKo: "보험 대위는 보험사가 제3자 회수를 추구할 수 있게 해요.", emoji: "🔄" },
    { word: "rescission", meaning: "취소, 해제", meaningEn: "cancellation of a contract", example: "Material misrepresentation may justify contract rescission.", exampleKo: "중대한 허위 진술은 계약 취소를 정당화할 수 있어요.", emoji: "❌" },
    { word: "novation", meaning: "경개, 갱개", meaningEn: "substitution of a new contract for an old one", example: "Novation requires consent of all original contracting parties.", exampleKo: "경개는 모든 원래 계약 당사자의 동의를 필요로 해요.", emoji: "🔄" },
    { word: "consideration", meaning: "약인, 대가", meaningEn: "value exchanged in contract formation", example: "Adequate consideration distinguishes contracts from gratuitous promises.", exampleKo: "적절한 약인은 계약을 무상 약속과 구별해요.", emoji: "💱" },
    { word: "easement", meaning: "지역권, 통행권", meaningEn: "right to use another's land", example: "Easements ensure access to landlocked properties.", exampleKo: "지역권은 맹지에 대한 접근을 보장해요.", emoji: "🚪" },
    { word: "lien", meaning: "유치권, 선취특권", meaningEn: "right to keep property until debt payment", example: "Mechanics' liens protect contractor payment claims.", exampleKo: "수공업자 유치권은 도급인의 지급 청구를 보호해요.", emoji: "🔒" },
    { word: "encumbrance", meaning: "저당, 부담", meaningEn: "claim or burden on property", example: "Title searches identify existing encumbrances on real estate.", exampleKo: "권원 조사는 부동산의 기존 부담을 식별해요.", emoji: "📋" },
    { word: "fee", meaning: "토지소유권 (fee simple)", meaningEn: "absolute ownership of land", example: "Fee simple title represents the most complete property ownership.", exampleKo: "단순 부동산권은 가장 완전한 재산 소유를 나타내요.", emoji: "🏠" },
    { word: "leasehold", meaning: "임차권, 차지권", meaningEn: "right of possession through a lease", example: "Leasehold interests in commercial property may be subleased.", exampleKo: "상업용 부동산의 임차권은 전대차될 수 있어요.", emoji: "🏢" },
    { word: "trustee", meaning: "수탁자", meaningEn: "person managing property for another", example: "Trustees must exercise reasonable prudence in investment decisions.", exampleKo: "수탁자는 투자 결정에서 합리적 신중함을 행사해야 해요.", emoji: "👤" },
    { word: "beneficiary", meaning: "수익자", meaningEn: "person who benefits from a trust", example: "Trust beneficiaries hold equitable rather than legal title.", exampleKo: "신탁 수익자는 법적 권원이 아닌 형평법상 권원을 보유해요.", emoji: "💰" },
    { word: "settlor", meaning: "위탁자, 신탁설정자", meaningEn: "person creating a trust", example: "The settlor's intent governs trust administration absent ambiguity.", exampleKo: "위탁자의 의도는 모호함이 없는 한 신탁 관리를 지배해요.", emoji: "✍️" },
    { word: "probate", meaning: "검인, 유언검증", meaningEn: "official validation of a will", example: "Probate proceedings verify will authenticity and authorize distribution.", exampleKo: "검인 절차는 유언의 진정성을 확인하고 분배를 승인해요.", emoji: "📋" },
    { word: "eminent", meaning: "공용수용 (eminent domain)", meaningEn: "government's power to take private property", example: "Eminent domain requires just compensation under constitutional law.", exampleKo: "공용수용은 헌법상 정당한 보상을 요구해요.", emoji: "🏛️" },
    { word: "expropriation", meaning: "수용, 강제수용", meaningEn: "government taking of private property", example: "International law constrains lawful expropriation of foreign investments.", exampleKo: "국제법은 외국 투자의 합법적 수용을 제한해요.", emoji: "📜" },
    { word: "privatization", meaning: "민영화", meaningEn: "transfer to private ownership", example: "Privatization waves transformed many post-communist economies.", exampleKo: "민영화 물결은 많은 탈공산주의 경제를 변화시켰어요.", emoji: "💼" },
    { word: "deregulation", meaning: "규제완화", meaningEn: "removal of governmental restrictions", example: "Financial deregulation preceded the 2008 economic crisis.", exampleKo: "금융 규제 완화는 2008년 경제 위기에 선행했어요.", emoji: "📉" },
    { word: "tariff", meaning: "관세", meaningEn: "tax on imported goods", example: "Tariff disputes can escalate into broader trade conflicts.", exampleKo: "관세 분쟁은 더 광범위한 무역 갈등으로 확대될 수 있어요.", emoji: "💰" },
    { word: "quota", meaning: "할당량, 쿼터", meaningEn: "fixed limit on imports or production", example: "Import quotas restrict foreign goods quantitatively.", exampleKo: "수입 할당량은 외국 상품을 양적으로 제한해요.", emoji: "📊" },
    { word: "embargo", meaning: "통상금지, 금수조치", meaningEn: "official ban on trade", example: "Comprehensive embargoes can severely impact targeted economies.", exampleKo: "포괄적 금수조치는 표적 경제에 심각한 영향을 줄 수 있어요.", emoji: "🚫" },
    { word: "sanction", meaning: "제재, 제재조치", meaningEn: "punitive economic or political measure", example: "Multilateral sanctions amplify individual countries' diplomatic pressure.", exampleKo: "다자간 제재는 개별 국가의 외교적 압력을 증폭시켜요.", emoji: "⚠️" },
    { word: "ratify", meaning: "비준하다, 인준하다", meaningEn: "formally approve a treaty or agreement", example: "Senate must ratify treaties with two-thirds majority.", exampleKo: "상원은 3분의 2 다수로 조약을 비준해야 해요.", emoji: "✅" },
    { word: "derogation", meaning: "예외규정, 적용제외", meaningEn: "official exemption from a regulation", example: "Emergency derogation from human rights treaties faces strict conditions.", exampleKo: "인권 조약으로부터의 비상 예외 규정은 엄격한 조건에 직면해요.", emoji: "⚠️" },
    { word: "comity", meaning: "예양, 국제예양", meaningEn: "courtesy between nations", example: "Judicial comity facilitates international legal cooperation.", exampleKo: "사법 예양은 국제 법률 협력을 촉진해요.", emoji: "🤝" },
    { word: "asylum", meaning: "망명, 비호", meaningEn: "protection granted to political refugees", example: "International refugee law establishes minimum asylum standards.", exampleKo: "국제 난민법은 최소한의 망명 기준을 확립해요.", emoji: "🏠" },
    { word: "refoulement", meaning: "강제송환, 르풀망", meaningEn: "forced return to persecution", example: "Non-refoulement constitutes a fundamental refugee law principle.", exampleKo: "강제송환금지는 근본적인 난민법 원칙을 구성해요.", emoji: "🚫" },
    { word: "stateless", meaning: "무국적의", meaningEn: "lacking citizenship in any country", example: "Stateless persons face severe practical and legal disadvantages.", exampleKo: "무국적자는 심각한 실제적, 법적 불이익에 직면해요.", emoji: "🌍" },
    { word: "expatriate", meaning: "국외거주자, 추방하다", meaningEn: "person living abroad; banish", example: "Expatriate professionals contribute substantially to global business.", exampleKo: "국외 거주 전문가들은 글로벌 비즈니스에 상당히 기여해요.", emoji: "✈️" },
    { word: "repatriate", meaning: "본국송환하다", meaningEn: "return to one's homeland", example: "Wartime repatriation programs facilitated displaced persons' return.", exampleKo: "전시 본국 송환 프로그램은 실향민의 귀환을 촉진했어요.", emoji: "🏠" },
    { word: "originalism", meaning: "원래주의 (헌법해석)", meaningEn: "interpreting constitutions by original meaning", example: "Originalism contests living constitutional interpretation methods.", exampleKo: "원래주의는 살아있는 헌법 해석 방법에 도전해요.", emoji: "📚" },
    { word: "discovery", meaning: "증거개시", meaningEn: "pretrial information exchange", example: "Modern litigation discovery encompasses electronic document review.", exampleKo: "현대 소송 증거개시는 전자 문서 검토를 포함해요.", emoji: "🔍" },
    { word: "interrogatory", meaning: "심문서, 질문서", meaningEn: "written questions in litigation", example: "Interrogatories supplement depositions in complex litigation.", exampleKo: "심문서는 복잡한 소송에서 증언녹취를 보완해요.", emoji: "❓" },
    { word: "indictment", meaning: "기소", meaningEn: "formal charge of crime", example: "Grand jury indictments initiate serious criminal proceedings.", exampleKo: "대배심 기소는 중대한 형사 절차를 시작해요.", emoji: "📋" },
    { word: "remand", meaning: "환송, 구류", meaningEn: "send back to lower court; pretrial detention", example: "Appellate courts remand cases requiring additional fact-finding.", exampleKo: "항소 법원은 추가 사실 확인이 필요한 사건을 환송해요.", emoji: "🔄" },
    { word: "interlocutory", meaning: "중간의, 중간판결의", meaningEn: "temporary or provisional", example: "Interlocutory appeals address issues before final judgment.", exampleKo: "중간 항소는 최종 판결 전 쟁점을 다뤄요.", emoji: "⏳" },
    { word: "mandamus", meaning: "직무이행명령", meaningEn: "writ commanding official duty performance", example: "Mandamus compels public officials to perform required duties.", exampleKo: "직무이행명령은 공직자가 요구되는 의무를 수행하도록 강제해요.", emoji: "📋" },
    { word: "certiorari", meaning: "상고허가", meaningEn: "writ of higher court review", example: "Supreme Court grants certiorari for cases of national importance.", exampleKo: "대법원은 국가적으로 중요한 사건에 대해 상고를 허가해요.", emoji: "📜" },
    { word: "plea bargain", meaning: "유죄협상", meaningEn: "negotiated guilty plea agreement", example: "Plea bargaining resolves the vast majority of criminal cases.", exampleKo: "유죄협상은 대부분의 형사 사건을 해결해요.", emoji: "🤝" },
    { word: "fruit", meaning: "독수독과 (fruit of the poisonous tree)", meaningEn: "evidence derived from illegal source", example: "Fruit of the poisonous tree doctrine excludes derivative illegal evidence.", exampleKo: "독수독과 법리는 파생된 불법 증거를 배제해요.", emoji: "🍎" },
    { word: "exclusionary", meaning: "배제의 (위법수집증거)", meaningEn: "excluding illegally obtained evidence", example: "The exclusionary rule deters unconstitutional police conduct.", exampleKo: "배제 법칙은 위헌적 경찰 행위를 억제해요.", emoji: "🚫" },
    { word: "miranda", meaning: "미란다 (권리고지)", meaningEn: "warning of rights upon arrest", example: "Miranda warnings inform suspects of their constitutional rights.", exampleKo: "미란다 고지는 용의자에게 헌법적 권리를 알려요.", emoji: "📢" },
    { word: "due process", meaning: "적법절차", meaningEn: "fair legal procedures and rights", example: "Due process requirements constrain governmental deprivation of liberty.", exampleKo: "적법절차 요건은 정부의 자유 박탈을 제한해요.", emoji: "⚖️" },
    { word: "equal protection", meaning: "평등한 보호", meaningEn: "constitutional guarantee of equal treatment", example: "Equal protection analysis applies heightened scrutiny to suspect classifications.", exampleKo: "평등한 보호 분석은 의심되는 분류에 강화된 심사를 적용해요.", emoji: "⚖️" },
    { word: "substantive", meaning: "실체적인", meaningEn: "concerning fundamental rights or duties", example: "Substantive due process protects fundamental unenumerated rights.", exampleKo: "실체적 적법절차는 근본적인 비열거 권리를 보호해요.", emoji: "📜" },
    { word: "procedural", meaning: "절차적인", meaningEn: "concerning legal procedures", example: "Procedural due process ensures fair adjudication of disputes.", exampleKo: "절차적 적법절차는 분쟁의 공정한 재결을 보장해요.", emoji: "📋" },
    { word: "scrutiny", meaning: "심사, 정밀조사", meaningEn: "thorough examination", example: "Strict scrutiny demands compelling government interests for restriction.", exampleKo: "엄격 심사는 제한을 위한 강력한 정부 이익을 요구해요.", emoji: "🔍" },
    { word: "comity", meaning: "예양, 양국우호", meaningEn: "respect between courts or jurisdictions", example: "Judicial comity facilitates resolution of cross-border disputes.", exampleKo: "사법 예양은 국경 간 분쟁 해결을 촉진해요.", emoji: "🤝" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
