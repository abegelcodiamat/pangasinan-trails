/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/pangasinan-trails",
  assetPrefix: "/pangasinan-trails/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;