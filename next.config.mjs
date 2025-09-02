/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { turbo: false },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
}
