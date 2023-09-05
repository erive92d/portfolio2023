import { useState } from "react"
import AboutNew from "./About"
import Projects from "./Projects"
import Contact from "./Contacts"
import Resume from "./Resume"
export default function Home({ page }) {
    if (page === "about") {
        return <AboutNew />
    }

    if (page === "projects") {
        return <Projects />
    }
    if (page === "contacts") {
        return <Contact />
    }
    if (page === "resume") {
        return <Resume />
    }

}