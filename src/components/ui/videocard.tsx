import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";



export default function VideoCard(){
    return (
        <div className="rounded-4xl h-[23rem] w-80 bg-primary flex flex-col items-center pt-[2px]">
                <div className="flex justify-center items-center h-52 w-[316px] bg-primary-text rounded-[30px] mb-4">
                    <Image src={"/play.png"} alt="play" width={40} height={40} />
                </div>
                <h2 className="text-base text-primary-text px-4">
                Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
                </h2>

                <div className="flex justify-end w-full px-4">
                    <div className="flex justify-center items-center rounded-full bg-white h-12 w-12">
                    <CgArrowTopRight className="text-primary size-6" />
                    </div>
                </div>
        </div>
    )
}