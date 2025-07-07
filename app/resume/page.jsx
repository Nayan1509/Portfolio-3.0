"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiAxios,
  SiExpress,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import ResumeTopbar from "@/components/ResumeTopBar";

// about data
const about = {
  title: "About Me",
  description: "All about me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anunay Nayan",
    },
    {
      fieldName: "Phone",
      fieldValue: "+918797402184",
    },
    {
      fieldName: "Email",
      fieldValue: "anunayan123@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Here is an overview of my academic background",
  items: [
    {
      institute: "Global Institute of Technology, Jaipur",
      degree: "B.Tech in Computer Science Engineering",
      duration: "2019 - 2023",
    },
    {
      institute: "S.P.S Seminary, Saran",
      degree: "Higher Secondary Education",
      duration: "2019 Passout",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Here is an overview of my professional background",
  items: [
    {
      company: "Innobyte Services, Noida",
      position: "Web Developer",
      duration: "July 2024 - Aug 2024",
      description: "Developed a website for a kolkata based Guest House",
    },
    {
      company: "Thinker Tech, Jaipur",
      position: "Web Developer Intern",
      duration: "June 2023 - June 2024",
      description: "Led the development and design of a Dating Website",
    },
  ],
};

//Skills data
const skills = {
  title: "My Skills",
  description: "Here is a list of skills I posses",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiAxios />,
      name: "Axios",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
  ],
};

// certificates data
const certificates = {
  title: "My Certificates",
  description: "Courses and certifications I’ve completed",
  list: [
    {
      name: "Web Development",
      image: "/assets/certificates/web dev.png",
    },
    {
      name: "Salesforce",
      image: "/assets/certificates/salesforce.png",
    },
    {
      name: "Data Science",
      image: "/assets/certificates/forsk.png",
    },
    {
      name: "TCS",
      image: "/assets/certificates/tcs.jpg",
    },
    {
      name: "Machine Learning",
      image: "/assets/certificates/ml.jpg",
    },
    {
      name: "Python",
      image: "/assets/certificates/data sci.jpg",
    },
    {
      name: "JAVA",
      image: "/assets/certificates/java.jpg",
    },
  ],
};

const Resume = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh]  py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}>
          <ResumeTopbar activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience  */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] 
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <p className="text-white/60">{item.description}</p>
                          <div className="flex items-center gap-3">
                            <span
                              className="w-[6px] max-h-[6px] rounded-full
                            bg-accent"
                            ></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[68px]
                          text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span
                              className="w-[6px] max-h-[6px] rounded-full
                            bg-accent"
                            ></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 h-[400px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skilllist.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                              <div className="text-sm font-medium mt-2 text-white/80 group-hover:text-accent transition-all duration-300">
                                {skills.name}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* certificates  */}
            <TabsContent value="certificates" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{certificates.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {certificates.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[30px]">
                  {certificates.list.map((cert, index) => (
                    <li key={index}>
                      <div
                        onClick={() => setSelectedCertificate(cert)}
                        className="bg-[#232329] rounded-xl overflow-hidden 
              hover:scale-105 transition-transform duration-300 group cursor-pointer"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          width={400}
                          height={300}
                          className="object-cover w-full h-[100px] rounded-xl"
                        />
                        <div className="p-4 text-center">
                          <h4 className="text-white text-sm font-semibold">
                            {cert.name}
                          </h4>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Lightbox Modal */}
                {selectedCertificate && (
                  <div
                    onClick={() => setSelectedCertificate(null)}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
                  >
                    <div className="relative max-w-4xl w-full mx-4">
                      <Image
                        src={selectedCertificate.image}
                        alt={selectedCertificate.name}
                        width={1200}
                        height={800}
                        className="rounded-xl object-contain w-full max-h-[90vh] border border-white/20"
                      />
                      <p className="text-white text-center mt-4">
                        {selectedCertificate.name}
                      </p>
                      <button
                        className="absolute top-4 right-4 text-white bg-red-900 rounded-md p-1 text-3xl"
                        onClick={() => setSelectedCertificate(null)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* about  */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p> */}
                <ul
                  className="grid grid-cols-1 h-[400px] xl:grid-cols-2 gap-6 
                      mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex xl:flex-col items-center justify-center 
                          xl:justify-start gap-6 bg-[#232329] rounded-xl"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md font-bold">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
