"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  const handleDownload = () => {
    window.open("https://play.google.com/store/apps/details?id=com.heyidb.quitall", "_blank")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/app-icon.png"
              alt="QuitAll Bad Habits App Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">QuitAll</span>
              <span className="text-xs text-gray-500 hidden sm:block">Bad Habits</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("habits")}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Habits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Support
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleDownload}
              size="lg"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1 text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("habits")}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1 text-left"
              >
                Habits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1 text-left"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1 text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium px-2 py-1 text-left"
              >
                Support
              </button>
              <div className="pt-4 border-t border-gray-200">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
