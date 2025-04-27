import Button from "../ui/button";
import { Admin, checksvg, HandShake, Star } from "../svg/svg";
import VideoCard from "../ui/videocard";
import { motion } from "motion/react";
import React from "react";

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
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>

        <div className="flex justify-center items-center gap-10 mb-20">
          <Button className="text-primary border-2 border-primary">
            More customer testimonials ↗
          </Button>
          <Button className="bg-primary text-primary-text ">
            Get Started →
          </Button>
        </div>

        <div className="flex flex-col rounded-3xl bg-fade-white p-10 mb-20">
          <h2 className="text-[#022183] text-2xl font-medium mb-8">
            Why Choose Us?
          </h2>
          <div className="flex justify-center items-center gap-16">
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
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl text-primary mb-16">
            Job Application Service Plans
          </h2>
          <div className="flex items-center gap-8 mb-8">
            <CtaCard title={"April Promo"} price={"35"} content={content} />
            <CtaCard title={"Starter"} price={"50"} content={content} />
            <CtaCard title={"Plus"} price={"100"} content={content} />
          </div>
          <CtaCardAdvance />
        </div>
        <hr className="text-[#BCBCBC]" />
        <div className="mt-12 mb-20">
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
          <div className="flex justify-center items-center gap-8">
            <CtaResumeCard
              title={"Resume Rebuild"}
              price={"1000"}
              content={content}
              description="Crafted for senior to VP-level professionals ready for their next big step."
            />
            <CtaResumeCard
              title={"Interview Prep"}
              price={"500"}
              description="Two sessions to sharpen your story, confidence, and clarity — fast."
              content={content}
            />
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
  svg: React.JSX.Element;
  title: string;
  content: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-4 rounded-3xl border-2 border-[#022183] w-60"
    >
      <div className="mb-8">{svg}</div>
      <h3 className="text-sm font-semibold text-hover mb-4">{title}</h3>
      <h4 className="text-xs font-semibold text-hover">{content}</h4>
    </motion.div>
  );
}

function CtaCard({
  content,
  price,
  tag = false,
  title,
}: {
  title: string;
  tag?: boolean;
  price: string;
  content: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{scale : 1.05, boxShadow : "5px 5px"}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      layoutId="ctacard"
      className="p-4 rounded-3xl border-2 border-primary w-60"
    >
      <div className="mb-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-primary mb-4">{title}</h2>
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
        <Button className="text-xs text-primary-text bg-primary">
          Get Started →
        </Button>
      </div>
    </motion.div>
  );
}

function CtaResumeCard({
  content,
  price,
  description,
  title,
}: {
  title: string;
  price: string;
  description?: string;
  content: string[];
}) {
  return (
    <motion.div layoutId="resumecard" 
    whileHover={{scale : 1.05,boxShadow : "5px 5px"}}
    transition={{type : "spring", damping:10, stiffness:100}}
    className="p-4 rounded-3xl border-2 border-primary w-60">
      <div className="mb-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-primary">{title}</h2>
        </div>

        {description && (
          <h4 className="text-[9px] font-semibold text-primary mb-4">
            {description}
          </h4>
        )}

        <h3 className="text-primary font-semibold">
          <span className="text-4xl">${price}</span>One Time
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
        <Button className="text-xs text-primary-text bg-primary">
          Get Started →
        </Button>
      </div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{scale : 1.05,boxShadow : "5px 5px"}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-6 rounded-3xl bg-primary text-primary-text"
    >
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
      <hr className="bg-[#BCBCBC] w-64" />

      <div className="grid grid-cols-5 justify-between items-center mt-8">
        <ul className="col-span-3 text-sm ">
          <li className="flex items-center gap-1">
            {checksvg}
            Everything in Plus
          </li>
          <li className="flex items-center gap-1">
            {checksvg}
            Custom Resumes & Cover Letters
          </li>
          <li className="flex items-center gap-1">
            {checksvg}
            20 fully customized applications/week
          </li>
          <li className="flex items-center gap-1">
            {checksvg}
            Help with complex job searches
          </li>
          <li className="flex items-center gap-1">
            {checksvg}
            Access to senior resume experts, Founder & Exec Coaches
          </li>
        </ul>
        <div className="col-span-2 flex justify-end items-end">
          <Button className="bg-primary-text text-primary">
            Get Started →
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{scale : 1.05,boxShadow : "5px 5px"}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="rounded-3xl bg-primary p-8 py-16 flex justify-between items-center text-primary-text"
    >
      <h3 className="max-w-32 uppercase">STILL have doubts?</h3>
      <h2 className="text-5xl">Contact us</h2>
      <motion.svg
      whileHover={{scale:1.2}}
      transition={{type:"spring", damping:10, stiffness:100}}
        width="45"
        height="45"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"cursor-pointer"}
      >
        <circle cx="55" cy="55" r="55" fill="#FEFEFE" />
        <path
          d="M34.4725 57.635V53.0925H67.765L50.975 37.2225L54.0225 34.1175L74.7225 54.0125V56.5425L54.0225 76.495L50.9175 73.3325L67.5925 57.635H34.4725Z"
          fill="#0649E7"
        />
      </motion.svg>
    </motion.div>
  );
}
