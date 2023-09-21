import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navigation() {
    const [opened, setOpened] = useState(false);

    function handleMenuClick() {
        setOpened(prevOpened => !prevOpened);
    }

    return (
        <nav className={`${!opened ? 'h-16' : 'h-auto'} overflow-hidden`}>
            <button type="button" className="md:hidden p-4" title="Toggle navigation" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} size="xl" className="text-slate-400 hover:text-slate-600" />
            </button>
            <div className="flex md:flex-row flex-col justify-between gap-4 p-4">
                <ul className="flex md:flex-row flex-col md:gap-12 text-xl text-gray-400">
                    <li className="flex items-center md:border-b-4 md:border-solid md:border-transparent">
                        <NavLink to="" className="opacity-50 pointer-events-none">Home</NavLink>
                    </li>
                    <li className="flex items-center md:border-b-4 md:border-solid md:border-transparent">
                        <NavLink to="apps" className="opacity-50 pointer-events-none">Apps</NavLink>
                    </li>
                    <li className="flex items-center font-medium md:border-b-4 md:border-solid md:border-gray-300 text-indigo-400">
                        <NavLink to="">Games</NavLink>
                    </li>
                    <li className="flex items-center md:border-b-4 md:border-solid md:border-transparent">
                        <NavLink to="" className="opacity-50 pointer-events-none">Music</NavLink>
                    </li>
                    <li className="flex items-center md:border-b-4 md:border-solid md:border-transparent">
                        <NavLink to="" className="opacity-50 pointer-events-none">Movies & TV</NavLink>
                    </li>
                </ul>
                <div className="flex items-center">
                    <div className="flex items-center px-2 text-xl text-gray-400">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
                        <label htmlFor="search-input"></label>
                        <input type="text" id="search-input" placeholder="Search" className="w-40 p-2 outline-none placeholder:text-gray-400" />
                    </div>
                </div>
            </div>
        </nav>
    )
}