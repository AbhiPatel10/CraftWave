/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  domains: ['m.media-amazon.com'],
  images: {
    domains: ['m.media-amazon.com'],
  },
}

module.exports = nextConfig
