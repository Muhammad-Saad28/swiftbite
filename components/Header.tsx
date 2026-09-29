"use client";
import React, { useState, useEffect } from 'react';
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

  const [isVisible, setIsVisible] = useState(pathname !== '/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    setCartCount(JSON.parse(localStorage.getItem('cart') || '[]').length);
    setWishlistCount(JSON.parse(localStorage.getItem('wishlist') || '[]').length);

    if (pathname !== '/') {
      setIsVisible(true);
    }

    const handleShow = () => setIsVisible(true);
    const handleHide = () => setIsVisible(false);
    const handleCartAdd = () => setCartCount(JSON.parse(localStorage.getItem('cart') || '[]').length);
    const handleWishlistAdd = () => setWishlistCount(JSON.parse(localStorage.getItem('wishlist') || '[]').length);

    window.addEventListener('header:show', handleShow);
    window.addEventListener('header:hide', handleHide);
    window.addEventListener('cart:add', handleCartAdd);
    window.addEventListener('wishlist:add', handleWishlistAdd);

    return () => {
      window.removeEventListener('header:show', handleShow);
      window.removeEventListener('header:hide', handleHide);
      window.removeEventListener('cart:add', handleCartAdd);
      window.removeEventListener('wishlist:add', handleWishlistAdd);
    };
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/5 transition-transform duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-24 w-full px-8 lg:px-24 flex items-center justify-between">
          <div className="flex items-center gap-space-sm flex-1 justify-start shrink-0">
            <Link className="flex items-center gap-space-xs" href="/">
              <img alt="SwiftBite Brand Logo" className="h-20 w-auto object-contain scale-110 ml-2 origin-left" src="/logo-bgremoved.png"/>
            </Link>
          </div>
          
          <nav className="hidden xl:flex items-center justify-center gap-2 h-full flex-none">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`flex items-center justify-center px-3 py-1.5 rounded-xl transition-all duration-300 font-bold text-[10px] uppercase tracking-widest ${isActive ? 'bg-[#333333] text-white shadow-inner' : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#333333] hover:text-white'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-6 xl:gap-8 flex-1 justify-end shrink-0">
            <div className="flex items-center gap-4">
              {/* Heart Icon */}
            <Link href="/wishlist" aria-label="Favorites" className="flex items-center justify-center text-white hover:text-[#ffb800] transition-colors relative" type="button">
              <span className="material-symbols-outlined text-[24px]">favorite</span>
              {wishlistCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-[#ffb800] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>}
            </Link>
            
            {/* User Icon */}
            <Link href="/account" aria-label="Profile" className="flex items-center justify-center text-white hover:text-[#ffb800] transition-colors" type="button">
              <span className="material-symbols-outlined text-[24px]">person</span>
            </Link>

            {/* Shopping Cart */}
            <Link href="/cart" aria-label="Cart" className="flex items-center justify-center text-white hover:text-[#ffb800] transition-colors relative" type="button">
              <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
              {cartCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-[#ffb800] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
            </Link>

            </div>

            {/* WhatsApp Button */}
            <Link className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ffb800] to-[#e0a200] hover:from-[#ffc326] hover:to-[#ffb800] text-black font-bold text-[11px] uppercase tracking-widest shadow-[0_4px_14px_rgba(255,184,0,0.39)] transition-transform active:scale-95 gap-2" href="#">
              <span className="material-symbols-outlined text-[16px]">chat</span>
              WHATSAPP
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="xl:hidden flex items-center justify-center text-white ml-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-[32px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-[100%] left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 py-4 px-8 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-bold text-lg uppercase tracking-widest py-3 border-b border-white/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
