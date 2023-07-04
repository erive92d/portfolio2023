import family from "../utils/images/family.jpg"

export default function About() {
    return (
        <div id="#about" className="md:flex text-gray-900 text-center p-6">

            <div className="w-full flex justify-center p-4">
                <img src={family} className="rounded-full lg:w-1/2  w-1/2 lg:h-1/2 border-4 border-white"></img>
            </div>
            <div className="p-3 text-white">
                <div className="p-2">
                    <h1 className="text-xl">Deorren Erive</h1>
                    <p className="italic font-light">Full-Stack Web Developer</p>
                </div>
                <div className="p-2 ">
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