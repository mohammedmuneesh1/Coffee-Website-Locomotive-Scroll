"use client";

import Hero from "@/components/Hero";
import { useEffect } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css';

const HomePage = () => {

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

 new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]') as HTMLElement,
  smooth: true
});
    };

    loadLocomotiveScroll();
  }, []);




  return (
    <div data-scroll-container className="h-full">
      <Hero />

      <div
        data-scroll
        data-scroll-speed="1"
        className="h-screen bg-gray-500 w-full"
      />
    </div>
  );
};

export default HomePage;







1. data-scroll

This marks an element as trackable by Locomotive Scroll.

If you don’t add this, Locomotive won’t apply any scroll-based effects to that element.

In English:
This attribute tells Locomotive:
“Watch this element while scrolling.”

Then you can apply modifiers like speed, position, class toggles, parallax, etc.

Example:
<div data-scroll>
  I’m scroll-reactive
</div>

2. data-scroll-speed

This is the parallax speed multiplier.

It controls how fast or slow the element moves relative to the scroll.

Think of it like this:

0 → no movement

1 → normal speed (same as scroll)

2 → moves faster than the scroll

-1 → moves opposite direction (reverse parallax)

higher number → stronger parallax





