/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/[^/]+\/$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'manual-pages',
        expiration: {
          maxEntries: 1,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
      },
    },
    {
      urlPattern: /^https?:\/\/[^/]+\/manual.*$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'manual-pages',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30,
        },
      },
    },
  ],
});

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  /*  eslint: {
    ignoreDuringBuilds: true,
  }, */
};

module.exports = withPWA(nextConfig);
