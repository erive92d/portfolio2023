import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (

        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-10">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-white"><i class="fa-regular fa-gem"></i> </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </a>

                                <a
                                    href="#projects"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </a>
                                <a
                                    href="#resume"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Add additional elements here */}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="block h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={`${isOpen ? 'hidden' : 'block'}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={`${isOpen ? 'block' : 'hidden'}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <a
                        href="#about"
                        className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                        <i class="fa-solid fa-house"></i> Home
                    </a>

                    <a
                        href="#projects"
                        className="mt-1 block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                        <i class="fa-solid fa-screwdriver-wrench"></i> Projects
                    </a>
                    <a
                        href="#contact"
                        className="mt-1 block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                        <i class="fa-regular fa-paper-plane"></i> Contact
                    </a>
                    <a
                        href="#resume"
                        className="mt-1 block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                        <i class="fa-regular fa-file"></i> Resume
                    </a>
                </div>
            </div>
        </nav >

    );
};





