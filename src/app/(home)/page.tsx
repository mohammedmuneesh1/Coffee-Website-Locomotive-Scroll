"use client";

import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import About from "@/components/About";
import Menu from "@/components/MenuItems/Menu";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";

const HomePage = () => {

  return (
    <>
<section data-scroll-section><Hero /></section>
<section data-scroll-section><Explore /></section>
<section data-scroll-section>
  <About />
</section>
<section data-scroll-section>
  <Menu/>
</section>

<section data-scroll-section>
<Testimonials/>
</section>

<section data-scroll-section>
  <OpeningHours/>
</section>
    </>
  );
};

export default HomePage;


{/* <section data-scroll-section className="h-screen bg-blue-400" /> */}

   // <>
    // <div className="h-screen bg-gray-800"/>
    // <About/>
    // <div className="h-screen bg-blue-800"/>
    
    // </>


    {/* <div
    data-scroll
   data-scroll-speed="1"
    className="h-screen bg-gray-500 w-full" 
    />
    <div
    data-scroll
   data-scroll-speed="0.5"
    className="h-screen bg-green-500 w-full" 
    />
    <div 
    className="h-screen bg-pink-500 w-full"
     /> */}




{/*DONT DELETE MUST CHECK THE PARALLAX EFFECT START
    data-scroll
    data-scroll-speed="1"
*/}

      {/* <div
        data-scroll
        data-scroll-speed="1"
        className="h-screen bg-gray-500 w-full"
      /> */}

    {/*DONT DELETE MUST CHECK THE PARALLAX EFFECT END 
    data-scroll
    data-scroll-speed="1"
    */}

