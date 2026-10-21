import type { MetadataRoute } from "next";
import { learnDataset } from "@/data/learn";
import { taxonomyMaps } from "@/data/taxonomy";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://aia.aserdargun.com";
  // Evidence dates are not page-modification dates. Omit lastModified rather
  // than generating a new date on every build.
  return ["", "/models", ...taxonomyMaps.map((map) => `/taxonomy/${map.id}`), "/learn", "/learn/review", "/learn/stats", ...learnDataset.concepts.map((c) => `/learn/${c.id}`)]
    .map((path) => ({ url: `${origin}${path}` }));
}
