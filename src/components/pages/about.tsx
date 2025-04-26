import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-hover">
      <div className="max-w-4xl mx-auto h-screen py-20">
        <h1 className="text-3xl text-primary-text mb-16">About us</h1>
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center gap-20 mb-20">
            <Image src={"/img1.png"} alt="img" width={150} height={400} className="backdrop-blur-2xl" />
            <h4 className="text-sm">
              Ashwin is the founder of mobiusengine.ai. He is an accomplished
              senior executive with over 20 years of experience in cloud
              infrastructure and financial services. With over 2 decades of
              experience at Google and JP Morgan, Ashwin held various product
              and GTM roles. Ashwin is an MBA holder from Yale University. ​
              Ashwin's vision with Mobius is to give job seekers a significant
              advantage in securing the roles of their dreams.
            </h4>
          </div>
          <div className="flex justify-between items-center gap-20 mb-10">
            <Image src={"/img2.png"} alt="img" width={150} height={400} className="backdrop-blur-2xl" />
            <h4 className="text-xs">
            Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. 
            <br />
            <br />
With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
            </h4>
          </div>
        </div>
        <h4 className="text-xs mx-82 mb-4">Learn more about our Board of Advisors​ ↗</h4>
        <h4 className="text-xs mx-82">Follow us on our Linkedin page ↗</h4>
      </div>
    </main>
  );
}
