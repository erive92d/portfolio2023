import projects from "../utils/projects"
import { motion } from "framer-motion"
import { fadeInAnimationVariants } from "../utils/helpers"
import PageContent from "../components/PageContent"
export default function Projects() {



    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
            id="projects">
            <PageContent header={"Projects"}>
            <div className="lg:w-3/4 w-96 mx-auto lg:flex lg:flex-col  lg:gap-8">
                {projects.map((project, index) => (
                    <motion.div key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className=" my-4 w-96 lg:w-full  ">
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 ">
                            <figure className="lg:w-1/2">
                                <img src={project.src} alt="pic" className="rounded-lg" />
                            </figure>
                            <div className="flex flex-col justify-center text-center lg:w-1/3 gap-8">
                                <h2 className="lg:text-3xl font-bold">{project.title}</h2>
                                <div className="space-y-4">
                                    <p className="text-sm">
                                        {project.description}
                                    </p>
                                    <div className="">
                                        <div className="text-sm italic">{project.tech}</div>
                                    </div>
                                    <div className="flex justify-end gap-2 py-2">
                                        <a className=" bg-bg-custom-cyan text-white btn-sm btn btn-ghost" href={project.link} target="__blank">Demo</a>
                                        <a href={project.git} target="__blank" className=" bg-bg-custom-cyan text-white btn-sm btn btn-ghost">Git</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            </PageContent>
            
        </motion.div>
    )
}