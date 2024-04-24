/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MY_ENV: "local",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2ey9sqrvkqdfs.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
