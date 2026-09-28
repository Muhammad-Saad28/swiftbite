"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-container-low">
        <div className="h-20 w-full px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img alt="SwiftBite Brand Logo" className="h-8 w-auto object-contain" src="/logo.jpeg"/>
            <Link className="flex items-center gap-space-xs" href="/">
              <span className="material-symbols-outlined text-primary-container text-[22px]">bolt</span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface font-extrabold tracking-tight">SWIFTBITE</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-space-lg h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`flex items-center h-full transition-colors font-label-lg text-label-lg ${isActive ? 'text-primary-container border-b-2 border-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-space-sm lg:gap-space-md">
            <Link href="/search" aria-label="Search" className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </Link>
            <Link className="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" href="/order-online">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md leading-none">3</span>
            </Link>
            <Link className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg shadow-[0_0_16px_rgba(255,184,0,0.35)] transition-transform active:scale-95" href="/order-online">
              Order Now
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
