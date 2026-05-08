// Batch 30 — G4 최종 보충 (30개)
(function () {
  if (typeof VOCABULARY === "undefined") return;
  const ADD = [
    { word: "globe", meaning: "지구본, 세계", meaningEn: "a model of Earth", example: "Spin the globe to find your country.", exampleKo: "지구본을 돌려 당신 나라를 찾아요.", emoji: "🌐" },
    { word: "atlas", meaning: "지도책", meaningEn: "a book of maps", example: "Use the atlas to study geography.", exampleKo: "지리 공부에 지도책을 써요.", emoji: "📚" },
    { word: "compass", meaning: "나침반", meaningEn: "a tool showing direction", example: "Hikers use a compass.", exampleKo: "등산객이 나침반을 써요.", emoji: "🧭" },
    { word: "elevation", meaning: "고도, 해발", meaningEn: "how high above sea level", example: "Mount Everest has high elevation.", exampleKo: "에베레스트는 높은 고도예요.", emoji: "⛰️" },
    { word: "altitude", meaning: "고도", meaningEn: "height above ground", example: "The plane flies at high altitude.", exampleKo: "비행기는 높은 고도에서 날아요.", emoji: "✈️" },
    { word: "longitude", meaning: "경도", meaningEn: "lines on a map east-west", example: "Find the longitude of the city.", exampleKo: "도시의 경도를 찾아요.", emoji: "🗺️" },
    { word: "latitude", meaning: "위도", meaningEn: "lines on a map north-south", example: "Korea's latitude is around 37 degrees.", exampleKo: "한국의 위도는 37도쯤이에요.", emoji: "🗺️" },
    { word: "topography", meaning: "지형", meaningEn: "the shape of land", example: "Topography includes mountains and valleys.", exampleKo: "지형에는 산과 계곡이 포함돼요.", emoji: "🏞️" },
    { word: "landscape", meaning: "풍경", meaningEn: "the look of an area", example: "The landscape is beautiful.", exampleKo: "풍경이 아름다워요.", emoji: "🏞️" },
    { word: "scenery", meaning: "경치", meaningEn: "the view in a place", example: "The mountain scenery is amazing.", exampleKo: "산 경치가 놀라워요.", emoji: "⛰️" },
    { word: "horizon", meaning: "지평선", meaningEn: "where land meets sky", example: "The sun rises on the horizon.", exampleKo: "해가 지평선에서 떠올라요.", emoji: "🌅" },
    { word: "sunrise", meaning: "일출", meaningEn: "when the sun comes up", example: "We watched the sunrise.", exampleKo: "우리는 일출을 봤어요.", emoji: "🌅" },
    { word: "sunset", meaning: "일몰", meaningEn: "when the sun goes down", example: "The sunset was orange.", exampleKo: "일몰은 주황색이었어요.", emoji: "🌇" },
    { word: "twilight", meaning: "황혼, 박명", meaningEn: "the time before dark", example: "Bats fly at twilight.", exampleKo: "박쥐는 황혼에 날아요.", emoji: "🌆" },
    { word: "dawn", meaning: "새벽", meaningEn: "the start of day", example: "Birds sing at dawn.", exampleKo: "새들이 새벽에 노래해요.", emoji: "🌄" },
    { word: "dusk", meaning: "해 질 녘", meaningEn: "the end of day", example: "The lights come on at dusk.", exampleKo: "해 질 녘에 불이 켜져요.", emoji: "🌆" },
    { word: "daylight", meaning: "햇빛", meaningEn: "the light from the sun", example: "Read in good daylight.", exampleKo: "좋은 햇빛에서 읽어요.", emoji: "☀️" },
    { word: "moonlight", meaning: "달빛", meaningEn: "the light from the moon", example: "We walked in the moonlight.", exampleKo: "우리는 달빛 속을 걸었어요.", emoji: "🌙" },
    { word: "starlight", meaning: "별빛", meaningEn: "the light from stars", example: "Starlight is faint but pretty.", exampleKo: "별빛은 희미하지만 예뻐요.", emoji: "✨" },
    { word: "candlelight", meaning: "촛불", meaningEn: "the light from candles", example: "Dinner by candlelight is romantic.", exampleKo: "촛불 저녁은 낭만적이에요.", emoji: "🕯️" },
    { word: "shadow", meaning: "그림자", meaningEn: "a dark shape from blocked light", example: "My shadow follows me.", exampleKo: "내 그림자가 나를 따라와요.", emoji: "👤" },
    { word: "reflection", meaning: "반사, 반영", meaningEn: "a mirror image", example: "I see my reflection in the mirror.", exampleKo: "거울에서 내 모습을 봐요.", emoji: "🪞" },
    { word: "spectrum", meaning: "스펙트럼", meaningEn: "a range of colors or things", example: "Rainbows show a color spectrum.", exampleKo: "무지개는 색 스펙트럼을 보여줘요.", emoji: "🌈" },
    { word: "hue", meaning: "색조", meaningEn: "a kind of color", example: "The sky has a blue hue.", exampleKo: "하늘은 푸른 색조를 가져요.", emoji: "🎨" },
    { word: "shade", meaning: "그늘, 색조", meaningEn: "shadow or color tone", example: "Sit in the shade.", exampleKo: "그늘에 앉아요.", emoji: "🌳" },
    { word: "tint", meaning: "엷은 색조", meaningEn: "a small amount of color", example: "Her hair has a red tint.", exampleKo: "그녀의 머리는 붉은 색조가 있어요.", emoji: "🎨" },
    { word: "transparent", meaning: "투명한", meaningEn: "you can see through", example: "Glass is transparent.", exampleKo: "유리는 투명해요.", emoji: "🪟" },
    { word: "opaque", meaning: "불투명한", meaningEn: "you cannot see through", example: "Wood is opaque.", exampleKo: "나무는 불투명해요.", emoji: "🪵" },
    { word: "translucent", meaning: "반투명한", meaningEn: "lets light through but not clearly", example: "Frosted glass is translucent.", exampleKo: "젖빛 유리는 반투명해요.", emoji: "🪟" },
    { word: "fragile", meaning: "깨지기 쉬운", meaningEn: "easily broken", example: "Handle the glass carefully; it's fragile.", exampleKo: "유리는 조심히 다뤄요. 깨지기 쉬워요.", emoji: "🥚" }
  ];
  const seen = new Set(VOCABULARY.G4.map(w => w.word.toLowerCase()));
  for (const w of ADD) {
    if (!seen.has(w.word.toLowerCase())) {
      VOCABULARY.G4.push(w);
      seen.add(w.word.toLowerCase());
    }
  }
})();
