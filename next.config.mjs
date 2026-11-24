const production = process.env.NODE_ENV === "production";
const contentSecurityPolicy = [
  "default-src 'self'",
  // Next's statically generated pages include inline hydration scripts.
  `script-src 'self' 'unsafe-inline'${production ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://cdn.21st.dev",
  "font-src 'self'",
  `connect-src 'self' https://cdn.jsdelivr.net${production ? "" : " ws:"}`,
  "media-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-**" },
      { protocol: "https", hostname: "cdn.21st.dev", pathname: "/assets/mirror/**" },
    ],
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }, {
      source: "/contact",
      headers: [{
        key: "Content-Security-Policy",
        value: contentSecurityPolicy.replace(
          "frame-src 'none'",
          "frame-src https://calendar.google.com/calendar/appointments/",
        ),
      }],
    }];
  },
};

export default nextConfig;
