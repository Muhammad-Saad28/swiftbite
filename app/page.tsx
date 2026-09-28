import React from 'react';

import Hero from '../components/Hero';
import FeaturedMenu from '../components/FeaturedMenu';
import WhySwiftBite from '../components/WhySwiftBite';
import SignatureDishes from '../components/SignatureDishes';
import SpecialOffers from '../components/SpecialOffers';
import AboutSwiftBite from '../components/AboutSwiftBite';
import CustomerFavorites from '../components/CustomerFavorites';
import LocationContact from '../components/LocationContact';
import CartDrawer from '../components/CartDrawer';



export default function Home() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-5rem)]"><div className="flex flex-col w-full">
<Hero />
<FeaturedMenu />
<WhySwiftBite />
<SignatureDishes />
<SpecialOffers />
<AboutSwiftBite />
<CustomerFavorites />
<LocationContact />
<CartDrawer /></div></main>
    </>
  );
}
