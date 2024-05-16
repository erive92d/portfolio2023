import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function LinkButton({href, value}) {
    return <a className={` ${value === "Contact Me" ? "bg-custom-black p-2 text-sm rounded-lg": ""}`} href={href}>{value}</a>
}

const Navigation = () => {

    const links = [
        {
            value: "About me",
            href:"#about"
        },
        {
            value: "Skills",
            href:"#skills"
        }, {
            value: "Projects",
            href:"#projects"
        },
        {
            value: "Contact Me",
            href:"#contact"
        }
    ]

    return (
        <motion.div
        className=" navbar flex justify-between px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-gray-300 menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-52">
                    {links.map((link, index) => (
                        <li key={index}>
                            <LinkButton href={link.href} value={link.value} />
                        </li>
                    ))}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Deorren E.</a>
            </div>
    
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link, index) => (
                        <li key={index}>
                            <LinkButton href={link.href} value={link.value} />
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
   
};

export default Navigation;

