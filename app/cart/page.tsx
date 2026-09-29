"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup' | null>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart') || '[]'));
    setIsLoaded(true);
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
  const tax = Math.round(subtotal * 0.16);
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    if (!orderType) {
      alert("Please select Delivery or Pickup first.");
      return;
    }

    if (orderType === 'delivery') {
      const itemsList = cartItems.map(i => `- ${i.name} (Rs. ${i.price})`).join('\n');
      const message = `Hello, I want to place an order for Delivery.\n\nItems:\n${itemsList}\n\nTotal: Rs. ${total}\n\nPlease let me know the next steps.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/923054449151?text=${encodedMessage}`, '_blank');
    } else {
      alert("Pickup option selected. We will prepare your order for pickup at our Lahore branch.");
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-32 pb-20 px-6 lg:px-12 text-gray-200 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items & Suggested Products */}
          <div className="lg:col-span-2 space-y-6">
            {!isLoaded ? null : cartItems.length === 0 ? (
              <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-12 text-center text-gray-400">
                <span className="material-symbols-outlined text-[48px] text-[#333] mb-4">shopping_cart</span>
                <p>Your cart is empty.</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 flex items-center gap-6 relative">
                  <button onClick={() => {
                      const newCart = [...cartItems];
                      newCart.splice(index, 1);
                      setCartItems(newCart);
                      localStorage.setItem('cart', JSON.stringify(newCart));
                      window.dispatchEvent(new Event('cart:add'));
                    }} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#2a2a2a] text-gray-400 hover:text-red-500 hover:bg-[#333] transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                  <div className="w-24 h-24 bg-[#2a2a2a] rounded-xl overflow-hidden shrink-0">
                    <img src={item.images?.[0] || '/frames/original.jpg'} alt={item.name} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="flex-1 pr-8">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm line-clamp-1">{item.short_description || "Delicious meal."}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#ffb800] font-bold text-lg">Rs. {item.price}</div>
                    <div className="text-gray-500 text-sm mt-1">Qty: 1</div>
                  </div>
                </div>
              ))
            )}

            {/* Suggested Products */}
            <div className="mt-12 pt-8 border-t border-[#333]">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-6">Suggested Add-ons</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Product 1 */}
                <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4 flex flex-col">
                  <div className="w-full h-24 bg-[#2a2a2a] rounded-lg mb-4 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px] text-[#ffb800]">local_dining</span>
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Loaded Fries</h4>
                  <div className="text-[#ffb800] font-bold text-sm mb-4">Rs. 350</div>
                  <button className="mt-auto py-2 w-full border border-[#ffb800] text-[#ffb800] rounded-lg hover:bg-[#ffb800] hover:text-black transition-colors font-bold text-xs uppercase">Add to Cart</button>
                </div>

                {/* Product 2 */}
                <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4 flex flex-col">
                  <div className="w-full h-24 bg-[#2a2a2a] rounded-lg mb-4 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px] text-[#ffb800]">local_drink</span>
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Electric Cola</h4>
                  <div className="text-[#ffb800] font-bold text-sm mb-4">Rs. 150</div>
                  <button className="mt-auto py-2 w-full border border-[#ffb800] text-[#ffb800] rounded-lg hover:bg-[#ffb800] hover:text-black transition-colors font-bold text-xs uppercase">Add to Cart</button>
                </div>

                {/* Product 3 */}
                <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4 flex flex-col">
                  <div className="w-full h-24 bg-[#2a2a2a] rounded-lg mb-4 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px] text-[#ffb800]">icecream</span>
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Midnight Sundae</h4>
                  <div className="text-[#ffb800] font-bold text-sm mb-4">Rs. 450</div>
                  <button className="mt-auto py-2 w-full border border-[#ffb800] text-[#ffb800] rounded-lg hover:bg-[#ffb800] hover:text-black transition-colors font-bold text-xs uppercase">Add to Cart</button>
                </div>

              </div>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 h-fit">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-6">Order Summary</h3>
            
            <div className="flex justify-between mb-4 text-gray-400 text-sm">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <div className="flex justify-between mb-6 text-gray-400 text-sm border-b border-[#333] pb-6">
              <span>Tax & Fees (16%)</span>
              <span>Rs. {tax}</span>
            </div>
            <div className="flex justify-between mb-8 text-white font-bold text-xl">
              <span>Total</span>
              <span className="text-[#ffb800]">Rs. {total}</span>
            </div>

            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Choose Method</h4>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setOrderType('delivery')}
                className={`py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${orderType === 'delivery' ? 'bg-[#ffb800] border-[#ffb800] text-white shadow-[0_0_15px_rgba(255,184,0,0.3)]' : 'bg-[#2a2a2a] border-[#333] text-gray-400 hover:border-gray-500'}`}
              >
                Delivery
              </button>
              <button 
                onClick={() => setOrderType('pickup')}
                className={`py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${orderType === 'pickup' ? 'bg-[#ffb800] border-[#ffb800] text-white shadow-[0_0_15px_rgba(255,184,0,0.3)]' : 'bg-[#2a2a2a] border-[#333] text-gray-400 hover:border-gray-500'}`}
              >
                Pickup
              </button>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ffb800] to-[#e0a200] hover:from-[#ffc326] hover:to-[#ff5b00] text-black font-bold text-[14px] uppercase tracking-widest shadow-[0_4px_14px_rgba(255,184,0,0.39)] transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              {orderType === 'delivery' ? (
                <>
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Checkout on WhatsApp
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>
            
            <Link href="/menu" className="w-full py-4 mt-4 block text-center rounded-xl border border-[#ffb800] text-[#ffb800] hover:bg-[#ffb800] hover:text-black font-bold text-[14px] uppercase tracking-widest transition-colors">
              Explore Menu
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
