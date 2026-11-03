"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../../lib/seo-data';

export default function ContactClientView() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden relative">
      {/* Glitch Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }}>
            <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-4 py-1 font-bold text-xs tracking-[0.3em] uppercase mb-6">
              <span className="w-2 h-2 bg-black rounded-full animate-ping" />
              Kitchen Lines Open Daily: 3:00 PM – 3:00 AM
            </div>
            <h1 className="font-[family-name:var(--font-epilogue)] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-white">
              CONTACT &amp; <span className="text-[#FFD700]">LOCATION.</span>
            </h1>
            <p className="text-gray-400 font-medium text-sm md:text-base max-w-xl mx-auto mt-4">
              Visit our restaurant kitchen in Lahore or contact our dispatch team for direct order updates and inquiries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Real Hub Information */}
          <div className="flex flex-col gap-8">
            <h2 className="text-[#FFD700] font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase tracking-tighter border-b border-gray-800 pb-4">
              RESTAURANT HEADQUARTERS
            </h2>
            
            <div className="border border-gray-800 p-8 bg-[#0a0a0a] flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">Primary Location</span>
                <h3 className="text-2xl font-black uppercase text-white mt-1">SwiftBite Lahore Hub</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {RESTAURANT_INFO.address.streetAddress}, {RESTAURANT_INFO.address.addressLocality}, Pakistan.
                </p>
              </div>

              <div className="border-t border-gray-800 pt-4 flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Operational Hours:</span>
                  <span className="text-[#FFD700] font-bold">Daily: 3:00 PM &ndash; 3:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Primary Phone:</span>
                  <a href={`tel:${RESTAURANT_INFO.telephone}`} className="text-white hover:text-[#FFD700] font-bold">
                    {RESTAURANT_INFO.supportPhoneFormatted}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Alternate Phone:</span>
                  <a href={`tel:${RESTAURANT_INFO.altTelephone}`} className="text-white hover:text-[#FFD700] font-bold">
                    {RESTAURANT_INFO.altPhoneFormatted}
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <span className="text-xs uppercase font-bold tracking-widest text-gray-400 block mb-2">Verified Delivery Coverage:</span>
                <div className="flex flex-wrap gap-2">
                  {RESTAURANT_INFO.areaServed.map((area) => (
                    <span key={area} className="px-3 py-1 bg-gray-900 border border-gray-800 text-xs font-medium text-gray-300">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Order Dispatch Box */}
            <div className="p-8 bg-gradient-to-br from-gray-950 to-black border-l-4 border-[#FFD700] border border-gray-900">
              <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest block mb-2">Instant Dispatch Helpline</span>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                For rapid orders, live delivery tracking inquiries, or bulk catering requests, phone our dispatch lines directly:
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`tel:${RESTAURANT_INFO.telephone}`}
                  className="px-6 py-3.5 bg-[#FFD700] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-colors"
                >
                  CALL {RESTAURANT_INFO.supportPhoneFormatted}
                </a>
                <a 
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-emerald-500 bg-emerald-950/20 text-emerald-400 font-black uppercase text-xs tracking-widest hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  WHATSAPP CHAT
                </a>
              </div>
            </div>
          </div>

          {/* Customer Transmission Form */}
          <div className="bg-black border border-gray-800 p-10 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-white font-[family-name:var(--font-epilogue)] text-3xl font-black uppercase tracking-tighter mb-8 flex items-center">
                <span className="w-4 h-4 bg-[#FFD700] mr-4 inline-block animate-pulse"></span>
                SEND A MESSAGE
              </h2>

              {submitted ? (
                <div className="p-8 bg-[#0a0a0a] border border-[#FFD700] text-center my-auto">
                  <h3 className="text-2xl font-black text-[#FFD700] uppercase mb-2">Message Sent</h3>
                  <p className="text-gray-300 text-sm">Thank you, our team will review your message shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="group relative">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder=" " 
                      className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" 
                    />
                    <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                      Your Name
                    </label>
                  </div>

                  <div className="group relative mt-2">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder=" " 
                      className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" 
                    />
                    <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                      Email Address
                    </label>
                  </div>

                  <div className="group relative mt-2">
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder=" " 
                      className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors resize-none" 
                    />
                    <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                      Message / Feedback
                    </label>
                  </div>

                  <MagneticButton className="bg-[#FFD700] text-black w-full py-5 font-black tracking-[0.2em] uppercase mt-6 hover:bg-white transition-colors flex items-center justify-center">
                    SUBMIT INQUIRY <ChevronRight className="w-5 h-5 ml-2" />
                  </MagneticButton>
                </form>
              )}
            </div>

            <p className="text-gray-500 text-xs mt-8">
              SwiftBite adheres to customer data confidentiality. We never sell or share contact details.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
