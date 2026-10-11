import type { NextConfig } from "next";
import packageJson from "./package.json";

const nextConfig: NextConfig = {
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
		dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "s3.wmgcat.net",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
