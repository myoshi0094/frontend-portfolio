'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#1F1F1F] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-[#E5E5E5] transition-colors">
              Portfolio
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-[#E5E5E5] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/about"
                className="text-[#E5E5E5] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/blog"
                className="text-[#E5E5E5] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
              >
                Blog
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/contact"
                className="text-[#E5E5E5] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#A1A1A1] hover:text-white hover:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1A1A1A] rounded-lg mt-2 border border-[#1F1F1F]">
              <Link
                href="/"
                className="text-[#E5E5E5] hover:text-white hover:bg-[#1F1F1F] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#E5E5E5] hover:text-white hover:bg-[#1F1F1F] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-[#E5E5E5] hover:text-white hover:bg-[#1F1F1F] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-[#E5E5E5] hover:text-white hover:bg-[#1F1F1F] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
