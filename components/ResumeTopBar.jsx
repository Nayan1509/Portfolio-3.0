"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaUser,
} from "react-icons/fa";

const navTabs = [
  { label: "Experience", icon: <FaBriefcase />, value: "experience" },
  { label: "Education", icon: <FaGraduationCap />, value: "education" },
  { label: "Skills", icon: <FaTools />, value: "skills" },
  { label: "Certificates", icon: <FaCertificate />, value: "certificates" },
  { label: "About Me", icon: <FaUser />, value: "about" },
];

const ResumeTopbar = ({ activeTab, setActiveTab }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const expanded = !isMobile && isHovered;

  return (
    <AnimatePresence>
      <motion.nav
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        initial={{ height: 60 }}
        animate={{ height: 60 }}
        className={`w-full bg-transparent text-white 
          flex items-center justify-center overflow-x-auto px-4 md:px-10 
          transition-all duration-300 rounded-xl mb-6
          ${expanded ? "gap-6" : "gap-2"}
        `}
      >
        {navTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.value)}
            className={`flex items-center gap-2 px-4 py-3 rounded-md text-sm transition-all
              ${
                activeTab === tab.value
                  ? "bg-accent text-black"
                  : "hover:bg-[#1c1c1f] hover:text-accent"
              }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: expanded ? 1 : 0,
                width: expanded ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden whitespace-nowrap"
            >
              {tab.label}
            </motion.span>
          </button>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};

export default ResumeTopbar;
