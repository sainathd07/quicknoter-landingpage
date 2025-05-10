'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Quick Noter
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Features
            </Link>
            <Link 
              href="#download"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Add to chrome
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 