'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── 상수 ─────────────────────────────────────
const PROFILES = {
  g1: { name: 'Grade 1', emoji: '🌱', currentGrade: 'G1', nextGrade: 'G2' },
  g2: { name: 'Grade 2', emoji: '🌿', currentGrade: 'G2', nextGrade: 'G3' },
  g3: { name: 'Grade 3', emoji: '🌳', currentGrade: 'G3', nextGrade: 'G4' },
  g4: { name: 'Grade 4', emoji: '🌲', currentGrade: 'G4', nextGrade: 'G5' },
  g5: { name: 'Grade 5', emoji: '🎓', currentGrade: 'G5', nextGrade: null },
};

const WORDS_PER_DAY = 20;
const WORDS_PER_GRADE = 10;
const KIRBY_MAX = 30;
const KIRBY_DEFAULT = 7;

const DEFAULT_CHILDREN = [
  { id: 'child_son', name: '아들', emoji: '👦' },
  { id: 'child_daughter', name: '딸', emoji: '👧' },
];

const KIRBY_SVG = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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

const KIRBY_POSITIONS = [
  { top: '5%', left: '2%', size: 90, dur: 8 },
  { top: '12%', right: '3%', size: 70, dur: 10 },
  { bottom: '5%', left: '8%', size: 65, dur: 11 },
  { bottom: '12%', right: '6%', size: 55, dur: 6 },
  { top: '45%', left: '1%', size: 60, dur: 7, hideMobile: true },
  { top: '55%', right: '1%', size: 80, dur: 9, hideMobile: true },
  { top: '30%', left: '85%', size: 45, dur: 8, hideMobile: true },
  { top: '20%', left: '8%', size: 50, dur: 7 },
  { top: '8%', right: '20%', size: 45, dur: 9, hideMobile: true },
  { top: '65%', left: '5%', size: 55, dur: 10, hideMobile: true },
  { top: '70%', right: '8%', size: 50, dur: 8 },
  { top: '32%', right: '12%', size: 40, dur: 7, hideMobile: true },
  { top: '78%', left: '3%', size: 45, dur: 11, hideMobile: true },
  { bottom: '22%', left: '3%', size: 50, dur: 8 },
  { bottom: '20%', right: '15%', size: 42, dur: 9, hideMobile: true },
  { top: '15%', left: '30%', size: 38, dur: 7, hideMobile: true },
  { top: '85%', right: '30%', size: 38, dur: 10, hideMobile: true },
  { top: '50%', left: '12%', size: 42, dur: 9, hideMobile: true },
  { top: '60%', left: '85%', size: 40, dur: 11, hideMobile: true },
  { top: '25%', left: '65%', size: 45, dur: 8, hideMobile: true },
  { bottom: '40%', left: '8%', size: 48, dur: 7, hideMobile: true },
  { bottom: '35%', right: '5%', size: 52, dur: 10, hideMobile: true },
  { top: '10%', right: '35%', size: 35, dur: 9, hideMobile: true },
  { top: '75%', left: '70%', size: 38, dur: 8, hideMobile: true },
  { top: '40%', right: '30%', size: 40, dur: 11, hideMobile: true },
  { bottom: '30%', left: '70%', size: 36, dur: 7, hideMobile: true },
  { top: '5%', right: '50%', size: 35, dur: 9, hideMobile: true },
  { bottom: '8%', left: '40%', size: 38, dur: 10, hideMobile: true },
  { top: '55%', left: '60%', size: 32, dur: 8, hideMobile: true },
  { top: '35%', left: '75%', size: 45, dur: 7, hideMobile: true },
];

// ─── 순수 함수 ────────────────────────────────
function todayKey() { return new Date().toISOString().slice(0, 10); }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function getGradeWords(grade) {
  if (typeof window === 'undefined' || !window.VOCABULARY) return [];
  const builtin = window.VOCABULARY[grade] || [];
  let custom = [];
  try { custom = JSON.parse(localStorage.getItem(`customVocab_${grade}`) || '[]'); } catch {}
  const seen = new Set(builtin.map(w => w.word.toLowerCase()));
  const unique = custom.filter(w => w && w.word && !seen.has(w.word.toLowerCase()));
  return [...builtin, ...unique];
}
function getWordWeight(childId, wordStr) {
  if (typeof window === 'undefined') return 1;
  const stats = JSON.parse(localStorage.getItem(`wordStats_${childId}`) || '{}');
  const s = stats[wordStr] || { wrong: 0, correct: 0 };
  return Math.max(0.3, 1 + s.wrong * 3 - s.correct * 0.4);
}
function weightedPick(childId, pool, n) {
  const items = pool.map(w => ({ w, weight: getWordWeight(childId, w.word) }));
  const result = [];
  while (result.length < n && items.length > 0) {
    const total = items.reduce((s, x) => s + x.weight, 0);
    let r = Math.random() * total;
    for (let i = 0; i < items.length; i++) {
      r -= items[i].weight;
      if (r <= 0) { result.push(items[i].w); items.splice(i, 1); break; }
    }
  }
  return result;
}

