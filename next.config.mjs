import { withContentlayer } from "next-contentlayer";

import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};


export default withContentlayer(nextConfig);
