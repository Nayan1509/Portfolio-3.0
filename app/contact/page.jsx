"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+918797402184",
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "anunayan123@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Noida, India",
  },
];

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hn7e8ec",     
        "template_2i9uij7",    
        form.current,
        "tB1t73tTJ1T3xrZ0f"      
      )
      .then(
        (result) => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's Connect</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" type="text" placeholder="First Name" required />
                <Input name="lastName" type="text" placeholder="Last Name" />
                <Input name="email" type="email" placeholder="Email Address" required />
                <Input name="phone" type="text" placeholder="Phone Number" />
              </div>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Your message here......."
                required
              />

              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>

              {messageSent && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                  bg-[#27272c] text-accent rounded-md flex items-center 
                  justify-center"
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
