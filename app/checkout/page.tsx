"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CheckoutPage() {
  const [promoCode, setPromoCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <Header />
      <main className="w-full pt-28 pb-space-xl bg-surface min-h-screen">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-space-lg"
          >
            <h1 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl uppercase text-on-surface">Checkout</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Complete your order securely</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Left Column: Details */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 flex flex-col gap-space-lg"
            >
              {/* Delivery Details */}
              <motion.div variants={itemVariants} className="bg-surface-container-low rounded-2xl p-space-lg shadow-sm border border-surface-container-high">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-md border-b border-surface-container pb-space-sm">Delivery Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-1">Full Name</label>
                    <input type="text" className="w-full px-space-md py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary-container focus:outline-none text-on-surface transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-space-md py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary-container focus:outline-none text-on-surface transition-colors" placeholder="+92 300 1234567" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="font-label-md text-label-md text-on-surface-variant block mb-1">Delivery Address</label>
                    <textarea rows={3} className="w-full px-space-md py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary-container focus:outline-none text-on-surface transition-colors" placeholder="Street address, city, area..."></textarea>
                  </div>
                </div>
              </motion.div>

              {/* Promo Code */}
              <motion.div variants={itemVariants} className="bg-surface-container-low rounded-2xl p-space-lg shadow-sm border border-surface-container-high">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-md border-b border-surface-container pb-space-sm">Promo Code</h2>
                <div className="flex gap-space-sm">
                  <input 
                    type="text" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-space-md py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary-container focus:outline-none text-on-surface transition-colors" 
                    placeholder="Enter promo code" 
                  />
                  <button className="px-space-lg py-space-sm bg-surface-container-highest hover:bg-primary-container hover:text-on-primary text-on-surface rounded-lg font-label-md text-label-md transition-colors shadow-sm">
                    Apply
                  </button>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div variants={itemVariants} className="bg-surface-container-low rounded-2xl p-space-lg shadow-sm border border-surface-container-high">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-md border-b border-surface-container pb-space-sm">Payment Method</h2>
                <div className="flex flex-col gap-space-md">
                  
                  <label className={`flex items-center gap-space-md p-space-md rounded-xl border cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-primary-container bg-primary-container/5' : 'border-outline-variant hover:border-primary-container/50 bg-surface'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="card" 
                      checked={paymentMethod === 'card'} 
                      onChange={() => setPaymentMethod('card')} 
                      className="w-5 h-5 accent-primary-container"
                    />
                    <div className="flex items-center gap-space-sm text-on-surface">
                      <span className="material-symbols-outlined text-primary-container">credit_card</span>
                      <span className="font-label-lg font-medium">Credit / Debit Card</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-space-md p-space-md rounded-xl border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary-container bg-primary-container/5' : 'border-outline-variant hover:border-primary-container/50 bg-surface'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => setPaymentMethod('cod')}
                      className="w-5 h-5 accent-primary-container"
                    />
                    <div className="flex items-center gap-space-sm text-on-surface">
                      <span className="material-symbols-outlined text-primary-container">payments</span>
                      <span className="font-label-lg font-medium">Cash on Delivery</span>
                    </div>
                  </label>

                </div>

                {paymentMethod === 'card' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-space-md pt-space-md border-t border-surface-container"
                  >
                    <div className="grid grid-cols-2 gap-space-md">
                      <div className="col-span-2">
                        <label className="font-label-md text-label-md text-on-surface-variant block mb-1">Card Number</label>
                        <input type="text" className="w-full px-space-md py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary-container focus:outline-none text-on-surface" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div>
                        <label className="font-label-md text-label-md text-on-surface-variant block mb-1">Expiry Date</label>
                        <input type="text" className="w-full px-space-md py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary-container focus:outline-none text-on-surface" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="font-label-md text-label-md text-on-surface-variant block mb-1">CVC</label>
                        <input type="text" className="w-full px-space-md py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary-container focus:outline-none text-on-surface" placeholder="123" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

            </motion.div>

            {/* Right Column: Order Summary */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="lg:col-span-5"
            >
              <div className="bg-surface-container rounded-3xl p-space-lg shadow-xl sticky top-28 border border-surface-container-high">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-lg uppercase">Order Summary</h2>
                
                <div className="flex flex-col gap-space-md mb-space-xl overflow-y-auto max-h-[40vh] pr-2 scrollbar-thin scrollbar-thumb-surface-container-high scrollbar-track-transparent">
                  {/* Item 1 */}
                  <div className="flex gap-space-sm">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-lowest flex-shrink-0">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEuoKotgtqgNVCSYkfBMh1fbURN9Sm0lD9kexxMnO58A6XrDIr7nfTz6po5XdJE1BjC4eo4b-y5SfP1MficiVP2IJarWSC1w8jVsljQNgXfCyWOyM3Bb7QELHaMOADPmEH6EgTgHaSP2qBZWGb3gRytUxih5nMdexeyDCkem0K8SBc-2P72XdgjAbIrRsTDQkxR2saWYxYoPJWYzaWcrnaZ62P74dyBJPlukeBJQgs5O5-9rQluMR4" className="w-full h-full object-cover" alt="item" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-start">
                        <h4 className="font-label-lg font-bold text-on-surface">The Mega Swift Smash Experience</h4>
                        <span className="font-label-md font-bold text-primary-container">PKR 15.95</span>
                      </div>
                      <span className="font-body-sm text-on-surface-variant">Qty: 2</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-space-sm">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-lowest flex-shrink-0">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9WUlWypaEjCOzCSARcMTL2RgQIexzRt169OAIsIVkqOMOTfTZQ2djGEv3XC7xAkbhzhFetAHBC5EAXnYB1vklslDU6bvnCIyS8fOJcxVazwwFmzk4PP8FIzAMlbc7YmEYWldpOVxDobyQZEnzkqj7-BfL4BC5181VB6onS3-m9FRpYSqLBCkUlv-95rtfsoX2pfTJauCiKQa7M2LGliagKhtnv9TyZTedQwycesvUuzTnC-RdKE5W" className="w-full h-full object-cover" alt="item" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-start">
                        <h4 className="font-label-lg font-bold text-on-surface">Nashville Fire Crunch Box</h4>
                        <span className="font-label-md font-bold text-primary-container">PKR 18.00</span>
                      </div>
                      <span className="font-body-sm text-on-surface-variant">Qty: 1</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-surface-container-high pt-space-md flex flex-col gap-space-sm font-label-md text-label-md">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>PKR 49.90</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Tax (13%)</span>
                    <span>PKR 6.48</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Delivery Fee</span>
                    <span>PKR 2.00</span>
                  </div>
                  
                  <div className="border-t border-surface-container-high mt-space-xs pt-space-md flex justify-between items-center text-on-surface font-headline-sm">
                    <span>Total</span>
                    <span className="text-primary-container font-price-tag text-2xl">PKR 58.38</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  className="w-full mt-space-xl py-4 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg transition-colors shadow-[0_0_20px_rgba(255,184,0,0.3)] uppercase tracking-wide font-bold"
                >
                  Place Order
                </motion.button>
                <div className="mt-space-sm flex justify-center items-center gap-1 text-on-surface-variant font-body-sm">
                  <span className="material-symbols-outlined text-[16px]">lock</span> Secure Checkout
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