// ─── 메인 컴포넌트 ─────────────────────────────
export default function App() {
  const [vocabReady, setVocabReady] = useState(false);
  const [screen, setScreen] = useState('child');
  const [children, setChildren] = useState([]);
  const [child, setChild] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [todayWordsFull, setTodayWordsFull] = useState([]);
  const [activeWords, setActiveWords] = useState([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [learnIdx, setLearnIdx] = useState(0);
  const [testQuestions, setTestQuestions] = useState([]);
  const [testIdx, setTestIdx] = useState(0);
  const [testScore, setTestScore] = useState(0);
  const [testWrong, setTestWrong] = useState([]);
  const [kirbyCount, setKirbyCountState] = useState(KIRBY_DEFAULT);
  const [kirbyPulse, setKirbyPulse] = useState(false);
  const [counterPulseKey, setCounterPulseKey] = useState(0);
  const [arrivedKirbyIdx, setArrivedKirbyIdx] = useState(null);
  const [showBanner30, setShowBanner30] = useState(false);

  const profile = profileId ? PROFILES[profileId] : null;
  const confettiRef = useRef(null);
  const playingBtnRef = useRef(null);
  const speakQueueRef = useRef([]);

  // 단어 데이터 로드 대기
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.VOCABULARY) { setVocabReady(true); return; }
    const t = setInterval(() => { if (window.VOCABULARY) { setVocabReady(true); clearInterval(t); } }, 100);
    return () => clearInterval(t);
  }, []);

  // 아이 목록 로드
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let saved;
    try { saved = JSON.parse(localStorage.getItem('children') || 'null'); } catch {}
    if (Array.isArray(saved) && saved.length > 0) setChildren(saved);
    else { setChildren(DEFAULT_CHILDREN); localStorage.setItem('children', JSON.stringify(DEFAULT_CHILDREN)); }
  }, []);

  // 커비 카운터 갱신 (아이 선택 시)
  useEffect(() => {
    if (!child) { setKirbyCountState(KIRBY_DEFAULT); return; }
    const v = localStorage.getItem(`kirbyCount_${child.id}`);
    setKirbyCountState(v === null ? KIRBY_DEFAULT : Math.min(Math.max(parseInt(v), 0), KIRBY_MAX));
  }, [child]);

  // ─── 발음 ────────────────────────────────
  const speakSeq = useCallback((items, btnId) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    speakQueueRef.current = [...items];
    playingBtnRef.current = btnId;
    setKirbyPulse(true); // dummy state to trigger render
    const playNext = () => {
      if (speakQueueRef.current.length === 0) {
        playingBtnRef.current = null;
        document.querySelectorAll('.playing').forEach(el => el.classList.remove('playing'));
        return;
      }
      const item = speakQueueRef.current.shift();
      const u = new SpeechSynthesisUtterance(item.text);
      u.lang = 'en-US';
      u.rate = item.rate || 0.85;
      u.onend = () => setTimeout(playNext, item.gap || 100);
      u.onerror = () => setTimeout(playNext, 50);
      speechSynthesis.speak(u);
    };
    if (btnId) {
      setTimeout(() => {
        const el = document.getElementById(btnId);
        if (el) el.classList.add('playing');
      }, 0);
    }
    playNext();
  }, []);
  const speakOne = useCallback((text, rate, btnId) => speakSeq([{ text, rate: rate || 0.85 }], btnId), [speakSeq]);

  // ─── 색종이 ──────────────────────────────
  const spawnConfetti = useCallback((count = 36) => {
    const container = confettiRef.current;
    if (!container) return;
    const colors = ['#fbbf24', '#f59e0b', '#10b981', '#34d399', '#60a5fa', '#a78bfa', '#f472b6', '#fb7185'];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (1.6 + Math.random() * 1.2) + 's';
      piece.style.animationDelay = (Math.random() * 0.3) + 's';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(piece);
      setTimeout(() => piece.remove(), 3500);
    }
  }, []);

  // ─── 커비 ────────────────────────────────
  const addKirby = useCallback(() => {
    if (!child) return;
    const cur = kirbyCount;
    if (cur >= KIRBY_MAX) return;
    const next = cur + 1;
    localStorage.setItem(`kirbyCount_${child.id}`, String(next));
    setKirbyCountState(next);
    setArrivedKirbyIdx(next - 1);
    setTimeout(() => setArrivedKirbyIdx(null), 1500);
    setCounterPulseKey(k => k + 1);
    if (next === KIRBY_MAX) {
      setTimeout(() => {
        spawnConfetti(150);
        setShowBanner30(true);
        setTimeout(() => setShowBanner30(false), 3200);
      }, 1000);
    }
  }, [child, kirbyCount, spawnConfetti]);

  // ─── 글자 애니메이션 ─────────────────────
  const renderLetters = (word) =>
    [...word].map((c, i) => (
      <span key={i} className="letter-pop" style={{ animationDelay: `${i * 50}ms` }}>{c}</span>
    ));

  // ─── 오늘의 단어 캐시/계산 ───────────────
  const computeTodayWords = useCallback((p, ch) => {
    if (!ch) return [];
    const today = todayKey();
    const cacheKey = `todayWords_${ch.id}_${profileId}_${today}`;
    const currentPool = getGradeWords(p.currentGrade);
    const nextPool = p.nextGrade ? getGradeWords(p.nextGrade) : [];
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
    if (p.nextGrade) {
      const review = weightedPick(ch.id, currentPool, WORDS_PER_GRADE);
      const preview = weightedPick(ch.id, nextPool, WORDS_PER_GRADE);
      words = shuffle([...review, ...preview]);
    } else {
      words = weightedPick(ch.id, currentPool, WORDS_PER_DAY);
    }
    localStorage.setItem(cacheKey, JSON.stringify(words.map(w => w.word)));
    // 오래된 캐시 정리
    const prefix = `todayWords_${ch.id}_`;
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix) && !k.endsWith('_' + today)) localStorage.removeItem(k);
    }
    return words;
  }, [profileId]);

  // ─── 핸들러 ──────────────────────────────
  const goChildScreen = () => {
    speechSynthesis?.cancel();
    setChild(null); setProfileId(null);
    setIsReviewMode(false);
    setScreen('child');
  };
  const goHomeScreen = () => {
    speechSynthesis?.cancel();
    setIsReviewMode(false);
    setActiveWords(todayWordsFull);
    setScreen('home');
  };

  const selectChild = (id) => {
    const c = children.find(x => x.id === id);
    if (!c) return;
    setChild(c);
    setScreen('grade');
  };

  const selectGrade = (gid) => {
    setProfileId(gid);
    const p = PROFILES[gid];
    const words = computeTodayWords(p, child);
    setTodayWordsFull(words);
    setActiveWords(words);
    setIsReviewMode(false);
    setScreen('home');
  };

  const startLearn = () => {
    setActiveWords(todayWordsFull);
    setIsReviewMode(false);
    setLearnIdx(0);
    setScreen('learn');
  };
  const startReviewWrong = () => {
    if (testWrong.length === 0) return;
    setActiveWords([...testWrong]);
    setIsReviewMode(true);
    setLearnIdx(0);
    setScreen('learn');
  };

  const TYPES = ['mc-meaning', 'mc-word', 'fill-blank', 'spelling'];
  const pickDistractors = useCallback((target, n) => {
    if (!profile) return [];
    const pool = profile.nextGrade
      ? [...getGradeWords(profile.currentGrade), ...getGradeWords(profile.nextGrade)]
      : [...getGradeWords(profile.currentGrade)];
    return shuffle(pool.filter(w => w.word !== target.word)).slice(0, n);
  }, [profile]);

  const startTest = () => {
    const qs = activeWords.map((w, i) => ({
      word: w,
      type: TYPES[i % TYPES.length],
      distractors: pickDistractors(w, 3),
    }));
    setTestQuestions(shuffle(qs));
    setTestIdx(0);
    setTestScore(0);
    setTestWrong([]);
    setScreen('test');
  };

  const recordWordResult = (childId, wordStr, correct) => {
    const k = `wordStats_${childId}`;
    const stats = JSON.parse(localStorage.getItem(k) || '{}');
    if (!stats[wordStr]) stats[wordStr] = { wrong: 0, correct: 0 };
    if (correct) stats[wordStr].correct++;
    else stats[wordStr].wrong++;
    localStorage.setItem(k, JSON.stringify(stats));
  };

  const handleAnswer = (correct, wordObj, qType) => {
    if (correct) {
      setTestScore(s => s + 1);
      spawnConfetti(40);
      addKirby();
    } else {
      setTestWrong(w => [...w, wordObj]);
    }
    if (child) recordWordResult(child.id, wordObj.word, correct);
    speakOne(wordObj.word, 0.85);
    const delay = (qType === 'spelling' && !correct) ? 4500 : 1900;
    setTimeout(() => setTestIdx(i => i + 1), delay);
  };

  // 테스트 인덱스 변경 시 결과로 이동
  useEffect(() => {
    if (screen !== 'test') return;
    if (testIdx >= testQuestions.length && testQuestions.length > 0) {
      // 결과 저장
      if (!isReviewMode && child) {
        const k = `vocab_progress_${child.id}`;
        const data = JSON.parse(localStorage.getItem(k) || '{}');
        data.history = data.history || [];
        data.history.push({ date: todayKey(), score: testScore, total: testQuestions.length });
        localStorage.setItem(k, JSON.stringify(data));
      }
      setScreen('result');
    }
  }, [testIdx, testQuestions.length, screen, isReviewMode, child, testScore]);

  // 학년 화면 진입 시 자동 로딩
  useEffect(() => {
    if (screen === 'home' && profile && child && todayWordsFull.length === 0) {
      const words = computeTodayWords(profile, child);
      setTodayWordsFull(words);
      setActiveWords(words);
    }
  }, [screen, profile, child, todayWordsFull.length, computeTodayWords]);

  // 학습 카드의 자동 발음
  const learnWord = activeWords[learnIdx];
  useEffect(() => {
    if (screen !== 'learn' || !learnWord) return;
    const t = setTimeout(() => {
      speakSeq([
        { text: learnWord.word, rate: 0.85, gap: 700 },
        { text: learnWord.example, rate: 0.9, gap: 100 },
      ], 'speak-word');
    }, 350);
    return () => clearTimeout(t);
  }, [learnIdx, screen, learnWord, speakSeq]);

  const nextLearn = () => {
    if (learnIdx === activeWords.length - 1) { startTest(); return; }
    setLearnIdx(i => i + 1);
  };
  const prevLearn = () => { if (learnIdx > 0) setLearnIdx(i => i - 1); };

  // ─── 아이 추가/관리 ─────────────────────
  const addChildPrompt = () => {
    const name = prompt('아이 이름을 입력하세요:');
    if (!name || !name.trim()) return;
    const emoji = (prompt('이모지 한 글자 (예: 👦 👧 🧒). 비워두면 🧑:') || '').trim() || '🧑';
    const list = [...children, { id: 'child_' + Date.now(), name: name.trim(), emoji }];
    setChildren(list);
    localStorage.setItem('children', JSON.stringify(list));
  };
  const manageChildrenPrompt = () => {
    if (children.length === 0) { alert('등록된 아이가 없어요.'); return; }
    const list = children.map((c, i) => `${i + 1}. ${c.emoji} ${c.name}`).join('\n');
    const idx = prompt(`삭제할 아이 번호를 입력하세요 (취소: 빈칸):\n\n${list}`);
    if (!idx) return;
    const n = parseInt(idx) - 1;
    if (isNaN(n) || n < 0 || n >= children.length) { alert('잘못된 번호예요.'); return; }
    const target = children[n];
    if (!confirm(`정말 "${target.name}" (${target.emoji})를 삭제할까요?\n학습 기록과 모은 커비도 함께 사라집니다.`)) return;
    const newList = children.filter(c => c.id !== target.id);
    setChildren(newList);
    localStorage.setItem('children', JSON.stringify(newList));
    ['kirbyCount_', 'wordStats_', 'vocab_progress_'].forEach(p => localStorage.removeItem(p + target.id));
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith(`todayWords_${target.id}_`)) localStorage.removeItem(k);
    }
  };

  // ─── Kirby 카운터 펄스 트리거 ────────────
  useEffect(() => {
    if (counterPulseKey === 0) return;
    const el = document.getElementById('kirby-counter');
    if (!el) return;
    el.classList.remove('pulse');
    void el.offsetWidth;
    el.classList.add('pulse');
  }, [counterPulseKey]);

  // ─── 렌더 ────────────────────────────────
  if (!vocabReady) {
    return (
      <>
        <div className="bg-sparkle" />
        <div id="app">
          <h1 style={{ color: 'white', textAlign: 'center', marginTop: 60 }}>단어 데이터 로딩 중...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-sparkle" />
      <KirbyLayer count={kirbyCount} arrivedIdx={arrivedKirbyIdx} />
      <div id="confetti-container" ref={confettiRef} />
      {showBanner30 && (
        <div className="kirby-30-banner">
          <div style={{ fontSize: 42, marginBottom: 6 }}>🎊</div>
          <div>커비 30마리<br />모두 모았어요!</div>
        </div>
      )}

      <div id="app">
        {screen === 'child' && (
          <ChildScreen
            children={children}
            onSelect={selectChild}
            onAdd={addChildPrompt}
            onManage={manageChildrenPrompt}
          />
        )}
        {screen === 'grade' && child && (
          <GradeScreen child={child} onBack={goChildScreen} onSelect={selectGrade} />
        )}
        {screen === 'home' && profile && child && (
          <HomeScreen
            child={child}
            profile={profile}
            kirbyCount={kirbyCount}
            onBack={() => setScreen('grade')}
            onLearn={startLearn}
            onTest={startTest}
            onStats={() => setScreen('stats')}
            onImport={() => setScreen('import')}
          />
        )}
        {screen === 'learn' && learnWord && (
          <LearnScreen
            word={learnWord}
            idx={learnIdx}
            total={activeWords.length}
            isReviewMode={isReviewMode}
            kirbyCount={kirbyCount}
            renderLetters={renderLetters}
            onBack={goHomeScreen}
            onPrev={prevLearn}
            onNext={nextLearn}
            onSpeakWord={() => speakOne(learnWord.word, 0.85, 'speak-word')}
            onSpeakExample={() => speakOne(learnWord.example, 0.9, 'speak-example')}
          />
        )}
        {screen === 'test' && testQuestions[testIdx] && (
          <TestScreen
            question={testQuestions[testIdx]}
            idx={testIdx}
            total={testQuestions.length}
            isReviewMode={isReviewMode}
            kirbyCount={kirbyCount}
            onBack={goHomeScreen}
            onAnswer={handleAnswer}
            speakOne={speakOne}
          />
        )}
        {screen === 'result' && (
          <ResultScreen
            score={testScore}
            total={testQuestions.length}
            wrong={testWrong}
            spawnConfetti={spawnConfetti}
            onReview={startReviewWrong}
            onHome={goHomeScreen}
          />
        )}
        {screen === 'stats' && (
          <StatsScreen child={child} kirbyCount={kirbyCount} onBack={() => setScreen('home')} />
        )}
        {screen === 'import' && (
          <ImportScreen onBack={() => setScreen('home')} />
        )}
      </div>
    </>
  );
}

