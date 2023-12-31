import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchInput from "./SearchInput";
import { SyntheticEvent, useEffect, useState } from "react";

interface NavigationProps {
    onSearch?: (searchValue: string) => void
}

export default function Navigation({
    onSearch,
}: NavigationProps) {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    })

    function handleWindowScroll() {
        setScrollTop(window.scrollY);
    }

    function handleSearchInput(ev: SyntheticEvent<HTMLInputElement>) {
        if (onSearch) {
            onSearch((ev.target as HTMLInputElement).value);
        }
    }

    return (
        <nav className={`sticky top-0 flex flex-wrap items-center justify-between gap-4 p-4 ${scrollTop > 0 ? 'bg-white shadow-xl' : ''} z-20`}>
            <h1 className="flex items-center justify-center sm:w-auto w-full font-black text-xl select-none">
                <span className="mr-2 p-2 rounded-lg font-bold text-sm text-white bg-blue-700">
                    Frontend + <FontAwesomeIcon icon={faReact} size="lg" /> 
                </span>
                Challenges
            </h1>
            <SearchInput className="sm:min-w-[250px] min-w-full" onInput={handleSearchInput} />
        </nav>
    );
}