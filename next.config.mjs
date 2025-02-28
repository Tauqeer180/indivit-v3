/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
        pathname: "/**",
      },
      { hostname: "ui-avatars.com" },
      { hostname: "admin.nautaes.com" },
      { hostname: "192.168.31.210" },
      { hostname: "admin.indivit.de" },
      { hostname: "source.unsplash.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "i.ytimg.com" },
      { hostname: "youtube.com" },
    ],
  },
};