// ─── Kirby 레이어 ──────────────────────────
function KirbyLayer({ count, arrivedIdx }) {
  return (
    <div id="kirby-layer">
      {Array.from({ length: Math.min(count, KIRBY_POSITIONS.length) }).map((_, i) => {
        const p = KIRBY_POSITIONS[i];
        const style = {
          width: p.size + 'px', height: p.size + 'px',
          animationDuration: `${p.dur}s, ${p.dur * 0.6}s`,
        };
        if (p.top !== undefined) style.top = p.top;
        if (p.bottom !== undefined) style.bottom = p.bottom;
        if (p.left !== undefined) style.left = p.left;
        if (p.right !== undefined) style.right = p.right;
        return (
          <div
            key={i}
            className={'kirby' + (p.hideMobile ? ' kirby-hide-mobile' : '') + (i === arrivedIdx ? ' kirby-arrive' : '')}
            style={style}
            dangerouslySetInnerHTML={{ __html: KIRBY_SVG }}
          />
        );
      })}
    </div>
  );
}

// ─── 화면 컴포넌트들 ──────────────────────
function ChildScreen({ children, onSelect, onAdd, onManage }) {
  return (
    <section className="screen active screen-child">
      <h1>👋 누가 공부할까요?</h1>
      <div className="profile-buttons">
        {children.map(c => (
          <button key={c.id} className="profile-btn" onClick={() => onSelect(c.id)}>
            <div className="emoji-big">{c.emoji}</div>
            <div>{c.name}</div>
          </button>
        ))}
      </div>
      <button className="add-child-btn" onClick={onAdd}>＋ 아이 추가</button>
      <button className="manage-child-btn" onClick={onManage}>아이 관리</button>
    </section>
  );
}

