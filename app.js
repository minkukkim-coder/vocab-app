// ─── 프로필 설정 (학년별) ───────────────────────
const PROFILES = {
  g1: { name: "Grade 1", emoji: "🌱", currentGrade: "G1", nextGrade: "G2" },
  g2: { name: "Grade 2", emoji: "🌿", currentGrade: "G2", nextGrade: "G3" },
  g3: { name: "Grade 3", emoji: "🌳", currentGrade: "G3", nextGrade: "G4" },
  g4: { name: "Grade 4", emoji: "🌲", currentGrade: "G4", nextGrade: "G5" },
  g5: { name: "Grade 5", emoji: "🎓", currentGrade: "G5", nextGrade: null }
};

const WORDS_PER_DAY = 20;
const WORDS_PER_GRADE = 10;
const KIRBY_MAX = 30;
const KIRBY_DEFAULT = 7;

const state = {
  childId: null,
  child: null,
  profileId: null,
  profile: null,
  todayWordsFull: [],
  activeWords: [],
  isReviewMode: false,
  learnIdx: 0,
  testQuestions: [],
  testIdx: 0,
  testScore: 0,
  testWrong: []
};

// ─── 아이(자녀) 관리 ─────────────────────────────
const DEFAULT_CHILDREN = [
  { id: "child_son", name: "아들", emoji: "👦" },
  { id: "child_daughter", name: "딸", emoji: "👧" }
];
function getChildren() {
  try {
    const v = JSON.parse(localStorage.getItem("children") || "null");
    if (Array.isArray(v) && v.length > 0) return v;
  } catch {}
  saveChildren(DEFAULT_CHILDREN);
  return DEFAULT_CHILDREN;
}
function saveChildren(list) {
  localStorage.setItem("children", JSON.stringify(list));
}
function addChild(name, emoji) {
  const list = getChildren();
  const id = "child_" + Date.now();
  list.push({ id, name: name.trim(), emoji: emoji || "🧑" });
  saveChildren(list);
  return id;
}
function removeChild(id) {
  const list = getChildren().filter(c => c.id !== id);
  saveChildren(list);
  // 해당 아이의 데이터도 정리
  ["kirbyCount_", "wordStats_", "vocab_progress_"].forEach(prefix => {
    localStorage.removeItem(prefix + id);
  });
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const k = localStorage.key(i);
    if (k && k.startsWith(`todayWords_${id}_`)) localStorage.removeItem(k);
  }
}

// ─── 유틸 ────────────────────────────────────────
function $(id) { return document.getElementById(id); }
function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(`screen-${name}`).classList.add("active");
}
function todayKey() { return new Date().toISOString().slice(0, 10); }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── 단어 통계 (아이별로 누적) ──────────────────
function statsKey() { return `wordStats_${state.childId}`; }
function getStats() {
  try { return JSON.parse(localStorage.getItem(statsKey()) || "{}"); }
  catch { return {}; }
}
function recordWordResult(wordStr, correct) {
  const stats = getStats();
  if (!stats[wordStr]) stats[wordStr] = { wrong: 0, correct: 0 };
  if (correct) stats[wordStr].correct++;
  else stats[wordStr].wrong++;
  localStorage.setItem(statsKey(), JSON.stringify(stats));
}
function getWordWeight(wordStr) {
  const stats = getStats();
  const s = stats[wordStr] || { wrong: 0, correct: 0 };
  // 기본 1, 틀릴 때마다 +3, 맞힐 때마다 -0.4, 최소 0.3
  return Math.max(0.3, 1 + s.wrong * 3 - s.correct * 0.4);
}
function weightedPick(pool, n) {
  const items = pool.map(w => ({ w, weight: getWordWeight(w.word) }));
  const result = [];
  while (result.length < n && items.length > 0) {
    const total = items.reduce((s, x) => s + x.weight, 0);
    let r = Math.random() * total;
    for (let i = 0; i < items.length; i++) {
      r -= items[i].weight;
      if (r <= 0) {
        result.push(items[i].w);
        items.splice(i, 1);
        break;
      }
    }
  }
  return result;
}

// 학년별 단어 = 기본(VOCABULARY) + 사용자 추가(localStorage)
function getGradeWords(grade) {
  const builtin = VOCABULARY[grade] || [];
  let custom = [];
  try { custom = JSON.parse(localStorage.getItem(`customVocab_${grade}`) || "[]"); }
  catch { custom = []; }
  const seen = new Set(builtin.map(w => w.word.toLowerCase()));
  const unique = custom.filter(w => w && w.word && !seen.has(w.word.toLowerCase()));
  return [...builtin, ...unique];
}

