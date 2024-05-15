import AboutNew from "./About";
import Contact from "./Contacts";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {



    return (
        <div className="min-h-screen flex flex-col ">
            <AboutNew />
             <Skills/>
             <Projects />
            <Contact/>  
        </div>
    )

}