function GradeScreen({ child, onBack, onSelect }) {
  return (
    <section className="screen active screen-profile">
      <header className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="title">{child.emoji} {child.name}</div>
      </header>
      <h1 style={{ textAlign: 'center', marginBottom: 18 }}>어떤 학년을 공부할까요?</h1>
      <div className="profile-buttons grade-grid">
        {Object.entries(PROFILES).map(([id, p]) => (
          <button key={id} className="profile-btn" onClick={() => onSelect(id)}>
            <div className="emoji-big">{p.emoji}</div>
            <div>{p.name}</div>
            <div className="sub-grade">{p.nextGrade ? `${p.currentGrade} → ${p.nextGrade} 미리보기` : `${p.currentGrade} 집중`}</div>
          </button>
        ))}
      </div>
    </section>
  );
}

function HomeScreen({ child, profile, onBack, onLearn, onTest, onStats, onImport }) {
  const titleText = profile.nextGrade
    ? `${child.emoji} ${child.name} · ${profile.currentGrade} → ${profile.nextGrade}`
    : `${child.emoji} ${child.name} · ${profile.currentGrade}`;
  return (
    <section className="screen active">
      <header className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="title">{titleText}</div>
      </header>
      <div className="menu">
        <button className="menu-btn" onClick={onLearn}>
          <div className="emoji-big">📚</div>
          <div>오늘의 단어 배우기</div>
          <div className="sub">20단어 (10 복습 + 10 예습)</div>
        </button>
        <button className="menu-btn" onClick={onTest}>
          <div className="emoji-big">✏️</div>
          <div>오늘 단어 테스트</div>
          <div className="sub">4가지 형식의 문제</div>
        </button>
        <button className="menu-btn" onClick={onStats}>
          <div className="emoji-big">📊</div>
          <div>학습 기록 보기</div>
        </button>
        <button className="menu-btn" onClick={onImport}>
          <div className="emoji-big">📥</div>
          <div>단어 추가하기</div>
          <div className="sub">학습 풀을 직접 늘리기</div>
        </button>
      </div>
    </section>
  );
}

