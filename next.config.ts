import createNextIntlPlugin from 'next-intl/plugin';
import type {NextConfig} from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/\\[locale\\]/og": ["./src/assets/fonts/**/*"],
  },
};

export default withNextIntl(nextConfig);
