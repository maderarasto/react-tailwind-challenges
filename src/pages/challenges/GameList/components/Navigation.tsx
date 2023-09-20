import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <nav className={`flex justify-between h-16`}>
            <ul className="flex gap-12 text-xl text-gray-400">
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="" className="opacity-50 pointer-events-none">Home</NavLink>
                </li>
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="apps" className="opacity-50 pointer-events-none">Apps</NavLink>
                </li>
                <li className="flex items-center font-medium border-b-4 border-solid border-gray-300 text-indigo-400">
                    <NavLink to="">Games</NavLink>
                </li>
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="" className="opacity-50 pointer-events-none">Music</NavLink>
                </li>
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="" className="opacity-50 pointer-events-none">Movies & TV</NavLink>
                </li>
            </ul>
            <div className="flex items-center">
                <div className="px-2 text-xl text-gray-400">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
                    <label htmlFor="search-input"></label>
                    <input type="text" id="search-input" placeholder="Search" className="w-40 p-2 outline-none placeholder:text-gray-400" />
                </div>
            </div>
        </nav>
    )
}