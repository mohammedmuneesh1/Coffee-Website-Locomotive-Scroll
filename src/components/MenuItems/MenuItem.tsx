"use client"

import Image from "next/image";


interface MenuItemInterface{
data:{
  imgSrc:string,
  name:string,
  description:string,
  price:string,
}
}
const MenuItem:React.FC<MenuItemInterface> = ({data})=>{
return(
    <div className="flex items-center gap-4 ">

  {/*IMAGE START */}
  <div className="relative w-[60px] h-[60px] flex-shrink-0 xl:w-[72px] xl:h-[72px] rounded-full overflow-hidden">
    <Image
      src={data?.imgSrc}
      alt={data?.name}
      fill 
      className="object-cover"
      style={{ objectFit: 'cover' }}
    />
  </div>
  {/*IMAGE END */}


      {/*TEXT START */}
      <div className="w-full">

      <div className="flex justify-between  gap-2 xl:gap-4 w-full items-baseline">

      <p
       className="font-primary uppercase font-semibold  text-[16px] xs:text-[18px] md:text-[20px] xl:text-[22px] "
      >{data?.name ??""}</p>

      {/*BORDER */}
      <div className="flex-1 w-full border-b border-dashed border-primary"/>
      {/*PRICE  */}
      <p className="text-primary leading-none font-primary font-semibold     text-[16px] xs:text-[20px] sm:text-[24px] xl:text-[30px]">{data?.price ?? ""}</p>

       </div>
       <p className="text-xs  sm:text-sm ">{data?.description ?? ""}</p>

      {/*TEXT END */}

       </div>



    </div>
)
}


export default MenuItem;