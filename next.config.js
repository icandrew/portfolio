/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['www.behance.net', 'mir-s3-cdn-cf.behance.net', 'a5.behance.net'],
  },
}

module.exports = nextConfig 