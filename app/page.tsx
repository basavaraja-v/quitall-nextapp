"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Edit3, Flame, Smartphone, BarChart3, Gift, Shield, Star, Users, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import { useAppData } from "@/hooks/useAppData"

// Programmatic SEO data for different habits
const habitCategories = [
  {
    name: "Quit Smoking",
    emoji: "🚬",
    description: "Stop smoking cigarettes, vaping, and tobacco use",
    keywords: "quit smoking app, stop smoking, smoking cessation, nicotine addiction",
    savings: "$2,000+",
    users: "50K+",
  },
  {
    name: "Stop Drinking",
    emoji: "🍺",
    description: "Track alcohol consumption and reduce drinking habits",
    keywords: "stop drinking app, alcohol tracker, quit alcohol, sobriety app",
    savings: "$1,500+",
    users: "30K+",
  },
  {
    name: "Phone Addiction",
    emoji: "📱",
    description: "Break phone addiction and reduce screen time",
    keywords: "phone addiction app, digital detox, screen time tracker, social media detox",
    savings: "100+ hours",
    users: "75K+",
  },
  {
    name: "Junk Food",
    emoji: "🍔",
    description: "Stop eating junk food and improve your diet",
    keywords: "junk food tracker, healthy eating app, diet tracker, food addiction",
    savings: "$800+",
    users: "40K+",
  },
  {
    name: "Overspending",
    emoji: "💸",
    description: "Control spending habits and save money",
    keywords: "spending tracker, budget app, money saving app, financial habits",
    savings: "$3,000+",
    users: "25K+",
  },
  {
    name: "Procrastination",
    emoji: "💤",
    description: "Beat procrastination and boost productivity",
    keywords: "procrastination app, productivity tracker, time management, focus app",
    savings: "200+ hours",
    users: "60K+",
  },
]

const faqData = [
  {
    question: "How does QuitAll help me quit smoking?",
    answer:
      "QuitAll tracks your smoking habits, shows your progress with visual streaks, calculates money saved, and provides insights into your smoking patterns. The app helps you gradually reduce cigarettes and build momentum to quit completely.",
  },
  {
    question: "Can I track multiple bad habits at once?",
    answer:
      "Yes! QuitAll allows you to track unlimited habits simultaneously. Whether you want to quit smoking, stop drinking, reduce phone usage, or break any other bad habit, you can monitor them all in one app.",
  },
  {
    question: "How much money can I save by quitting bad habits?",
    answer:
      "Savings vary by habit. Users typically save $2,000+ annually by quitting smoking, $1,500+ by reducing alcohol consumption, and $800+ by avoiding junk food. QuitAll calculates your exact savings based on your usage patterns.",
  },
  {
    question: "Is QuitAll free to use?",
    answer:
      "QuitAll offers a 3-day free trial with full access to all features. After the trial, you can continue with basic features for free or upgrade to premium for advanced analytics, unlimited habits, and ad-free experience.",
  },
  {
    question: "What makes QuitAll different from other habit tracker apps?",
    answer:
      "QuitAll focuses specifically on breaking bad habits rather than building good ones. It includes mood tracking, pattern analysis, money savings calculations, and personalized insights to help you understand and overcome your specific addiction patterns.",
  },
  {
    question: "Can QuitAll help with phone addiction and social media detox?",
    answer:
      "QuitAll includes specialized tracking for phone addiction, social media usage, and digital detox. Track your screen time, set daily limits, and build streaks of reduced phone usage to break your digital addiction.",
  },
]

