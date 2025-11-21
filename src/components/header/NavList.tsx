"use client"
import {motion,Variants} from 'framer-motion';
import Link from 'next/link';
import { JSX } from 'react';


const links = [
    {href:'/',name:'Home'},
    {href:'/',name:'Explore'},
    {href:'/',name:'About'},
    {href:'/',name:'Menu'},
    {href:'/',name:'Contact'},
];

const letterAnim: Variants = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i: Array<number>) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.60, 0, 0.20, 1],
        delay: i[0],
      },
    };
  },
  exit:(i)=>({
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.60, 0, 0.20, 1],
      delay: i[1],
    },
  }), 
};


interface NavListInterface{
    setNavActive:React.Dispatch<React.SetStateAction<boolean>>;

}

const NavList:React.FC<NavListInterface> = ({setNavActive})=>{

    const getLetter = (name:string)=>{
        const letters:Array<JSX.Element> = [];
        name.split('').forEach((letter,index)=>{
            letters.push(
            <motion.span 
            variants={letterAnim}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={[index*0.04,(name.length-index)*0.01]}
            key={index}>
            {letter}
            </motion.span>
            )
        })
        return letters;
    }



    return(
        <ul
         className='flex flex-col gap-8 font-primary
          text-3xl sm:text-4xl font-semibold text-accent items-center uppercase'
         >
        {
            links?.map((link,index:number)=>(
                <Link
                key={index}
                href={link.href}
                onClick={()=>setNavActive(false)}
                className="flex overflow-hidden hover:text-white transition-all"
                >
               {/* {link.name ?? "N/A"} */}
               {getLetter(link?.name)}
                </Link>
            ))
        }
        </ul>
    )
}
export default NavList;