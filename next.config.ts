import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'xrqb2mg56u.ufs.sh',
          port: '',
          pathname: '/f/*',
        },
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
          port: '',
          pathname: '/vi/**',
        },
      ],
  }
};

export default nextConfig;
