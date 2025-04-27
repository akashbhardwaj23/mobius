import Image from "next/image";
import Button from "../ui/button";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import {motion} from "motion/react"

export default function HeroSection() {
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
            <h4 className="text[20px] text-fade-white mb-4">
              Custom-built resumes that match your goals, keywords, and
              recruiter expectations.
            </h4>
            <Button icons={<HiOutlineArrowSmRight />} className="bg-white text-primary">Get Started</Button>
          </div>

          <motion.div
          whileHover={{scale:1.1}}
          transition={{type:"spring", damping: 10, stiffness: 100}}
          className="flex justify-end">
            <Image src={"/book.png"} alt="book" width={260} height={300} 
            
            />
          </motion.div>
        </div>
      </main>
  );
}
