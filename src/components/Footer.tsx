"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const Footer = () => {
  return (
    <footer
    data-scroll-section
      className="relative bg-cover bg-no-repeat pt-16  bg-pink-400 "
      style={{ backgroundImage: "url('/assets/footer/bg.png')" }}
    >
      {/*OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="flex flex-col items-center justify-center gap-14 w-full">

      {/*LOGO START */}
      <div className="w-full flex flex-col items-center justify-center gap-14 z-10">
        <Link href={"/"} className="relative max-w-[120px] w-full h-[50px] ">
          <Image
            src={"/assets/logo.svg"}
            alt="footer app logo"
            className="pointer-events-none object-contain"
            fill
          />
        </Link>
      </div>
      {/*LOGO END */}

      {/*NAV START */}
      <nav className="relative  flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center text-white">
        {links?.map((link, index: number) => (
          <Link href={link?.href} key={index}
          className="uppercase text-white tracking-widest hover:text-accent transition-all text-sm sm:text-base"
          >
            {link?.name ?? ""}
          </Link>
        ))}
      </nav>
      {/*NAV END */}
      {/*SOCIAL MEDIA LINK START */}
      <ul className="relative flex items-center text-white text-xl gap-4 ">
          <Link 
          href="/"
          className="w-[54px] h-[54px] border
           border-white/[0.15] rounded-full flex items-center
            justify-center hover:text-accent transition-all cursor-pointer"
          
          >
            <FaFacebookF  />
          </Link>


          <Link 
          href="/"
          className="w-[54px] h-[54px] border
           border-white/[0.15] rounded-full flex items-center
            justify-center hover:text-accent transition-all cursor-pointer"
          
          >
            <FaInstagram  />
          </Link>

          <Link 
          href="/"
          className="w-[54px] h-[54px] border
           border-white/[0.15] rounded-full flex items-center
            justify-center hover:text-accent transition-all cursor-pointer"
          
          >
            <FaTwitter  />
          </Link>
          <Link 
          href="/"
          className="w-[54px] h-[54px] border
           border-white/[0.15] rounded-full flex items-center
            justify-center hover:text-accent transition-all cursor-pointer"
          
          >
            <FaYoutube  />
          </Link>

          


   
      </ul>
      {/*SOCIAL MEDIA LINK END */}


      {/*COPYRIGHT START */}
      <div
      className="relative border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6"
      >
        <p>&copy; copyright 2025 - Zenbrew. All rights reserved</p>

      </div>
      {/*COPYRIGHT END */}
      </div>

    </footer>
  );
};

export default Footer;

{
  /* <div className="">
<p>
     Crafted with passion and brewed fresh every day. Our café is dedicated to serving quality coffee, warm hospitality, and a space where everyone feels at home.
      We believe great coffee is more than a drink; it&apos;s a moment of comfort, connection, and creativity. From our carefully sourced beans to our freshly baked pastries, every detail is made with care.
      Your daily dose of handcrafted coffee, cozy ambience, and friendly service. Whether you&apos;re working, relaxing, or catching up with friends, we're here to make every visit memorable.
</p>
            </div> */
}
