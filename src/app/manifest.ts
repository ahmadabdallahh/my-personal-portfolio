import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio",
    short_name: "Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#EA6A2E",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
