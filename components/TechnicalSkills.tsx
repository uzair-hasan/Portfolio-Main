
"use client";
import React from "react";

const TechnicalSkills = () => {
const skills = [
  { name: "HTML", level: 85, color: "bg-[#6B21A8]" }, // Dark Purple
  { name: "CSS", level: 80, color: "bg-[#CBACF9]" }, // Light Purple
  { name: "JavaScript", level: 70, color: "bg-[#8b80c6]" }, // Soft Blue
  { name: "React.js", level: 70, color: "bg-[#c59aec]" }, // Muted Blue-Grey
  { name: "Next.js", level: 60, color: "bg-[#A78BFA]" }, // Medium Purple
  { name: "MongoDB", level: 55, color: "bg-[#6366F1]" }, // Strong Blue
  { name: "Express.js", level: 50, color: "bg-[#8a33ff]" }, // Dark Gray
  { name: "Node.js", level: 50, color: "bg-[#4C1D95]" }, // Deep Dark Purple
];



    return (
        <>



            <div className="rounded-lg bg-gradient-to-br shadow-lg w-full max-w-md mx-auto pb-10">
                <h1 className=" heading mb-6">
                    My Tech <span className="text-purple">Skills</span>
                </h1>

                {/* Grid Layout for Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="relative">
                            <p className="text-sm font-medium text-white">{skill.name}</p>
                            <div className="w-full h-3 bg-gray-300 rounded-md">
                                <div
                                    className={`${skill.color} h-3 rounded-md transition-all duration-500`}
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                            <p className="absolute right-0 top-0 text-sm text-purple">
                                {skill.level}%
                            </p>
                        </div>
                    ))}
                </div>

         
            </div>



        </>
    )
}

export default TechnicalSkills;