/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    output: 'export',
    distDir: "dist"
  }

  module.exports = nextConfig