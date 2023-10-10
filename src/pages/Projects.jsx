import projects from "../utils/projects"
import { motion } from "framer-motion"
import CollapseComp from "../components/Collapse"
import { fadeInAnimationVariants } from "../utils/helpers"
export default function Projects() {



    return (
        <motion.div
            id="projects" className="flex flex-col items-center">
            <h1 className="font-bold text-2xl w-full rounded text-center py-6 "><i className="fa-solid fa-screwdriver-wrench"></i> Projects </h1>
            <div className="lg:flex lg:flex-wrap">
                {projects.map((project, index) => (
                    <motion.div key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className="card w-96 lg:w-2/4 ">
                        <div className="lg:m-2 my-2 rounded-xl bg-gradient-to-b from-gray-800 to-transparent">
                            <figure className="px-10 pt-10">
                                <img src={project.src} alt="pic" className="rounded-xl h-96 w-96" />
                            </figure>
                            <div className="flex flex-col items-center">
                                <h2 className="card-title">{project.title}</h2>
                                <CollapseComp details={project} />
                            </div>
                        </div>


                    </motion.div>
                ))}
            </div>

        </motion.div>
    )
}