"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
          {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl">Full Stack Developer</span> */}
            <h1 className="text-xl md:text-4xl xl:text-6xl font-bold mb-6">
              Hello I'm <br />
              <span className="text-accent inline-block min-h-[60px]">
                <Typewriter
                  words={["Anunay Nayan", "Full Stack Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A results-driven Full Stack Developer with hands-on experience in
              React.js, JavaScript, React.js, Node.js and responsive design.
              Successfully built and optimized web applications, improving load
              times and user experience.
            </p>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Resume - Anunay Nayan.pdf"
                download="Resume - Anunay Nayan.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:-mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base 
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* profile pic  */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
