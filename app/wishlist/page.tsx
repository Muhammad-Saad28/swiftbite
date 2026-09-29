"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setWishlistItems(JSON.parse(localStorage.getItem('wishlist') || '[]'));
    setIsLoaded(true);
  }, []);

  const handleRemove = (id: string) => {
    const newWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    window.dispatchEvent(new Event('wishlist:add'));
  };

  const handleAddToCart = (item: any) => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.push(item);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    window.dispatchEvent(new Event('cart:add'));
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-32 pb-20 px-6 lg:px-12 text-gray-200 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 text-center">
          Your Wishlist
        </h1>
        
        {!isLoaded ? null : wishlistItems.length === 0 ? (
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <span className="material-symbols-outlined text-[64px] text-[#ffb800] mb-6 block">favorite</span>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">It's a little empty here</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
              You haven't added any items to your wishlist yet. Explore our menu and find your next favorite meal!
            </p>
            <Link href="/menu" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-[#ffb800] to-[#e0a200] hover:from-[#ffc326] hover:to-[#ffb800] text-black font-bold text-xs uppercase tracking-widest shadow-[0_4px_14px_rgba(255,184,0,0.39)] transition-transform active:scale-95">
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <div key={item.id || index} className="group relative rounded-2xl bg-[#1a1a1a] overflow-hidden border border-[#333] transition-all hover:border-[#ffb800]/50 shadow-sm hover:shadow-xl hover:shadow-[#ffb800]/5 flex flex-col">
                <div className="relative w-full aspect-[4/3] bg-[#2a2a2a] overflow-hidden">
                  <img alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src={item.images?.[0] || '/frames/original.jpg'}/>
                  <button onClick={() => handleRemove(item.id)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-red-500 hover:bg-black flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-white uppercase tracking-wider mb-2">{item.name}</h3>
                  <div className="text-[#ffb800] font-bold text-lg mb-4">Rs. {item.price}</div>
                  <p className="font-body-sm text-gray-400 line-clamp-2 mb-6">{item.short_description}</p>
                  
                  <div className="mt-auto">
                    <button onClick={() => handleAddToCart(item)} className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ffb800] to-[#e0a200] hover:from-[#ffc326] hover:to-[#ffb800] text-black font-bold text-[12px] uppercase tracking-widest transition-transform active:scale-95 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
