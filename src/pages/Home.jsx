import AboutNew from "./About"
import Projects from "./Projects"
import Contact from "./Contacts"
import Skills from "./Skills"
export default function Home() {


    return (
        <div className="flex flex-col space-y-10">

            <AboutNew />
            <Skills />
            <Projects />
            <Contact />

        </div>
    )

}