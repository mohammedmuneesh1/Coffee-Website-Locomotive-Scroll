

import React from 'react'
import Seperator from './Seperator';
import Badge from './Badge';
 const Hero = () => {
  return (
<section
className='h-[95vh]
xl:h-screen bg-blue-700
 relative text-white  '
 >

    {/*OVERLAY BLACK SHADOW START */}

    <div
    className="absolute inset-0 z-20 bg-hero-overlay bg-black/80 "
    />
    {/*OVERLAY BLACK SHADOW END */}


    <div className='w-full screenPadding h-full'>





    {/* VIDEO SECTION START */}
      <div 
       
        className="absolute inset-0 z-10"
      >
        <video
          autoPlay
          loop
          muted
            preload="auto"
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero/video.mp4" type="video/mp4" />
          Your browser doesn&apos;t support this video
        </video>
      </div>
      {/* VIDEO SECTION END */}



    {/*TEXT CONTAINER START */}
    <div
className='text-center 
     flex flex-col  xl:flex-row h-full
     items-center z-30 relative screenPadding'>

<div
 data-scroll
  data-scroll-speed="4"
className="flex-1 flex flex-col text-center justify-center items-center
xl:pb-12 gap-10 h-full">
{/*BADGE + H1  */}
<div

className='flex items-center flex-col'>
<Badge
containerStyle='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]   xl:w-[180px] xl:h-[180px]'
/>
<h1 className="h1 text-white text-wrap-balance">
  <span className="text-accent">Coffee </span>& Joy
</h1>
</div>

{/*SEPERATOR */}
<Seperator/>

<p>
  Experience the joy of exceptional coffee in our cozy space,
   where every cup is crafted with passion and warmth
</p>
<button
className='btn'
>
  Our Menu
</button>
</div>




    </div>
    {/*TEXT CONTAINER END */}

    </div>

</section>
  )
}


export default Hero;


