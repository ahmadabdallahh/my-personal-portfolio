export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-08-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// When there's no project configured yet, the app falls back to local
// placeholder data (see src/lib/placeholder-data.ts) so it always runs.
export const isSanityConfigured = Boolean(projectId);
