/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.r9cdn.net",
      },
      {
        protocol: "https",
        hostname: "d2ey9sqrvkqdfs.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
