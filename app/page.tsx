import React from 'react';
import SplashScreen from '../components/SplashScreen';

import Hero from '../components/Hero';
import InteractiveMenu from '../components/ui/InteractiveMenu';
import BuildYourBite from '../components/ui/BuildYourBite';
import SwiftBiteDrop from '../components/ui/SwiftBiteDrop';
import WhySwiftBiteScroll from '../components/ui/WhySwiftBiteScroll';
import LiveOrderTracking from '../components/ui/LiveOrderTracking';
import FeaturedMenu from '../components/FeaturedMenu';
import SignatureDishes from '../components/SignatureDishes';
import SpecialOffers from '../components/SpecialOffers';
import AboutSwiftBite from '../components/AboutSwiftBite';
import LocationContact from '../components/LocationContact';
import CartDrawer from '../components/CartDrawer';



export default function Home() {
  return (
    <>
      <SplashScreen />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-5rem)]"><div className="flex flex-col w-full">
<Hero />
<InteractiveMenu />
<BuildYourBite />
<SwiftBiteDrop />
<WhySwiftBiteScroll />
<LiveOrderTracking />
<AboutSwiftBite />
<LocationContact />
<CartDrawer /></div></main>
    </>
  );
}
