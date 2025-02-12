import { withPayload } from "@payloadcms/next/withPayload";
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/")],
    prependData: `@use './src/styles/mixins' as *;
    @use './src/styles/colors.modules.scss' as *;
    @use './src/styles/fonts.modules.scss' as *;
    @use './src/styles/animations.modules.scss' as *;
    `,
  },
};

export default withPayload(nextConfig);
