import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QuitAll Bad Habits - Break Any Habit Tracker",
    short_name: "QuitAll",
    description:
      "Break bad habits like smoking, drinking, phone addiction & more. Track progress, build streaks, save money.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b981",
    orientation: "portrait",
    scope: "/",
    lang: "en",
    categories: ["health", "lifestyle", "productivity", "wellness"],
    screenshots: [
      {
        src: "/images/screenshot-main.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "QuitAll main dashboard showing habit tracking cards",
      },
      {
        src: "/images/screenshot-analytics.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Analytics screen with progress charts and money saved",
      },
      {
        src: "/images/screenshot-mood.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Mood tracking and pattern analysis features",
      },
    ],
    icons: [
      {
        src: "/images/app-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Log Habit",
        short_name: "Log",
        description: "Quickly log your habit activity",
        url: "/log",
        icons: [
          {
            src: "/images/app-icon.png",
            sizes: "96x96",
          },
        ],
      },
      {
        name: "View Progress",
        short_name: "Progress",
        description: "Check your habit breaking progress",
        url: "/progress",
        icons: [
          {
            src: "/images/app-icon.png",
            sizes: "96x96",
          },
        ],
      },
    ],
  }
}
