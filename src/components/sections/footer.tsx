import { LogoSvg } from "../svg/svg";
import { FaLinkedin } from "react-icons/fa";
import {motion} from "motion/react"



export function Footer(){
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto">

            <div className="mb-8">
                {LogoSvg}
            </div>
            <hr className="w-64 text-[#BCBCBC]" />
            <div className="mt-10 grid grid-cols-9 text-sm text-primary font-semibold mb-16">
                <div className="col-span-5 flex justify-between gap-4">
                    <div>Address
                    <p className="max-w-48">1875 Mission St Ste 103 #450
                    San Francisco, CA 94103</p>
                    </div>
                    <div>Email
                        <p>finance@mobiusengine.ai</p>
                    </div>
                    <div>Telephone
                        <p>650-889-6026</p>
                    </div>
                </div>
                <div className="col-span-4 flex justify-end">
                    <div>Socials
                        <motion.p
                        whileHover={{scale : 1.2}}
                        transition={{type:"spring", damping:10, stiffness:100}}
                        ><FaLinkedin className="size-10" /></motion.p>
                    </div>
                </div>
            </div>            
            </div>

            <div className="bg-primary p-8">
                <div className="flex justify-between items-center px-4 text-primary-text">
                    <p>© 2023 Mobiusservices LLC</p>
                    <div className="flex justify-center items-center gap-8">
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>

                </div>
        </footer>
    )
}