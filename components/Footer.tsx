import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#111111] text-gray-300 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/">
                  <img alt="SwiftBite Brand Logo" className="h-12 w-auto object-contain" src="/logo-bgremoved.png"/>
                </Link>
              </div>
              <p className="text-[#ffb800] font-bold text-sm tracking-widest uppercase mb-4">Fast • Fresh • Tasty</p>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Haute street-food elevated for high-velocity late-night cravings. Searing heat, electric flavor, delivered at warp speed across Lahore.
              </p>
              <div className="flex flex-col gap-3 mb-6 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#ffb800] shrink-0 mt-0.5">location_on</span>
                  <span>M.M. Alam Road, Gulberg III<br/>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#ffb800] shrink-0">call</span>
                  <span>+92 305 4449151</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-[#ffb800] transition-colors"><span className="material-symbols-outlined text-[20px]">public</span></Link>
                <Link href="#" className="text-gray-400 hover:text-[#ffb800] transition-colors"><span className="material-symbols-outlined text-[20px]">share</span></Link>
                <Link href="#" className="text-gray-400 hover:text-[#ffb800] transition-colors"><span className="material-symbols-outlined text-[20px]">chat_bubble</span></Link>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link className="hover:text-white transition-colors" href="/">Home</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/menu">Menu</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/about">About Us</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/offers">Exclusive Offers</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Customer Care</h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link className="hover:text-white transition-colors" href="/cart">Order Online</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/cart">Track Order</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/menu">Dietary & Allergens</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/contact">Lahore Branches</Link></li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Operating Hours (LHR)</h4>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between"><span>Mon - Thu:</span><span className="text-white">11:00 AM - 12:00 AM</span></div>
                <div className="flex justify-between"><span>Fri - Sat:</span><span className="text-[#ffb800] font-bold">11:00 AM - 03:00 AM</span></div>
                <div className="flex justify-between"><span>Sunday:</span><span className="text-white">12:00 PM - 11:00 PM</span></div>
                
                <div className="mt-4 p-3 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center gap-3 text-[#ffb800]">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span className="font-bold text-xs uppercase tracking-wider">Late Night Express</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Get Electric Drops</h4>
              <p className="text-sm text-gray-400 mb-4">Subscribe to unlock secret midnight menus, VIP tasting invites, and flash discounts.</p>
              <form className="flex rounded-md overflow-hidden bg-[#1a1a1a] border border-[#333] focus-within:border-[#ffb800] transition-colors">
                <input className="w-full px-4 py-2 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none" placeholder="Enter your email" type="email"/>
                <button className="px-4 py-2 bg-[#ffb800] hover:bg-[#e0a200] text-black font-bold text-xs uppercase tracking-wider transition-colors" type="submit">Join</button>
              </form>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div>© 2025 SWIFTBITE Culinary Labs Inc. All rights reserved.</div>
            <div className="flex gap-6">
              <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
              <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
              <Link className="hover:text-white transition-colors" href="#">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
