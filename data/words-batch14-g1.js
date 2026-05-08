// Batch 14 — G1 추가 어휘 100개
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    // Fruits
    { word: "apple", meaning: "사과", meaningEn: "a round red or green fruit", example: "I eat an apple every day.", exampleKo: "나는 매일 사과를 먹어요.", emoji: "🍎" },
    { word: "apricot", meaning: "살구", meaningEn: "a small orange fruit", example: "Apricots are sweet.", exampleKo: "살구는 달콤해요.", emoji: "🍑" },
    { word: "avocado", meaning: "아보카도", meaningEn: "a green fruit with big seed", example: "I like avocado on toast.", exampleKo: "나는 토스트 위 아보카도를 좋아해요.", emoji: "🥑" },
    { word: "blackberry", meaning: "블랙베리", meaningEn: "a small dark berry", example: "Blackberries grow in summer.", exampleKo: "블랙베리는 여름에 자라요.", emoji: "🫐" },
    { word: "raspberry", meaning: "라즈베리", meaningEn: "a small red berry", example: "Raspberries taste sweet.", exampleKo: "라즈베리는 달아요.", emoji: "🍓" },
    { word: "coconut", meaning: "코코넛", meaningEn: "a big brown tropical fruit", example: "Coconut milk is tasty.", exampleKo: "코코넛 우유는 맛있어요.", emoji: "🥥" },
    { word: "papaya", meaning: "파파야", meaningEn: "a large orange fruit", example: "Papaya is soft and sweet.", exampleKo: "파파야는 부드럽고 달아요.", emoji: "🍈" },
    { word: "persimmon", meaning: "감", meaningEn: "an orange autumn fruit", example: "Persimmons turn orange in fall.", exampleKo: "감은 가을에 주황색이 돼요.", emoji: "🍊" },
    { word: "pomegranate", meaning: "석류", meaningEn: "a red fruit with seeds", example: "Pomegranate has many red seeds.", exampleKo: "석류는 빨간 씨가 많아요.", emoji: "🍎" },

    // Vegetables
    { word: "lettuce", meaning: "상추", meaningEn: "a green leafy vegetable", example: "Lettuce makes a fresh salad.", exampleKo: "상추로 신선한 샐러드를 만들어요.", emoji: "🥬" },
    { word: "cauliflower", meaning: "콜리플라워", meaningEn: "a white round vegetable", example: "Cauliflower looks like a cloud.", exampleKo: "콜리플라워는 구름처럼 생겼어요.", emoji: "🥦" },
    { word: "celery", meaning: "셀러리", meaningEn: "a long green vegetable", example: "Celery is crunchy and healthy.", exampleKo: "셀러리는 아삭아삭하고 건강해요.", emoji: "🥬" },
    { word: "kale", meaning: "케일", meaningEn: "a dark green leafy vegetable", example: "Kale is good for you.", exampleKo: "케일은 몸에 좋아요.", emoji: "🥬" },
    { word: "eggplant", meaning: "가지", meaningEn: "a purple long vegetable", example: "Eggplant is purple.", exampleKo: "가지는 보라색이에요.", emoji: "🍆" },
    { word: "radish", meaning: "무", meaningEn: "a small white root vegetable", example: "Radish tastes spicy.", exampleKo: "무는 매운 맛이 나요.", emoji: "🥕" },
    { word: "turnip", meaning: "순무", meaningEn: "a round white root vegetable", example: "Turnip grows underground.", exampleKo: "순무는 땅속에서 자라요.", emoji: "🥕" },
    { word: "leek", meaning: "대파", meaningEn: "a long green onion", example: "Leek is in many soups.", exampleKo: "대파는 많은 국에 들어가요.", emoji: "🥬" },
    { word: "beet", meaning: "비트", meaningEn: "a red round vegetable", example: "Beet juice is dark red.", exampleKo: "비트 주스는 진한 빨간색이에요.", emoji: "🥕" },

    // Body
    { word: "chin", meaning: "턱", meaningEn: "below your mouth", example: "My chin is small.", exampleKo: "내 턱은 작아요.", emoji: "👤" },
    { word: "eyebrow", meaning: "눈썹", meaningEn: "hair above your eye", example: "My eyebrows are dark.", exampleKo: "내 눈썹은 어두워요.", emoji: "👁️" },
    { word: "eyelash", meaning: "속눈썹", meaningEn: "small hair on eyelid", example: "Her eyelashes are long.", exampleKo: "그녀의 속눈썹은 길어요.", emoji: "👁️" },
    { word: "shoulder", meaning: "어깨", meaningEn: "between neck and arm", example: "My bag is on my shoulder.", exampleKo: "내 가방은 어깨에 있어요.", emoji: "💪" },
    { word: "forehead", meaning: "이마", meaningEn: "above your eyes", example: "I touch my forehead.", exampleKo: "나는 이마를 만져요.", emoji: "👤" },
    { word: "waist", meaning: "허리", meaningEn: "the middle of your body", example: "The belt is around my waist.", exampleKo: "벨트가 내 허리에 있어요.", emoji: "👤" },
    { word: "fingernail", meaning: "손톱", meaningEn: "hard part on finger tip", example: "Cut your fingernails short.", exampleKo: "손톱을 짧게 잘라요.", emoji: "💅" },
    { word: "toenail", meaning: "발톱", meaningEn: "hard part on toe tip", example: "I clean my toenails.", exampleKo: "나는 발톱을 깨끗이 해요.", emoji: "🦶" },
    { word: "jaw", meaning: "턱뼈", meaningEn: "the bone in your face", example: "My jaw hurts.", exampleKo: "턱이 아파요.", emoji: "👤" },

    // Animals - birds
    { word: "ostrich", meaning: "타조", meaningEn: "a very big bird", example: "An ostrich cannot fly.", exampleKo: "타조는 날 수 없어요.", emoji: "🦒" },
    { word: "peacock", meaning: "공작", meaningEn: "a bird with pretty tail", example: "The peacock has blue feathers.", exampleKo: "공작은 파란 깃털이 있어요.", emoji: "🦚" },
    { word: "pelican", meaning: "펠리컨", meaningEn: "a bird with big beak", example: "Pelicans catch fish.", exampleKo: "펠리컨은 물고기를 잡아요.", emoji: "🐦" },
    { word: "swan", meaning: "백조", meaningEn: "a big white water bird", example: "Swans swim in the lake.", exampleKo: "백조가 호수에서 헤엄쳐요.", emoji: "🦢" },
    { word: "falcon", meaning: "매", meaningEn: "a fast hunting bird", example: "Falcons fly very fast.", exampleKo: "매는 매우 빠르게 날아요.", emoji: "🦅" },
    { word: "woodpecker", meaning: "딱따구리", meaningEn: "a bird that pecks trees", example: "A woodpecker hits the tree.", exampleKo: "딱따구리가 나무를 쪼아요.", emoji: "🐦" },
    { word: "sparrow", meaning: "참새", meaningEn: "a small brown bird", example: "Sparrows eat seeds.", exampleKo: "참새는 씨앗을 먹어요.", emoji: "🐦" },
    { word: "robin", meaning: "울새", meaningEn: "a small bird with red chest", example: "Robins sing in spring.", exampleKo: "울새는 봄에 노래해요.", emoji: "🐦" },
    { word: "crow", meaning: "까마귀", meaningEn: "a black bird", example: "The crow says caw.", exampleKo: "까마귀는 까악 하고 울어요.", emoji: "🐦‍⬛" },

    // Animals - mammals
    { word: "wolf", meaning: "늑대", meaningEn: "a wild dog-like animal", example: "Wolves live in the forest.", exampleKo: "늑대는 숲에 살아요.", emoji: "🐺" },
    { word: "otter", meaning: "수달", meaningEn: "a swimming furry animal", example: "Otters love to play.", exampleKo: "수달은 노는 것을 좋아해요.", emoji: "🦦" },
    { word: "badger", meaning: "오소리", meaningEn: "a black and white animal", example: "Badgers dig holes.", exampleKo: "오소리는 구멍을 파요.", emoji: "🦡" },
    { word: "koala", meaning: "코알라", meaningEn: "a gray Australian animal", example: "Koalas eat tree leaves.", exampleKo: "코알라는 나뭇잎을 먹어요.", emoji: "🐨" },
    { word: "leopard", meaning: "표범", meaningEn: "a big spotted cat", example: "Leopards have black spots.", exampleKo: "표범은 검은 점이 있어요.", emoji: "🐆" },
    { word: "cheetah", meaning: "치타", meaningEn: "the fastest big cat", example: "A cheetah runs very fast.", exampleKo: "치타는 매우 빠르게 달려요.", emoji: "🐆" },
    { word: "jaguar", meaning: "재규어", meaningEn: "a strong jungle cat", example: "Jaguars live in jungles.", exampleKo: "재규어는 정글에 살아요.", emoji: "🐆" },
    { word: "moose", meaning: "무스", meaningEn: "a very big deer", example: "A moose has big horns.", exampleKo: "무스는 큰 뿔이 있어요.", emoji: "🦌" },
    { word: "antelope", meaning: "영양", meaningEn: "a fast running animal", example: "Antelopes live on the plains.", exampleKo: "영양은 평원에 살아요.", emoji: "🦌" },

    // Reptiles & amphibians
    { word: "lizard", meaning: "도마뱀", meaningEn: "a small crawling reptile", example: "The lizard sits on a rock.", exampleKo: "도마뱀이 바위에 앉아 있어요.", emoji: "🦎" },
    { word: "gecko", meaning: "도마뱀붙이", meaningEn: "a small wall lizard", example: "A gecko climbs the wall.", exampleKo: "도마뱀붙이가 벽을 올라가요.", emoji: "🦎" },
    { word: "iguana", meaning: "이구아나", meaningEn: "a big green lizard", example: "Iguanas are green and large.", exampleKo: "이구아나는 녹색이고 커요.", emoji: "🦎" },
    { word: "toad", meaning: "두꺼비", meaningEn: "a frog with rough skin", example: "Toads hop in the grass.", exampleKo: "두꺼비가 풀밭에서 뛰어요.", emoji: "🐸" },
    { word: "tortoise", meaning: "거북", meaningEn: "a land turtle", example: "The tortoise walks slowly.", exampleKo: "거북이는 천천히 걸어요.", emoji: "🐢" },

    // Insects & sea
    { word: "caterpillar", meaning: "애벌레", meaningEn: "a baby butterfly", example: "Caterpillars eat leaves.", exampleKo: "애벌레는 잎을 먹어요.", emoji: "🐛" },
    { word: "beetle", meaning: "딱정벌레", meaningEn: "an insect with hard shell", example: "Beetles have hard wings.", exampleKo: "딱정벌레는 단단한 날개가 있어요.", emoji: "🪲" },
    { word: "scorpion", meaning: "전갈", meaningEn: "a desert bug with stinger", example: "Scorpions live in deserts.", exampleKo: "전갈은 사막에 살아요.", emoji: "🦂" },
    { word: "wasp", meaning: "말벌", meaningEn: "a flying bug that stings", example: "Wasps can sting you.", exampleKo: "말벌은 너를 쏠 수 있어요.", emoji: "🐝" },
    { word: "jellyfish", meaning: "해파리", meaningEn: "a soft sea animal", example: "Jellyfish float in the sea.", exampleKo: "해파리가 바다에 떠 있어요.", emoji: "🪼" },
    { word: "seahorse", meaning: "해마", meaningEn: "a small horse-shaped fish", example: "Seahorses swim slowly.", exampleKo: "해마는 천천히 헤엄쳐요.", emoji: "🐠" },
    { word: "walrus", meaning: "바다코끼리", meaningEn: "a big sea animal with tusks", example: "Walruses have long tusks.", exampleKo: "바다코끼리는 긴 엄니가 있어요.", emoji: "🦭" },

    // Numbers
    { word: "two", meaning: "둘", meaningEn: "the number after one", example: "I have two eyes.", exampleKo: "나는 눈이 두 개 있어요.", emoji: "2️⃣" },
    { word: "five", meaning: "다섯", meaningEn: "the number after four", example: "I have five fingers.", exampleKo: "나는 손가락이 다섯 개예요.", emoji: "5️⃣" },
    { word: "eleven", meaning: "열하나", meaningEn: "the number after ten", example: "There are eleven players.", exampleKo: "선수가 열한 명 있어요.", emoji: "🔢" },
    { word: "twelve", meaning: "열둘", meaningEn: "the number after eleven", example: "A year has twelve months.", exampleKo: "일 년은 열두 달이에요.", emoji: "🔢" },
    { word: "twenty", meaning: "스물", meaningEn: "the number after nineteen", example: "I have twenty crayons.", exampleKo: "나는 크레용이 스무 개 있어요.", emoji: "🔢" },
    { word: "hundred", meaning: "백", meaningEn: "the number 100", example: "I have one hundred stickers.", exampleKo: "나는 스티커가 백 개 있어요.", emoji: "💯" },

    // Colors
    { word: "gold", meaning: "금색", meaningEn: "a shiny yellow color", example: "The gold ring is shiny.", exampleKo: "금반지가 반짝여요.", emoji: "🟡" },
    { word: "beige", meaning: "베이지색", meaningEn: "a soft brown color", example: "My beige coat is warm.", exampleKo: "내 베이지색 코트는 따뜻해요.", emoji: "🟤" },
    { word: "maroon", meaning: "고동색", meaningEn: "a dark red color", example: "My shirt is maroon.", exampleKo: "내 셔츠는 고동색이에요.", emoji: "🟥" },

    // Transportation
    { word: "tractor", meaning: "트랙터", meaningEn: "a farm vehicle", example: "Tractors work on farms.", exampleKo: "트랙터는 농장에서 일해요.", emoji: "🚜" },
    { word: "van", meaning: "밴", meaningEn: "a big car for many people", example: "The van takes us to school.", exampleKo: "밴이 우리를 학교에 데려가요.", emoji: "🚐" },
    { word: "jeep", meaning: "지프", meaningEn: "a strong outdoor car", example: "The jeep drives off road.", exampleKo: "지프는 비포장길을 달려요.", emoji: "🚙" },
    { word: "submarine", meaning: "잠수함", meaningEn: "a ship under water", example: "Submarines go deep underwater.", exampleKo: "잠수함은 깊은 물속으로 가요.", emoji: "🚢" },

    // Family
    { word: "uncle", meaning: "삼촌", meaningEn: "your parent's brother", example: "My uncle is very kind.", exampleKo: "내 삼촌은 매우 친절해요.", emoji: "👨" },
    { word: "aunt", meaning: "이모/고모", meaningEn: "your parent's sister", example: "My aunt brings gifts.", exampleKo: "이모가 선물을 가져와요.", emoji: "👩" },
    { word: "son", meaning: "아들", meaningEn: "a male child", example: "He is my son.", exampleKo: "그는 내 아들이에요.", emoji: "👦" },
    { word: "grandson", meaning: "손자", meaningEn: "your child's son", example: "Grandma loves her grandson.", exampleKo: "할머니는 손자를 사랑해요.", emoji: "👦" },
    { word: "granddaughter", meaning: "손녀", meaningEn: "your child's daughter", example: "Grandpa hugs his granddaughter.", exampleKo: "할아버지가 손녀를 안아요.", emoji: "👧" },
    { word: "stepmother", meaning: "새어머니", meaningEn: "your father's new wife", example: "My stepmother is nice.", exampleKo: "내 새어머니는 친절해요.", emoji: "👩" },
    { word: "stepfather", meaning: "새아버지", meaningEn: "your mother's new husband", example: "My stepfather is funny.", exampleKo: "내 새아버지는 재미있어요.", emoji: "👨" },

    // Verbs (action)
    { word: "rest", meaning: "쉬다", meaningEn: "to relax for a while", example: "I rest after lunch.", exampleKo: "나는 점심 후에 쉬어요.", emoji: "😴" },
    { word: "dream", meaning: "꿈꾸다", meaningEn: "to imagine in sleep", example: "I dream about flying.", exampleKo: "나는 나는 꿈을 꿔요.", emoji: "💭" },
    { word: "snore", meaning: "코를 골다", meaningEn: "make sound while sleeping", example: "Dad snores at night.", exampleKo: "아빠는 밤에 코를 골아요.", emoji: "😴" },
    { word: "bow", meaning: "절하다", meaningEn: "to bend forward to greet", example: "I bow to my teacher.", exampleKo: "나는 선생님께 절해요.", emoji: "🙇" },
    { word: "nod", meaning: "고개를 끄덕이다", meaningEn: "move head up and down", example: "I nod yes.", exampleKo: "나는 그렇다고 끄덕여요.", emoji: "👍" },
    { word: "tumble", meaning: "구르다", meaningEn: "fall and roll over", example: "Kids tumble on the mat.", exampleKo: "아이들이 매트에서 굴러요.", emoji: "🤸" },
    { word: "tiptoe", meaning: "발끝으로 걷다", meaningEn: "walk on toes quietly", example: "I tiptoe past the baby.", exampleKo: "나는 아기 옆을 발끝으로 걸어요.", emoji: "🦶" },
    { word: "march", meaning: "행진하다", meaningEn: "walk like a soldier", example: "We march in line.", exampleKo: "우리는 줄지어 행진해요.", emoji: "🚶" },

    // Misc household / school
    { word: "bathtub", meaning: "욕조", meaningEn: "a tub for taking a bath", example: "I sit in the bathtub.", exampleKo: "나는 욕조에 앉아 있어요.", emoji: "🛁" },
    { word: "doorknob", meaning: "문손잡이", meaningEn: "the handle of a door", example: "Turn the doorknob to open.", exampleKo: "문손잡이를 돌려 여세요.", emoji: "🚪" },
    { word: "balcony", meaning: "발코니", meaningEn: "outside floor of a room", example: "We sit on the balcony.", exampleKo: "우리는 발코니에 앉아요.", emoji: "🏠" },
    { word: "fireplace", meaning: "벽난로", meaningEn: "a place for indoor fire", example: "The fireplace is warm.", exampleKo: "벽난로가 따뜻해요.", emoji: "🔥" },
    { word: "stairwell", meaning: "계단실", meaningEn: "a place with stairs", example: "We walk up the stairwell.", exampleKo: "우리는 계단실을 올라가요.", emoji: "🪜" },
    { word: "playroom", meaning: "놀이방", meaningEn: "a room for playing", example: "Toys are in the playroom.", exampleKo: "장난감은 놀이방에 있어요.", emoji: "🧸" },
    { word: "schoolbag", meaning: "책가방", meaningEn: "bag for school books", example: "My schoolbag is heavy.", exampleKo: "내 책가방은 무거워요.", emoji: "🎒" },
    { word: "schoolyard", meaning: "운동장", meaningEn: "yard at school", example: "We play in the schoolyard.", exampleKo: "우리는 운동장에서 놀아요.", emoji: "🏫" },
    { word: "lunchroom", meaning: "급식실", meaningEn: "a room for eating lunch", example: "We eat in the lunchroom.", exampleKo: "우리는 급식실에서 먹어요.", emoji: "🍱" },

    // Sports / hobbies
    { word: "trampoline", meaning: "트램펄린", meaningEn: "a bouncy jumping mat", example: "I jump on the trampoline.", exampleKo: "나는 트램펄린에서 뛰어요.", emoji: "🤸" },
    { word: "bowling", meaning: "볼링", meaningEn: "a game with pins and ball", example: "We go bowling on weekends.", exampleKo: "우리는 주말에 볼링을 가요.", emoji: "🎳" },
    { word: "archery", meaning: "양궁", meaningEn: "shooting bow and arrow", example: "Archery uses a bow.", exampleKo: "양궁은 활을 사용해요.", emoji: "🏹" },

    // Weather / nature
    { word: "blizzard", meaning: "눈보라", meaningEn: "a heavy snow storm", example: "A blizzard hit the town.", exampleKo: "눈보라가 마을에 몰아쳤어요.", emoji: "🌨️" },
    { word: "hailstone", meaning: "우박", meaningEn: "ball of ice from sky", example: "Hailstones fell from the sky.", exampleKo: "우박이 하늘에서 떨어졌어요.", emoji: "🌨️" },
    { word: "raindrop", meaning: "빗방울", meaningEn: "a drop of rain", example: "Raindrops fall on the window.", exampleKo: "빗방울이 창문에 떨어져요.", emoji: "💧" }
  ];
  const seen = new Set(VOCABULARY.G1.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G1.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