// ─── 발음 ───────────────────────────────────────
let speakQueue = [];
function speakSeq(items, btnElement) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  speakQueue = [...items];
  if (btnElement) {
    btnElement.classList.add("playing");
    speakQueue._btn = btnElement;
  }
  playNextInQueue();
}
function playNextInQueue() {
  if (speakQueue.length === 0) {
    document.querySelectorAll(".speak-btn, .speak-btn-tiny, .speak-btn-small")
      .forEach(b => b.classList.remove("playing"));
    return;
  }
  const item = speakQueue.shift();
  const u = new SpeechSynthesisUtterance(item.text);
  u.lang = "en-US";
  u.rate = item.rate || 0.85;
  u.onend = () => setTimeout(playNextInQueue, item.gap || 100);
  u.onerror = () => setTimeout(playNextInQueue, 50);
  speechSynthesis.speak(u);
}
function speakOne(text, rate, btn) {
  speakSeq([{ text, rate: rate || 0.85 }], btn);
}

// ─── 글자 애니메이션 ─────────────────────────────
function animateLetters(targetEl, word) {
  targetEl.innerHTML = "";
  [...word].forEach((char, i) => {
    const span = document.createElement("span");
    span.className = "letter-pop";
    span.textContent = char;
    span.style.animationDelay = `${i * 50}ms`;
    targetEl.appendChild(span);
  });
}

// ─── 색종이 ─────────────────────────────────────
function spawnConfetti(count = 36) {
  const container = $("confetti-container");
  const colors = ["#fbbf24", "#f59e0b", "#10b981", "#34d399", "#60a5fa", "#a78bfa", "#f472b6", "#fb7185"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (1.6 + Math.random() * 1.2) + "s";
    piece.style.animationDelay = (Math.random() * 0.3) + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 3500);
  }
}

