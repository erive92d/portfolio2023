/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
export default function AboutNew() {

    return (
        <motion.div
            id="#about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            className="min-h-screen flex flex-col justify-center items-center
             bg-gradient-to-b from-20% to-50%  from-cyan-700 to-black"

        >
            <div className="px-4 flex flex-col lg:flex-row gap-10 justify-around lg:items-center  ">
                <div className="lg:w-1/4">
                    <h1 className="text-4xl font-bold">Deorren Erive</h1>
                    <p className="italic font-light">Full-Stack Web Developer</p>
                </div>
                <div className="lg:w-1/3 ">
                    <p className="font-thin">
                        Hello! My name is Deorren, and I'm a <span>Full-Stack Web Developer</span> based in San Francisco, Bay Area. I have a passion for developing dynamic and engaging web applications using the latest technologies and tools.
                        When I'm not coding, I enjoy staying active and spending time outdoors. I'm an avid basketball player and love to hit the court whenever I can. I also enjoy riding my mountain bike and exploring the beautiful trails in my area.
                        {/* But above all else, my family is the most important thing in my life. My wife and I have been married for 3 years, and we have a wonderful one-year-old son who keeps us on our toes. */}

                    </p>
                </div>
            </div>

        </motion.div >
    )
}