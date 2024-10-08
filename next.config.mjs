/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.starbucks.fr',
        },
      ],
    }
  }

export default nextConfig;
