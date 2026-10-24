import type { NextConfig } from "next";
import packageJson from "./package.json";

const nextConfig: NextConfig = {
	output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: [ "@tailwindcss/turbopack" ],
        as: "*.css"
      }
    }
  },
	env: {
		NEXT_PUBLIC_APP_VERSION: packageJson?.version
	},
	images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wmgcat.s3.eu-north-1.amazonaws.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
