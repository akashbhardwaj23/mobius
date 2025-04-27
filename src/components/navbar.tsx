"use client"

import Image from "next/image";
import Button from "./ui/button";
import { DownArrow } from "./svg/svg";
import {motion} from "motion/react"
import { useEffect, useRef, useState } from "react";



const Links = [
    {
        title : "Home",
        href : ""
    },
    {
        title : "About us",
        href : ""
    },
    {
        title : "Plans",
        href : ""
    },
    {
        title : "Testimonials",
        href : ""
    },
    {
        title : "Privacy Policy",
        href : ""
    },
    {
        title : "More",
        href : "",
        icon : DownArrow
    },
    

]



export default function Navbar(){
    const [isLightBackground, setIsLightBackground] = useState(true); // Start with a default
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkBackgroundLightness = () => {
      if (!navRef.current) return;

      const navRect = navRef.current?.getBoundingClientRect();
      const elementUnderNavbar = document.elementFromPoint(
        navRect.left + navRect.width / 2,
        navRect.bottom + 1
      );

      // Get background color (or default to white)
      const bgColor = elementUnderNavbar
        ? window.getComputedStyle(elementUnderNavbar).backgroundColor
        : "rgb(255, 255, 255)";

      // Simple "lightness" check
      const rgbValues = bgColor.substring(4, bgColor.length - 1)
                          .replace(/ /g, '')
                          .split(',');
      const lightness = (parseInt(rgbValues[0]) + parseInt(rgbValues[1]) + parseInt(rgbValues[2])) / 3;

      setIsLightBackground(lightness > 64); 
    };

    window.addEventListener("scroll", checkBackgroundLightness);
    checkBackgroundLightness(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkBackgroundLightness);
    };
  }, []);



    return (
        <motion.nav
        initial={{opacity:0, scale: 0.96}}
        animate={{opacity:1, scale : 1}}
        transition={{type: "spring", damping: 10, stiffness:100}}
        ref={navRef}
        className={`sticky z-10 rounded-b-2xl top-0 p-2 max-w-[1500px] mx-auto font-dm-sans backdrop-blur-2xl backdrop-brightness-100 ${isLightBackground ? "text-black" : "text-primary-text"}`}>
            
            <div className="z-50 flex justify-between items-center p-4">
                <Image src={"/logo.png"} alt="logo" width={140} height={140} />
                <ul className="flex justify-center items-center gap-12 font-medium cursor-pointer font-dm-sans">
                    {Links.map((link, index) => (
                        <NavbarContainer key={index} link={link} />
                    ))}
                </ul>

               <Button className="z-50 text-sm bg-white text-primary hover:bg-hover hover:text-primary-text">Get Started</Button>
            </div>

        </motion.nav>
    )
}





function NavbarContainer({
    link ,

}: {
    link : {
        title : string,
        href : string
        icon? : React.ReactNode
    };
}){
    
    return <motion.li
    whileHover={{scale : 1.28}}
    transition={{type : "spring", damping: 10, stiffness:100}}
    className="flex justify-center items-center gap-2">
    {link.title} {link.icon ?? link.icon}
</motion.li>
}



// {/* <li>
//                         Home
//                     </li>
//                     <li>
//                         AboutUs
//                     </li>
//                     <li>
//                         Plans
//                     </li>
//                     <li>
//                         Testimonials
//                     </li>
//                     <li>
//                         Privacy Policy
//                     </li>
//                     <li className="flex justify-center items-center gap-2">
//                         More {DownArrow}
//                     </li> */}