function KirbyCounter({ count }) {
  return (
    <div className="kirby-counter" id="kirby-counter">
      <span className="kirby-counter-icon" dangerouslySetInnerHTML={{ __html: KIRBY_SVG }} />
      <span className="kirby-counter-num">{count}/{KIRBY_MAX}</span>
    </div>
  );
}

function LearnScreen({ word, idx, total, isReviewMode, kirbyCount, renderLetters, onBack, onPrev, onNext, onSpeakWord, onSpeakExample }) {
  const isLast = idx === total - 1;
  const pct = ((idx + 1) / total) * 100;
  const nextLabel = isLast ? (isReviewMode ? '다시 테스트 ▶' : '테스트 보기 ▶') : '다음 ▶';
  return (
    <section className="screen active">
      <header className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="progress">{idx + 1}/{total}{isReviewMode ? ' 🔁' : ''}</div>
      </header>
      <div className="progress-bar"><div className="progress-fill" style={{ width: pct + '%' }} /></div>
      <div className="word-card" key={idx}>
        <div className="word-emoji">{word.emoji}</div>
        <div className="word-text">{renderLetters(word.word)}</div>
        <button id="speak-word" className="speak-btn" onClick={onSpeakWord}>🔊</button>
        <div className="word-meaning">{word.meaning}</div>
        <div className="word-meaning-en">{word.meaningEn}</div>
        <div className="word-example-row">
          <div className="word-example">{word.example}</div>
          <button id="speak-example" className="speak-btn-tiny" onClick={onSpeakExample}>🔊</button>
        </div>
        <div className="word-example-ko">{word.exampleKo}</div>
      </div>
      <div className="nav-buttons">
        <button className="btn-prev" onClick={onPrev} disabled={idx === 0}>◀ 이전</button>
        <button className="btn-next" onClick={onNext}>{nextLabel}</button>
      </div>
    </section>
  );
}

