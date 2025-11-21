"use client"

import Image from "next/image";


const Explore = ()=>{
    return(
        <section
       className="
       max-w-full w-full 
        xl:h-[80vh]
        xl:py-0 py-12 
       ">
            <div
             className="screenPadding   h-full xl:flex xl:items-center xl:justify-center"
            >

                <div className="
                w-full 
                flex flex-col lg:flex-row 
                gap-12
                xl:gap-20
                ">


             {/* ITEM-1 + ITEM-2 START */}

                        <div 
                    className="flex-1 w-full 
                     flex flex-col justify-around items-end
                     text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0 "
                    >


                        {/*ITEM-1 START */}
                        <div 
                        className="relative flex items-start"
                        >
                            <div
                            //  className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end"
                            className="xl:flex xl:flex-col xl:items-end
                            xl:text-right
                            "
                             >


                                {/*IMAGE START  */}

                                <div
                                 className="mb-6  flex justify-center items-center"
                                >
                                    <Image 
                                    src={"/assets/explore/coffees/coffee-1.svg"}
                                    width={56}
                                    height={56}
                                    objectFit="contain"
                                    alt="item-1 "
                                    className="pointer-events-none"
                                    />
                                </div>

                                {/*IMAGE END  */}


                                {/*TEXT CONTENT START */}

                                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                                    Rich Expresso Blends 
                                </h3>

                                <p  className="max-w-[400px] ">
Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.
                                </p>

                                {/*TEXT CONTENT END */}




                            </div>
                        </div>
                        {/*ITEM-1 END */}

     
                        {/*ITEM-2 START */}
                        <div 
                        className="relative flex items-start"
                        >
                            <div
                            //  className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end"
                            className="xl:flex xl:flex-col xl:items-end
                            xl:text-right
                            "
                             >


                                {/*IMAGE START  */}

                                <div
                                 className="mb-6  flex justify-center items-center"
                                >
                                    <Image 
                                    src={"/assets/explore/coffees/coffee-2.svg"}
                                    width={56}
                                    height={56}
                                    objectFit="contain"
                                    alt="item-1 "
                                    className="pointer-events-none"
                                    />
                                </div>

                                {/*IMAGE END  */}


                                {/*TEXT CONTENT START */}

                                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                                    Rich Expresso Blends 
                                </h3>

                                <p  className="max-w-[400px] ">
Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.
                                </p>

                                {/*TEXT CONTENT END */}




                            </div>
                        </div>
                        
                        {/*ITEM-2   END */}



                        <h1>
                        1
                        </h1>

                        </div>

            {/* ITEM-1 + ITEM-2 END */}





                        {/*IMAGE START */}
             <div className="hidden xl:flex justify-center">

                     <div
                //  className="relative 
                //  w-[180px]  md:w-[322px] h-[310px] md:h-[480px] "
                className="relative 
                 w-[180px]  md:w-[322px] h-[310px] md:h-[580px] "
                >

                    


                        <Image
                        src={"/assets/explore/cup.png"}
                        alt="cup image"
                        fill 
                        objectFit="contain"
                        className="pointer-events-auto"
                        quality={100}
                        priority
                        data-scroll 
                        data-scroll-speed='1.5' 
                        />
                   </div>
              </div>
                 {/*IMAGE END */}


   {/*ITEM-3 + ITEM-4 START */}

                 <div
                 className="flex-1 w-full  
                    flex flex-col justify-around items-start
                    text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0"
                 >

    {/*ITEM-3 START */}
                        <div 
                        className="relative flex items-start"
                        >
                            <div
                            //  className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end"
                            className="xl:flex xl:flex-col xl:items-start
                            xl:text-left
                            "
                             >


                                {/*IMAGE START  */}

                                <div
                                 className="mb-6  flex justify-center xl:justify-start items-center"
                                >
                                    <Image 
                                    src={"/assets/explore/coffees/coffee-3.svg"}
                                    width={56}
                                    height={56}
                                    objectFit="contain"
                                    alt="item-1 "
                                    className="pointer-events-none"
                                    />
                                </div>

                                {/*IMAGE END  */}


                                {/*TEXT CONTENT START */}

                                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                             Smooth Cold Brews

                                </h3>

                                <p  className="max-w-[400px] ">
Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.
                                </p>

                                {/*TEXT CONTENT END */}




                            </div>
                        </div>
    {/*ITEM-3   END */}


   {/*ITEM-4 START */}
                        <div 
                        className="relative flex items-start"
                        >
                            <div
                            //  className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end"
                            className="xl:flex xl:flex-col xl:items-start
                            xl:text-left
                            "
                             >


                                {/*IMAGE START  */}

                                <div
                                 className="mb-6  flex justify-center xl:justify-start items-center"
                                >
                                    <Image 
                                    src={"/assets/explore/coffees/coffee-4.svg"}
                                    width={56}
                                    height={56}
                                    objectFit="contain"
                                    alt="item-1 "
                                    className="pointer-events-none"
                                    />
                                </div>

                                {/*IMAGE END  */}


                                {/*TEXT CONTENT START */}

                                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                                   Flavorful Latte Varieties
                                </h3>

                                <p  className="max-w-[400px] ">
Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.

                                </p>

                                {/*TEXT CONTENT END */}




                            </div>
                        </div>
    {/*ITEM-4   END */}





                 </div>

{/*ITEM-3 + ITEM-4 END */}




                    </div>




                {/* </div> */}




            </div>

        </section>
    )
}
export default Explore;




           {/* <div 
                    className="flex justify-center w-full"
                    >

                        <div className="flex-1 w-full bg-red-400 flex flex-col justify-around items-end  text-center xl:text-left 
                        gap-12 xl:gap-0  max-w-[400px] mx-auto xl:max-w-none 
                        xl:mx-0
                        ">


                        </div> */}