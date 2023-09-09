import AboutNew from "./About"
import Projects from "./Projects"
import Contact from "./Contacts"
import Skills from "./Skills"
export default function Home() {
    // if (page === "about") {
    //     return <AboutNew/>
    // }
    // if (page === "projects") {
    //     return <Projects />
    // }
    // if (page === "contacts") {
    //     return <Contact />
    // }
    // if (page === "resume") {
    //     return <Resume />
    // }

    return (
        <div className="flex flex-col space-y-10 lg:w-2/3 lg:mx-auto">
            <div>
                <AboutNew />
            </div>
            <div>
                <Skills/>
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
           
        </div>
    )

}