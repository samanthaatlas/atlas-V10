/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: process.env.NODE_ENV === "production" ? "/Atlas-landing-" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Atlas-landing-/" : "",
  // Add server configuration
  server: {
    host: "0.0.0.0",
    port: 3004,
  },
};

module.exports = nextConfig;
