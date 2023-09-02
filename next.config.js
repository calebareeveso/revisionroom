/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/*/*",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/*/*",
      },
    ],
  },
};

module.exports = nextConfig;
