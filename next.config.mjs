/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/index',
        destination: '/mostly-strategic-index',
      },
    ];
  },
};

export default nextConfig;
