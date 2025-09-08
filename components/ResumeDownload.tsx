"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";


const ResumeDownload = () => {
    const handleDownload = () => {
        // Direct user to the resume file in public folder
        window.open("/Uzair-Resume.pdf", "_blank");
    };

    return (
            <MagicButton
                title="Download Resume"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses=""
                handleClick={handleDownload}

            />
         
    );
};

export default ResumeDownload;
