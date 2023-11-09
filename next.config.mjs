/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.prismic.io',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],

  }
}

export default nextConfig
