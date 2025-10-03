import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "./ui/TypeWriterEffect";
import { socialMedia } from "@/data";
import ResumeDownload from "./ResumeDownload";

const Hero = () => {
  const words = [
    {
      text: "Hii,",
    },
    {
      text: "I am",
    },
    {
      text: "Uzair Hasan",
    },
    {
      text: "a Full Stack",
    },
    {
      text: "Developer.",
      className: "text-purple dark:text-blue-500",
    },
  ];

  return (
    <div className=" pt-34">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      </div>

      {/* Gradient Code Starts Here */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Gradient Code Ends Here */}
      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl
                lg:max-w-[60vw] flex flex-col items-center justify-center
                "
        >
          <h2
            className="uppercase tracking-widest text-xs
                text-center max-w-80 text-blue-100
                "
          >
            {/* Dynamic Web Magic with Next.js */}
            <div className="">
              <ResumeDownload />
            </div>
          </h2>

          <div className="text-center text-[40px] md:text-5xl lg:text-5xl font-bold py-10">
            Transforming Concepts into Seamless{" "}
            <span className="text-purple">User Experiences</span>
          </div>

          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text2xl">
            {/* Hii, I&apos;m Uzair, a Next.js Developer based in India. */}

            <TypewriterEffectSmooth words={words} />
          </div>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
