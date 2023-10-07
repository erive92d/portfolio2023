

const Navigation = () => {

    return (
        <div className="navbar flex justify-between bg-blue-400 text-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contacts</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Deorren</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contacts</a></li>

                </ul>
            </div>
        </div>
    )
    // return (
    //   <div className="bg-gray-800 p-4">
    //     <div className="flex items-center justify-between">
    //       <div className="text-white text-xl font-semibold">Logo</div>
    //       <button
    //         className="lg:hidden block text-gray-400 focus:text-white focus:outline-none"
    //         onClick={toggleMenu}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
    //       <li className="mt-2 lg:mt-0">
    //         <a
    //             onClick={scrollToElement}
    //             name="about"
    //           href="#"
    //           className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
    //         >
    //           About
    //         </a>
    //       </li>
    //       <li className="mt-2 lg:mt-0">
    //         <a
    //         name="projects"
    //           href="#"
    //           className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
    //         >
    //           Projects
    //         </a>
    //       </li>
    //       <li className="mt-2 lg:mt-0">
    //         <a
    //             name="contacts"
    //           href="#"
    //           className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
    //         >
    //           Contacts
    //         </a>
    //       </li>
    //       <li className="mt-2 lg:mt-0">
    //         <a
    //         name="resume"
    //           href="#"
    //           className="block text-white hover:text-gray-400 px-2 py-1 rounded transition duration-300"
    //         >
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // );
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