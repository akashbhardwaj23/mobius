import Button from "../button";
import { Admin, checksvg, HandShake, Star } from "../svg/svg";
import VideoCard from "../ui/videocard";

const content = [
  "Curated jobs from 1M+ listings, refreshed every 48 hours",
  "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
  "Need more? Add extra apps for just $1.5 each",
  "Your own dedicated application analyst",
  "Personalized with up to 10 filters & 5 job titles",
];

export default function CTA() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-20">
        <h2 className="text-3xl text-primary mb-16">
          What our client have to say
        </h2>
        <div className="flex justify-center gap-10 mb-12">
          {/* <VideoCard />
                <VideoCard />
                <VideoCard /> */}
        </div>

        <div className="flex justify-center items-center gap-10 mb-20">
          <Button className="border-2  border-primary">
            More customer testimonials ↗
          </Button>
          <Button className="bg-hover">Get Started →</Button>
        </div>

        <div className="flex flex-col rounded-4xl bg-fade-white p-8 mb-20">
          <h2 className="text-[#022183] text-2xl font-medium mb-8">
            Why Choose Us?
          </h2>
          <div className="flex justify-center items-center gap-4">
            <Card
              svg={HandShake}
              title="Tried, Tested, Trusted"
              content="Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back."
            />
            <Card
              svg={Admin}
              title="Real People, Real Help"
              content="A hands-on team that actually cares — guiding you through every twist in your career path."
            />
            <Card
              svg={Star}
              title="Beat the Line"
              content="We search, shortlist, and apply for you, so your name shows up first — every single day."
            />
            {/* <Card /> */}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl text-primary mb-16">
            Job Application Service Plans
          </h2>
          <div className="mb-8">
            <CtaCard title={"April Promo"} price={"35"} content={content} />
          </div>
          <CtaCardAdvance />
        </div>
        <hr className="text-[#BCBCBC]" />
        <div className="mt-10 mb-20">
          <div className="mb-16">
            <h2 className="text-3xl text-primary">
              Resume Building & Coaching
            </h2>
            <h4 className="text-sm text-primary max-w-xl">
              Let’s talk about where you’re headed — and how your resume can get
              you there.{" "}
              <p className="font-semibold">Schedule a call to get started.</p>
            </h4>
          </div>
         <div className="flex justify-center items-center">
         <CtaCard title={"April Promo"} price={"35"} content={content} />
         </div>
        </div>


       <ContactCard />


      </div>
    </main>
  );
}

function Card({
  svg,
  title,
  content,
}: {
  svg: JSX.Element;
  title: string;
  content: string;
}) {
  return (
    <div className="p-4 rounded-3xl border-2 border-[#022183] w-60">
      <div className="mb-8">{svg}</div>
      <h3 className="text-sm font-semibold text-hover mb-4">{title}</h3>
      <h4 className="text-xs font-semibold text-hover">{content}</h4>
    </div>
  );
}

function CtaCard({
  svg = true,
  content,
  price,
  tag = false,
  title,
}: {
  svg?: boolean;
  title: string;
  tag?: boolean;
  price: string;
  content: string[];
}) {
  return (
    <div className="p-4 rounded-3xl border-2 border-primary w-60">
      <div className="mb-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-primary mb-2">{title}</h2>
          {tag ?? <Tag />}
        </div>
        <h3 className="text-primary font-semibold">
          <span className="text-4xl">${price}</span>/week
        </h3>
      </div>

      <hr className="text-[#BCBCBC]" />

      <div className="mt-4 text-xs font-semibold text-primary mb-8">
        <ul className="flex flex-col gap-2">
          {content.map((mycontent, index) => (
            <li className="grid grid-cols-9" key={index}>
              <div className="flex justify-center p-1 col-span-1">
                {checksvg}
              </div>
              <div className="col-span-8">{mycontent}</div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button className="text-xs bg-primary">Get Started →</Button>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="flex justify-center items-center px-2 border border-primary rounded-3xl">
      Popular
    </div>
  );
}

function CtaCardAdvance() {
  return (
    <div className="p-6 rounded-3xl bg-primary text-primary-text">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl">Advance</h2>
          <p className="text-xs font-semibold">
            Top-tier support for serious job hunters:
          </p>
        </div>
        <h3 className="font-semibold">
          <span className="text-4xl">$150</span>/week
        </h3>
      </div>
      <hr className="bg-[#BCBCBC]" />

      <div className="flex justify-between items-center mt-8">
        <div>Everything in Plus</div>
        <div>
          <Button>Get Started →</Button>
        </div>
      </div>
    </div>
  );
}





function ContactCard(){
    return (
        <div className="rounded-3xl bg-primary p-8 py-16 flex justify-between items-center text-primary-text">
            <h3 className="max-w-32 uppercase">STILL have
            doubts?</h3>
            <h2 className="text-5xl">Contact us</h2>
            <svg width="45" height="45" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="55" cy="55" r="55" fill="#FEFEFE"/>
<path d="M34.4725 57.635V53.0925H67.765L50.975 37.2225L54.0225 34.1175L74.7225 54.0125V56.5425L54.0225 76.495L50.9175 73.3325L67.5925 57.635H34.4725Z" fill="#0649E7"/>
</svg>

        </div>
    )
}