/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 export — Vercel/Netlify 어디든 정적 호스팅으로 배포 가능
  output: 'export',
  reactStrictMode: false, // word 파일이 IIFE라서 더블 실행 방지
  images: { unoptimized: true }
};

export default nextConfig;
