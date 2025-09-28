/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/text-to-image",
        permanent: true, // true = 308 redirect (SEO friendly)
      },
    ];
  },
};

export default nextConfig;
