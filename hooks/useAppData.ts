"use client"

import { useState, useEffect } from "react"

interface AppData {
  downloads: string
  rating: string
  reviews: number
  icon: string
  developer: string
  updated: string
  size: string
  version: string
  contentRating: string
  installs: string
  category: string
}

export function useAppData() {
  const [appData, setAppData] = useState<AppData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const response = await fetch("/api/app-data")
        if (!response.ok) {
          throw new Error("Failed to fetch app data")
        }
        const data = await response.json()
        setAppData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchAppData()
  }, [])

  return { appData, loading, error }
}
