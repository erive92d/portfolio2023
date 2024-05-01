
import { SiTypescript } from 'react-icons/si'
import { IoLogoJavascript, IoLogoCss3, IoLogoReact } from 'react-icons/io5'
import { FaHtml5 } from 'react-icons/fa'
import { BiLogoMongodb } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";

import { fadeInAnimationVariants } from '../utils/helpers'
export default function Skills() {

  const items = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
      color: 'text-orange-500'
    },
    {
      icon: <IoLogoCss3 />,
      title: "CSS",
      color: 'text-blue-500'
    },
    {
      icon: <IoLogoJavascript />,
      title: "JS",
      color: 'text-yellow-400'
    },
    {
      icon: <SiTypescript />,
      title: "TS",
      color: 'text-blue-500'
    },
    {
      icon: <IoLogoReact />,
      title: "React",
      color: 'text-cyan-500'
    },
    {
      icon: <BiLogoMongodb />,
      title: "MongoDB",
      color: 'text-green-500'
    },
    {
      icon: <TbBrandNextjs />,
      title: "NextJS",
      color: "text-black"
    },
    {
      icon: <BiLogoPostgresql />,
      title: "Postgres",
      color: "text-blue-900"
    },
    {
      icon: <SiPrisma />,
      title: "Prisma",
      color: "text-gray-200"
    }

  ]



  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl w-full lg:text-4xl text-center py-6 "><i className="fa-solid fa-screwdriver-wrench"></i> Skills </h1>
      <div className='flex flex-wrap justify-center'>
        {items.map((item, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index} className={`w-1/3 flex flex-col glass ${item.color} bg-gray-700  p-4 items-center justify-center m-3 lg:w-1/5 lg:p-10 hover:scale-110 duration-100 hover:shadow-xl hover:shadow-cyan-500`}>
            <p className='text-5xl'>{item.icon}</p>
            <p className='font-thin'>{item.title}</p>
          </motion.div>
        ))}
      </div>



    </div>
  )
}
