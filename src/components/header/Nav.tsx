"use client"


import React, { useEffect, useRef } from "react";
import {motion,Variants} from 'framer-motion'
import NavList from "./NavList";


const heightAnimation:Variants = {
    initial:{
        height:0,
    },
    open:{
        height:"85vh",
        transition:{
            duration:1,
            ease:[0.75,0,0.23,1]},
            //ease: [x1, y1, x2, y2]
        },
     close:{
        height:0,
        transition:{
            duration:1,
            ease:[0.75,0,0.23,1]},
     }   
    }


    interface NavInterface{
        setNavActive:React.Dispatch<React.SetStateAction<boolean>>;

    }
const Nav:React.FC<NavInterface> = ({setNavActive})=>{
  
    const navRef = useRef<HTMLElement | null>(null);


    useEffect(()=>{

  function handleClickOutside(event: MouseEvent) {

    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNavActive(false); // close nav
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
},[]);



    return(
        <motion.nav
        variants={heightAnimation}
        ref={navRef}
        initial="initial"
        animate="open"
        exit="close"
         className="bg-primary overflow-hidden
          absolute z-[50] -top-full w-full  
          ">
            <div
             className="screenPadding h-full w-full mx-auto
               flex 
              items-center justify-center pt-[40px]"

             >
<NavList
setNavActive={setNavActive}
/>
            </div>
        </motion.nav>
    )
}


export default Nav;