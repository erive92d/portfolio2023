
import { SiTypescript } from 'react-icons/si'
import { IoLogoJavascript, IoLogoCss3, IoLogoReact } from 'react-icons/io5'
import { FaHtml5 } from 'react-icons/fa'
import { BiLogoMongodb } from 'react-icons/bi'
import { motion } from 'framer-motion'
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

  ]



  return (
    <div id="skills" className=" flex flex-col ">
      <h1 className="font-bold text-2xl w-full  text-center py-6 "><i className="fa-solid fa-screwdriver-wrench"></i> Skills </h1>
      <div className='flex flex-wrap justify-around p-3'>
        {items.map((item, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index} className={`flex flex-col glass ${item.color} bg-gray-700 rounded-full p-4 items-center justify-center w-1/4 m-3 lg:w-1/5 lg:p-10 hover:scale-110 duration-100 hover:shadow-xl hover:shadow-cyan-500`}>
            <p className='text-5xl'>{item.icon}</p>
            <p className='font-thin'>{item.title}</p>
          </motion.div>
        ))}
      </div>


      {/* <div className="flex flex-wrap p-2 justify-around">
          <div className=''>
            <FaHtml5 className='text-orange-500 text-5xl'/>
            <p className='text-center'>HTML</p>
          </div>
          <div>
            <IoLogoCss3 className='text-5xl text-blue-500'/>
            <p className='text-center'>CSS</p>
          </div>
          <div>
            <IoLogoJavascript className='text-5xl text-yellow-500'/>
            <p className='text-center'>Javascript</p>
          </div>
          <div>
            <SiTypescript className='text-5xl text-blue-500'/>
            <p className='text-center'>Typescript</p>
          </div>
          <div>
            <IoLogoReact className='text-5xl text-cyan-500'/>
            <p className='text-center'>React</p>
          </div>
          <div>
            <BiLogoMongodb className='text-5xl text-green-500'/>
            <p className='text-center'>MongoDB</p>
          </div>
        </div> */}

    </div>
  )
}
