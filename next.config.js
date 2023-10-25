/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig

//  const nextConfig = {
//    //reactStrictMode: true,
//    //typescript: {
//    //  ignoreBuildErrors: true,
//    //},
//    output: 'export',
//    distDir: "dist",
//  }
//
//  module.exports = nextConfig
