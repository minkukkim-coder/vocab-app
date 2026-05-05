import './globals.css';
import Script from 'next/script';

// 단어 데이터 파일들 — public/data/ 에 둠 (현재 디렉터리의 words*.js 파일을 옮김)
const WORD_FILES = [
  '/data/words.js',
  '/data/words-batch1-g1.js',
  '/data/words-batch1-g2.js',
  '/data/words-batch1-g3.js',
  '/data/words-batch1-g4.js',
  '/data/words-batch2-g1.js',
  '/data/words-batch2-g2.js',
  '/data/words-batch2-g3.js',
  '/data/words-batch2-g4.js',
  '/data/words-batch3-g1.js',
  '/data/words-batch3-g2.js',
  '/data/words-batch3-g3.js',
  '/data/words-batch3-g4.js',
  '/data/words-g5.js',
  '/data/words-batch1-g5.js',
  '/data/words-batch2-g5.js',
  '/data/words-batch4-g1.js',
  '/data/words-batch4-g2.js',
  '/data/words-batch4-g3.js',
  '/data/words-batch4-g4.js',
  '/data/words-batch3-g5.js',
];

export const metadata = {
  title: '우리 가족 영단어',
  description: '영어 단어 학습 앱',
  themeColor: '#ffaec9',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {WORD_FILES.map((src) => (
          <Script key={src} src={src} strategy="beforeInteractive" />
        ))}
        {children}
      </body>
    </html>
  );
}
