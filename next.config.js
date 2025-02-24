/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Static HTML dışa aktarma için
  images: {
    unoptimized: true, // Netlify için gerekli
  },
}

module.exports = nextConfig 