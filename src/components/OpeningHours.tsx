"use client"

import Image from "next/image";
import Separator from "./Seperator";
import Badge from "./Badge";
import Seperator from "./Seperator";


const OpeningHours = ()=>{
    return(
        <section
        className="relative  bg-primary min-h-[60vh] xl:h-[80vh]  mx-auto bg-cover bg-no-repeat "
                 style={{ backgroundImage: "url('/assets/opening-hours/bg.png')" }}
        >
<div className="absolute inset-0 bg-black/60 z-20" />

            <div className=" w-full flex h-full">

      



            {/* 1 */}
            <div className=" hidden relative xl:flex flex-1 justify-center items-center">
                {/* OVERLAY */}

                <Image
                src="/assets/opening-hours/img.png"
                fill
                alt=""
                quality={100}
                priority
                loading="eager"

                className="object-cover"
                />
                <Badge
                 containerStyle="w-[320px] h-[320px] absolute z-40 
                 " 
                 />
            </div>
            {/* 1 */}

            
            {/* 2 */}
             <div className="flex-1   flex flex-col
             justify-center items-center relative
             "
    
             >
             {/* OVERLAY */}

            <div className="z-20 flex flex-col items-center justify-center xl:pt-0 pt-12 ">
                <h2 className="h2 text-white mb-4 text-balance ">Opening Hours</h2>
                <Seperator bg="accent"/>
                <div className="mt-12 relative max-w-[300px] h-[220px] xl:max-w-[470px] xl:h-[280px] w-full ">
                    <Image 
                    src="/assets/opening-hours/program-badge.svg"
                    fill
                    className="object-contain pointer-events-none"
                    quality={100}
                    priority
                    alt="opening hours"
                    />
                </div>
            </div>




             </div>
            {/* 2 */}

      </div>

        </section>
    )
}

export default OpeningHours;