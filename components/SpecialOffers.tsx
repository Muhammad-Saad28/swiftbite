"use client";
import React from 'react';
import Link from 'next/link';

export default function SpecialOffers() {
  return (
    <>
      {/**/}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-gradient-to-b from-surface-container-lowest via-surface-container-low to-surface-container-lowest">
<div className="max-w-7xl mx-auto">
<div className="rounded-2xl bg-surface-container p-space-lg lg:p-space-xl relative overflow-hidden shadow-xl">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg relative z-10">
<div>
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase font-bold mb-space-xs">
              Limited-Run Combos
            </div>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl uppercase text-on-surface">Craving More? Taste the Combo Advantage</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Discover dynamic bundle savings, late-night midnight drops, and group feast packs.</p>
</div>
<Link href="/offers"  className="px-space-md py-space-sm rounded-full bg-surface-container-highest text-on-surface hover:text-primary-container font-label-md text-label-md transition-colors flex-shrink-0" >View All Offers &amp; Combos
          </Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md relative z-10">
{/**/}
<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-container font-label-md text-label-md">Save 20%</span>
<span className="font-label-md text-label-md text-on-surface-variant">Code: SWIFTLUNCH</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">The Swift Lunch Box</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Double Smash Burger + Truffle Parmesan Fries + Cold Craft Soda.</p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">$16.99 <span className="text-on-surface-variant line-through text-sm">$21.50</span></span>
<button onClick={() => alert("Offer Claimed!")} className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-transform active:scale-95" type="button">Claim</button>
</div>
</div>
{/**/}
<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary-fixed-dim font-label-md text-label-md">Feast Deal</span>
<span className="font-label-md text-label-md text-on-surface-variant">Code: GAMEDAY</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Game Day Wings &amp; Pie</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">2 Large Artisan Wood-Fired Pizzas + 16 Hot Honey Tenders + 4 Dips.</p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">$38.99 <span className="text-on-surface-variant line-through text-sm">$49.00</span></span>
<button onClick={() => alert("Offer Claimed!")} className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-transform active:scale-95" type="button">Claim</button>
</div>
</div>
{/**/}
<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded bg-error-container text-error font-label-md text-label-md">After 9 PM</span>
<span className="font-label-md text-label-md text-on-surface-variant">Auto-Applied</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Late Night Burger BOGO 50%</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Buy any signature smash burger and get the second at half off until 3 AM.</p>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="font-price-tag text-price-tag text-primary-container">50% Off 2nd</span>
<button onClick={() => alert("Offer Claimed!")} className="px-space-md py-1.5 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-md text-label-md transition-transform active:scale-95" type="button">Claim</button>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
