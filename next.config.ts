import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aora-images.s3.eu-north-1.amazonaws.com', // Replace with your S3 bucket hostname
        pathname: '/**', // Allows images from any path within the bucket
      },
    ],
  },
};

export default nextConfig;
