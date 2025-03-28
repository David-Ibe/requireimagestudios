/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'require-image-studios-bucket.s3.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  distDir: '.next',
};

module.exports = nextConfig;