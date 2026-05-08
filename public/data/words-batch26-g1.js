// Batch 26 — G1 추가 어휘 50개 (외국인학교 advanced 1학년 수준)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "explain", meaning: "설명하다", meaningEn: "to make something clear", example: "Can you explain how this works?", exampleKo: "이게 어떻게 작동하는지 설명해 줄래요?", emoji: "💡" },
    { word: "compare", meaning: "비교하다", meaningEn: "to look at two things and see how they differ", example: "Let's compare these two pictures.", exampleKo: "이 두 그림을 비교해 봐요.", emoji: "⚖️" },
    { word: "guess", meaning: "추측하다", meaningEn: "to give an answer without being sure", example: "Guess what number I'm thinking of.", exampleKo: "내가 생각하는 숫자를 맞춰 봐요.", emoji: "🤔" },
    { word: "wonder", meaning: "궁금해하다", meaningEn: "to think about something curiously", example: "I wonder why the sky is blue.", exampleKo: "하늘이 왜 파란지 궁금해요.", emoji: "❓" },
    { word: "notice", meaning: "알아차리다", meaningEn: "to see or become aware of something", example: "Did you notice the new sign?", exampleKo: "새 간판을 봤어요?", emoji: "👀" },
    { word: "remember", meaning: "기억하다", meaningEn: "to keep something in your mind", example: "I remember my first day at school.", exampleKo: "학교 첫날을 기억해요.", emoji: "🧠" },
    { word: "forget", meaning: "잊다", meaningEn: "to not remember something", example: "Don't forget your lunch box.", exampleKo: "도시락 통 잊지 마요.", emoji: "🙈" },
    { word: "promise", meaning: "약속하다", meaningEn: "to say you will do something", example: "I promise to keep my room clean.", exampleKo: "방을 깨끗이 하겠다고 약속해요.", emoji: "🤞" },
    { word: "share", meaning: "함께 쓰다, 나누다", meaningEn: "to give part of something to others", example: "It's good to share your toys.", exampleKo: "장난감을 함께 쓰는 건 좋아요.", emoji: "🤝" },
    { word: "borrow", meaning: "빌리다", meaningEn: "to use something that belongs to someone else", example: "Can I borrow your pencil?", exampleKo: "연필을 빌려도 돼요?", emoji: "✏️" },
    { word: "return", meaning: "돌려주다, 돌아오다", meaningEn: "to give back or come back", example: "Please return the book tomorrow.", exampleKo: "내일 책을 돌려주세요.", emoji: "↩️" },
    { word: "follow", meaning: "따라가다, 따르다", meaningEn: "to go after someone or do as told", example: "Follow the rules in class.", exampleKo: "수업에서 규칙을 따르세요.", emoji: "👣" },
    { word: "lead", meaning: "이끌다, 안내하다", meaningEn: "to show the way", example: "I will lead you to the office.", exampleKo: "사무실로 안내해 드릴게요.", emoji: "🚶" },
    { word: "build", meaning: "만들다, 짓다", meaningEn: "to make by putting parts together", example: "We build a sandcastle at the beach.", exampleKo: "바닷가에서 모래성을 만들어요.", emoji: "🏗️" },
    { word: "fix", meaning: "고치다", meaningEn: "to repair something broken", example: "Dad will fix my bike.", exampleKo: "아빠가 내 자전거를 고쳐 줘요.", emoji: "🔧" },
    { word: "save", meaning: "구하다, 저축하다", meaningEn: "to keep safe or set aside", example: "Save your money for a new toy.", exampleKo: "새 장난감을 위해 돈을 모아요.", emoji: "💰" },
    { word: "lose", meaning: "잃다, 지다", meaningEn: "to no longer have something", example: "Don't lose your hat.", exampleKo: "모자를 잃어버리지 마요.", emoji: "❌" },
    { word: "find", meaning: "찾다", meaningEn: "to discover something", example: "I can't find my homework.", exampleKo: "숙제를 못 찾겠어요.", emoji: "🔎" },
    { word: "carry", meaning: "들고 다니다, 옮기다", meaningEn: "to hold while moving", example: "Help me carry these books.", exampleKo: "이 책들 옮기는 걸 도와주세요.", emoji: "📚" },
    { word: "pull", meaning: "당기다", meaningEn: "to move toward yourself", example: "Pull the door to open it.", exampleKo: "문을 당겨서 열어요.", emoji: "🚪" },
    { word: "push", meaning: "밀다", meaningEn: "to move away from yourself", example: "Push the swing for your sister.", exampleKo: "여동생을 위해 그네를 밀어줘요.", emoji: "👋" },
    { word: "throw", meaning: "던지다", meaningEn: "to send something through the air", example: "Throw the ball to me.", exampleKo: "공을 나에게 던져 줘요.", emoji: "⚾" },
    { word: "kick", meaning: "차다", meaningEn: "to hit with your foot", example: "Kick the soccer ball into the net.", exampleKo: "축구공을 골대로 차요.", emoji: "⚽" },
    { word: "climb", meaning: "오르다", meaningEn: "to go up something", example: "We climb up the hill.", exampleKo: "우리는 언덕을 올라가요.", emoji: "🧗" },
    { word: "dig", meaning: "파다", meaningEn: "to make a hole in the ground", example: "The dog likes to dig in the yard.", exampleKo: "강아지가 마당에서 땅 파는 걸 좋아해요.", emoji: "🐕" },
    { word: "plant", meaning: "심다", meaningEn: "to put seeds in the ground", example: "We plant flowers in spring.", exampleKo: "봄에 꽃을 심어요.", emoji: "🌱" },
    { word: "water", meaning: "물을 주다", meaningEn: "to give water to plants", example: "Water the plants every day.", exampleKo: "매일 식물에 물을 줘요.", emoji: "💧" },
    { word: "feed", meaning: "먹이를 주다", meaningEn: "to give food to someone or something", example: "Feed the cat in the morning.", exampleKo: "아침에 고양이에게 먹이를 줘요.", emoji: "🐱" },
    { word: "wash", meaning: "씻다", meaningEn: "to clean with water", example: "Wash your hands before eating.", exampleKo: "먹기 전에 손을 씻어요.", emoji: "🧼" },
    { word: "brush", meaning: "솔질하다, 빗다", meaningEn: "to use a brush on something", example: "Brush your teeth twice a day.", exampleKo: "하루에 두 번 양치질해요.", emoji: "🪥" },
    { word: "comb", meaning: "빗으로 빗다", meaningEn: "to use a comb on hair", example: "Comb your hair before school.", exampleKo: "학교 가기 전에 머리를 빗어요.", emoji: "💇" },
    { word: "tie", meaning: "묶다, 매다", meaningEn: "to fasten with string or laces", example: "Can you tie your shoes?", exampleKo: "신발 끈을 묶을 수 있어요?", emoji: "👟" },
    { word: "untie", meaning: "풀다", meaningEn: "to loosen or undo a knot", example: "Untie the ribbon carefully.", exampleKo: "리본을 조심스럽게 풀어요.", emoji: "🎀" },
    { word: "open", meaning: "열다", meaningEn: "to make not closed", example: "Open the window for fresh air.", exampleKo: "신선한 공기를 위해 창문을 열어요.", emoji: "🪟" },
    { word: "close", meaning: "닫다", meaningEn: "to make not open", example: "Close the door behind you.", exampleKo: "들어오면서 문을 닫아요.", emoji: "🚪" },
    { word: "turn", meaning: "돌다, 켜다", meaningEn: "to move in a circle or change direction", example: "Turn the page slowly.", exampleKo: "페이지를 천천히 넘겨요.", emoji: "🔄" },
    { word: "stop", meaning: "멈추다", meaningEn: "to not move anymore", example: "Stop at the red light.", exampleKo: "빨간불에 멈춰요.", emoji: "🛑" },
    { word: "wait", meaning: "기다리다", meaningEn: "to stay until something happens", example: "Wait for your turn.", exampleKo: "차례를 기다리세요.", emoji: "⏳" },
    { word: "hurry", meaning: "서두르다", meaningEn: "to move quickly", example: "Hurry, the bus is here!", exampleKo: "서둘러요, 버스가 왔어요!", emoji: "🏃" },
    { word: "begin", meaning: "시작하다", meaningEn: "to start doing something", example: "Class will begin in five minutes.", exampleKo: "수업이 5분 후에 시작해요.", emoji: "▶️" },
    { word: "finish", meaning: "끝내다", meaningEn: "to complete something", example: "Finish your homework before dinner.", exampleKo: "저녁 전에 숙제를 끝내요.", emoji: "🏁" },
    { word: "tired", meaning: "피곤한", meaningEn: "needing rest or sleep", example: "I am tired after playing soccer.", exampleKo: "축구하고 나서 피곤해요.", emoji: "😴" },
    { word: "thirsty", meaning: "목마른", meaningEn: "wanting to drink something", example: "I'm thirsty after running.", exampleKo: "달리고 나서 목말라요.", emoji: "🥤" },
    { word: "hungry", meaning: "배고픈", meaningEn: "wanting to eat", example: "I'm hungry; let's eat lunch.", exampleKo: "배고파요. 점심 먹어요.", emoji: "🍽️" },
    { word: "sleepy", meaning: "졸린", meaningEn: "ready to fall asleep", example: "I feel sleepy at bedtime.", exampleKo: "잘 시간이 되면 졸려요.", emoji: "💤" },
    { word: "sick", meaning: "아픈", meaningEn: "not feeling well", example: "She is sick and stayed home.", exampleKo: "그녀는 아파서 집에 있어요.", emoji: "🤒" },
    { word: "well", meaning: "건강한", meaningEn: "in good health", example: "I feel well today.", exampleKo: "오늘은 건강해요.", emoji: "😊" },
    { word: "warm", meaning: "따뜻한", meaningEn: "having a little heat", example: "The soup is warm and tasty.", exampleKo: "수프가 따뜻하고 맛있어요.", emoji: "♨️" },
    { word: "cool", meaning: "시원한, 멋진", meaningEn: "a little cold or nice", example: "The water in the pool is cool.", exampleKo: "수영장 물이 시원해요.", emoji: "🏊" },
    { word: "hot", meaning: "뜨거운, 더운", meaningEn: "very warm", example: "Be careful, the tea is hot.", exampleKo: "조심해요, 차가 뜨거워요.", emoji: "🔥" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
