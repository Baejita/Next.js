/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gkywegpqvqbcrhpfosqh.supabase.co",

        port: "",
        pathname: "/storage/v1/object/public/imagePerform/**",
      },
      {
        protocol: "https",
        hostname: "gkywegpqvqbcrhpfosqh.supabase.co",

        port: "",
        pathname: "/storage/v1/object/public/Mitigation%20flood/**",
      },
    ],
  },
};

export default nextConfig;
