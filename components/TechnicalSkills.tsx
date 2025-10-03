"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
];

const TechnicalSkills = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        My Tech <span className="text-purple">Stack</span>
      </h1>

      {/* Grid of skill cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 bg-gradient-to-br from-purple-900/40 to-purple-700/20 rounded-xl shadow-lg border border-purple-500/30 flex flex-col items-center justify-center space-y-2 hover:shadow-purple-500/50"
          >
            {skill.icon}
            <p className="text-white font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
