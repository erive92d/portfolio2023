import projects from "../utils/projects"

export default function Projects() {
    console.log(projects)



    return (
        <div id="projects" className="flex flex-col items-end">
            <h1 className="text-2xl bg-yellow-600 w-2/3 rounded-l-xl text-white text-center py-6"><i class="fa-solid fa-screwdriver-wrench"></i> Works </h1>
            <div>
                {projects.map((project) => {
                    return (
                        <div className="bg-white my-2 space-y-6 flex rounded flex-col md:flex-row items-center">
                            <div className="flex w-full justify-between  p-2 text-gray-700">
                                <h1 className="text-xl text-gray-700 p-2 rounded italic">{project.title}</h1>
                                <div className="space-x-3 text-lg flex items-center">
                                    <a href={project.link} target="_blank" className=" text-gray-700 text-lg ">Live</a>

                                    <a href={project.git} target="_blank" className="  text-gray-700 text-lg " ><i class="fa-brands fa-github"></i></a>
                                </div>


                            </div>
                            <img className="w-100 h-30 p-2" src={project.src}></img>
                            <div className="p-4">
                                <p className="font-thin italic">{project.description}</p>
                            </div>
                            <p className="italic font-mono text-sm p-6">{project.tech}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}