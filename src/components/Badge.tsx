import Image from 'next/image';
import React from 'react'

 function Badge({containerStyle}:{containerStyle:string}) {
  return (
    <div className={` relative ${containerStyle} `}>
      <Image
      src={"/assets/badge.svg"}
      fill 
      alt="badge"
      objectFit="contain"
      className="pointer-events-none "
      /> 
    </div>
  )
}
export default Badge;