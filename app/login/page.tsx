"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#111111] pt-32 pb-20 px-6 lg:px-12 flex items-center justify-center font-sans">
      <div className="max-w-md w-full">
        
        <div className="text-center mb-8">
          <img alt="SwiftBite Logo" className="h-16 w-auto mx-auto mb-6" src="/logo-bgremoved.png"/>
          <h1 className="text-3xl font-black text-white uppercase tracking-widest">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            {isLogin ? 'Sign in to access your saved cravings.' : 'Join the VIP list for secret drops.'}
          </p>
        </div>

        <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 shadow-2xl">
          
          {/* Tabs */}
          <div className="flex mb-8 border-b border-[#333]">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${isLogin ? 'text-[#ffb800] border-b-2 border-[#ffb800]' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${!isLogin ? 'text-[#ffb800] border-b-2 border-[#ffb800]' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Register
            </button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-[#333] text-white placeholder-gray-600 focus:outline-none focus:border-[#ffb800] transition-colors"
                />
              </div>
            )}
            
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-[#333] text-white placeholder-gray-600 focus:outline-none focus:border-[#ffb800] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-[#333] text-white placeholder-gray-600 focus:outline-none focus:border-[#ffb800] transition-colors"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-xs text-[#ffb800] hover:text-[#e0a200] transition-colors">Forgot Password?</a>
              </div>
            )}

            <button 
              type="submit"
              className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-[#ffb800] to-[#e0a200] hover:from-[#ffc326] hover:to-[#ffb800] text-black font-bold text-[14px] uppercase tracking-widest shadow-[0_4px_14px_rgba(255,184,0,0.39)] transition-transform active:scale-95"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
