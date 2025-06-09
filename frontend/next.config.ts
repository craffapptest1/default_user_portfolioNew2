import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output : "standalone"
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