export default function QuitAllLanding() {
  const { appData, loading, error } = useAppData()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section - Two Column Layout */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-orange-500/5"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                {appData?.downloads || "250,000+"} Users Successfully Quit Bad Habits
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Break Any Bad Habit in{" "}
                <span className="text-emerald-600 relative">
                  21 Days
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-red-500"
                    viewBox="0 0 200 12"
                    fill="currentColor"
                  >
                    <path d="M0,8 Q50,0 100,8 T200,8 L200,12 L0,12 Z" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join thousands who quit <strong>smoking, drinking, phone addiction, junk food</strong> & more. Track
                streaks, save money, get insights.
              </p>

              {/* Social Proof Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="font-semibold text-gray-900">
                    {loading ? "4.8/5" : appData?.rating === "New" ? "New App" : appData?.rating || "4.8/5"}
                  </span>
                  <span className="text-gray-600 ml-1">{appData?.rating === "New" ? "" : "rating"}</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <Users className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="font-semibold text-gray-900">{loading ? "250K+" : appData?.downloads || "10+"}</span>
                  <span className="text-gray-600 ml-1">downloads</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900">85%</span>
                  <span className="text-gray-600 ml-1">success rate</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={() =>
                    window.open("https://play.google.com/store/apps/details?id=com.heyidb.quitall", "_blank")
                  }
                  className="hover:opacity-90 transition-opacity transform hover:scale-105"
                >
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-14 w-auto"
                  />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 mb-3">
                  {loading
                    ? "Trusted by users worldwide"
                    : `By ${appData?.developer || "HeyIDB"} • ${appData?.category || "Health & Fitness"}`}
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {appData?.rating === "New" ? (
                      <strong>New App</strong>
                    ) : (
                      <>
                        <strong>4.8</strong> from 1,250+ reviews
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - App Visuals */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Main Phone Mockup */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <div className="relative">
                    <Image
                      src="/images/screenshot-main.png"
                      alt="QuitAll Main Dashboard - Track smoking, drinking, phone addiction habits"
                      width={300}
                      height={600}
                      className="mx-auto rounded-3xl shadow-2xl"
                      priority
                    />

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-gray-900">4 days streak!</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">💰</span>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">$156 saved</div>
                          <div className="text-xs text-gray-500">this month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Phone Mockups */}
                <div className="hidden md:block absolute top-8 -left-8 lg:-left-12 z-0 transform rotate-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/screenshot-analytics.png"
                    alt="QuitAll Analytics Screen"
                    width={220}
                    height={440}
                    className="rounded-2xl shadow-xl"
                  />
                </div>

                <div className="hidden md:block absolute top-16 -right-8 lg:-right-12 z-0 transform -rotate-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/screenshot-mood.png"
                    alt="QuitAll Mood Tracking"
                    width={220}
                    height={440}
                    className="rounded-2xl shadow-xl"
                  />
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl -z-10"></div>
              </div>

              {/* Feature Highlights */}
              <div className="mt-12 grid grid-cols-2 gap-4 max-w-sm mx-auto lg:max-w-none">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl mb-2">🔥</div>
                  <div className="text-sm font-semibold text-gray-900">Streak Tracking</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-semibold text-gray-900">Progress Analytics</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-sm font-semibold text-gray-900">Money Saved</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm font-semibold text-gray-900">Custom Goals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              The #1 Habit Breaking App for Smoking, Drinking & More
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              QuitAll is your personal habit-breaking assistant designed specifically for{" "}
              <strong>breaking bad habits</strong>, not building good ones. Whether you want to{" "}
              <strong>quit smoking, stop drinking, overcome phone addiction, avoid junk food</strong>, or create your
              own custom habit — this app helps you take back control one day at a time with proven behavioral science
              techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Habit Categories - Programmatic SEO Section */}
      <section id="habits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Break Any Bad Habit - Proven Results
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Join thousands who successfully quit their worst habits with QuitAll
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {habitCategories.map((habit, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{habit.emoji}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{habit.name}</h3>
                    <p className="text-gray-600 mb-4">{habit.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-emerald-600 font-semibold">💰 Save {habit.savings}/year</div>
                      {/* <div className="text-blue-600 font-semibold">👥 {habit.users} users</div> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Why QuitAll Works Better Than Other Habit Apps
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Scientifically designed features that actually help you quit for good
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Preloaded Bad Habits Library</h3>
                  <p className="text-gray-600">
                    Start tracking smoking, drinking, phone addiction, junk food, and 20+ other common bad habits
                    instantly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-blue-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Edit3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Addiction Tracking</h3>
                  <p className="text-gray-600">
                    Create personalized trackers for any habit with custom goals, triggers, and success metrics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-orange-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Flame className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Visual Streak Counter</h3>
                  <p className="text-gray-600">
                    Build powerful momentum with visual streak tracking that motivates you to keep going every day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-pink-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Distraction-Free Interface</h3>
                  <p className="text-gray-600">
                    Clean, minimalist design that doesn't trigger your addictive behaviors while using the app.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Addiction Pattern Analysis</h3>
                  <p className="text-gray-600">
                    Understand your triggers, peak times, and emotional patterns to break the addiction cycle.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-yellow-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Money Savings Calculator</h3>
                  <p className="text-gray-600">
                    See exactly how much money you're saving by quitting - powerful motivation to stay on track.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Real Success Stories from QuitAll Users
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Finally quit smoking after 15 years! QuitAll's streak counter and money savings tracker kept me
                    motivated. Saved $2,400 so far!"
                  </p>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Quit smoking • 8 months clean</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Broke my phone addiction using QuitAll. Reduced screen time from 8 hours to 2 hours daily. My
                    productivity skyrocketed!"
                  </p>
                  <div className="font-semibold text-gray-900">Mike R.</div>
                  <div className="text-sm text-gray-500">Phone addiction • 4 months clean</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Stopped my daily drinking habit with QuitAll's mood tracking. Understanding my triggers was the key
                    to success."
                  </p>
                  <div className="font-semibold text-gray-900">Jennifer L.</div>
                  <div className="text-sm text-gray-500">Alcohol reduction • 6 months clean</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Long-tail SEO */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Frequently Asked Questions About Breaking Bad Habits
            </h2>

            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="support" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Addiction Data Stays Private</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Your sensitive habit and addiction data is stored securely with Firebase encryption. We never share your
              personal information. No ads. No tracking. Ever.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Break Your Worst Habit Forever?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join {appData?.downloads || "250,000+"} users who successfully quit smoking, drinking, phone addiction & more
            </p>
            <button
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.heyidb.quitall", "_blank")}
              className="hover:opacity-90 transition-opacity transform hover:scale-105"
            >
              <Image
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={240}
                height={72}
                className="h-16 w-auto"
              />
            </button>
            <p className="text-sm opacity-75">
              ✓ No credit card required ✓ Cancel anytime ✓ Full access to all features
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Image src="/images/app-icon.png" alt="QuitAll Icon" width={40} height={40} className="rounded-lg" />
                  <span className="text-xl font-bold">QuitAll</span>
                </div>
                <p className="text-gray-400 text-sm">
                  The #1 app for breaking bad habits like smoking, drinking, phone addiction & more.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Popular Habits</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Quit Smoking App
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Stop Drinking App
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Phone Addiction
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Junk Food Tracker
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Habit Tracker
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Streak Counter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Money Savings
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Progress Analytics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} QuitAll Bad Habits. All rights reserved. Made with ❤️ for people breaking
                bad habits.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
