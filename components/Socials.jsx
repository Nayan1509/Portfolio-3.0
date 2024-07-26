import Link from "next/link"

import {FaGithub, FaLinkedin, } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

const Social = [
    {icon: <FaGithub/>, path: 'https://github.com/Nayan1509'},
    {icon: <FaLinkedin/>, path: 'https://linkedin.com/in/anunay-nayan-8aa9861b6'},
    {icon: <SiGmail/>, path: 'mailto:anunayan123@gmail.com'},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {Social.map((item, index) => {
        return <Link key={index} href={item.path} target="_blank" className={iconStyles}>
            {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Socials;
