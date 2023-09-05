import projects from "../utils/projects"

export default function Projects() {



    return (
        <div id="projects" className="flex flex-col items-start">
            <h1 className="font-bold text-2xl border-b border-b-cyan-500 w-full rounded text-white text-center py-6 "><i class="fa-solid fa-screwdriver-wrench"></i> Projects </h1>
            <div>
                {projects.map((project) => {
                    return (
                        <div className="text-gray-300 mx-5 border-b border-b-cyan-500 my-2 space-y-1 flex rounded flex-col  items-between lg:flex-col lg:py-10">
                            <div className="flex w-full justify-between  p-2 text-white">
                                <h1 className="text-lg text-cyan-500 p-2 rounded italic lg:text-2xl">{project.title}</h1>
                                <div className="space-x-3 text-lg flex items-center">
                                    <a href={project.link} target="_blank" className=" text-cyan-500 text-m ">Live</a>

                                    <a href={project.git} target="_blank" className="  text-cyan-500 text-m " ><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">

                                <img className="w-2/3 p-2 rounded-xl lg:h-80 md:h-60 lg:w-1/2" src={project.src}></img>
                                <div className="p-3 text-center lg:space-y-10 lg:w-1/2">
                                    <p className="font-thin italic text-sm lg:text-lg">{project.description}</p>
                                    <p className="italic font-mono text-sm p-3">{project.tech}</p>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}