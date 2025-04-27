"use client"

import AboutPage from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import HeroSection from "@/components/sections/herosection";
import WorkPage from "@/components/sections/work";
import { Pointer } from "@/components/ui/pointer";
import {motion, useMotionValue} from "motion/react"

export default function Home() {
  const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  return (
    <motion.main
    onMouseMove={(e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }}
    initial={{opacity:0, scale: 0.96}}
        animate={{opacity:1, scale : 1}}
        transition={{duration : 0.5,type : "spring", damping:10, stiffness:100}}
    >
      <Pointer mouseX={mouseX} mouseY={mouseY} />
          <HeroSection />
          <WorkPage />
          <AboutPage />
          <CTA />
          <Footer />
         </motion.main>
  )
}
