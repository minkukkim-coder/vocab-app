// Batch 51 — G5 최종 보충 (30개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "predator", meaning: "포식자", meaningEn: "an animal that hunts others", example: "Lions are top predators.", exampleKo: "사자는 최상위 포식자예요.", emoji: "🦁" },
    { word: "ecosystem", meaning: "생태계", meaningEn: "all life in an area", example: "Coral reefs are amazing ecosystems.", exampleKo: "산호초는 놀라운 생태계예요.", emoji: "🐠" },
    { word: "evolution", meaning: "진화", meaningEn: "slow change over time", example: "Evolution explains animal diversity.", exampleKo: "진화가 동물 다양성을 설명해요.", emoji: "🦎" },
    { word: "adaptation", meaning: "적응", meaningEn: "changing to fit a place", example: "Camels show desert adaptations.", exampleKo: "낙타는 사막 적응을 보여줘요.", emoji: "🐪" },
    { word: "conservation", meaning: "보존", meaningEn: "protecting nature", example: "Conservation saves wildlife.", exampleKo: "보존이 야생 동물을 구해요.", emoji: "🌿" },
    { word: "preservation", meaning: "보존, 보호", meaningEn: "keeping something safe", example: "Forest preservation is vital.", exampleKo: "숲 보존이 매우 중요해요.", emoji: "🌳" },
    { word: "extinction", meaning: "멸종", meaningEn: "no longer existing", example: "Many species face extinction.", exampleKo: "많은 종이 멸종에 직면해 있어요.", emoji: "🦖" },
    { word: "endangered", meaning: "멸종 위기의", meaningEn: "in danger of dying out", example: "Tigers are endangered.", exampleKo: "호랑이는 멸종 위기예요.", emoji: "🐯" },
    { word: "habitat", meaning: "서식지", meaningEn: "where animals live", example: "Forests are habitats.", exampleKo: "숲은 서식지예요.", emoji: "🌲" },
    { word: "wildlife", meaning: "야생 동물", meaningEn: "wild animals and plants", example: "Africa has rich wildlife.", exampleKo: "아프리카는 풍부한 야생 동물이 있어요.", emoji: "🦒" },
    { word: "migration", meaning: "이동, 이주", meaningEn: "moving from one place to another", example: "Bird migration happens yearly.", exampleKo: "새 이동은 매년 일어나요.", emoji: "🦅" },
    { word: "hibernate", meaning: "동면하다", meaningEn: "to sleep through winter", example: "Bears hibernate in caves.", exampleKo: "곰은 동굴에서 동면해요.", emoji: "🐻" },
    { word: "camouflage", meaning: "위장", meaningEn: "blending with surroundings", example: "Chameleons use camouflage.", exampleKo: "카멜레온은 위장을 사용해요.", emoji: "🦎" },
    { word: "nocturnal", meaning: "야행성의", meaningEn: "active at night", example: "Owls are nocturnal birds.", exampleKo: "올빼미는 야행성 새예요.", emoji: "🦉" },
    { word: "domestic", meaning: "가정의, 길들인", meaningEn: "of the home or tame", example: "Dogs are domestic animals.", exampleKo: "강아지는 가정 동물이에요.", emoji: "🐕" },
    { word: "wild", meaning: "야생의", meaningEn: "not tame", example: "Wild animals live in nature.", exampleKo: "야생 동물은 자연에 살아요.", emoji: "🦌" },
    { word: "tropical", meaning: "열대의", meaningEn: "of hot wet places", example: "Tropical fruits are sweet.", exampleKo: "열대 과일은 달아요.", emoji: "🍌" },
    { word: "polar", meaning: "극지의", meaningEn: "of very cold places", example: "Polar bears live in cold polar regions.", exampleKo: "북극곰은 추운 극지에 살아요.", emoji: "🐻‍❄️" },
    { word: "arctic", meaning: "북극의", meaningEn: "of the far north", example: "The arctic is very cold.", exampleKo: "북극은 매우 추워요.", emoji: "🧊" },
    { word: "temperate", meaning: "온대의", meaningEn: "of mild climates", example: "Korea has a temperate climate.", exampleKo: "한국은 온대 기후예요.", emoji: "🌳" },
    { word: "marine", meaning: "해양의", meaningEn: "of the sea", example: "Whales are marine mammals.", exampleKo: "고래는 해양 포유류예요.", emoji: "🐋" },
    { word: "aquatic", meaning: "수생의", meaningEn: "living in water", example: "Fish are aquatic animals.", exampleKo: "물고기는 수생 동물이에요.", emoji: "🐟" },
    { word: "terrestrial", meaning: "육상의", meaningEn: "living on land", example: "Tigers are terrestrial.", exampleKo: "호랑이는 육상 동물이에요.", emoji: "🐯" },
    { word: "amphibian", meaning: "양서류", meaningEn: "animal living on land and water", example: "Frogs are amphibians.", exampleKo: "개구리는 양서류예요.", emoji: "🐸" },
    { word: "reptile", meaning: "파충류", meaningEn: "cold-blooded scaly animal", example: "Snakes are reptiles.", exampleKo: "뱀은 파충류예요.", emoji: "🐍" },
    { word: "mammal", meaning: "포유류", meaningEn: "warm-blooded animal with fur", example: "Humans are mammals.", exampleKo: "인간은 포유류예요.", emoji: "🐶" },
    { word: "vertebrate", meaning: "척추동물", meaningEn: "animal with a backbone", example: "Birds are vertebrates.", exampleKo: "새는 척추동물이에요.", emoji: "🦴" },
    { word: "invertebrate", meaning: "무척추동물", meaningEn: "animal without a backbone", example: "Insects are invertebrates.", exampleKo: "곤충은 무척추동물이에요.", emoji: "🐛" },
    { word: "carnivore", meaning: "육식 동물", meaningEn: "an animal eating meat", example: "Lions are carnivores.", exampleKo: "사자는 육식 동물이에요.", emoji: "🦁" },
    { word: "herbivore", meaning: "초식 동물", meaningEn: "an animal eating plants", example: "Cows are herbivores.", exampleKo: "소는 초식 동물이에요.", emoji: "🐄" },
    { word: "omnivore", meaning: "잡식 동물", meaningEn: "eating both plants and meat", example: "Humans are omnivores.", exampleKo: "인간은 잡식 동물이에요.", emoji: "🍽️" }
  ];
  const seen = new Set(VOCABULARY.G5.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G5.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
