import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CollapseComp from './Collapse';

// const projects = [
//   { id: 1, title: 'Project 1', description: 'Description 1' },
//   { id: 2, title: 'Project 2', description: 'Description 2' },
//   { id: 3, title: 'Project 3', description: 'Description 3' },
//   // Add more projects here
// ];

const CarouselComp = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(projects)
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex justify-center  relative flex-col items-center p-5">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="bg-gray-900 shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="space-x-3 text-lg flex items-center justify-end p-2">
                        <a href={projects[currentIndex].link} target="_blank" className=" text-md " rel="noreferrer">Live</a>

                        <a href={projects[currentIndex].git} target="_blank" className="  text-md " rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
                    </div>
                    <h2 className="text-xl font-semibold text-center py-3">{projects[currentIndex].title}</h2>

                    <img src={projects[currentIndex].src} alt="image" className='h-96 mx-auto rounded-lg p-5' />
                    <div className='text-center'>
                        <CollapseComp details={projects[currentIndex]} />
                    </div>

                </motion.div>
            </AnimatePresence>
            <div className='absolute flex justify-between w-96 opacity-75 lg:w-full'>
                <button
                    className=" text-white px-4 bg-gray-700 py-2 rounded-full hover:bg-gray-900"
                    onClick={prevProject}
                >
                    <i class="fa-solid fa-circle-arrow-left"></i>
                </button>
                <button
                    className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-900"
                    onClick={nextProject}
                >
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>

        </div>
    );
};

export default CarouselComp;