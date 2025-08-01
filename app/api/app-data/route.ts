import { NextResponse } from "next/server"
import gplay from "google-play-scraper"

export async function GET() {
  try {
    const defaultData = {
      downloads: "20+",
      rating: "New",
      reviews: 0,
      icon: "/images/app-icon.png",
      developer: "HeyIDB",
      updated: "May 30, 2025",
      size: "25MB",
      version: "1.0.0",
      contentRating: "Everyone",
      installs: "20+",
      category: "Health & Fitness",
    }

    const appData = await gplay.app({ appId: "com.heyidb.quitall" })

    // Merge dynamic data with defaults
    const mergedData = {
      ...defaultData,
      downloads: appData.installs || defaultData.downloads,
      rating: appData.scoreText || defaultData.rating,
      reviews: appData.reviews ?? defaultData.reviews,
      icon: appData.icon || defaultData.icon,
      developer: appData.developer || defaultData.developer,
      updated: appData.updated || defaultData.updated,
      size: appData.size || defaultData.size,
      version: appData.version || defaultData.version,
      contentRating: appData.contentRating || defaultData.contentRating,
      installs: appData.installs || defaultData.installs,
      category: appData.genre || defaultData.category,
    }

    return NextResponse.json(mergedData)
  } catch (error) {
    console.error("Error fetching app data:", error)
    return NextResponse.json({ error: "Failed to fetch app data" }, { status: 500 })
  }
}
