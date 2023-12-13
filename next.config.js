/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      BASE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };
  
  module.exports = nextConfig;

  
  // import withPWA from 'next-pwa';
  // import path from 'path';

  // export default withPWA({
  //   pwa: {
  //     dest: 'public',
  //     register: true,
  //     skipWaiting: true,
  //     disable: process.env.NODE_ENV === 'development',
  //     runtimeCaching: [
  //       {
  //         urlPattern: /\/images\/(.*)/,
  //         handler: 'CacheFirst',
  //         options: {
  //           cacheName: 'image-cache',
  //           expiration: {
  //             maxEntries: 100,
  //             maxAgeSeconds: 24 * 60 * 60, // 24 hours
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   reactStrictMode: true,
  //   env: {
  //     BASE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  //   },
  //   sassOptions: {
  //     includePaths: [path.join(__dirname, 'styles')],
  //   },
  // });
  
  
  
  
  