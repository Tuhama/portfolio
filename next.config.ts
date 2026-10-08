import createNextIntlPlugin from 'next-intl/plugin';
import type {NextConfig} from "next";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  outputFileTracingIncludes: {
    "/\\[locale\\]/og": ["./src/assets/fonts/**/*"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default withNextIntl(nextConfig);
