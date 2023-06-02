/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "cleantechnica.com",
      },
      {
        protocol: "https",
        pathname: "/.imaging/**",
        hostname: "www.cnnphilippines.com",
      },
    ],
  },
};

module.exports = nextConfig;
