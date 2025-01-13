import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/")],
    prependData: `@use './src/styles/mixins' as *;
    @use './src/styles/colors.modules.scss' as *;
    @use './src/styles/fonts.modules.scss' as *;
    `,
  },
};

export default nextConfig;
