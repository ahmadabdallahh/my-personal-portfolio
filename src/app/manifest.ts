import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahmad Abdallah — Portfolio",
    short_name: "Ahmad Abdallah",
    start_url: "/en",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#EA6A2E",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
