/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"


export default function AboutNew() {


    const biograpy = " Hello! My name is Deorren, and I'm a Full-Stack Web Developer based in San Francisco, Bay Area. I have a passion for developing dynamic and engaging web applications using the latest technologies and tools. When I'm not coding, I enjoy staying active and spending time outdoors. I'm an avid basketball player and love to hit the court whenever I can. I also enjoy riding my mountain bike and exploring the beautiful trails in my area."

    return (
        <motion.div
            id="#about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="min-h-screen  lg:w-3/4 lg:mx-auto flex flex-col justify-center items-center
            "
        >
            <div className="px-4 flex flex-col  gap-10 justify-around lg:items-center  ">
                <div className=" text-center">
                    <h1 className="text-3xl lg:text-7xl font-bold">
                        Deorren 
                        <span className="text-custom-black">
                            Erive
                        </span>
                    </h1>
                    <p className=" font-light">Web Developer</p>
                </div>
                <div className="lg:w-1/2 text-sm lg:text-base  text-custom-black font-bold">
                    {biograpy.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.01 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>

        </motion.div >
    )
}