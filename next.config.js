/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/boilerplate-nextjs-firebase/' : '',
  images: {
    unoptimized: true,
  },
}
