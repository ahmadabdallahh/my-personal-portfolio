import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "./env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;

/**
 * Safe fetch wrapper: returns `null` when Sanity isn't configured yet,
 * so callers can fall back to placeholder data (see src/lib/data.ts).
 */
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.error("Sanity fetch failed:", err);
    return null;
  }
}
