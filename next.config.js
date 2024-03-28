/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

export const reactStrictMode = true;
export const swcMinify = true;
export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
  ],
};
export async function headers() {
  return [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ];
}
