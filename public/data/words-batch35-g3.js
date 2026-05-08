// Batch 35 — G3 추가 어휘 50개 (외국인학교 advanced 3학년 - 보충)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "achievement", meaning: "성취, 업적", meaningEn: "something done well", example: "Graduating is a great achievement.", exampleKo: "졸업은 큰 성취예요.", emoji: "🏆" },
    { word: "ambition", meaning: "야망, 포부", meaningEn: "a strong desire to succeed", example: "Her ambition is to become a doctor.", exampleKo: "그녀의 포부는 의사가 되는 거예요.", emoji: "🎯" },
    { word: "motivation", meaning: "동기, 동기부여", meaningEn: "the reason to do something", example: "His motivation is to help others.", exampleKo: "그의 동기는 남을 돕는 거예요.", emoji: "💪" },
    { word: "inspire", meaning: "영감을 주다", meaningEn: "to make someone want to do good", example: "Teachers inspire students.", exampleKo: "선생님이 학생들에게 영감을 줘요.", emoji: "✨" },
    { word: "imitate", meaning: "흉내 내다", meaningEn: "to copy what someone does", example: "Babies imitate their parents.", exampleKo: "아기들은 부모를 흉내 내요.", emoji: "👶" },
    { word: "model", meaning: "본보기, 모형", meaningEn: "an example or copy", example: "She is a role model for kids.", exampleKo: "그녀는 아이들의 본보기예요.", emoji: "⭐" },
    { word: "leader", meaning: "지도자", meaningEn: "a person who leads others", example: "A good leader listens to others.", exampleKo: "좋은 지도자는 다른 사람의 말을 들어요.", emoji: "👑" },
    { word: "follower", meaning: "추종자, 팔로워", meaningEn: "someone who follows", example: "Leaders need many followers.", exampleKo: "지도자에는 많은 추종자가 필요해요.", emoji: "👥" },
    { word: "teamwork", meaning: "팀워크, 협동", meaningEn: "working well together", example: "Soccer needs good teamwork.", exampleKo: "축구는 좋은 팀워크가 필요해요.", emoji: "⚽" },
    { word: "fairness", meaning: "공정함", meaningEn: "treating everyone equally", example: "Fairness is important in games.", exampleKo: "공정함은 게임에서 중요해요.", emoji: "⚖️" },
    { word: "reliable", meaning: "믿을 만한", meaningEn: "can be trusted to do well", example: "She is a reliable friend.", exampleKo: "그녀는 믿을 만한 친구예요.", emoji: "👍" },
    { word: "responsible", meaning: "책임감 있는", meaningEn: "trusted to do duties", example: "Be responsible with your homework.", exampleKo: "숙제에 책임감을 가지세요.", emoji: "📋" },
    { word: "consider", meaning: "고려하다", meaningEn: "to think carefully about", example: "Consider all options before deciding.", exampleKo: "결정 전에 모든 선택을 고려해요.", emoji: "🤔" },
    { word: "imagine", meaning: "상상하다", meaningEn: "to picture in your mind", example: "Imagine living in space.", exampleKo: "우주에 사는 걸 상상해 봐요.", emoji: "💭" },
    { word: "remember", meaning: "기억하다", meaningEn: "to keep in mind", example: "Remember your library card.", exampleKo: "도서관 카드를 기억해요.", emoji: "🧠" },
    { word: "appreciate", meaning: "감사하다, 진가를 알다", meaningEn: "to value something", example: "I appreciate your help.", exampleKo: "당신의 도움에 감사해요.", emoji: "🙏" },
    { word: "encourage", meaning: "격려하다", meaningEn: "to give support and hope", example: "Coaches encourage athletes.", exampleKo: "코치가 운동선수를 격려해요.", emoji: "💪" },
    { word: "challenge", meaning: "도전", meaningEn: "something difficult to do", example: "Math is a fun challenge.", exampleKo: "수학은 재미있는 도전이에요.", emoji: "🧩" },
    { word: "opportunity", meaning: "기회", meaningEn: "a good chance to do something", example: "Travel is a great opportunity.", exampleKo: "여행은 훌륭한 기회예요.", emoji: "🌟" },
    { word: "experience", meaning: "경험", meaningEn: "knowledge from doing things", example: "Travel gives many experiences.", exampleKo: "여행은 많은 경험을 줘요.", emoji: "🌍" },
    { word: "knowledge", meaning: "지식", meaningEn: "what you know", example: "Books fill us with knowledge.", exampleKo: "책은 우리를 지식으로 채워요.", emoji: "📚" },
    { word: "wisdom", meaning: "지혜", meaningEn: "good judgment from learning", example: "Wisdom comes with age.", exampleKo: "지혜는 나이와 함께 와요.", emoji: "🦉" },
    { word: "intelligence", meaning: "지능, 정보", meaningEn: "the ability to learn", example: "Dolphins have high intelligence.", exampleKo: "돌고래는 지능이 높아요.", emoji: "🐬" },
    { word: "talent", meaning: "재능", meaningEn: "a natural gift or skill", example: "She has a talent for art.", exampleKo: "그녀는 미술에 재능이 있어요.", emoji: "🎨" },
    { word: "ability", meaning: "능력", meaningEn: "what you can do", example: "Practice builds ability.", exampleKo: "연습이 능력을 키워요.", emoji: "💪" },
    { word: "skill", meaning: "기술, 기능", meaningEn: "the ability to do something well", example: "Cooking is a useful skill.", exampleKo: "요리는 유용한 기술이에요.", emoji: "👨‍🍳" },
    { word: "habit", meaning: "습관", meaningEn: "something you do often", example: "Reading is a great habit.", exampleKo: "독서는 좋은 습관이에요.", emoji: "📖" },
    { word: "routine", meaning: "일과", meaningEn: "what you do every day", example: "I have a morning routine.", exampleKo: "나는 아침 일과가 있어요.", emoji: "🔄" },
    { word: "discipline", meaning: "규율, 자기 통제", meaningEn: "self control to do what's right", example: "Discipline helps you achieve goals.", exampleKo: "자기 통제가 목표 달성을 도와요.", emoji: "🎯" },
    { word: "concentrate", meaning: "집중하다", meaningEn: "to focus the mind", example: "Concentrate on your homework.", exampleKo: "숙제에 집중해요.", emoji: "🧠" },
    { word: "focus", meaning: "집중하다, 초점", meaningEn: "to pay attention", example: "Focus on the lesson.", exampleKo: "수업에 집중해요.", emoji: "🎯" },
    { word: "attention", meaning: "주의, 관심", meaningEn: "looking and listening carefully", example: "Pay attention to the teacher.", exampleKo: "선생님께 주의를 기울여요.", emoji: "👂" },
    { word: "patience", meaning: "인내", meaningEn: "the ability to wait calmly", example: "Patience helps you learn.", exampleKo: "인내가 학습을 도와요.", emoji: "⏳" },
    { word: "persistence", meaning: "끈기", meaningEn: "not giving up", example: "Persistence wins races.", exampleKo: "끈기가 경주에서 이겨요.", emoji: "💪" },
    { word: "determination", meaning: "결심", meaningEn: "a strong wish to do something", example: "Her determination led to success.", exampleKo: "그녀의 결심이 성공으로 이끌었어요.", emoji: "✊" },
    { word: "confidence", meaning: "자신감", meaningEn: "belief in yourself", example: "Practice builds confidence.", exampleKo: "연습이 자신감을 쌓아요.", emoji: "💪" },
    { word: "humility", meaning: "겸손", meaningEn: "not being too proud", example: "Humility is a good quality.", exampleKo: "겸손은 좋은 품성이에요.", emoji: "🙏" },
    { word: "compassion", meaning: "연민, 동정", meaningEn: "feeling for others' pain", example: "Show compassion to those in need.", exampleKo: "어려운 사람들에게 연민을 보여요.", emoji: "❤️" },
    { word: "sympathy", meaning: "동정, 공감", meaningEn: "understanding others' feelings", example: "She showed sympathy when I was sad.", exampleKo: "내가 슬플 때 그녀가 공감을 보여줬어요.", emoji: "🤗" },
    { word: "empathy", meaning: "공감", meaningEn: "feeling what others feel", example: "Empathy helps friendships.", exampleKo: "공감이 우정을 도와요.", emoji: "💕" },
    { word: "generosity", meaning: "관대함, 너그러움", meaningEn: "willingness to give", example: "Her generosity is well known.", exampleKo: "그녀의 너그러움이 잘 알려져 있어요.", emoji: "🎁" },
    { word: "gratitude", meaning: "감사", meaningEn: "feeling thankful", example: "Show gratitude to your family.", exampleKo: "가족에게 감사를 표현해요.", emoji: "🙏" },
    { word: "loyalty", meaning: "충성", meaningEn: "always being supportive", example: "Loyalty is important in friendship.", exampleKo: "충성은 우정에 중요해요.", emoji: "🤝" },
    { word: "honesty", meaning: "정직", meaningEn: "telling the truth", example: "Honesty is the best policy.", exampleKo: "정직이 최선의 방책이에요.", emoji: "💯" },
    { word: "integrity", meaning: "성실, 진실성", meaningEn: "having strong morals", example: "She has great integrity.", exampleKo: "그녀는 큰 진실성을 가졌어요.", emoji: "⭐" },
    { word: "tolerance", meaning: "관용", meaningEn: "accepting differences", example: "We need tolerance for others.", exampleKo: "우리는 남에 대한 관용이 필요해요.", emoji: "🤝" },
    { word: "acceptance", meaning: "수용", meaningEn: "agreeing to take", example: "Acceptance brings peace.", exampleKo: "수용이 평화를 가져와요.", emoji: "✅" },
    { word: "forgiveness", meaning: "용서", meaningEn: "letting go of anger", example: "Forgiveness frees the heart.", exampleKo: "용서가 마음을 자유롭게 해요.", emoji: "🕊️" },
    { word: "harmony", meaning: "조화", meaningEn: "things being agreeable together", example: "We live in harmony.", exampleKo: "우리는 조화롭게 살아요.", emoji: "☯️" },
    { word: "peace", meaning: "평화", meaningEn: "calm without fighting", example: "Everyone wants peace.", exampleKo: "모두가 평화를 원해요.", emoji: "☮️" }
  ];
  const seen = new Set(VOCABULARY.G3.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G3.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
