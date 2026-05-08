// Batch 15 — G1 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    // Foods
    { word: "bagel", meaning: "베이글", meaningEn: "a round bread with a hole", example: "I eat a bagel for breakfast.", exampleKo: "나는 아침에 베이글을 먹어요.", emoji: "🥯" },
    { word: "croissant", meaning: "크루아상", meaningEn: "a curved buttery bread", example: "Croissants are flaky.", exampleKo: "크루아상은 바삭해요.", emoji: "🥐" },
    { word: "pretzel", meaning: "프레첼", meaningEn: "a twisted bread snack", example: "Pretzels taste salty.", exampleKo: "프레첼은 짭짤해요.", emoji: "🥨" },
    { word: "burrito", meaning: "부리토", meaningEn: "a Mexican wrap", example: "Burritos have rice inside.", exampleKo: "부리토 안에 밥이 있어요.", emoji: "🌯" },
    { word: "kebab", meaning: "케밥", meaningEn: "meat on a stick", example: "Kebabs cook on a grill.", exampleKo: "케밥은 그릴에서 익혀요.", emoji: "🍢" },
    { word: "ramen", meaning: "라면", meaningEn: "Japanese noodle soup", example: "Hot ramen is yummy.", exampleKo: "뜨거운 라면이 맛있어요.", emoji: "🍜" },
    { word: "kimchi", meaning: "김치", meaningEn: "spicy Korean vegetable", example: "Kimchi is spicy and red.", exampleKo: "김치는 맵고 빨개요.", emoji: "🥬" },
    { word: "burger", meaning: "버거", meaningEn: "a meat sandwich", example: "I want a burger.", exampleKo: "나는 버거를 먹고 싶어요.", emoji: "🍔" },
    { word: "fries", meaning: "감자튀김", meaningEn: "fried potato sticks", example: "Fries are crispy and salty.", exampleKo: "감자튀김은 바삭하고 짜요.", emoji: "🍟" },
    { word: "pancake", meaning: "팬케이크", meaningEn: "a flat round breakfast cake", example: "I eat pancakes with syrup.", exampleKo: "나는 시럽과 팬케이크를 먹어요.", emoji: "🥞" },

    // Drinks
    { word: "lemonade", meaning: "레모네이드", meaningEn: "a sweet lemon drink", example: "Lemonade is cold and sweet.", exampleKo: "레모네이드는 시원하고 달아요.", emoji: "🥤" },
    { word: "soda", meaning: "탄산음료", meaningEn: "a fizzy drink", example: "I drink orange soda.", exampleKo: "나는 오렌지 탄산음료를 마셔요.", emoji: "🥤" },
    { word: "smoothie", meaning: "스무디", meaningEn: "a thick fruit drink", example: "Smoothies have many fruits.", exampleKo: "스무디에는 과일이 많아요.", emoji: "🥤" },
    { word: "milkshake", meaning: "밀크셰이크", meaningEn: "a cold milk drink", example: "I love strawberry milkshake.", exampleKo: "나는 딸기 밀크셰이크를 좋아해요.", emoji: "🥤" },
    { word: "cocoa", meaning: "코코아", meaningEn: "a hot chocolate drink", example: "Cocoa warms me up.", exampleKo: "코코아가 나를 따뜻하게 해요.", emoji: "☕" },

    // Clothing
    { word: "pants", meaning: "바지", meaningEn: "clothes for your legs", example: "My pants are blue.", exampleKo: "내 바지는 파란색이에요.", emoji: "👖" },
    { word: "mittens", meaning: "벙어리장갑", meaningEn: "warm hand covers", example: "Mittens keep hands warm.", exampleKo: "벙어리장갑은 손을 따뜻하게 해요.", emoji: "🧤" },
    { word: "sandals", meaning: "샌들", meaningEn: "open summer shoes", example: "I wear sandals in summer.", exampleKo: "나는 여름에 샌들을 신어요.", emoji: "👡" },
    { word: "vest", meaning: "조끼", meaningEn: "clothes with no sleeves", example: "My vest has buttons.", exampleKo: "내 조끼에는 단추가 있어요.", emoji: "🦺" },
    { word: "hoodie", meaning: "후드티", meaningEn: "a top with a hood", example: "I wear a warm hoodie.", exampleKo: "나는 따뜻한 후드티를 입어요.", emoji: "👕" },
    { word: "tights", meaning: "타이츠", meaningEn: "tight leg covers", example: "She wears black tights.", exampleKo: "그녀는 검은 타이츠를 신어요.", emoji: "🩱" },
    { word: "bib", meaning: "턱받이", meaningEn: "cloth to keep clean while eating", example: "The baby wears a bib.", exampleKo: "아기가 턱받이를 했어요.", emoji: "👶" },
    { word: "necktie", meaning: "넥타이", meaningEn: "cloth around your neck", example: "Dad wears a necktie to work.", exampleKo: "아빠는 일하러 넥타이를 매요.", emoji: "👔" },
    { word: "boot", meaning: "장화", meaningEn: "tall covering shoe", example: "My rain boot is yellow.", exampleKo: "내 장화는 노란색이에요.", emoji: "👢" },
    { word: "robe", meaning: "가운 (variant)", meaningEn: "a long loose garment", example: "I wear a soft robe.", exampleKo: "나는 부드러운 가운을 입어요.", emoji: "🥋" },

    // Tools / objects (school)
    { word: "stapler", meaning: "스테이플러", meaningEn: "tool to join papers", example: "The stapler is on the desk.", exampleKo: "스테이플러가 책상에 있어요.", emoji: "📎" },
    { word: "marker", meaning: "마커", meaningEn: "a thick colored pen", example: "I write with a marker.", exampleKo: "나는 마커로 글을 써요.", emoji: "🖍️" },
    { word: "highlighter", meaning: "형광펜", meaningEn: "a bright color pen", example: "I use a yellow highlighter.", exampleKo: "나는 노란 형광펜을 써요.", emoji: "🖍️" },
    { word: "thumbtack", meaning: "압정", meaningEn: "a small pin", example: "I use a thumbtack on the board.", exampleKo: "나는 보드에 압정을 써요.", emoji: "📌" },
    { word: "calculator", meaning: "계산기", meaningEn: "a math machine", example: "I use a calculator for math.", exampleKo: "나는 수학에 계산기를 써요.", emoji: "🧮" },
    { word: "paintbrush", meaning: "붓", meaningEn: "a tool to paint with", example: "I dip my paintbrush in red.", exampleKo: "나는 붓을 빨간색에 담가요.", emoji: "🖌️" },
    { word: "easel", meaning: "이젤", meaningEn: "a stand for painting", example: "I paint on my easel.", exampleKo: "나는 이젤에서 그림을 그려요.", emoji: "🎨" },
    { word: "paperclip", meaning: "클립", meaningEn: "a small metal paper holder", example: "I attach pages with a paperclip.", exampleKo: "나는 종이를 클립으로 붙여요.", emoji: "📎" },
    { word: "notepad", meaning: "메모장", meaningEn: "small paper book for notes", example: "I write on my notepad.", exampleKo: "나는 메모장에 적어요.", emoji: "📝" },
    { word: "lunchbox", meaning: "도시락통 (variant)", meaningEn: "a box for lunch food", example: "My lunchbox has a sandwich.", exampleKo: "내 도시락통에 샌드위치가 있어요.", emoji: "🍱" },

    // Toys
    { word: "lego", meaning: "레고", meaningEn: "small building blocks", example: "I build with my legos.", exampleKo: "나는 레고로 만들어요.", emoji: "🧱" },
    { word: "dice", meaning: "주사위", meaningEn: "small cube for games", example: "I roll the dice.", exampleKo: "나는 주사위를 굴려요.", emoji: "🎲" },
    { word: "boomerang", meaning: "부메랑", meaningEn: "a stick that comes back", example: "I throw a boomerang.", exampleKo: "나는 부메랑을 던져요.", emoji: "🪃" },
    { word: "yoyo", meaning: "요요", meaningEn: "a toy on a string", example: "I play with my yoyo.", exampleKo: "나는 요요를 가지고 놀아요.", emoji: "🪀" },
    { word: "skateboard", meaning: "스케이트보드", meaningEn: "a board with wheels", example: "I ride my skateboard.", exampleKo: "나는 스케이트보드를 타요.", emoji: "🛹" },
    { word: "rollerblade", meaning: "롤러블레이드", meaningEn: "a wheel shoe", example: "I rollerblade in the park.", exampleKo: "나는 공원에서 롤러블레이드를 타요.", emoji: "🛼" },
    { word: "tricycle", meaning: "세발자전거", meaningEn: "a three-wheel bike", example: "Babies ride a tricycle.", exampleKo: "아기는 세발자전거를 타요.", emoji: "🚲" },

    // Family/people
    { word: "godmother", meaning: "대모", meaningEn: "a special female family friend", example: "My godmother loves me.", exampleKo: "내 대모는 나를 사랑해요.", emoji: "👩" },
    { word: "stepson", meaning: "의붓아들", meaningEn: "your spouse's son", example: "He is her stepson.", exampleKo: "그는 그녀의 의붓아들이에요.", emoji: "👦" },
    { word: "stepdaughter", meaning: "의붓딸", meaningEn: "your spouse's daughter", example: "She is his stepdaughter.", exampleKo: "그녀는 그의 의붓딸이에요.", emoji: "👧" },
    { word: "stepsister", meaning: "의붓자매", meaningEn: "your stepmom's daughter", example: "My stepsister is fun.", exampleKo: "내 의붓자매는 재미있어요.", emoji: "👧" },
    { word: "stepbrother", meaning: "의붓형제", meaningEn: "your stepmom's son", example: "My stepbrother plays soccer.", exampleKo: "내 의붓형제는 축구해요.", emoji: "👦" },
    { word: "principal", meaning: "교장", meaningEn: "the head of a school", example: "Our principal is kind.", exampleKo: "우리 교장 선생님은 친절해요.", emoji: "🏫" },
    { word: "nanny", meaning: "보모", meaningEn: "a helper who watches kids", example: "My nanny reads to me.", exampleKo: "내 보모가 책을 읽어줘요.", emoji: "👩" },
    { word: "babysitter", meaning: "베이비시터", meaningEn: "someone who watches baby", example: "The babysitter plays with us.", exampleKo: "베이비시터가 우리와 놀아요.", emoji: "👩" },

    // Animals - sea
    { word: "swordfish", meaning: "황새치", meaningEn: "a fish with a sword nose", example: "Swordfish swim fast.", exampleKo: "황새치는 빠르게 헤엄쳐요.", emoji: "🐟" },
    { word: "stingray", meaning: "가오리", meaningEn: "a flat sea fish", example: "Stingrays glide in water.", exampleKo: "가오리가 물속을 미끄러져 가요.", emoji: "🐟" },
    { word: "puffer", meaning: "복어", meaningEn: "a fish that puffs up", example: "Puffers blow up like balls.", exampleKo: "복어는 공처럼 부풀어요.", emoji: "🐡" },
    { word: "anchovy", meaning: "멸치", meaningEn: "a tiny salty fish", example: "Anchovies are small fish.", exampleKo: "멸치는 작은 물고기예요.", emoji: "🐟" },

    // Animals - more
    { word: "porcupine", meaning: "호저", meaningEn: "a sharp-spiked animal", example: "Porcupines have sharp spines.", exampleKo: "호저는 날카로운 가시가 있어요.", emoji: "🦔" },
    { word: "chipmunk", meaning: "다람쥐", meaningEn: "a small striped squirrel", example: "Chipmunks store nuts.", exampleKo: "다람쥐는 견과류를 모아요.", emoji: "🐿️" },
    { word: "groundhog", meaning: "마멋", meaningEn: "a furry hole-digging animal", example: "Groundhogs sleep in winter.", exampleKo: "마멋은 겨울에 자요.", emoji: "🦔" },
    { word: "skunk", meaning: "스컹크", meaningEn: "a black animal with smell", example: "Skunks smell very bad.", exampleKo: "스컹크는 아주 냄새가 나요.", emoji: "🦨" },
    { word: "mongoose", meaning: "몽구스", meaningEn: "a small fast brown animal", example: "Mongooses fight snakes.", exampleKo: "몽구스는 뱀과 싸워요.", emoji: "🐀" },
    { word: "platypus", meaning: "오리너구리", meaningEn: "an animal with duck bill", example: "A platypus has a flat beak.", exampleKo: "오리너구리는 납작한 부리가 있어요.", emoji: "🦫" },
    { word: "bison", meaning: "들소", meaningEn: "a big shaggy cow-like animal", example: "Bison live on the plains.", exampleKo: "들소는 평원에 살아요.", emoji: "🐃" },
    { word: "yak", meaning: "야크", meaningEn: "a hairy mountain cow", example: "Yaks live in cold mountains.", exampleKo: "야크는 추운 산에 살아요.", emoji: "🐂" },
    { word: "donkey", meaning: "당나귀", meaningEn: "a small horse-like animal", example: "Donkeys carry heavy bags.", exampleKo: "당나귀가 무거운 가방을 옮겨요.", emoji: "🫏" },
    { word: "buffalo", meaning: "버팔로", meaningEn: "a big horned animal", example: "Buffaloes have big horns.", exampleKo: "버팔로는 큰 뿔이 있어요.", emoji: "🐃" },

    // Numbers / time
    { word: "zero", meaning: "영", meaningEn: "the number 0", example: "Zero is nothing.", exampleKo: "영은 아무것도 없는 거예요.", emoji: "0️⃣" },
    { word: "second", meaning: "초", meaningEn: "a tiny unit of time", example: "Wait one second.", exampleKo: "잠깐만요.", emoji: "⏱️" },
    { word: "minute", meaning: "분", meaningEn: "60 seconds of time", example: "Wait one minute, please.", exampleKo: "잠깐만 기다려 주세요.", emoji: "⏰" },
    { word: "week", meaning: "주", meaningEn: "seven days", example: "A week has seven days.", exampleKo: "한 주는 칠 일이에요.", emoji: "📅" },
    { word: "month", meaning: "달", meaningEn: "about 30 days", example: "January is the first month.", exampleKo: "1월은 첫 번째 달이에요.", emoji: "📅" },
    { word: "year", meaning: "년", meaningEn: "twelve months", example: "I am eight years old.", exampleKo: "나는 여덟 살이에요.", emoji: "📅" },

    // Days/months
    { word: "monday", meaning: "월요일", meaningEn: "the first weekday", example: "Monday comes after Sunday.", exampleKo: "월요일은 일요일 다음이에요.", emoji: "📅" },
    { word: "tuesday", meaning: "화요일", meaningEn: "the second weekday", example: "I have music on Tuesday.", exampleKo: "나는 화요일에 음악 수업이 있어요.", emoji: "📅" },
    { word: "wednesday", meaning: "수요일", meaningEn: "the third weekday", example: "Wednesday is in the middle.", exampleKo: "수요일은 가운데에 있어요.", emoji: "📅" },
    { word: "thursday", meaning: "목요일", meaningEn: "the fourth weekday", example: "We have art on Thursday.", exampleKo: "우리는 목요일에 미술을 해요.", emoji: "📅" },
    { word: "friday", meaning: "금요일", meaningEn: "the fifth weekday", example: "Friday is the last school day.", exampleKo: "금요일은 마지막 학교 날이에요.", emoji: "📅" },
    { word: "saturday", meaning: "토요일", meaningEn: "the sixth day", example: "On Saturday I play.", exampleKo: "토요일에 나는 놀아요.", emoji: "📅" },
    { word: "sunday", meaning: "일요일", meaningEn: "the seventh day", example: "Sunday is family day.", exampleKo: "일요일은 가족의 날이에요.", emoji: "📅" },
    { word: "january", meaning: "1월", meaningEn: "first month of year", example: "January is cold.", exampleKo: "1월은 추워요.", emoji: "❄️" },
    { word: "february", meaning: "2월", meaningEn: "second month of year", example: "February is short.", exampleKo: "2월은 짧아요.", emoji: "📅" },
    { word: "april", meaning: "4월", meaningEn: "fourth month of year", example: "It rains in April.", exampleKo: "4월에는 비가 와요.", emoji: "🌧️" },

    // Shapes
    { word: "octagon", meaning: "팔각형", meaningEn: "an eight-sided shape", example: "A stop sign is an octagon.", exampleKo: "정지 표지판은 팔각형이에요.", emoji: "🛑" },
    { word: "hexagon", meaning: "육각형", meaningEn: "a six-sided shape", example: "A bee makes hexagons.", exampleKo: "벌은 육각형을 만들어요.", emoji: "🔶" },
    { word: "pentagon", meaning: "오각형", meaningEn: "a five-sided shape", example: "A pentagon has five sides.", exampleKo: "오각형은 변이 다섯 개예요.", emoji: "⬛" },
    { word: "trapezoid", meaning: "사다리꼴", meaningEn: "a four-sided shape", example: "I draw a trapezoid.", exampleKo: "나는 사다리꼴을 그려요.", emoji: "🔷" },
    { word: "rhombus", meaning: "마름모", meaningEn: "a tilted square shape", example: "A rhombus has four equal sides.", exampleKo: "마름모는 네 변이 같아요.", emoji: "🔷" },

    // Misc / actions
    { word: "sniff", meaning: "킁킁거리다", meaningEn: "smell with nose", example: "I sniff the flower.", exampleKo: "나는 꽃 냄새를 맡아요.", emoji: "👃" },
    { word: "lick", meaning: "핥다", meaningEn: "touch with tongue", example: "I lick the lollipop.", exampleKo: "나는 사탕을 핥아요.", emoji: "👅" },
    { word: "chomp", meaning: "우적우적 먹다", meaningEn: "bite with big sound", example: "I chomp my apple.", exampleKo: "나는 사과를 우적우적 먹어요.", emoji: "🍎" },
    { word: "munch", meaning: "오물오물 먹다", meaningEn: "chew quietly", example: "I munch on chips.", exampleKo: "나는 칩을 오물오물 먹어요.", emoji: "🍪" },
    { word: "tickle", meaning: "간지럽히다", meaningEn: "make someone laugh by touch", example: "I tickle my brother.", exampleKo: "나는 동생을 간지럽혀요.", emoji: "🤭" },
    { word: "giggle", meaning: "킥킥 웃다", meaningEn: "laugh in a small way", example: "Babies giggle a lot.", exampleKo: "아기들이 많이 킥킥 웃어요.", emoji: "😆" },
    { word: "stomp", meaning: "쿵쿵 밟다", meaningEn: "step very hard", example: "I stomp my feet.", exampleKo: "나는 발을 쿵쿵 굴러요.", emoji: "🦶" },
    { word: "shrug", meaning: "어깨를 으쓱하다", meaningEn: "lift your shoulders", example: "I shrug if I do not know.", exampleKo: "나는 모르면 어깨를 으쓱해요.", emoji: "🤷" },
    { word: "yell", meaning: "소리치다 (variant)", meaningEn: "say something loudly", example: "I yell hello loudly.", exampleKo: "나는 큰 소리로 안녕이라고 해요.", emoji: "📢" },
    { word: "tug", meaning: "잡아당기다", meaningEn: "pull something hard", example: "I tug on the rope.", exampleKo: "나는 줄을 잡아당겨요.", emoji: "🪢" },

    // Emotions
    { word: "shy", meaning: "수줍은 (variant)", meaningEn: "afraid to speak to others", example: "I feel shy at parties.", exampleKo: "나는 파티에서 수줍어해요.", emoji: "😳" },
    { word: "proud", meaning: "자랑스러운", meaningEn: "happy about yourself", example: "I am proud of my drawing.", exampleKo: "나는 내 그림이 자랑스러워요.", emoji: "😊" },
    { word: "excited", meaning: "신난", meaningEn: "very happy and ready", example: "I am excited for my birthday.", exampleKo: "나는 내 생일이 신나요.", emoji: "🤩" },
    { word: "lonely", meaning: "외로운 (variant)", meaningEn: "feeling sad alone", example: "I feel lonely without friends.", exampleKo: "나는 친구 없이 외로워요.", emoji: "😔" },
    { word: "jealous", meaning: "질투하는 (variant)", meaningEn: "wanting what others have", example: "I am jealous of his toy.", exampleKo: "나는 그의 장난감이 부러워요.", emoji: "😒" },
    { word: "grumpy", meaning: "심술궂은", meaningEn: "in a bad mood", example: "I am grumpy when tired.", exampleKo: "나는 피곤하면 심술궂어요.", emoji: "😠" },
    { word: "silly", meaning: "엉뚱한", meaningEn: "doing funny things", example: "We make silly faces.", exampleKo: "우리는 엉뚱한 표정을 지어요.", emoji: "🤪" },
    { word: "nervous", meaning: "긴장된 (variant)", meaningEn: "feeling worried", example: "I am nervous at the show.", exampleKo: "나는 공연에서 긴장돼요.", emoji: "😬" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
