import Image from "next/image";
import Button from "./button";
import { DownArrow } from "./svg/svg";



export default function Navbar(){
    return (
        <nav className="sticky top-0 p-2 max-w-[1500px] mx-auto font-dm-sans backdrop-blur-2xl">
            <div className="flex justify-between items-center p-4">
                <Image src={"/logo.png"} alt="logo" width={140} height={140} />
                <ul className="flex justify-center text-[#FEFEFE] items-center gap-8 font-medium font-dm-sans">
                    <li>
                        Home
                    </li>
                    <li>
                        AboutUs
                    </li>
                    <li>
                        Plans
                    </li>
                    <li>
                        Testimonials
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li className="flex justify-center items-center gap-2">
                        More {DownArrow}
                    </li>
                </ul>

               <Button >Get Started</Button>
            </div>

        </nav>
    )
}