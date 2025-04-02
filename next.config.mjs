import { version } from "react";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    domains: ["storage.googleapis.com", "images.unsplash.com", "picsum.photos"],
    unoptimized: true,
  },
  publicRuntimeConfig: {
    version: "1.0.0",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
