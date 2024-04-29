import projects from "../utils/projects"
import { motion } from "framer-motion"
import { fadeInAnimationVariants } from "../utils/helpers"
export default function Projects() {



    return (
        <motion.div
            id="projects" className="min-h-screen flex flex-col lg:gap-14 items-center">
            <h1 className="font-bold text-2xl lg:text-4xl w-full rounded text-center py-6"><i className="fa-solid fa-screwdriver-wrench"></i> Projects </h1>
            <div className="lg:flex lg:flex-col lg:gap-8">
                {projects.map((project, index) => (
                    <motion.div key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className=" my-4 w-96 lg:w-full ">
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-8   ">
                            <figure className="lg:w-1/3">
                                <img src={project.src} alt="pic" className=" h-96 w-96 lg:w-full lg:h-80" />
                            </figure>
                            <div className="flex flex-col lg:w-1/2 gap-8">
                                <h2 className="text-3xl">{project.title}</h2>
                                <div className="space-y-4">
                                    <p className="">
                                        {project.description}
                                    </p>
                                    <div className="card-actions">
                                        <div className="text-sm italic">{project.tech}</div>
                                    </div>
                                    <div className="flex justify-end gap-2 py-2">
                                        <a href={project.link} target="__blank" className="btn text-white btn-sm btn-outline">Demo</a>
                                        <a href={project.git} target="__blank" className="btn text-white btn-sm btn-outline">Git</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    )
}