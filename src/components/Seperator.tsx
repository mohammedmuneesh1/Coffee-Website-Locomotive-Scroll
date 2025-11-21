import Image from 'next/image';
import React from 'react'

 const Seperator = ({bg="white"}:{bg?:string}) => {


  const imgSrc = bg === 'accent' ? "/assets/separator-accent.svg" : "/assets/separator-white.svg"
  return (
    <div 
    className="relative w-[168px] h-[40px] mx-auto">
      <Image 
      src={imgSrc}
      alt="seperator"
      fill
      objectFit="contain"
      className="pointer-events-none"
      />
    </div>
  )
}

export default Seperator;
