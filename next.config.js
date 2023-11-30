/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
}
};

module.exports = nextConfig;
