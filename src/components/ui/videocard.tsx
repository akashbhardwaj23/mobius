import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import {motion} from "motion/react"



export default function VideoCard(){
    return (
        <motion.div
        initial={{opacity:0, scale:0.98, x:100}}
        whileInView={{opacity:1, scale:1, x:0}}
        transition={{type:"spring", damping:10, stiffness:200}}
        className="rounded-4xl h-[23rem] w-[17rem] bg-primary flex flex-col items-center pt-[2px]">
                <div className="flex justify-center items-center h-52 w-[16.7rem] bg-primary-text rounded-[30px] mb-4">
                    <Image src={"/play.png"} alt="play" width={40} height={40} />
                </div>
                <h2 className="text-base text-primary-text px-4">
                Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
                </h2>

                <div className="flex justify-end w-full px-4 cursor-pointer">
                    <motion.div
                    whileHover={{scale: 1.2}}
                    transition={{type:"spring", damping:10, stiffness:100}}
                    className="flex justify-center items-center rounded-full bg-white text-primary h-12 w-12 hover:bg-primary hover:text-primary-text">
                        <CgArrowTopRight className="size-6 hover:text-primary-text" />
                    </motion.div>
                </div>
        </motion.div>
    )
}