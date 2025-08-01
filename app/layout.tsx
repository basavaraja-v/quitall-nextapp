import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://quitallbadhabits.heyidb.com"),
  title: {
    default: "QuitAll Bad Habits - Break Any Habit in 21 Days | Habit Tracker App",
    template: "%s | QuitAll - Break Bad Habits",
  },
  description:
    "Break bad habits like smoking, drinking, phone addiction, junk food & more. Track progress, build streaks, save money. Download QuitAll habit tracker app free on Google Play.",
  keywords: [
    "quit smoking app",
    "stop drinking app",
    "break bad habits",
    "habit tracker",
    "quit tea app",
    "phone addiction app",
    "junk food tracker",
    "habit breaking app",
    "streak tracker",
    "quit bad habits",
    "smoking cessation app",
    "alcohol tracker",
    "digital detox app",
    "procrastination app",
    "overspending tracker",
    "social media detox",
    "nail biting app",
    "sugar addiction app",
    "caffeine addiction tracker",
  ],
  authors: [{ name: "QuitAll Team", url: "https://quitallbadhabits.heyidb.com" }],
  creator: "QuitAll",
  publisher: "QuitAll",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quitallbadhabits.heyidb.com",
    siteName: "QuitAll Bad Habits",
    title: "QuitAll - Break Any Bad Habit | #1 Habit Tracker App",
    description:
      "Join thousands who quit smoking, drinking, phone addiction & more with QuitAll. Track streaks, save money, get insights. Free 3-day trial.",
    images: [
      {
        url: "/images/feature-graphic.png",
        width: 1200,
        height: 630,
        alt: "QuitAll Bad Habits App - Break Any Habit",
      },
      {
        url: "/images/screenshot-main.png",
        width: 390,
        height: 844,
        alt: "QuitAll App Main Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuitAll - Break Any Bad Habit | Habit Tracker App",
    description:
      "Break bad habits like smoking, drinking, phone addiction. Track progress, build streaks, save money. Free download.",
    images: ["/images/feature-graphic.png"],
    creator: "@quitallapp",
    site: "@quitallapp",
  },
  alternates: {
    canonical: "https://quitallbadhabits.heyidb.com",
    languages: {
      "en-US": "https://quitallbadhabits.heyidb.com",
      "en-GB": "https://quitallbadhabits.heyidb.com/en-gb",
      es: "https://quitallbadhabits.heyidb.com/es",
      fr: "https://quitallbadhabits.heyidb.com/fr",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "health",
  classification: "Health & Fitness App",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "QuitAll Bad Habits",
  appleWebApp: {
    capable: true,
    title: "QuitAll",
    statusBarStyle: "default",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "QuitAll",
    "application-name": "QuitAll Bad Habits",
    "msapplication-TileColor": "#10b981",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#10b981",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "QuitAll Bad Habits",
              description:
                "Break bad habits like smoking, drinking, phone addiction, junk food & more. Track progress, build streaks, save money.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
                bestRating: "5",
                worstRating: "1",
              },
              author: {
                "@type": "Organization",
                name: "QuitAll Team",
                url: "https://quitallbadhabits.heyidb.com",
              },
              downloadUrl: "https://play.google.com/store/apps/details?id=com.heyidb.quitall",
              screenshot: [
                "https://quitallbadhabits.heyidb.com/images/screenshot-main.png",
                "https://quitallbadhabits.heyidb.com/images/screenshot-analytics.png",
                "https://quitallbadhabits.heyidb.com/images/screenshot-mood.png",
              ],
              featureList: [
                "Habit Tracking",
                "Streak Counter",
                "Money Savings Calculator",
                "Progress Analytics",
                "Mood Tracking",
                "Pattern Analysis",
                "Custom Habits",
                "Ad-Free Experience",
              ],
              requirements: "Android 5.0+",
              fileSize: "25MB",
              version: "2.1.0",
              datePublished: "2024-01-15",
              dateModified: "2024-12-01",
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QuitAll",
              url: "https://quitallbadhabits.heyidb.com",
              logo: "https://quitallbadhabits.heyidb.com/images/app-icon.png",
              description: "Helping people break bad habits and build better lives through technology.",
              foundingDate: "2023",
              sameAs: [
                "https://twitter.com/quitallapp",
                "https://facebook.com/quitallapp",
                "https://instagram.com/quitallapp",
                "https://linkedin.com/company/quitall",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "support@quitall.app",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How does QuitAll help me quit smoking?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "QuitAll tracks your smoking habits, shows your progress with visual streaks, calculates money saved, and provides insights into your smoking patterns. The app helps you gradually reduce cigarettes and build momentum to quit completely.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I track multiple bad habits at once?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! QuitAll allows you to track unlimited habits simultaneously. Whether you want to quit smoking, stop drinking, reduce phone usage, or break any other bad habit, you can monitor them all in one app.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much money can I save by quitting bad habits?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Savings vary by habit. Users typically save $2,000+ annually by quitting smoking, $1,500+ by reducing alcohol consumption, and $800+ by avoiding junk food. QuitAll calculates your exact savings based on your usage patterns.",
                  },
                },
              ],
            }),
          }}
        />

        {/* WebSite Schema for Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "QuitAll Bad Habits",
              url: "https://quitallbadhabits.heyidb.com",
              description:
                "Break bad habits like smoking, drinking, phone addiction & more with QuitAll habit tracker app.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://quitallbadhabits.heyidb.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://play.google.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://quitallbadhabits.heyidb.com" />

        {/* Alternate languages */}
        <link rel="alternate" hrefLang="en" href="https://quitallbadhabits.heyidb.com" />
        <link rel="alternate" hrefLang="es" href="https://quitallbadhabits.heyidb.com/es" />
        <link rel="alternate" hrefLang="fr" href="https://quitallbadhabits.heyidb.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://quitallbadhabits.heyidb.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
