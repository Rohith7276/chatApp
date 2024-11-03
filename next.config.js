/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.vhv.rs','lh3.googleusercontent.com','avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
