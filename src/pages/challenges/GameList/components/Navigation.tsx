import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <nav className={`flex justify-between h-16`}>
            <ul className="flex gap-12 text-xl text-gray-400">
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="">Home</NavLink>
                </li>
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="">Apps</NavLink>
                </li>
                <li className="flex items-center font-medium border-b-4 border-solid border-gray-300 text-indigo-400">
                    <NavLink to="">Games</NavLink>
                </li>
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="">Music</NavLink>
                </li>
                <li className="flex items-center border-b-4 border-solid border-transparent">
                    <NavLink to="">Movies & TV</NavLink>
                </li>
            </ul>
            <div>
            </div>
        </nav>
    )
}