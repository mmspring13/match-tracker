import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
