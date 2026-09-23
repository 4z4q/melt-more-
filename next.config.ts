import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/m0mtj6qx9/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: { root: process.cwd() },
};

export default nextConfig;