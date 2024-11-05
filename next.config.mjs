import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true,
    missingSuspenseWithCSRBailout: false
  }
}

export default withContentlayer(nextConfig)
