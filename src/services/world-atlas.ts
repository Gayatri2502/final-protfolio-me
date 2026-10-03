import { feature } from "topojson-client";
import type {
  Topology,
  GeometryCollection,
  GeometryObject,
} from "topojson-specification";
import { WORLD_ATLAS_URL } from "@/constants";

/** Minimal GeoJSON feature shape consumed by the D3 globe. */
export interface WorldCountryFeature {
  type: string;
  geometry: GeometryObject;
  properties: Record<string, unknown>;
}

interface WorldAtlasTopology extends Topology {
  objects: {
    countries: GeometryCollection;
  };
}

const FALLBACK_FEATURE: WorldCountryFeature = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-180, -90],
        [180, -90],
        [180, 90],
        [-180, 90],
        [-180, -90],
      ],
    ],
  } as unknown as GeometryObject,
  properties: {},
};

/**
 * Fetch world-country features for the D3 globe.
 * Extracted verbatim from `contact-with-globe` — same URL, same
 * topojson conversion, same fallback — so rendered output is identical.
 */
export async function fetchWorldCountries(
  url: string = WORLD_ATLAS_URL,
): Promise<WorldCountryFeature[]> {
  try {
    const response = await fetch(url);
    const world = (await response.json()) as WorldAtlasTopology;
    return feature(world, world.objects.countries)
      .features as WorldCountryFeature[];
  } catch (error) {
    console.error("Error loading world data:", error);
    return [FALLBACK_FEATURE];
  }
}
