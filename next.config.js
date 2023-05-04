/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    runtime: "edge",
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/wp/index.html",
        },
      ],
    };
  },
};

module.exports = nextConfig;
