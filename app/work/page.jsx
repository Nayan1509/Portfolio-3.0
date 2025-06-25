"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack Developement",
    title: "TaskVerse - A full stack Task Management App",
    description:
      "Taskverse is a full-stack productivity web app that allows users to organize, manage, and track tasks with a clean UI, real-time sync, drag-and-drop functionality, and secure authentication. Built using the MERN stack and deployed on Vercel (Frontend) and Render (Backend).",
    stack: [
      { name: "HTML5" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDb" },
      { name: "Mongoose" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thumb4.jpg",
    github: "https://github.com/Nayan1509/Taskverse.git",
    demo: "https://taskverse-phi.vercel.app/",
  },
  {
    num: "02",
    category: "Front-End-Developement",
    title: "Car Rental Website",
    description:
      "Designed and Developed a responsive front-end UI using React.js that delivers seamless user experience.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React.js" },
    ],
    image: "/assets/work/thumb1.png",
    github:
      "https://github.com/Nayan1509/RevvedUp-Cars---A-Premium-Car-Rental-Website",
  },
  {
    num: "03",
    category: "Front-End-Developement",
    title: "Hotel Website",
    description:
      "Developed a Hotel Website using HTML, CSS, JavaScript complete with filtered search and room inventory display",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/Nayan1509/Hotel-Website.git",
  },
  {
    num: "04",
    category: "Front-End-Developement",
    title: "Bookshelf",
    description:
      "Created a bookshelf app, integrated with API, which searchs for book in real time, and user can add books of his/her choice to personnel bookshelf",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/Nayan1509/Personal-Bookshelf.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update state
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
           order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num  */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent 
              text-outline"
              >
                {project.num}
              </div>
              {/* project title  */}
              <h2
                className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.title}
              </h2>
              {/* project description  */}
              <p className="text-white/60">{project.description}</p>
              {/* stack  */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded-full bg-white/10 text-accent"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              {/* border  */}
              <div className="border border-white/20"></div>
              {/* buttons  */}
              <div className=" flex items-center gap-4">
                {/* live project  */}
                {project.demo && (
                  <Link href={project.demo} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full
          bg-white/5 flex justify-center items-center group"
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* live project  */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                  bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex 
                  justify-center items-center bg-pink-50"
                    >
                      {/* overlay  */}
                      <div
                        className="absolute top-0 bottom-0 w-full h-full 
                      bg-black/10 z-10"
                      ></div>
                      {/* image  */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="pic"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons  */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
              xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover
              text-primary text-[22px] w-[44px] h-[44px] flex justify-center
              items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
