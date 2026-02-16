"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-sm">
            PB
          </div>
          <span className="text-xl font-bold text-gray-900">
            Patent Buddy
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
          >
            How It Works
          </a>
          <a
            href="#criteria"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
          >
            Patent Criteria
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
          >
            Pricing
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cta"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Log In
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md"
          >
            Try Free Assessment
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#criteria"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patent Criteria
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <hr className="border-gray-100" />
            <a
              href="#cta"
              className="text-sm font-medium text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log In
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Free Assessment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
