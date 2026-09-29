import React from 'react';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[#111111] pt-32 pb-20 px-6 lg:px-12 text-gray-200 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
          My Account
        </h1>
        <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 pb-8 border-b border-[#333]">
            <div className="w-24 h-24 rounded-full bg-[#2a2a2a] border-2 border-[#ffb800] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[48px] text-[#ffb800]">person</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-1">Guest User</h2>
              <p className="text-gray-400 text-sm">Join the VIP list for secret drops and flash discounts.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#2a2a2a] border border-[#333] hover:border-[#ffb800] transition-colors cursor-pointer flex flex-col items-start gap-4">
              <span className="material-symbols-outlined text-[32px] text-[#ffb800]">receipt_long</span>
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-1">Order History</h3>
                <p className="text-gray-400 text-xs leading-relaxed">View your past orders, reorder your favorites, and download receipts.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#2a2a2a] border border-[#333] hover:border-[#ffb800] transition-colors cursor-pointer flex flex-col items-start gap-4">
              <span className="material-symbols-outlined text-[32px] text-[#ffb800]">loyalty</span>
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-1">Electric Points</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Check your loyalty balance and redeem exclusive rewards.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#2a2a2a] border border-[#333] hover:border-[#ffb800] transition-colors cursor-pointer flex flex-col items-start gap-4">
              <span className="material-symbols-outlined text-[32px] text-[#ffb800]">location_on</span>
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-1">Saved Addresses</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Manage your delivery locations for faster checkout.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#2a2a2a] border border-[#333] hover:border-[#ffb800] transition-colors cursor-pointer flex flex-col items-start gap-4">
              <span className="material-symbols-outlined text-[32px] text-[#ffb800]">settings</span>
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-1">Account Settings</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Update your password, email, and communication preferences.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/login" className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-[#ffb800] to-[#e0a200] hover:from-[#ffc326] hover:to-[#ffb800] text-black font-bold text-xs uppercase tracking-widest shadow-[0_4px_14px_rgba(255,184,0,0.39)] transition-transform active:scale-95">
              Sign In / Register
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
