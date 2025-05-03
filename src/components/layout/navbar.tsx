'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    //{ path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="font-bold text-2xl text-gray-900">
            <Link href="/">SOFT DEAL</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`cursor-pointer text-gray-600 hover:text-gray-900 ${
                  pathname === item.path ? 'text-primary font-medium' : ''
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
