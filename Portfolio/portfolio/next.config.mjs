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
    ],
  },
};

export default nextConfig;
