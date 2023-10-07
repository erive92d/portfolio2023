import projects from "../utils/projects"
import { motion } from "framer-motion"
import { fadeInAnimationVariants } from "../utils/helpers"
import CarouselComp from "../components/Carousel"

export default function Projects() {



    return (
        <motion.div
            id="projects" className="flex flex-col items-start bg-gradient-to-b from-gray-400 to-gray-300">
            <h1 className="font-bold text-2xl w-full bg-green-400 rounded text-white text-center py-6 "><i className="fa-solid fa-screwdriver-wrench"></i> Projects </h1>
            <div className="lg:flex lg:flex-wrap">
                {projects && <CarouselComp projects={projects} />}

            </div>
        </motion.div>
    )
}