/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: "/Atlas-landing-", // Replace with your repository name
  assetPrefix: "/Atlas-landing-/", // Replace with your repository name
};

module.exports = nextConfig;
