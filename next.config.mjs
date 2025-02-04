/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: "/portfolio2025",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
