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

const customConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "actualphotobucket.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

const nextConfig = { ...devOptions, ...customConfig };

module.exports = nextConfig;
