"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../components/CartContext';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setErrorMsg('Please fill in all drop details.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // 1. Insert order into orders table
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: formData.fullName.trim(),
          customer_phone: formData.phone.trim(),
          delivery_address: formData.address.trim(),
          status: 'pending',
          order_type: 'delivery',
          payment_method: 'cash',
          subtotal: total,
          total: total
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Insert items into order_items table if menu_item_id is valid uuid
      if (orderData && orderData.id) {
        const orderItemsPayload = cart.map((item) => {
          const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(item.id);
          return {
            order_id: orderData.id,
            menu_item_id: isValidUUID ? item.id : null,
            quantity: item.quantity || 1,
            price: item.price,
            notes: isValidUUID ? null : item.name
          };
        }).filter(item => item.menu_item_id !== null);

        if (orderItemsPayload.length > 0) {
          const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItemsPayload);

          if (itemsError) {
            console.warn('Non-fatal: could not link some custom order items:', itemsError);
          }
        }

        setCreatedOrderId(orderData.id);
        setOrderConfirmed(true);
        clearCart();
      }
    } catch (err: any) {
      console.error('Order creation error:', err);
      setErrorMsg(err.message || 'Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderConfirmed) {
    return (
      <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a0a0a] border border-[#FFD700] p-10 max-w-xl w-full text-center rounded-2xl shadow-[0_0_50px_rgba(255,215,0,0.15)] mx-6"
        >
          <div className="w-20 h-20 rounded-full bg-[#FFD700]/20 text-[#FFD700] mx-auto flex items-center justify-center mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-[#FFD700] font-bold text-xs uppercase tracking-[0.3em] mb-2">Order Dispatched to Grill</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-4xl font-black uppercase text-white mb-4">
            BITE CONFIRMED!
          </h1>
          <p className="text-gray-400 mb-6 font-medium">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. Your order is registered in our kitchen database.
          </p>
          {createdOrderId && (
            <div className="bg-black/60 p-4 border border-gray-800 rounded-lg text-xs font-mono text-gray-400 mb-8 break-all">
              Order Ref: <span className="text-[#FFD700]">{createdOrderId}</span>
            </div>
          )}
          <Link href="/">
            <MagneticButton className="bg-[#FFD700] text-black w-full py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors">
              RETURN HOME
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-[#FFD700] text-sm font-bold tracking-[0.3em] uppercase mb-4">Secure Terminal</h2>
          <h1 className="font-[family-name:var(--font-epilogue)] text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            FINALIZE<br/>BITE.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-[#0a0a0a] border border-gray-900 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[#FFD700] font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase tracking-tighter mb-8">
                Order Payload
              </h3>
              
              <div className="flex flex-col gap-6 mb-8 border-b border-gray-900 pb-8 max-h-[300px] overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-500 font-bold uppercase tracking-widest">No items initialized.</p>
                ) : (
                  cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex justify-between items-center font-bold text-base uppercase">
                      <span className="text-white line-clamp-1 mr-4">{item.name}</span>
                      <span className="text-[#FFD700] whitespace-nowrap">Rs. {item.price}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="flex justify-between items-center font-black text-3xl pt-4 border-t border-gray-800">
              <span>TOTAL</span>
              <span className="text-[#FFD700]">Rs. {total}</span>
            </div>
          </div>

          {/* Details Form */}
          <div className="bg-black border border-gray-800 p-8">
            <h3 className="text-white font-[family-name:var(--font-epilogue)] text-2xl font-black uppercase tracking-tighter mb-8">
              Drop Location
            </h3>

            {errorMsg && (
              <div className="mb-6 p-4 rounded bg-red-950/50 border border-red-500 text-red-200 text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="group relative">
                <input 
                  type="text" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" 
                />
                <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Full Name
                </label>
              </div>

              <div className="group relative mt-4">
                <input 
                  type="text" 
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" 
                />
                <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Drop Coordinates (Address)
                </label>
              </div>

              <div className="group relative mt-4">
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" 
                />
                <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Comms Link (Phone Number)
                </label>
              </div>

              <MagneticButton 
                disabled={isSubmitting || cart.length === 0}
                className="bg-[#FFD700] text-black w-full py-6 font-black tracking-[0.2em] uppercase mt-8 hover:bg-white transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> DISPATCHING...
                  </span>
                ) : (
                  <>AUTHORIZE ORDER (COD) <ChevronRight className="w-6 h-6 ml-2" /></>
                )}
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
