/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Resim optimizasyonunu kapat
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.iskenderhalisoglu.com",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
