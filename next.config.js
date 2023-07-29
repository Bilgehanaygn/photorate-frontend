/** @type {import('next').NextConfig} */

const devOptions = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.DEV_TARGET_HOST}/api/v1/:path*`,
      },
    ];
  },
};

const nextConfig = { ...devOptions };

module.exports = nextConfig;
