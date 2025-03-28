import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["play-lh.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

