import Projects from "../pages/Projects"
import AboutNew from "../pages/About"
import { motion } from "framer-motion"
import { useState } from "react";
import { useRef } from "react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollContainerRef = useRef(null);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const scrollToElement = () => {
        // Scroll to the scrollContainerRef's current value
        scrollContainerRef.current.scrollTo({
          top: 500, // Adjust this value to scroll to the desired position
          behavior: 'smooth', // Optional: Add smooth scrolling behavior
        });
      };
  
    return (
      <div className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-semibold">Logo</div>
          <button
            className="lg:hidden block text-gray-400 focus:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          <li className="mt-2 lg:mt-0">
            <a
                onClick={scrollToElement}
                name="about"
              href="#"
              className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
            >
              About
            </a>
          </li>
          <li className="mt-2 lg:mt-0">
            <a
            name="projects"
              href="#"
              className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
            >
              Projects
            </a>
          </li>
          <li className="mt-2 lg:mt-0">
            <a
                name="contacts"
              href="#"
              className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
            >
              Contacts
            </a>
          </li>
          <li className="mt-2 lg:mt-0">
            <a
            name="resume"
              href="#"
              className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navigation;





// export default function Navigation({ handlePage, page }) {


//     return (
//         <div>

//         </div>
//         <div className="text-white border-r-2 p-1 flex flex-col justify-around h-80 lg:p-5">
//             <button  onClick={handlePage} className={page === "about" ? "bg-cyan-500 rounded p-1" : ""} name="about">About</button>
//             <button  onClick={handlePage} className={page === "projects" ? "bg-cyan-500 rounded p-1" : ""} name="projects">Projects</button>
//             <button  onClick={handlePage} className={page === "contacts" ? "bg-cyan-500 rounded p-1" : ""} name="contacts">Contact</button>
//             <button  onClick={handlePage} className={page === "resume" ? "bg-cyan-500 rounded p-1" : ""} name="resume">Resume</button>
//         </div>
//     )
// }