/* eslint-disable react/no-unescaped-entities */
import family from "../utils/images/family.jpg"
import { motion } from "framer-motion"
export default function AboutNew() {

    return (
        <motion.div
            id="#about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            className="h-screen flex flex-col justify-center items-center text-center p-3 lg:space-x-20 lg:p-0 lg:flex lg:flex-row lg:text-xl ">
                <div className="lg:flex ">
                    <div className="w-full lg:w-1/2 p-4 flex justify-center">
                        <img src={family} className="rounded-full lg:w-3/5  w-1/2"></img>
                    </div>
                    <div className="p-3 lg:p-5 lg:text-lg lg:w-1/2 md:text-lg md:p-5 md:space-y-10  lg:space-y-10">
                        <div className="">
                            <h1 className="text-2xl font-bold">Deorren Erive</h1>
                            <p className="italic font-light">Full-Stack Web Developer</p>
                        </div>
                        <div className="p-2 lg:p-5  ">
                            <p className="italic font-light text-sm lg:text-xl">
                                Hello! My name is Deorren, and I'm a <span>Full-Stack Web Developer</span> based in San Francisco, Bay Area. I have a passion for developing dynamic and engaging web applications using the latest technologies and tools.
                                When I'm not coding, I enjoy staying active and spending time outdoors. I'm an avid basketball player and love to hit the court whenever I can. I also enjoy riding my mountain bike and exploring the beautiful trails in my area.
                                {/* But above all else, my family is the most important thing in my life. My wife and I have been married for 3 years, and we have a wonderful one-year-old son who keeps us on our toes. */}

                            </p>
                        </div>


                    </div>
           
            </div>

        </motion.div >
    )
}