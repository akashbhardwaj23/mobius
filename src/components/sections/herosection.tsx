import Image from "next/image";
import Button from "../ui/button";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import {motion} from "motion/react"
import { LeftArrow } from "../svg/svg";

const description = "Custom-built resumes that match your goals, keywords, and recruiter expectations."

export default function HeroSection() {

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 10,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };



  return (
      <main className="max-w-4xl h-screen pt-20 mx-auto">
        <div className="absolute rounded-full bg-hover w-80 h-80 right-[-6rem] top-[-6rem] blur-2xl"></div>
        <div className="grid items-center grid-cols-2 text-primary-text">
          <div>
            <h2 className="font-sora text-5xl mb-4">
              Land job interviews
              <p>
                <span className="text-primary">10x</span> faster
              </p>
            </h2>
            <motion.h4
            style={{overflow : "hidden"}}
            variants={container}
            initial="hidden"
            animate="visible"
            className="text[20px] text-fade-white mb-4">
              {description.split("").map((l, i) => {
                return (
                  <motion.span
                  variants={child}
                  className="relative inline-block" key={i}>
                   {l === ' ' ? '\u00A0' : l}
                    {/* <motion.span className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"/> */}
                  </motion.span>
                )
              })}
            </motion.h4>
            <Button icons={<HiOutlineArrowSmRight />} className="bg-white text-primary">Get Started</Button>
          </div>

          <motion.div
          whileHover={{scale:1.1}}
          transition={{type:"spring", damping: 10, stiffness: 100}}
          className="flex justify-end relative">
            <Image src={"/book.png"} alt="book" width={260} height={300} 
            />
            <div className="flex justify-center items-center absolute bottom-[-2rem] right-[-2rem] w-20 h-20  border-2 border-primary-text rounded-full backdrop-blur-lg">
              <Image src={"/booklogo.png"} alt="booklogo" width={42} height={42} />

              <div className="absolute flex justify-center items-center h-8 w-8 bg-white rounded-full left-[-0.4rem] bottom-[-0.4rem]">
                {LeftArrow}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
  );
}
