/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["storage.googleapis.com", "images.unsplash.com"],
  },
};

export default nextConfig;
