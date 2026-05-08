/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/vocab-app' : '';

const nextConfig = {
  // 정적 export — Vercel/Netlify 어디든 정적 호스팅으로 배포 가능
  output: 'export',
  reactStrictMode: false, // word 파일이 IIFE라서 더블 실행 방지
  images: { unoptimized: true },
  // GitHub Pages는 /vocab-app/ 하위에서 서빙, Vercel은 루트
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