function TestScreen({ question, idx, total, isReviewMode, kirbyCount, onBack, onAnswer, speakOne }) {
  const [answered, setAnswered] = useState(false);
  const [pickedCorrect, setPickedCorrect] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [spellInput, setSpellInput] = useState('');
  const [choicesShuffled, setChoicesShuffled] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setAnswered(false);
    setPickedCorrect(null);
    setFeedback(null);
    setSpellInput('');
    setChoicesShuffled(shuffle([question.word, ...question.distractors]));
    if (question.type === 'spelling') {
      setTimeout(() => inputRef.current?.focus(), 300);
      setTimeout(() => speakOne(question.word.word, 0.8, 'play-spell'), 250);
    } else if (question.type === 'mc-meaning') {
      setTimeout(() => speakOne(question.word.word, 0.85, 'speak-q'), 250);
    }
  }, [question, speakOne]);

  const pct = ((idx + 1) / total) * 100;

  const handleClick = (choice) => {
    if (answered) return;
    const correct = choice.word === question.word.word;
    setAnswered(true);
    setPickedCorrect(correct ? choice.word : null);
    setFeedback(correct
      ? `✅ 정답! ${question.word.word} = ${question.word.meaning}`
      : `❌ 정답: ${question.word.word} = ${question.word.meaning}`);
    onAnswer(correct, question.word, question.type);
  };

  const handleSpellSubmit = () => {
    if (answered) return;
    const v = spellInput.trim().toLowerCase();
    if (!v) return;
    const correct = v === question.word.word.toLowerCase();
    setAnswered(true);
    setFeedback(correct
      ? `✅ 정답! ${question.word.word} = ${question.word.meaning}`
      : `❌ 정답: ${question.word.word} = ${question.word.meaning}`);
    onAnswer(correct, question.word, 'spelling');
  };

  const choiceClass = (choice) => {
    if (!answered) return 'choice-btn';
    if (choice.word === question.word.word) return 'choice-btn correct';
    if (pickedCorrect === null && choice.word !== question.word.word) {
      // 사용자가 이걸 골랐는지 모름. 일단 wrong 표시는 하지 않음
      return 'choice-btn';
    }
    return 'choice-btn';
  };

  return (
    <section className="screen active">
      <header className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="progress">{idx + 1}/{total}{isReviewMode ? ' 🔁' : ''}</div>
        <KirbyCounter count={kirbyCount} />
      </header>
      <div className="progress-bar"><div className="progress-fill" style={{ width: pct + '%' }} /></div>
      <div className="test-content">
        {question.type === 'mc-meaning' && (
          <>
            <h2>이 단어의 뜻은?</h2>
            <div className="big-word">
              {question.word.word}{' '}
              <button id="speak-q" className="speak-btn-small" onClick={() => speakOne(question.word.word, 0.85, 'speak-q')}>🔊</button>
            </div>
            <div className="choices">
              {choicesShuffled.map((c, i) => (
                <button key={i} className={choiceClass(c)} onClick={() => handleClick(c)} disabled={answered}>
                  <div className="choice-ko">{c.meaning}</div>
                  <div className="choice-en">{c.meaningEn}</div>
                </button>
              ))}
            </div>
          </>
        )}
        {question.type === 'mc-word' && (
          <>
            <h2>이 뜻에 맞는 단어는?</h2>
            <div className="big-meaning">
              {question.word.meaning}
              <span className="meaning-en-inline">{question.word.meaningEn}</span>
            </div>
            <div className="choices">
              {choicesShuffled.map((c, i) => (
                <button key={i} className={choiceClass(c)} onClick={() => handleClick(c)} disabled={answered}>
                  <div className="choice-ko">{c.word}</div>
                </button>
              ))}
            </div>
          </>
        )}
        {question.type === 'fill-blank' && (() => {
          const re = new RegExp(`\\b${question.word.word}\\b`, 'gi');
          const blanked = question.word.example.replace(re, '______');
          return (
            <>
              <h2>빈칸에 들어갈 단어는?</h2>
              <div className="example-blank">
                {blanked}{' '}
                <button id="speak-ex" className="speak-btn-small"
                  onClick={() => speakOne(blanked.replace(/______/g, 'blank'), 0.9, 'speak-ex')}>🔊</button>
              </div>
              <div className="example-ko">{question.word.exampleKo}</div>
              <div className="choices">
                {choicesShuffled.map((c, i) => (
                  <button key={i} className={choiceClass(c)} onClick={() => handleClick(c)} disabled={answered}>
                    <div className="choice-ko">{c.word}</div>
                  </button>
                ))}
              </div>
            </>
          );
        })()}
        {question.type === 'spelling' && (
          <>
            <h2>듣고 스펠링을 써 보세요</h2>
            <div style={{ textAlign: 'center' }}>
              <button id="play-spell" className="speak-btn-big"
                onClick={() => speakOne(question.word.word, 0.8, 'play-spell')}>🔊 다시 듣기</button>
            </div>
            <div className="hint">
              뜻: {question.word.meaning}
              <span className="meaning-en-inline">{question.word.meaningEn}</span>
            </div>
            <input ref={inputRef} className="spell-input" type="text" value={spellInput}
              onChange={e => setSpellInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSpellSubmit(); }}
              autoComplete="off" autoCapitalize="none" autoCorrect="off" spellCheck={false}
              placeholder="여기에 영어로 입력" disabled={answered} />
            <button className="big-btn" onClick={handleSpellSubmit} disabled={answered}>제출하기</button>
          </>
        )}
        {feedback && (
          <div className={'feedback ' + (feedback.startsWith('✅') ? 'correct' : 'wrong')}>
            {feedback}
            <span className="meaning-en-inline">{question.word.meaningEn}</span>
          </div>
        )}
      </div>
    </section>
  );
}

