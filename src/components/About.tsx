"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Image from "next/image"
import Badge from "./Badge"
import Seperator from "./Seperator"
import { useScrollReady } from "@/app/provider/ScrollReadyContainer"

const aboutUsData = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Today, we are a beloved brand known for our commitment to quality and sustainability. Driven by passion, we craft memorable coffee experiences—one cup at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Zenbrew, we promise the finest coffee with a meaningful impact. We ethically source beans from sustainable farms, honoring both people and the planet. Our meticulous roasting brings out rich, satisfying flavors in every cup. Quality, sustainability, and community guide everything we do.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "Behind every great cup is our dedicated team. Our skilled baristas and expert roasters work with passion, precision, and creativity to make each coffee experience special. Meet the people who bring care, craft, and character to every cup.",
  },
]

const About = () => {
  const scrollSectionRef = useRef(null)
  const ScrollTriggerRef = useRef(null)
  const { isScrollReady } = useScrollReady()

  useLayoutEffect(() => {
    // Don't run animation if scroll isn't ready yet
    if (!isScrollReady) {
      console.log("[v0] Waiting for scroll to be ready...")
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const animation = gsap.fromTo(
      scrollSectionRef.current,
      { translateX: 0 },
      //The horizontal container starts at position 0px along the X-axis.
      {
        translateX: "-200vw",
//GSAP will slide your section left by 200 viewport widths.


        ease: "none",
        //GSAP won’t slow down or speed up — it moves perfectly tied to the scroll.
        scrollTrigger: {
          trigger: ScrollTriggerRef.current,
          //This element decides when the animation starts.
         //Usually the outer wrapper of your horizontal section.
          start: "top top",
          //When the top of the trigger hits
         //The top of the viewport
         //start: "<TRIGGER EDGE> <VIEWPORT EDGE>"
          end: "1800vw top",
          //"<SCROLL DISTANCE> <VIEWPORT EDGE>"
          //This tells ScrollTrigger how long the scroll should stay pinned.
         // You picked a giant magic number — fine — it works because your container is 300vw wide and you like overkill.
         //Ideally you'd use: end: () => scrollSectionRef.current.offsetWidth   
         //------ IMP ---------------------
         //Your panel width is: 300vw
         //Meaning you ONLY need to scroll 300vw worth of vertical distance to move through the whole horizontal strip.
         //1800vw
         //Which is like:
        //“You only need 3 screens of scroll... LET'S USE 18 JUST TO BE SAFE.”
        //It still works because extra scroll distance doesn't break the logic — GSAP just completes the tween way before the full 1800vw.
        //Option A: Exact width
        //end: () => scrollSectionRef.current.offsetWidth



//------ IMP ---------------------
          scrub: 0.6, //this cause scroll up time , move the element to right
          //If scrub = 0.6 → smooth delayed follow
          //Means:
          //✔ 1. Scroll Position = How far down the page you have scrolled
// “As the scroll position increases, move the animation forward.
// As the scroll position decreases, move the animation backward.”
//Scrub = bi-directional. Always.Every time. Forever.

          pin: true,
          //This locks the section in place while the scroll happens.
        //Without pin, the page just scrolls and nothing happens.
//         Locking means:
// The section stays fixed on the screen
// Until the animation finishes
// Essential for horizontal scroll illusions.
          scroller: "[data-scroll-container]",
// This tells ScrollTrigger:
// “Don’t listen to normal browser scroll.
// Use Locomotive Scroll's fake scroller.”
          pinType: "transform",
// Locomotive uses transform: translate3d(...) to scroll.
// Pinned elements normally use position: fixed,
// but fixed inside a transformed container DOES NOT WORK.
// This line forces ScrollTrigger to use transformed pinning instead of fixed pinning.

        },
      },


    )

    return () => {
      animation.kill()
    }
  }, [isScrollReady])

  return (
    <div className="overflow-hidden bg-primary">
      <div ref={ScrollTriggerRef}>
        <div ref={scrollSectionRef} className="h-screen w-[300vw] flex relative">
          {aboutUsData?.map((val, index: number) => (
            <div key={index} className="w-screen h-screen flex flex-col justify-center items-center relative">
              <div className="container mx-auto w-full  ">
                <div className="flex gap-[30px] relative   w-full">
                  {/* TEXT START */}
                  <div
                    className="flex-1 w-full  flex flex-col justify-center items-center
                            "
                  >
                    <Badge containerStyle="w-[180px] h-[180px] " />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 text-white mb-4 ">
                        <span className="mr-4">{val?.title?.split(" ")[0]}</span>
                        <span className="text-accent">{val?.title?.split(" ")[1]}</span>
                      </h2>

                      {/*SEPEARTOR */}
                      <div className="mb-8">
                        <Seperator />
                      </div>

                      {/*DESCRIPTION */}
                      <p className="leading-relaxed mb-16">{val?.description}</p>

                      {/*BTN START */}
                      <button className="btn">See More</button>
                      {/*BTN END */}
                    </div>
                  </div>

                  {/* TEXT END */}

                  {/*Image Start */}

                  <div className="hidden xl:flex flex-1  w-full h-[70vh] relative ">
                    <Image
                      src={val?.imgSrc || "/placeholder.svg"}
                      alt={val?.title}
                      fill
                      className="object-contain"
                      quality={100}
                      priority
                    />
                  </div>

                  {/*Image End */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About