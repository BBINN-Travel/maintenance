import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old WordPress site publishes every URL with a trailing slash
  // (e.g. /casa-particular/vinales-valley/casa-el-pinar/). Keep the 503
  // maintenance response on the exact URLs found in the sitemap instead of
  // 308-redirecting one variant to the other.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;