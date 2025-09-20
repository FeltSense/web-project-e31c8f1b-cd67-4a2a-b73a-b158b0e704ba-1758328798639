/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.pixabay.com', 'pixabay.com']
  },
  // Fixed: Remove assetPrefix for Vercel deployment
  // assetPrefix causes font loading issues on Vercel
}

module.exports = nextConfig
