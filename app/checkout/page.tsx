"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../components/CartContext';
import MagneticButton from '../../components/ui/MagneticButton';
import { ChevronRight, CheckCircle2, Loader2, Phone, MapPin, MessageCircle, ExternalLink, ArrowLeft } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [createdOrderRef, setCreatedOrderRef] = useState<string | null>(null);
  const [confirmedItems, setConfirmedItems] = useState<{ name: string; quantity: number; price: number }[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // WhatsApp numbers for SwiftBite
  const PRIMARY_WA_NUMBER = "923212490006"; // 0321-2490006
  const ALTERNATE_WA_NUMBER = "923064656951"; // 0306-4656951

  const buildWhatsAppMessage = (orderRef: string, items: { name: string; quantity: number; price: number }[]) => {
    const lines = [
      `🍔 *NEW ORDER — SWIFTBITE* 🍔`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `*Order Ref:* #${orderRef}`,
      `*Customer:* ${formData.fullName.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      `*Delivery Address:* ${formData.address.trim()}`,
    ];

    if (formData.notes.trim()) {
      lines.push(`*Special Instructions:* ${formData.notes.trim()}`);
    }

    lines.push(
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `*ORDER ITEMS:*`,
      ...items.map(it => `• ${it.quantity}x ${it.name} — Rs. ${it.price * it.quantity}`),
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `*TOTAL:* Rs. ${total} (Cash on Delivery)`,
      `*Status:* Stored in POS & dispatched to kitchen`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Sent from SwiftBite Online Ordering System_`
    );

    return lines.join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setErrorMsg('Please fill in your name, delivery address, and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // Aggregate identical cart items
      const aggregated: { [key: string]: { id: string; name: string; price: number; quantity: number } } = {};
      for (const item of cart) {
        const key = item.id || item.name;
        if (!aggregated[key]) {
          aggregated[key] = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 0
          };
        }
        aggregated[key].quantity += (item.quantity || 1);
      }
      const aggregatedList = Object.values(aggregated);

      // 1. Insert order into orders table
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: formData.fullName.trim(),
          customer_phone: formData.phone.trim(),
          delivery_address: formData.address.trim(),
          notes: formData.notes.trim() || null,
          status: 'pending',
          order_type: 'delivery',
          payment_method: 'cash',
          subtotal: total,
          total: total,
          tax: 0,
          discount_amount: 0,
          discount_type: 'none'
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Fetch existing menu_items to guarantee foreign key resolution
      const { data: dbMenuItems } = await supabase
        .from('menu_items')
        .select('id, name');

      const nameToIdMap: { [name: string]: string } = {};
      if (dbMenuItems) {
        for (const mi of dbMenuItems) {
          nameToIdMap[mi.name.toLowerCase().trim()] = mi.id;
        }
      }

      // 3. Insert items into order_items table
      if (orderData && orderData.id) {
        const orderItemsPayload = aggregatedList.map((item) => {
          const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(item.id);
          let targetMenuItemId = isValidUUID ? item.id : null;

          if (!targetMenuItemId) {
            // Match by name
            targetMenuItemId = nameToIdMap[item.name.toLowerCase().trim()] || null;
          }

          // If still null, fallback to first item in DB if available
          if (!targetMenuItemId && dbMenuItems && dbMenuItems.length > 0) {
            targetMenuItemId = dbMenuItems[0].id;
          }

          return {
            order_id: orderData.id,
            menu_item_id: targetMenuItemId,
            quantity: item.quantity,
            price: item.price,
            notes: item.name
          };
        }).filter(item => item.menu_item_id !== null);

        if (orderItemsPayload.length > 0) {
          const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItemsPayload);

          if (itemsError) {
            console.warn('Non-fatal: could not link some order items:', itemsError);
          }
        }

        const shortRef = orderData.id.slice(0, 8).toUpperCase();
        setCreatedOrderRef(shortRef);
        setConfirmedItems(aggregatedList);
        setOrderConfirmed(true);

        // Prepare WhatsApp message & trigger open
        const waMsg = buildWhatsAppMessage(shortRef, aggregatedList);
        const primaryWaUrl = `https://wa.me/${PRIMARY_WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

        try {
          window.open(primaryWaUrl, '_blank');
        } catch (e) {
          // Popup might be blocked, button is available on confirmation screen
        }

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
    const waMsg = buildWhatsAppMessage(createdOrderRef || 'ORDER', confirmedItems);
    const primaryWaUrl = `https://wa.me/${PRIMARY_WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    const altWaUrl = `https://wa.me/${ALTERNATE_WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    return (
      <div className="w-full bg-black min-h-screen text-[#e5e2e1] pt-32 pb-20 flex items-center justify-center px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a0a0a] border border-[#FFD700] p-6 sm:p-10 max-w-2xl w-full text-center rounded-2xl shadow-[0_0_50px_rgba(255,215,0,0.15)]"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-6 border border-emerald-500/40 animate-pulse">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3">
            ✓ Logged into Kitchen POS System
          </span>

          <h1 className="font-[family-name:var(--font-epilogue)] text-3xl sm:text-4xl font-black uppercase text-white mb-2 tracking-tight">
            ORDER CONFIRMED!
          </h1>
          
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. Your order has been recorded into the live restaurant POS database and sent to the kitchen.
          </p>

          {createdOrderRef && (
            <div className="bg-black/80 p-4 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-400 mb-6 flex items-center justify-between">
              <span>Order Reference:</span>
              <span className="text-[#FFD700] text-base font-black tracking-wider">#{createdOrderRef}</span>
            </div>
          )}

          {/* Delivery & Items Summary */}
          <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-4 text-left text-xs space-y-2 mb-6">
            <div className="flex items-start gap-2 text-zinc-300">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{formData.address}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{formData.phone}</span>
            </div>
            <div className="pt-2 border-t border-zinc-900 space-y-1">
              {confirmedItems.map((it, idx) => (
                <div key={idx} className="flex justify-between text-zinc-400">
                  <span>{it.quantity}x {it.name}</span>
                  <span className="text-zinc-200">Rs. {it.price * it.quantity}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-zinc-900 flex justify-between font-bold text-sm text-white">
              <span>Total Bill (COD)</span>
              <span className="text-[#FFD700]">Rs. {total}</span>
            </div>
          </div>

          {/* WhatsApp Action Buttons */}
          <div className="space-y-3 mb-8">
            <p className="text-xs text-zinc-400 font-medium">
              A copy has been pre-formatted for WhatsApp. Click below to chat directly with our dispatch branch:
            </p>

            <a 
              href={primaryWaUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-black uppercase text-xs sm:text-sm py-4 px-6 rounded-xl transition-all shadow-[0_0_25px_rgba(37,211,102,0.3)] tracking-wider"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Send Order to WhatsApp (0321-2490006)</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>

            <a 
              href={altWaUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold uppercase text-xs py-3 px-6 rounded-xl transition-colors tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Alternate WhatsApp (0306-4656951)</span>
            </a>
          </div>

          <Link href="/">
            <MagneticButton className="bg-[#FFD700] text-black w-full py-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-colors">
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
          <div className="bg-[#0a0a0a] border border-gray-900 p-8 flex flex-col justify-between rounded-xl">
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

            <div className="space-y-3 pt-4 border-t border-gray-800">
              <div className="flex justify-between text-xs text-zinc-400 uppercase tracking-wider">
                <span>Payment</span>
                <span className="text-emerald-400 font-bold">Cash on Delivery</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-400 uppercase tracking-wider">
                <span>Dispatches To</span>
                <span className="text-zinc-200">POS & Kitchen System</span>
              </div>
              <div className="flex justify-between items-center font-black text-3xl pt-2 text-white">
                <span>TOTAL</span>
                <span className="text-[#FFD700]">Rs. {total}</span>
              </div>
            </div>
          </div>

          {/* Details Form */}
          <div className="bg-black border border-gray-800 p-8 rounded-xl">
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
                  Drop Coordinates (Delivery Address)
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
                  Comms Link (Phone / WhatsApp Number)
                </label>
              </div>

              <div className="group relative mt-4">
                <input 
                  type="text" 
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b-2 border-gray-800 text-white py-4 focus:outline-none focus:border-[#FFD700] transition-colors" 
                />
                <label className="absolute left-0 top-4 text-gray-600 font-bold tracking-widest uppercase text-xs transition-all peer-focus:-top-2 peer-focus:text-[#FFD700] peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[#FFD700] peer-not-placeholder-shown:text-[10px]">
                  Special Instructions (Optional)
                </label>
              </div>

              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Orders are routed live to SwiftBite POS & sent to WhatsApp (0321-2490006).</span>
              </div>

              <MagneticButton 
                disabled={isSubmitting || cart.length === 0}
                className="bg-[#FFD700] text-black w-full py-6 font-black tracking-[0.2em] uppercase mt-4 hover:bg-white transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> DISPATCHING TO POS...
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
