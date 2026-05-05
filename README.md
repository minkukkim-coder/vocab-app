# 우리 가족 영단어 (Next.js)

영어 단어 학습 앱. Next.js 14 (App Router) + 정적 export 모드.

## 🚀 처음 실행하기

### 1. Node.js 설치 (한 번만)
- https://nodejs.org/ 에서 LTS 버전 다운로드 → 설치

### 2. 단어 파일을 `public/data/`로 옮기기
현재 디렉터리에 있는 `words*.js` 파일 21개를 모두 `public/data/` 폴더 안으로 이동(또는 복사)하세요.

PowerShell 명령어 한 줄로:
```powershell
mkdir public\data; Move-Item words*.js public\data\
```

### 3. 의존성 설치 (한 번만)
프로젝트 폴더에서 PowerShell:
```powershell
npm install
```

### 4. 개발 서버 실행
```powershell
npm run dev
```
→ 브라우저에서 http://localhost:3000 열기

## 📦 빌드 & 배포

### 정적 빌드
```powershell
npm run build
```
→ `out/` 폴더에 정적 사이트 생성됨.

### Vercel 배포 (가장 쉬움)
1. https://vercel.com/ 회원가입 (GitHub 연동 추천)
2. **New Project** → 이 폴더 zip 업로드 또는 GitHub 저장소 연결
3. Vercel이 Next.js 자동 감지 → **Deploy** 클릭
4. 발급된 URL 가족과 공유

또는 CLI로:
```powershell
npm install -g vercel
vercel
```
→ 안내에 따라 로그인 후 배포 끝.

### Netlify 배포
1. `npm run build` 실행 → `out/` 폴더 생성
2. https://app.netlify.com/drop 에 `out/` 폴더 드래그

## 📁 구조
```
app/
  layout.jsx     # 루트 레이아웃 + 단어 데이터 스크립트 로드
  page.jsx       # 메인 앱 (모든 화면)
  globals.css    # 글로벌 스타일
public/data/
  words*.js      # 단어 데이터 (기존 파일 그대로)
next.config.mjs  # 정적 export 설정
```

## 🛠️ 기존 vanilla 버전과의 차이
- `index.html`, `app.js`, `styles.css` (루트의 옛 파일들)는 더 이상 사용하지 않음 — 삭제해도 됨
- 단어 데이터 파일들(`words*.js`)은 `public/data/`로 이동 필요
- 기존 localStorage 데이터는 그대로 유지됨 (도메인이 같으면)
