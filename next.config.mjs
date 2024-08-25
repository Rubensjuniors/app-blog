import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  }
}

export default withContentlayer(nextConfig)
