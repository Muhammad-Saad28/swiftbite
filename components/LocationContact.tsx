import React from 'react';

export default function LocationContact() {
  return (
    <>
      {/**/}
<section className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
{/**/}
<div className="lg:col-span-6 flex flex-col p-space-lg rounded-2xl bg-surface-container-low shadow-lg">
<div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container w-fit mb-space-sm">
<span className="material-symbols-outlined text-primary-container text-[18px]">near_me</span>
<span className="font-label-md text-label-md text-primary-container uppercase">Gulberg III Flagship</span>
</div>
<h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl uppercase text-on-surface mb-space-md">Find Your Nearest SwiftBite</h2>
{/**/}
<div className="flex items-center rounded-lg bg-surface-container-high px-space-md py-2 mb-space-lg shadow-sm">
<span className="material-symbols-outlined text-on-surface-variant mr-space-xs">search</span>
<input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none" placeholder="Enter zip code, district or city..." type="text"/>
<button className="px-space-md py-1 rounded bg-primary-container text-on-primary font-label-md text-label-md flex-shrink-0" type="button">Locate</button>
</div>
<div className="flex flex-col gap-space-md text-on-surface-variant font-body-sm text-body-sm mb-space-lg">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">location_on</span>
<div>
<strong className="text-on-surface block font-label-lg text-label-lg">M.M. Alam Road</strong>
<span>Gulberg III, Lahore, Pakistan</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">schedule</span>
<div>
<strong className="text-on-surface block font-label-lg text-label-lg">Opening Hours</strong>
<div>Mon - Thu: 11:00 AM – 11:00 PM</div>
<div className="text-primary-container font-semibold">Fri - Sat: 11:00 AM – 01:00 AM (Late Night Express)</div>
<div>Sunday: 11:00 AM – 10:00 PM</div>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">call</span>
<div>
<strong className="text-on-surface block font-label-lg text-label-lg">Direct Line</strong>
<span>+92 305 4449151</span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<a className="px-space-lg py-3 rounded-full bg-primary-container hover:bg-secondary-container text-on-primary font-label-lg text-label-lg transition-transform active:scale-95 shadow-sm inline-flex items-center gap-space-xs" href="#">
<span className="material-symbols-outlined text-[18px]">directions</span>
<span>Get Directions</span>
</a>
<a className="px-space-lg py-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors inline-flex items-center gap-space-xs" href="#">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Book Table / Event</span>
</a>
</div>
</div>
{/**/}
<div className="lg:col-span-6 h-96 lg:h-[460px] rounded-2xl overflow-hidden shadow-xl bg-surface-container-high relative">
<div className="w-full h-full bg-[#111]">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.840742512686!2d74.3409166!3d31.5046271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a27891153%3A0xc6fb6fc921319760!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714488392120!5m2!1sen!2s" className="w-full h-full opacity-60 filter grayscale invert contrast-125" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-4 left-4 right-4 p-space-sm rounded-lg bg-surface/90 backdrop-blur-md flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-md text-label-md text-on-surface">Kitchen is Active &amp; Taking Orders</span>
</div>
<span className="font-label-md text-label-md text-primary-container font-bold">14 min wait</span>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
