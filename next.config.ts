import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable proper error handling
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Proper webpack configuration for development
  webpack: (config, { dev }) => {
    if (dev) {
      // Only optimize webpack for development, don't disable watching completely
      config.watchOptions = {
        aggregateTimeout: 300,
        poll: 1000,
      };
    }
    return config;
  },
  // Enable ESLint during builds for better code quality
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Configure experimental features for stability
  experimental: {
    // Ensure proper chunk loading
    optimizeCss: false,
  },
};

export default nextConfig;
