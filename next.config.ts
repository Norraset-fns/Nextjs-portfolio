import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  images: {
    // แนะนำให้เปิด options นี้ด้วยเพราะ DiceBear จ่ายไฟล์เป็น SVG
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/7.x/**', // อนุญาตเฉพาะเวอร์ชัน 7.x ทุก style
      },
    ],
  },
};

export default nextConfig;