function ResultScreen({ score, total, wrong, spawnConfetti, onReview, onHome }) {
  const ratio = total > 0 ? score / total : 0;
  const title = ratio === 1 ? '🌟 완벽해요!' : ratio >= 0.7 ? '🎉 잘 했어요!' : '💪 다시 도전!';
  useEffect(() => {
    if (ratio >= 0.7) setTimeout(() => spawnConfetti(80), 200);
  }, [ratio, spawnConfetti]);
  return (
    <section className="screen active screen-result">
      <h1>{title}</h1>
      <div className="score">{score} / {total}</div>
      <div className="wrong-list">
        {wrong.length === 0 ? (
          <h3>모든 단어 정답! 🌟</h3>
        ) : (
          <>
            <h3>다시 살펴볼 단어</h3>
            {wrong.map((x, i) => (
              <div className="wrong-item" key={i}>
                <span className="emoji">{x.emoji}</span>
                <span>
                  <span className="word">{x.word}</span>
                  <span className="meaning">{x.meaning}</span>
                  <span className="meaning-en">{x.meaningEn}</span>
                </span>
              </div>
            ))}
          </>
        )}
      </div>
      {wrong.length > 0 && (
        <button className="review-btn" onClick={onReview}>🔁 틀린 단어 다시 공부하기</button>
      )}
      <button className="big-btn" onClick={onHome}>홈으로</button>
    </section>
  );
}

function StatsScreen({ child, kirbyCount, onBack }) {
  if (!child) return null;
  const data = JSON.parse(localStorage.getItem(`vocab_progress_${child.id}`) || '{}');
  const stats = JSON.parse(localStorage.getItem(`wordStats_${child.id}`) || '{}');
  const history = data.history || [];
  let html = null;
  if (history.length === 0) {
    html = <div className="stat-card"><h3>아직 기록이 없어요</h3><p>오늘의 테스트를 풀어 보세요!</p></div>;
  } else {
    const total = history.length;
    const avg = history.reduce((s, h) => s + h.score, 0) / total;
    const maxScore = Math.max(...history.map(h => h.score));
    html = (
      <>
        <div className="stat-card">
          <h3>{total}회 학습</h3>
          <p>평균: <strong>{avg.toFixed(1)}점</strong> · 최고: <strong>{maxScore}점</strong></p>
          <p>모은 커비: <strong>{kirbyCount}/{KIRBY_MAX}</strong> 🎀</p>
        </div>
        <h3>📅 최근 기록</h3>
        {history.slice(-10).reverse().map((h, i) => (
          <div className="history-item" key={i}>{h.date} — {h.score}/{h.total}점</div>
        ))}
      </>
    );
  }
  const weakSorted = Object.entries(stats)
    .filter(([_, s]) => s.wrong > 0)
    .sort((a, b) => (b[1].wrong - b[1].correct) - (a[1].wrong - a[1].correct))
    .slice(0, 10);
  return (
    <section className="screen active stats-content">
      <header className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="title">학습 기록</div>
      </header>
      {html}
      {weakSorted.length > 0 && (
        <>
          <h3>🔁 자주 틀린 단어 (다음 학습에 더 자주 나옵니다)</h3>
          {weakSorted.map(([w, s]) => (
            <div className="weak-item" key={w}>{w} — 틀림 {s.wrong}회 / 맞음 {s.correct}회</div>
          ))}
        </>
      )}
    </section>
  );
}

