
export default function Resume() {
    return (
        <div
            className=""
            id="resume"
        >
            <div className="resume">
                <div className="space-y-6 flex flex-col items-end">
                    <h1 className="w-full rounded-l-xl text-white p-6 text-2xl font-bold text-center"><i class="fa-regular fa-file"></i>  Resume</h1>
                    <div className="space-y-2">
                        <ul className=" text-gray-300 p-2 list-disc pl-1 text-center">
                            <li className="mb-2">
                                Developed and maintained multiple websites and web applications
                                using HTML, CSS, Javascript, React, MongoDB, and MySQL.
                            </li>

                            <li className="mb-2">
                                Collaborated with designers and other developers to create
                                responsive, user-friendly interfaces.
                            </li>

                            <li className="mb-2">
                                Implemented back-end features and database management using
                                Node.js, Express.js, and other technologies.
                            </li>

                            <li className="mb-2">
                                Worked with APIs and integrated third-party libraries and
                                frameworks to enhance functionality
                            </li>

                            <li className="mb-2">
                                Participated in code reviews and contributed to team development
                                efforts
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="text-center p-3">

                    <a
                        href="https://docs.google.com/document/d/1b47lmc6IJvSm-Whg1XgtxfpzUxCXRqK4AjSOjXWGkNU/edit?usp=sharing"
                        
                        target="__blank"
                        className="bg-cyan-500 text-white w-1/3 text-l p-3 flex flex-col justify-center mx-auto rounded"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </div>
    );
}