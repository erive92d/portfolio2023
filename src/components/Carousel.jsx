/* eslint-disable react/prop-types */
// const projects = [
//   { id: 1, title: 'Project 1', description: 'Description 1' },
//   { id: 2, title: 'Project 2', description: 'Description 2' },
//   { id: 3, title: 'Project 3', description: 'Description 3' },
//   // Add more projects here
// ];

const CarouselComp = ({ projects }) => {

    return (
        <div className="carousel carousel-center p-4 space-x-4 ">
            {projects.map((project, index) => (
                <div className={`carousel-item w-3/4 relative`} key={index}>
                    <img src={project.src} className="rounded-box opacity-50" />
                    <div className="absolute bottom-0  ">
                        <h1 className="text-2xl bold bg-gray-300 p-2 text-white">{project.title}</h1>
                    </div>
                </div> 
            ))}

        </div>
     
        // <div className="flex justify-center   relative flex-col items-center p-5">
        //     <AnimatePresence mode="wait">
        //     {projects.map((project, index) => (
        //         <motion.div
        //             key={project.id}
        //             className={`bg-white shadow-lg p-6 rounded-md ${
        //             index === currentIndex ? 'opacity-100' : 'opacity-40'
        //             }`}
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             exit={{ opacity: 0 }}
        //         >
        //             <h2 className="text-xl font-semibold">{project.title}</h2>
        //             <p className="text-gray-600">{project.description}</p>
        //         </motion.div>
        //         ))}
        //     </AnimatePresence>
        //     <div className='absolute flex justify-between w-96 opacity-75 lg:w-full'>
        //         <button
        //             className=" text-white px-4 bg-gray-700 py-2 rounded-full hover:bg-gray-900"
        //             onClick={prevProject}
        //         >
        //             <i className="fa-solid fa-circle-arrow-left"></i>
        //         </button>
        //         <button
        //             className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-900"
        //             onClick={nextProject}
        //         >
        //             <i className="fa-solid fa-circle-arrow-right"></i>
        //         </button>
        //     </div>

        // </div>
    );
};

export default CarouselComp;