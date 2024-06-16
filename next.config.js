/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['image.com'], // 외부 이미지 호스트 추가
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.nilgil.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
