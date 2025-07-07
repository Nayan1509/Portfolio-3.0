"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

const Social = [
  { icon: <FaGithub />, path: "https://github.com/Nayan1509", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    path: "https://linkedin.com/in/anunay-nayan-8aa9861b6",
    label: "LinkedIn",
  },
  { icon: <SiGmail />, path: "mailto:anunayan123@gmail.com", label: "Gmail" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className={containerStyles}>
        {Social.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link href={item.path} target="_blank" className={iconStyles}>
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Socials;
