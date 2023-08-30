/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx"],
    productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
