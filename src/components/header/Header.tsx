"use client"
import React, { useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";


const Header = ()=>{

    const [navActive,setNavActive] = useState<boolean>(false);


    return(
      <>
        <header className="    absolute top-[40px] left-0 right-0 z-[60]">
            <div className="mx-auto screenPadding  ">
                <div className="flex justify-between items-center">

                    {/*LOGO  START */}
                    <Link href="/"
                    className="block relative w-[100px] h-[40px] xl:w-[120px] z-60"
                    >

                    <Image 
                    src={"/assets/logo.svg"}
                    fill
                    alt="logo"
                    objectFit="contain"
                    className=""
                    />
                    </Link>
                    {/*LOGO  END */}

                    {/*REGISTRATION BUTTON START */}

<button
  onClick={() => setNavActive(false)}
  className="w-8 h-6 relative text-accent flex items-center justify-center z-[60] cursor-pointer"
>
  {/* Top bar */}
  <span
    className={`
      absolute left-0 w-full h-[2px] bg-current transition-all duration-300
      ${navActive ? "top-1/2 rotate-45" : "top-0"}
    `}
  />

  {/* Middle bar */}
  <span
    className={`
      absolute left-0 w-full h-[2px] bg-current transition-all duration-300
      ${navActive ? "opacity-0" : "top-1/2"}
    `}
  />

  {/* Bottom bar */}
  <span
    className={`
      absolute left-0 w-full h-[2px] bg-current transition-all duration-300
      ${navActive ? "top-1/2 -rotate-45" : "bottom-0"}
    `}
  />
</button>

                    {/*REGISTRATION BUTTON END */}


                </div>

            </div>

            

            <AnimatePresence mode="wait">
              {
                navActive && <Nav
                setNavActive={setNavActive}
                />
              }
            </AnimatePresence>
        </header>
              </>

    )
}

export default Header;
