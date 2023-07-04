import projects from "../utils/projects"

export default function Projects() {
    console.log(projects)



    return (
        <div id="projects" className="flex flex-col items-start">
            <h1 className="font-bold text-2xl border-b border-b-cyan-500 w-full rounded text-white text-center py-6"><i class="fa-solid fa-screwdriver-wrench"></i> Works </h1>
            <div>
                {projects.map((project) => {
                    return (
                        <div className="text-gray-300 mx-5 border-b border-b-cyan-500 my-2 space-y-1 flex rounded flex-col md:flex-row items-center">
                            <div className="flex w-full justify-between  p-2 text-white">
                                <h1 className="text-xl text-cyan-500 p-2 rounded italic">{project.title}</h1>
                                <div className="space-x-3 text-lg flex items-center">
                                    <a href={project.link} target="_blank" className=" text-cyan-500 text-lg ">Live</a>

                                    <a href={project.git} target="_blank" className="  text-cyan-500 text-lg " ><i class="fa-brands fa-github"></i></a>
                                </div>


                            </div>
                            <img className="w-1/2 p-2" src={project.src}></img>
                            <div className="p-3">
                                <p className="font-thin italic text-sm">{project.description}</p>
                            </div>
                            <p className="italic font-mono text-sm p-3">{project.tech}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}