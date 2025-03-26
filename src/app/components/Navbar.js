'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Início', href: '/', current: true },
    { name: 'Produtos', href: '/product', current: false },
    { name: 'Contato', href: '/contact', current: false },
  ];

  return (
    <nav 
      className="bg-white bg-opacity-75 border-2 border-gray-200 rounded-xl shadow-sm mx-4 my-6 md:mx-8"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl md:text-3xl font-serif italic font-extrabold text-pink-600 hover:text-pink-700 transition-colors"
            >
              Recanto dos Doces
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-lg font-medium hover:text-pink-600 transition-colors ${
                    link.current ? 'text-pink-600 font-bold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-current={link.current ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.current 
                  ? 'bg-pink-50 text-pink-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'
              }`}
              aria-current={link.current ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}