/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.r9cdn.net",
      },
    ],
  },
};

export default nextConfig;
