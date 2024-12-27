import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Set alias for easier imports
    config.resolve.alias["@"] = path.resolve(__dirname);

    // Add support for shared package
    config.module.rules.push({
      test: /\.(js|ts|jsx|tsx)$/,
      include: [path.resolve(__dirname, "../../packages/ui_patterns")],
      use: ["babel-loader"],
    });

    return config;
  },
};

export default nextConfig;
