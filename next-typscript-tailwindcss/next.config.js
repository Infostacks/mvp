/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["rickandmortyapi.com", "media.giphy.com"],
    loader: "custom",
    path: "/",
  },
  // redirects: async() => {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/characters",
  //       permanent: true,
  //     },
  //   ];
  // }
};

module.exports = nextConfig
