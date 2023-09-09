import { useState } from "react"
import AboutNew from "./About"
import Projects from "./Projects"
import Contact from "./Contacts"
import Resume from "./Resume"
export default function Home({ page }) {
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
        <div className="flex flex-col space-y-10">
            <div>
                <AboutNew />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Resume />
            </div>
        </div>
    )

}