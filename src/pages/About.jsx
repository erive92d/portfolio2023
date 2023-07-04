import family from "../utils/images/family.jpg"

export default function About() {
    return (
        <div id="#about" className="md:flex md:flex-col text-gray-900 text-center p-6 lg:space-x-20 lg:flex lg:flex-row">

            <div className="w-full lg:w-1/3 p-4 flex justify-center">
                <img src={family} className="rounded-full lg:w-full  w-1/2 border-4 border-white"></img>
            </div>
            <div className="p-3 lg:p-5 lg:text-lg lg:w-1/2 md:text-lg md:p-5 md:space-y-10 text-gray-300 lg:space-y-10">
                <div className="">
                    <h1 className="text-2xl font-bold">Deorren Erive</h1>
                    <p className="italic font-light">Full-Stack Web Developer</p>
                </div>
                <div className="p-2 lg:p-5  ">
                    <p className="italic font-light text-md">
                        Hello! My name is Deorren, and I'm a <span className="text-cyan-500">Full-Stack Web Developer</span> based in San Francisco, Bay Area. I have a passion for developing dynamic and engaging web applications using the latest technologies and tools.
                        When I'm not coding, I enjoy staying active and spending time outdoors. I'm an avid basketball player and love to hit the court whenever I can. I also enjoy riding my mountain bike and exploring the beautiful trails in my area.
                        But above all else, my family is the most important thing in my life. My wife and I have been married for 3 years, and we have a wonderful one-year-old son who keeps us on our toes.

                    </p>
                </div>

            </div>

        </div >
    )
}