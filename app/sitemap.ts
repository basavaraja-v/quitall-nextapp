import type { MetadataRoute } from "next"

// Habit categories for programmatic sitemap generation
const habitCategories = [
  "quit-smoking",
  "stop-drinking",
  "phone-addiction",
  "junk-food",
  "overspending",
  "procrastination",
  "social-media-detox",
  "nail-biting",
  "sugar-addiction",
  "caffeine-addiction",
]

const blogCategories = [
  "smoking-cessation",
  "alcohol-recovery",
  "digital-detox",
  "healthy-eating",
  "financial-wellness",
  "productivity",
  "mental-health",
  "addiction-recovery",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quitallbadhabits.heyidb.com"
  const currentDate = new Date()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly" as const,
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/features`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly" as const,
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/pricing`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly" as const,
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/privacy`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly" as const,
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/terms`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly" as const,
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/support`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly" as const,
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/download`,
    //   lastModified: currentDate,
    //   changeFrequency: "daily" as const,
    //   priority: 0.9,
    // },
  ]

  // Habit-specific landing pages (programmatic SEO)
  const habitPages = habitCategories.map((habit) => ({
    url: `${baseUrl}/habits/${habit}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Blog pages for content marketing
  const blogMainPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ]

  // Blog category pages
  const blogCategoryPages = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Sample blog posts (in real app, this would be dynamic from CMS/database)
  const sampleBlogPosts = [
    "how-to-quit-smoking-in-21-days",
    "stop-drinking-alcohol-complete-guide",
    "break-phone-addiction-digital-detox",
    "overcome-junk-food-cravings",
    "save-money-by-quitting-bad-habits",
    "procrastination-solutions-productivity-tips",
    "social-media-detox-mental-health",
    "habit-tracking-science-psychology",
    "addiction-recovery-success-stories",
    "mindfulness-techniques-habit-breaking",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Help and FAQ pages
  const helpPages = [
    {
      url: `${baseUrl}/help`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/getting-started`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // Success stories and testimonials
  const successPages = [
    {
      url: `${baseUrl}/success-stories`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]

  // Combine all pages
  return [
    ...mainPages,
    // ...habitPages,
    // ...blogMainPages,
    // ...blogCategoryPages,
    // ...sampleBlogPosts,
    // ...helpPages,
    // ...successPages,
  ]
}
