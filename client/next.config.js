/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'], // Find a way to keep this synchronized with Crowdin
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/test-redirect',
        destination: 'https://webhook.yagiz.dev',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig;