function ImportScreen({ onBack }) {
  const [grade, setGrade] = useState('G1');
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [statsKey, setStatsKey] = useState(0);

  const PROMPT = `Generate 100 vocabulary words appropriate for Grade 3 international school students (8-9 years old). Format each word on its own line, separated by | (pipe character):

word|Korean meaning|simple English explanation|English example sentence|Korean translation|emoji

Example:
ancient|고대의|very old, from long ago|The ancient temple is huge.|그 고대 사원은 거대해요.|🏛️

Rules:
- Use Tier 2 academic vocabulary (not basic words like "cat", "run")
- 100 unique words, no duplicates
- Cover topics: science, social studies, language arts, math
- Korean translations should be natural Korean
- Examples should fit the grade level
- Output only the 100 lines, no extra text or numbering`;

  const parseImport = (text) => {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const ok = []; const skipped = [];
    for (const line of lines) {
      if (line.startsWith('#') || line.startsWith('//')) continue;
      const parts = line.split('|').map(p => p.trim());
      if (parts.length < 5) { skipped.push(line); continue; }
      const [word, meaning, meaningEn, example, exampleKo, emoji] = parts;
      if (!word || !meaning || !meaningEn || !example) { skipped.push(line); continue; }
      ok.push({ word, meaning, meaningEn, example, exampleKo: exampleKo || '', emoji: emoji || '📘' });
    }
    return { ok, skipped };
  };

  const onImport = () => {
    const { ok, skipped } = parseImport(text);
    if (ok.length === 0) { setResult({ kind: 'err', msg: '유효한 단어가 없어요. 형식을 다시 확인해 주세요.' }); return; }
    const existing = JSON.parse(localStorage.getItem(`customVocab_${grade}`) || '[]');
    const seen = new Set(existing.map(w => w.word.toLowerCase()));
    const builtin = new Set(((window.VOCABULARY && window.VOCABULARY[grade]) || []).map(w => w.word.toLowerCase()));
    const newOnes = ok.filter(w => !seen.has(w.word.toLowerCase()) && !builtin.has(w.word.toLowerCase()));
    const merged = [...existing, ...newOnes];
    localStorage.setItem(`customVocab_${grade}`, JSON.stringify(merged));
    setResult({
      kind: 'ok',
      msg: `✅ ${newOnes.length}개 추가 완료${ok.length - newOnes.length > 0 ? ` (중복 ${ok.length - newOnes.length}개 건너뜀)` : ''}${skipped.length > 0 ? ` (형식 오류 ${skipped.length}개)` : ''}`,
    });
    setText('');
    setStatsKey(k => k + 1);
  };

  const copyPrompt = async () => {
    try { await navigator.clipboard.writeText(PROMPT); alert('프롬프트가 복사됐어요!'); } catch {}
  };

  const grades = ['G1', 'G2', 'G3', 'G4', 'G5'];
  const totals = grades.map(g => {
    const builtinN = ((window.VOCABULARY && window.VOCABULARY[g]) || []).length;
    let customN = 0;
    try { customN = JSON.parse(localStorage.getItem(`customVocab_${g}`) || '[]').length; } catch {}
    return { g, builtinN, customN, total: builtinN + customN };
  });
  const grandTotal = totals.reduce((s, x) => s + x.total, 0);

  return (
    <section className="screen active">
      <header className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="title">단어 추가</div>
      </header>
      <div className="import-card">
        <p className="import-help">아래 형식대로 한 줄에 하나씩 붙여넣으세요. 각 항목은 <strong>|</strong>(파이프)로 구분합니다.</p>
        <div className="import-format-box">word|한글뜻|easy English|English example|한글 예문|이모지</div>
        <div className="import-row">
          <label>학년:</label>
          <select className="import-grade" value={grade} onChange={e => setGrade(e.target.value)}>
            {grades.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <textarea className="import-text" value={text} onChange={e => setText(e.target.value)}
          placeholder="ancient|고대의|very old, from long ago|The ancient temple is huge.|그 고대 사원은 거대해요.|🏛️" />
        <button className="big-btn import-go" onClick={onImport}>📥 가져오기</button>
        {result && (
          <div className={result.kind === 'ok' ? 'import-success' : 'import-error'}>{result.msg}</div>
        )}
        <div className="import-stats" key={statsKey}>
          <h3>현재 단어 풀 (전체 {grandTotal}개)</h3>
          {totals.map(t => (
            <div key={t.g} className="stat-row">
              {t.g}: 기본 {t.builtinN} + 추가 {t.customN} = <strong>{t.total}개</strong>
            </div>
          ))}
        </div>
        <div className="import-tip">
          <strong>💡 ChatGPT/Claude로 한 번에 100단어 만들기</strong>
          <p>아래 프롬프트를 복사한 뒤 <a href="https://chat.openai.com" target="_blank" rel="noreferrer">ChatGPT</a> 또는 <a href="https://claude.ai" target="_blank" rel="noreferrer">Claude</a>에 붙여넣으세요.</p>
          <button className="copy-btn" onClick={copyPrompt}>📋 프롬프트 복사하기</button>
          <pre className="import-prompt">{PROMPT}</pre>
        </div>
      </div>
    </section>
  );
}
