import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['anforcom.com', 'anforcom.s3.amazonaws.com']
  }
}

export default million.next(nextConfig)
