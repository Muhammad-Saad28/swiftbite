import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      {/**/}
<section className="relative w-full -mt-20 pt-24 pb-16 lg:pb-24 px-margin-mobile lg:px-margin overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface to-surface-container-low">
<div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none"></div>
<div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-secondary-container/10 blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center pt-8">
<div className="lg:col-span-6 flex flex-col z-10">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high w-fit mb-space-md shadow-sm">
<span className="material-symbols-outlined text-primary-container text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>electric_bolt</span>
<span className="font-label-md text-label-md text-primary-container tracking-wider uppercase">Culinary Speed &amp; Haute Flavor</span>
</div>
<h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface mb-space-md leading-none">
          Fast. <span className="text-primary-container inline-block">Fresh.</span><br/>Tasty.
        </h1>
<p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl mb-space-xl">
          Big flavors. Searing heat. Uncompromising craft. Elevated street classics made fresh for midnight cravings and high-velocity appetites.
        </p>
<div className="flex flex-wrap items-center gap-space-md mb-space-xl">
<Link className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg transition-transform active:scale-95 shadow-[0_8px_28px_rgba(255,184,0,0.32)]" href="/order-online">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>shopping_bag</span>
<span>Order Now</span>
</Link>
<Link className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors" href="/menu">
<span>Explore Menu</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
<div className="flex items-center gap-space-lg pt-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">timer</span>
<span className="font-label-md text-label-md text-on-surface">Avg 18m Doorstep</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>local_fire_department</span>
<span className="font-label-md text-label-md text-on-surface">Charred &amp; Smashed</span>
</div>
</div>
</div>
<div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
<div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container/20 to-transparent blur-3xl scale-95 pointer-events-none"></div>
<img alt="Chef Signature Swift Smash Burger on rustic slate plate with melted aged cheddar and bacon" className="relative z-10 w-full h-full object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEuoKotgtqgNVCSYkfBMh1fbURN9Sm0lD9kexxMnO58A6XrDIr7nfTz6po5XdJE1BjC4eo4b-y5SfP1MficiVP2IJarWSC1w8jVsljQNgXfCyWOyM3Bb7QELHaMOADPmEH6EgTgHaSP2qBZWGb3gRytUxih5nMdexeyDCkem0K8SBc-2P72XdgjAbIrRsTDQkxR2saWYxYoPJWYzaWcrnaZ62P74dyBJPlukeBJQgs5O5-9rQluMR4"/>
<div className="absolute bottom-4 left-2 sm:-left-4 z-20 bg-surface-container-high/90 backdrop-blur-md p-space-md rounded-xl shadow-xl flex items-center gap-space-sm max-w-xs">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-on-primary text-[22px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified</span>
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-primary-container uppercase">Chef's Signature</p>
<p className="font-headline-sm text-[16px] text-on-surface font-bold truncate">100% Angus Double Smash</p>
</div>
</div>
<div className="absolute top-4 right-2 sm:-right-4 z-20 bg-surface-container-highest/90 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
<span className="font-price-tag text-price-tag text-on-surface">4.9</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(12k+)</span>
</div>
</div>
</div>
</div>
{/**/}
<div className="max-w-7xl mx-auto mt-space-xl pt-space-lg">
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-sm p-space-xs">
<span className="material-symbols-outlined text-primary-container text-[24px]">bolt</span>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">20 Min Average</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Lightning Delivery</div>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-xs">
<span className="material-symbols-outlined text-primary-container text-[24px]">restaurant</span>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">100% Daily Ground</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Prime Angus Beef</div>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-xs">
<span className="material-symbols-outlined text-primary-container text-[24px]">grade</span>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">4.9 / 5 Rating</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">12,000+ Satisfied Bites</div>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-xs">
<span className="material-symbols-outlined text-primary-container text-[24px]">eco</span>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">Farm-To-Table</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Crisp Fresh Greens</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
