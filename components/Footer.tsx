import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { SignupFormDemo } from "./Form";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log("socialMedia details", socialMedia);
  return (
    <>
      <footer className="w-full pt-20 pb-10 " id="contact">
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                    <img
                        src="/footer-grid.svg"
                        alt="grid"
                        className='w-full h-full opacity-50'
                    />
                </div> */}

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to <span className="text-purple"> collaborate?</span> Let's{" "}
            <span className="text-purple"> connect!</span>{" "}
          </h1>
          {/* <p className='text-white-200 md:mt-10 my-5 text-center'>
                        Reach out to me!
                    </p> */}

          {/* <a href="mailto:0309uzair@gmail.com">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position='right'
                            otherClasses=''
                        />
                    </a> */}

          {/* here will be FORM */}
          <div className="mt-5">
            <SignupFormDemo />
          </div>
        </div>

        {/* copyright section */}

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            {" "}
            © {currentYear} All Rights Reserved
          </p>

          <p className="font-bold">
            {" "}
            Design by -{" "}
            <span className="text-purple font-mono">Uzair Hasan</span>{" "}
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.link} // Dynamically set the link
                target="_blank" // Open the link in a new tab
                rel="noopener noreferrer" // Ensure security for external links
                className="w-10 h-10 cursor-pointer flex justify-center
               items-center backdrop-filter backdrop-blur-lg saturate-180
               bg-opacity-75 bg-black-200 rounded-lg border border-y-black-300"
              >
               
                <Image
                  src={profile.img}
                  alt="social icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
