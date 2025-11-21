"use client"
import { useEffect } from "react"
import type React from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "locomotive-scroll/dist/locomotive-scroll.css"
import { useScrollReady } from "./ScrollReadyContainer"

export default function LocomotiveProvider({ children }: { children: React.ReactNode }) {
  const { setScrollReady } = useScrollReady()

  useEffect(() => {
    //eslint-disable-next-line
    let scroll: any

    const init = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default

      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      const scrollContainer = document.querySelector("[data-scroll-container]") as HTMLElement

      if (!scrollContainer) {
        console.warn("[v0] Scroll container not found")
        return
      }

      scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
      })

      // Sync Locomotive Scroll with ScrollTrigger
      scroll.on("scroll", ScrollTrigger.update)

      ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: scrollContainer.style.transform ? "transform" : "fixed",
      })

      // Refresh both after setup
      ScrollTrigger.addEventListener("refresh", () => scroll.update())
      ScrollTrigger.refresh()

      setScrollReady(true)
    }

    const timeoutId = setTimeout(init, 200)

    return () => {
      clearTimeout(timeoutId)
      if (scroll) {
        scroll.destroy()
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      setScrollReady(false)
    }
  }, [setScrollReady])

  return <div data-scroll-container>{children}</div>
}

//   useEffect(() => {
//     //eslint-disable-next-line
//     let scroll: any;
    
//     const init = async () => {
//       const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
//       scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]') as HTMLElement,
//         smooth: true,
//         multiplier: 1,
//         class: 'is-revealed'
//       });
//     };
    
//     // Small delay to ensure DOM is ready
//     setTimeout(() => {
//       init();
//     }, 100);

//     // Cleanup
//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);


// useEffect(()=>{
//     const loadLocomotiveScroll = async ()=>{
//         const LocomotiveScroll = (await import('locomotive-scroll')).default;
//         new LocomotiveScroll();
//     }
//     loadLocomotiveScroll();
// },[]);