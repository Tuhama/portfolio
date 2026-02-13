import createNextIntlPlugin from 'next-intl/plugin';
import type {NextConfig} from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://dev.mercato-b2b.com/images/mercatologin.png"),
    ],
  },
};

export default withNextIntl(nextConfig);
