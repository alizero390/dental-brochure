'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-200">
              DentistMatch
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-200 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition duration-200 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 transition duration-200 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-600 hover:text-gray-900 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-600 hover:text-gray-900 transition duration-200">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-blue-600 hover:text-blue-700 transition duration-200">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}