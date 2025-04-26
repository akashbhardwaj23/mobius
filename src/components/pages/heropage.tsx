import Image from "next/image";
import Button from "../button";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default function HeroPage() {
  return (
    <main className="max-w-4xl h-[450px] mt-32 mx-auto bg-gradient-to-r from-0% to-40%">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="font-sora text-5xl mb-4">
            Land job interviews 
            <p><span className="text-primary">10x</span> faster</p>
          </h2>
          <h4 className="text[20px] text-fade-white mb-4">
            Custom-built resumes that match your goals, keywords, and recruiter
            expectations.
          </h4>
          <Button icons={<HiOutlineArrowSmRight />}>Get Started</Button>
        </div>

        <div className="flex justify-end">
          <Image src={"/book.png"} alt="book" width={260} height={300} />
        </div>
      </div>
    </main>
  );
}
