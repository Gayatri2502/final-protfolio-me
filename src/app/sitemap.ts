import type { MetadataRoute } from "next";

const publicPages = [
  "/",
  "/about-new",
  "/our-goal",
  "/services",
  "/projects",
  "/skills",
  "/experiments",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map((path) => ({
    url: new URL(path, "https://alphacentauric.com").href,
  }));
}