// ─── Kirby SVG ───────────────────────────────────
const KIRBY_SVG = `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="38" cy="100" rx="18" ry="11" fill="#e83a5a" stroke="#1a0d12" stroke-width="2.5" transform="rotate(-15 38 100)"/>
  <ellipse cx="82" cy="100" rx="18" ry="11" fill="#e83a5a" stroke="#1a0d12" stroke-width="2.5" transform="rotate(15 82 100)"/>
  <ellipse cx="14" cy="62" rx="11" ry="8" fill="#ffb3d1" stroke="#1a0d12" stroke-width="2"/>
  <ellipse cx="106" cy="62" rx="11" ry="8" fill="#ffb3d1" stroke="#1a0d12" stroke-width="2"/>
  <circle cx="60" cy="60" r="45" fill="#ffb3d1" stroke="#1a0d12" stroke-width="2.5"/>
  <ellipse cx="36" cy="68" rx="7" ry="4.5" fill="#ff6b95"/>
  <ellipse cx="84" cy="68" rx="7" ry="4.5" fill="#ff6b95"/>
  <ellipse cx="48" cy="52" rx="4" ry="9" fill="#1a0d2e"/>
  <ellipse cx="72" cy="52" rx="4" ry="9" fill="#1a0d2e"/>
  <ellipse cx="48" cy="46" rx="1.6" ry="3" fill="white"/>
  <ellipse cx="72" cy="46" rx="1.6" ry="3" fill="white"/>
  <ellipse cx="49" cy="56" rx="1" ry="1.5" fill="white"/>
  <ellipse cx="73" cy="56" rx="1" ry="1.5" fill="white"/>
  <path d="M 54 64 Q 60 70 66 64" fill="#cc3366" stroke="#1a0d12" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

// 30개 위치 (인덱스 0~6은 기본 배경, 7~29는 정답 시 추가)
const KIRBY_POSITIONS = [
  { top: "5%",    left: "2%",   size: 90, dur: 8 },
  { top: "12%",   right: "3%",  size: 70, dur: 10 },
  { bottom: "5%", left: "8%",   size: 65, dur: 11 },
  { bottom: "12%",right: "6%",  size: 55, dur: 6 },
  { top: "45%",   left: "1%",   size: 60, dur: 7,  hideMobile: true },
  { top: "55%",   right: "1%",  size: 80, dur: 9,  hideMobile: true },
  { top: "30%",   left: "85%",  size: 45, dur: 8,  hideMobile: true },
  { top: "20%",   left: "8%",   size: 50, dur: 7 },
  { top: "8%",    right: "20%", size: 45, dur: 9,  hideMobile: true },
  { top: "65%",   left: "5%",   size: 55, dur: 10, hideMobile: true },
  { top: "70%",   right: "8%",  size: 50, dur: 8 },
  { top: "32%",   right: "12%", size: 40, dur: 7,  hideMobile: true },
  { top: "78%",   left: "3%",   size: 45, dur: 11, hideMobile: true },
  { bottom: "22%",left: "3%",   size: 50, dur: 8 },
  { bottom: "20%",right: "15%", size: 42, dur: 9,  hideMobile: true },
  { top: "15%",   left: "30%",  size: 38, dur: 7,  hideMobile: true },
  { top: "85%",   right: "30%", size: 38, dur: 10, hideMobile: true },
  { top: "50%",   left: "12%",  size: 42, dur: 9,  hideMobile: true },
  { top: "60%",   left: "85%",  size: 40, dur: 11, hideMobile: true },
  { top: "25%",   left: "65%",  size: 45, dur: 8,  hideMobile: true },
  { bottom: "40%",left: "8%",   size: 48, dur: 7,  hideMobile: true },
  { bottom: "35%",right: "5%",  size: 52, dur: 10, hideMobile: true },
  { top: "10%",   right: "35%", size: 35, dur: 9,  hideMobile: true },
  { top: "75%",   left: "70%",  size: 38, dur: 8,  hideMobile: true },
  { top: "40%",   right: "30%", size: 40, dur: 11, hideMobile: true },
  { bottom: "30%",left: "70%",  size: 36, dur: 7,  hideMobile: true },
  { top: "5%",    right: "50%", size: 35, dur: 9,  hideMobile: true },
  { bottom: "8%", left: "40%",  size: 38, dur: 10, hideMobile: true },
  { top: "55%",   left: "60%",  size: 32, dur: 8,  hideMobile: true },
  { top: "35%",   left: "75%",  size: 45, dur: 7,  hideMobile: true }
];

// ─── Kirby 컬렉션 ────────────────────────────────
function getKirbyCount() {
  const v = localStorage.getItem(`kirbyCount_${state.childId}`);
  return v === null ? KIRBY_DEFAULT : Math.min(Math.max(parseInt(v), 0), KIRBY_MAX);
}
function setKirbyCount(n) {
  localStorage.setItem(`kirbyCount_${state.childId}`, String(Math.min(Math.max(n, 0), KIRBY_MAX)));
}
function createKirbyEl(p) {
  const k = document.createElement("div");
  k.className = "kirby" + (p.hideMobile ? " kirby-hide-mobile" : "");
  if (p.top !== undefined) k.style.top = p.top;
  if (p.bottom !== undefined) k.style.bottom = p.bottom;
  if (p.left !== undefined) k.style.left = p.left;
  if (p.right !== undefined) k.style.right = p.right;
  k.style.width = p.size + "px";
  k.style.height = p.size + "px";
  k.style.animationDuration = `${p.dur}s, ${p.dur * 0.6}s`;
  k.innerHTML = KIRBY_SVG;
  return k;
}
function spawnKirbys() {
  const layer = $("kirby-layer");
  layer.innerHTML = "";
  const count = state.childId ? getKirbyCount() : KIRBY_DEFAULT;
  for (let i = 0; i < count && i < KIRBY_POSITIONS.length; i++) {
    layer.appendChild(createKirbyEl(KIRBY_POSITIONS[i]));
  }
}
function addKirby() {
  let cur = getKirbyCount();
  if (cur >= KIRBY_MAX) return;
  cur++;
  setKirbyCount(cur);
  const p = KIRBY_POSITIONS[cur - 1];
  if (p) {
    const k = createKirbyEl(p);
    k.classList.add("kirby-arrive");
    $("kirby-layer").appendChild(k);
    setTimeout(() => k.classList.remove("kirby-arrive"), 1500);
  }
  updateKirbyCounter(true);
  if (cur === KIRBY_MAX) setTimeout(showKirby30, 1000);
}
function updateKirbyCounter(animate) {
  const counter = $("kirby-counter");
  if (!counter) return;
  const num = counter.querySelector(".kirby-counter-num");
  if (num) num.textContent = `${getKirbyCount()}/${KIRBY_MAX}`;
  if (animate) {
    counter.classList.remove("pulse");
    void counter.offsetWidth;
    counter.classList.add("pulse");
  }
}
function showKirby30() {
  spawnConfetti(150);
  const banner = document.createElement("div");
  banner.className = "kirby-30-banner";
  banner.innerHTML = `<div style="font-size:42px;margin-bottom:6px;">🎊</div><div>커비 30마리<br>모두 모았어요!</div>`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 3200);
}

// ─── 오늘의 단어 (가중치 + 일자별 캐시) ──────────
function cleanupOldDailyCaches() {
  const today = todayKey();
  const prefix = `todayWords_${state.childId}_`;
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && key.startsWith(prefix) && !key.endsWith("_" + today)) {
      localStorage.removeItem(key);
    }
  }
}
function getTodayWords(profile) {
  const today = todayKey();
  const cacheKey = `todayWords_${state.childId}_${state.profileId}_${today}`;
  const currentPool = getGradeWords(profile.currentGrade);
  const nextPool = profile.nextGrade ? getGradeWords(profile.nextGrade) : [];
  const allWords = [...currentPool, ...nextPool];
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const wordStrs = JSON.parse(cached);
      const result = wordStrs.map(s => allWords.find(w => w.word === s)).filter(Boolean);
      if (result.length === wordStrs.length) return result;
    } catch {}
  }
  let words;
  if (profile.nextGrade) {
    const review = weightedPick(currentPool, WORDS_PER_GRADE);
    const preview = weightedPick(nextPool, WORDS_PER_GRADE);
    words = shuffle([...review, ...preview]);
  } else {
    // 다음 학년이 없는 경우(G5 등): 전부 현재 학년에서
    words = weightedPick(currentPool, WORDS_PER_DAY);
  }
  localStorage.setItem(cacheKey, JSON.stringify(words.map(w => w.word)));
  cleanupOldDailyCaches();
  return words;
}

// ─── 아이 선택 → 학년 선택 → 홈 ────────────────
function renderChildren() {
  const list = $("children-list");
  if (!list) return;
  list.innerHTML = "";
  const children = getChildren();
  for (const c of children) {
    const btn = document.createElement("button");
    btn.className = "profile-btn";
    btn.dataset.childId = c.id;
    btn.innerHTML = `<div class="emoji-big">${c.emoji}</div><div>${c.name}</div>`;
    btn.addEventListener("click", () => selectChild(c.id));
    list.appendChild(btn);
  }
}
function selectChild(id) {
  const child = getChildren().find(c => c.id === id);
  if (!child) return;
  state.childId = id;
  state.child = child;
  $("grade-title").textContent = `${child.emoji} ${child.name}`;
  spawnKirbys();
  updateKirbyCounter();
  showScreen("profile");
}
function selectGrade(gradeId) {
  state.profileId = gradeId;
  state.profile = PROFILES[gradeId];
  state.todayWordsFull = getTodayWords(state.profile);
  state.activeWords = state.todayWordsFull;
  state.isReviewMode = false;
  const cn = `${state.child.emoji} ${state.child.name}`;
  $("home-title").textContent = state.profile.nextGrade
    ? `${cn} · ${state.profile.currentGrade} → ${state.profile.nextGrade}`
    : `${cn} · ${state.profile.currentGrade}`;
  showScreen("home");
}
function addChildPrompt() {
  const name = prompt("아이 이름을 입력하세요:");
  if (!name || !name.trim()) return;
  const emoji = (prompt("이모지 한 글자 (예: 👦 👧 🧒). 비워두면 🧑:") || "").trim() || "🧑";
  addChild(name, emoji);
  renderChildren();
}
function manageChildrenPrompt() {
  const children = getChildren();
  if (children.length === 0) { alert("등록된 아이가 없어요."); return; }
  const list = children.map((c, i) => `${i + 1}. ${c.emoji} ${c.name}`).join("\n");
  const idx = prompt(`삭제할 아이 번호를 입력하세요 (취소: 빈칸):\n\n${list}`);
  if (!idx) return;
  const n = parseInt(idx) - 1;
  if (isNaN(n) || n < 0 || n >= children.length) { alert("잘못된 번호예요."); return; }
  const target = children[n];
  if (!confirm(`정말 "${target.name}" (${target.emoji})를 삭제할까요?\n학습 기록과 모은 커비도 함께 사라집니다.`)) return;
  removeChild(target.id);
  renderChildren();
}

// ─── 학습 ────────────────────────────────────────
function startLearn() {
  state.activeWords = state.todayWordsFull;
  state.isReviewMode = false;
  state.learnIdx = 0;
  renderLearn(true);
  showScreen("learn");
}
function startReviewWrong() {
  if (state.testWrong.length === 0) return;
  state.activeWords = [...state.testWrong];
  state.isReviewMode = true;
  state.learnIdx = 0;
  renderLearn(true);
  showScreen("learn");
}
function renderLearn(firstRender) {
  const w = state.activeWords[state.learnIdx];
  const card = $("word-card");

  $("word-emoji").textContent = w.emoji;
  animateLetters($("word-text"), w.word);
  $("word-meaning").textContent = w.meaning;
  $("word-meaning-en").textContent = w.meaningEn;
  $("word-example-en").textContent = w.example;
  $("word-example-ko").textContent = w.exampleKo;

  const total = state.activeWords.length;
  $("learn-progress").textContent = `${state.learnIdx + 1}/${total}` + (state.isReviewMode ? " 🔁" : "");
  $("learn-bar").style.width = `${((state.learnIdx + 1) / total) * 100}%`;

  $("learn-prev").disabled = state.learnIdx === 0;
  const isLast = state.learnIdx === total - 1;
  $("learn-next").textContent = isLast
    ? (state.isReviewMode ? "다시 테스트 ▶" : "테스트 보기 ▶")
    : "다음 ▶";

  card.classList.remove("swipe-out-left", "swipe-out-right");
  if (!firstRender) card.classList.add("swipe-in-right");
  setTimeout(() => card.classList.remove("swipe-in-right"), 400);

  setTimeout(() => {
    speakSeq([
      { text: w.word, rate: 0.85, gap: 700 },
      { text: w.example, rate: 0.9, gap: 100 }
    ], $("speak-word"));
  }, 350);
}
function nextLearn() {
  if (state.learnIdx === state.activeWords.length - 1) { startTest(); return; }
  const card = $("word-card");
  card.classList.add("swipe-out-left");
  setTimeout(() => { state.learnIdx++; renderLearn(false); }, 280);
}
function prevLearn() {
  if (state.learnIdx === 0) return;
  const card = $("word-card");
  card.classList.add("swipe-out-right");
  setTimeout(() => {
    state.learnIdx--;
    renderLearn(false);
    card.classList.remove("swipe-in-right");
    card.classList.add("swipe-in-left");
    setTimeout(() => card.classList.remove("swipe-in-left"), 400);
  }, 280);
}

// ─── 테스트 ──────────────────────────────────────
function startTest() {
  const types = ["mc-meaning", "mc-word", "fill-blank", "spelling"];
  state.testQuestions = state.activeWords.map((w, i) => ({
    word: w,
    type: types[i % types.length],
    distractors: pickDistractors(w, 3)
  }));
  state.testQuestions = shuffle(state.testQuestions);
  state.testIdx = 0;
  state.testScore = 0;
  state.testWrong = [];
  updateKirbyCounter();
  renderTest();
  showScreen("test");
}
function pickDistractors(target, n) {
  const pool = state.profile.nextGrade
    ? [...getGradeWords(state.profile.currentGrade), ...getGradeWords(state.profile.nextGrade)]
    : [...getGradeWords(state.profile.currentGrade)];
  return shuffle(pool.filter(w => w.word !== target.word)).slice(0, n);
}
function renderTest() {
  if (state.testIdx >= state.testQuestions.length) return showResult();
  const q = state.testQuestions[state.testIdx];
  const total = state.testQuestions.length;
  $("test-progress").textContent = `${state.testIdx + 1}/${total}` + (state.isReviewMode ? " 🔁" : "");
  $("test-bar").style.width = `${((state.testIdx + 1) / total) * 100}%`;
  const c = $("test-content");
  c.innerHTML = "";
  ({ "mc-meaning": renderMcMeaning, "mc-word": renderMcWord, "fill-blank": renderFillBlank, "spelling": renderSpelling })[q.type](q, c);
}
function makeChoiceButton(html, isCorrect, q) {
  const btn = document.createElement("button");
  btn.className = "choice-btn";
  btn.innerHTML = html;
  btn.addEventListener("click", () => handleAnswer(isCorrect, q.word, btn));
  return btn;
}
function renderMcMeaning(q, c) {
  const choices = shuffle([q.word, ...q.distractors]);
  c.innerHTML = `
    <h2>이 단어의 뜻은?</h2>
    <div class="big-word">${q.word.word} <button class="speak-btn-small" id="speak-q">🔊</button></div>
    <div class="choices" id="choices"></div>`;
  $("speak-q").addEventListener("click", () => speakOne(q.word.word, 0.85, $("speak-q")));
  const box = $("choices");
  choices.forEach(ch => {
    const html = `<div class="choice-ko">${ch.meaning}</div><div class="choice-en">${ch.meaningEn}</div>`;
    box.appendChild(makeChoiceButton(html, ch.word === q.word.word, q));
  });
  setTimeout(() => speakOne(q.word.word, 0.85, $("speak-q")), 250);
}
function renderMcWord(q, c) {
  const choices = shuffle([q.word, ...q.distractors]);
  c.innerHTML = `
    <h2>이 뜻에 맞는 단어는?</h2>
    <div class="big-meaning">${q.word.meaning}<span class="meaning-en-inline">${q.word.meaningEn}</span></div>
    <div class="choices" id="choices"></div>`;
  const box = $("choices");
  choices.forEach(ch => box.appendChild(makeChoiceButton(`<div class="choice-ko">${ch.word}</div>`, ch.word === q.word.word, q)));
}
function renderFillBlank(q, c) {
  const re = new RegExp(`\\b${q.word.word}\\b`, "gi");
  const blanked = q.word.example.replace(re, "______");
  const choices = shuffle([q.word, ...q.distractors]);
  c.innerHTML = `
    <h2>빈칸에 들어갈 단어는?</h2>
    <div class="example-blank">${blanked} <button class="speak-btn-small" id="speak-ex">🔊</button></div>
    <div class="example-ko">${q.word.exampleKo}</div>
    <div class="choices" id="choices"></div>`;
  $("speak-ex").addEventListener("click", () => speakOne(blanked.replace(/______/g, "blank"), 0.9, $("speak-ex")));
  const box = $("choices");
  choices.forEach(ch => box.appendChild(makeChoiceButton(`<div class="choice-ko">${ch.word}</div>`, ch.word === q.word.word, q)));
}
function renderSpelling(q, c) {
  c.innerHTML = `
    <h2>듣고 스펠링을 써 보세요</h2>
    <div style="text-align:center;"><button class="speak-btn-big" id="play-spell">🔊 다시 듣기</button></div>
    <div class="hint">뜻: ${q.word.meaning}<span class="meaning-en-inline">${q.word.meaningEn}</span></div>
    <input type="text" id="spell-input" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="여기에 영어로 입력">
    <button class="big-btn" id="spell-submit">제출하기</button>`;
  $("play-spell").addEventListener("click", () => speakOne(q.word.word, 0.8, $("play-spell")));
  setTimeout(() => speakOne(q.word.word, 0.8, $("play-spell")), 250);
  const submit = () => {
    const v = $("spell-input").value.trim().toLowerCase();
    if (!v) return;
    handleAnswer(v === q.word.word.toLowerCase(), q.word, $("spell-submit"));
  };
  $("spell-submit").addEventListener("click", submit);
  $("spell-input").addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
  setTimeout(() => $("spell-input").focus(), 300);
}
function handleAnswer(correct, word, btn) {
  document.querySelectorAll(".choice-btn, #spell-submit, #spell-input").forEach(b => b.disabled = true);
  const q = state.testQuestions[state.testIdx];

  if (correct) {
    btn.classList.add("correct");
    state.testScore++;
    spawnConfetti(40);
    addKirby();
  } else {
    btn.classList.add("wrong");
    state.testWrong.push(word);
    document.querySelectorAll(".choice-btn").forEach(b => {
      const koText = b.querySelector(".choice-ko");
      if (koText && (koText.textContent === word.word || koText.textContent === word.meaning)) {
        b.classList.add("correct");
      }
    });
  }

  // 단어 통계 기록 (review 모드에서도 기록 → 가중치 갱신)
  recordWordResult(word.word, correct);

  const fb = document.createElement("div");
  fb.className = "feedback " + (correct ? "correct" : "wrong");
  fb.innerHTML = (correct
    ? `✅ 정답! <strong>${word.word}</strong> = ${word.meaning}`
    : `❌ 정답: <strong>${word.word}</strong> = ${word.meaning}`)
    + `<span class="meaning-en-inline">${word.meaningEn}</span>`;
  $("test-content").appendChild(fb);

  speakOne(word.word, 0.85);

  const delay = (q.type === "spelling" && !correct) ? 4500 : 1900;
  setTimeout(() => { state.testIdx++; renderTest(); }, delay);
}

// ─── 결과 ────────────────────────────────────────
function showResult() {
  const total = state.testQuestions.length;
  const ratio = state.testScore / total;
  $("result-score").textContent = `${state.testScore} / ${total}`;
  $("result-title").textContent = ratio === 1 ? "🌟 완벽해요!" : ratio >= 0.7 ? "🎉 잘 했어요!" : "💪 다시 도전!";
  if (ratio >= 0.7) setTimeout(() => spawnConfetti(80), 200);

  const w = $("result-wrong");
  if (state.testWrong.length === 0) {
    w.innerHTML = "<h3>모든 단어 정답! 🌟</h3>";
  } else {
    w.innerHTML = "<h3>다시 살펴볼 단어</h3>" + state.testWrong.map(x => `
      <div class="wrong-item">
        <span class="emoji">${x.emoji}</span>
        <span>
          <span class="word">${x.word}</span>
          <span class="meaning">${x.meaning}</span>
          <span class="meaning-en">${x.meaningEn}</span>
        </span>
      </div>`).join("");
  }
  $("review-wrong").style.display = state.testWrong.length > 0 ? "block" : "none";
  if (!state.isReviewMode) saveProgress();
  showScreen("result");
}

// ─── 진도 저장 ───────────────────────────────────
function progressKey() { return `vocab_progress_${state.childId}`; }
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(progressKey()) || "{}"); }
  catch { return {}; }
}
function saveProgress() {
  const data = loadProgress();
  data.history = data.history || [];
  data.history.push({ date: todayKey(), score: state.testScore, total: state.testQuestions.length });
  localStorage.setItem(progressKey(), JSON.stringify(data));
}

// ─── 학습 기록 ───────────────────────────────────
function showStats() {
  const data = loadProgress();
  const stats = getStats();
  const c = $("stats-content");
  let html = "";

  if (!data.history || data.history.length === 0) {
    html = `<div class="stat-card"><h3>아직 기록이 없어요</h3><p>오늘의 테스트를 풀어 보세요!</p></div>`;
  } else {
    const total = data.history.length;
    const avg = data.history.reduce((s, h) => s + h.score, 0) / total;
    const maxScore = Math.max(...data.history.map(h => h.score));
    html = `
      <div class="stat-card">
        <h3>${total}회 학습</h3>
        <p>평균: <strong>${avg.toFixed(1)}점</strong> · 최고: <strong>${maxScore}점</strong></p>
        <p>모은 커비: <strong>${getKirbyCount()}/${KIRBY_MAX}</strong> 🎀</p>
      </div>
      <h3>📅 최근 기록</h3>
      ${data.history.slice(-10).reverse().map(h => `<div class="history-item">${h.date} — ${h.score}/${h.total}점</div>`).join("")}
    `;
  }

  // 자주 틀린 단어 (가중치 학습용)
  const weakSorted = Object.entries(stats)
    .filter(([_, s]) => s.wrong > 0)
    .sort((a, b) => (b[1].wrong - b[1].correct) - (a[1].wrong - a[1].correct))
    .slice(0, 10);
  if (weakSorted.length > 0) {
    html += "<h3>🔁 자주 틀린 단어 (다음 학습에 더 자주 나옵니다)</h3>" +
      weakSorted.map(([w, s]) => `<div class="weak-item">${w} — 틀림 ${s.wrong}회 / 맞음 ${s.correct}회</div>`).join("");
  }

  c.innerHTML = html;
  showScreen("stats");
}

// ─── 단어 추가 (사용자 import) ──────────────────
function parseImport(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const ok = [];
  const skipped = [];
  for (const line of lines) {
    if (line.startsWith("#") || line.startsWith("//")) continue;
    const parts = line.split("|").map(p => p.trim());
    if (parts.length < 5) { skipped.push(line); continue; }
    const [word, meaning, meaningEn, example, exampleKo, emoji] = parts;
    if (!word || !meaning || !meaningEn || !example) { skipped.push(line); continue; }
    ok.push({
      word, meaning, meaningEn, example,
      exampleKo: exampleKo || "",
      emoji: emoji || "📘"
    });
  }
  return { ok, skipped };
}
function importWords() {
  const grade = $("import-grade").value;
  const text = $("import-text").value;
  const { ok, skipped } = parseImport(text);
  if (ok.length === 0) {
    $("import-result").innerHTML = `<div class="import-error">유효한 단어가 없어요. 형식을 다시 확인해 주세요.<br>(영단어|뜻|영어풀이|예문|한글번역|이모지 — | 5개 이상 필요)</div>`;
    return;
  }
  const existing = JSON.parse(localStorage.getItem(`customVocab_${grade}`) || "[]");
  const seen = new Set(existing.map(w => w.word.toLowerCase()));
  const builtin = new Set((VOCABULARY[grade] || []).map(w => w.word.toLowerCase()));
  const newOnes = ok.filter(w => {
    const lw = w.word.toLowerCase();
    return !seen.has(lw) && !builtin.has(lw);
  });
  const merged = [...existing, ...newOnes];
  localStorage.setItem(`customVocab_${grade}`, JSON.stringify(merged));
  const total = getGradeWords(grade).length;
  $("import-result").innerHTML = `
    <div class="import-success">
      ✅ <strong>${newOnes.length}개</strong> 추가 완료!
      ${ok.length - newOnes.length > 0 ? `<br>중복 ${ok.length - newOnes.length}개 건너뜀` : ""}
      ${skipped.length > 0 ? `<br>형식 오류 ${skipped.length}개 건너뜀` : ""}
      <br>${grade} 총 단어: <strong>${total}개</strong>
    </div>`;
  $("import-text").value = "";
  updateImportStats();
}
function updateImportStats() {
  const c = $("import-stats");
  if (!c) return;
  const grades = ["G1", "G2", "G3", "G4", "G5"];
  let grandTotal = 0;
  const rows = grades.map(g => {
    const builtinN = (VOCABULARY[g] || []).length;
    let customN = 0;
    try { customN = JSON.parse(localStorage.getItem(`customVocab_${g}`) || "[]").length; } catch {}
    const total = builtinN + customN;
    grandTotal += total;
    return `<div class="stat-row">${g}: 기본 ${builtinN} + 추가 ${customN} = <strong>${total}개</strong></div>`;
  }).join("");
  c.innerHTML = `<h3>현재 단어 풀 (전체 ${grandTotal}개)</h3>` + rows;
}
function copyImportPrompt() {
  const text = $("import-prompt").textContent;
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = $("copy-prompt");
    const old = btn.textContent;
    btn.textContent = "✅ 복사됨!";
    setTimeout(() => { btn.textContent = old; }, 1500);
  });
}

// ─── 이벤트 바인딩 ──────────────────────────────
function init() {
  spawnKirbys();
  const counterIcon = document.querySelector("#kirby-counter .kirby-counter-icon");
  if (counterIcon) counterIcon.innerHTML = KIRBY_SVG;

  // 학년 버튼 (data-profile 속성을 가진 것만)
  document.querySelectorAll(".profile-btn[data-profile]").forEach(btn => {
    btn.addEventListener("click", () => selectGrade(btn.dataset.profile));
  });
  $("add-child-btn").addEventListener("click", addChildPrompt);
  $("manage-child-btn").addEventListener("click", manageChildrenPrompt);
  renderChildren();
  document.querySelectorAll("[data-go]").forEach(btn => {
    btn.addEventListener("click", () => {
      speechSynthesis.cancel();
      const dest = btn.dataset.go;
      if (dest === "home") {
        state.isReviewMode = false;
        state.activeWords = state.todayWordsFull;
      }
      if (dest === "child") {
        // 아이 화면으로 돌아갈 때는 자녀/학년 상태 리셋
        state.childId = null;
        state.child = null;
        state.profileId = null;
        state.profile = null;
        renderChildren();
      }
      showScreen(dest);
    });
  });
  $("btn-learn").addEventListener("click", startLearn);
  $("btn-test").addEventListener("click", startTest);
  $("btn-stats").addEventListener("click", showStats);
  $("btn-import").addEventListener("click", () => {
    updateImportStats();
    showScreen("import");
  });
  $("import-go").addEventListener("click", importWords);
  $("copy-prompt").addEventListener("click", copyImportPrompt);
  $("review-wrong").addEventListener("click", startReviewWrong);
  $("speak-word").addEventListener("click", () => {
    const w = state.activeWords[state.learnIdx];
    if (w) speakOne(w.word, 0.85, $("speak-word"));
  });
  $("speak-example").addEventListener("click", () => {
    const w = state.activeWords[state.learnIdx];
    if (w) speakOne(w.example, 0.9, $("speak-example"));
  });
  $("learn-prev").addEventListener("click", prevLearn);
  $("learn-next").addEventListener("click", nextLearn);
}

document.addEventListener("DOMContentLoaded", init);
