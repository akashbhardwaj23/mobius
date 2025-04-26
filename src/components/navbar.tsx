import Image from "next/image";
import { HiOutlineArrowSmRight } from "react-icons/hi"
import Button from "./button";



export default function Navbar(){
    return (
        <nav className="sticky top-0 p-4 max-w-[1500px] mx-auto font-dm-sans">
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
                    <li>
                        More
                    </li>
                </ul>

               <Button >Get Started</Button>
            </div>

        </nav>
    )
}