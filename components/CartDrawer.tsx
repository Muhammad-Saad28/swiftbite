"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CartDrawer() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(pathname !== '/');

  useEffect(() => {
    if (pathname !== '/') {
      setIsVisible(true);
      return;
    }

    const handleShow = () => setIsVisible(true);
    const handleHide = () => setIsVisible(false);

    window.addEventListener('header:show', handleShow);
    window.addEventListener('header:hide', handleHide);

    return () => {
      window.removeEventListener('header:show', handleShow);
      window.removeEventListener('header:hide', handleHide);
    };
  }, [pathname]);

  return (
    <>
      {/**/}
<div className={`sticky bottom-4 z-40 px-margin-mobile lg:px-margin max-w-4xl mx-auto w-full pointer-events-none transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
<div className="p-space-sm rounded-full bg-surface/95 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-space-md pointer-events-auto">
<div className="flex items-center gap-space-sm pl-space-md">
<div className="w-9 h-9 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block">Express Midnight Kitchen</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Free rapid doorstep on orders PKR 25+</span>
</div>
</div>
<Link className="px-space-xl py-space-sm rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,184,0,0.4)] flex items-center gap-space-xs" href="/order-online">
<span>Start Your Order</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
</div>
    </>
  );
}
