import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchInput from "./SearchInput";

export default function Navigation() {
    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 p-4">
            <h1 className="flex items-center justify-center sm:w-auto w-full font-black text-xl select-none">
                <span className="mr-2 p-2 rounded-lg font-bold text-sm text-white bg-blue-700">
                    Frontend + <FontAwesomeIcon icon={faReact} size="lg" /> 
                </span>
                Challenges
            </h1>
            <SearchInput className="sm:min-w-[250px] min-w-full" disabled />
        </nav>
    );
}