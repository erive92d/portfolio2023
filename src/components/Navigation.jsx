import Projects from "../pages/Projects"
import AboutNew from "../pages/About"

export default function Navigation({ handlePage, page }) {


    return (
        <div className="text-white border-r-2 p-1 flex flex-col justify-around h-80 lg:p-5">
            <button onClick={handlePage} className={page === "about" ? "underline underline-offset-8" : ""} name="about">About</button>
            <button onClick={handlePage} className={page === "projects" ? "underline underline-offset-8" : ""} name="projects">Projects</button>
            <button onClick={handlePage} className={page === "contacts" ? "underline underline-offset-8" : ""} name="contacts">Contact</button>
            <button onClick={handlePage} className={page === "resume" ? "underline underline-offset-8" : ""} name="resume">Resume</button>
        </div>
    )
}