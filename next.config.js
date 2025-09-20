/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.pixabay.com', 'pixabay.com']
  }
}

module.exports = nextConfig