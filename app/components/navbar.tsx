'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Mentorship', href: '/mentorship' },
  { name: 'Career Center', href: '/career' },
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black fixed w-full z-50 transition-all duration-300 shadow-md border-b border-gray-700 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-extrabold text-3xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                STEMletics
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/auth"
              className="bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-500 transition-transform transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black border-t border-gray-700">
          <div className="px-6 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-green-400 px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/signup"
              className="block w-full bg-green-400 text-black px-4 py-3 rounded-lg text-lg font-bold text-center hover:bg-green-500 transition-transform transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
