import type { Metadata } from "next";
// import Cormorant_upright, 
import {Open_Sans,Cormorant_Upright} from 'next/font/google'


import "./globals.css";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight:["300","400","500","600","700"],
  variable: "--font-cormorant-upright",
});


const open_sans = Open_Sans({
  subsets: ["latin"],
  weight:["300","400","500","600","700"],
  variable: "--font-open-sans",
});



export const metadata: Metadata = {
  title: "Zenbrew Premium Coffee",
  description:
  "Zenbrew Premium Coffee delivers rich, handcrafted blends and a smooth café experience. Discover fresh roasts, curated flavors, and a modern coffee lifestyle designed to inspire every sip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant_upright.variable} ${open_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
